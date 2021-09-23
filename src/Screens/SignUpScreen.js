import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome } from "@expo/vector-icons";
import Spacer from "./Components/Spacer";
import { Context as AuthContext } from "../Context/AuthContext";

const SignUpScreen = ({ navigation }) => {
  const { state, signUp } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  console.log(state);
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3 style={styles.text}>
          <Text
            style={{
              color: "red",
            }}
          >
            Sign-Up{" "}
          </Text>
          For Tracker
        </Text>
      </Spacer>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Spacer />
      <Input
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          onPress={() => signUp({ email, password })}
          icon={
            <FontAwesome
              style={{ marginRight: 10 }}
              name="sign-in"
              size={15}
              color="white"
            />
          }
          title="Sign Up"
        />
      </Spacer>
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
    marginBottom: 260,
  },
  text: {
    color: "green",
    alignSelf: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  errorMessage: { fontSize: 16, color: "red" },
});

export default SignUpScreen;
