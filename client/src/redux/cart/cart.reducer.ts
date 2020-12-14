import { addedItem } from './../../types/types';
import { getProductApi } from './../../api/api';
import { ADD_TO_CART, SET_CART, REMOVE_ITEM, REMOVE_ONE_ITEM, SET_ITEM, REMOVE_ALL } from "./cart.types"
import { item, cart} from '../../types/types'

const initialState: cart = {
    items: [],
    addedItems: [],
    total: 0
}

type InitialStateType = typeof initialState

const cartReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case SET_ITEM: {
            return {...state, items: [...action.items]}

        }
        case SET_CART: {
            return {...state, ...action.state}
        }
        case ADD_TO_CART: {
            const newItem = state.items.find(item => item._id === action.id)
            const existedItem = state.addedItems.find(item => action.id === item._id)
            if(existedItem) {
                const addedItem = {...existedItem, qty: existedItem.qty += 1}
                addedItem.qty += 1 
                return{
                    ...state,
                    total: state.total + addedItem.price 
                    }
            } else {
                if (newItem) {
                    return{ 
                        ...state,
                        addedItems: [...state.addedItems, {...newItem, qty: 1}],
                        total : state.total + newItem.price
                    }  
                }
                
            }
            return state
        }
        case REMOVE_ITEM: {
            let itemToRemove = state.addedItems.find((item) => action.id === item._id)
            let newItems = state.addedItems.filter((item) => action.id !== item._id)

            if (itemToRemove) {
                let newTotal = state.total - (itemToRemove.price * itemToRemove.qty)

                return {
                    ...state,
                    addedItems: newItems,
                    total: newTotal
                }
            }
            return state
        }
        case REMOVE_ONE_ITEM: {
            const itemToRemove = state.addedItems.find(item => action.id === item._id)
            if(itemToRemove && itemToRemove.qty === 1) {
                const newItems = state.addedItems.filter(item => action.id !== item._id)
                return { ...state, addedItems: newItems, total: state.total - itemToRemove.price }
            } else {
                const newAddedItems = state.addedItems.map(item => {
                    if(item._id === action.id) {
                        item.qty--
                    }
                    return item
                })
                if (itemToRemove) {
                    return { ...state, addedItems: newAddedItems, total:  state.total - itemToRemove.price }
                }
            }
            return state
        }
        case REMOVE_ALL: {
            return { ...state, addedItems: [], total: 0 }
        }
        default: {
            return state
        }
    }
}


type setStateType = {
    type: typeof SET_CART
    state: InitialStateType
}

type setItemType = {
    type: typeof SET_ITEM
    items: item[]
}
  
const setProducts = (items: item[]):setItemType  => ({type: SET_ITEM, items})
  
export const getProductsThunk = () => async (dispath: any) => {
    dispath(setProducts(await getProductApi()))
}

export const setState = (state: InitialStateType): setStateType => ({type: SET_CART, state})

export const addToCart= (id: string) => {
    return{
        type: ADD_TO_CART,
        id
    }
}

export const removeAll = () => ({
    type: REMOVE_ALL
})

export const removeOneFromItem = (id: string) => ({
    type: REMOVE_ONE_ITEM,
    id
})

export const removeItem = (id: string) => ({
        type: REMOVE_ITEM,
        id
})

export default cartReducer