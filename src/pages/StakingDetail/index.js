import React from "react";
import {View, ScrollView, StyleSheet, Text, TouchableOpacity, Image} from "react-native";
import { StatusBar } from 'react-native';
import { ArrowLeft, IconWoman, TKO, Vin, VinpollsIconColor } from "../../assets";
import { Gap } from "../../component";

const StakingDetail = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = "#166ED8" translucent = {true}/>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                
                <View style={styles.Header}>
                    <View style={styles.FirstHeader}>
                        <TouchableOpacity onPress = {()=>navigation.navigate('StakingListPages')}>
                            <ArrowLeft />
                        </TouchableOpacity>
                        <Gap height={15} />
                        <View style={styles.ContentHeader}>
                            <IconWoman />
                            <Gap height={15} />
                            <Text style={{ fontWeight: '700', fontSize: 18, fontFamily: 'ProximaNova', color: '#fff', textAlign: 'center' }}>
                                Share your current mobile devices and gain more token
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.FirstContent}>
                    <Text style={{ fontSize: 16, fontWeight: '700', fontFamily: 'ProximaNova', color: '#1F2432'}}>
                        Information Details
                    </Text>
                    <Text style={{ fontSize: 16, fontFamily: 'ProximaNova'}}>
                        Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak.
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'ProximaNova', color: '#1F2432' }}>
                            Number of Questions
                        </Text>
                        <Text style={{ fontSize: 16, fontWeight: '700', fontFamily: 'ProximaNova', color: '#1F2432' }}>
                            5 questions
                        </Text>
                    </View>
                </View>

                <Gap height={10} />

                <View style={styles.SecondContent}>
                    <Text style={{ fontSize: 16, fontWeight: '700', fontFamily: 'ProximaNova', color: '#1F2432'}}>
                        Rewards
                    </Text>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'ProximaNova', color: '#1F2432' }}>
                                APR
                            </Text>
                            <Text style={{ fontSize: 16, fontFamily: 'ProximaNova', color: '#1F2432', fontWeight: '700' }}>
                                35.41%
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'ProximaNova', color: '#1F2432' }}>
                                Point Level
                            </Text>
                            <Text style={{ fontSize: 16, fontFamily: 'ProximaNova', color: '#1F2432', fontWeight: '700' }}>
                                10 Points
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'ProximaNova', color: '#1F2432' }}>
                                Time End
                            </Text>
                            <Text style={{ fontSize: 16, fontFamily: 'ProximaNova', color: '#1F2432', fontWeight: '700' }}>
                                12 Dec 2022
                            </Text>
                        </View>
                    </View>
                </View>

                <Gap height={10} />

                <View style={styles.ThirdContent}>
                    <Text style={{ fontSize: 16, fontFamily: 'ProximaNova', color: '#1F2432'}}>
                        Supported By
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={TKO} />
                        <Gap width={10} />
                        <Image source={Vin} />
                    </View>
                </View>

                <Gap height={10} />

            </ScrollView>
            <View style={styles.FourtContent}>
                <TouchableOpacity style={{ width: '100%', height: '100%', backgroundColor: '#166ED8', borderRadius: 4, justifyContent: 'center', alignItems: 'center' }} onPress = {()=>navigation.navigate('StakingQuestion')}>
                    <Text style={{ fontSize: 18, color: '#fff' }}>Complete & Stake Now!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Header: {
        height: 220,
        backgroundColor: '#166ED8',
        position: 'relative',
    },
    FirstHeader: {
        width: '100%',
        position: 'absolute',
        top: '20%',
        paddingHorizontal: 16,
        paddingVertical: 5,
        display: 'flex',
        flexDirection: 'column',
    },
    ContentHeader: {
        height: '75%',
        width: '100%',
        backgroundColor: '#166ED8',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    FirstContent: {
        height: 200,
        backgroundColor: '#fff',
        paddingHorizontal: 16, 
        paddingVertical: 16, 
        justifyContent: 'space-between',
    },  
    SecondContent: {
        height: 150,
        backgroundColor: '#fff',
        paddingHorizontal: 16, 
        paddingVertical: 16, 
        justifyContent: 'space-between',
    },  
    ThirdContent: {
        height: 110,
        backgroundColor: '#fff',
        paddingHorizontal: 16, 
        paddingVertical: 16, 
        justifyContent: 'space-between',
    }, 
    FourtContent: {
        height: 80,
        backgroundColor: '#fff',
        paddingHorizontal: 16, 
        paddingVertical: 16,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16, 
        justifyContent: 'center',
        alignItems: 'center',
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

})

export default StakingDetail;