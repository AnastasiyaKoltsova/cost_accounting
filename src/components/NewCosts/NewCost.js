import CostForm from "./CostForm";
import "./NewCost.css";

const NewCost = (props) => {
    const saveCostDataHundler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        }
        
        props.onAddCost(costData);
    };

    return (
    <div className="new-cost">
        <CostForm onSaveCostData={saveCostDataHundler} />
    </div>
    );
}

export default NewCost;