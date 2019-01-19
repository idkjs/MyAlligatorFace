import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button } from "react-native-elements";

export default class Authentication extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        Welcome to MyAlligatorFace!
        <Input
          label="Email"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          placeholder="my@email.com"
        />
        <Input
          label="Password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          placeholder="p@ssw0rd123"
          secureTextEntry
        />
        <Input
          label="Confirm Password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          placeholder="p@ssw0rd123"
          secureTextEntry
        />
        <Button title="Submit" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
