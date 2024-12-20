import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import Fontisto from '@expo/vector-icons/Fontisto';
import Category from '../components/Category';
import ProuductCard from '../components/ProuductCard';

const categories = ['Trending Now', 'All', 'New', 'Mens', 'Womens']
const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('Trending Now')
  const [isLike, setIsLike] = useState(false)

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
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({ item }) => <ProuductCard item={item} isLike={isLike} setIsLike={setIsLike} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom:150
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
    fontFamily:"Poppins-Regular"
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
  },
});
