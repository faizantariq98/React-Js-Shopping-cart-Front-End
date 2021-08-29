import React ,{useRef}from 'react'
import classes from './MealItemForm.module.css'
import Input from '../UI/Input'

const MealItemForm = (props) => {
    const amountinputRef=useRef()
        const submitHandler=(event)=>{
            event.preventDefault();
            const enteredAmount=amountinputRef.current.value;
            const enteredamountNumber=+enteredAmount;
            props.onAddtoCart(enteredamountNumber)
        }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Amount" 
            ref={amountinputRef}
            input={{
                id:'amount',
                type:'Number',
                min:'1',
                max:'5',
                defaultValue:'1',
                step:'1',
            }}/>
            <button>
                +Add
            </button>
        </form>
    )
}

export default MealItemForm
