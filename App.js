// IMPORT REACT NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
// IMPORT BOTTOM TABS NAVIGATOR
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// IMPORT SCREENS from `components` folder
import WelcomeScreen from "./components/WelcomeScreen";
import Login from "./components/LoginPage";
import LoginPage from "./components/LoginPage";
import { Ionicons } from "@expo/vector-icons";

// CREATE INSTANCE OF `createBottomTabNavigator` function
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;

            if (route.name === "Welcome") {
              iconName = focused
                ? "ios-information-cirlce"
                : "ios-information-circle-outline";
            } else if (route.name === "Login") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: "tomato",
          tabBarInactiveColor: "gray",
        })}
      >
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Login" component={LoginPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
