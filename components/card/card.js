import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";
import cls from 'classnames'

export const Card = ({ name, href, imgUrl }) => {
  return (
    <>
      <Link href={href}>
        <a className={styles.cardLink}>
          <div className={cls("glass", styles.container)}>
            <div className={styles.cardHeaderWrapper}>
              <h2 className={styles.cardHeader}>{name}</h2>
            </div>
            <div className={styles.cardImageWrapper}>
              <Image
                className={styles.cardImage}
                src={imgUrl}
                width={260}
                height={160}
                alt="card"
              />
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};
