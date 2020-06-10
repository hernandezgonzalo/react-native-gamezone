import * as React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../routes/HomeStack";
import Card from "../components/Card";

type Props = StackScreenProps<HomeStackParamList, "ReviewDetails">;

const ReviewDetails = ({ route, navigation }: Props) => {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{JSON.stringify(route.params.title)}</Text>
        <Text>{JSON.stringify(route.params.body)}</Text>
        <Text>{JSON.stringify(route.params.rating)}</Text>
      </Card>
    </View>
  );
};

export default ReviewDetails;
