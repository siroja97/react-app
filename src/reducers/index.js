const initialState = {
    cars : []
}
const reducer = (state= initialState, action) => {
    switch (action.type){
        case 'CARS_LOADED':
            return {
                cars: action.payload
            }
        case 'CAR_LOADED':
            return {
                car: action.payload
            }
        default:
            return state
    }
}

export default reducer;
