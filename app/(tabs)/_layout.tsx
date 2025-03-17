import {
  AccountIcon,
  ActivityIcon,
  HomeIcon,
  ServicesIcon,
} from "@/components/TabBarIcon";
import { defaults } from "@/constants/defaults";
import { Tabs } from "expo-router";
import React from "react";

export default function Index() {
  console.log("Tabs Layout");
  return (
    <Tabs screenOptions={defaults.navigation.tabs}>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", tabBarIcon: HomeIcon }}
      />
      <Tabs.Screen
        name="services"
        options={{ title: "Services", tabBarIcon: ServicesIcon }}
      />
      <Tabs.Screen
        name="activity"
        options={{ title: "Activity", tabBarIcon: ActivityIcon }}
      />
      <Tabs.Screen
        name="account"
        options={{ title: "Account", tabBarIcon: AccountIcon }}
      />
    </Tabs>
  );
}
