import styles from "./banner.module.css";

export const Banner = ({ buttonText, handleClick, titleOne, titleTwo, description }) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.title1}>{titleOne}</span>
          <span className={styles.title2}>{titleTwo}</span>
        </h1>
        <p className={styles.subTitle}>{description}</p>
        <div className={styles.buttonWrapper}>
          <button className={styles.button} onClick={handleClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};
