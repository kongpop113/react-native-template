import { AppNavigator } from '../navigators/AppNavigator';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';

// set initial page at startup
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('welcome'));

export default (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case 'back':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    // example of other route
/*  case 'mainpage':
    nextState = AppNavigator.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'main', params: { data: action.payload } }),
      state
    );
    break; */
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};