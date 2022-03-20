import React from "react";
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { StatusBar } from 'react-native';
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native"
import { VinpollsLogo } from '../../assets';
import { Gap } from "../../component";
import { colors } from "../../utils";
const Authentication = ({navigation}) => {
    
 return (
    <View style={styles.container}>
        <StatusBar barStyle = "default" hidden = {false} backgroundColor = "#166ED8" translucent = {true}/>
        <Gap height={10} />
        <View style={styles.logo}>
            <Image source={VinpollsLogo} style={styles.logos}/>
        </View>

        <View style={{ alignContent: 'center' }}>
            <Text style={{ color:'#1F2432', fontSize: 16, textAlign: 'center' }}>Enter verfication code we sent to your email</Text>
            <OTPInputView
                style={{width: '100%', height: 150}}
                pinCount={4}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                // onCodeChanged = {code => { this.setState({code})}}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled = {(code) => {
                    console.log(`Code is ${code}, you are good to go!`)
                }}
            />

            <Gap height={10}/>

            <TouchableOpacity style = { styles.submit } onPress = {()=>navigation.navigate('Home')}>
                <Text style = { styles.TextSubmit }>Submit</Text>
            </TouchableOpacity>

            <Gap height={10}/>

            <View style={styles.resend}>
                <Text style={{ color: colors.TextGray }}>Didn’t receive verification code?</Text>
                <TouchableOpacity>
                    <Text style={styles.linkResend}> Resend here</Text>
                </TouchableOpacity>
            </View>
        </View>

        {/* <View style={{ flex: 1, }} /> */}

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
    borderStyleBase: {
        width: 76,
        height: 77,
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        borderWidth: 1,
        borderRadius: 8,
        width: 76,
        height: 77,
        fontSize: 24,
        color: '#166ED8',
        fontWeight: 'bold',
        
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },
    submit: {
        height: 50,
        borderRadius: 5,
        marginBottom: 5,
        backgroundColor: '#166ED8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextSubmit: {
        color:'#fff',
    },
    resend: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: 10,
    },
    linkResend: {
        color: '#166ED8',
        fontWeight: '700',
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

  });

export default Authentication;