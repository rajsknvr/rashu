import * as ActionTypes from './ActionTypes'
export const Recipe = (state = {
    allRecipe: null,
    lowMargin: null,
    highMargin: null,
    highFluctuation: null,
}, action) => {
    switch (action.type) {
        case ActionTypes.RECIPE_LOADED:
            return {
                ...state,
                allRecipe: action.recipe,
            }
        case ActionTypes.HIGH_MARGIN_LOADED:
            return {
                ...state,
                highMargin: action.marginHigh
            }
        case ActionTypes.LOW_MARGIN_LOADED:
            return {
                ...state,
                lowMargin: action.marginlow
            }
        case ActionTypes.HIGHT_FLUCTUATION_LOADED:
            return {
                ...state,
                highFluctuation: action.fluctuationHigh
            }
        default:
            return state;
    }
};
