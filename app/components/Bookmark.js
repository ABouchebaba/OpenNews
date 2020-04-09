import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Bookmark = (props) => {
  const bookmarkStyle = props.bookmarked
    ? styles.bookmarked()
    : styles.notBookmarked();

  return (
    <View style={bookmarkStyle}>
      <TouchableWithoutFeedback onPress={props.onBookmark}>
        <Ionicons name="md-bookmark" size={20} color="white" />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = {
  bookmark: {
    width: 25,
    height: 25,
    borderRadius: 5,
    position: "absolute",
    top: 10,
    right: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  bookmarked: function () {
    return {
      ...this.bookmark,
      backgroundColor: "#28a745",
    };
  },
  notBookmarked: function () {
    return {
      ...this.bookmark,
      backgroundColor: "#244593",
    };
  },
};

export default React.memo(Bookmark);
