import { useRouter } from "next/router";
import Link from "next/link";
import coffeeStoreData from "../../data/coffee-stores.json"
import Head from "next/head";

export function getStaticProps({ params }) {
    return {
        props: {
            CoffeeStore: coffeeStoreData.find(coffeeStore => {
                return coffeeStore.id.toString() === params.id ;
            })
        }
    }
}

export async function getStaticPaths() {
    const paths = coffeeStoreData.map(( data ) => {
        return {
            params: {
                id: data.id.toString()
            }
        }
    })
    return {
      paths,
      fallback: true // false or 'blocking'
    };
  }

const CoffeeStore = (props) => {
    const router = useRouter();
    console.log('router:: ', props)
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    const { address, name, neighbourhood } = props.CoffeeStore
    return (
        <>
            <Head>
                <title>{name}</title>
            </Head>
            <div>
                <Link href='/'>
                    <a>Back to home</a>
                </Link>
            </div>
            <div>
                <p>{ name }</p>
                <p>{ address }</p>
                <p>{ neighbourhood }</p>
            </div>
        </>
    )
}

export default CoffeeStore;