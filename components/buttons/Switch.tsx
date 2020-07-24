import React from "react";
import { View, Switch, StyleSheet } from "react-native";

interface Props {
  isSwitchEnabled: boolean;
  setIsSwitchEnabled: any; // some day I should fix this
}

const SwitchButton = ({ isSwitchEnabled, setIsSwitchEnabled }: Props) => {
  const toggleSwitch = () =>
    setIsSwitchEnabled((previousState: any) => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        // trackColor={{ false: "#767577", true: "#81b0ff" }}
        // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isSwitchEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  }
});

export default SwitchButton;
