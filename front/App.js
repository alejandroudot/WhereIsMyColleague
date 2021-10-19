import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Main from "./Main";
import { NativeBaseProvider, Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { YellowBox } from 'react-native';

const Stack = createNativeStackNavigator();


const App = () => {
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Main />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
