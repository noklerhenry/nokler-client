import axios from "axios";

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_TO_CART = 'REMOVE_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const LOAD_CART = 'LOAD_CART';


export const ADD_GAME_FAVORITE = "ADD_GAME_FAVORITE";
export const REMOVE_GAME_FAVORITE = "REMOVE_GAME_FAVORITE";
export const GET_ALL_GAMES = "GET_ALL_GAMES";
export const GET_GAME_BY_NAME = "GET_GAME_BY_NAME";



export const addToCart = payload => {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export const removeToCart = payload => {
    return {
        type: REMOVE_TO_CART,
        payload
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART,
    }
}

export const loadCart = payload => {
    return {
        type: LOAD_CART,
        payload
    }
}




export function addGameFavorite(payload) {
  return {
    type: "ADD_GAME_FAVORITE",
    payload,
  };
}

export function removeGameFavorite(idGame) {
  return {
    type: "REMOVE_GAME_FAVORITE",
    payload: idGame,
  };
}

export const getAllGames = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('https://nokler-api.herokuapp.com/allGames')
            return dispatch({ type: GET_ALL_GAMES, payload: res.data });
        } catch (err) {
            alert('Erros All Games DB')
            console.log(err)
        }
    }
}

export const getGamesByName = (name) => {
    return function (dispatch){
        return fetch(`https://nokler-api.herokuapp.com/gameSearchDB?name=${name}`)
        .then((games) => games.json())
        .then((resp) => {
            dispatch({ type: GET_GAME_BY_NAME, payload: resp});
        })
        .catch((err) => {
            alert('Error Game Name DB')
            console.log(err)
        })
    }
} 
