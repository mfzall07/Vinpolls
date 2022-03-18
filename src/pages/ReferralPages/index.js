import React from "react";
import {View, ScrollView, StyleSheet, Text, TouchableOpacity, Image} from "react-native";
import { StatusBar } from 'react-native';
import { ArrowLeft, Avatar, VinpollsIconColor } from "../../assets";

const ReferralPages = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = "#166ED8" translucent = {true}/>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                
                <View style={styles.Header}>
                    <View style={styles.FirstHeader}>
                        <TouchableOpacity onPress = {()=>navigation.navigate('DailyQuestPages')}>
                            <ArrowLeft />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16, color: 'white', fontFamily: 'ProximaNova', letterSpacing: 1, marginLeft: 10, fontWeight: '700' }}>
                            Referral
                        </Text>
                    </View>
                </View>
                <View style={styles.Panel}>
                    <View style={styles.ContentPanel}>
                        <View style={{ height: '50%', width: '100%', borderBottomWidth: 1, borderColor: '#D9DDE1', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                                <Text>Total Referral</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 38, color: '#1F2432', fontWeight: '700', fontFamily: 'ProximaNova' }}>2.567</Text>
                                    <Text style={{ fontSize: 24, color: '#1F2432' ,marginLeft: 10 }}>VIN</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: '50%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{ height: '100%', width: '100%', paddingHorizontal: 16, justifyContent: 'space-around'}}>
                                <Text>Total Referral</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderRadius: 8, borderStyle: 'dashed', paddingHorizontal: 16, paddingVertical: 7 }}>
                                    <Text style={{ fontSize: 16, color: '#1F2432', fontWeight: '700', fontFamily: 'ProximaNova' }}>REFCODE99</Text>
                                    <Text style={{ fontSize: 16, color: '#166ED8' ,marginLeft: 10 }}>Share</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.FirsrCard}>
                    <View style={styles.FirstContentCard}>
                        <View style={styles.CardContent}>
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>Install VINPOLLS</Text>
                                <Text style={{ fontSize: 12, fontFamily: 'ProximaNova' }}>Get VIN if your friend install VINPOLLS</Text>
                            </View>
                            <View style={{ width: 74, height: 32, borderRadius: 8, backgroundColor: '#FFBB00', flexDirection: 'row', justifyContent: 'center', alignItems:'center' }}>
                                <VinpollsIconColor />
                                <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>298</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.FirstContentCard}>
                        <View style={styles.CardContent}>
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>Install VINPOLLS</Text>
                                <Text style={{ fontSize: 12, fontFamily: 'ProximaNova' }}>Get VIN if your friend install VINPOLLS</Text>
                            </View>
                            <View style={{ width: 74, height: 32, borderRadius: 8, backgroundColor: '#FFBB00', flexDirection: 'row', justifyContent: 'center', alignItems:'center' }}>
                                <VinpollsIconColor />
                                <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>70</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.FirstContentCard}>
                        <View style={styles.CardContent}>
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>Install VINPOLLS</Text>
                                <Text style={{ fontSize: 12, fontFamily: 'ProximaNova' }}>Get VIN if your friend install VINPOLLS</Text>
                            </View>
                            <View style={{ width: 74, height: 32, borderRadius: 8, backgroundColor: '#FFBB00', flexDirection: 'row', justifyContent: 'center', alignItems:'center' }}>
                                <VinpollsIconColor />
                                <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>298</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{height: 10, backgroundColor:'#E9ECEB', bottom: 70}}/>

                <View style={styles.SecondCard}>
                    <Text style={{ fontWeight: '700', color: '#000000', fontSize: 18 }}>Referral lists</Text>
                    <View style={styles.SecondContentCard}>
                        <View style={styles.SecondCardContent}>
                            <View>
                                <Image source={Avatar} style={{ width: 56, height: 56, borderRadius: 27, }}/>
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>Will Smith</Text>
                                <Text style={{ fontSize: 12, fontFamily: 'ProximaNova' }}>Invite your friend and get VIN</Text>
                            </View>
                            <View style={{ width: 74, height: 32, borderRadius: 8, backgroundColor: '#EDF5FD', justifyContent: 'center', alignItems:'center' }}>
                                <Text style={{ fontFamily: 'ProximaNova', color: '#1F2432' }}>Level 1</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.SecondContentCard}>
                        <View style={styles.CardContent}>
                            <View>
                                <Image source={Avatar} style={{ width: 56, height: 56, borderRadius: 27, }}/>
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>Will Smith</Text>
                                <Text style={{ fontSize: 12, fontFamily: 'ProximaNova' }}>Invite your friend and get VIN</Text>
                            </View>
                            <View style={{ width: 74, height: 32, borderRadius: 8, backgroundColor: '#EDF5FD', justifyContent: 'center', alignItems:'center' }}>
                                <Text style={{ fontFamily: 'ProximaNova', color: '#1F2432' }}>Level 10</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.SecondContentCard}>
                        <View style={styles.CardContent}>
                            <View>
                                <Image source={Avatar} style={{ width: 56, height: 56, borderRadius: 27, }}/>
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>Will Smith</Text>
                                <Text style={{ fontSize: 12, fontFamily: 'ProximaNova' }}>Invite your friend and get VIN</Text>
                            </View>
                            <View style={{ width: 74, height: 32, borderRadius: 8, backgroundColor: '#EDF5FD', justifyContent: 'center', alignItems:'center' }}>
                                <Text style={{ fontFamily: 'ProximaNova', color: '#1F2432' }}>Level 5</Text>
                            </View>
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
        height: 225,
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
        height: 180,
        bottom: 100,
    },  
    ContentPanel: {
        height: '95%',
        borderRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
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
    FirsrCard: {
        height: 303,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        bottom: 100,
    },
    FirstContentCard: {
        justifyContent: 'center',
        height: 100,

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
    SecondCard: {
        height: 330,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        bottom: 45,
    },
    SecondContentCard: {
        justifyContent: 'center',
        height: 100,

    },
    SecondCardContent: {
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

export default ReferralPages;