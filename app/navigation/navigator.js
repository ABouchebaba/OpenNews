import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../screens/Profile";
import PreferenceStack from "./PreferenceStack";
import Settings from "../screens/Settings";
import Stack from "./Stack";

const Drawer = createDrawerNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerType="slide" screenOptions={{}}>
        <Drawer.Screen name="Home" component={Stack} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Preferences" component={PreferenceStack} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
