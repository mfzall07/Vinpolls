import React, {useState} from "react";
import {View, ScrollView, StyleSheet, Text, TouchableOpacity, Image} from "react-native";
import { StatusBar } from 'react-native';
import { ArrowLeft, IconWoman } from "../../assets";
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
                        Data 1
                    </Text>
                    <Text style={{ fontSize: 16, fontFamily: 'ProximaNova'}}>
                        Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak.
                    </Text>
                </View>

                <Gap height={10} />

                <View style={styles.RadioContent}>
                    
                </View>
                <Gap height={10} />

            </ScrollView>
            <View style={styles.SecondContent}>
                <TouchableOpacity style={{ width: '45%', height: '100%', backgroundColor: '#E6E9ED', borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, color: '#A1AEB7' }}>Previous</Text>
                </TouchableOpacity>
                <Gap width={10} />
                <TouchableOpacity style={{ width: '45%', height: '100%', backgroundColor: '#166ED8', borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, color: '#fff' }}>Next</Text>
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
        height: 150,
        backgroundColor: '#fff',
        paddingHorizontal: 16, 
        paddingVertical: 16, 
        justifyContent: 'space-between',
    },
    SecondContent: {
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
        flexDirection: 'row'
    }, 
    RadioContent: {
        height: 150,
        backgroundColor: '#fff',
        paddingHorizontal: 16, 
        paddingVertical: 16, 
        justifyContent: 'center',
    },

})

export default StakingDetail;