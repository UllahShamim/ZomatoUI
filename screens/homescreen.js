import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Categories from "../components/categories";
import ItemComponent from "../components/itemComponent";
import hotels from "../data/hotels";
import HotelComponent from "../components/hotelComponent";

const Homescreen = () => {
  const data = hotels;
  return (
    <View style={{backgroundColor: '#F0F0F0'}}>
    <SafeAreaView style={styles.containerWrapper}>
      <ScrollView>
        <View style={styles.searchWrapper}>
          <AntDesign name="search1" size={20} color="#FF033E" />
          <TextInput
            placeholder="Restaurant name, cuisine or a dish"
            style={styles.searchInput}
          />
        </View>
        <Categories />
        <Pressable style={styles.pressableWrapper}>
          <View style={styles.pressableItems}>
            <Image
              style={styles.pressableImage}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU",
              }}
            />
            <Image
              style={styles.pressableImage}
              source={{
                uri: "https://cdn.businesstraveller.com/wp-content/uploads/fly-images/1002269/zomato-infinity-dining-916x516-1-916x516.jpg",
              }}
            />
          </View>
        </Pressable>
        <ItemComponent />

        {data.map((item) => (
          <HotelComponent restaurant={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    margin: 10,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D8D8D8",
    padding: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#BEBEBE",
  },
  searchInput: {
    paddingLeft: 5,
  },
  pressableWrapper: {
    // marginLeft: 5,
  },
  pressableItems: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  pressableImage: {
    width: 150,
    height: 100,
    margin: 10,
    borderRadius: 7,
  },
});

export default Homescreen;
