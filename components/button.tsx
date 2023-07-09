import React from "react";
import styles from "./components.module.scss";
interface Props {
  color: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
}

import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const Button = (props: Props) => {
  return (
    <button
      className={`${styles.button} ${spaceGrotesk.className} ${
        props.color == "secondary"
          ? styles.secondary
          : props.color == "danger"
          ? styles.danger
          : styles.primary
      }`}
      style={{
        height:
          props.size == "large"
            ? "3rem"
            : props.size == "small"
            ? "2rem"
            : "2.5rem",
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
