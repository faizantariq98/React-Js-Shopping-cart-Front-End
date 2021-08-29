import React ,{useContext,useEffect,useState}from 'react'
import classes from './Cartbutton.module.css'
import Carticon from '../Cart/Carticon'
import CartContext from '../../store/cart-context'



const CartButton = (props) => {
        const cartCtx=useContext(CartContext);
        const {items}=cartCtx;
        const [btnstyle,setbtnstyle]=useState(false);
        const numberOfCartItems = items.reduce((curNumber,item)=>{ return curNumber+item.amount},0)
        const btnClass= `${classes.button} ${btnstyle ? classes.bump : '' }`

    useEffect(() => {
            if(items.length === 0){
                return;
            }
            setbtnstyle(true)
            const timer = setTimeout(()=>{
                setbtnstyle(false);
            },300)
            return () => {
                clearTimeout(timer)
            }
        }, [items]);
    return (
        <button className={btnClass} onClick={props.onClick}>
            <span className={classes.icon}>
                <Carticon/>
            </span>
            <span>your cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default CartButton
