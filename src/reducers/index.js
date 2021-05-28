const initialState = {
    cars : [],
    car: {}
}
const reducer = (state= initialState, action) => {
    switch (action.type){
        case 'CARS_LOADED':
            return {
                ...state,
                cars: action.payload
            }
        case 'CAR_LOADED':
            return {
                ...state,
                car: action.payload
            }
        default:
            return state
    }
}

export default reducer;
