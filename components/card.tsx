import Button from "./button";
import styles from "./components.module.scss";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

interface Props {
  id: string;
  title: string;
  content: string;
}
const Card = (props: Props) => {
  return (
    <div className={`${styles.card} ${spaceGrotesk.className}`}>
      <h2>{props.title}</h2>
      <Button color="secondary">edit</Button>
      <p>{props.content}</p>

      <Button color="danger">delete</Button>
    </div>
  );
};

export default Card;
