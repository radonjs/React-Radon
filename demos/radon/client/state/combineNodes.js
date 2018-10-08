import {combineState} from 'radon-js';
import AppState from './AppState.js';
import MainContainerState from './MainContainerState.js';
import MarketsContainerState from './MarketsContainerState.js';

export default combineState(AppState, MainContainerState, MarketsContainerState);
//export default {};