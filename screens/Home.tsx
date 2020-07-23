import React, { useState, useContext } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
// import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../routes/HomeStack";
import Card from "../components/Card";
import { reviewType } from "../dummyData";
import ModalWindow from "../components/ModalWindow";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./ReviewForm";
import { ReviewsContext } from "../contexts/ReviewsContext";
import Carousel from "react-native-snap-carousel";
import { globalStyles, images } from "../styles/global";

type Props = StackScreenProps<HomeStackParamList, "Home">;

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee"
  }
});

const Home = ({ navigation }: Props) => {
  const { reviews, reviewsDispatch } = useContext(ReviewsContext);
  const [modalOpen, setModalOpen] = useState(false);

  const addReview = (review: reviewType) => {
    reviewsDispatch({ type: "ADD_REVIEW", review });
    setModalOpen(false);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={globalStyles.container}>
        <Card>
          <Text style={globalStyles.titleText}>{item.title}</Text>
          <Text>{item.review}</Text>
          <View style={styles.rating}>
            <Text>GameZone rating:</Text>
            <Image source={images.ratings[item.rating]} />
          </View>
        </Card>
      </View>
    );
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

      {/* <FlatList
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
      /> */}

      <Carousel
        layout={"default"}
        data={reviews}
        renderItem={renderItem}
        sliderWidth={Dimensions.get("screen").width}
        itemWidth={350}
      />
    </View>
  );
};

export default Home;
