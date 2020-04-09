import React from "react";
import {
  Text,
  TouchableWithoutFeedback,
  Image,
  View,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getImageSource } from "../helpers";
import { useNavigation } from "@react-navigation/native";
import { addBookmark, removeBookmark } from "../Store/actions";
import Bookmark from "./Bookmark";
import DeleteBtn from "./DeleteBtn";
import { useTheme } from "@react-navigation/native";

const { height } = Dimensions.get("window");

function ArticleCard(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const theme = useTheme();
  const bookmarked = useSelector((state) => state.bookmarks[props.data.id]);
  const image = getImageSource(props.data.images);

  // const hours = dateDifference(props.data.date);

  const pressed = () => navigation.push("Article", props.data);
  const unbookmark = () => dispatch(removeBookmark(props.data.id));
  const bookmark = () => {
    if (bookmarked) return dispatch(removeBookmark(props.data.id));
    dispatch(addBookmark(props.data));
  };

  const chipStyle = theme.dark
    ? {
        color: "white",
        fontWeight: "bold",
      }
    : {
        color: "#244593",
      };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={pressed}>
        <View style={styles.card}>
          <Image source={image} style={styles.image} />
          <View style={styles.text}>
            <Text style={[styles.sourceAndDate, chipStyle]}>
              {props.data.source}
            </Text>
            <Text
              style={[styles.title, { color: theme.colors.text, fontSize: 16 }]}
            >
              {props.data.title}
            </Text>
            <Text style={[styles.sourceAndDate, chipStyle]}>
              {props.data.date}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>

      {props.bookmarkBtn && (
        <Bookmark onBookmark={bookmark} bookmarked={bookmarked} />
      )}
      {props.deletebtn && <DeleteBtn onPress={unbookmark} />}
    </View>
  );
}
const styles = {
  container: { position: "relative", margin: 5 },
  card: {
    width: "95%",
    minHeight: 0.18 * height,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "#000",
    margin: 5,
    paddingRight: 10,
    alignSelf: "center",
    flexDirection: "row",
  },
  image: {
    height: "100%",
    width: "35%",
    borderRadius: 5,
  },
  sourceAndDate: {
    alignSelf: "center",
    justifyContent: "center",
    padding: 3,
    borderRadius: 10,
    // color: "grey",
    // backgroundColor: "#efefef",
    fontSize: 12,
  },
  text: {
    flexDirection: "column",
    justifyContent: "space-around",
    width: "65%",
  },
  title: {
    width: "100%",
    margin: 5,
    fontSize: 13,
    textAlign: "center",
  },
};
export default ArticleCard;
