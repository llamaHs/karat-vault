import { useEffect, useReducer, useState } from "react";
import styles from "./SellForm.module.css";
import { BsExclamationCircle } from "react-icons/bs";
import { IoChevronDownOutline, IoChevronUp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";
import FormRow from "./FormRow";
import { useCurrency } from "../contexts/CurrencyContext";
import { useGoldPrice } from "../hooks/useGoldPrice";
import { useCreateProduct } from "../hooks/useCreateProduct";
import { uploadProductImage } from "../api/products";
import { useAuth } from "../contexts/AuthContext";

const guidelines = [
  {
    id: "g1",
    guide:
      "We recommend writing the TITLE by combining the metal color or gemstone with the jewelry type. (Examples: Yellow Gold Eternity Ring, Gemstone Bar Bracelet)",
  },
  {
    id: "g2",
    guide:
      "The DESCRIPTION must include the size and condition of the jewelry, and excessive promotional language should be avoided.",
  },
  {
    id: "g3",
    guide:
      "The minimum STARTING PRICE is calculated by combining the current gold market value with a portion of the original purchase price, adjusted according to the item's condition. Karat Vault reserves the right to request supporting documentation or re-evaluate the listing if the declared purchase price or the stated item condition appears inconsistent with the item's actual value or condition.",
  },
  {
    id: "g4",
    guide:
      "MATERIAL describes the main type of the item (solid gold or gemstone jewelry), while GOLD PURITY refers to the karat of the gold used to determine its value and pricing.",
  },
  {
    id: "g5",
    guide:
      "Please upload a clear, well-lit image. Edited or filtered images that distort the actual condition are not permitted.",
  },
  {
    id: "g6",
    guide:
      "Any visible scratches, resizing, repairs, or alterations must be clearly disclosed in the description.",
  },
  {
    id: "g7",
    guide:
      "All information provided must be accurate and truthful. Misrepresentation may result in listing removal or account restriction.",
  },
];

const agreements = [
  {
    id: "a1",
    agreement:
      "I agree that the starting price cannot be changed once the auction is listed.",
  },
  {
    id: "a2",
    agreement:
      "I agree that if the item remains unsold by the auction end date, Karat Vault may return the item or extend the selling period after consultation.",
  },
  {
    id: "a3",
    agreement:
      "I agree that the item is consigned to Karat Vault and that an 8% commission will be deducted from the final sale price.",
  },
];

const initialState = {
  uploadedImage: null,
  preview: null,
  itemTitle: "",
  category: "ring",
  material: "14k",
  condition: "new",
  description: "",
  goldPurity: "14k",
  weight: "",
  goldPrice: "",
  purchasePrice: "",
  startingPrice: "",
  dueDate: new Date().toISOString().slice(0, 10),
};

function reducer(state, action) {
  switch (action.type) {
    case "uploadImage":
      return { ...state, uploadedImage: action.payload };

    case "showPreview":
      return { ...state, preview: action.payload };

    case "deleteImage":
      return { ...state, uploadedImage: action.payload };

    case "deletePreview":
      return { ...state, preview: action.payload };

    case "updateItemTitle":
      return { ...state, itemTitle: action.payload };

    case "updateCategory":
      return { ...state, category: action.payload };

    case "updateMaterial":
      return { ...state, material: action.payload };

    case "updateCondition":
      return { ...state, condition: action.payload };

    case "updateDescription":
      return { ...state, description: action.payload };

    case "changePurity":
      return { ...state, goldPurity: action.payload };

    case "changeWeight":
      return { ...state, weight: action.payload };

    case "updatePurchasePrice":
      return { ...state, purchasePrice: action.payload };

    case "updateGoldPrice":
      return { ...state, goldPrice: action.payload };

    case "clearGoldPrice":
      return { ...state, goldPrice: "", startingPrice: "" };

    case "updateStartingPrice":
      return { ...state, startingPrice: action.payload };

    case "updateDueDate":
      return { ...state, dueDate: action.payload };

    case "resetForm":
      return initialState;

    default:
      throw new Error("");
  }
}

const PURCHASE_PRICE_RATE = {
  new: 0.7,
  "very good": 0.6,
  good: 0.5,
  "slightly scratched": 0.45,
  scratched: 0.4,
};

const initialAgreements = {
  a1: false,
  a2: false,
  a3: false,
};

function SellForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const { user } = useAuth();
  const { currency, currencySymbol } = useCurrency();
  const { data } = useGoldPrice();

  const goldPrice = data?.price;
  const goldPriceAt = data?.updatedAt;

  const today = new Date().toISOString().slice(0, 10);

  const { mutate: createProduct, isPending } = useCreateProduct();

  const [formError, setFormError] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(5);

  const [checkedAgreements, setCheckedAgreements] = useState(initialAgreements);

  function handleGuideOpen() {
    setIsGuideOpen((open) => !open);
  }

  function handleUploadImage(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    dispatch({ type: "uploadImage", payload: file });

    e.target.value = ""; // resetting file input DOM (not state)
  }

  function handleDeleteImage() {
    dispatch({ type: "deleteImage", payload: null });
    dispatch({ type: "deletePreview", payload: null });
  }

  function handleReset() {
    dispatch({ type: "resetForm" });
    setFormError("");
    setCheckedAgreements(initialAgreements);
  }

  function calculateGoldPrice() {
    if (!goldPrice || !state.weight) {
      dispatch({ type: "clearGoldPrice" });
      return;
    }

    const goldPricePerGram = goldPrice / 31.1035;

    let goldPriceForSell;

    if (state.goldPurity === "14k") {
      goldPriceForSell = goldPricePerGram * 0.585 * Number(state.weight);
    } else if (state.goldPurity === "18k") {
      goldPriceForSell = goldPricePerGram * 0.75 * Number(state.weight);
    }

    if (goldPriceForSell === undefined) {
      dispatch({ type: "clearGoldPrice" });
      return;
    }

    dispatch({
      type: "updateGoldPrice",
      payload: goldPriceForSell,
    });
  }

  function calculateStartingPrice() {
    if (!state.goldPrice || !state.purchasePrice) return;

    const purchasePriceRate = PURCHASE_PRICE_RATE[state.condition];

    const startingPrice =
      Number(state.goldPrice) + Number(state.purchasePrice) * purchasePriceRate;

    dispatch({
      type: "updateStartingPrice",
      payload: Math.round(startingPrice),
    });
  }

  function handleAgreementChange(id) {
    setCheckedAgreements((current) => ({ ...current, [id]: !current[id] }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setFormError("");

    const hasUncheckedAgreement = Object.values(checkedAgreements).some(
      (isChecked) => !isChecked
    );

    if (hasUncheckedAgreement) {
      setFormError("Please agree to all terms before listing the item.");
      return;
    }

    if (!state.uploadedImage) {
      setFormError("Please upload an item image");
      return;
    }

    if (
      !state.itemTitle.trim() ||
      !state.description.trim() ||
      !state.weight ||
      !state.purchasePrice ||
      !state.startingPrice ||
      !state.dueDate
    ) {
      setFormError("Please complete all required fields.");
      return;
    }

    if (Number(state.weight) <= 0 || Number(state.purchasePrice) <= 0) {
      setFormError("Weight and purchase price must be greater than zero.");
      return;
    }

    if (!user) {
      setFormError("You must be logged in to list an item.");
      return;
    }

    const imageUrl = await uploadProductImage(state.uploadedImage).catch(
      (error) => {
        setFormError(error.message);
        return null;
      }
    );

    if (!imageUrl) return;

    const newProduct = {
      image: imageUrl,
      name: state.itemTitle,
      category: state.category,
      material: state.material,
      condition: state.condition,
      description: state.description,

      sellerId: user.id,

      askingPrice: Number(state.startingPrice),
      currentBid: Number(state.startingPrice),

      currency,

      highestBidderId: null,

      listedAt: today,
      dueDate: state.dueDate,

      isForSale: true,
      offerCount: 0,

      weight: Number(state.weight),
    };

    createProduct(newProduct, {
      onSuccess: () => {
        console.log("4. product insert success");

        setSecondsLeft(5);
        setIsSuccessModalOpen(true);
      },
      onError: (error) => {
        setFormError(error.message);
      },
    });
  }

  function handleCloseModal() {
    dispatch({ type: "resetForm" });
    setCheckedAgreements(initialAgreements);
    setFormError("");
    setIsSuccessModalOpen(false);
    setSecondsLeft(5);
  }

  useEffect(() => {
    if (!state.uploadedImage) {
      dispatch({ type: "deletePreview", payload: null });
      return;
    }

    const url = URL.createObjectURL(state.uploadedImage);
    dispatch({ type: "showPreview", payload: url });

    return () => URL.revokeObjectURL(url);
  }, [state.uploadedImage]);

  useEffect(() => {
    calculateGoldPrice();
  }, [state.weight, state.goldPurity, goldPrice]);

  useEffect(() => {
    calculateStartingPrice();
  }, [state.goldPrice, state.purchasePrice, state.condition]);

  useEffect(() => {
    if (!isSuccessModalOpen) return;

    const countdownId = setInterval(() => {
      setSecondsLeft((seconds) => seconds - 1);
    }, 1000);

    const closeId = setTimeout(() => {
      dispatch({ type: "resetForm" });
      setCheckedAgreements(initialAgreements);
      setFormError("");
      setIsSuccessModalOpen(false);
      setSecondsLeft(5);
    }, 5000);

    return () => {
      clearInterval(countdownId);
      clearTimeout(closeId);
    };
  }, [isSuccessModalOpen]);

  return (
    <div className={styles.section}>
      <div className={styles.guideContainer}>
        <div className={styles.guideTitleContainer} onClick={handleGuideOpen}>
          <BsExclamationCircle
            className={`${styles.guideIconEx} ${
              isGuideOpen ? styles.open : ""
            }`}
          />
          <p className={styles.guideTitle}>Seller Guidelines</p>
          {isGuideOpen ? (
            <IoChevronUp className={styles.guideIconCh} />
          ) : (
            <IoChevronDownOutline className={styles.guideIconCh} />
          )}
        </div>

        <div
          className={`${styles.guideDetailContainer} ${
            isGuideOpen ? styles.open : ""
          }`}
        >
          {guidelines.map((g) => (
            <div className={styles.guideWrapper} key={g.id}>
              <FaCheck className={styles.guideIconCheck} />
              <p className={styles.guideText}>{g.guide}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.imageContainer}>
            {state.uploadedImage ? (
              <>
                <img
                  className={styles.previewImage}
                  src={state.preview}
                  alt="Item preview"
                />
                <button
                  type="button"
                  className={styles.deleteButton}
                  onClick={handleDeleteImage}
                >
                  <TiDelete className={styles.deleteIcon} />
                </button>
              </>
            ) : (
              <label className={styles.imageUpload}>
                <CiCirclePlus className={styles.imageUploadIcon} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUploadImage}
                  hidden
                />
              </label>
            )}
          </div>

          <div className={styles.stateContainer}>
            <FormRow label="Item Title" htmlFor="title">
              <div className={styles.titleInputWrapper}>
                <input
                  className={styles.title}
                  id="title"
                  type="text"
                  maxLength={35}
                  placeholder="Gold color/Gemstone + Type (e.g. Yellow Gold Eternity Ring)"
                  value={state.itemTitle}
                  onChange={(e) =>
                    dispatch({
                      type: "updateItemTitle",
                      payload: e.target.value,
                    })
                  }
                />

                <span className={styles.titleCount}>
                  {state.itemTitle.length} / 35
                </span>
              </div>
            </FormRow>

            <div className={styles.formRowContainer}>
              <FormRow label="Category" htmlFor="category">
                <select
                  className={styles.category}
                  id="category"
                  value={state.category}
                  onChange={(e) =>
                    dispatch({
                      type: "updateCategory",
                      payload: e.target.value,
                    })
                  }
                >
                  <option value={"ring"}>RING</option>
                  <option value={"necklace"}>NECKLACE</option>
                  <option value={"earrings"}>EARRINGS</option>
                  <option value={"bracelet"}>BRACELET</option>
                </select>
              </FormRow>

              <FormRow label="Material" htmlFor="material">
                <select
                  className={styles.material}
                  id="material"
                  value={state.material}
                  onChange={(e) =>
                    dispatch({
                      type: "updateMaterial",
                      payload: e.target.value,
                    })
                  }
                >
                  <option value={"14k"}>14K</option>
                  <option value={"18k"}>18K</option>
                  <option value={"gemstone"}>GEMSTONE</option>
                </select>
              </FormRow>
            </div>

            <FormRow label="Condition" htmlFor="condition">
              <select
                className={styles.condition}
                id="condition"
                value={state.condition}
                onChange={(e) =>
                  dispatch({ type: "updateCondition", payload: e.target.value })
                }
              >
                <option value={"new"}>NEW</option>
                <option value={"very good"}>VERY GOOD</option>
                <option value={"good"}>GOOD</option>
                <option value={"slightly scratched"}>SLIGHTLY SCRATCHED</option>
                <option value={"scratched"}>SCRATCHED</option>
              </select>
            </FormRow>

            <FormRow label="Description" htmlFor="description">
              <textarea
                className={styles.description}
                id="description"
                rows={5}
                placeholder="Describe the item condition, size, wear, and any details buyers should know."
                value={state.description}
                onChange={(e) =>
                  dispatch({
                    type: "updateDescription",
                    payload: e.target.value,
                  })
                }
              />
            </FormRow>

            <div className={styles.formRowContainer}>
              <FormRow label="Gold Purity" htmlFor="purity">
                <select
                  className={styles.purity}
                  id="purity"
                  value={state.goldPurity}
                  onChange={(e) =>
                    dispatch({ type: "changePurity", payload: e.target.value })
                  }
                >
                  <option value={"14k"}>14K</option>
                  <option value={"18k"}>18K</option>
                </select>
              </FormRow>

              <FormRow label="Weight (g)" htmlFor="weight">
                <input
                  className={styles.weight}
                  id="weight"
                  type="number"
                  value={state.weight}
                  onChange={(e) =>
                    dispatch({
                      type: "changeWeight",
                      payload: e.target.value,
                    })
                  }
                />
              </FormRow>
            </div>
          </div>

          <div className={styles.priceContainer}>
            <div className={styles.formRowContainer}>
              <FormRow label="Gold Price (g)" htmlFor="goldPrice">
                <div className={styles.childrenWrapper}>
                  <span className={styles.currency}>{currencySymbol}</span>
                  <input
                    className={styles.goldPrice}
                    id="goldPrice"
                    type="text"
                    readOnly
                    value={state.goldPrice ? state.goldPrice.toFixed(2) : ""}
                  />
                </div>
              </FormRow>

              <FormRow label="Purchase Price" htmlFor="purchasePrice">
                <div className={styles.childrenWrapper}>
                  <span className={styles.currency}>{currencySymbol}</span>
                  <input
                    className={styles.purchasePrice}
                    id="purchasePrice"
                    type="number"
                    step="1"
                    min={0}
                    value={state.purchasePrice}
                    onChange={(e) =>
                      dispatch({
                        type: "updatePurchasePrice",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
              </FormRow>
            </div>

            {state.goldPrice && goldPriceAt && (
              <div className={styles.goldPriceDateRow}>
                <p className={styles.goldPriceDate}>
                  Updated:{" "}
                  {new Date(goldPriceAt).toLocaleString(undefined, {
                    hour: "2-digit",
                    minute: "2-digit",
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </p>
              </div>
            )}

            <div className={styles.formRowContainer}>
              <FormRow label="Starting Price" htmlFor="startingPrice">
                <div className={styles.childrenWrapper}>
                  <span className={styles.currency}>{currencySymbol}</span>
                  <input
                    className={styles.startingPrice}
                    id="startingPrice"
                    type="number"
                    step="1"
                    value={state.startingPrice || ""}
                    readOnly
                  />
                </div>
              </FormRow>

              <FormRow label="Auction Ends" htmlFor="dueDate">
                <div className={styles.childrenWrapper}>
                  <input
                    className={styles.dueDate}
                    id="dueDate"
                    type="date"
                    min={today}
                    value={state.dueDate}
                    onChange={(e) =>
                      dispatch({
                        type: "updateDueDate",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
              </FormRow>
            </div>
          </div>

          <div className={styles.agreementContainer}>
            {agreements.map((a) => (
              <div className={styles.agreementWrapper} key={a.id}>
                <input
                  type="checkbox"
                  id={`agreement-${a.id}`}
                  className={styles.agreement}
                  checked={checkedAgreements[a.id]}
                  onChange={() => handleAgreementChange(a.id)}
                />
                <label htmlFor={`agreement-${a.id}`}>{a.agreement}</label>
              </div>
            ))}
          </div>

          {formError && (
            <div className={styles.formErrorWrapper}>
              <div className={styles.formError} role="alert">
                <BsExclamationCircle className={styles.formErrorIcon} />
                <p>{formError}</p>
              </div>
            </div>
          )}

          <div className={styles.buttonContainer}>
            <button
              type="button"
              className={styles.resetButton}
              onClick={handleReset}
            >
              RESET
            </button>
            <button
              type="submit"
              className={styles.listButton}
              disabled={isPending}
            >
              {isPending ? "LISTING..." : "LIST ITEM"}
            </button>
          </div>
        </form>
      </div>

      {isSuccessModalOpen && (
        <div
          className={styles.modalOverlay}
          role="presentation"
          onMouseDown={handleCloseModal}
        >
          <div
            className={styles.successModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-modal-title"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className={styles.successIconWrapper}>
              <FaCheck className={styles.successIcon} />
            </div>

            <h2 className={styles.successModalTitle} id="success-modal-title">
              Item Listed Successfully
            </h2>

            <p className={styles.successModalText}>
              Your item has been successfully added to the auction.
            </p>

            <p className={styles.countdownText}>
              This window will close in{" "}
              <strong>{Math.max(secondsLeft, 0)}</strong> seconds.
            </p>

            <button
              type="button"
              className={styles.modalCloseButton}
              onClick={handleCloseModal}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SellForm;
