import StateNode from '../../../../stateNode.js';

const AppState = new StateNode('AppState');
AppState.parent = 'root';

AppState.initializeState({
    testing: 4
})

// AppState.initializeModifiers({

//     }   
// });

export default AppState;