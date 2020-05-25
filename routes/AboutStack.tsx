import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";

export type AboutStackParamList = {
  About: undefined;
};

const Stack = createStackNavigator<AboutStackParamList>();

const AboutStack = () => (
  <Stack.Navigator
    initialRouteName="About"
    screenOptions={{
      headerStyle: { backgroundColor: "#f4511e" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" }
    }}
  >
    <Stack.Screen
      name="About"
      component={About}
      options={{ title: "About GameZone" }}
    />
  </Stack.Navigator>
);

export default AboutStack;
