import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SurveyCard  = ({navigation}) => {
    return (
        <View style={styles.card}>
            <View style={{ width: '100%', height: '75%', backgroundColor: '#166ED8', borderTopStartRadius: 8, borderTopEndRadius: 8}}></View>
            <View style={{ justifyContent: 'space-between', alignItems: 'center' , height: '25%', borderBottomStartRadius: 8, borderBottomEndRadius: 8, paddingHorizontal: 10, flexDirection: 'row' }}>
                <Text>20 Vin</Text>
                <TouchableOpacity  style={{ width: 55, height: 30, backgroundColor: '#FFBB00', justifyContent: 'center', alignItems:'center', borderRadius: 4 }}>
                    <Text>Join</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    card: {
        width: windowWidth/2-24,
        height: '100%',
        borderRadius: 8, 
        flexDirection: 'column',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})

export default SurveyCard;