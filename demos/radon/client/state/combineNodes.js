import {combineState} from 'radon-js';
import AppState from './AppState.js';
import MainContainerState from './MainContainerState.js';
import MarketsContainerState from './MarketsContainerState.js';
import {composeWithDevtools} from 'radon-devtool';

export default combineState(composeWithDevtools(), AppState, MainContainerState, MarketsContainerState);
//export default {};