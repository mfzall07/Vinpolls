import React from "react";
import {View, ScrollView, StyleSheet, Text, TouchableOpacity, TextInput} from "react-native";
import { StatusBar } from 'react-native';
import { ArrowRight, CheckBox, Dashboard, HistoryClock, Person, Search, StakingList, UnionBlue, VinpollsIconColor } from "../../assets";
import { Input } from "../../component";

const DailyQuestPages = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = "#166ED8" translucent = {true}/>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                
                <View style={styles.Header}>
                    <View style={styles.FirstHeader}>
                        <Text style={{ fontSize: 16, color: 'white', fontFamily: 'ProximaNova', fontWeight: '700', letterSpacing: 1 }}>
                            Daily Quest
                        </Text>
                        <TouchableOpacity onPress = {()=>navigation.navigate('DailyQuestHistory')}>
                            <HistoryClock />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Searching}>
                    <TextInput style={styles.input} placeholder='Search Stake' />
                    <View style={styles.icon}>
                        <Search />
                    </View>
                </View>
                <View style={styles.MainCard}>
                    <View style={styles.DailyQuestCards}>
                        <View style={{ width: '20%', height: '100%', backgroundColor: '#FFBB00', borderTopLeftRadius: 8, borderBottomLeftRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
                            <VinpollsIconColor />
                            <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>100</Text>
                        </View>
                        <View style={{ width: '70%', height: '100%', borderTopLeftRadius: 8, borderBottomLeftRadius: 8, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>Follow twitter</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'ProximaNova' }}>Start follow @tokocrypto official account and get 100 VIN</Text>
                            </View>
                            <ArrowRight />
                        </View>
                        <View/>
                    </View>
                </View>
                <View style={styles.MainCard}>
                    <View style={styles.DailyQuestCards}>
                        <View style={{ width: '20%', height: '100%', backgroundColor: '#FFBB00', borderTopLeftRadius: 8, borderBottomLeftRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
                            <VinpollsIconColor />
                            <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>100</Text>
                        </View>
                        <View style={{ width: '70%', height: '100%', borderTopLeftRadius: 8, borderBottomLeftRadius: 8, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>Follow twitter</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'ProximaNova' }}>Start follow @tokocrypto official account and get 100 VIN</Text>
                            </View>
                            <ArrowRight />
                        </View>
                        <View/>
                    </View>
                </View>
                <View style={styles.MainCard}>
                    <View style={styles.DailyQuestCards}>
                        <View style={{ width: '20%', height: '100%', backgroundColor: '#FFBB00', borderTopLeftRadius: 8, borderBottomLeftRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
                            <VinpollsIconColor />
                            <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>100</Text>
                        </View>
                        <View style={{ width: '70%', height: '100%', borderTopLeftRadius: 8, borderBottomLeftRadius: 8, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>Follow twitter</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'ProximaNova' }}>Start follow @tokocrypto official account and get 100 VIN</Text>
                            </View>
                            <ArrowRight />
                        </View>
                        <View/>
                    </View>
                </View>
                <View style={styles.MainCard}>
                    <View style={styles.DailyQuestCards}>
                        <View style={{ width: '20%', height: '100%', backgroundColor: '#FFBB00', borderTopLeftRadius: 8, borderBottomLeftRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
                            <VinpollsIconColor />
                            <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>100</Text>
                        </View>
                        <View style={{ width: '70%', height: '100%', borderTopLeftRadius: 8, borderBottomLeftRadius: 8, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>Follow twitter</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'ProximaNova' }}>Start follow @tokocrypto official account and get 100 VIN</Text>
                            </View>
                            <ArrowRight />
                        </View>
                        <View/>
                    </View>
                </View>
                <View style={styles.MainCard}>
                    <View style={styles.DailyQuestCards}>
                        <View style={{ width: '20%', height: '100%', backgroundColor: '#FFBB00', borderTopLeftRadius: 8, borderBottomLeftRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
                            <VinpollsIconColor />
                            <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>100</Text>
                        </View>
                        <View style={{ width: '70%', height: '100%', borderTopLeftRadius: 8, borderBottomLeftRadius: 8, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                            <View>
                                <Text style={{ fontSize: 18, fontFamily: 'ProximaNova', fontWeight: '700', color: '#1F2432' }}>Follow twitter</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'ProximaNova' }}>Start follow @tokocrypto official account and get 100 VIN</Text>
                            </View>
                            <ArrowRight />
                        </View>
                        <View/>
                    </View>
                </View>
                


                
            </ScrollView>
            
            <View style={styles.BottomMenu}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', flexBasis: 50 }} onPress = {()=>navigation.navigate('Home')}>
                    <Dashboard />
                    <Text>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress = {()=>navigation.navigate('StakingListPages')}>
                    <StakingList />
                    <Text>Staking List</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', bottom: 15 }} onPress = {()=>navigation.navigate('Vote')}>
                    <View style={{ width: 52, height: 52, backgroundColor: '#fff', borderRadius: 50, justifyContent: 'center', alignItems: 'center', bottom: 5, position: 'relative', }} />
                    <View style={{ width: 42, height: 42, backgroundColor: '#166ED8', borderRadius: 50, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 10}}>
                        <CheckBox />
                    </View>
                    <Text style={{ top: 43.5, position: 'absolute'}}>Vote</Text>

                </TouchableOpacity>

                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', flexBasis: 75, borderTopWidth: 1, width: '100%', height: 60, borderTopColor: '#166ED8' }} onPress = {()=>navigation.navigate('DailyQuestPages')}>
                    <UnionBlue />
                    <Text style={{ color: '#166ED8', top: 3 }}>Daily Quest</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress = {()=>navigation.navigate('Account')}>
                    <Person />
                    <Text>Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    Header: {
        height: 120,
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
        justifyContent: 'space-between',
    },
    Searching: {
        paddingHorizontal: 16, 
        height: 56, 
        justifyContent: 'center',
        bottom: 30
    },
    input: {
        borderRadius: 8,
        fontWeight: "400",
        fontSize: 16,
        paddingLeft: 50,
        position: "relative",
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
    icon: {
        position: "absolute",
        top: 19,
        left: 35,
    },
    MainCard: {
        paddingHorizontal: 16,
        justifyContent: 'center',
        height: 100,
    },  
    DailyQuestCards: {
        height: 90,
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
    BottomMenu: {
        height: 60, 
        flexDirection: 'row', 
        paddingHorizontal: 20, 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderTopWidth: 2,
        borderColor: 'rgba(158, 150, 150, .3)'
    }

})

export default DailyQuestPages;