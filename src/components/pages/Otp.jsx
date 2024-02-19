import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ImageBackground } from 'react-native'
import bgImg from '../../images/LoginImg/BG.png'
import icon from '../../images/LoginImg/icon.png'
import reacImg from '../../images/LoginImg/Rectangle.png'
import { Image } from 'react-native'
import { TextInput } from 'react-native-paper'
import { TouchableOpacity } from 'react-native'
import { horizontalScale, moderateScale, verticalScale } from '../helper/Matrix'
import { useWindowDimensions } from 'react-native'



const Otp = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const handleImagePress = () => {
    navigation.navigate('BottomTabs');
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <StatusBar
          barStyle='light-content'
          backgroundColor="#002846"
        />
        <ImageBackground source={bgImg} resizeMode="stretch" style={{ height: height, width: width }}>
          <View>
            <View style={[CustomStyle.container, { width: width / 1, marginTop: 49 }]}>
              <TouchableOpacity onPress={handleImagePress}>
              <Image source={icon} />
              </TouchableOpacity>
            </View>

            <View style={[CustomStyle.container, { marginTop: 46 }]}>
              <View style={[CustomStyle.container, { width: width / 1 - 32 }]}>
                <Text style={CustomStyle.txtOTP}>Confirm OTP</Text>
              </View>
            </View>
            <View style={[CustomStyle.container, { marginTop: 5 }]}>
              <View style={[CustomStyle.container, { width: width / 1 - 32 }]}>
                <Text style={CustomStyle.txtMain}>Enter OTP just sent on your phone / email</Text>
              </View>
            </View>

            <View style={[CustomStyle.container, { marginTop: 24 }]}>
              <View style={[CustomStyle.container, { width: width / 1 - 32 }]}>
                <View style={{ flexDirection: "row", gap: 7, left:3 }}>
                  <TextInput style={[CustomStyle.box1, { width: width / 8 + 5 }]} />
                  <TextInput style={[CustomStyle.box1, { width: width / 8 + 5 }]} />
                  <TextInput style={[CustomStyle.box1, { width: width / 8 + 5 }]} />
                  <TextInput style={[CustomStyle.box1, { width: width / 8 + 5 }]} />
                </View>
              </View>
            </View>

            <View style={[CustomStyle.container, { marginTop: 19 }]}>
              <View style={{ width: width / 1 - 128 }}>
                <View style={[CustomStyle.containHead]}>
                  <Text style={CustomStyle.OTPTxt}>Time remaining 54s</Text>
                  <Text style={CustomStyle.underlinetxt}>Resend</Text>
                </View>
              </View>
            </View>

            <View style={[CustomStyle.container,{marginTop: 55 }]}>
              <View style={[CustomStyle.container, { width: width / 1 - 32 }]}>
                <Image resizeMode='stretch' source={reacImg} />
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  )
}

const CustomStyle = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  txtOTP: {
    color: '#FFF',
    fontFamily: 'Cairo',
    fontSize: 20,
    fontWeight: '200',
  },
  txtMain: {
    color: '#FFF',
    fontFamily: 'Isidora Sans',
    fontSize: 14,
    fontWeight: '400',
  },
  box1: {
    height: 65,
    borderRadius: 5,
    borderLeftColor: 'rgba(255, 255, 255, 0.30)',
    borderRightColor: 'rgba(255, 255, 255, 0.30)',
    borderTopColor: 'rgba(255, 255, 255, 0.30)',
    borderBottomColor: 'rgba(255, 255, 255, 0.30)',
    backgroundColor: 'rgba(0, 20, 52, 0.30)',
    borderWidth: 1,

  },
  OTPTxt: {
    color: '#FFF',
    fontFamily: 'Isidora Sans',
    fontSize: 14,
    fontWeight: '400',
  },
  underlinetxt: {
    color: '#00A9CE',
    fontFamily: 'Isidora Sans',
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline'
  },
  containHead: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between"
  },
  logo: {
    width: horizontalScale(203.789),
    height: verticalScale(88),
    flexShrink: 0,
    marginTop: verticalScale(49),
    marginLeft: 94.46,
    marginRight: 94.75,
    marginBottom: 662
  },
  otp: {
    position: 'absolute',
    marginTop: verticalScale(183),
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 595,
    width: horizontalScale(361),
    height: verticalScale(21),
    flexShrink: 0,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Cairo',
    fontSize: moderateScale(20),
    fontStyle: 'normal',
    lineHeight: 21.2,

  },
  typo: {
    position: 'absolute',
    marginTop: verticalScale(209),
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 569,
    width: horizontalScale(361),
    height: verticalScale(21),
    flexShrink: 0,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Isidora Sans',
    fontSize: moderateScale(14),
    fontStyle: 'normal',
    lineHeight: verticalScale(22),
  },
  // box1: {
  //   paddingTop: 10,
  //   paddingBottom: 10,
  //   paddingLeft: 20,
  //   paddingRight: 20,
  //   alignItems: 'center',
  //   borderRadius: 5,
  //   borderStyle: 'solid',
  //   borderLeftColor: 'rgba(255, 255, 255, 0.30)',
  //   borderRightColor: 'rgba(255, 255, 255, 0.30)',
  //   borderTopColor: 'rgba(255, 255, 255, 0.30)',
  //   borderBottomColor: 'rgba(255, 255, 255, 0.30)',
  //   backgroundColor: 'rgba(0, 20, 52, 0.30)',
  //   borderWidth: 1,
  // },
  box2: {
    marginTop: verticalScale(254),
    marginLeft: 142,
    marginRight: 200,
    marginBottom: 480,
    display: 'flex',
    width: horizontalScale(54),
    height: verticalScale(65),
    paddingTop: verticalScale(10),
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    // gap: 100,
    flexShrink: 0,
    borderRadius: 5,
    borderStyle: 'solid',
    borderLeftColor: 'rgba(255, 255, 255, 0.30)',
    borderRightColor: 'rgba(255, 255, 255, 0.30)',
    borderTopColor: 'rgba(255, 255, 255, 0.30)',
    borderBottomColor: 'rgba(255, 255, 255, 0.30)',
    backgroundColor: 'rgba(0, 20, 52, 0.30)',
    position: 'absolute',
    borderWidth: verticalScale(1),
  },
  box3: {
    marginTop: verticalScale(254),
    marginLeft: 206,
    marginRight: 138,
    marginBottom: 480,
    display: 'flex',
    width: horizontalScale(54),
    height: verticalScale(65),
    paddingTop: verticalScale(10),
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    gap: 10,
    flexShrink: 0,
    borderRadius: 5,
    borderStyle: 'solid',
    borderLeftColor: 'rgba(255, 255, 255, 0.30)',
    borderRightColor: 'rgba(255, 255, 255, 0.30)',
    borderTopColor: 'rgba(255, 255, 255, 0.30)',
    borderBottomColor: 'rgba(255, 255, 255, 0.30)',
    backgroundColor: 'rgba(0, 20, 52, 0.30)',
    position: 'absolute',
    borderWidth: verticalScale(1),
  },
  box4: {
    marginTop: verticalScale(254),
    marginLeft: 270,
    marginRight: 77,
    marginBottom: 480,
    display: 'flex',
    width: horizontalScale(54),
    height: verticalScale(65),
    paddingTop: verticalScale(10),
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    gap: 10,
    flexShrink: 0,
    borderRadius: 5,
    borderStyle: 'solid',
    borderLeftColor: 'rgba(255, 255, 255, 0.30)',
    borderRightColor: 'rgba(255, 255, 255, 0.30)',
    borderTopColor: 'rgba(255, 255, 255, 0.30)',
    borderBottomColor: 'rgba(255, 255, 255, 0.30)',
    backgroundColor: 'rgba(0, 20, 52, 0.30)',
    position: 'absolute',
    borderWidth: verticalScale(1),
  },
  testtypo: {
    position: 'absolute',
    marginTop: verticalScale(358),
    marginLeft: 69,
    marginRight: 200,
    marginBottom: 445,
    width: horizontalScale(129),
    // height: 16,
    flexShrink: 0,
    color: '#FFF',
    fontFamily: 'Isidora Sans',
    fontSize: moderateScale(14),
    fontStyle: 'normal',
  },
  resenttext: {
    position: 'absolute',
    marginTop: verticalScale(358),
    marginLeft: 201,
    marginRight: 64,
    marginBottom: 445,
    width: horizontalScale(128),
    // height: verticalScale(16),
    flexShrink: 0,
    color: '#00A9CE',
    textAlign: 'right',
    fontFamily: 'Isidora Sans',
    fontSize: moderateScale(14),
    fontStyle: 'normal',
    textDecorationLine: 'underline',
  },
  ractangleImg: {
    position: 'absolute',
    marginTop: verticalScale(409),
    marginLeft: 86.4,
    marginRight: 86.4,
    marginBottom: 313,
    width: horizontalScale(220.106),
    height: verticalScale(76.983),
    flexShrink: 0,
  },
  leftErrow: {
    position: 'absolute',
    marginTop: verticalScale(5),
    marginLeft: 9,
    marginRight: 360,
    marginBottom: 770,
    width: horizontalScale(24),
    height: verticalScale(24),
    flexShrink: 0,
  },
})

export default Otp