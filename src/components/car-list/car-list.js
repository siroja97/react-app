import React , {Component} from 'react'
import { connect } from 'react-redux'
import './car-list.css'
import CarListItem from "../car-list-item";
import {withCarStoreService} from '../hoc'
import {compose} from "../../utils";
import {carsLoaded} from '../../actions'


class CarList extends Component{
    componentDidMount() {
        const {carStoreService}  = this.props;
        let allcars =  carStoreService.getCars()
        this.props.carsLoaded(allcars)
    }

    render() {
       const {cars} = this.props
         if(cars){
             return(
                 <ul className='home-page-list'>
                     {
                         cars.map(car => {
                             return <CarListItem car={car} key={car.model}/>
                         })
                     }

                 </ul>
             )
         }
         return  null
    }
}
const mapStateToProps = ({cars}) => {
    return {cars}
}
const mapDispatchToProps = {
    carsLoaded
}
export default compose(
    withCarStoreService,
    connect(mapStateToProps,mapDispatchToProps)
)(CarList);
