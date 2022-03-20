import React from "react";
import {View, Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import { StatusBar } from 'react-native';
import { VinpollsLogo } from '../../assets';
import { Gap, Input } from "../../component";
import { colors } from "../../utils";

const Login = ({navigation}) => {
 return (
    <View style={styles.container}>
        <StatusBar barStyle = "default" hidden = {false} backgroundColor = "#166ED8" translucent = {true}/>
        <Gap height={30} />
        <View  style={styles.logo}>
            <Image source={VinpollsLogo} style={styles.logos}/>
        </View>
        <Gap height={80}/>
        <Input placeholder='Email'/>
        <Input placeholder='Password' type='eye'/>
        <View style={styles.forget}>
            <Text style={{ color: colors.TextGray }}>Forget password?</Text>
            <TouchableOpacity>            
                <Text style={styles.linkForget}> Click here</Text>
            </TouchableOpacity>
        </View>
        <Gap height={40}/>
        <TouchableOpacity style = { styles.login } onPress = {()=>navigation.navigate('Home')}>
            <Text style = { styles.Textlogin }>Login</Text>
        </TouchableOpacity>
        <View style={styles.register}>
            <Text style={{ color: colors.TextGray }}>Don't have account?</Text>
            <TouchableOpacity>
                <Text style={styles.linkRegister} onPress = {()=>navigation.navigate('Register')}> Click here</Text>
            </TouchableOpacity>
        </View>
        <Gap height={40}/>
        <View style={styles.note}>
            <Text style={styles.warning}>Warning!
                <Text style={styles.TextDarkWarning}> Please don’t share your credential to anybody and make sure you note it at the safe place. Contact our CS Team directly if you have any suspicious activities on your account!</Text>
            </Text>
        </View>
    </View>
 );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: '#fff',
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
        flexDirection: 'row',
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
        color: colors.TextGray
    }

  });

export default Login;