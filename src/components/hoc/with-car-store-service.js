import React from "react";
import {CarStoreServiceConsumer} from "../car-store-service-context";

const withCarStoreService = (Wrapped) => {
    return (props) => {
        return (
            <CarStoreServiceConsumer>
                {
                    (carStoreService) => {
                        return(<Wrapped {...props} carStoreService={carStoreService}/>)
                    }
                }
            </CarStoreServiceConsumer>
        )
    }
}
export default withCarStoreService;
