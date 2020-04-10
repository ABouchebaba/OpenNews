import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../screens/Profile";
import PreferenceStack from "./PreferenceStack";
import SettingStack from "./SettingsStack";
import HomeStack from "./HomeStack";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { useSelector } from "react-redux";

const RootDrawer = createDrawerNavigator();

function RootDrawerScreen() {
  let myTheme = { ...DefaultTheme };
  myTheme.colors.background = "#fff";
  let theme = useSelector((state) => state.settings.theme);
  if (theme === "dark") theme = DarkTheme;
  else theme = myTheme;

  return (
    <NavigationContainer theme={theme}>
      <RootDrawer.Navigator drawerType="slide" screenOptions={{}}>
        <RootDrawer.Screen name="Home" component={HomeStack} />
        {/* <RootDrawer.Screen name="Profile" component={Profile} /> */}
        <RootDrawer.Screen name="Preferences" component={PreferenceStack} />
        <RootDrawer.Screen name="Settings" component={SettingStack} />
      </RootDrawer.Navigator>
    </NavigationContainer>
  );
}

export default RootDrawerScreen;
