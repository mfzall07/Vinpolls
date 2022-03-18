import React, {useState} from "react";
import {View, TextInput, StyleSheet} from "react-native";
import { Calender, Email, Password, People, Search } from "../../../assets";
import InputEye from './InputEye';

const Input = ({placeholder, type}) => {
    
    const[borderColor, setBorderColor] = useState('#A1AEB7') 

    const onBlur = () => {
        setBorderColor('#A1AEB7')
    }

    const onFocus = () => {
        setBorderColor('#166ED8')
    }

    if (type === 'eye') {
        return <InputEye placeholder={placeholder}/>
    }

    return (
        <View>
            <TextInput style={styles.input(borderColor)} placeholder={placeholder} onFocus={onFocus} onBlur={onBlur}/>
            <View style={styles.icon}>
                {placeholder==='Email' && <Email/>}
                {placeholder==='Password' && <Password/>}
                {placeholder==='Full Name' && <People/>}
                {placeholder==='Birthdate' && <Calender/>}
            </View>
        </View>
   

    );
};

const styles = StyleSheet.create({
    input: borderColor => ( {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: borderColor,
        fontWeight: "400",
        fontSize: 16,
        paddingLeft: 50,
        position: "relative",
    }),
    icon: {
        position: "absolute",
        top: 13,
        left: 10,
    }

  });

export default Input;