import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/pages/login";
import HomeScreen from "./src/pages/home";
import Profile from "./src/pages/profile";
import Machines from "./src/pages/machines";

const App = () => {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator headerMode="none" initialRouteName="Login">
        <Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Screen
          name="Profle"
          component={Profile}
        />
        <Screen
          name="Machines"
          component={Machines}
        />
      </Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A1A1A1",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 7,
    shadowColor: "#000",
    shadowOpacity: 0.5,
  },
  welcome: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Geeza Pro",
  },
  logintext: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Geeza Pro",
    color: "#fff",
  },
  text: {
    fontSize: 18,
    fontFamily: "Geeza Pro",
    textAlign: "center",
  },
  login: {
    backgroundColor: "#8958F4",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: "80%", // ancho
    height: 40, // largo
    margin: 20,
  },
  textField: {
    marginBottom: 32,
    width: "80%",
  },
  customInput: {
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: "#008F39",
    borderWidth: 2,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 18,
  },
});

export default App;
