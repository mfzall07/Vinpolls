import React from 'react';
import { StatusBar } from 'react-native';
import { Gap } from "../../component";
import {
    SafeAreaView,
    Image,
    StyleSheet,
    FlatList,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
  } from 'react-native';

import { SlideOne } from '../../assets';
import { SlideTwo } from '../../assets';
import { SlideTrhee } from '../../assets';
  
  const {width, height} = Dimensions.get('window');
  
  const COLORS = {primary: '#fff', white: '#fff'};
  
  const slides = [
    {
      id: '1',
      image: SlideOne,
      title: 'STAKING AND EARN MORE',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: '2',
      image: SlideTwo,
      title: 'STAKING AND EARN MORE',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: '3',
      image: SlideTrhee,
      title: 'STAKING AND EARN MORE',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];
  
  const Slide = ({item}) => {
    return (
      <View style={{alignItems: 'center'}}>
        <StatusBar barStyle = "default" hidden = {false} backgroundColor = "#166ED8" translucent = {true}/>
        <Gap height={30}/>
        <Image
          source={item?.image}
          style={{height: '75%', width, resizeMode: 'contain'}}
        />
        <View>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.subtitle}>{item?.subtitle}</Text>
        </View>
      </View>
    );
  };
  
  const OnBoarding = ({navigation}) => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef();
    const updateCurrentSlideIndex = e => {
      const contentOffsetX = e.nativeEvent.contentOffset.x;
      const currentIndex = Math.round(contentOffsetX / width);
      setCurrentSlideIndex(currentIndex);
    };
  
    const Footer = () => {
      return (
        <View
          style={{
            height: height * 0.25,
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          {/* Indicator container */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            {/* Render indicator */}
            {slides.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  currentSlideIndex == index && {
                    backgroundColor: '#166ED8',
                    width: 5,
                  },
                ]}
              />
            ))}
          </View>
  
          {/* Render buttons */}
          <View>
            <TouchableOpacity style = { styles.login } onPress = {()=>navigation.navigate('Login')}>
                <Text  style = { styles.Textlogin }>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style = { styles.register } onPress = {()=>navigation.navigate('Register')}>
                <Text  style = { styles.Textregister }>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };
  
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
        <StatusBar backgroundColor={COLORS.primary} />
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          contentContainerStyle={{height: height * 0.75}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={slides}
          pagingEnabled
          renderItem={({item}) => <Slide item={item} />}
        />
        <Footer />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    subtitle: {
      color: '#5E6674',
      fontSize: 13,
      marginTop: 5,
      maxWidth: '70%',
      textAlign: 'center',
      lineHeight: 23,
    },
    title: {
      color: '#1F2432',
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 10,
      textAlign: 'center',
    },
    image: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
    },
    indicator: {
      height: 5,
      width: 5,
      backgroundColor: '#E6E9ED',
      marginHorizontal: 3,
      borderRadius: 50,
    },
    login: {
      height: 50,
      borderRadius: 5,
      marginBottom: 5,
      backgroundColor: '#166ED8',
      justifyContent: 'center',
      alignItems: 'center',
    },
    Textlogin: {
        color:'#fff',
    },
    register: {
        height: 50,
        borderRadius: 5,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      Textregister: {
          color:'#166ED8',
      },

  });
  export default OnBoarding;