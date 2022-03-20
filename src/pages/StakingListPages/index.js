import React from "react";
import {View, ScrollView, StyleSheet, Text, TouchableOpacity, TextInput} from "react-native";
import { StatusBar } from 'react-native';
import { ArrowRight, CheckBox, Dashboard, HistoryClock, IconWoman, Person, Search, StakingList, StakingListBlue, Union, UnionBlue, VinpollsIconColor } from "../../assets";
import { Gap, Input } from "../../component";
import { colors } from "../../utils";

const StakingListPages = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = "#166ED8" translucent = {true}/>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                
                <View style={styles.Header}>
                    <View style={styles.FirstHeader}>
                        <Text style={{ fontSize: 16, color: 'white', fontFamily: 'ProximaNova', fontWeight: '700', letterSpacing: 1 }}>
                            Stake & Earn
                        </Text>
                        <TouchableOpacity>
                            <HistoryClock />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Searching}>
                    <TextInput style={styles.input} placeholder='Search Stake' placeholderTextColor={colors.TextGray} />
                    <View style={styles.icon}>
                        <Search />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#A1AEB7', justifyContent: 'space-around', height: 30, alignItems: 'center' }}>
                    <TouchableOpacity style={{ borderBottomWidth: 3, borderBottomColor: '#166ED8', height: '100%' }}>
                        <Text style={{ color: colors.TextGray }}>All (10)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: colors.TextGray }}>On Staking (6)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: colors.TextGray }}>History (3)</Text>
                    </TouchableOpacity>
                </View>
                <Gap height={10} />
                <View style={styles.MainCard}>
                    <View style={styles.Card}>
                        <View style={ styles.CardHeader }>
                            <IconWoman />
                            <Gap height={15} />
                            <Text style={{ fontWeight: '700', fontSize: 18, fontFamily: 'ProximaNova', color: '#fff', textAlign: 'center' }}>
                                Expose your profile to get specific survey
                            </Text>
                        </View>
                        <View style={styles.BodyHeader}>
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Text style={{ fontWeight: '700', fontSize: 16, color: '#1F2432' }}>35.41%</Text>
                                <Text style={{ marginLeft: 5, color: colors.TextBlack }}>APR</Text>
                            </View>
                            <TouchableOpacity style={{ width: 80, height: 30, borderRadius: 4, backgroundColor: '#FFBB00', justifyContent: 'center', alignItems: 'center' }}  onPress = {()=>navigation.navigate('StakingDetail')}>
                                <Text style={{ color: '#1F2432' }}>Stake Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.MainCard}>
                    <View style={styles.Card}>
                        <View style={ styles.CardHeader }>
                            <IconWoman />
                            <Gap height={15} />
                            <Text style={{ fontWeight: '700', fontSize: 18, fontFamily: 'ProximaNova', color: '#fff', textAlign: 'center' }}>
                                Share your current mobile devices and gain more token
                            </Text>
                        </View>
                        <View style={styles.BodyHeader}>
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Text style={{ fontWeight: '700', fontSize: 16, color: '#1F2432' }}>35.41%</Text>
                                <Text style={{ marginLeft: 5, color: colors.TextBlack }}>APR</Text>
                            </View>
                            <TouchableOpacity style={{ width: 80, height: 30, borderRadius: 4, backgroundColor: '#FFBB00', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#1F2432' }}>Stake Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.MainCard}>
                    <View style={styles.Card}>
                        <View style={ styles.CardHeaderDisable }>
                            <IconWoman />
                            <Gap height={15} />
                            <Text style={{ fontWeight: '700', fontSize: 18, fontFamily: 'ProximaNova', color: '#fff', textAlign: 'center' }}>
                                Share your interest and gain more token
                            </Text>
                        </View>
                        <View style={styles.BodyHeaderDisable}>
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Text style={{ fontWeight: '700', fontSize: 16, color: '#1F2432' }}>35.41%</Text>
                                <Text style={{ marginLeft: 5, color: colors.TextBlack }}>APR</Text>
                            </View>
                            <TouchableOpacity style={{ width: 80, height: 30, borderRadius: 4, backgroundColor: '#E6E9ED', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#1F2432' }}>On Staking</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            
            <View style={styles.BottomMenu}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', flexBasis: 35 }} onPress = {()=>navigation.navigate('Home')}>
                    <Dashboard />
                    <Text style={{ fontSize: 12, color: colors.TextGray }}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', flexBasis: 75, borderTopWidth: 1, width: '100%', height: '100%', borderTopColor: '#166ED8' }} onPress = {()=>navigation.navigate('StakingListPages')}>
                    <StakingListBlue />
                    <Text style={{ color: '#166ED8', fontSize: 12}}>Staking List</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', bottom: 15 }} onPress = {()=>navigation.navigate('Vote')}>
                    <View style={{ width: 52, height: 52, backgroundColor: '#fff', borderRadius: 50, justifyContent: 'center', alignItems: 'center', bottom: 5, position: 'relative', }} />
                    <View style={{ width: 42, height: 42, backgroundColor: '#166ED8', borderRadius: 50, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 10}}>
                        <CheckBox />
                    </View>
                    <Text style={{ top: 44, position: 'absolute', fontSize: 13, color: colors.TextGray }}>Vote</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center'}} onPress = {()=>navigation.navigate('DailyQuestPages')}>
                    <Union />
                    <Text style={{ top: 3, fontSize: 12, color: colors.TextGray }}>Daily Quest</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress = {()=>navigation.navigate('Account')}>
                    <Person />
                    <Text style={{ fontSize: 12, color: colors.TextGray }}>Account</Text>
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
        height: 200,
    },  
    Card: {
        height: '90%',
        borderRadius: 8,
        backgroundColor: '#fff',
        flexDirection: 'column',
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
    CardHeader: {
        height: '75%',
        width: '100%',
        backgroundColor: '#166ED8',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    BodyHeader: {
        height: '25%',
        width: '100%',
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    CardHeaderDisable: {
        height: '75%',
        width: '100%',
        backgroundColor: '#A1AEB7',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    BodyHeaderDisable: {
        height: '25%',
        width: '100%',
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    BottomMenu: {
        height: 70, 
        flexDirection: 'row', 
        paddingHorizontal: 20, 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderTopWidth: 2,
        borderColor: 'rgba(158, 150, 150, .3)'
    }

})

export default StakingListPages;