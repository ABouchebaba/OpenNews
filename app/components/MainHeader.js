import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export function HeaderLeft(props) {
  const theme = useTheme();
  const onPress = () => props.navigation.openDrawer();
  return (
    <TouchableOpacity style={style.left} onPress={onPress}>
      <Ionicons name="md-menu" size={30} color="white" />
    </TouchableOpacity>
  );
}

export function HeaderRight(props) {
  const theme = useTheme();
  const onPress = () => props.navigation.navigate("Search");
  return (
    <TouchableOpacity style={style.right} onPress={onPress}>
      <Ionicons name="md-search" size={30} color="white" />
    </TouchableOpacity>
  );
}

export function renderMainHeader(props) {
  return {
    headerRight: () => <HeaderRight {...props} />,
    headerLeft: () => <HeaderLeft {...props} />,
    headerTitle: "OPEN NEWS",
    headerTitleAlign: "center",
    headerTitleStyle: { fontWeight: "bold", color: "white" },
  };
}

const style = {
  left: {
    paddingLeft: 20,
  },
  right: {
    paddingRight: 20,
  },
};
