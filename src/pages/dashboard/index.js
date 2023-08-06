import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "./../Home.module.css";

export async function getServerSideProps() {
  const res = await fetch(
    "https://redmhkmukjatkstahllv.supabase.co/rest/v1/MMD_case_EDC",
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        apikey: process.env.ANON_KEY,
        Prefer: "return=representation",
      },
    }
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Dashboard(props) {
  const [clients, setClients] = useState(props.data);

  return (
    <>
      <Head>
        <title>EDC Dashboard</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Dashboard</h1>
        <div className={styles.grid_container}>
          <div className={styles.content}>
            {clients.map((client) => (
              <p>{client.name}</p>
            ))}
            {clients.map((client) => (
              <p>{client.email}</p>
            ))}
            {clients.map((client) => (
              <p>{client.phone}</p>
            ))}
            {clients.map((client) => (
              <p>{client.created_at}</p>
            ))}
            {clients.map((client) => (
              <p>{client.consent}</p>
            ))}
          </div>
          <div className={styles.content}>
            <p>Dashboard</p>
          </div>
          <div className={styles.content}>
            <p>Dashboard</p>
          </div>
        </div>
      </div>
    </>
  );
}
