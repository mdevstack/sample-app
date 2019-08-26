// @flow
import type { SwitchNavigator as SwitchNavigatorType, createStackNavigator, createSwitchNavigator } from 'react-navigation';

// screens
import NewProfileScreen from 'screens/NewProfile';
import WelcomeScreen from 'screens/Welcome';

import { modalTransition } from 'utils/common';

import {
  APP_FLOW,
  ONBOARDING_FLOW,
  AUTH_FLOW,
  NEW_WALLET,
  NEW_PROFILE,
  PIN_CODE_UNLOCK,
  ONBOARDING_HOME,
  WELCOME,
  FORGOT_PIN,
} from 'constants/navigationConstants';

import AppFlow from './appNavigation';

const StackNavigatorConfig = {
  navigationOptions: {
    header: null,
    gesturesEnabled: false,
  },
};

const onBoardingFlow = createStackNavigator({
  [WELCOME]: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  [ONBOARDING_HOME]: OnboardingScreen,
  [NEW_WALLET]: {
    screen: NewWalletScreen,
    navigationOptions: {
      header: null,
    },
  },
  [NEW_PROFILE]: NewProfileScreen,
}, StackNavigatorConfig);


const RootSwitch: SwitchNavigatorType = createSwitchNavigator({
  [ONBOARDING_FLOW]: onBoardingFlow,
  [APP_FLOW]: AppFlow,
});

export default RootSwitch;
