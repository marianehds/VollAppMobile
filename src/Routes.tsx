import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./Register";
import Login from "./Login";
import Tabs from "./tabs";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
