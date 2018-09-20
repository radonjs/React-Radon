import React from 'react';
import PropTypes from 'prop-types';

class ProviderComponent extends React.Component {
    getChildContext() {
        return {silo: this.props.silo}
    }

    render() {        
        return (<div> {this.props.children} </div>)
    }
}

ProviderComponent.childContextTypes = {
    silo: PropTypes.object
}

export default ProviderComponent;