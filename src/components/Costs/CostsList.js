import CostItem from "./CostItem";
import "./CostList.css";
const CostsList = (props) => {
  if (props.costs.length === 0) {
    return <h2 className="cost-list__fallback">В этом году расходов нет</h2>;
  }

  return (
    <ul className="costs-list">
      {props.costs.map((cost) => (
        <CostItem
          key={cost.id}
          description={cost.description}
          date={cost.date}
          costAmount={cost.costAmount}
        />
      ))}
    </ul>
  );
};

export default CostsList;
