import React from 'react';
import PropTypes from 'prop-types';

// siloObject is passed in to have access to keySubscribe function
function objectBind(ComponentToBind, key, siloObject) {
  class WrapperFunction extends React.Component {
    constructor() {
      super();
      this.siloRender = this.siloRender.bind(this);
    }

    componentWillMount() {
      this.unsubscribe = siloObject.keySubscribe(key, this.siloRender);
    }

    render() {
      let newState = {};
      if (this.updatedState) {
          newState = this.updatedState;
      }
      return (<ComponentToBind {...this.props} {...newState}/>)
    }

    siloRender(updatedState) {
      this.updatedState = updatedState;
      this.forceUpdate();
    }

    componentWillUnmount() {
      //this.unsubscribe();
    }
  }

  // dont need
  WrapperFunction.contextTypes = {
      silo: PropTypes.object
  }

  return WrapperFunction;
}

export default objectBind;