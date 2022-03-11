import axios from "axios";

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_TO_CART = 'REMOVE_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const LOAD_CART = 'LOAD_CART';
export const GET_GAME_DETAILS = "GET_GAME_DETAILS"
export const REMOVE_DETAIL_CACHE = "REMOVE_DETAIL_CACHE"
export const FILTER_GENRES_RESULTS = "FILTER_GENRES_RESULTS"
export const FILTER_PLATFORM_RESULTS = "FILTER_PLATFORM_RESULTS"
export const FILTER_REGION_RESULTS = "FILTER_REGION_RESULTS"
export const FILTER_STORE_RESULTS = "FILTER_STORE_RESULTS"
export const GET_PLATFORMS = "GET_PLATFORMS"
export const GET_GENRES = "GET_GENRES"
export const GET_STORES = "GET_STORES"
export const ORDER_BY_PRICE = "ORDER_BY_PRICE"
export const ORDER_BY_RELEASE = "ORDER_BY_RELEASE"
export const ORDER_BY_RATING = "ORDER_BY_RATING"

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

export function getGameDetails(id){
    return async function(dispatch){
        let results = await axios.get("http://localhost:3001/details/" + id);
        dispatch({
            type: GET_GAME_DETAILS,
            payload: results.data
        })
    }
}

export function removeDetailCache(){
    return async (dispatch) => {
        dispatch({
            type: REMOVE_DETAIL_CACHE
        })
    }
}

export function filterGamesByGenre(payload){
    return async function (dispatch){
        let filterGenreResults = await axios.get("http://localhost:3001/filterAcum/");
        dispatch({
            type: FILTER_GENRES_RESULTS,
            payload: filterGenreResults.data
        })
    }
}

export function filterGamesByPlatform(paylaod){
    return async function (dispatch){
        let filterPlatformResults = await axios.get("http://localhost:3001/filterAcum/");
        dispatch({
            type: FILTER_PLATFORM_RESULTS,
            payload: filterPlatformResults.data
        })
    }
}


export function filterGamesByRegion(paylaod){
    return async function (dispatch){
        let filterRegionResults = await axios.get("http://localhost:3001/filterAcum/");
        dispatch({
            type: FILTER_REGION_RESULTS,
            payload: filterRegionResults.data
        });
    }
}

export function filterGamesByStore(paylaod){
    return async function (dispatch){
        let filterStoreResults = await axios.get("http://localhost:3001/filterAcum/");
        dispatch({
            type: FILTER_STORE_RESULTS,
            payload: filterStoreResults.data
        });
    }
}

export function getPlatforms(){
    return async (dispatch) => {
        let platformResults = await axios.get("http://localhost:3001/platformList");
        dispatch({
            type: GET_PLATFORMS,
            payload: platformResults.data
        });
    }
}

export const getGenres = () => async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/genreList");
      return dispatch({
        type: GET_GENRES,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export function getStores(){
    return async (dispatch) => {
        let storeResults = await axios.get("http://localhost:3001/storeList");
        dispatch({
            type: GET_STORES,
            payload: storeResults.data
        });
    }
}

export function orderGamesByRating(payload){
    return {
        type: ORDER_BY_RATING,
        payload
    }
}

export function orderGamesByRelease(payload){
    return {
        type: ORDER_BY_RELEASE,
        payload
    }
}

export function orderGamesByPrice(payload){
    return {
        type: ORDER_BY_PRICE,
        payload
    }
}