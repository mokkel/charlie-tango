/*
{
  "id": "ecf703ec",
  "maxPrice": 1000000,
  "minSize": 71,
  "adults": 2,
  "children": 0,
  "description": "Couple is looking for a Fritidshus with a minimum size of 71 m2 and a maximum price of 1.000.000 kr. Dolor quis molestias nam nulla nostrum quas occaecati quos.",
  "estateType": "5",
  "takeoverDate": "2023-05-04"
}
*/

import iconfamily from "@/assets/icon-family.svg";
import heart from "@/assets/icon-heart.svg";
import Image from "next/image";
import styles from "src/pages/Home.module.css";
import { estateTypes } from "@/data/estateTypes";

import React from "react";

function Buyer(props) {
  return (
    <article
      onClick={() => {
        props.toggleSelected(props.id);
      }}
      className={props.selected ? styles.selected : null}
    >
      <h2>Buyer ID: {props.id}</h2>
      <p>
        <b>Description:</b> {props.description}
      </p>
      <div className={styles.flex}>
        <Image
          className={styles.icon}
          src={heart.src}
          width={24}
          height={24}
          alt="family icon"
          priority
        />
        <p>Take over date: {props.takeoverDate}</p>
      </div>
      <div className={styles.flex}>
        <Image
          className={styles.icon}
          src={iconfamily.src}
          width={24}
          height={24}
          alt="family icon"
          priority
        />
        <p>
          Family Size: {props.adults} Adult(s) + {props.children} children
        </p>
      </div>
    </article>
  );
}

export default Buyer;
