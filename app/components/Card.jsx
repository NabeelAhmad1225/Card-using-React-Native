import React from 'react';
import { View , StyleSheet, Image , Text} from 'react-native';

function Card({title, subTitle, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>

            </View>
        </View>
    );  
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: "#fff",
        marginBottom: 20,
        overflow: "hidden",
        
    },
    detailsContainer: {
        padding: 20,
    },
    image: { 
        width: "100%",
        height: 200,
    },
    title: {
        marginBottom: 7,
        fontSize: 18,
    },
    subTitle: {
        color: "#fc5c65",
        fontWeight: "bold",
    },
})
export default Card;