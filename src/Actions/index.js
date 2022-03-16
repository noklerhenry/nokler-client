import axios from "axios";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_TO_CART = "REMOVE_TO_CART";
export const CLEAR_CART = "CLEAR_CART";
export const LOAD_CART = "LOAD_CART";
export const GET_GAME_DETAILS = "GET_GAME_DETAILS";
export const REMOVE_DETAIL_CACHE = "REMOVE_DETAIL_CACHE";
export const FILTER_GENRES_RESULTS = "FILTER_GENRES_RESULTS";
export const FILTER_PLATFORM_RESULTS = "FILTER_PLATFORM_RESULTS";
export const FILTER_REGION_RESULTS = "FILTER_REGION_RESULTS";
export const FILTER_STORE_RESULTS = "FILTER_STORE_RESULTS";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const GET_GENRES = "GET_GENRES";
export const GET_STORES = "GET_STORES";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const ORDER_BY_RELEASE = "ORDER_BY_RELEASE";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const ADD_GAME_FAVORITE = "ADD_GAME_FAVORITE";
export const REMOVE_GAME_FAVORITE = "REMOVE_GAME_FAVORITE";
export const GET_ALL_GAMES = "GET_ALL_GAMES";
export const GET_GAME_BY_NAME = "GET_GAME_BY_NAME";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const FILTER = "FILTER";

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const removeToCart = (payload) => {
  return {
    type: REMOVE_TO_CART,
    payload,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const loadCart = (payload) => {
  return {
    type: LOAD_CART,
    payload,
  };
};

export function getGameDetails(nameid) {
  return async function (dispatch) {
    // let results = await axios.get(
    //   `https://nokler-api.herokuapp.com/getProductById?ids=${id}`
    // );
    let results = await axios.get(
      `https://nokler-api.herokuapp.com/getProductByGame?game=${nameid}`
    );
    dispatch({
      type: GET_GAME_DETAILS,
      payload: results.data,
    });
  };
}

export function removeDetailCache() {
  return async (dispatch) => {
    dispatch({
      type: REMOVE_DETAIL_CACHE,
    });
  };
}

export const filterGamesByGenre = (array) => async (dispatch) => {
  let arr = [...array];
  let url = "https://nokler-api.herokuapp.com/filterAcum?";
  while (arr.length) {
    url = url + `&genr=${arr.shift()}`;
  }
  console.log(url);
  const info = await axios.get(url);
  console.log(info.data);
  return dispatch({
    type: FILTER_GENRES_RESULTS,
    payload: info.data,
  });
};

export const filterAcum =
  (genres, platforms, regions, stores) => async (dispatch) => {
    // let arr = [...array];
    // let url = "https://nokler-api.herokuapp.com/filterAcum?";
    // while (arr.length) {
    //   url = url + `&plat=${arr.shift()}`;
    // }
    // const info = await axios.get(url);
    // console.log(info.data);
    // return dispatch({
    //   type: FILTER_PLATFORM_RESULTS,
    //   payload: info.data,
    // });
    let url = "https://nokler-api.herokuapp.com/filterAcum?";
    if (genres.length) {
      let arr = [...genres];
      while (arr.length) {
        url = url + `&genr=${arr.shift()}`;
      }
    }
    if (platforms.length) {
      let arr = [...platforms];
      while (arr.length) {
        url = url + `&plat=${arr.shift()}`;
      }
    }
    if (regions.length) {
      let arr = [...regions];
      while (arr.length) {
        url = url + `&regi=${arr.shift()}`;
      }
    }
    if (stores.length) {
      let arr = [...stores];
      while (arr.length) {
        url = url + `&stor=${arr.shift()}`;
      }
    }
    const info = await axios.get(url);
    console.log(info.data);
    return dispatch({
      type: FILTER,
      payload: info.data,
    });
  };

export function getPlatforms() {
  return async (dispatch) => {
    let platformResults = await axios.get(
      "https://nokler-api.herokuapp.com/platformList"
    );
    dispatch({
      type: GET_PLATFORMS,
      payload: platformResults.data,
    });
  };
}

export const getGenres = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://nokler-api.herokuapp.com/genreList"
    );
    return dispatch({
      type: GET_GENRES,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export function getStores() {
  return async (dispatch) => {
    let storeResults = await axios.get(
      "https://nokler-api.herokuapp.com/storeList"
    );
    dispatch({
      type: GET_STORES,
      payload: storeResults.data,
    });
  };
}

export function orderGamesByRating(payload) {
  return {
    type: ORDER_BY_RATING,
    payload,
  };
}

export function orderGamesByRelease(payload) {
  return {
    type: ORDER_BY_RELEASE,
    payload,
  };
}

export function orderGamesByPrice(payload) {
  return {
    type: ORDER_BY_PRICE,
    payload,
  };
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
      const res = await axios.get("https://nokler-api.herokuapp.com/allGames");
      return dispatch({ type: GET_ALL_GAMES, payload: res.data });
    } catch (err) {
      alert("Erros All Games DB");
      console.log(err);
    }
  };
};

export const getGamesByName = (name) => {
  return function (dispatch) {
    return fetch(`https://nokler-api.herokuapp.com/getProductByGame?game=${name}`)
      .then((games) => games.json())
      .then((resp) => {
        dispatch({ type: GET_GAME_BY_NAME, payload: resp });
      })
      .catch((err) => {
        alert("Error Game Name DB");
        console.log(err);
      });
  };
};

export const getAllProducts = () => async (dispatch) => {
  const url = await axios.get("https://nokler-api.herokuapp.com/getProducts");
  return dispatch({ type: GET_ALL_PRODUCTS, payload: url.data });
};
