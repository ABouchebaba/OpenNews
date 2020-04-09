import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Preferences from "../screens/Preferences";
const PreferenceStack = createStackNavigator();

function PreferenceStackScreen() {
  return (
    <PreferenceStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#244593",
        },
      }}
    >
      <PreferenceStack.Screen
        name="Preferences"
        component={Preferences}
        options={{ headerTintColor: "white" }}
      />
    </PreferenceStack.Navigator>
  );
}

export default PreferenceStackScreen;
