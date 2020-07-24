import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../routes/HomeStack";
import Card from "../components/Card";

type Props = StackScreenProps<HomeStackParamList, "ReviewDetails">;

const ReviewDetails = ({ route, navigation }: Props) => {
  const rating = route.params.rating;

  return (
    <View style={styles.cards}>
      <Card>
        <Text>{route.params.title}</Text>
        <Text>{route.params.review}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({
  cards: {
    padding: 20
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee"
  }
});
