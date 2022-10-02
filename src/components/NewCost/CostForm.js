import { useState } from 'react'
import  './CostForm.css'
const CostForm = (props) => {

    const [inputName, setInputName] = useState('')
    const [inputAmount, setInputAmount] = useState('')
    const [inputDate, setInputDate] = useState('')


    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: ''
    // })

    const nameChangeHandler = (e) => {
        setInputName(e.target.value)
    //     setUserInput({
    //         ...userInput,
    //         name: e.target.value
    //     })
        console.log(inputName)
    // }


    //     setUserInput((previousState) => {
    //         return {
    //             ...previousState,
    //             name: e.target.value
    //         }
    //     })
    //     console.log(userInput.name)
    }

    const amountChangeHandler = (e) => {
        setInputAmount(e.target.value)
    //     setUserInput({
    //         ...userInput,
    //         amount: e.target.value
    //     })
        console.log(inputAmount)
    }

    const dateChangeHandler = (e) => {
        setInputDate(e.target.value);
    //     setUserInput({
    //         ...userInput,
    //         date: e.target.value
    //     })
        console.log(inputDate)
    }

    const submitHandler = (e) => {
            e.preventDefault()

            const costData = {
                description: inputName,
                costAmount: inputAmount,
                date: new Date(inputDate)
            }

            props.onSaveCostData(costData)


            setInputName('')
            setInputAmount('')
            setInputDate('')
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Название</label>
                    <input value={inputName} onChange={nameChangeHandler} type="text" />
                </div>
                <div className='new-cost__control'>
                    <label>Сумма</label>
                    <input value={inputAmount} onChange={amountChangeHandler} type="number" min='0.01'
                    step='0.01'/>
                </div>
                <div className='new-cost__control'>
                    <label>Дата</label>
                    <input value={inputDate} onChange={dateChangeHandler} type="date" min='2021-01-01'
                    step='2022-11-30'/>
                </div>


                <div>
                    <button type='submit'>Добавить расход</button>
                    <button onClick={props.onCancel} type='button'>Отмена</button>
                </div>



            </div>
        </form>
    )
}

export default CostForm