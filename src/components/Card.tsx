import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.productImage} source={require('../assets/girl1.png')} />
            <View>
                <Text>Jacket Jeans</Text>
                <Text>$45.5</Text>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        borderWidth:1,
        borderColor:"#000",
        
    },
    productImage:{
        height:256,
        width:120,
        marginHorizontal:20
    }
})