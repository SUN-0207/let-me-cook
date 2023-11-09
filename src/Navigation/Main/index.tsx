import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeContainer } from "@/Screens/Home";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

// @refresh reset
export const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Recipes"
        component={HomeContainer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="text-box-multiple-outline" color={color} size={size} />
          ),
          tabBarLabelPosition: "beside-icon",
        }}
      />
      <Tab.Screen
        name="Scan"
        component={HomeContainer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="scan-helper" color={color} size={size} />
          ),
          tabBarLabelPosition: "beside-icon",
        }}
      />
       <Tab.Screen
        name="Cart"
        component={HomeContainer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
          tabBarLabelPosition: "beside-icon",
        }}
      />
       <Tab.Screen
        name="Profile"
        component={HomeContainer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          tabBarLabelPosition: "beside-icon",
        }}
      />
    </Tab.Navigator>
  );
};
