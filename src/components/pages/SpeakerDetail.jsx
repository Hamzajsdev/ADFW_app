import React from 'react'
import { View, Text, ScrollView, SafeAreaView, StyleSheet, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
import ArrowLeft from '../../images/SpeakerImg/ArrowLeft.png'
import speakerImg1 from '../../images/SpeakerImg/speakerImg1.png'
import BrownEllipse from '../../images/SpeakerImg/BrownEllipse.png'



const SpeakerDetail = ({navigation}) => {
    const handlepress=()=>{
        navigation.navigate('Speaker');
    }
    const { width, height } = useWindowDimensions()
    return (
        <ScrollView style={{ backgroundColor: '#F4F4F4' }}>
            <SafeAreaView>
                <View style={[styles.SpeakerHead, { width: width, height: height / 10 + 1 }]}>
                    <TouchableOpacity onPress={handlepress}>
                    <Image source={ArrowLeft} style={{ height: height / 34 - 2, marginVertical: height / 29 }} resizeMode='stretch' />
                    </TouchableOpacity>

                </View>

                <View style={[styles.detailCard, { width: (width > 500) ? 400 : '92%', height: height / 4 - 10, marginHorizontal: width / 16 - 8 }]}>
                    <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: (width > 500) ? 400 : 155, height: height / 4 - 30, marginHorizontal: width / 16 - 14, position:'relative' }} source={speakerImg1} resizeMode='stretch' />

                        <Text style={[styles.txtSpekerDetail, { fontWeight: 'bold', width: width / 2 - 20, }]}>H.E. Ahmed Jasim Al Zaabi{'\n'}<Text style={{ fontSize: 13, color: '#2E2E2E', fontWeight: 'normal' }}>Chairman </Text><Text style={{ fontSize: 13, color: '#2E2E2E', fontWeight: '600' }}> {'\n'}ADGM & Abu Dhabi Dept. of Economic Development </Text></Text>
                    </View>
                    <Image source={BrownEllipse} style={[styles.ellipsBrown, { position: 'absolute', marginHorizontal: width / 2.75 }]} />

                </View>

                <View style={[styles.largeTxt, { marginHorizontal: width / 16 - 8, width: (width > 500) ? 400 : '92%' }]}>
                    <Text style={[styles.detailTxt, { fontWeight: '600', }]}>His Excellency Ahmed Jasim Al Zaabi is a seasoned leader with a proven track record in delivering results. He has long standing experience in the finance and investments sector, wherein he has managed and executed multi-billion dollar investment transactions and has led numerous restructurings and turnarounds across a multitude of sectors.{'\n'}{'\n'}

                        H.E. Ahmed started his career in the Abu Dhabi Stock Exchange and then moved to a senior management role in a leading privately owned real estate company. Post this, he joined the Government of Abu Dhabi  in an executive leadership role to manage an office that oversaw a multi-billion dollar portfolio of commercial state owned enterprises, wherein he led transformation and restructuring of a number of entities as the shareholder’s representative. Subsequent to this, he was appointed in an executive leadership position to manage the central treasury of the Government of Abu Dhabi.{'\n'}{'\n'}

                        As of late 2021, H.E. Ahmed currently holds the chairman position at Abu Dhabi Global Market. Additionally, he serves as Member of the Board on numerous ADNOC entities and the Khalifa Fund at present. In the past, he has also served as a Board member on numerous banks and financial institutions such as the Abu Dhabi Exchange (ADX), Union National Bank (UNB) and the Abu Dhabi Retirement Pensions & Benefits Fund (ADRPBF).H.E. Ahmed holds a Masters degree in Economics from the United Kingdom.</Text>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    SpeakerHead: {
        backgroundColor: '#002646',
        paddingBottom: 13,
        paddingLeft: 13,
    },
    detailCard: {
        borderRadius: 10,
        backgroundColor: '#FFF',
        paddingTop: 10,
        paddingBottom: 10,
        marginVertical: 17,
        elevation: 5,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
    },
    txtSpekerDetail: {
        fontSize: 20,
        fontFamily: 'Isidora Sans',
        color: '#002646',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    largeTxt: {
        height: 740,
    },
    detailTxt: {
        color: '#000',
        fontFamily: 'Isidora Sans',
        fontSize: 16,

    },
    ellipsBrown: {
        marginVertical: 20
    },
})

export default SpeakerDetail