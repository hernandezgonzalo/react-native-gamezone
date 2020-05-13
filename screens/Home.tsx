import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  return (
    <View>
      <Text style={styles.container}>Home screen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 24
  }
});
