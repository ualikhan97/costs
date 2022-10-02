import "./CostsFilter.css";

const CostsFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
    console.log('costs component')

  };

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label >Выбор по году</label>
        <select value={props.selectedYear} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;