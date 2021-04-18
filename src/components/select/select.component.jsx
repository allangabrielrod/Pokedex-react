import "./select.styles.scss";

const Select = ({ id, label, name, children, filterChange }) => (
  <div className="select">
    <label htmlFor={id} className="select-label">
      {label}
    </label>

    <select name={name} id={id} className="filter-select" onChange={filterChange}>
      {children}
    </select>
  </div>
);

export default Select;
