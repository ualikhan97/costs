import CostDate from "./CostDate";
import "./CostItem.css";
import Card from "../Ui/Card";

const CostItem = (props) => {
  return (
    <li>
      <Card className="cost-item">
        <CostDate date={props.date} />

        <div className="cost-item__description">
          <h2>{props.description}</h2>
          <div className="cost-item__price">{props.costAmount}</div>
        </div>
      </Card>
    </li>
  );
};

export default CostItem;
