import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";

export default function CategoriesScreen() {
  function renderCategoryItem(itemData) {
    console.log(itemData.item.title);
    return(
        <CategoryGrid title={itemData.item.title} itemData={itemData}/>
    )
    
    
    
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({container:{
    marginTop:25
}});
