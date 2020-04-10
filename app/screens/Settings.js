import React from "react";
import { Text, ScrollView, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setSetting } from "../Store/actions";
import { Slider } from "react-native";
import Checkbox from "../components/Checkbox";
import { useTheme } from "@react-navigation/native";

function SettingsScreen(props) {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const theme = useTheme();

  const fontSizes = { min: 12, max: 20 };
  const lineHeight = { min: 20, max: 40 };
  const textAlign = ["justify", "center", "auto"];
  const themes = ["light", "dark"];

  const exampleStyle = {
    fontSize: settings.fontSize,
    lineHeight: settings.lineHeight,
    textAlign: settings.textAlign,
    color: theme.colors.text,
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.fontSizeContainer}>
        <Text style={[styles.fontSizeText, { color: theme.colors.text }]}>
          Font size : {settings.fontSize}
        </Text>
        <Slider
          minimumValue={fontSizes["min"]}
          maximumValue={fontSizes["max"]}
          // maximumTrackTintColor={"red"}
          value={settings.fontSize}
          onValueChange={(value) => dispatch(setSetting("fontSize", value))}
          step={1}
          disabled={false}
          style={styles.fontSizeSlider}
        />
      </View>
      <View style={styles.fontSizeContainer}>
        <Text style={[styles.fontSizeText, { color: theme.colors.text }]}>
          Line height : {settings.lineHeight}
        </Text>
        <Slider
          minimumValue={lineHeight["min"]}
          maximumValue={lineHeight["max"]}
          // maximumTrackTintColor={"red"}
          value={settings.lineHeight}
          onValueChange={(value) => dispatch(setSetting("lineHeight", value))}
          step={1}
          disabled={false}
          style={styles.fontSizeSlider}
        />
      </View>
      <View style={styles.fontSizeContainer}>
        <Text style={[styles.textAlignText, { color: theme.colors.text }]}>
          Text align : {settings.textAlign}
        </Text>
        {textAlign.map((t) => {
          const checked = settings.textAlign === t;
          const onPress = () => dispatch(setSetting("textAlign", t));
          return (
            <Checkbox key={t} title={t} checked={checked} onPress={onPress} />
          );
        })}
      </View>
      <View style={styles.fontSizeContainer}>
        <Text style={[styles.textAlignText, { color: theme.colors.text }]}>
          Theme : {settings.theme}
        </Text>
        {themes.map((t) => {
          const checked = settings.theme === t;
          const onPress = () => dispatch(setSetting("theme", t));
          return (
            <Checkbox key={t} title={t} checked={checked} onPress={onPress} />
          );
        })}
      </View>
      <View style={styles.fontSizeContainer}>
        <Text style={exampleStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales
          convallis egestas. Vivamus ac massa sed orci ultrices tincidunt. In
          tempor nisl in euismod aliquam. Sed in lectus vestibulum, dignissim
          est et, iaculis lacus. Aliquam in vulputate augue. Praesent suscipit
          aliquet lorem, eu ornare quam tempor et. Vestibulum ac arcu rutrum
          mauris consectetur convallis nec non lacus.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = {
  container: { alignItems: "center" },
  fontSizeContainer: {
    width: "95%",
    padding: 0,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  fontSizeSlider: {
    width: "65%",
  },
  fontSizeText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textAlignText: {
    width: "100%",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
};

export default SettingsScreen;
