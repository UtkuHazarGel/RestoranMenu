import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function CategoryGrid({ itemData,pressFood }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={pressFood}
      >
        <View
          style={[
            styles.titleContainer,
            { backgroundColor: itemData.item.color },
          ]}
        >
          <Text style={styles.title}>{itemData.item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    margin: 15,
    elevation: 4,
    borderRadius: 20,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: "white",
  },
  button: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
