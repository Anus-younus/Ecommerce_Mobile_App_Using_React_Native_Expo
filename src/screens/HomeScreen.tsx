import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import Fontisto from '@expo/vector-icons/Fontisto';
import Category from '../components/Category';
import ProuductCard from '../components/ProuductCard';
import data from "../data/data.json"
import Card from '../components/Card';

const categories = ['Trending Now', 'All', 'New', 'Mens', 'Womens']
const HomeScreen = () => {
  const [prouducts, setProuducts] = useState(data.products)
  const [selectedCategory, setSelectedCategory] = useState('Trending Now')
  const [isLike, setIsLike] = useState(false)

  const handleLiked = (item: any) => {
    const newProuducts: any = prouducts.map((prouduct) => {
      console.log("item=>", item)
      if (prouduct.id === item.id) {
        return {
          ...prouduct,
          isLiked: true
        }
      }
      return prouduct
    })
    setProuducts(newProuducts)
  }

  return (
    <LinearGradient
      colors={['#FDF0F3', '#FFFBFC']}
      style={styles.container}
    >
      <Header />
      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.matchText}>Match Your Style</Text>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Fontisto name="search" size={26} color="#ccc" />
              </View>
              <TextInput
                style={styles.textInput}
                placeholder='Search'
                placeholderTextColor="#ccc"
              />
            </View>
            {/* Category section */}
            <View style={{ height: 70 }}>
              <FlatList
                data={categories}
                renderItem={({ item }) => (
                  <Category
                    item={item}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                )}
                keyExtractor={(item) => item}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </>
        }
        // data={[1, 2]}
        // renderItem={Card}
        data={prouducts}
        renderItem={({ item }) => 
        <ProuductCard 
        handleLiked={handleLiked} 
        item={item}
        />
      }
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 150
        }}
      />
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  matchText: {
    fontSize: 28,
    color: "#000",
    marginTop: 20,
    fontFamily: "Poppins-Regular"
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 25,
    marginVertical: 15,
    height: 50,
    backgroundColor: '#f9f9f9',
  },
  iconContainer: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    color: '#000',
    fontFamily: "Poppins-Regular"
  },
});
