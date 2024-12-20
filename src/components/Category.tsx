import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Category = ({ item, selectedCategory, setSelectedCategory }: any) => {
    return (
        <TouchableOpacity onPress={() => setSelectedCategory(item)}>
            <Text
                style={[styles.categoryText,
                selectedCategory === item && {
                    color: "#fff",
                    backgroundColor: "#e96e6e"
                },
                ]}>{item}</Text>
        </TouchableOpacity>
    )
}

export default Category

const styles = StyleSheet.create({
    categoryText: {
        fontSize: 16,
        fontWeight: 600,
        marginHorizontal: 10,
        color: "#938f8f",
        backgroundColor: "#dfdcdc",
        paddingHorizontal: 20,
        paddingVertical: 10,
        textAlign: "center",
        borderRadius: 10
    }
})