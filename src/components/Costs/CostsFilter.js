import "./CostsFilter.css";

const CostsFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
    console.log("costs component");
  };

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Выбор по году</label>
        <select value={props.selectedYear} onChange={yearChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;
