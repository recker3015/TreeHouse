import { View, Text } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: {
            focused: "home",
            unfocused: "home-outline",
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
