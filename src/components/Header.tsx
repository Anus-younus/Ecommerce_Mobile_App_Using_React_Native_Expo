import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appIconContainer}>
        <Image source={require("../assets/apps.png")}
          style={styles.appIcon}
        />
      </View>
      <Image source={require("../assets/account.png")} style={styles.dp}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  appIcon: {
    height: 28,
    width: 28
  },
  appIconContainer: {
    backgroundColor: "#ffff",
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center"
  },
  dp : {
    height:44,
    width:44,
    borderRadius:22
  },
  container: {
     flexDirection: "row",
     justifyContent: "space-between",
     alignItems:"center",
     marginTop:10,
     padding:10
  }
})