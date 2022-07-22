import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal, ScrollView } from "react-native";
import { CartItems } from "../context";
import Divider from "./divider";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const ViewCart = (props) => {
  const restaurantName = props.restaurantName;
  const { cart, setCart } = useContext(CartItems);
  const [modal, setModal] = useState(false);
  const total = cart
    .map((item) => Number(item.price.replace("£", "")))
    .reduce((prev, curr) => prev + curr, 0);
  console.log("Total price: ", total);

  const Checkout = () => {
    return (
      <View style={styles.modalWrapper}>
        <Pressable style={styles.modalBox} onPress={() => setModal(false)}>
          <AntDesign name="closecircle" size={30} color="black" />
        </Pressable>
        <View style={styles.modal}>
          <Text style={styles.modalRestaurantTitle}>{restaurantName}</Text>
          <View style={styles.deliveryTextWrapper}>
            <Ionicons name="timer-outline" size={20} color="green" />
            <Text style={styles.modalText}>Delivery in 30 mins</Text>
          </View>
          <Divider />

          {cart.map((item) => (
            <View key={item.id} style={styles.cartItems}>
              <Text style={styles.cartItemsText}>{item.name}</Text>
              <Text style={styles.cartItemsText}>{item.price}</Text>
            </View>
          ))}

          <Divider />
          <ScrollView>
          <View style={styles.offersWrapper}>
            <Text style={styles.offersTitle}>Offers</Text>
            <View style={styles.offersTextWrapper}>
              <MaterialCommunityIcons
                name="brightness-percent"
                size={24}
                color="blue"
              />
              <Text style={styles.offersText}>Select a promo code</Text>
            </View>
          </View>
          <Divider />
          <View style={styles.climateWrapper}>
            <Text style={styles.climateTitle}>Climate conscious delivery</Text>
            <View style={styles.climateTextWrapper}>
                <View>
                <FontAwesome name="cutlery" size={24} color="#7FFF00" />
                </View>
                <View>
                    <Text style={styles.climateText}>Don't send cutlery, tissues and straws</Text>
                    <Text>Thank you for caring about the environment</Text>
                </View>
                <View>
                <Ionicons name="checkbox-sharp" size={24} color="#00693E" />
                </View>
            </View>
          </View>
          <Divider />
          <View style={styles.environmentWrapper}>
            <View>
            <Entypo name="leaf" size={24} color="#008B8B" />
            </View>
            <View>
                <Text style={{color: 'grey', marginLeft: 13,}}>We fund environmental projects to offset carbon footprint of our deliveries</Text>
            </View>
          </View>
          <Divider />
          <View style={styles.totalWrapper}>
            <View style={[styles.priceRow, styles.totalColor]}>
                <Text>Total</Text>
                <Text style={styles.priceUI}>£{total}</Text>
            </View>
            <View style={styles.priceRow}>
                <Text>Delivery Fee</Text>
                <Text style={styles.priceUI}>£5</Text>
            </View>
            <View style={styles.priceRow}>
                <Text>Donation</Text>
                <Text style={styles.priceUI}>£3</Text>
            </View>
          </View>
          </ScrollView>
        </View>
      </View>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          alert.alert("Modal has been closed.");
          setModalVisible(!modal);
        }}
      >
        {Checkout()}
      </Modal>
      <View>
        {total > 0 ? (
          <Pressable
            style={styles.viewCartbutton}
            onPress={() => setModal(true)}
          >
            <Text style={styles.buttonText}>View Cart • £{total}</Text>
          </Pressable>
        ) : null}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  viewCartbutton: {
    backgroundColor: "#FF3366",
    width: 170,
    borderRadius: 4,
    padding: 10,
    position: "absolute",
    bottom: 40,
    left: 110,
    borderColor: "black",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  modalWrapper: {
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
  },
  modal: {
    height: 500,
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  modalBox: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  modalRestaurantTitle: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 17,
    color: "#FF3366",
  },
  deliveryTextWrapper: {
    flexDirection: "row",
    marginHorizontal: 3,
    padding: 10,
    AlignItems: "center",
    marginTop: 8,
  },
  modalText: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: "600",
    marginTop: 1,
  },
  cartItems: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 4,
    padding: 10,
  },
  cartItemsText: {
    fontWeight: "600",
    color: "#FF3366",
  },
  offersWrapper: {
    marginHorizontal: 4,
    padding: 10,
  },
  offersTitle: {
    fontSize: 16,
    paddingVertical: 4,
  },
  offersTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  offersText: {
    marginLeft: 10,
    fontSize: 14,
    color: "grey",
  },
  climateWrapper: {
    marginHorizontal: 4,
    padding: 10,
  },
  climateTitle: {
    fontWeight: "600",
  },
  climateTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  climateText: {
    color: '#03C03C',
  },
  environmentWrapper: {
    marginHorizontal: 4,
    padding: 10,
    flexDirection: "row",
    alignItems: 'center',
  },
  totalWrapper: {
    marginHorizontal: 4,
    paddingHorizontal: 10,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  totalColor: {
    backgroundColor: '#FBCEB1',
    padding: 4,
  }
});

export default ViewCart;
