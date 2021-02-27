import React, {Component} from "react";
import ErrorIndidcator from "../error-indicator";
export default class ErrorBoundary extends Component{
    state = {
        hasError : false
    }
    componentDidCatch(error, errorInfo) {
        this.setState({hasError:true})
    }
    render() {
        if(this.state.hasError) return <ErrorIndidcator/>
        return this.props.children
    }
}
