import React from 'react'
import { ImageBackground, ScrollView, StatusBar, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import icon from '../../images/LoginImg/icon.png'
import rantangeImg from '../../images/LoginImg/Rectangle.png'
import bgImg from '../../images/LoginImg/BG.png'
import styles from './CommonStyles'
import { Image } from 'react-native';
import { Text } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context'




const Login = ({ navigation }) => {
    const handlePress=()=>{
        navigation.navigate('Otp')
    }
    const { width, height } = useWindowDimensions()
    return (
        <ScrollView>
            <SafeAreaView >
                <StatusBar
                    barStyle='light-content'
                    backgroundColor="#002846"
                />
                <ImageBackground source={bgImg} resizeMode='stretch' style={{ height: height, width: width }}>
                    <View>
                        <View style={[styles.container, { width: width / 1, marginTop: 49 }]}>
                            <Image source={icon} />
                        </View>
                        <View style={[styles.container, { marginTop: 51 }]}>
                            <View style={{ width: width / 1 - 32, }}>
                                <Text style={styles.txt}>Welcome!</Text>
                            </View>
                        </View>
                        <View style={[styles.container, { marginTop: 30 }]}>
                            <View style={{ width: width / 1 - 32 }}>
                                <TextInput style={[styles.textInput]} placeholder="Enter Registered Email ID" placeholderTextColor="#FFFFFF4D" />
                            </View>
                        </View>
                        <View style={[styles.container, { marginTop: 20 }]}>
                            <View style={{ width: width / 1 - 32 }}>
                                <TouchableOpacity onPress={handlePress}>
                                <Button style={[styles.btn]} labelStyle={{ color: "white", fontSize: 16, fontFamily: 'Isidora Sans', fontWeight: '500', fontStyle: 'normal', }} >Sign in</Button>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 50 }}>
                            <View style={[styles.ractangleImg, { width: width / 1 - 32 }]}>
                                <Image resizeMode='stretch' source={rantangeImg} />
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Login
