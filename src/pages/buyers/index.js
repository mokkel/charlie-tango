import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Buyers.module.css";
import Buyer from "@/components/Header/Buyer";
import { useState } from "react";

export async function getServerSideProps(context) {
  console.log(context);
  const res = await fetch(
    `/api/find-buyers?zipCode=${context.query.zipCode}&price=${context.query.price}&estateType=${context.query.estateType}&size=${context.query.size}`
  );

  const data = await res.json();
  const nextData = data.map((item) => ({ ...item, selected: false }));
  // Pass data to the page via props
  return { props: { data: nextData } };
}
export default function Buyers(props) {
  const { query } = useRouter();
  const router = useRouter();
  const [data, setData] = useState(props.data);

  function toggleSelected(id) {
    setData((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          const copy = { ...item };
          copy.selected = !copy.selected;
          return copy;
        } else {
          return item;
        }
      });
    });
  }
  function nextPage() {
    props.setSellerInfo((prev) => ({
      ...prev,
      zipCode: query.zipCode,
      selected: data.filter((item) => item.selected),
    }));
    router.push("/potential_buyers");
  }
  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Potential buyers</h1>
        <div className={styles.content}>
          {data.map((buyer) => (
            <Buyer key={buyer.id} {...buyer} toggleSelected={toggleSelected} />
          ))}
          <pre>
            <code>{JSON.stringify(query, null, 2)}</code>
          </pre>
        </div>
        <h1 className={styles.headline}>Selected buyers</h1>
        {data
          .filter((item) => item.selected)
          .map((buyer) => (
            <Buyer key={buyer.id} {...buyer} toggleSelected={toggleSelected} />
          ))}
      </div>
      */ TESTING /*
      <div className="wrapper">
        <div className={styles.grid_container}>
          <div className={styles.content}>
            <button onClick={nextPage} className={styles.button}>
              Go to selected buyers
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
