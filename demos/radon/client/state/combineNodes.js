import combineNodes from '../../../../combineNodes.js';
import AppState from './AppState.js';
import MainContainerState from './MainContainerState.js';
import MarketsContainerState from './MarketsContainerState.js';

export default combineNodes(AppState, MainContainerState, MarketsContainerState);
//export default {};