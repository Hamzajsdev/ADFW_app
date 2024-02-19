import { View, Text, SafeAreaView, useWindowDimensions, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ArrowLeft from '../../images/SpeakerImg/ArrowLeft.png'
import { Image } from 'react-native'
import search from '../../images/SpeakerImg/serach.png'
import speakerImg1 from '../../images/SpeakerImg/speakerImg1.png'
import BrownEllipse from '../../images/SpeakerImg/BrownEllipse.png'
import speakerImg2 from '../../images/SpeakerImg/speakerImg2.png'
import AquaEllipse from '../../images/SpeakerImg/AquaEllipse.png'
import BlueEllipse from '../../images/SpeakerImg/BlueEllipse.png'
import PinkEllipse from '../../images/SpeakerImg/PinkEllipse.png'
import speakerImg3 from '../../images/SpeakerImg/speakerImg3.png'
import speakerImg4 from '../../images/SpeakerImg/speakerImg4.png'
import speakerImg5 from '../../images/SpeakerImg/speakerImg5.png'
import speakerImg6 from '../../images/SpeakerImg/speakerImg6.png'
import speakerImg7 from '../../images/SpeakerImg/speakerImg7.png'
import speakerImg8 from '../../images/SpeakerImg/speakerImg8.png'
import speakerImg9 from '../../images/SpeakerImg/speakerImg9.png'
import speakerImg10 from '../../images/SpeakerImg/speakerImg10.png'
import speakerImg11 from '../../images/SpeakerImg/speakerImg11.png'
import speakerImg12 from '../../images/SpeakerImg/speakerImg12.png'
// import DropDownPicker from 'react-native-dropdown-picker'
import { ScrollView } from 'react-native-virtualized-view'
import { StatusBar } from 'react-native'


const Speaker = ({ navigation }) => {
    const [open, setOpen] = useState(false);

    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'All Events', value: 'All Events', },
        { label: ' 🟤 Opening Cermony', value: 'Opening Cermony' },
        { label: ' 🔵 Asset Abu Dhabi', value: 'Asset Abu Dhabi' },
        { label: ' 🟣 Fintech Abu Dhabi', value: 'Fintech Abu Dhabi' },
    ]);
    const handleImagePress = () => {
        navigation.navigate('SpeakerDetail');
    };
    const handlepress = () => {
        navigation.navigate('Home');
    }
    const { width, height } = useWindowDimensions()
    return (
        <ScrollView style={{ backgroundColor: '#F4F4F4' }}>
            <SafeAreaView >
            <StatusBar
                barStyle='light-content'
                backgroundColor="#002646"
            />
                <View style={[styles.SpeakerHead, { width: width, height: height / 10 + 1 }]}>
                    <TouchableOpacity onPress={handlepress}>
                        <Image source={ArrowLeft} style={{ height: height / 34 - 2, marginVertical: height / 29 }} resizeMode='stretch' />
                    </TouchableOpacity>
                    <Text style={[styles.txtSpeaker, { marginHorizontal: 52, marginVertical: height / 29 - 5, fontWeight: '700' }]}>Meet Our <Text style={{ color: '#1B6AD5' }}>Speakers</Text></Text>
                </View>

                <View
                    style={styles.container}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder={
                            <View>
                                <Text style={styles.txt1}>Select event</Text>
                                <Text style={styles.txt2}>All Events</Text>
                            </View>
                        }
                        style={styles.dropdown}
                    />
                </View>

                <View>
                    <TextInput style={[styles.field, { width: (width > 500) ? 400 : '92%', marginHorizontal: width / 16 - 9, position: 'relative' }]} placeholder='Speaker name' placeholderTextColor="rgba(129, 129, 129, 0.50)" />
                    <Image style={{ position: 'absolute', marginHorizontal: 35, marginVertical: 16 }} source={search} />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.speakerCard, { width: (width > 500) ? 400 : '43.5%', height: height / 245 + 245, marginHorizontal: width / 16 - 8 }]}>
                        <TouchableOpacity onPress={handleImagePress}>
                            <Image source={speakerImg1} style={{ width: width / 2.6, marginHorizontal: width / 40, position: 'relative' }} resizeMode='stretch' />
                        </TouchableOpacity>
                        <Image source={BrownEllipse} style={[styles.ellipsBrown, { position: 'absolute', marginHorizontal: width / 3 }]} />
                        <Text style={[styles.TextCard, { fontWeight: '700' }]}>H.E. Ahmed Jasim Al Zaabi <Text style={{ fontWeight: '700', color: '#2E2E2E' }}>Chairman</Text>  ADGM & Abu Dhabi Dept. of Economic Development</Text>
                    </View>

                    <View style={[styles.speakerCard2, { width: (width > 500) ? 400 : '43.5%', height: height / 245 + 245, }]}>
                        <Image source={speakerImg2} style={{ width: width / 2.6, marginHorizontal: width / 40, position: 'relative' }} resizeMode='stretch' />
                        <Image source={AquaEllipse} style={[styles.ellipsBrown, { position: 'absolute', marginHorizontal: width / 3 }]} />
                        <Text style={[styles.TextCard, { fontWeight: '700' }]}>H.H. Sheikha Shamma bint Sultan bint Khalifa Al Nayhan <Text style={{ fontWeight: '500', color: '#2E2E2E' }}>President & CEO, UICCA</Text>  </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginVertical: -21 }}>
                    <View style={[styles.speakerCard, { width: (width > 500) ? 400 : '43.5%', height: height / 245 + 245, marginHorizontal: width / 16 - 8 }]}>
                        <Image source={speakerImg3} style={{ width: width / 2.6, marginHorizontal: width / 40, position: 'relative' }} resizeMode='stretch' />
                        <Image source={AquaEllipse} style={[styles.ellipsBrown, { position: 'absolute', marginHorizontal: width / 3 }]} />
                        <Text style={[styles.TextCard, { fontWeight: '700' }]}>HRH Prince Khaled bin Alwaleed bin Talal Al Saud<Text style={{ fontWeight: 'normal', color: '#2E2E2E' }}> Founder & CEO </Text> KBW Ventures</Text>
                    </View>

                    <View style={[styles.speakerCard2, { width: (width > 500) ? 400 : '43.5%', height: height / 245 + 245, }]}>
                        <Image source={speakerImg4} style={{ width: width / 2.6, marginHorizontal: width / 40, position: 'relative' }} resizeMode='stretch' />
                        <Image source={BrownEllipse} style={[styles.ellipsBrown, { position: 'absolute', marginHorizontal: width / 3 }]} />
                        <Text style={[styles.TextCard, { fontWeight: '700' }]}>H.E. Abdulla Bin Touq Al Marri <Text style={{ fontWeight: '500', color: '#2E2E2E', }}> Minister of Economy </Text> Govt. of UAE </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.speakerCard, { width: (width > 500) ? 400 : '43.5%', height: height / 245 + 245, marginHorizontal: width / 16 - 8 }]}>
                        <Image source={speakerImg5} style={{ width: width / 2.6, marginHorizontal: width / 40, position: 'relative' }} resizeMode='stretch' />
                        <Image source={BlueEllipse} style={[styles.ellipsBrown, { position: 'absolute', marginHorizontal: width / 3 }]} />
                        <Text style={[styles.TextCard, { fontWeight: '700' }]}>Ray Dalio<Text style={{ fontWeight: 'normal', color: '#2E2E2E' }}> Founder, CIO Mentor, and Member of the Bridgewater Board </Text> Bridgewater Associates,</Text>
                    </View>
                    <View style={[styles.speakerCard2, { width: (width > 500) ? 400 : '43.5%', height: height / 245 + 245, }]}>
                        <Image source={speakerImg6} style={{ width: width / 2.6, marginHorizontal: width / 40, position: 'relative' }} resizeMode='stretch' />
                        <Image source={PinkEllipse} style={[styles.ellipsBrown, { position: 'absolute', marginHorizontal: width / 3 }]} />
                        <Text style={[styles.TextCard, { fontWeight: '700', marginVertical: 10 }]}>Jenny Lee{'\n'}<Text style={{ fontWeight: '500', color: '#2E2E2E', }}>Founding Partner </Text>{'\n'}GGV Capital </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginVertical: -21 }}>
                    <View style={[styles.speakerCard, { width: (width > 500) ? 400 : '43.5%', height: height / 245 + 245, marginHorizontal: width / 16 - 8 }]}>
                        <Image source={speakerImg7} style={{ width: width / 2.6, marginHorizontal: width / 40, position: 'relative' }} resizeMode='stretch' />
                        <Image source={PinkEllipse} style={[styles.ellipsBrown, { position: 'absolute', marginHorizontal: width / 3 }]} />
                        <Image source={BlueEllipse} style={[styles.ellipsBrown, { position: 'absolute', marginHorizontal: width / 2.83 }]} />
                        <Text style={[styles.TextCard, { fontWeight: '700' }]}>Laura M Cha{'\n'}<Text style={{ fontWeight: 'normal', color: '#2E2E2E' }}>Chairman{'\n'}</Text>Hong Kong Exchanges & Clearing</Text>
                    </View>

                    <View style={[styles.speakerCard2, { width: (width > 500) ? 400 : '43.5%', height: height / 245 + 245, }]}>
                        <Image source={speakerImg8} style={{ width: width / 2.6, marginHorizontal: width / 40, position: 'relative' }} resizeMode='stretch' />
                        <Image source={BlueEllipse} style={[styles.ellipsBrown, { position: 'absolute', marginHorizontal: width / 3 }]} />
                        <Text style={[styles.TextCard, { fontWeight: '700' }]}>Sir Christopher Hohn{'\n'}<Text style={{ fontWeight: '500', color: '#2E2E2E', }}>Founder, Managing Director & Portfolio Manager,</Text> TCI </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.speakerCard, { width: (width > 500) ? 400 : '43.5%', height: height / 245 + 245, marginHorizontal: width / 16 - 8 }]}>
                        <Image source={speakerImg9} style={{ width: width / 2.6, marginHorizontal: width / 40, position: 'relative' }} resizeMode='stretch' />
                        <Image source={PinkEllipse} style={[styles.ellipsBrown, { position: 'absolute', marginHorizontal: width / 3 }]} />
                        <Text style={[styles.TextCard, { fontWeight: '700' }]}>Caspar Lee{'\n'}<Text style={{ fontWeight: 'normal', color: '#2E2E2E' }}>Co-founder{'\n'}</Text>Influencer.com & Creator Ventures</Text>
                    </View>

                    <View style={[styles.speakerCard2, { width: (width > 500) ? 400 : '43.5%', height: height / 245 + 245, }]}>
                        <Image source={speakerImg10} style={{ width: width / 2.6, marginHorizontal: width / 40, position: 'relative' }} resizeMode='stretch' />
                        <Image source={AquaEllipse} style={[styles.ellipsBrown, { position: 'absolute', marginHorizontal: width / 3 }]} />
                        <Image source={BlueEllipse} style={[styles.ellipsBrown, { position: 'absolute', marginHorizontal: width / 2.83 }]} />
                        <Text style={[styles.TextCard, { fontWeight: '700' }]}>Huda Al Lawati{'\n'}<Text style={{ fontWeight: '500', color: '#2E2E2E', }}>Founder & CEO{'\n'}</Text> Aliph Capital </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginVertical: -21, marginBottom: 21 }}>
                    <View style={[styles.speakerCard, { width: (width > 500) ? 400 : '43.5%', height: height / 245 + 245, marginHorizontal: width / 16 - 8 }]}>
                        <Image source={speakerImg11} style={{ width: width / 2.6, marginHorizontal: width / 40, position: 'relative' }} resizeMode='stretch' />
                        <Image source={PinkEllipse} style={[styles.ellipsBrown, { position: 'absolute', marginHorizontal: width / 3 }]} />
                        <Text style={[styles.TextCard, { fontWeight: '700' }]}>Jeremy Allaire{'\n'}<Text style={{ fontWeight: 'normal', color: '#2E2E2E' }}>CEO & Founder{'\n'}</Text>Circle</Text>
                    </View>

                    <View style={[styles.speakerCard2, { width: (width > 500) ? 400 : '43.5%', height: height / 245 + 245, }]}>
                        <Image source={speakerImg12} style={{ width: width / 2.6, marginHorizontal: width / 40, position: 'relative' }} resizeMode='stretch' />
                        <Image source={AquaEllipse} style={[styles.ellipsBrown, { position: 'absolute', marginHorizontal: width / 3 }]} />
                        <Image source={BlueEllipse} style={[styles.ellipsBrown, { position: 'absolute', marginHorizontal: width / 2.83 }]} />
                        <Text style={[styles.TextCard, { fontWeight: '700' }]}>Raja Al Mazrouei{'\n'}<Text style={{ fontWeight: '500', color: '#2E2E2E', }}>CEO{'\n'}</Text> Etihad Credit Insurance </Text>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}></View>

            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        marginVertical: 20,
        paddingHorizontal: 16,
    },
    dropdown: {
        borderColor: '#818181',
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        backgroundColor: "#F4F4F4"
    },
    txt1: {
        color: '#818181',
        fontFamily: 'Isidora Sans',
        fontSize: 10,
        fontWeight: '500',
        letterSpacing: 0.35
    },
    txt2: {
        color: '#2E2E2E',
        fontFamily: 'Isidora Sans',
        fontSize: 14,
        fontWeight: '500',
        letterSpacing: 0.35
    },
    SpeakerHead: {
        backgroundColor: '#002646',
        paddingBottom: 13,
        paddingLeft: 13,
    },
    txtSpeaker: {
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
        height: 60,
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
        fontSize: 14,
        letterSpacing: 0.35,
    },
    field: {
        borderRadius: 5,
        borderColor: '#818181',
        borderWidth: 1,
        paddingRight: 20,
        paddingLeft: 45,
        height: 49,
        width: 361,
        fontSize: 14
    },
    speakerCard: {
        borderRadius: 10,
        backgroundColor: "#FFF",
        paddingTop: 10,
        paddingBottom: 10,
        marginVertical: 21.5,
    },
    speakerCard2: {
        borderRadius: 10,
        backgroundColor: "#FFF",
        paddingTop: 10,
        paddingBottom: 10,
        marginVertical: 21.5,
    },
    ellipsBrown: {
        marginVertical: 20
    },
    TextCard: {
        color: '#002646',
        fontSize: 12,
        fontFamily: 'Isidora Sans',
        marginVertical: 5,
        marginHorizontal: 10,
    },
    headContain: {
        flexDirection: "row",
        gap: 40,
        borderColor: "#FFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    container2: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },
    dropDown: {
        borderRadius: 5,
        backgroundColor: '#FFF',
        borderLeftColor: '#818181',
        borderRightColor: '#818181',
        borderTopColor: '#818181',
        borderBottomColor: '#818181',
        borderWidth: 1,
        width: 361,
        height: 137,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        elevation: 5,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
    }
})

export default Speaker