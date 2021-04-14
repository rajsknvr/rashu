import * as ActionTypes from './ActionTypes'
const baseUrl = "https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?page=1";
const urlMargin = "https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/margin-group/";
const urlFluctuation = "https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/fluctuation-group/";


export const recipeLoaded = (data) => ({
    type: ActionTypes.RECIPE_LOADED,
    recipe: data
})
export const highMargin = (data) => ({
    type: ActionTypes.HIGH_MARGIN_LOADED,
    marginHigh: data
})

export const lowMargin = (data) => ({
    type: ActionTypes.LOW_MARGIN_LOADED,
    marginlow: data
})
export const highFluctuation = (data) => ({
    type: ActionTypes.HIGHT_FLUCTUATION_LOADED,
    fluctuationHigh: data
})

export const fetchData = (parameter) => (dispatch) => {

    return fetch(`${baseUrl}${parameter}`, {
        method: 'get',
    })
        .then(response => {

            if (response.ok) {
                return response;
            } else {

                var error = new Error('Error ' + response.status + ': ' + response.statusText);

                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then((response) => {

            if (response) {

                console.log(response)
                dispatch(recipeLoaded(response))
            }
            else {
                var error = new Error('Error ');

                throw error;
            }
        })
        .catch(error => { })
}
export const fetchMargin = (parameter) => (dispatch) => {

    return fetch(`${urlMargin}?order=${parameter}`, {
        method: 'get',
    })
        .then(response => {

            if (response.ok) {
                return response;
            } else {

                var error = new Error('Error ' + response.status + ': ' + response.statusText);

                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then((response) => {

            if (response) {

                console.log(response)
                if (parameter === "top") {
                    dispatch(highMargin(response))
                } else {
                    dispatch(lowMargin(response))
                }


            }
            else {
                var error = new Error('Error ');

                throw error;
            }
        })
        .catch(error => { })

}
export const fetchFluctuation = (parameter) => (dispatch) => {

    return fetch(`${urlFluctuation}?order=${parameter}`, {
        method: 'get',
    })
        .then(response => {

            if (response.ok) {
                return response;
            } else {

                var error = new Error('Error ' + response.status + ': ' + response.statusText);

                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then((response) => {

            if (response) {

                console.log(response)
                if (parameter === "top") {
                    dispatch(highFluctuation(response))
                } else {
                    //dispatch(lowMargin(response))
                }

            }
            else {
                var error = new Error('Error ');

                throw error;
            }
        })
        .catch(error => { })

}