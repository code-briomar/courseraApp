import { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Button,
  Alert,
} from "react-native";

const LoginPage = () => {
  const [email, onChangeEmail] = useState("");
  const [pwd, onChangePwd] = useState("");

  //Submit User Data
  return (
    <>
      <View style={pretty.loginHeader}>
        <Text style={pretty.headerText}>Welcome To Little Lemon</Text>
      </View>
      <ScrollView keyboardDismissMode={"interactive"} style={pretty.loginBody}>
        <Text style={pretty.bodyText}>Login to continue</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "padding" : "position"}
        >
          <TextInput
            value={email}
            onChangeText={onChangeEmail}
            placeholder={"Email Address"}
            style={pretty.email}
            keyboardType={"email-address"}
          />
          <TextInput
            value={pwd}
            onChangeText={onChangePwd}
            placeholder={"Password"}
            style={pretty.pwd}
            secureTextEntry={true}
          />
          <View style={pretty.buttonPosition}>
            <Button
              title={"Button"}
              onPress={() =>
                Alert.alert(
                  `Your email address is : ${email} and Password is : ${pwd}`
                )
              }
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};

const pretty = StyleSheet.create({
  loginHeader: {
    flex: 0.5,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  loginBody: {
    flex: 1,
  },
  headerText: {
    width: "54%",
    fontSize: 24,
    fontWeight: "semi-bold",
    marginBottom: 20,
    color: "white",
  },
  bodyText: {
    marginLeft: "25%",
    fontSize: 18,
    fontWeight: "normal",
    color: "white",
    margin: 5,
  },
  email: {
    width: "90%",
    margin: 15,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    backgroundColor: "white",
  },
  pwd: {
    width: "90%",
    margin: 15,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    backgroundColor: "white",
  },
  buttonPosition: {
    width: "50%",
    left: "25%",
  },
});
export default LoginPage;
