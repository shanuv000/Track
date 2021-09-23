import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Spacer from "./Spacer";
import { FontAwesome } from "@expo/vector-icons";
import { Button, Text, Input } from "react-native-elements";
const AuthForm = ({ headerText, errorMessage, onSubmit, submitBottonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  return (
    <>
      <Spacer>
        <Text h3 style={styles.text}>
          {headerText}
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
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          onPress={() => onSubmit({ email, password })}
          icon={
            <FontAwesome
              style={{ marginRight: 10 }}
              name="sign-in"
              size={15}
              color="white"
            />
          }
          title={submitBottonText}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: { fontSize: 16, color: "red", marginLeft: 15 },
  text: {
    color: "green",
    alignSelf: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default AuthForm;
