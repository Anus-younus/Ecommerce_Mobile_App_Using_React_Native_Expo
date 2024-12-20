import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

const ProuductCard = ({ item, isLike, setIsLike }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/girl2.png')}
        style={styles.coverImage}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Jacket Jeans</Text>
        <Text style={styles.price}>$45.9</Text>
      </View>
      <TouchableOpacity onPress={() => { setIsLike(!isLike) }} style={styles.likeContainer}>
        {
          isLike ?
            <AntDesign name="heart" size={15} color="#E55858" /> :
            <AntDesign name="hearto" size={15} color="#E55858" />
        }
      </TouchableOpacity>
    </View>
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
    fontSize: 18,
    color: "#444",
    fontWeight: "600"
  },
  price: {
    fontSize: 18,
    color: "#9c9c9c",
    fontWeight: "600"
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
