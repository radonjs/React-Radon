import ConstructorNode from '../../../../constructorNode.js';

const AppState = new ConstructorNode('AppState');
AppState.parent = 'root';

AppState.initializeState({
    testing: 4
})

// AppState.initializeModifiers({

//     }   
// });

export default AppState;