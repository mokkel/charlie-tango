import Head from "next/head";
import styles from "./Home.module.css";
import house_frontpage from "@/assets/house_frontpage.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Find Buyers for your property</h1>
        <div className={styles.grid_container}>
          <div className={styles.content}>
            <form action="/buyers" method="GET" className={styles.form}>
              <label>
                <span className={styles.label}>Zip Code</span>
                <input type="number" name="zipCode" required />
              </label>
              <label>
                <span className={styles.label}>Price</span>
                <input type="number" name="price" required />
              </label>
              <label>
                <span className={styles.label}>Size (sqm.)</span>
                <input type="number" name="size" required />
              </label>
              <label>
                <span className={styles.label}>Estate Type</span>
                <select type="text" name="estateTypes" required>
                  <option name="Villa">Villa</option>
                  <option name="Villalejlighed">Villalejlighed</option>
                  <option name="Rækkehus">Rækkehus</option>
                </select>
              </label>
              <button className={styles.button}>Find Buyers</button>
            </form>
          </div>
          <div>
            <Image
              src={house_frontpage.src}
              width={500}
              height={338}
              alt="house on frontpage"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
