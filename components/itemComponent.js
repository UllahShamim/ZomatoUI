import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ItemComponent = () => {
  return (
    <>
      <View style={styles.titleWrapper}>
        <Text style={styles.componentTitle}>Eat what makes you happy!</Text>
      </View>
      <View style={styles.componentWrapper}>
        <View style={styles.listWrapper}>
          <Image
            style={styles.middleImage}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZDb8hWL40qKbszAavTSLFkyOcAhvnPmgXw&usqp=CAU",
            }}
          />
          <Text style={styles.imageText}>Thalis</Text>
        </View>
        <View style={styles.listWrapper}>
          <Image
            style={styles.middleImage}
            source={{
              uri: "https://www.simplyrecipes.com/thmb/mbN8mXZ0srgAT1YrDU61183t0uM=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1b-ea13798d224048b3a28afb0936c9b645.jpg",
            }}
          />
          <Text style={styles.imageText}>Pizzas</Text>
        </View>
        <View style={styles.listWrapper}>
          <Image
            style={styles.middleImage}
            source={{
              uri: "https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2240,c_limit/basically-burger-1.jpg",
            }}
          />
          <Text style={styles.imageText}>Burgers</Text>
        </View>
        <View style={styles.listWrapper}>
          <Image
            style={styles.middleImage}
            source={{
              uri: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/dosa-recipe-1.jpg",
            }}
          />
          <Text style={styles.imageText}>Dosas</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  componentWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  titleWrapper: {
    marginTop: 5,
  },
  componentTitle: {
    fontSize: 19,
    fontWeight: "bold",
    padding: 4,
  },
  listWrapper: {
    margin: 6,
  },
  middleImage: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  imageText: {
    fontSize: 16,
    fontWeight: "600",
    color: "gray",
    margin: 10,
    textAlign: "center",
  },
});

export default ItemComponent;
