import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { Provider } from "react-redux";

import store from "./business/reducers";
import Navigation from "./navigation";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Navigation />
        <StatusBar hidden />
      </NativeBaseProvider>
    </Provider>
  );
}
