import React ,{useContext} from 'react'
import CartContext from '../../store/cart-context'
import classes from './Mealitem.module.css'
import MealItemForm from './MealItemForm'


const Mealitem = (props) => {
    const cartctx=useContext(CartContext);

const addtoCartHandler=(amount)=>{
    cartctx.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price

    })
}
    const price=`$${props.price.toFixed(2)}`
    return (
        <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
        <MealItemForm onAddtoCart={addtoCartHandler}/>
        </div>
        </li>
    )
}

export default Mealitem
