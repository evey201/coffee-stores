import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import cls from "classnames";
import coffeeStoreData from "../../data/coffee-stores.json";
import styles from "./coffee-stores.module.css";

export function getStaticProps({ params }) {
  return {
    props: {
      CoffeeStore: coffeeStoreData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id;
      }),
    },
  };
}

export async function getStaticPaths() {
  const paths = coffeeStoreData.map((data) => {
    return {
      params: {
        id: data.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}

const handleVoteButton = () => {
    console.log('works!!!')
}

const CoffeeStore = (props) => {
  const router = useRouter();
  console.log("router:: ", props);
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const { address, name, neighbourhood, imgUrl } = props.CoffeeStore;
  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={imgUrl}
            alt={name}
            width={600}
            height={360}
            className={styles.storeImg}
          />
        </div>
        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/places.svg" alt="icon" width="24" height="24" /> 
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/nearMe.svg" alt="icon" width="24" height="24" /> 
            <p className={styles.text}>{neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/star.svg" alt="icon" width="24" height="24" /> 
            <p className={styles.text}>1</p>
          </div>

          <button className={styles.upvoteButton} onClick={handleVoteButton}>Up vote</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeStore;
