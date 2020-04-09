import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainTabs from "./MainTabs";
import Search from "../screens/Search";
import Article from "../screens/Article";
import SearchHeader from "../components/SearchHeader";
import { renderMainHeader } from "../components/MainHeader";

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#244593",
        },
      }}
    >
      <HomeStack.Screen
        name="Main"
        component={MainTabs}
        options={renderMainHeader}
      />
      <HomeStack.Screen
        name="Search"
        component={Search}
        options={(props) => ({
          headerTitle: () => <SearchHeader {...props} />,
          headerTitleAlign: "center",
          headerBackTitleStyle: { tintColor: "white" },
          headerTintColor: "white",
        })}
      />
      <HomeStack.Screen
        name="Article"
        component={Article}
        options={{ headerTintColor: "white" }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
