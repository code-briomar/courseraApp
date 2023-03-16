import { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";

const LoginPage = () => {
  const [email, onChangeEmail] = useState("");
  const [pwd, onChangePwd] = useState("");

  const [signIn, setSignIn] = useState(false);
  //Submit User Data
  return (
    <>
      <View style={pretty.loginHeader}>
        <Text style={pretty.headerText}>Welcome To Little Lemon</Text>
      </View>
      <ScrollView keyboardDismissMode={"interactive"} style={pretty.loginBody}>
        {/* AFTER LOGIN */}
        {signIn && <Text style={pretty.bodyText}>You're logged in!</Text>}
        {!signIn && <Text style={pretty.bodyText}>Login to continue</Text>}
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "padding" : "position"}
        >
          {!signIn && (
            <>
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
            </>
          )}
          <Pressable style={pretty.button} onPress={() => setSignIn(!signIn)}>
            <Text style={pretty.buttonText}>
              {signIn ? "Log Out" : "Login"}
            </Text>
          </Pressable>
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
  button: {
    padding: 5,
    marginVertical: 8,
    margin: 40,
    backgroundColor: "#457b9d",
    borderColor: "#457b9d",
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fefae0",
    textAlign: "center",
    fontSize: 18,
  },
});
export default LoginPage;
