import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../routes/HomeStack";
import Card from "../components/Card";
import { reviewType } from "../dummyData";
import ModalWindow from "../components/ModalWindow";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./ReviewForm";
import { ReviewsContext } from "../contexts/ReviewsContext";

type Props = StackScreenProps<HomeStackParamList, "Home">;

const Home = ({ navigation }: Props) => {
  const { reviews, reviewsDispatch } = useContext(ReviewsContext);
  const [modalOpen, setModalOpen] = useState(false);

  const addReview = (review: reviewType) => {
    reviewsDispatch({ type: "ADD_REVIEW", review });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <ModalWindow {...{ modalOpen, setModalOpen }}>
        <ReviewForm addReview={addReview} />
      </ModalWindow>

      <MaterialIcons
        name="add"
        size={24}
        style={globalStyles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
