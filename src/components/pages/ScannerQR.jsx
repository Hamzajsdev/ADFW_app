import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import gradiantBg from '../../images/ProfileImg/gradiantBg.png'
import { Image } from 'react-native'
import ArrowLeft from '../../images/SpeakerImg/ArrowLeft.png'
import QRimg from '../../images/ScannerQRImg/QRImg.png'
import vectorScane from '../../images/ScannerQRImg/vectorScane.png'
import { StatusBar } from 'react-native'





const ScannerQR = ({ navigation }) => {
    const handlePress = () => {
        navigation.navigate('ContactQR')
    }
    const { width, height } = useWindowDimensions()
    return (
        <ScrollView style={{ width: width, height: height }}>
            <SafeAreaView  >
            <StatusBar
                barStyle='light-content'
                backgroundColor="#08002B"
            />
                <View>
                    <Image source={gradiantBg} resizeMode='stretch' style={{ height: 230, width: width / 1 }} />
                    <View style={styles.container}>
                        <View style={[styles.containerFluid, { width: width / 1 - 32 }]}>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity onPress={handlePress}>
                                    <Image source={ArrowLeft} resizeMode='stretch' />
                                </TouchableOpacity>
                                <Text style={styles.Maintxt}>My Contact</Text>
                            </View>
                        </View>

                        <View >
                            <Text style={styles.mainHeroTxt}>Jonathan Samules{'\n'} <Text style={{ fontSize: 16, fontWeight: '500' }}>Co-founder & CEO{'\n'}<Text style={{ fontSize: 16, fontWeight: '400' }}>Company name</Text></Text></Text>
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

                <View style={{ width: width, display: 'flex', alignItems: 'center', bottom: 185, marginVertical: 72 }}>
                    <View>
                        <Image source={QRimg} resizeMode='stretch' style={{ width: 230, height: 215 }} />
                            <View style={styles.textBox}>
                                <Image source={vectorScane} resizeMode='stretch' style={{ marginHorizontal: 16.25, marginTop: 4 }} />
                                <Text style={styles.scanTxt}>Scan QR to connect</Text>
                            </View>
                    </View>
                </View>
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
        letterSpacing: 0.35,
        marginHorizontal: 20,
        bottom: 6,
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
    textBox: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderLeftColor: '#005AD4',
        borderRightColor: '#005AD4',
        borderTopColor: '#005AD4',
        borderBottomColor: '#005AD4',
        flexDirection: 'row',
        marginVertical: 50
    },
    scanTxt: {
        color: '#1B6AD5',
        fontFamily: "Isidora Sans",
        fontSize: 15,
        fontWeight: '500',
        letterSpacing: 0.35,

    }
})

export default ScannerQR