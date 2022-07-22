import React from "react";
import { StyleSheet, View } from "react-native";

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    borderColor: "#E8E8E8",
    height: 1,
    borderWidth: 1,
    marginVertical: 3,
  },
});

export default Divider;
