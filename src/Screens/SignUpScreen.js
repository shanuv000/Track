import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome } from "@expo/vector-icons";
import Spacer from "./Components/Spacer";

const SignUpScreen = ({ navigation }) => {
  return (
    <>
      <Spacer>
        <Text h3>SignUp For Tracker </Text>
      </Spacer>
      <Input label="Email" />
      <Spacer />
      <Input label="Password" />
      <Spacer />
      <Spacer>
        <Button
          onPress={() => navigation.navigate("Signin")}
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
    </>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
