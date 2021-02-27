import React from "react";
import './app.css'
import {Route,Switch} from 'react-router-dom'
import {withCarStoreService} from '../hoc'
import {HomePage, CarPage} from '../pages'
const App = ({carStoreService}) => {
    return <div>
        <header className='header-name'>
            AutoStaff Kyiv
        </header>
        <Switch>
            <Route
                path='/'
                component={HomePage}
                exact
            />
            <Route
                path='/car/:id'
                render={({match})=>{
                    return <CarPage carId={match.params.id}/>
                }}
            />
        </Switch>
    </div>
}
export default withCarStoreService(App);
