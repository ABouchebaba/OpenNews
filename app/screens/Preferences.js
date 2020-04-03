import React from "react";
import { View, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "../components/Checkbox";
import SectionHeader from "../components/SectionHeader";
import { setPreference } from "../Store/actions";

function preferencesScreen(props) {
  const dispatch = useDispatch();
  const preferences = useSelector(state => state.preferences);
  const categories = useSelector(state => state.categories);
  const sources = useSelector(state => state.sources);
  const languages = ["Arabic", "French"];

  const renderItem = (section, item) => {
    const checked = preferences[section][item];
    const onPress = () => dispatch(setPreference(section, item));
    return (
      <Checkbox key={item} checked={checked} title={item} onPress={onPress} />
    );
  };

  return (
    <ScrollView style={styles.container}>
      <SectionHeader title="languages" />
      <View style={styles.list}>
        {languages.map(l => renderItem("languages", l))}
      </View>
      <SectionHeader title="categories" />
      <View style={styles.list}>
        {categories.categories.map(l => renderItem("categories", l))}
      </View>
      <SectionHeader title="sources" />
      <View style={styles.list}>
        {sources.sources.map(l => renderItem("sources", l))}
      </View>
    </ScrollView>
  );
}

const styles = {
  container: {
    width: "95%",
    alignSelf: "center"
  },
  list: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "center"
  }
};

export default preferencesScreen;
