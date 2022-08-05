import React from 'react';
import { View ,TouchableOpacity , StyleSheet, Text} from 'react-native';

function AppButton({title , onPress , color = "#fc5c65"}) {
    return (
        <TouchableOpacity style={[styles.button , {backgroundColor: color}]}>
            <Text style={styles.text} onPress={onPress}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#fc5c65",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 10,
    },
    text: {
        fontSize: 18,
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "bold",

    },

})

export default AppButton;