import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MyProfileIcon,
  SettingsIcon,
  SupportIcon,
  FAQIcon,
  AdminIcon,
  LogoutIcon,
  CameraIcon,
  BannerIcon,
} from "../components/icon/myProfile";
import { ArrowIcon } from "../components/icon/common";
import {
  useFonts,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import { Dimensions } from "react-native";

export default function ProfileScreen() {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) return null;

  const { width: screenWidth } = Dimensions.get("window");

  const menuItems = [
    { id: 1, title: "My Profile", icon: <MyProfileIcon size={22} /> },
    { id: 2, title: "Settings", icon: <SettingsIcon size={22} /> },
    { id: 3, title: "Support", icon: <SupportIcon size={22} /> },
    { id: 4, title: "FAQ", icon: <FAQIcon size={22} /> },
    { id: 5, title: "Admin", icon: <AdminIcon size={22} /> },
    { id: 6, title: "Logout", icon: <LogoutIcon size={22} /> },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileHeader}>
          <View style={styles.bannerContainer}>
            <BannerIcon width={screenWidth} height={142} />
          </View>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>K</Text>
            </View>
            <TouchableOpacity style={styles.cameraIcon}>
              <CameraIcon size={36} />
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>Phạm Quang Khang (KHANGPQ3)</Text>
          <Text style={styles.userRole}>(BM SE)</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <View key={index} style={styles.menuItemParent}>
              <TouchableOpacity
                style={[
                  styles.menuItem,
                  index === menuItems.length - 1 && styles.lastMenuItem,
                ]}
              >
                <View style={styles.menuLeft}>
                  <View style={styles.menuIconContainer}>{item.icon}</View>
                  <Text style={styles.menuTitle}>{item.title}</Text>
                </View>
                {item.title !== "Logout" && (
                  <Text>
                    <ArrowIcon />
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>myFPT Version 5.3.10</Text>
          <Text style={styles.footerText}>Copyright @ FPT Software 2021</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  profileHeader: {
    backgroundColor: "white",
    alignItems: "center",
    paddingBottom: 24,
    marginBottom: 16,
    marginTop: 18,
  },
  bannerContainer: {
    width: "100%",
    overflow: "hidden",
  },
  avatarContainer: {
    position: "relative",
    marginTop: -70,
    marginBottom: 12,
  },
  avatar: {
    width: 125,
    height: 125,
    borderRadius: 400,
    backgroundColor: "#DEF2FE",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "white",
  },
  avatarText: {
    fontSize: 60,
    color: "#1C9DE8",
    fontFamily: "Montserrat_600SemiBold",
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 16,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  userRole: {
    fontSize: 14,
    color: "#666",
  },
  menuContainer: {
    backgroundColor: "white",
    marginBottom: 20,
  },
  menuItemParent: {
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIconContainer: {
    width: 24,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  menuTitle: {
    fontSize: 15,
    fontWeight: 500,
  },
  footer: {
    alignItems: "center",
    paddingVertical: 24,
  },
  footerText: {
    fontSize: 12,
    color: "#999",
    marginBottom: 4,
  },
});
