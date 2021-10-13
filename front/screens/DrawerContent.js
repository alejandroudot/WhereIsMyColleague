import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setProfile } from "../store/profileReducer";
import { View, StyleSheet } from "react-native";
import { useTheme, Avatar, Title, Caption, Drawer } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/core";

export default function DrawerContent(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const paperTheme = useTheme();
  const [perfil, setPerfil] = useState({
    branchId: "1",
    workspaceId: "1",
    firstName: "Ramiro",
    lastName: "Arias",
    email: "ramiroarias@globant.com",
    password: "1234",
    country: "Argentina",
    city: "Buenos Aires",
    phone: "+54 11 4109-1700",
    job: "Front-End Developer",
    latitude: "-34.54100703942528",
    longitude: "-58.47279831729628",
    https: "//i.pravatar.cc/150?img=62",
  });

  const handleLogout = () => {
    dispatch(setProfile({}));
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: "https://i.pravatar.cc/150?img=62",
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>{perfil.firstName}</Title>
                <Caption style={styles.caption}>{perfil.email}</Caption>
              </View>
            </View>

            <View style={styles.row}>
              {/* <View style={styles.section}>
                                
                                <Caption style={styles.caption}>{perfil.email}</Caption>
                            </View> */}
              <View style={styles.section}>
                {/* <Paragraph style={[styles.paragraph, styles.caption]}>Tel:</Paragraph> */}
                <Caption style={styles.caption}>{perfil.job}</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Find Colleague"
              onPress={() => {
                props.navigation.navigate("SearchColleague");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="folder-plus" color={color} size={size} />
              )}
              label="Create Branch"
              onPress={() => {
                props.navigation.navigate("createBranch");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="map-marker-multiple" color={color} size={size} />
              )}
              label="Branch List"
              onPress={() => {
                props.navigation.navigate("BranchesList");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="map-marker-multiple" color={color} size={size} />
              )}
              label="Branchs Map"
              onPress={() => {
                props.navigation.navigate("BranchsMap");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="map-marker-multiple" color={color} size={size} />
              )}
              label="Create User"
              onPress={() => {
                props.navigation.navigate("Create User");
              }}
            />
            {/*  <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Bookmarks"
                            onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        /> */}
          </Drawer.Section>
          {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => handleLogout()}
        /* onPress={() => {}} */
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
