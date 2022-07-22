import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Menu = ({ menu, cart, setCart }) => {
  const [addItems, setAddItems] = useState(0);
  const bestseller = true;
  return (
    <View style={styles.menuWrapper}>
      <View>
        <View style={styles.menuItemInformationWrapper}>
          <Text style={styles.menuItemTitle}>{menu.name}</Text>
          <Text style={styles.menuItemPrice}>{menu.price}</Text>
        </View>
        <View style={styles.ratingWrapper}>
          <Text style={styles.rating}>
            {[0, 0, 0, 0, 0].map((en, i) => (
              <FontAwesome
                key={`${menu.id}-${i}`}
                name={i < Math.floor(menu.star) ? "star" : "star-o"}
                style={{ padding: 2 }}
                size={13}
                color="#FFD700"
              />
            ))}
          </Text>
          <Text style={styles.bestOrMust}>
            {(bestseller && menu.bestSeller) || menu.mustTry}
          </Text>
        </View>
        <View style={styles.iconWrapper}>
          <View style={styles.heartIconWrapper}>
            <Feather
              name="heart"
              size={24}
              color="#ff1943"
              style={styles.heart}
            />
          </View>
          <View style={styles.shareIconWrapper}>
            <MaterialCommunityIcons
              name="share-outline"
              size={24}
              color="#ff1943"
            />
          </View>
        </View>
      </View>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: menu.image }} style={styles.image} />
        <Pressable style={styles.addItemWrapper}>
          <Pressable>
            <Text
              style={styles.minusAddSign}
              onPress={() => {
                setCart(cart.filter((p) => p.id !== menu.id));
                setAddItems(Math.max(0, addItems - 1));
              }}
            >
              -
            </Text>
          </Pressable>
          <Pressable>
            <Text style={styles.addItemsNumber}>{addItems}</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setCart([...cart, menu]);
              setAddItems(addItems + 1);
            }}
          >
            <Text style={styles.minusAddSign}>+</Text>
          </Pressable>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuItemInformationWrapper: {
    width: 200,
    marginTop: 20,
  },
  menuItemTitle: {
    fontSize: 17,
    fontWeight: "600",
  },
  menuItemPrice: {
    fontSize: 14,
    marginTop: 4,
  },
  ratingWrapper: {
    width: 100,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  menuWrapper: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rating: {
    backgroundColor: "#FFFFF0",
    padding: 3,
    borderRadius: 4,
  },
  bestOrMust: {
    marginLeft: 15,
    color: "black",
    padding: 3,
    backgroundColor: "#F88379",
  },
  heartIconWrapper: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 17,
    borderWidth: 1,
  },
  heart: {
    padding: 4,
  },
  iconWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  shareIconWrapper: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 17,
    borderWidth: 1,
    marginLeft: 10,
  },
  image: {
    height: 110,
    width: 110,
    borderRadius: 15,
    marginRight: 15,
  },
  addItemWrapper: {
    position: "absolute",
    right: 22,
    top: 90,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF3366",
    borderRadius: 5,
  },
  minusAddSign: {
    fontSize: 20,
    color: "white",
    paddingHorizontal: 10,
  },
  addItemsNumber: {
    fontSize: 20,
    color: "white",
    paddingHorizontal: 10,
  },
});

export default Menu;
