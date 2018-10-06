import React from 'react';
import PropTypes from 'prop-types';

function bind(ComponentToBind) {
    class WrapperFunction extends React.Component {
        constructor() {
            super();
            this.siloRender = this.siloRender.bind(this);
        }

        componentWillMount() {
            const {silo} = this.context;
            this.unsubscribe = silo.subscribe(this.siloRender, ComponentToBind.prototype.constructor.name + 'State');
        }

        render() {
            const {silo} = this.context;
            let newState = {};
            if(this.updatedState) {
                newState = this.updatedState;
            }
            return (<ComponentToBind {...this.props} {...newState}/>)
        }

        siloRender(updatedState) {
            this.previousUpdate = this.updatedState;
            this.updatedState = updatedState;
            this.forceUpdate();
        }

        componentWillUnmount() {
            this.unsubscribe();
        }
    }

    WrapperFunction.contextTypes = {
        silo: PropTypes.object
    }

    return WrapperFunction;
}

export default bind;