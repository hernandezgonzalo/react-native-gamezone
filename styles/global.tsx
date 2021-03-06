import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20
  },
  titleText: {
    // fontFamily: "merriweather-bold",
    fontSize: 18,
    color: "#333",
    marginBottom: 20
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20
  },
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center"
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginVertical: 5
  },
  textInput: {
    minHeight: 100
  },
  error: {
    color: "crimson",
    textAlign: "center",
    textTransform: "capitalize",
    paddingVertical: 5
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee"
  },
  flatList: {
    paddingHorizontal: 20,
    marginTop: 20
  }
});

type imagesType = { ratings: { [index: string]: any } };

export const images: imagesType = {
  ratings: {
    "1": require("../assets/rating-1.png"),
    "2": require("../assets/rating-2.png"),
    "3": require("../assets/rating-3.png"),
    "4": require("../assets/rating-4.png"),
    "5": require("../assets/rating-5.png")
  }
};
