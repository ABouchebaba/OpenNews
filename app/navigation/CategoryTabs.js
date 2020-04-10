import React from "react";
import Headlines from "../screens/Headlines";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSelector } from "react-redux";
import { availableCategories } from "../Store/selectors";
import { catInFrench } from "../helpers";

const CategoryTabs = createMaterialTopTabNavigator();

const CategoryTabsScreen = () => {
  const categories = useSelector(availableCategories);

  const tabBarOptions = {
    scrollEnabled: true,
    tabStyle: { width: "auto", paddingHorizontal: 5 },
    labelStyle: { fontSize: 12, alignSelf: "center" },
    style: { height: 40 },
  };

  return (
    <CategoryTabs.Navigator tabBarOptions={tabBarOptions}>
      <CategoryTabs.Screen
        name="Tout"
        component={Headlines}
        initialParams={{ category: "All" }}
      />
      {categories.map((c) => (
        <CategoryTabs.Screen
          key={c}
          name={catInFrench(c)}
          component={Headlines}
          initialParams={{ category: c }}
        />
      ))}
    </CategoryTabs.Navigator>
  );
};

export default CategoryTabsScreen;
