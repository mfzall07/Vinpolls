import React from "react";
import {View, ScrollView, StyleSheet, Text, TouchableOpacity, Image} from "react-native";
import { StatusBar } from 'react-native';
import { ArrowRight, Avatar, BadgeGray, ChangePwd, CheckBox, ClaimHistory, CoinGray, DailyQuest, Dashboard, DQHistory, Faq, PersonBlue, ProfileInfo, ReferralHistory, SignOut, StakingHistory, StakingList, SurveinAccount, SurveyHistory, Terms, Union } from "../../assets";
import { Gap } from "../../component";

const Account = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = "#166ED8" translucent = {true}/>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <View style={styles.Header}>
                    <View style={styles.FirstHeader}>
                        <Text style={{ color: '#166ED8', fontFamily: 'ProximaNova', fontSize: 18, fontWeight: '700'}}>Account</Text>
                    </View>
                </View>
                <View style={styles.SecondHeader}>
                    <View>
                        <Image source={Avatar} style={{ width: 56, height: 56, borderRadius: 27, }}/>
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontFamily: 'ProximaNova', fontWeight: '700', fontSize: 16, color: '#1F2432' }}>Muh. Faizal</Text>
                        <View style={styles.SecondHeaderSub}>
                            <View style={{ flexDirection: 'row'}}>
                                <CoinGray />
                                <Text style={{ marginLeft: 5, marginRight: 5, fontSize: 12, marginTop: 2, fontFamily: 'ProximaNova' }}>
                                    50.000 VIN
                                </Text>
                            </View>
                            <View style={{ marginHorizontal:10, width: 5, height: 5, backgroundColor: '#FFBB00', borderRadius: 150 }}/>
                            <View style={{ flexDirection: 'row'}}>
                                <BadgeGray />
                                <Text style={{ marginLeft: 5, fontSize: 12, marginTop: 2, fontFamily: 'ProximaNova' }}>
                                    Level 10
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Gap height={30} />
                <View style={{ height: 52, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '15%', height:'100%', justifyContent: 'center', alignItems: 'center' }}>
                        <ProfileInfo />
                    </View>
                    <TouchableOpacity style={{ width: '80%', height: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#EBEDF0', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 }}>Profile Information</Text>
                        <ArrowRight />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 52, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '15%', height:'100%', justifyContent: 'center', alignItems: 'center' }}>
                        <ChangePwd />
                    </View>
                    <TouchableOpacity style={{ width: '80%', height: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#EBEDF0', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 }}>Change Password</Text>
                        <ArrowRight />
                    </TouchableOpacity>
                </View>
                <Gap height={20} />
                <View style={{ paddingHorizontal: 16}}>
                    <Text style={{ fontFamily: 'ProximaNova', fontSize: 16, fontWeight: '700', color: '#1F2432' }}>Activity</Text>
                </View>
                <View style={{ height: 52, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '15%', height:'100%', justifyContent: 'center', alignItems: 'center' }}>
                        <SurveyHistory />
                    </View>
                    <TouchableOpacity style={{ width: '80%', height: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#EBEDF0', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 }}>Survey History</Text>
                        <ArrowRight />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 52, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '15%', height:'100%', justifyContent: 'center', alignItems: 'center' }}>
                        <StakingHistory />
                    </View>
                    <TouchableOpacity style={{ width: '80%', height: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#EBEDF0', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 }}>Staking History</Text>
                        <ArrowRight />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 52, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '15%', height:'100%', justifyContent: 'center', alignItems: 'center' }}>
                        <DQHistory />
                    </View>
                    <TouchableOpacity style={{ width: '80%', height: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#EBEDF0', alignItems: 'center' }} onPress = {()=>navigation.navigate('DailyQuestHistory')}>
                        <Text style={{ fontSize: 16 }}>Daily Quest History</Text>
                        <ArrowRight />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 52, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '15%', height:'100%', justifyContent: 'center', alignItems: 'center' }}>
                        <ReferralHistory />
                    </View>
                    <TouchableOpacity style={{ width: '80%', height: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#EBEDF0', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 }}>Referral History</Text>
                        <ArrowRight />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 52, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '15%', height:'100%', justifyContent: 'center', alignItems: 'center' }}>
                        <ClaimHistory />
                    </View>
                    <TouchableOpacity style={{ width: '80%', height: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#EBEDF0', alignItems: 'center' }} onPress = {()=>navigation.navigate('RewardsHistory')}>
                        <Text style={{ fontSize: 16 }}>Claim History</Text>
                        <ArrowRight />
                    </TouchableOpacity>
                </View>
                <Gap height={20} />
                <View style={{ paddingHorizontal: 16}}>
                    <Text style={{ fontFamily: 'ProximaNova', fontSize: 16, fontWeight: '700', color: '#1F2432' }}>About Vinpolls</Text>
                </View>
                <View style={{ height: 52, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '15%', height:'100%', justifyContent: 'center', alignItems: 'center' }}>
                        <SurveinAccount />
                    </View>
                    <TouchableOpacity style={{ width: '80%', height: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#EBEDF0', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 }}>Survein</Text>
                        <ArrowRight />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 52, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '15%', height:'100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Terms />
                    </View>
                    <TouchableOpacity style={{ width: '80%', height: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#EBEDF0', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 }}>Terms and Condition</Text>
                        <ArrowRight />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 52, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '15%', height:'100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Faq />
                    </View>
                    <TouchableOpacity style={{ width: '80%', height: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#EBEDF0', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 }}>FAQ</Text>
                        <ArrowRight />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 52, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '15%', height:'100%', justifyContent: 'center', alignItems: 'center' }}>
                        <SignOut />
                    </View>
                    <TouchableOpacity style={{ width: '80%', height: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#EBEDF0', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 }}>Sign Out</Text>
                        <ArrowRight />
                    </TouchableOpacity>
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

                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress = {()=>navigation.navigate('DailyQuestPages')}>
                    <Union />
                    <Text style={{ top: 3 }}>Daily Quest</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', flexBasis: 53, borderTopWidth: 1, width: '100%', height: 60, borderTopColor: '#166ED8' }} onPress = {()=>navigation.navigate('Account')}>
                    <PersonBlue />
                    <Text style={{ color: '#166ED8' }}>Account</Text>
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
        height: 80,
    },
    FirstHeader: {
        width: '100%',
        top: '40%',
        position: 'absolute',
        paddingHorizontal: 16,
        paddingVertical: 5,
    },
    SecondHeader: {
        height: 72,
        paddingHorizontal: 16,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    SecondHeaderSub: {
        flexDirection: 'row',
        marginTop: 7,
        alignItems: 'center',
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

export default Account;