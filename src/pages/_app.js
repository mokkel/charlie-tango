import "@/styles/globals.css";
import { Header } from "@/components/Header/Header";
import { useState } from "react";
export default function App({ Component, pageProps }) {
  const [sellerInfo, setSellerInfo] = useState({});
  return (
    <>
      <Header />
      <main>
        <Component
          {...pageProps}
          sellerInfo={sellerInfo}
          setSellerInfo={setSellerInfo}
        />
      </main>
    </>
  );
}
