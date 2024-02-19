import { View, Text, ScrollView, SafeAreaView, StyleSheet, Image, useWindowDimensions, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import ArrowLeft from '../../images/SpeakerImg/ArrowLeft.png'
import img1 from '../../images/LocationImg/img1.png'
import img2 from '../../images/LocationImg/img2.png'
import img4 from '../../images/LocationImg/img4.png'


const Location = ({ navigation }) => {


    const handleFalcon = () => {
        navigation.navigate('FalconSqure');
    }

    const handlepress = () => {
        navigation.navigate('CapitalSqure');
    }
    const handleFourseason = () => {
        navigation.navigate('Fourseasons');
    }
    const handleHome = () => {
        navigation.navigate('Home');
    }


    const { width, height } = useWindowDimensions()
    return (
        <ScrollView style={{ backgroundColor: "#F4F4F4" }}>
            <SafeAreaView>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor="#002646"

                />
                <View>
                    <View style={[styles.SponsorHead, { width: width, height: height / 10 + 1 }]}>
                        <TouchableOpacity onPress={handleHome}>
                            <Image source={ArrowLeft} style={{ height: height / 34 - 2, marginVertical: height / 29 }} resizeMode='stretch' />
                        </TouchableOpacity>
                        <Text style={[styles.txtSponsor, { marginHorizontal: 52, marginVertical: height / 29 - 5, fontWeight: '700' }]}> Venue <Text style={{ color: '#1B6AD5' }}> Locations </Text></Text>
                    </View>

                    <View style={[styles.cardLocation, { width: width > 500 ? 400 : '92.5%', marginHorizontal: 14, marginVertical: 23 }]}>
                        <TouchableOpacity onPress={handlepress}>
                            <View>
                                <Image style={[styles.cardImg, { width: width > 500 ? 400 : '95%' }]} source={img1} />
                                <Text style={[styles.CardTxt, { fontWeight: '600' }]}>Capital Square</Text>
                                <Text style={[styles.simpleTxt, { fontWeight: '500' }]}>ADFW’s signature outdoor marketplace and showcaseAn energetic and vibrant.... <Text style={{ color: '#1B6AD5', fontSize: 13 }}>View details</Text> </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={[styles.cardLocation, { width: width > 500 ? 400 : '92.5%', marginHorizontal: 14 }]}>
                    <TouchableOpacity onPress={handleFalcon}>
                        <View>
                            <Image style={[styles.cardImg, { width: width > 500 ? 400 : '95%' }]} source={img2} />
                            <Text style={[styles.CardTxt, { fontWeight: '600' }]}>Falcon Square</Text>
                            <Text style={[styles.simpleTxt, { fontWeight: '500' }]}>Situated in the North Plaza of the ADGM Building, this new edition of the Abu Dhabi.... <Text style={{ color: '#1B6AD5', fontSize: 13 }}>View details</Text> </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={[styles.cardLocation, { width: width > 500 ? 400 : '92.5%', marginHorizontal: 14, marginVertical: 23 }]}>
                    <TouchableOpacity onPress={handleFourseason}>
                        <View>
                            <Image style={[styles.cardImg, { width: width > 500 ? 400 : '95%' }]} source={img4} />
                            <Text style={[styles.CardTxt, { fontWeight: '600' }]}>Four seasons hotel</Text>
                            <Text style={[styles.simpleTxt, { fontWeight: '500' }]}>Partner events and key events happening on the periphery of Abu Dhabi Finance..... <Text style={{ color: '#1B6AD5', fontSize: 13 }}>View details</Text> </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
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

    },
    cardLocation: {
        height: 290,
        borderRadius: 10,
        backgroundColor: '#FFF',
        elevation: 5,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
    },
    cardImg: {
        marginLeft: 9,
        marginTop: 9,
        marginBottom: 9,
        borderRadius: 10
    },
    CardTxt: {
        fontSize: 18,
        color: '#1B6AD5',
        marginLeft: 9,
    },
    simpleTxt: {
        color: '#2E2E2E',
        fontSize: 13,
        fontFamily: 'Isidora Sans',
        marginLeft: 9,
        marginTop: 3
    }
})
export default Location