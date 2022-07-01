import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Homescreen from "./screens/homescreen";
import HotelRoom from "./screens/hotelRoom";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={Homescreen} />
        <Stack.Screen name="HotelRoom" component={HotelRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
