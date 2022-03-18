import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { Lottery } from "../../../assets";


const NewsCard  = ({navigation}) => {
    return (
        <TouchableOpacity>
            <View style={{ width: 170, height: '100%', backgroundColor: '#166ED8', borderRadius: 8, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Lottery />
                <View style={{ flexBasis: 81, marginLeft: 10 }}>
                    <Text style={{ fontFamily: 'Roboto', fontWeight: '700', fontStyle: 'italic' ,color: '#F9FE00', }}>Lucky Draw</Text>
                    <Text style={{ fontFamily: 'Roboto', fontWeight: '400', fontStyle: 'italic' ,color: '#F9FE00', }}>STAKE YOUR DATA</Text>
                </View>
            </View>
        </TouchableOpacity>
        
    );
};

export default NewsCard;