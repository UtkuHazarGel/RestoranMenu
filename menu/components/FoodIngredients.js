import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FoodIngredients({data}) {
  return data.map((dataIng)=>(
    <View style={styles.listItem} key={dataIng}>
        <Text style={styles.ItemText}> {dataIng}</Text>
    </View>
  ))
}

const styles = StyleSheet.create({
    listItem:{
        backgroundColor:"orange",
        marginVertical:4,
        marginHorizontal:12,
        borderRadius:15,
        paddingVertical:4
    },
    ItemText:{
        textAlign:"center"
    }
})