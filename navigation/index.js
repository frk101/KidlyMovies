import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MovieListScreen from "../screens/MovieListScreen";
import MovieDetailScreen from "../screens/MovieDetailScreen";

export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="MovieList">
      <Stack.Screen
        options={{
          headerTitle: "Movie List",
        }}
        name="MovieList"
        component={MovieListScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="MovieDetail"
        component={MovieDetailScreen}
      />
     
    </Stack.Navigator>
  );
}
