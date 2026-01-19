import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen.js";
import ProfileScreen from "./screens/ProfileScreen";
import {
  HomeIcon,
  AllAppsIcon,
  GoldIcon,
  GameIcon,
  ProfileIcon,
} from "./components/icon/bottomNav";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 85,
            paddingTop: 8,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused }) => (
              <HomeIcon size={24} active={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="AllApps"
          component={HomeScreen}
          options={{
            tabBarLabel: "All Apps",
            tabBarIcon: ({ focused }) => (
              <AllAppsIcon size={24} active={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="Gold"
          component={HomeScreen}
          options={{
            tabBarLabel: "Gold",
            tabBarIcon: ({ focused }) => (
              <GoldIcon size={24} active={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="Games"
          component={HomeScreen}
          options={{
            tabBarLabel: "Game",
            tabBarIcon: ({ focused }) => (
              <GameIcon size={24} active={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ focused }) => (
              <ProfileIcon size={24} active={focused} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
