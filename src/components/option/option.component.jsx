import "./option.styles.scss";

const Option = ({ value }) => (
  <option value={value}>{value.replace(/^\w/, (c) => c.toUpperCase())}</option>
);

export default Option;
