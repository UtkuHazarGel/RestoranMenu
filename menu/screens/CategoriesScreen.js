import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";

export default function CategoriesScreen({navigation}) {
  function renderCategoryItem(itemData) {
    function pressHandler(){
        navigation.navigate("FoodOverview",{categoryId:itemData.item.id})
    }
    console.log(itemData.item.title);
    return(
        <CategoryGrid pressFood={pressHandler} title={itemData.item.title} itemData={itemData}/>
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
   
}});
