import { View, Text, SafeAreaView, useWindowDimensions, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native'
import React from 'react'
import ArrowLeft from '../../images/SpeakerImg/ArrowLeft.png'
import QR from '../../images/ContactQRImg/QR.png'


const ContactQR = ({navigation}) => {
    const handlepress=()=>{
        navigation.navigate('ProfileSetting')
    }
    const handlesubmit=()=>{
        navigation.navigate('ScannerQR')
    }
    const { width, height } = useWindowDimensions()
    return (
        <SafeAreaView style={{ backgroundColor: "#F4F4F4", width: width, height: height }}>
            <StatusBar
                barStyle='light-content'
                backgroundColor="#002646"
            />
            <View style={[styles.SponsorHead, { width: width, height: height / 10 + 1 }]}>
                <TouchableOpacity onPress={handlepress}>
                <Image source={ArrowLeft} style={{ height: height / 34 - 2, marginVertical: height / 29 }} resizeMode='stretch' />
                </TouchableOpacity>
                <Text style={[styles.txtSponsor, { marginVertical: height / 29 - 5, }]}> My Contact Code </Text>
            </View>


            <View style={styles.CardContainer}>
                <View style={[styles.card, { width: width / 1 - 32 }]}>

                    <View style={{ width: width, display: "flex", alignItems: 'center', bottom:44, right:12 }}>
                        <View style={styles.cirCleBox}>
                            <Text style={[styles.innerBoxQR, { fontWeight: "normal" }]}>JS</Text>
                        </View>
                    </View>

                    <View style={styles.mainContainer}>
                        <Text style={styles.mainHeroTxt}>Jonathan Samules{'\n'} <Text style={{ fontSize: 18, fontWeight: '400', color: "#2E2E2E" }}>Co-founder & CEO{'\n'}<Text style={{ fontSize: 18, fontWeight: '500', color: "#2E2E2E" }}>Company name</Text></Text></Text>
                    </View>

                    <View style={styles.line}>
                        <View style={{ width: width / 1 - 48 }}>
                            <Text style={styles.borderLine}></Text>
                        </View>
                    </View>

                    <View>
                        <View style={[styles.QRCode, { width: width / 1 - 32 }]}>
                            <View style={styles.borderLineQR}>
                                <Image source={QR} resizeMode='stretch' />
                            </View>

                             <TouchableOpacity onPress={handlesubmit}>   
                            <Text style={styles.QRTxt}>SCAN TO CONNECT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    SponsorHead: {
        backgroundColor: '#002646',
        paddingBottom: 13,
        paddingLeft: 13,
    },
    txtSponsor: {
        position: 'absolute',
        fontSize: 22,
        letterSpacing: 0.35,
        fontFamily: 'Isidora Sans',
        color: '#FFF',
        marginHorizontal: 52,
        fontWeight: '700'
    },
    card: {
        height: 440,
        borderRadius: 10,
        backgroundColor: "#FFF",
        elevation: 5,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
    },
    CardContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 92
    },
    mainTxt: {
        fontSize: 22,
        fontFamily: 'Isidora Sans',
        fontWeight: '700',
        letterSpacing: 0.35,
        color: '#002646',

    },
    mainHeroTxt: {
        color: '#002646',
        display: 'flex',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: "700",
        letterSpacing: 0.35
    },
    mainContainer: {
        bottom:38
    },
    line: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    borderLine: {
        height: 1.5,
        backgroundColor: "#F4F4F4"
    },
    QRCode: {
        display: 'flex',
        alignItems: "center",
        paddingTop: 8.619,
        paddingBottom: 8.619,
        paddingLeft: 8.619,
        paddingRight: 8.619,
    },
    borderLineQR: {
        backgroundColor: "#FFF",
        borderLeftColor: '#1B6AD5',
        borderRightColor: '#1B6AD5',
        borderTopColor: '#1B6AD5',
        borderBottomColor: '#1B6AD5',
        borderWidth: 2,
        marginVertical:27
    },
    QRTxt: {
        color: "#1B6AD5",
        fontFamily: 'Isidora Sans',
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 0.35,
        bottom:22
    },
    cirCleBox: {
        width: 100,
        height: 102,
        paddingTop: 11.86,
        paddingBottom: 11.86,
        paddingLeft: 11.86,
        paddingRight: 11.86,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 118.605,
        backgroundColor: "#CAE1FF",
        borderLeftColor: 'rgba(27, 106, 213, 0.50)',
        borderRightColor: 'rgba(27, 106, 213, 0.50)',
        borderTopColor: 'rgba(27, 106, 213, 0.50)',
        borderBottomColor: 'rgba(27, 106, 213, 0.50)',
        borderWidth: 2.5,
    },
    innerBoxQR: {
        fontFamily: 'Isidora Sans',
        fontSize: 43,
        // fontWeight:'400',
        color: "#000"
    }
})

export default ContactQR