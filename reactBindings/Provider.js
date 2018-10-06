import React from 'react';
import PropTypes from 'prop-types';

class ProviderComponent extends React.Component {
    // function definition provided by react, called by this.context
    getChildContext() {
        return {silo: this.props.silo}
    }

    render() {      
      // this.props.children are any elements listed inside the component (like App)
        return (<div> {this.props.children} </div>)
    }
}

// we are telling it what we are going to provide
ProviderComponent.childContextTypes = {
    silo: PropTypes.object
}

export default ProviderComponent;