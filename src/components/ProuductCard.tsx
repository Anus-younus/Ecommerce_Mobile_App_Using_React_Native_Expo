import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const ProuductCard = ({ item, handleLiked }: any) => {
  const navigation = useNavigation<any>()
  return (
    <TouchableOpacity onPress={() => {navigation.navigate("PRODUCTDETAILS")}} style={styles.container}>
      <Image
        source={{ uri: item.image }}
        style={styles.coverImage}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <TouchableOpacity onPress={() => { handleLiked(item) }} style={styles.likeContainer}>
        {
          !item?.isLiked ?
            <AntDesign name="hearto" size={15} color="#E55858" /> :
            <AntDesign name="heart" size={15} color="#E55858" />

        }
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default ProuductCard

const styles = StyleSheet.create({
  coverImage: {
    height: 256,
    borderRadius: 20,
    width: 140,
    margin: 0,
    padding: 0,
  },
  container: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 20,
    position: "relative"
  },
  title: {
    fontSize: 14,
    color: "#444",
    fontWeight: "800",
    fontFamily: "Poppins-Regular"
  },
  price: {
    fontSize: 14,
    color: "#9c9c9c",
    fontWeight: "600",
    fontFamily: "Poppins-Regular"
  },
  content: {
    paddingRight: 23,
    marginTop: 10
  },
  likeContainer: {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    position: "absolute",
    top: 8,
    right: 8
  }
})
