import React, {Component} from 'react'
import './car-details.css'
import {Link} from 'react-router-dom'
import {withCarStoreService} from '../hoc'
import {compose} from '../../utils'
import {carLoaded} from '../../actions'
import {connect} from "react-redux";

class CarDetails extends Component  {
    componentDidMount() {
        const {carStoreService,carId}  = this.props;
        let car =  carStoreService.getDetails(carId)
        this.props.carLoaded(car)
    }

    render(){
        const {car} = this.props
        if(car){
            return(
                <div className='car-details-wrapper'>
                    <Link to='/' className='back-btn'> Back to the list </Link>
                    <img className='car-img' src={car.imageLink} alt=""/>
                    <ul className='car-details-list'>
                        {
                            Object.keys(car).map(key => {
                                if(key === 'imageLink') return  null
                                return(
                                    <li className='car-details-list-item' key={key}>
                                        <span>{key}</span> - {car[key]}
                                    </li>
                                )
                            })}
                    </ul>
                </div>
            )
        }
           return null
        }

}

const mapStateToProps = ({car}) => {
    return {car}
}
const mapDispatchToProps = {
    carLoaded
}
export default compose(
    withCarStoreService,
    connect(mapStateToProps,mapDispatchToProps)
)(CarDetails);
