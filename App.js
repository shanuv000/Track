import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SignInScreen from "./src/Screens/SignInScreen";
import AccountScreen from "./src/Screens/AccountScreen";
import SignUpScreen from "./src/Screens/SignUpScreen";
import TrackCreateScreen from "./src/Screens/TrackCreateScreen";
import TrackDetailScreen from "./src/Screens/TrackDetailScreen";
import TrackListScreen from "./src/Screens/TrackListScreen";
import { setNavigator } from "./src/Navigationref";
import { Provider as AuthProvider } from "./src/Context/AuthContext";
const SwitchNavigator = createSwitchNavigator({
  loginflow: createStackNavigator({
    Signin: SignInScreen,
    Signup: SignUpScreen,
  }),
  mainflow: createBottomTabNavigator({
    TrackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});
const App = createAppContainer(SwitchNavigator);
export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
