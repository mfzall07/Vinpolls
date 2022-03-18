import React from "react";
import {View, ScrollView, StyleSheet, Text, TouchableOpacity, TextInput} from "react-native";
import { StatusBar } from 'react-native';
import { ArrowLeft, VinpollsIconColor } from "../../assets";

const DailyQuestHistory = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = "#166ED8" translucent = {true}/>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                
                <View style={styles.Header}>
                    <View style={styles.FirstHeader}>
                        <TouchableOpacity onPress = {()=>navigation.navigate('DailyQuestPages')}>
                            <ArrowLeft />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16, color: 'white', fontFamily: 'ProximaNova', fontWeight: '700', letterSpacing: 1, marginLeft: 10 }}>
                            Daily Quest History
                        </Text>
                    </View>
                </View>
                <View style={styles.Panel}>
                    <View style={styles.ContentPanel}>
                        
                    </View>
                </View>
                <View style={styles.CardDQ}>
                    <View style={styles.CardContent}>
                        <View>
                            <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>Follow Twitter</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'ProximaNova' }}>12 Jan 2022, 20:23</Text>
                        </View>
                        <View style={{ width: 74, height: 32, borderRadius: 8, backgroundColor: '#FFBB00', flexDirection: 'row', justifyContent: 'center', alignItems:'center' }}>
                            <VinpollsIconColor />
                            <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>298</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.CardDQ}>
                    <View style={styles.CardContent}>
                        <View>
                            <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>Follow Twitter</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'ProximaNova' }}>12 Jan 2022, 20:23</Text>
                        </View>
                        <View style={{ width: 74, height: 32, borderRadius: 8, backgroundColor: '#FFBB00', flexDirection: 'row', justifyContent: 'center', alignItems:'center' }}>
                            <VinpollsIconColor />
                            <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>70</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.CardDQ}>
                    <View style={styles.CardContent}>
                        <View>
                            <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>Follow Twitter</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'ProximaNova' }}>12 Jan 2022, 20:23</Text>
                        </View>
                        <View style={{ width: 74, height: 32, borderRadius: 8, backgroundColor: '#FFBB00', flexDirection: 'row', justifyContent: 'center', alignItems:'center' }}>
                            <VinpollsIconColor />
                            <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>298</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.CardDQ}>
                    <View style={styles.CardContent}>
                        <View>
                            <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>Follow Twitter</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'ProximaNova' }}>12 Jan 2022, 20:23</Text>
                        </View>
                        <View style={{ width: 74, height: 32, borderRadius: 8, backgroundColor: '#FFBB00', flexDirection: 'row', justifyContent: 'center', alignItems:'center' }}>
                            <VinpollsIconColor />
                            <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>298</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.CardDQ}>
                    <View style={styles.CardContent}>
                        <View>
                            <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>Follow Twitter</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'ProximaNova' }}>12 Jan 2022, 20:23</Text>
                        </View>
                        <View style={{ width: 74, height: 32, borderRadius: 8, backgroundColor: '#FFBB00', flexDirection: 'row', justifyContent: 'center', alignItems:'center' }}>
                            <VinpollsIconColor />
                            <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>298</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    Header: {
        height: 160,
        backgroundColor: '#166ED8',
        position: 'relative',
    },
    FirstHeader: {
        width: '100%',
        position: 'absolute',
        top: '30%',
        paddingHorizontal: 16,
        paddingVertical: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    Panel: {
        paddingHorizontal: 16,
        justifyContent: 'center',
        height: 120,
        bottom: 60,
    },  
    ContentPanel: {
        height: '100%',
        borderRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
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

    },
    CardDQ: {
        paddingHorizontal: 16,
        justifyContent: 'center',
        height: 100,
        bottom: 20

    },
    CardContent: {
        height: '90%',
        borderRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#D9DDE1',
        paddingHorizontal: 5,
    },

})

export default DailyQuestHistory;