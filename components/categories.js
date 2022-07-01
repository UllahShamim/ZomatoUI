import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";

const Categories = () => {
  const items = [
    {
      id: "1",
      name: "fastest delivery",
    },
    {
      id: "2",
      name: "rating 4.0+",
    },
    {
      id: "3",
      name: "offers",
    },
    {
      id: "4",
      name: "cuisines",
    },
    {
      id: "5",
      name: "MAX Safety",
    },
    {
      id: "6",
      name: "Pro",
    },
  ];

  return (
    <View style={styles.categoriesListWrapper}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => (
          <Pressable style={styles.categoriesWrapper}>
            <Text style={styles.categoryText}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesListWrapper: {
    marginTop: 6,
  },
  categoriesWrapper: {
    backgroundColor: "#FF033E",
    margin: 7,
    padding: 5,
    borderRadius: 4,
  },
  categoryText: {
    color: "#ffffff",
  },
});

export default Categories;
