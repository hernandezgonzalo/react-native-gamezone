import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../components/Header";

export type HomeStackParamList = {
  Home: undefined;
  ReviewDetails: { title: string; rating: number; body: string; key: string };
};

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = ({ navigation }) => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: { backgroundColor: "#f4511e" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" }
    }}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: () => <Header navigation={navigation} title="GameZone" />
      }}
    />
    <Stack.Screen
      name="ReviewDetails"
      component={ReviewDetails}
      options={({ route }) => ({ title: route.params.title })}
    />
  </Stack.Navigator>
);

export default HomeStack;
