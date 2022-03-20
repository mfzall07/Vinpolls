import React, {useState} from "react";
import {View, ScrollView, StyleSheet, Text, TouchableOpacity, Modal, Image, TextInput} from "react-native";
import { StatusBar } from 'react-native';
import { Badge, Bell, CheckBox, Coin, DailyQuest, DashboardBlue, ImageDefault, Person, Referral, StakeAndEarn, StakingList, Tag, Union } from "../../assets";
import { Gap, NewsCard, SurveyCard } from "../../component";
import { colors } from "../../utils";

const Home = ({navigation}) => {
    const [modalVisible, setmodalVisible] = useState(false);
    const [modalVisibleSecond, setmodalVisibleSecond] = useState(false);
    const gotoRewards = () => {
        navigation.navigate('RewardsHistory')
        setmodalVisibleSecond(!modalVisibleSecond)
        setmodalVisible(!modalVisible)
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = "#166ED8" translucent = {true}/>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                
                <View style={styles.Header}>
                    <View style={styles.FirstHeader}>
                        <Text style={{ fontSize: 16, color: 'white', fontFamily: 'NovaRound-Regular', letterSpacing: 1 }}>
                            VINPOLLS
                        </Text>
                        <TouchableOpacity>
                            <Bell />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.SecondHeader}>
                        <Text style={{ fontSize: 18, color: 'white', fontFamily: 'ProximaNova', letterSpacing: 1, fontWeight: '700' }}>
                            Hi, Muh. Faizal
                        </Text>
                        <View style={styles.SecondHeaderSub}>
                            <View style={{ flexDirection: 'row'}}>
                                <Coin />
                                <Text style={{ marginLeft: 5, marginRight: 5, color: 'white', fontSize: 12, marginTop: 2, fontFamily: 'ProximaNova' }}>
                                    50.000 VIN
                                </Text>
                            </View>
                            <View style={{ marginHorizontal:10, width: 5, height: 5, backgroundColor: '#FFBB00', borderRadius: 150 }}/>
                            <View style={{ flexDirection: 'row'}}>
                                <Badge />
                                <Text style={{ marginLeft: 5, color: 'white', fontSize: 12, marginTop: 2, fontFamily: 'ProximaNova' }}>
                                    Level 10
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.MainPanel}>
                    <View style={styles.Panel}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30 }}>
                            <TouchableOpacity onPress = {()=>navigation.navigate('StakingListPages')}>
                                <View style={{ alignItems: 'center' }}>
                                    <StakeAndEarn />
                                    <Text style={{ marginTop: 5, fontFamily: 'ProximaNova', fontSize: 13, color: colors.TextGray }}>Stake & Earn</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress = {()=>navigation.navigate('ReferralPages')}>
                                <View style={{ alignItems: 'center' }}>
                                    <Referral />
                                    <Text style={{ marginTop: 5, fontFamily: 'ProximaNova', fontSize: 13, color: colors.TextGray  }}>Referral</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {()=>navigation.navigate('DailyQuestPages')}>
                                <View style={{ alignItems: 'center' }}>
                                    <DailyQuest />
                                    <Text style={{ marginTop: 5, fontFamily: 'ProximaNova', fontSize: 13, color: colors.TextGray  }}>Daily Quest</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ width: '100%', paddingVertical: 10, justifyContent: 'center', alignItems: 'center', bottom: 40 }}>
                    <View style={{ width: '90%', backgroundColor: '#EDF5FD', paddingHorizontal: 20, paddingVertical: 20, flexDirection: 'row', borderRadius: 8, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Tag/>
                        <Text style ={{ flexBasis: 200, color: colors.TextGray }}>
                            Vintoken 50,000, earn more Token by stake and doing polls
                        </Text>
                        <TouchableOpacity style={{ width: 55, height: 30, backgroundColor: '#166ED8', justifyContent: 'center', alignItems:'center', borderRadius: 4 }} onPress={()=>setmodalVisible(!modalVisible)}>
                            <Text style={{ color: 'white' }}>Claim</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <View style={{ paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', bottom: 20, alignContent: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: '700', color: '#1F2432' }}>News & Update</Text>
                        <TouchableOpacity>
                            <Text style={{ color: '#166ED8' }}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                        <View style={{ width: '100%', height: 110, paddingHorizontal: 20, flexDirection: 'row' }}>
                            <NewsCard />
                            <Gap width={10} />
                            <NewsCard />
                            <Gap width={10} />
                            <NewsCard />
                        </View>
                    </ScrollView>
                </View>

                <View style={{ paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                    <Text style={{ fontSize: 18, fontWeight: '700', color: '#1F2432' }}>Join Exclusive Survey For You</Text>
                    <TouchableOpacity  onPress = {()=>navigation.navigate('StakingListPages')}>
                        <Text style={{ color: '#166ED8' }}>See All</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', paddingHorizontal: 16}}>
                    <View style={{ width: '100%', height: 150, flexWrap: 'wrap', alignContent: 'space-between', marginVertical: 10 }}>
                        <SurveyCard />
                        <SurveyCard />
                    </View>
                    <View style={{ width: '100%', height: 150, flexWrap: 'wrap', alignContent: 'space-between', marginVertical: 10 }}>
                        <SurveyCard />
                        <SurveyCard />
                    </View>
                    <Gap height={20} />
                </View>
            </ScrollView>
            
            <View style={styles.BottomMenu}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', flexBasis: 35, borderTopWidth: 1, height: '100%', borderTopColor: '#166ED8' }} onPress = {()=>navigation.navigate('Home')}>
                    <DashboardBlue />
                    <Text style={{ fontSize: 12, color: '#166ED8' }}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', flexBasis: 75}} onPress = {()=>navigation.navigate('StakingListPages')}>
                    <StakingList />
                    <Text style={{ fontSize: 12, color: colors.TextGray }}>Staking List</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', bottom: 15 }} onPress = {()=>navigation.navigate('Vote')}>
                    <View style={{ width: 52, height: 52, backgroundColor: '#fff', borderRadius: 50, justifyContent: 'center', alignItems: 'center', bottom: 5, position: 'relative', }} />
                    <View style={{ width: 42, height: 42, backgroundColor: '#166ED8', borderRadius: 50, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 10}}>
                        <CheckBox />
                    </View>
                    <Text style={{ top: 44, position: 'absolute', fontSize: 13, color: colors.TextGray }}>Vote</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress = {()=>navigation.navigate('DailyQuestPages')}>
                    <Union />
                    <Text style={{ top: 3, fontSize: 12, color: colors.TextGray }}>Daily Quest</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center'}} onPress = {()=>navigation.navigate('Account')}>
                    <Person />
                    <Text style={{ fontSize: 12, color: colors.TextGray }}>Account</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setmodalVisible(!modalVisible);
                }}
            >
                <View style={styles.mainModal}>
                    <View style={styles.subModal}>
                        <View style={{ width: 48, height: 4, backgroundColor: '#E6E9ED' }}/>
                        <Image source={ImageDefault} />
                        <View>
                            <Text style={{ paddingHorizontal: 8, textAlign: 'center', color: colors.TextGray }}>Enter the amount and send your rewards to your crypto wallet.</Text>
                            <Gap height={10} />
                            <TextInput placeholder="Enter Amount" style={{ borderWidth: 1, borderColor: '#A1AEB7', borderRadius: 4}} />
                        </View>
                        <TouchableOpacity style={{ width: '100%', paddingVertical: 13, backgroundColor: '#166ED8', borderRadius: 4, alignItems: 'center' }} onPress={()=>setmodalVisibleSecond(!modalVisibleSecond)}>
                            <Text style={{ color:'#fff', fontSize: 18 }}>Claim to my wallet</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleSecond}
                onRequestClose={() => {
                    setmodalVisibleSecond(!modalVisibleSecond);
                }}
            >
                <View style={styles.mainModalSecond}>
                    <View style={styles.subModal}>
                        <View style={{ width: 48, height: 4, backgroundColor: '#E6E9ED' }}/>
                        <Image source={ImageDefault} />
                        <Text style={{ paddingHorizontal: 8, textAlign: 'center', color: colors.TextGray }}>Your withdrawal request has been successfully proceed to your wallet.</Text>
                        <TouchableOpacity style={{ width: '100%', paddingVertical: 13, backgroundColor: '#166ED8', borderRadius: 4, alignItems: 'center' }}  onPress = {gotoRewards}>
                            <Text style={{ color:'#fff', fontSize: 18 }}>Go to history</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    Header: {
        height: 216,
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
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    SecondHeader: {
        width: '100%',
        position: 'absolute',
        top: 80,
        paddingHorizontal: 16,
        paddingVertical: 5,
    },
    SecondHeaderSub: {
        flexDirection: 'row',
        marginTop: 7,
        alignItems: 'center',
    },
    MainPanel: {
        width: '100%',
        height: 120,
        bottom: 60,
        alignItems: 'center'
    },
    Panel: {
        width: '90%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
    },
    mainModal: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: "flex-end",
        flex: 1,
    },
    mainModalSecond: {
        justifyContent: "flex-end",
        flex: 1,
    },
    subModal: {
        backgroundColor: '#fff',
        height: 350,
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        alignItems: 'center',
        justifyContent: 'space-around'
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

export default Home;