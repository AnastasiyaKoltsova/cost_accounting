import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCosts/NewCost";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2023, 8, 4),
    description: 'Холодильник',
    amount: 999.99,
  },
  {
    id: 'c2',
    date: new Date(2023, 6, 2),
    description: 'MacBook',
    amount: 1254.72,
  },
  {
    id: 'c3',
    date: new Date(2023, 7, 31),
    description: 'Джинсы',
    amount: 49.99,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);
  
  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
