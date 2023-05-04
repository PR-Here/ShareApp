import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../types/RootStackParamList";
import Strings from "../../utils/Strings";
import Welcome from "../../screen/welcome/Welcome";


const RootStack = createStackNavigator<RootStackParamList>();

const Stack = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Welcome"
    >
      <RootStack.Screen name="Welcome" component={Welcome} />
    </RootStack.Navigator>
  );
};

export default Stack;
