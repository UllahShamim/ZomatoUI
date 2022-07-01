import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HotelComponent = (props) => {
  const restaurant = props.restaurant;
  const navigation = useNavigation();
  console.log(restaurant);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("HotelRoom", {
          id: restaurant.id,
          name: restaurant.name,
          aggregate_rating: restaurant.aggregate_rating,
          address: restaurant.address,
          small_address: restaurant.small_address,
          cuisine: restaurant.cuisines,
        })
      }
    >
      <View style={styles.cardWrapper}>
        <Image
          source={{ uri: restaurant.featured_image }}
          style={styles.image}
        />
        <View style={styles.descriptionWrapper}>
          <View style={styles.textWrapper}>
            <Text style={styles.restaurantInfoTitle}>{restaurant.name}</Text>
            <Text style={styles.restaurantInfoSubtitle}>
              {restaurant.cuisines}
            </Text>
          </View>

          <View style={styles.rating}>
            <Text style={styles.ratingText}>{restaurant.aggregate_rating}</Text>
            <AntDesign name="star" size={18} color="white" />
          </View>
        </View>

        <View style={styles.imageElements}>
          <AntDesign
            name="clockcircleo"
            size={16}
            color="#17B169"
            style={styles.clockIcon}
          />
          <Text>{restaurant.time}</Text>
        </View>

        <View style={styles.moneyOffWrapper}>
          <Text style={styles.moneyOff}>{restaurant.offer}</Text>
          <Text style={styles.averageCost}>
            Up to £{restaurant.average_cost_for_two}
          </Text>
        </View>

        <View style={styles.divider} />
        <View style={styles.additionalInformationWrapper}>
          <View style={styles.iconWrapper}>
            <AntDesign
              name="doubleright"
              size={20}
              color="white"
              style={styles.rightArrowIcon}
            />
          </View>
          <Text style={styles.additionalInformationText}>
            {restaurant.no_of_delivery}+ orders placed here
          </Text>
          <View style={styles.additionalInformationRightWrapper}>
            <Text style={styles.additionalInformationRightText}>
              MAX SAFETY
            </Text>
            <Text style={styles.additionalInformationRightText}>DELIVERY</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    margin: 10,
    backgroundColor: "white",
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },
  image: {
    width: "100%",
    aspectRatio: 6 / 4,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  descriptionWrapper: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  restaurantInfoTitle: {
    fontSize: 17,
    fontWeight: "600",
  },
  restaurantInfoSubtitle: {
    fontSize: 15,
    color: "gray",
    marginVertical: 5,
  },
  textWrapper: {},
  rating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#17B169",
    padding: 7,
    borderRadius: 6,
  },
  ratingText: {
    marginRight: 4,
    marginTop: 2,
    color: "white",
    fontSize: 16,
  },
  divider: {
    height: 1,
    borderColor: "#F0F0F0",
    borderWidth: 1,
    marginBottom: 5,
  },
  additionalInformationWrapper: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  rightArrowIcon: {},
  iconWrapper: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#1F75FE",
    alignItems: "center",
    justifyContent: "center",
  },
  additionalInformationText: {
    marginLeft: 5,
  },
  additionalInformationRightWrapper: {
    marginLeft: 45,
  },
  additionalInformationRightText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  imageElements: {
    position: "absolute",
    top: 190,
    right: 10,
    backgroundColor: "white",
    padding: 4,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  clockIcon: {
    marginRight: 4,
  },
  moneyOffWrapper: {
    position: "absolute",
    backgroundColor: "#6495ED",
    top: 170,
    paddingLeft: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    padding: 5,
  },
  moneyOff: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 2,
  },
  averageCost: {
    color: "black",
    fontWeight: "bold",
  },
});

export default HotelComponent;
