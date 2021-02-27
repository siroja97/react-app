const carsLoaded = (newCars) => {
    return{
        type: 'CARS_LOADED',
        payload: newCars
    }
}
const carLoaded = (newCar) => {
    return{
        type: 'CAR_LOADED',
        payload: newCar
    }
}
export {
    carsLoaded,
    carLoaded
}
