import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

const WelcomeScreen = () => {
  const [firstName, onChangeFirstName] = useState("");

  return (
    <ScrollView style={menuStyles.container} keyboardDismissMode="on-drag">
      {/* The keyboardDismissMode property applied to the ScrollView component closes the virtual keyboard when the user starts to scroll, this improves user experience */}
      <Text style={menuStyles.headingSection}>
        How was your visit to Little Lemon?
      </Text>
      <Text style={menuStyles.infoSection}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us! Little Lemon is a charming neighborhood
        bistro that serves simple food and classic cocktails in a lively but
        casual environment. We would love to hear your experience with us!
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>

      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "position"}
        style={menuStyles.container}
      >
        <TextInput
          style={menuStyles.input}
          value={firstName}
          onChangeText={onChangeFirstName}
          placeholder={"Your first name, e.g Freisser"}
          multiline={true}
          maxLength={4}
          keyboardType={"url"}
          secureTextEntry={true}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
});

export default WelcomeScreen;
