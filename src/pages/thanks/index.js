import Head from "next/head";
import styles from "./../Home.module.css";
import house_thanks from "@/assets/house_thanks.jpg";
import Image from "next/image";

export default function Thanks(props) {
  console.log(props.sellerInfo.name);
  console.log(props.sellerInfo.email);
  console.log(props.sellerInfo.phone);
  console.log(props.sellerInfo.consent);

  return (
    <>
      <Head>
        <title>Thank you</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Thank you!</h1>
        <div className={styles.content}>
          <p>You will hear from us in 2-3 days</p>
        </div>
        <div>
          <Image
            src={house_thanks.src}
            width={770}
            height={500}
            alt="house on thanks"
            priority
          />
        </div>
      </div>
    </>
  );
}
