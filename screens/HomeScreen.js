import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import {
  SearchIcon,
  GridIcon,
  ListIcon,
  CloseCircleIcon,
} from "../components/icon/common";
import {
  ApproveNow,
  Discipline,
  Learning,
  Reward,
  Task,
} from "../components/icon/work";
import {
  Birthday,
  Care,
  Dating,
  Events,
  Payslip,
  Survey,
} from "../components/icon/utilities";
import { News, StarAve } from "../components/icon/news";
import { EmployeeInfo } from "../components/icon/wiki";
import { Game } from "../components/icon/game";

export default function HomeScreen() {
  const [viewMode, setViewMode] = useState("list");
  const [searchQuery, setSearchQuery] = useState("");

  const filterItems = (items) => {
    if (!searchQuery.trim()) return items;
    return items.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  };

  const work = [
    {
      id: 1,
      title: "Approve Now",
      subtitle:
        "Notify managers of pending requests and allow managers to approve/reject requests from internal tools",
      icon: <ApproveNow size={50} />,
    },
    {
      id: 2,
      title: "Reward",
      subtitle:
        "Send colleagues a thank you note or reward Gold for exceptional contribution",
      icon: <Reward size={50} />,
    },
    {
      id: 3,
      title: "Discipline",
      subtitle:
        "Send a discipline warning to subordinates for violation of codes of conduct",
      icon: <Discipline size={50} />,
    },
    {
      id: 4,
      title: "Learning",
      subtitle:
        "View a list of mandatory, registered and suggested learning courses, check-in and send feedback for each course",
      icon: <Learning size={50} />,
    },
    {
      id: 5,
      title: "My Tasks",
      icon: <Task size={50} />,
    },
  ];

  const utilities = [
    {
      id: 1,
      title: "FPT Care",
      subtitle: "FPT Care",
      icon: <Care size={50} />,
    },
    {
      id: 2,
      title: "Events",
      subtitle:
        "Register, check-in, check-out, send feedback to company events and programs",
      icon: <Events size={50} />,
    },
    {
      id: 3,
      title: "Survey",
      subtitle:
        "View and collect responses for company-wide or department-wide surveys",
      icon: <Survey size={50} />,
    },
    {
      id: 4,
      title: "FPT Dating",
      subtitle: "Dating feature.",
      icon: <Dating size={50} />,
    },
    {
      id: 5,
      title: "Payslip",
      subtitle: "Payslip",
      icon: <Payslip size={50} />,
    },
    {
      id: 6,
      title: "Birthday",
      subtitle: `Your birthday is a special moment. We're very happy to send the best wishes for you. 
Colleagues can send you birthday wishes on myFPT.`,
      icon: <Birthday size={50} />,
    },
  ];

  const news = [
    {
      id: 1,
      title: "News",
      subtitle:
        "A collection of latest news and notable events around the company",
      icon: <News size={50} />,
    },
    {
      id: 2,
      title: "Star Ave",
      subtitle:
        "Recognise notable achievements within a business unit or within FPT",
      icon: <StarAve size={50} />,
    },
  ];

  const wiki = [
    {
      id: 1,
      title: "Employee Info",
      subtitle:
        "Basic, non-confidential employee information (name, gender, department, etc.)",
      icon: <EmployeeInfo size={50} />,
    },
  ];

  const game = [
    {
      id: 1,
      title: "Game",
      subtitle: "Community-engaging games with Gold as rewards",
      icon: <Game size={50} />,
    },
  ];

  const renderListView = (items, isLast) => {
    return items.map((item, index) => (
      <View style={styles.menuItemParent} key={item.id}>
        <TouchableOpacity
          style={[
            styles.menuItem,
            index === items.length - 1 && styles.lastMenuItem,
          ]}
        >
          <View style={styles.iconContainer}>
            {item.icon || <View style={styles.iconPlaceholder} />}
          </View>
          <View style={styles.menuContent}>
            <Text style={styles.menuTitle}>{item.title}</Text>
            <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
          </View>
        </TouchableOpacity>
      </View>
    ));
  };

  const renderGridView = (items) => {
    const rows = [];
    for (let i = 0; i < items.length; i += 4) {
      rows.push(items.slice(i, i + 4));
    }

    return (
      <View style={styles.gridContainer}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.gridRow}>
            {row.map((item) => (
              <TouchableOpacity key={item.id} style={styles.gridItem}>
                <View style={styles.gridIconContainer}>
                  {item.icon || <View style={styles.iconPlaceholder} />}
                </View>
                <Text style={styles.gridTitle} numberOfLines={2}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
            {/* Fill empty spaces if row has less than 4 items */}
            {row.length < 4 &&
              Array(4 - row.length)
                .fill(0)
                .map((_, index) => (
                  <View key={`empty-${index}`} style={styles.gridItem} />
                ))}
          </View>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputWrapper}>
            <SearchIcon size={18} />
            <TextInput
              style={styles.searchInput}
              placeholder="Type feature's name"
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery("")}>
                <CloseCircleIcon size={18} />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            style={styles.gridIconButton}
            onPress={() => setViewMode(viewMode === "list" ? "grid" : "list")}
          >
            {viewMode === "list" ? (
              <GridIcon size={25} />
            ) : (
              <ListIcon size={25} />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollContent}>
        <Text style={styles.pageTitle}>All Apps</Text>
        {/* Work Section */}
        {filterItems(work).length > 0 && (
          <>
            <Text style={styles.sectionTitle}>WORK</Text>
            {viewMode === "list"
              ? renderListView(filterItems(work))
              : renderGridView(filterItems(work))}
          </>
        )}
        {/* Utilities Section */}
        {filterItems(utilities).length > 0 && (
          <>
            <Text style={styles.sectionTitle}>UTILITIES</Text>
            {viewMode === "list"
              ? renderListView(filterItems(utilities))
              : renderGridView(filterItems(utilities))}
          </>
        )}
        {/* News Section */}
        {filterItems(news).length > 0 && (
          <>
            <Text style={styles.sectionTitle}>NEWS</Text>
            {viewMode === "list"
              ? renderListView(filterItems(news))
              : renderGridView(filterItems(news))}
          </>
        )}
        {/* Wiki Section */}
        {filterItems(wiki).length > 0 && (
          <>
            <Text style={styles.sectionTitle}>WIKI</Text>
            {viewMode === "list"
              ? renderListView(filterItems(wiki))
              : renderGridView(filterItems(wiki))}
          </>
        )}
        {/* Game Section */}
        {filterItems(game).length > 0 && (
          <>
            <Text style={styles.sectionTitle}>GAME</Text>
            {viewMode === "list"
              ? renderListView(filterItems(game))
              : renderGridView(filterItems(game))}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerContainer: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  searchInputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    paddingHorizontal: 12,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    padding: 7,
    fontSize: 14,
  },
  gridIconButton: {
    marginLeft: 8,
    padding: 6,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 10,
    backgroundColor: "white",
  },
  scrollContent: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  sectionTitle: {
    fontSize: 12,
    color: "#858585",
    marginLeft: 16,
    marginTop: 9,
    marginBottom: 6,
    fontWeight: "600",
    letterSpacing: 0.5,
    backgroundColor: "#F5F5F5",
    paddingTop: 10,
    paddingBottom: 6,
    paddingHorizontal: 16,
    marginLeft: 0,
  },
  menuItem: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingTop: 11,
    paddingBottom: 20,
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: "#eeecec",
    marginHorizontal: 16,
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuItemParent: {
    backgroundColor: "white",
  },
  iconPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: "#E3F2FD",
    borderRadius: 8,
    marginRight: 12,
    marginTop: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 18,
    marginLeft: 8,
    marginTop: 10,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },
  menuSubtitle: {
    fontSize: 11.5,
    color: "#858585",
    lineHeight: 18,
  },
  // Grid styles
  gridContainer: {
    backgroundColor: "white",
  },
  gridRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 24,
  },
  gridItem: {
    width: "25%",
    alignItems: "center",
  },
  gridIconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  gridTitle: {
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    color: "#333",
  },
});
