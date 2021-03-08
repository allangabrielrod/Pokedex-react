import { ReactComponent as Pokeball } from "../../assets/pokeball.svg";
import "./loading.styles.scss";

const Loading = () => (
  <div className="loading">
    <Pokeball className="loading-pokeball" />
  </div>
);

export default Loading;
