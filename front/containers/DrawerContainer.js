import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home/Home";
import SearchColleague from "../screens/SearchColleague";
import DrawerContent from "../screens/DrawerContent";
import BranchesList from "../screens/BranchesList";
import Branch from "../screens/Branch";
import newBranch from "../screens/Admin/newBranch";
import BranchsMap from "../components/Map/BranchsMap";
import { CreateUser } from "../screens/CreateUser";
import UserDetails from "../screens/UserDetails";

const Drawer = createDrawerNavigator();

export default function DrawerContainer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" options={{ headerShown: false }} component={Home} />
      <Drawer.Screen name="SearchColleague" options={{ headerShown: false }} component={SearchColleague} />
      <Drawer.Screen name="BranchesList" options={{ headerShown: false }} component={BranchesList} />
      <Drawer.Screen name="Branch" options={{ headerShown: false }} component={Branch} />
      <Drawer.Screen name="createBranch" options={{ headerShown: false }} component={newBranch} />
      <Drawer.Screen name="userinfo" component={UserDetails} />
      <Drawer.Screen name="Create User" options={{ headerShown: false }} component={CreateUser} />
      <Drawer.Screen name="BranchsMap" options={{ headerShown: false }} component={BranchsMap} />
    </Drawer.Navigator>
  );
}
