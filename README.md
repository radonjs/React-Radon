# <img src='https://i.imgur.com/k6JIgZR.png' height='130'/>

Radon is an object-oriented state management framework for JavaScript applications.

Read our documentation at [radonjs.org](http://radonjs.org)

## Getting Started

To install the stable version using npm as your package manager:

```npm install --save react-radon```

The React Radon source code is transpiled to ES2015 to work in any modern browser. You don't need to use Babel or a module bundler to get started with Radon.

Unlike Radon, React doesn't provide UMD builds, so you will need to use a CommonJS module bundler like Webpack, Parcel, or Rollup to utilize Radon with React.

Radon also implements native handling of asynchronous state changes using async generators. When state modifiers are called,
they are added to a running queue of modifiers, which are called in order using generators. This means that handling asynchronicity in complex web applications is predictable and intuitive.

### Binding React Components to a State Node

```import { bindToSilo } from 'react-radon';```

After setting up the state tree by following the Quick Start Guide, all of the stateful React components will be bound to the state tree. Once bound, the React components will be able to access the state of all parent components tracing back to the root.

Binding components in Radon is as simple as importing the bindToSilo method from React-Radon and passing a single React component as a parameter. The bindToSilo methed will then use the name of the React component to find a corresponding State Node. If the Node isn't found in the Silo an error will be logged in the console but the thread of execution will not break. If a Node is found, the component will be subscribed to changes to that piece of state. Additionally, whenever the component unmounts it will automatically unsubscribe itself from previous subscriptions.

```javascript
import React from 'react';
import { bindToSilo } from 'react-radon';

class App extends React.Component {
  //React Code
}

export default bindToSilo(App);
```

### Provider

In order to use the bindToSilo method, the Silo must be passed to the components from the top of the application. The provider tag passes down the Silo as props and authorizes components to subscribe to pieces of state.

```javascript
import {render} from 'react-dom';
import {Provider} from 'react-radon';
// Silo from Exported combineNodes
import silo from './localSiloLocation';

render(<Provider silo={silo}>
    <App />
  </Provider>,
  document.getElementById('root'));
```

### Dynamically Binding to Objects in the Silo

If a React Component relies on a state object value/index to render, it cannot use the bindToSilo method to subscribe to state. Instead it must use object binding. Object binding allows for the subscription to a specific index or key value in an array or object. Object binding allows components to watch for object specific state changes, thereby decreasing the number of components Radon has to render after each state change.

```javascript
import React from 'react';
import {bindToSilo, bindObjectToSilo} from 'react-radon';
import ListComp from './components/ListComp';

class App extends React.Component {
  render() {
    const componentArray = this.props.objectArray.val.map((elm, i) => {
      const Comp = bindObjectToSilo(ListComp, i, this.props.objectArray.val);
      return <Comp />
    });

    return (
      <div>
        {componentArray}
      </div>
    )
  }
}

export default bindToSilo(App);
```

### Working with State in React

Once a component has been bound to Radon, it will automatically have props that reflect the state it is subscribed to. Each piece of state can be accessed by ```this.props.nameOfStateValue.val```, which will be the current state value. The modifiers are stored similarly and are accessible via ```this.props.nameOfStateValue.nameOfModifier```.

```javascript
//---------------combineNodes.js----------------

import {combineNodes, StateNode} from 'radon';

const AppState = new StateNode('AppState');

AppState.initializeState({
  nameArr: ['Rick', 'Morty', 'Summer'];
});

AppState.initializeModifiers({
  nameArr: {
    updateName: (current, index, payload) => {
      return payload;
    }
  }
});

export default combineNodes(AppState);

//---------------index.js----------------

import {render} from 'react-dom';
import {Provider} from 'react-radon';
import App from './App.jsx';
import silo from './combineNodes.js';

render(<Provider silo={silo}>
    <App/>
  </Provider>,
  document.getElementById('root'));

//---------------App.jsx----------------

import React from 'react';
import {bindToSilo, bindObjectToSilo} from 'react-radon';

class App extends React.Component {
  render() {
    let componentsToRender = this.props.nameArr.map(elm, i => {
      let BoundComp = bindObjectToSilo(ListComponent, i, this.props.nameArr);
      return <BoundComp index={i}/>
    });

    return (
      <div>
        {componentsToRender}
      </div>
    );
  }
}

class ListComponent extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.nameArr[this.props.index]}</p>
      </div>
    );
  }
}

export default bindToSilo(App);
```


