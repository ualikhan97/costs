import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";
import "./index.css";
import { useState } from "react";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2022, 9, 19),
    description: "Холодильник",
    costAmount: 999.99,
  },

  {
    id: "c2",
    date: new Date(2022, 7, 29),
    description: "Плита",
    costAmount: 699.99,
  },

  {
    id: "c3",
    date: new Date(2022, 6, 25),
    description: "Телевизор",
    costAmount: 1299.99,
  },
  {
    id: "c4",
    date: new Date(2022, 8, 25),
    description: "MacBook",
    costAmount: 2399,
  },
];

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS)



  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    })

    console.log("App Component");
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
