import React from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  Dimensions,
} from "react-native";
import { getImageSource } from "../helpers";
import { useSelector, useDispatch } from "react-redux";
import { addBookmark, removeBookmark } from "../Store/actions";
import { useNavigation } from "@react-navigation/native";
import Bookmark from "./Bookmark";

const { height, width } = Dimensions.get("window");

function Item(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const image = getImageSource(props.item.images);
  const bookmarked = useSelector((state) => state.bookmarks[props.item.id]);

  const pressed = () => navigation.navigate("Article", props.item);
  const bookmark = () => {
    if (bookmarked) return dispatch(removeBookmark(props.item.id));
    dispatch(addBookmark(props.item));
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={pressed}>
        <View style={styles.itemContainer}>
          <Image source={image} style={styles.itemImage} />
          <Text style={styles.itemTitleText}>{props.item.title}</Text>
          <Text style={styles.source}>{props.item.source}</Text>
        </View>
      </TouchableWithoutFeedback>
      <Bookmark onBookmark={bookmark} bookmarked={bookmarked} />
    </View>
  );
}

const styles = {
  container: { position: "relative" },
  itemContainer: {
    alignItems: "center",
    position: "relative",
    height: 0.35 * height,
    width: width,
  },
  itemImage: {
    width: "100%",
    height: "100%",
    // resizeMode: "stretch", ///
    // borderRadius: 10
  },
  itemTitleText: {
    backgroundColor: "rgba(150,150,150,0.7);",
    color: "white",
    alignSelf: "center",
    textAlign: "center",
    position: "absolute",
    paddingHorizontal: 5,
    bottom: 20,
    left: 0,
    right: 0,
    fontSize: 16,
    zIndex: 5,
  },
  source: {
    position: "absolute",
    top: 5,
    left: 10,
    color: "grey",
    backgroundColor: "#efefef",
    padding: 3,
    borderRadius: 5,
  },
};

export default Item;
