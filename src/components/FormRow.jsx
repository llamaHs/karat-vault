import styles from "./FormRow.module.css";

function FormRow({ label, htmlFor, error, children }) {
  return (
    <div className={styles.formRow}>
      {label && <label htmlFor={htmlFor}>{label}</label>}
      {children}
      {error && <p className={styles.formError}>{error}</p>}
    </div>
  );
}

export default FormRow;
