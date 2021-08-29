import React,{Fragment} from 'react'
import meal from '../../assets/meal.jpg'
import classes from './Header.module.css'
import CartButton from './CartButton'
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Order Your Meal</h1>
                <CartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={meal} alt="A meal Table" />
            </div>
        </Fragment>
    )
}

export default Header
