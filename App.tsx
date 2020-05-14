import React, { useState } from "react";
import Home from "./screens/Home";
import { AppLoading } from "expo";
import * as Font from "expo-font";

const getFonts = () =>
  Font.loadAsync({
    "merriweather-regular": require("./assets/fonts/Merriweather-Regular.ttf"),
    "merriweather-bold": require("./assets/fonts/Merriweather-Bold.ttf")
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded)
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );

  return <Home />;
}
