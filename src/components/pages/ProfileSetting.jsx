import { View, Text, ScrollView, SafeAreaView, StyleSheet, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import gradiantBg from '../../images/ProfileImg/gradiantBg.png'
import scanner from '../../images/ProfileImg/scanner.png'
import heart from '../../images/ProfileImg/heart.png'
import errow from '../../images/ProfileImg/errow.png'
import bell from '../../images/ProfileImg/bell.png'

import CheckBox from 'react-native-check-box'
import { StatusBar } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'


const ProfileSetting = ({ navigation }) => {
  const { width, height } = useWindowDimensions()
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);
  const [isChecked5, setChecked5] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [isOn1, setIsOn1] = useState(false);
  const handleCheckBoxClick1 = () => {
    setChecked1(!isChecked1);
  };
  const handleCheckBoxClick2 = () => {
    setChecked2(!isChecked2);
  };
  const handleCheckBoxClick3 = () => {
    setChecked3(!isChecked3);
  };
  const handleCheckBoxClick4 = () => {
    setChecked4(!isChecked4);
  };
  const handleCheckBoxClick5 = () => {
    setChecked5(!isChecked5);
  };
  const handleContactQR = () => {
    navigation.navigate('ContactQR')
  }
  const handleFavouritepage = () => {
    navigation.navigate('Favourties')
  }
  const handleNotification = () => {
    navigation.navigate('Notification')
  }
  const handleMyProfile=()=>{
    navigation.navigate('Home')
  }
  handleNotification
  const handleLogout = () => {
    navigation.navigate('Login')
  }

  return (
    <ScrollView style={{ backgroundColor: "#F4F4F4" }}>
      <SafeAreaView>
        <StatusBar
          barStyle='light-content'
          backgroundColor="#08002B"
        />
        <View>
          <Image source={gradiantBg} resizeMode='stretch' style={{ height: 230, width: width / 1 }} />
          <View style={styles.container}>
            <View style={[styles.containerFluid, { width: width / 1 - 32 }]}>
              <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: "row" }}>
                <TouchableOpacity onPress={handleMyProfile}>
                <Text style={styles.Maintxt}>My Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleContactQR}>
                  <View style={[styles.btn, { width: 115, top: 4 }]}>
                    <View style={{ flexDirection: "row", top: 2 }}>
                      <Image source={scanner} resizeMode='stretch' style={{ left: 10, top: 5 }} />
                      <Text style={styles.BtnText}>My Contact</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View >
              <Text style={styles.mainHeroTxt}>Jonathan Samules{'\n'} <Text style={{ fontSize: 16, fontWeight: '400' }}>Co-founder & CEO{'\n'}<Text style={{ fontSize: 16, fontWeight: '500' }}>Company name</Text></Text></Text>
            </View>

            <View style={[styles.circle]}>
              <View style={styles.blueCircle}>
                <View style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                  <Text style={styles.textCircle}>JS</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.fieldContainer}>
          <TouchableOpacity onPress={handleFavouritepage}>
            <View style={[styles.field, { width: width / 1 - 32, height: 50 }]}>
              <View style={styles.head}>
                <View style={{ flexDirection: "row" }}>
                  <Image source={heart} resizeMode='stretch' />
                  <Text style={styles.fevTxt}>Favourite</Text>
                </View>
                <View>
                  <Image source={errow} resizeMode='stretch' />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.fieldContainer, { marginVertical: 10 }]}>
          <TouchableOpacity onPress={handleNotification}>
            <View style={[styles.field, { width: width / 1 - 32, height: 50 }]}>
              <View style={styles.head}>
                <View style={{ flexDirection: "row" }}>
                  <Image source={bell} resizeMode='stretch' />
                  <Text style={styles.fevTxt}>Notifications</Text>
                </View>
                <View>
                  <Image source={errow} resizeMode='stretch' />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.TxtContainerArea}>
          <View style={{ width: width / 1 - 32 }}>
            <Text style={styles.AreaTxt}>AREAS OF INTERESTS</Text>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={[styles.innerContainer, { width: width / 1 - 32 }]}>
            <View style={{ marginTop: 20, gap: 12}}>
              <View style={{flexDirection: 'row', justifyContent: "space-between", }}>

                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    isChecked={isChecked1}
                    onClick={handleCheckBoxClick1}
                    checkBoxColor="lightgray"
                    checkedCheckBoxColor="black"
                    style={{ transform: [{ scale: 1.35 }]}}
                  />
                  <Text style={[styles.boxTxt]}>Fintech Abu Dhabi</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    isChecked={isChecked2}
                    onClick={handleCheckBoxClick2}
                    checkBoxColor="lightgray"
                    checkedCheckBoxColor="black"
                    style={{ transform: [{ scale: 1.35 }] }}
                  />
                  <Text style={[styles.boxTxt]}>R.A.C.E Abu Dhabi</Text>
                </View>

              </View>

              <View style={{  flexDirection: 'row', justifyContent: "space-between" }}>
                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    isChecked={isChecked3}
                    onClick={handleCheckBoxClick3}
                    checkBoxColor="lightgray"
                    checkedCheckBoxColor="black"
                    style={{ transform: [{ scale: 1.35 }], justifyContent: "center" }}
                  />
                  <Text style={[styles.boxTxt]}>Global Financial Regulator Summit</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    isChecked={isChecked4}
                    onClick={handleCheckBoxClick4}
                    checkBoxColor="lightgray"
                    checkedCheckBoxColor="black"
                    style={{ transform: [{ scale: 1.35 }], justifyContent: "center" }}
                  />
                  <Text style={[styles.boxTxt]}>Abu Dhabi EconomicForum</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    isChecked={isChecked5}
                    onClick={handleCheckBoxClick5}
                    checkBoxColor="lightgray"
                    checkedCheckBoxColor="black"
                    style={{ transform: [{ scale: 1.35 }] }}
                  />
                  <Text style={[styles.boxTxt]}>Asset Abu Dhabi</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.switctBox]}>
          <View style={[styles.boxSwitch, { width: width / 1 - 32 }]}>

            <View style={[styles.innerSwitch]}>
              <View>
                <Text style={[styles.switchTxt, { width: width / 2 + 80 }]}>Chat with other delegates Your{'\n'}<Text style={{ color: "#818181", fontSize: 11, fontStyle: 'italic' }}>profile will be visible to others</Text></Text>
              </View>
              <View>
                <ToggleSwitch
                  isOn={isOn1}
                  onColor="rgba(0, 255, 10, 0.40)"
                  offColor="lightgray"
                  labelStyle={{ color: 'black', fontWeight: '900' }}
                  size="medium"
                  onToggle={(newState) => setIsOn1(newState)}
                />
              </View>
            </View>

          </View>
        </View>

        <View style={[styles.switctBox, { marginVertical: 10 }]}>
          <View style={[styles.boxSwitch, { width: width / 1 - 32 }]}>

            <View style={[styles.innerSwitch]}>
              <View>
                <Text style={[styles.switchTxt, { width: width / 2 + 80 }]}>Receive notifications & newsletters </Text>
              </View>
              <View>
                <ToggleSwitch
                  isOn={isOn}
                  onColor="rgba(0, 255, 10, 0.40)"
                  offColor="lightgray"
                  labelStyle={{ color: 'black', fontWeight: '900' }}
                  size="medium"
                  onToggle={(newState) => setIsOn(newState)}
                />
              </View>
            </View>

          </View>
        </View>

        <TouchableOpacity onPress={handleLogout}>
          <View style={styles.switctBox}>
            <View style={[styles.boxSwitch, { width: width / 1 - 32 }]}>
              <View style={styles.innerSwitch}>
                <View>
                  <Text style={styles.switchTxtSign}>Sign Out</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <View style={{ marginBottom: -100 }}></View>




      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containerFluid: {
    height: 43,
  },
  container: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    bottom: 197
  },
  Maintxt: {
    color: '#FFF',
    fontFamily: "Isidora Sans",
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.35
  },
  btn: {
    paddingLeft: 5,
    paddingRight: 5,
    height: 30,
    borderRadius: 25,
    backgroundColor: '#1B6AD5'
  },
  BtnText: {
    color: '#FFF',
    fontFamily: 'Isidora Sans',
    fontSize: 12,
    fontWeight: '600',
    left: 18,
    top: 4
  },
  mainHeroTxt: {
    color: '#FFF',
    display: 'flex',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0.35
  },
  circle: {
    height: 115,
    width: 115,
    borderRadius: 100,
    backgroundColor: "#FFF",
    borderWidth: 4,
    borderLeftColor: '#F4F4F4',
    borderRightColor: '#F4F4F4',
    borderTopColor: '#F4F4F4',
    borderBottomColor: '#F4F4F4',
    top: 14,
    left: 10
  },
  blueCircle: {
    width: 107.077,
    height: 107.077,
    display: 'flex',
    justifyContent: "center",
    alignContent: 'center',
    borderRadius: 127.472,
    backgroundColor: '#CAE1FF',
    borderWidth: 2,
    borderLeftColor: 'rgba(27, 106, 213, 0.50)',
    borderRightColor: 'rgba(27, 106, 213, 0.50)',
    borderTopColor: 'rgba(27, 106, 213, 0.50)',
    borderBottomColor: 'rgba(27, 106, 213, 0.50)',
  },
  textCircle: {
    color: '#000',
    fontFamily: 'Isidora Sans',
    fontSize: 45.89,
    fontWeight: '400',
  },
  fieldContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    bottom: 167,
  },
  field: {
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: "#FFF"
  },
  fevTxt: {
    left: 15,
    color: '#002646',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.35,
    fontFamily: 'Isidora Sans',
    bottom: 4
  },
  head: {
    flexDirection: "row",
    display: 'flex',
    justifyContent: 'space-between',
    top: 3
  },
  AreaTxt: {
    color: "#1B6AD5",
    fontFamily: "Isidora Sans",
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: 1.5
  },
  TxtContainerArea: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    bottom: 175,
    marginVertical: 20
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 185
  },
  innerContainer: {
    height: 150,
    paddingLeft: 20,
    paddingRight: 20,
    // display: 'flex',
    // justifyContent: "center",
    borderRadius: 10,
    backgroundColor: '#FFF'
  },
  box: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 1,
    borderLeftColor: '#979797',
    borderRightColor: '#979797',
    borderTopColor: '#979797',
    borderBottomColor: '#979797',

  },
  boxTxt: {
    color: "#002646",
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Isidora Sans',
    marginHorizontal: 5,
    width: 123
  },
  switctBox: {
    display: 'flex',
    justifyContent: "center", alignItems: "center",
    bottom: 175
  },
  boxSwitch: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#FFF'
  },
  innerSwitch: {
    flexDirection: 'row',
    display: "flex",
    justifyContent: "space-between"
  },
  switchTxt: {
    color: '#002646',
    fontSize: 16,
    fontFamily: 'Isidora Sans',
    fontWeight: '500',
  },
  errow: {
    display: "flex",
    justifyContent: 'center'
  },
  switchTxtSign: {
    color: "#1B6AD5",
    fontFamily: "Isidora Sans",
    fontSize: 16,
    fontWeight: '600'
  },
});

export default ProfileSetting