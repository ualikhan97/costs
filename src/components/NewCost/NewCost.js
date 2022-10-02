import './NewCost.css'
import CostForm from './CostForm'
import { useState } from 'react'

const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false)

    const onSaveCostData = (inputCostData) => {
        const costData2 = {
            ...inputCostData,
            id: Math.random().toString()
        }

        props.onAddCost(costData2)
        setIsFormVisible(false)
    }


    const inputCostDataHandler = () => {
        setIsFormVisible(true)
        console.log(isFormVisible)
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false)
    }

    return(
        <div className='new-cost'>
             {!isFormVisible && <button onClick={inputCostDataHandler}>добавить новый расход</button>}
               {isFormVisible && <CostForm onCancel={cancelCostHandler} onSaveCostData={onSaveCostData} />}

        </div>
    )
}

export default NewCost