import * as React from "react";
import { StyleSheet, View } from "react-native";

export interface CardProps {}

const Card: React.SFC<CardProps> = ({ children }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{children}</View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "#333",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginHorizontal: 4,
    marginVertical: 6
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10
  }
});
