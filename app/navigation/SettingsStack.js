import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../screens/Settings";
const SettingStack = createStackNavigator();

function SettingStackScreen() {
  return (
    <SettingStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#244593",
        },
      }}
    >
      <SettingStack.Screen
        name="Settings"
        component={Settings}
        options={{ headerTintColor: "white" }}
      />
    </SettingStack.Navigator>
  );
}

export default SettingStackScreen;
