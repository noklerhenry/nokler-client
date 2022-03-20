import { act } from "react-dom/test-utils";
import {
  ADD_TO_CART,
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
  GET_STORES,
  ORDER_BY,
  ADD_GAME_FAVORITE,
  REMOVE_GAME_FAVORITE,
  // GET_ALL_GAMES,
  GET_GAME_BY_NAME,
  GET_ALL_PRODUCTS,
  FILTER,
} from "../Actions";
import json from "../games.json";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
const whislistFromLocalStorage = JSON.parse(
  localStorage.getItem("whislist") || "[]"
);

const initialState = {
  // games: json.results,
  products: [],
  cart: cartFromLocalStorage,
  totalPrice: 0,
  videogame: [],
  gamesFiltered: [],
  platforms: [],
  genres: [],
  stores: [],
  favoriteGames: whislistFromLocalStorage,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let game = state.products.find((g) => g.id == action.payload);
      let item = state.cart.find((g) => g.id == game.id);
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
    case GET_GAME_DETAILS:
      return {
        ...state,
        videogame: action.payload,
      };
    case REMOVE_DETAIL_CACHE:
      return {
        ...state,
        videogame: [],
      };
    case FILTER:
      return {
        ...state,
        gamesFiltered: action.payload,
      };
    case FILTER_GENRES_RESULTS:
      return {
        ...state,
        gamesFiltered: action.payload.length ? action.payload : state.products,
      };
    case FILTER_PLATFORM_RESULTS:
      return {
        ...state,
        gamesFiltered: action.payload,
      };
    case FILTER_REGION_RESULTS:
      return {
        ...state,
        gamesFiltered: action.payload,
      };
    case FILTER_STORE_RESULTS:
      return {
        ...state,
        gamesFiltered: action.payload,
      };
    case GET_PLATFORMS:
      return {
        ...state,
        platforms: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case GET_STORES:
      return {
        ...state,
        stores: action.payload,
      };
    case ORDER_BY: {
      const orderBy =
        action.payload === "HighRating"
          ? [...state.products].sort((a, b) => {
              if (a.game.rating < b.game.rating) return 1;
              if (a.game.rating > b.game.rating) return -1;
              return 0;
            })
          : action.payload === "LowRating"
          ? [...state.products].sort((a, b) => {
              if (a.game.rating > b.game.rating) return 1;
              if (a.game.rating < b.game.rating) return -1;
              return 0;
            })
          : action.payload === "HighPrice"
          ? [...state.products].sort((a, b) => {
              if (a.price < b.price) return 1;
              if (a.price > b.price) return -1;
              return 0;
            })
          : action.payload === "LowPrice"
          ? [...state.products].sort((a, b) => {
              if (a.price > b.price) return 1;
              if (a.price < b.price) return -1;
              return 0;
            })
          : action.payload === "NewRelease"
          ? [...state.products].sort((a, b) => {
              if (a.game.released_at < b.game.released_at) return 1;
              if (a.game.released_at > b.game.released_at) return -1;
              return 0;
            })
          : action.payload === "OldRelease"
          ? [...state.products].sort((a, b) => {
              if (a.game.released_at > b.game.released_at) return 1;
              if (a.game.released_at < b.game.released_at) return -1;
              return 0;
            })
          : action.payload === "A-Z"
          ? [...state.products].sort((a, b) => {
              if (a.game.name < b.game.name) return -1;
              if (a.game.name > b.game.name) return 1;
              return 0;
            })
          : action.payload === "Z-A"
          ? [...state.products].sort((a, b) => {
              if (a.game.name > b.game.name) return -1;
              if (a.game.name < b.game.name) return 1;
              return 0;
            })
          : [...state.products];
      return {
        ...state,
        gamesFiltered: orderBy,
      };
    }
    // case GET_ALL_GAMES:
    //   return {
    //     ...state,
    //     games: action.payload,
    //   };
    case GET_GAME_BY_NAME:
      return {
        ...state,
        products: action.payload,
      };

    case ADD_GAME_FAVORITE:
      const favs = state.favoriteGames;
      return {
        ...state,
        favoriteGames: favs.find((el) => el.id === action.payload.id)
          ? [...favs]
          : [...favs, action.payload],
      };
    case REMOVE_GAME_FAVORITE:
      return {
        ...state,
        favoriteGames: state.favoriteGames.filter(
          (el) => el.id !== action.payload
        ),
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        gamesFiltered: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
