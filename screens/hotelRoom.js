import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HotelRoom = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <SafeAreaView>
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
            <Ionicons name="ios-share-outline" size={28} color="black" />
          </Pressable>
        </View>
      </View>
      <View style={styles.informationWrapper}>
        <View style={styles.textInformation}>
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
  textInformation: {},
  ratingInformation: {},
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
  ratingStar: {},
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
    fontWeight: 'bold',
    color: '#ffffff'
  },
});

export default HotelRoom;
