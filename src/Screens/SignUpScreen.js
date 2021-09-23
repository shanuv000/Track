import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import NavLinks from "./Components/NavLinks";
import { Context as AuthContext } from "../Context/AuthContext";
import AuthForm from "./Components/AuthForm";
const SignUpScreen = ({ navigation }) => {
  const { state, signUp } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for tracker"
        errorMessage={state.errorMessage}
        onSubmit={signUp}
        submitBottonText="Sign Up"
      />
      <NavLinks
        text="Already Have an Account? Sign In Instead."
        routeName={"Signin"}
      />
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
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

export default SignUpScreen;
