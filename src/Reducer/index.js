import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_TO_CART,
  LOAD_CART,
  
  ADD_GAME_FAVORITE,
  REMOVE_GAME_FAVORITE,
  GET_ALL_GAMES,
  GET_GAME_BY_NAME
} from "../Actions";
import json from "../games.json";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const initalState = {
//   games: json.results,
  games: [],
  oneGame: [],
  cart: cartFromLocalStorage,
  totalPrice: 0,
  favoriteGames: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let game = state.games?.find((g) => g.id === action.payload);
      let item = state.cart?.find((g) => g.id === game.id);
      return !item
        ? {
            ...state,
            cart: [...state.cart, { ...game, quantity: 1 }],
          }
        : {
            ...state,
            cart: state.cart.map((g) =>
              g.id === game.id ? { ...g, quantity: g.quantity + 1 } : g
            ),
          };
    case REMOVE_TO_CART:
      let remove = state.cart.find((g) => g.id === action.payload);
      let index = state.cart.indexOf(remove);
      return remove.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((g) =>
              g.id === remove.id ? { ...g, quantity: g.quantity - 1 } : g
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((g) => g.id !== remove.id),
          };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case LOAD_CART:
      return {
        ...state,
        cart: action.payload,
      };
      
      
    case GET_ALL_GAMES:
        return {
          ...state,
          games: action.payload
        };
    case GET_GAME_BY_NAME:
        return {
            ...state,
            // oneGame: action.payload
            games: action.payload
        };
        
    
    case ADD_GAME_FAVORITE:
      const favs = state.favoriteGames;
      return {
        ...state,
        favoriteGames: favs.find(
          (el) => Number(el.id) === Number(action.payload.id)
        )
          ? [...favs]
          : [...favs, action.payload],
      };
    case REMOVE_GAME_FAVORITE:
      return {
        ...state,
        favoriteGames: state.favoriteGames.filter(
          (el) => Number(el.id) !== Number(action.payload)
        ),
      };
    default:
      return state;
  }
};

export default reducer;
