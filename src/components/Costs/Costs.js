import "./Costs.css"
import Card from "../Ui/Card";
import CostsFilter from "./CostsFilter";
import { useState } from "react";
import CostsList from "./CostsList";
import CostsDiagram from "./CostsDiagram";

const Costs = (props) => {

   const [selectedYear, setSelectedYear] = useState('2021')

    const onChangeYear = (year) => {
        setSelectedYear(year)

        console.log(year)
    }

    const filteredCosts = props.costs.filter(cost => {
      return cost.date.getFullYear().toString() === selectedYear
    })



    return (
      <div>
        <Card className="costs">
          <CostsFilter
            selectedYear={selectedYear}
            onChangeYear={onChangeYear}
          />
          <CostsDiagram costs={filteredCosts}/>
          <CostsList costs={filteredCosts}/>


          {/* {filteredCosts.length === 0 && <p>В этом году расходов нет</p>}
          { filteredCosts.length > 0 &&
           filteredCosts.map((cost) => (
            <CostItem
              key={cost.id}
              description={cost.description}
              date={cost.date}
              costAmount={cost.costAmount}
            />
          ))} */}

          {/* <CostItem
            date={props.costs[0].date}
            description={props.costs[0].description}
            costAmount={props.costs[0].costAmount}
          />
          <CostItem
            date={props.costs[1].date}
            description={props.costs[1].description}
            costAmount={props.costs[1].costAmount}
          />
          <CostItem
            date={props.costs[2].date}
            description={props.costs[2].description}
            costAmount={props.costs[2].costAmount}
          /> */}
        </Card>
      </div>
    );
}


export default Costs