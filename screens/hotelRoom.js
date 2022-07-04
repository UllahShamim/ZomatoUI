import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import Menu from "../components/menu";

import menuData from "../data/menuData";

const HotelRoom = () => {
  const data = menuData;  
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.iconMenuWrapper}>
        <Pressable
          style={styles.backIconWrapper}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="#ffffff" />
        </Pressable>
        <View style={styles.rightIconsWrapper}>
          <Pressable style={styles.rightIcon}>
            <Feather name="camera" size={28} color="black" />
          </Pressable>
          <Pressable style={styles.rightIcon}>
            <Feather name="bookmark" size={28} color="black" />
          </Pressable>
          <Pressable style={styles.rightIcon}>
            <Ionicons name="ios-share-outline" size={29} color="black" />
          </Pressable>
        </View>
      </View>
      <View style={styles.informationWrapper}>
        <View>
          <Text style={styles.title}>{route.params.name}</Text>
          <Text style={styles.subtitle}>{route.params.cuisine}</Text>
          <Text style={styles.subTitleTitle}>{route.params.small_address}</Text>
        </View>
        <View style={styles.ratingInformation}>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>
              {route.params.aggregate_rating}
            </Text>
            <FontAwesome
              name="star"
              size={24}
              color="#ffffff"
              style={styles.ratingStar}
            />
          </View>
          <View style={styles.photo}>
            <Text style={styles.photoText}>30</Text>
            <Text style={styles.photoText}>PHOTOS</Text>
          </View>
        </View>
      </View>
      <View style={styles.deliveryWrapper}>
        <View style={styles.deliveryInnerWrapper}>
          <MaterialCommunityIcons
            name="bike-fast"
            size={24}
            color="gray"
            style={styles.deliveryIcons}
          />
          <View style={styles.deliveryText}>
            <Text>Mode</Text>
            <Text>Delivery</Text>
          </View>
        </View>
        <View style={styles.deliveryInnerWrapper}>
          <Ionicons
            name="timer-outline"
            size={24}
            color="gray"
            style={styles.deliveryIcons}
          />
          <View style={styles.deliveryText}>
            <Text>Time</Text>
            <Text>30 minutes or free</Text>
          </View>
        </View>
        <View style={styles.deliveryInnerWrapper}>
          <MaterialCommunityIcons
            name="brightness-percent"
            size={24}
            color="blue"
            style={styles.deliveryIcons}
          />
          <View style={styles.deliveryText}>
            <Text>Offers</Text>
            <Text>View all</Text>
          </View>
        </View>
      </View>
      <View style={styles.searchUI}>
        <Fontisto name="motorcycle" size={24} color="black" />
        <Text style={styles.searchUIText}>£2.50 additional distance fee</Text>
      </View>
        {/* menu items section */}
      <View style={styles.menuWrapper}>
        <Text style={styles.menuTextTitle}>Menu</Text>
        <View style={styles.menuTextTitleDivider}/>
      </View>

      {data.map((item) => <Menu menu={item}/>)}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backIconWrapper: {
    backgroundColor: "#1F75FE",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  iconMenuWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    alignItems: "center",
  },
  rightIconsWrapper: {
    flexDirection: "row",
  },
  rightIcon: {
    padding: 6,
  },
  informationWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 10,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#17B169",
    padding: 6,
    paddingLeft: 10,
    marginRight: -20,
    width: 80,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 4,
    marginTop: 2,
    color: "#ffffff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 4,
  },
  subTitleTitle: {
    fontSize: 16,
    color: "gray",
  },
  photo: {
    backgroundColor: "#FF007F",
    marginTop: 10,
    padding: 6,
    paddingLeft: 10,
    marginRight: -20,
    width: 80,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  photoText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#ffffff",
  },
  deliveryInnerWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  deliveryText: {
    marginLeft: 8,
  },
  deliveryWrapper: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  deliveryIcons: {
    backgroundColor: "#D8D8D8",
    padding: 5,
  },
  searchUI: {
    backgroundColor: 'grey',
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    paddingLeft: 10,
    borderRadius: 7,
    backgroundColor: "#C8C8C8",
  },
  searchUIText: {
    marginLeft: 7,
    fontSize: 16,
  },
  menuWrapper: {
    margin: 10,
  },
  menuTextTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  menuTextTitleDivider: {
    borderColor: '#ff1943',
    borderWidth: 2,
    width: 70,
    marginTop: 4,
  },
});

export default HotelRoom;
