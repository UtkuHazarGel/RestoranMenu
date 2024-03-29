import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function FoodItem({
  id,
  title,
  imageUrl,
  affordability,
  complexity,
}) {
  const navigation = useNavigation();
  function FoodItemHandler() {
    navigation.navigate("FoodDetails", {
      foodId: id,
    });
  }
  return (
    <View style={styles.foodItem}>
      <Pressable
        style={({ pressed }) => pressed && styles.buttonPressed}
        onPress={FoodItemHandler}
      >
        <View style={styles.innerView}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{complexity}</Text>
            <Text style={styles.detailItem}>{affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  foodItem: {
    margin: 15,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 10,
  },
  innerView: {},
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    margin: 8,
  },

  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  detailItem: {
    marginHorizontal: 5,
    fontSize: 14,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
