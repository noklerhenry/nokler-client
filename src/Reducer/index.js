import { act } from "react-dom/test-utils";
import {    ADD_TO_CART, 
            CLEAR_CART, 
            REMOVE_TO_CART, 
            LOAD_CART, 
            GET_GAME_DETAILS, 
            REMOVE_DETAIL_CACHE, 
            FILTER_GENRES_RESULTS, 
            FILTER_PLATFORM_RESULTS, 
            FILTER_REGION_RESULTS, 
            FILTER_STORE_RESULTS, 
            GET_PLATFORMS, 
            GET_GENRES, 
            GET_STORES  } from "../Actions";
import json from '../games.json'

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');

const initialState = {
    games: json.results,
    cart: cartFromLocalStorage,
    totalPrice: 0,
    videogame: [],
    gamesFiltered: [],
    platforms: [],
    genres: [],
    stores: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            let game = state.games.find(g => g.id === action.payload);
            let item = state.cart.find(g => g.id === game.id);
            return !item
            ? {
                ...state,
                cart: [...state.cart, {...game, quantity: 1}]
            }
            : {
                ...state,
                cart: state.cart.map(g => g.id === game.id ? {...g, quantity: g.quantity + 1} : g)
            }
        case REMOVE_TO_CART:
            let remove = state.cart.find(g => g.id === action.payload);
            let index = state.cart.indexOf(remove);
            return remove.quantity > 1
            ? {
                ...state,
                cart: state.cart.map(g => g.id === remove.id ? {...g, quantity: g.quantity - 1} : g)
            }
            : {
                ...state,
                cart: state.cart.filter(g => g.id !== remove.id)
            }
        case CLEAR_CART:
            return {
                ...state,
                cart: []
            }
        case LOAD_CART:
            return {
                ...state,
                cart: action.payload
            }
        case GET_GAME_DETAILS:
            return {
                ...state,
                videogame: action.payload
            }
        case REMOVE_DETAIL_CACHE:
            return {
                ...state,
                videogame: []
            }
        case FILTER_GENRES_RESULTS:
            return {
                ...state,
                gamesFiltered: action.payload
            }
        case FILTER_PLATFORM_RESULTS:
            return {
                ...state,
                gamesFiltered: action.payload
            }
        case FILTER_REGION_RESULTS:
            return {
                ...state,
                gamesFiltered: action.payload
            }
        case FILTER_STORE_RESULTS:
            return {
                ...state,
                gamesFiltered: action.payload
            }
        case GET_PLATFORMS:
            return {
                ...state,
                platforms: action.payload
            }
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case GET_STORES:
            return {
                ...state,
                stores: action.payload
            }
        default:
            return state;
    }
}

export default reducer;