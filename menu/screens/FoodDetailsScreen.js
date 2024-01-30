import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect, useContext } from "react";
import { FOODS } from "../data/dummy-data";
import FoodIngredients from "../components/FoodIngredients";
import { AntDesign } from "@expo/vector-icons";
import { FavoriteContext } from "../store/favoriteContext";

export default function FoodDetailsScreen({ route, navigation }) {
  const favoriteFoodContext = useContext(FavoriteContext);
  const foodId = route.params.foodId;
  const selectedFood = FOODS.find((food) => food.id === foodId);
  const foodIsFavorite = favoriteFoodContext.ids.includes(foodId);
  const pressHandler = () => {
    console.log("tıklandı");
  };

  function changheFavorite() {
    if (foodIsFavorite) {
      favoriteFoodContext.removeFavorite(foodId);
    }
    else{
      favoriteFoodContext.addFavorite(foodId);
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable
            onPress={pressHandler}
            style={({ pressed }) => pressed && styles.pressed}
          >
            <AntDesign
              name={foodIsFavorite ? "star" : "staro"}
              size={24}
              color="white"
              onPress={changheFavorite}
            />
          </Pressable>
        );
      },
    });
  }, [navigation, changheFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedFood.imageUrl }} />

      <Text style={styles.title}>{selectedFood.title}</Text>

      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedFood.complexity}</Text>
        <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
      </View>

      <View style={styles.listContainer}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>İçindekiler</Text>
        </View>

        <FoodIngredients data={selectedFood.ingredients} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 50,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
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
    color: "red",
  },
  listContainer: {
    width: "100%",
    paddingHorizontal: 10,
  },
  subTitleContainer: {
    alignItems: "center",
    borderBottomWidth: 1,
  },
  subTitle: {
    color: "orange",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  pressed: { opacity: 0.5 },
});
