import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import NavLinks from "./Components/NavLinks";
import { Context as AuthContext } from "../Context/AuthContext";
import AuthForm from "./Components/AuthForm";
const SignInScreen = () => {
  const { state, signIn } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In for tracker"
        errorMessage={state.errorMessage}
        onSubmit={signIn}
        submitBottonText="Sign In"
      />
      <NavLinks
        text="Do not have an Account? Sign Up Instead."
        routeName={"Signup"}
      />
    </View>
  );
};
SignInScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SignInScreen;
