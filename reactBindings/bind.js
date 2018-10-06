import React from 'react';
import PropTypes from 'prop-types'; 

function bind(ComponentToBind) {
  class WrapperFunction extends React.Component {
    constructor(props) {
      super(props);
      this.siloRender = this.siloRender.bind(this);
    }

    componentDidMount() {
      // this.context, the context api is a part of react, the silo was added to this.context in the Provider Wrapper
      const {silo} = this.context;
      // this.subscribe returns the unsubscribe method
      this.unsubscribe = silo.subscribe(this.siloRender, ComponentToBind.prototype.constructor.name + 'State');
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