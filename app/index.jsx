import { Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-pbold">HI THERE</Text>
      <StatusBar style="auto" />
      <Link href="/home">Goto Home</Link>
    </View>
  );
};

export default index;
