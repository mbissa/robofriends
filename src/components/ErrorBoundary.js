import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError:true});
    }
    render() {
        if(this.state.hasError){
            return <hq>Oops! We will get back to you!</hq>
        }
        return this.props.children;
    }

}

export default ErrorBoundary;