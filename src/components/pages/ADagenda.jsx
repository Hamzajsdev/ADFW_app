

import { View, TextInput, Text, Image, ScrollView, useWindowDimensions, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import ArrowLeft from '../../images/SpeakerImg/ArrowLeft.png'
import DropDown from '../../images/SpeakerImg/dropDown.png'
import search from '../../images/SpeakerImg/serach.png'
import huawei from '../../images/AgendaImg/huawei.png'
import locate from '../../images/AgendaImg/locate.png'
import Ellipse7 from '../../images/AgendaImg/Ellipse7.png'
import Ellipse8 from '../../images/AgendaImg/Ellipse8.png'
import Ellipse9 from '../../images/AgendaImg/Ellipse9.png'
import Ellipse10 from '../../images/AgendaImg/Ellipse10.png'
import Icon from '../../images/AgendaImg/Icon.png'
import { TouchableOpacity } from 'react-native'


const ADagenda = ({ navigation }) => {
    const handlepress = () => {
        navigation.navigate('Agenda');
    }
    const handleagendaDetail = () => {
        navigation.navigate('AgendaDetail');
    }
    const { width, height } = useWindowDimensions()
    return (
        <ScrollView style={{ backgroundColor: '#F4F4F4' }}>
            <SafeAreaView>
                <View style={[styles.SponsorHead, { width: width, height: height / 10 + 1 }]}>
                    <TouchableOpacity onPress={handlepress}>
                        <Image source={ArrowLeft} style={{ height: height / 34 - 2, marginVertical: height / 29 }} resizeMode='stretch' />
                    </TouchableOpacity>
                    <Text style={[styles.txtSponsor, { marginHorizontal: 52, marginVertical: height / 29 - 5, fontWeight: '700' }]}> Event <Text style={{ color: '#1B6AD5' }}> Agenda </Text></Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.textField, { width: (width > 500) ? 400 : '46%', marginHorizontal: width / 16 - 9, }]}>
                        <Text style={[styles.event, { fontWeight: '500', width: width / 1.24, }]}>Select day</Text>
                        <Text style={[styles.AllEvent, { fontWeight: '500', width: 280, }]}>28 Nov</Text>
                        <Image source={DropDown} style={{ marginVertical: -20, marginHorizontal: (width > 500) ? 400 : '95%' }} resizeMode='stretch' />
                    </View>

                    <View>
                        <View style={[styles.textField, { width: (width > 500) ? 400 : '46%' }]}>
                            <Text style={[styles.event, { fontWeight: '500', width: width / 1.24, }]}>Select Event</Text>
                            <Text style={[styles.AllEvent, { fontWeight: '500', width: 280, }]}>Fintech Abu Dhabi</Text>
                            <Image source={DropDown} style={{ marginVertical: -20, marginHorizontal: (width > 500) ? 400 : '95%' }} resizeMode='stretch' />
                        </View>
                    </View>
                </View>

                <View>
                    <TextInput style={[styles.field, { width: (width > 500) ? 400 : '92%', marginHorizontal: width / 16 - 9, position: 'relative' }]} placeholder='Search session, speaker, etc.' placeholderTextColor="rgba(129, 129, 129, 0.50)" />
                    <Image style={{ position: 'absolute', marginHorizontal: 35, marginVertical: 12 }} source={search} />
                </View>


                <View>
                    <Text style={[styles.txt, { marginVertical: 20, marginHorizontal: width / 16 - 6 }]}>November 28 - <Text style={{ color: '#1B6AD5' }}>Day 2</Text></Text>
                </View>

                <View style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: width / 1 - 32, marginVertical: 20 }} source={huawei} resizeMode='stretch' />
                </View>

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center", marginVertical: -20 }}>
                    <View style={[styles.cardAgenda, { width: width / 1 - 32 }]}>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: 115, width: width / 1 - 36 - 38, flexDirection: "row" }}>
                                <View style={[styles.cardPink, { display: "flex", justifyContent: "center", alignItems: "center" }]}>
                                    <Text style={styles.time}>09:00 09.30</Text>
                                </View>
                                <View style={{ width: width / 1 - 180, height: 69, marginHorizontal: 20 }}>
                                    <Text style={styles.txtinnerCard2}>Session{'\n'}<Text style={{ color: "#2E2E2E", fontSize: 14, fontWeight: '600', textTransform: 'none' }}>Presentation{'\n'}</Text><Text style={{ color: '#2E2E2E', textTransform: 'none', fontSize: 14 }}>Metaverse - A Parallel Life...</Text></Text>
                                    <View style={{ marginVertical: 20, flexDirection: "row", }}>
                                        <Image source={locate} resizeMode='stretch' />
                                        <Text style={styles.ADFWTxt}>South plaza</Text>
                                        <Image source={Ellipse7} resizeMode='stretch' style={{ marginHorizontal: 30 }} />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: width / 1 - 32, height: 2, opacity: 0.1, backgroundColor: "#002646", marginVertical: 14 }}></View>
                        <View style={{ marginVertical: -9 }}>
                            <TouchableOpacity onPress={handleagendaDetail}>
                                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                    <Text style={styles.txtView}>View details</Text>
                                    <Image source={Icon} style={{ marginHorizontal: 10 }} resizeMode='stretch' />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


                <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center", marginVertical: 10 }}>
                    <View style={[styles.cardAgenda, { width: width / 1 - 32 }]}>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: 115, width: width / 1 - 36 - 38, flexDirection: "row" }}>
                                <View style={[styles.cardPink, { display: "flex", justifyContent: "center", alignItems: "center" }]}>
                                    <Text style={styles.time}>09:30 10.15</Text>
                                </View>
                                <View style={{ width: width / 1 - 180, height: 69, marginHorizontal: 20 }}>
                                    <Text style={styles.txtinnerCard2}>Session{'\n'}<Text style={{ color: "#2E2E2E", fontSize: 14, fontWeight: '600', textTransform: 'none' }}>panel{'\n'}</Text><Text style={{ color: '#2E2E2E', textTransform: 'none', fontSize: 14 }}>The Business Model of Influence...</Text></Text>
                                    <View style={{ marginVertical: 20, flexDirection: "row", }}>
                                        <Image source={locate} resizeMode='stretch' />
                                        <Text style={styles.ADFWTxt}>South plaza</Text>
                                        <Image source={Ellipse8} resizeMode='stretch' style={{ marginHorizontal: 30 }} />
                                        <Image source={Ellipse9} resizeMode='stretch' style={{ right: 38 }} />
                                        <Image source={Ellipse10} resizeMode='stretch' style={{ right: 42 }} />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: width / 1 - 32, height: 2, opacity: 0.1, backgroundColor: "#002646", marginVertical: 14 }}></View>
                        <View style={{ marginVertical: -9 }}>
                            <TouchableOpacity onPress={handleagendaDetail}>
                                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                    <Text style={styles.txtView}>View details</Text>
                                    <Image source={Icon} style={{ marginHorizontal: 10 }} resizeMode='stretch' />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}></View>

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
    textField: {
        borderRadius: 5,
        borderLeftColor: '#818181',
        borderRightColor: '#818181',
        borderTopColor: '#818181',
        borderBottomColor: '#818181',
        borderWidth: 1,
        paddingTop: 2,
        paddingRight: 20,
        paddingLeft: 20,
        height: 40,
        width: 361,
        marginVertical: 15,
    },
    event: {
        color: '#818181',
        fontFamily: 'Isidora Sans',
        fontSize: 10,
        letterSpacing: 0.35,
    },
    AllEvent: {
        color: '#2E2E2E',
        fontFamily: 'Isidora Sans',
        fontSize: 13,
        letterSpacing: 0.35,
    },
    field: {
        borderRadius: 5,
        borderLeftColor: '#818181',
        borderRightColor: '#818181',
        borderTopColor: 'darkgray',
        borderBottomColor: '#818181',
        borderWidth: 1,
        paddingRight: 20,
        paddingLeft: 45,
        height: 40,
        width: 361,
        fontSize: 14
    },
    txt: {
        color: '#002646',
        fontFamily: 'Isidora Sans',
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: 0.35,
    },
    cardAgenda: {
        height: 175,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 15,
        backgroundColor: '#FFF',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 1,
        marginVertical: 10
    },
    cardPink: {
        width: 85,
        height: 102,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 10,
        backgroundColor: '#D23DC7'
    },
    time: {
        fontSize: 20,
        fontWeight: '300',
        fontFamily: 'Isidora Sans',
        color: '#FFF',
    },
    txtinner: {
        color: "#1B6AD5",
        fontFamily: "#1B6AD5",
        fontSize: 12,
        fontWeight: '500',
    },
    txtinnerCard2: {
        color: "#1B6AD5",
        fontFamily: "Isidora Sans",
        fontSize: 12,
        fontWeight: '500',
        textTransform: 'uppercase'
    },
    ADFWTxt: {
        marginHorizontal: 8,
        color: "#002646",
        fontSize: 13,
        fontWeight: '500',
        fontFamily: 'Isidora Sans'
    },
    txtView: {
        fontSize: 14,
        fontFamily: 'Isidora Sans',
        color: "#002646",
        fontWeight: '500',
    },
    headContain: {
        flexDirection: "row",
        gap: 40,
        borderColor: "#FFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    
})
export default ADagenda