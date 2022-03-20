import React, {useState} from "react";
import { StatusBar } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from 'moment';
import {View, ScrollView, StyleSheet, Text, TouchableOpacity, Button} from "react-native";
import { ArrowLeft, Calender, VinpollsIconColor } from "../../assets";
import { Gap } from "../../component";
import { colors } from "../../utils";

const DailyQuestHistory = ({navigation}) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        Moment.locale('en');
        setStartDate(date);
        hideDatePicker();
    };

    //------------------------------------

    const showDatePickers = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePickers = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirms = (date) => {
        Moment.locale('en');
        setEndDate(date);
        hideDatePicker();
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle = "default" hidden = {false} backgroundColor = "#166ED8" translucent = {true}/>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                
                <View style={styles.Header}>
                    <View style={styles.FirstHeader}>
                        <TouchableOpacity onPress = {()=>navigation.goBack()}>
                            <ArrowLeft />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16, color: 'white', fontFamily: 'ProximaNova', fontWeight: '700', letterSpacing: 1, marginLeft: 10 }}>
                            Daily Quest History
                        </Text>
                    </View>
                </View>
                <View style={styles.Panel}>
                    <View style={styles.ContentPanel}>
                        <View>
                            <Text style={{ color: '#1F2432' }}>Start date</Text>
                            <Gap height={10} />
                            <TouchableOpacity style={{ borderWidth: 1, paddingVertical: 10, paddingHorizontal: 10, alignItems: 'center', borderColor: '#A1AEB7', borderRadius: 4, flexDirection: 'row' }} onPress={showDatePicker}>
                                <Text style={{ color: colors.TextGray }}>{startDate === '' ? 'DD MM YYYY' : Moment(startDate).format('DD MMM YYYY')}</Text>
                                <Gap width={15} />
                                <Calender />
                            </TouchableOpacity>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                        </View>
                        <View>
                            <Text style={{ color: '#1F2432' }}>End date</Text>
                            <Gap height={10} />
                            <TouchableOpacity style={{ borderWidth: 1, paddingVertical: 10, paddingHorizontal: 10, alignItems: 'center', borderColor: '#A1AEB7', borderRadius: 4, flexDirection: 'row' }} onPress={showDatePickers}>
                                <Text style={{ color: colors.TextGray }}>{endDate === '' ? 'DD MM YYYY' : Moment(endDate).format('DD MMM YYYY')}</Text>
                                <Gap width={15} />
                                <Calender />
                            </TouchableOpacity>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirms}
                                onCancel={hideDatePickers}
                            />
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
        paddingHorizontal: 16,
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