import React from "react";
import SelectDropdown from 'react-native-select-dropdown';
import { StatusBar } from 'react-native';
import {View, ScrollView, Image, StyleSheet, Text, TouchableOpacity} from "react-native"
import { Gender, Geo, VinpollsLogo } from '../../assets';
import { Gap, Input } from "../../component";

const Register = ({navigation}) => {
    
 const gender = ["Male", "Female"]
 const province = ["Jawa Tengah", "Jawa Timur", "Jawa Barat"]
    
 return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = "#166ED8" translucent = {true}/>
            <Gap height={30}/> 
            <View  style={styles.logo}>
                <Image source={VinpollsLogo} style={styles.logos}/>
            </View>
            <View>
                <Gap height={60}/>
                <Input placeholder='Full Name'/>
                <Gap height={20}/>
                <Input placeholder='Email'/>
                <Gap height={20}/>
                <Input placeholder='Password' type='eye'/>
                <Gap height={20}/>
                <Input placeholder='Birthdate'/>
                <Gap height={20}/>

                <SelectDropdown
                    defaultButtonText={"Select Gender"}
                    data={gender}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                    buttonStyle={styles.dropdown1BtnStyle}
                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    renderDropdownIcon={(isOpened) => {
                        return (
                        <Gender/>
                        );
                    }}
                    dropdownIconPosition={"left"}
                    dropdownStyle={styles.dropdown1DropdownStyle}
                    rowTextStyle={styles.dropdown1RowTxtStyle}
                />
                <Gap height={20}/>

                <SelectDropdown
                    defaultButtonText={"Select Province"}
                    data={province}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                    buttonStyle={styles.dropdown1BtnStyle}
                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    renderDropdownIcon={(isOpened) => {
                        return (
                        <Geo/>
                        );
                    }}
                    dropdownIconPosition={"left"}
                    dropdownStyle={styles.dropdown1DropdownStyle}
                    rowTextStyle={styles.dropdown1RowTxtStyle}
                />
            </View>
            <View>
                <Gap height={40}/>
                <TouchableOpacity style = { styles.login } onPress = {()=>navigation.navigate('Authentication')}>
                    <Text style = { styles.Textlogin }>Register</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.register}>
                <Text>Already have account?</Text>
                <TouchableOpacity>
                    <Text style={styles.linkRegister} onPress = {()=>navigation.navigate('Login')}> Login here</Text>
                </TouchableOpacity>
                <Gap height={45}/> 
            </View>

            <View style={styles.note}>
                <Text style={styles.warning}>Warning!
                    <Text style={styles.TextDarkWarning}> Please don’t share your credential to anybody and make sure you note it at the safe place. Contact our CS Team directly if you have any suspicious activities on your account!</Text>
                </Text>
            </View>

        </ScrollView>
    </View>
 );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    logo:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    logos: {
        width: 138,
        height: 147,
    },
    forget: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        fontWeight: 700,
        marginEnd: 10,
    },
    linkForget: {
        color: '#166ED8',
    },
    login: {
        height: 50,
        borderRadius: 5,
        marginBottom: 5,
        backgroundColor: '#166ED8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Textlogin: {
        color:'#fff',
    },
    register: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 700,
        marginEnd: 10,
    },
    linkRegister: {
        color: '#166ED8',
    },
    note: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    warning: {
        color: '#FFA726',
        textAlign: 'center',
        fontSize: 12,
    },
    TextDarkWarning: {
        color: '#868C96'
    },
    gender: {
        zIndex: -1,
        borderRadius: 4,
        borderColor: '#A1AEB7',
        fontWeight: "400",
        fontSize: 16,
        paddingLeft: 50,
        position: "relative",
    },
    icon: {
        position: "absolute",
        top: 13,
        left: 10,
    },
    dropdown1BtnStyle: {
        width: "100%",
        height: 50,
        backgroundColor: "#FFF",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#A1AEB7",
      },
      dropdown1BtnTxtStyle: { 
        color: '#868C96',
        fontWeight: "400",
        fontSize: 14,
        textAlign: "left",
        paddingLeft: 10,
      },
      dropdown1DropdownStyle: { 
        backgroundColor: "white" 
      },
      dropdown1RowTxtStyle: { 
        color: "#444",
        textAlign: "left" 
      },

  });

export default Register;