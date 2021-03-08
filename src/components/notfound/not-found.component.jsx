import { ReactComponent as Pikachu } from "../../assets/pikachu.svg";
import "./not-found.styles.scss";

const NotFound = () => (
  <div className="not-found">
    <h1 className="not-found-text">Nada Encontrado</h1>
    <Pikachu className="not-found-pic" />
  </div>
);

export default NotFound;
