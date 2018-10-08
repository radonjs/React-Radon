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

    render() {
      let newState = {};
      // this.updatedState is set when siloRender is run
      if (this.updatedState) {
          newState = this.updatedState;
      }
      // pass in dev written props and the siloState
      return (<ComponentToBind {...this.props} {...newState}/>)
    }

    siloRender(updatedState) {
      // wrapperfunction now has a variable called updatedState
      this.updatedState = updatedState;
      // part of react, calls render function
      this.forceUpdate();
    }

    componentWillUnmount() {
      // unsubscribe removes the relevant render function from the subscribers array
      this.unsubscribe();
    }
  }

  // looking for something called silo that is an object 
  WrapperFunction.contextTypes = {
      silo: PropTypes.object
  }

  return WrapperFunction;
}

export default bind;