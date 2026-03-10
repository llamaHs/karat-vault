import { useEffect, useReducer, useState } from "react";
import styles from "./SellForm.module.css";
import { BsExclamationCircle } from "react-icons/bs";
import { IoChevronDownOutline, IoChevronUp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";
import FormRow from "./FormRow";

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
      "The minimum STARTING PRICE is calculated by combining half of the original purchase price with the current gold market value. We may request supporting documentation if the declared purchase price appears significantly higher than the actual value.",
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
  weight: null,
  goldPrice: null,
  purchasePrice: null,
  startingPrice: null,
  dueDate: "",
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

    case "resetForm":
      return initialState;

    default:
      throw new Error("");
  }
}

function SellForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const today = new Date().toISOString().slice(0, 10);

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

  function handleReset(e) {
    dispatch({ type: "resetForm" });
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
        <form className={styles.form}>
          <div className={styles.imageContainer}>
            {state.uploadedImage ? (
              <>
                <img className={styles.previewImage} src={state.preview} />
                <button
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
              <input
                className={styles.title}
                id="title"
                type="text"
                placeholder="Gold color/Gemstone + Type (e.g. Yellow Gold Eternity Ring)"
              />
            </FormRow>

            <div className={styles.formRowContainer}>
              <FormRow label="Category" htmlFor="category">
                <select className={styles.category} id="category">
                  <option value={"ring"}>RING</option>
                  <option value={"necklace"}>NECKLACE</option>
                  <option value={"earrings"}>EARRINGS</option>
                  <option value={"bracelet"}>BRACELET</option>
                </select>
              </FormRow>

              <FormRow label="Material" htmlFor="material">
                <select className={styles.material} id="material">
                  <option value={"14k"}>14K</option>
                  <option value={"18k"}>18K</option>
                  <option value={"gemstone"}>GEMSTONE</option>
                </select>
              </FormRow>
            </div>

            <FormRow label="Condition" htmlFor="condition">
              <select className={styles.condition} id="condition">
                <option value={"new"}>NEW</option>
                <option value={"very-good"}>VERY GOOD</option>
                <option value={"slightly-scratched"}>SLIGHTLY SCRATCHED</option>
                <option value={"scratched"}>SCRATCHED</option>
              </select>
            </FormRow>

            <FormRow label="Description" htmlFor="description">
              <textarea
                className={styles.description}
                id="description"
                rows={5}
                placeholder="Describe the item condition, size, wear, and any details buyers should know."
              />
            </FormRow>

            <div className={styles.formRowContainer}>
              <FormRow label="Gold Purity" htmlFor="purity">
                <select className={styles.purity} id="purity">
                  <option value={"14k"}>14K</option>
                  <option value={"18k"}>18K</option>
                </select>
              </FormRow>

              <FormRow label="Weight (g)" htmlFor="weight">
                <input className={styles.weight} id="weight" type="number" />
              </FormRow>
            </div>
          </div>

          <div className={styles.priceContainer}>
            <div className={styles.formRowContainer}>
              <FormRow label="Gold Price (g)" htmlFor="goldPrice">
                <div className={styles.childrenWrapper}>
                  <span className={styles.currency}>$</span>
                  <input
                    className={styles.goldPrice}
                    id="goldPrice"
                    type="text"
                    readOnly
                  />
                </div>
              </FormRow>

              <FormRow label="Purchase Price" htmlFor="purchasePrice">
                <div className={styles.childrenWrapper}>
                  <span className={styles.currency}>$</span>
                  <input
                    className={styles.purchasePrice}
                    id="purchasePrice"
                    type="number"
                    step="1"
                    min={0}
                  />
                </div>
              </FormRow>
            </div>

            <div className={styles.formRowContainer}>
              <FormRow label="Starting Price" htmlFor="startingPrice">
                <div className={styles.childrenWrapper}>
                  <span className={styles.currency}>$</span>
                  <input
                    className={styles.startingPrice}
                    id="startingPrice"
                    type="number"
                    step="1"
                    placeholder="1234"
                  />
                </div>
              </FormRow>

              <FormRow label="Auction Ends" htmlFor="dueDate">
                <div className={styles.childrenWrapper}>
                  <input
                    className={styles.dueDate}
                    id="dueDate"
                    type="date"
                    defaultValue={today}
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
                />
                <label htmlFor={`agreement-${a.id}`}>{a.agreement}</label>
              </div>
            ))}
          </div>

          <div className={styles.buttonContainer}>
            <button
              type="reset"
              className={styles.resetButton}
              onClick={handleReset}
            >
              RESET
            </button>
            <button className={styles.listButton}>LIST ITEM</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SellForm;
