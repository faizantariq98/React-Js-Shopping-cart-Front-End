import React,{useReducer} from 'react'
import CartContext from './cart-context'

const defaultcartState={
    items:[],
    totalAmount:0
}
const cartReducer=(state,action)=>{

    if(action.type==='ADD'){
        const updatedTotalamount=state.totalAmount+action.item.price*action.item.amount;

        const existingCartItemsIndex=state.items.findIndex(item=>item.id===action.item.id);
        const exixtingCartItems=state.items[existingCartItemsIndex]
       
        let updatedItems;
        if(exixtingCartItems){
            
            const updateitem={
                ...exixtingCartItems,
                amount:exixtingCartItems.amount + action.item.amount
            }
            updatedItems=[...state.items];
            updatedItems[existingCartItemsIndex]=updateitem;
        }
        else{
            updatedItems = state.items.concat(action.item);
        }
       
        // const updatedItems= state.items.concat(action.item);  
        return {
            items:updatedItems,
            totalAmount:updatedTotalamount
        }
    
    }
    if(action.type==='DELETE'){
        const existingCartItemsIndex=state.items.findIndex((item)=>item.id===action.id);
        const existingItems=state.items[existingCartItemsIndex];
        const updatedTotalamount=state.totalAmount-existingItems.price;

        let updatedItems;
        if(existingItems.amount === 1){
            updatedItems=state.items.filter(item=>item.id !== action.id);
        }
        else{ 
            const updatedItem ={...existingItems,amount:existingItems.amount-1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemsIndex]=updatedItem;
        }
        return {
            items:updatedItems,
            totalAmount:updatedTotalamount
        }
       
    }
    return defaultcartState;
}

const CartProvider = (props) => {
const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultcartState);

const addItemToCart=(item)=>{
    dispatchCartAction({
        type:'ADD',
        item:item
    })
}
const deleteItemToCart=(id)=>{
    dispatchCartAction({
        item:'Delete',
        id:id
    })
}

const cartContext={
    items: cartState.items,
    totalAmount:cartState.totalAmount,
    addItem:addItemToCart,
    removeItem:deleteItemToCart
}

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
