import { View, Text, SafeAreaView, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import ArrowLeft from '../../images/SpeakerImg/ArrowLeft.png'
import { Image } from 'react-native'
import img1 from '../../images/SponsorImg/img1.png'
import ACQImg from '../../images/SponsorImg/ACQ.png'
import Etoro from '../../images/SponsorImg/Etoro.png'
import Mubadala from '../../images/SponsorImg/Mubadala.png'
import wordWide from '../../images/SponsorImg/wordWide.png'
import ADCB from '../../images/SponsorImg/ADCB.png'
import star from '../../images/SponsorImg/star.png'
import ADX from '../../images/SponsorImg/ADX.png'
import btg from '../../images/SponsorImg/btg.png'
import circle from '../../images/SponsorImg/circle.png'
import FAB from '../../images/SponsorImg/FAB.png'
import History from '../../images/SponsorImg/History.png'
import HSBC from '../../images/SponsorImg/HSBC.png'
import Hewai from '../../images/SponsorImg/Hewai.png'
import ADGMacd from '../../images/SponsorImg/ADGMacd.png'
import Etihad from '../../images/SponsorImg/Etihad.png'
import Dhabi from '../../images/SponsorImg/Dhabi.png'
import Hub71 from '../../images/SponsorImg/Hub71.png'
import ADIB from '../../images/SponsorImg/ADIB.png'
import arabic from '../../images/SponsorImg/arabic.png'
import Hub1 from '../../images/SponsorImg/Hub1.png'
import img3 from '../../images/SponsorImg/img3.png'
import img4 from '../../images/SponsorImg/img4.png'
import wio from '../../images/SponsorImg/wio.png'
import binance from '../../images/SponsorImg/binance.png'
import midChain from '../../images/SponsorImg/midChain.png'
import img5 from '../../images/SponsorImg/img5.png'
import img6 from '../../images/SponsorImg/img6.png'
import img7 from '../../images/SponsorImg/img7.png'
import img8 from '../../images/SponsorImg/img8.png'
import img9 from '../../images/SponsorImg/img9.png'
import img10 from '../../images/SponsorImg/img10.png'
import img11 from '../../images/SponsorImg/img11.png'
import img12 from '../../images/SponsorImg/img12.png'
import img13 from '../../images/SponsorImg/img13.png'
import img14 from '../../images/SponsorImg/img14.png'
import img15 from '../../images/SponsorImg/img15.png'
import img16 from '../../images/SponsorImg/img16.png'
import img17 from '../../images/SponsorImg/img17.png'
import img18 from '../../images/SponsorImg/img18.png'
import img19 from '../../images/SponsorImg/img19.png'
import { StatusBar } from 'react-native'




const Sponsor = ({ navigation }) => {

    const handlepress = () => {
        navigation.navigate('Home');
    }
    const { width, height } = useWindowDimensions()
    return (
        <ScrollView style={{ backgroundColor: '#F4F4F4', }}>
            <SafeAreaView>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor="#002646"
                />
                <View style={[styles.SponsorHead, { width: width, height: height / 10 + 1 }]}>
                    <TouchableOpacity onPress={handlepress}>
                        <Image source={ArrowLeft} style={{ height: height / 34 - 2, marginVertical: height / 29 }} resizeMode='stretch' />
                    </TouchableOpacity>
                    <Text style={[styles.txtSponsor, { marginHorizontal: 52, marginVertical: height / 29 - 5, fontWeight: '700' }]}>Meet Our <Text style={{ color: '#1B6AD5' }}>Sponsors</Text></Text>
                </View>

                <View>
                    <View style={{ flexDirection: 'row', position: 'relative' }}>
                        <Text style={[styles.line, { width: width > 500 ? 400 : '24%' }]}> </Text>
                        <Text style={[styles.txt, { fontWeight: '700', width: (width > 500) ? 400 : '39%' }]}>headline partner</Text>
                        <Text style={[styles.line2, { width: width > 500 ? 400 : '24%' }]}></Text>
                    </View>
                    <Image style={[styles.img1, { width: width > 500 ? 400 : '75%' }]} resizeMode='stretch' source={img1} />

                </View>

                <View style={{ marginVertical: 29 }}>
                    <View style={{ flexDirection: 'row', marginHorizontal: 16 }}>
                        <Text style={{ width: width / 4 - 10, height: 0.5, backgroundColor: '#2E2E2E' }}></Text>
                        <View style={[styles.main, { height: 40, width: width / 2 - 14 }]}>
                            <Text style={[styles.partnerTxt, { fontWeight: '700' }]}>strategic partners</Text>
                        </View>
                        <Text style={{ width: width / 4 - 10, height: 0.5, backgroundColor: '#2E2E2E' }}></Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginHorizontal: 60, bottom: 16 }}>
                    <Image source={ACQImg} style={{ width: width / 5 - 10 }} resizeMode='stretch' />
                    <Image style={{ marginHorizontal: 88, width: width > 500 ? 300 : '42%' }} source={Etoro} resizeMode='stretch' />
                </View>

                <View style={{ flexDirection: 'row', marginHorizontal: 36, marginVertical: 7 }}>
                    <Image source={Mubadala} style={{ width: width / 3 - 1 }} resizeMode='stretch' />
                    <Image source={wordWide} style={{ width: width > 500 ? 300 : '48%', marginHorizontal: 35, marginVertical: 12 }} resizeMode='stretch' />
                </View>

                <View style={{ marginVertical: 40 }}>
                    <View style={{ flexDirection: 'row', marginHorizontal: 16 }}>
                        <Text style={{ width: width / 4 - 10, height: 0.7, backgroundColor: 'black' }}></Text>
                        <View style={[styles.main, { height: 40, width: width / 2 - 14 }]}>
                            <Text style={[styles.partnerTxt, { fontWeight: '700' }]}>official partners</Text>
                        </View>
                        <Text style={{ width: width / 4 - 10, height: 0.7, backgroundColor: 'black' }}></Text>
                    </View>
                </View>


                <View style={{ flexDirection: 'row', bottom: 40, marginHorizontal: 16 }}>
                    <Image source={ADCB} style={{ width: width / 4 - 10 }} resizeMode='stretch' />
                    <Image style={{ marginHorizontal: 35, width: width / 3 + 18 }} source={star} resizeMode='stretch' />
                    <Image source={ADX} style={{ width: width > 500 ? 400 : '14%' }} resizeMode='stretch' />
                </View>

                <View style={{ flexDirection: 'row', bottom: 25, marginHorizontal: 16 }}>
                    <Image source={btg} style={{ width: width / 4 - 10 }} resizeMode='stretch' />
                    <Image style={{ marginHorizontal: 35, width: width / 3 + 18 }} source={circle} resizeMode='stretch' />
                    <Image source={FAB} style={{ width: width > 500 ? 400 : '14%' }} resizeMode='stretch' />
                </View>

                <View style={{ flexDirection: 'row', bottom: 13, marginHorizontal: 16 }}>
                    <Image source={History} style={{ width: width / 4 - 10 }} resizeMode='stretch' />
                    <Image style={{ marginHorizontal: 35, marginVertical: 8, width: width / 3 + 18 }} source={HSBC} resizeMode='stretch' />
                    <Image source={Hewai} style={{ width: width > 500 ? 400 : '14%' }} resizeMode='stretch' />
                </View>

                <View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 6 }}>
                        <View style={{ flexDirection: "column", marginVertical: 18, marginHorizontal: 6, width: width / 2 - 18 }}>
                            <Text style={[styles.knowledTxt, { width: width / 2 - 26, fontWeight: '700' }]}>KNOWLEDGE PARTNER</Text>
                            <Image source={ADGMacd} style={{ marginHorizontal: 33, marginVertical: 15 }} resizeMode='stretch' />
                        </View>

                        <View style={{ marginVertical: 18 }}>
                            <Text style={{ width: 0.5, height: 109, backgroundColor: 'black' }}></Text>
                        </View>

                        <View style={{ flexDirection: "column", marginVertical: 18, marginHorizontal: 6, width: width / 2 - 18 }}>
                            <Text style={[styles.knowledTxt, { width: width / 2 - 20, fontWeight: '700' }]}>OFFICIAL AIRLINE PARTNER</Text>
                            <Image source={Etihad} style={{ marginHorizontal: 33, marginVertical: 15 }} resizeMode='stretch' />
                        </View>
                    </View>
                </View>


                <View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 8 }}>
                        <View style={{ flexDirection: "column", marginVertical: 18, marginHorizontal: 6, width: width / 2 - 18 }}>
                            <Text style={[styles.knowledTxt, { width: width / 2 - 26, fontWeight: '700' }]}>DESTINATION & CULTURAL PARTNER</Text>
                            <Image source={Dhabi} style={{ marginHorizontal: 33, marginVertical: 15 }} resizeMode='stretch' />
                        </View>

                        <View style={{ marginVertical: 18 }}>
                            <Text style={{ width: 0.5, height: 109, backgroundColor: 'black' }}></Text>
                        </View>

                        <View style={{ flexDirection: "column", marginVertical: 18, marginHorizontal: 6, width: width / 2 - 18 }}>
                            <Text style={[styles.knowledTxt, { width: width / 2 - 20, fontWeight: '700' }]}>TECH ECOSYSTEM PARTNER</Text>
                            <Image source={Hub71} style={{ marginHorizontal: 33, marginVertical: 15 }} resizeMode='stretch' />
                        </View>
                    </View>
                </View>

                <View>

                    <View style={{ marginVertical: 38 }}>
                        <View style={{ flexDirection: 'row', marginHorizontal: 16 }}>
                            <Text style={{ width: width / 4 - 10, height: 0.7, backgroundColor: 'black' }}></Text>
                            <View style={[styles.main, { height: 40, width: width / 2 - 14 }]}>
                                <Text style={[styles.partnerTxt, { fontWeight: '700' }]}>Support PartnerS</Text>
                            </View>
                            <Text style={{ width: width / 4 - 10, height: 0.75, backgroundColor: 'black' }}></Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", bottom: 40, marginHorizontal: 16 }}>
                        <Image source={ADIB} style={{ width: width / 4 - 15, marginVertical: 5 }} resizeMode='stretch' />
                        <Image source={arabic} style={{ marginHorizontal: 24, width: width / 4 - 15 }} resizeMode='stretch' />
                        <Image source={Hub1} style={{ width: width > 500 ? 400 : '39.5%' }} resizeMode='stretch' />
                    </View>
                    <View style={{ marginHorizontal: 83, bottom: 25, flexDirection: "row" }}>
                        <Image source={img3} style={{ width: width / 5 - 20 }} resizeMode='stretch' />
                        <Image source={img4} style={{ width: width / 5 - 20, marginHorizontal: 26 }} resizeMode='stretch' />
                        <Image source={wio} style={{ width: width > 500 ? 300 : '32%' }} resizeMode='stretch' />

                    </View>
                </View>


                <View>
                    <View style={{ marginVertical: 38 }}>
                        <View style={{ flexDirection: 'row', marginHorizontal: 16 }}>
                            <Text style={{ width: width / 4 - 10, height: 0.7, backgroundColor: 'black' }}></Text>
                            <View style={[styles.main, { height: 40, width: width / 2 - 14 }]}>
                                <Text style={[styles.partnerTxt, { fontWeight: '700' }]}>Support PartnerS</Text>
                            </View>
                            <Text style={{ width: width / 4 - 10, height: 0.75, backgroundColor: 'black' }}></Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", bottom: 40, marginHorizontal: 28 }}>
                        <Image source={binance} style={{ width: width / 4 + 5 }} resizeMode='stretch' />
                        <Image source={midChain} style={{ marginHorizontal: 37, width: width / 4 - 10 }} resizeMode='stretch' />
                        <Image source={img5} style={{ width: width / 6 - 2 }} resizeMode='stretch' />
                    </View>

                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bottom: 10 }}>
                        <Image source={img6} resizeMode='stretch' />
                    </View>
                </View>


                <View>
                    <View style={{ marginVertical: 50 }}>
                        <View style={{ flexDirection: 'row', marginHorizontal: 16 }}>
                            <Text style={{ width: width / 4 - 10, height: 0.7, backgroundColor: 'black' }}></Text>
                            <View style={[styles.main, { height: 40, width: width / 2 - 14 }]}>
                                <Text style={[styles.partnerTxt, { fontWeight: '700' }]}>MEDIA PARTNERS</Text>
                            </View>
                            <Text style={{ width: width / 4 - 10, height: 0.75, backgroundColor: 'black' }}></Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", bottom: 50, marginHorizontal: 12 }}>
                        <Image source={img7} style={{ width: width / 7 - 8 }} resizeMode='stretch' />
                        <Image source={img8} style={{ marginHorizontal: 44, width: width / 9 - 5 }} resizeMode='stretch' />
                        <Image source={img9} style={{ width: width / 5 + 8 }} resizeMode='stretch' />
                        <Image source={img10} style={{ marginHorizontal: 40, width: width / 7 }} resizeMode='stretch' />
                    </View>

                    <View style={{ flexDirection: 'row', bottom: 30, width: width / 1 - 40, marginHorizontal: 21, }}>
                        <Image source={img11} style={{ width: width / 5 + 10 }} resizeMode='stretch' />
                        <Image style={{ marginHorizontal: 45, width: width / 5 + 8, }} source={img12} resizeMode='stretch' />
                        <Image style={{ width: width / 6 + 10, }} source={img13} resizeMode='stretch' />
                    </View>

                    <View style={{ flexDirection: 'row', width: width / 1 - 70, marginHorizontal: 34, bottom: 6 }}>
                        <Image source={img14} style={{ width: width / 6 - 7 }} resizeMode='stretch' />
                        <Image style={{ marginHorizontal: 40, width: width / 5 + 10 }} source={img15} resizeMode='stretch' />
                        <Image style={{ width: width / 5 + 12 }} source={img16} resizeMode='stretch' />
                    </View>

                    <View style={{ flexDirection: 'row', width: width / 1 - 90, marginHorizontal: 48, marginVertical: 20, }}>
                        <Image source={img17} style={{ width: width / 6 + 6 }} resizeMode='stretch' />
                        <Image style={{ marginHorizontal: 50, width: width / 7 + 7 }} source={img18} resizeMode='stretch' />
                        <Image style={{ width: width / 8 + 8 }} source={img19} resizeMode='stretch' />
                    </View>
                </View>


                <View style={{ height: 20 }}></View>



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
    line: {
        height: 0.4,
        backgroundColor: '#2E2E2E',
        marginHorizontal: 16,
        marginVertical: 44,
    },
    txt: {
        height: 40,
        fontFamily: 'Isidora Sans',
        fontSize: 15,
        textTransform: 'uppercase',
        color: '#1B6AD5',
        marginVertical: 30,
        alignItems: 'center',
        display: 'flex',
        right: 3
    },
    line2: {
        height: 0.4,
        backgroundColor: '#2E2E2E',
        marginVertical: 44,
    },
    img1: {
        marginHorizontal: 48,
        height: 71,
        bottom: 25
    },
    partnerTxt: {
        fontFamily: 'Isidora Sans',
        fontSize: 15,
        textTransform: 'uppercase',
        color: '#1B6AD5'
    },
    main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 20
    },
    knowledTxt: {
        height: 40,
        display: 'flex',
        textAlign: 'center',
        fontSize: 17,
        fontFamily: 'Isidora Sans',
        textTransform: 'uppercase',
        color: '#1B6AD5'
    },
})

export default Sponsor