import { View, Text, Image, useWindowDimensions, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box';
import imgIcon from '../../images/HomeImg/Layer_1.png'
import vectorIcon from '../../images/HomeImg/Vector.png'
import assetsIcon from '../../images/HomeImg/assets.png'
import heartIcon from '../../images/HomeImg/heart.png'
import notificationIcon from '../../images/HomeImg/bell.png'
import eliipseIcon from '../../images/HomeImg/dot.png'
import linearrow from '../../images/HomeImg/lineErrow.png'
import shaikhImg from '../../images/HomeImg/spekImg.png'
import speakerImg4 from '../../images/SpeakerImg/speakerImg4.png'
import speakerImg5 from '../../images/SpeakerImg/speakerImg5.png'
import speakerImg6 from '../../images/SpeakerImg/speakerImg6.png'
import speakerImg7 from '../../images/SpeakerImg/speakerImg7.png'
import speakerImg8 from '../../images/SpeakerImg/speakerImg8.png'
import speakerImg9 from '../../images/SpeakerImg/speakerImg9.png'
import mamimg from '../../images/HomeImg/mamimg.png'
import princeImg from '../../images/HomeImg/prince.png'
import EconomyImg from '../../images/HomeImg/economy.png'
import assetimgs from '../../images/HomeImg/asset.png'
import fintectImg from '../../images/HomeImg/fintect.png'
import finenceImg from '../../images/HomeImg/finence.png'
import raceImg from '../../images/HomeImg/race.png'
import capitalSqure from '../../images/HomeImg/capitalSqure.png'
import squre2 from '../../images/HomeImg/squre2.png'
import squre3 from '../../images/HomeImg/squre3.png'
import squre4 from '../../images/HomeImg/squre4.png'
import foodImg from '../../images/HomeImg/food.png'
import admwImg from '../../images/HomeImg/admw.png'
import abudhabiImg from '../../images/HomeImg/abudhabi.png'
import downloadImg from '../../images/HomeImg/download.png'
import Swiper from 'react-native-swiper'
import locate from '../../images/AgendaImg/locate.png'
import Ellipse1 from '../../images/AgendaImg/Ellipse1.png'
import Ellipse7 from '../../images/AgendaImg/Ellipse7.png'
import Icon from '../../images/AgendaImg/Icon.png'


const imagSlider = [
    require('../../images/HomeImg/banner.png'),
    require('../../images/HomeImg/banner2.png'),
    require('../../images/HomeImg/banner3.png'),

]

const imagSlider2 = [
    require('../../images/HomeImg/cuthead.png'),
    require('../../images/HomeImg/spon2.png'),
    require('../../images/HomeImg/cuthead.png'),

]
const Home = ({ navigation }) => {
    const handleADagendaPage = () => {
        navigation.navigate('Agenda');
    };
    const handleSocialTalk = () => {
        navigation.navigate('SocialTalk');
    };
    const handleLocation = () => {
        navigation.navigate('Location');
    };
    const handleFavorites = () => {
        navigation.navigate('Favourties');
    };
    const handleNotification = () => {
        navigation.navigate('Notification');
    };
    const handleProfile = () => {
        navigation.navigate('ProfileSetting');
    };
    const handleSpeaker = () => {
        navigation.navigate('Speaker');
    };
    const handleSponsor = () => {
        navigation.navigate('Sponsor');
    };
    const handleAssetsAD = () => {
        navigation.navigate('AssetsAD');
    };
    const handleCapitalSqure = () => {
        navigation.navigate('CapitalSqure');
    };
    const handleFalconSqure = () => {
        navigation.navigate('FalconSqure');
    };
    const handleInsideADGM = () => {
        navigation.navigate('InsideADGM');
    };
    const handleFourSeason = () => {
        navigation.navigate('Fourseasons');
    };
    const handleFoodADFW = () => {
        navigation.navigate('FoodADFW');
    };
    const handleEntertainment = () => {
        navigation.navigate('Entertainment');
    };
    const handleAboutADGM = () => {
        navigation.navigate('AboutADGM');
    };
    const handleAgendaDetail = () => {
        navigation.navigate('AgendaDetail');
    };
    const handleADEconomic = () => {
        navigation.navigate('ADEconomy');
    };
    const handleFintech = () => {
        navigation.navigate('FintechAD');
    };
    const handleglobal = () => {
        navigation.navigate('GlobalFinencial');
    };
    const handleRace = () => {
        navigation.navigate('RaceSummit');
    };
    
    
    const { width, height } = useWindowDimensions()
    return (

        <ScrollView style={{ backgroundColor: '#F4F4F4', width: width, height: height }}>
            <SafeAreaView>
                <StatusBar
                    barStyle='dark-content'
                    backgroundColor="#FFF"
                />
                <View>
                    <View style={styles.container}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.innerContain}>
                                <View style={styles.innerContent}>
                                    <View style={{ width: width / 2 - 20 }}>
                                        <Image source={imgIcon} resizeMode='stretch' />
                                    </View>
                                    <View style={[styles.IconContent, { width: width / 2 - 12 }]}>
                                        <View style={{ width: width / 10 - 12 }}>
                                            <TouchableOpacity onPress={handleSocialTalk}>
                                                <Image source={vectorIcon} resizeMode='stretch' />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{ width: width / 10 - 16 }}>
                                            <TouchableOpacity onPress={handleLocation}>
                                                <Image source={assetsIcon} resizeMode='stretch' />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{ width: width / 10 - 16 }}>
                                            <TouchableOpacity onPress={handleFavorites}>
                                                <Image source={heartIcon} resizeMode='stretch' />
                                            </TouchableOpacity>

                                        </View>

                                        <View style={{ width: width / 10 - 16 }}>
                                            <TouchableOpacity onPress={handleNotification}>
                                                <Image source={notificationIcon} resizeMode='stretch' />
                                                <Image source={eliipseIcon} resizeMode='stretch' style={{ position: "absolute", left: 10 }} />
                                            </TouchableOpacity>

                                        </View>
                                        <View style={{ width: width / 10 - 10 }}>
                                            <TouchableOpacity onPress={handleProfile}>
                                                <View style={[styles.NameLogo]}>
                                                    <Text style={styles.txt}>MS</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: width }}>
                        <Text style={styles.borderLine}></Text>
                    </View>

                    <View style={[styles.container, { marginTop: 10, height: 250 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View >
                                <SliderBox
                                    images={imagSlider}
                                    style={{ width: width / 1 - 32, height: 211, borderRadius: 10 }}
                                    dotColor='#1B6AD5'
                                    inactiveDotColor='lightblue'
                                    dotStyle={{  borderRadius: 50, top: 30, marginHorizontal: -5 }}
                                    autoplay={true}
                                    circleLoop={true}
                                    firstItem={1}
                                    resizeMode='stretch'
                                />
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 10 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.content}>
                                <Text style={styles.TxtContent}>Upcoming <Text style={{ color: "#1B6AD5" }}>Sessions</Text> </Text>
                                <TouchableOpacity onPress={handleADagendaPage}>
                                    <View style={styles.ErrowContent}>
                                        <Text style={styles.viewTxt}>View All</Text>
                                        <Image source={linearrow} resizeMode='stretch' />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: 8, display: 'flex', justifyContent: "center", alignItems: "center" }}>
                        <View style={{ width: width / 1 - 32, }}>

                            <Swiper style={[styles.wrapper, { gap: -5 }]} dotStyle={{ top: 20, backgroundColor: 'lightblue' }} activeDotStyle={{ top: 20, width: 30 }}>

                                <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                                    <View style={[styles.cardAgenda, { width: width / 1 - 45 }]}>
                                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ height: 115, width: width / 1 - 36 - 38, flexDirection: "row" }}>
                                                <View style={[styles.cardTime, { display: "flex", justifyContent: "center", alignItems: "center" }]}>
                                                    <Text style={styles.time}>09:27 09.30</Text>
                                                </View>
                                                <View style={{ width: width / 1 - 180, height: 69, marginHorizontal: 20 }}>
                                                    <Text style={styles.txtinner}>KEYNOTE{'\n'}<Text style={{ color: "#002646", fontSize: 15, fontWeight: "600" }}>Asset Abu Dhabi 2023, with Mubadala & BTG Pactual...</Text></Text>
                                                    <View style={{ marginVertical: 6, flexDirection: "row" }}>
                                                        <Image source={locate} resizeMode='stretch' />
                                                        <Text style={styles.ADFWTxt}>ADFW Arena</Text>
                                                    </View>
                                                    <View>
                                                        <Image source={Ellipse1} resizeMode='stretch' />
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ width: width / 1 - 45, height: 2, opacity: 0.1, backgroundColor: "#002646", marginVertical: 14, }}></View>
                                        <View style={{ marginVertical: -9 }}>
                                            <TouchableOpacity onPress={handleAgendaDetail}>
                                                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                    <Text style={styles.txtView}>View details</Text>
                                                    <Image source={Icon} style={{ marginHorizontal: 10 }} resizeMode='stretch' />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>

                                <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                                    <View style={[styles.cardAgenda, { width: width / 1 - 45 }]}>
                                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ height: 115, width: width / 1 - 36 - 38, flexDirection: "row" }}>
                                                <View style={[styles.cardTime, { display: "flex", justifyContent: "center", alignItems: "center" }]}>
                                                    <Text style={styles.time}>09:27 09.30</Text>
                                                </View>
                                                <View style={{ width: width / 1 - 180, height: 69, marginHorizontal: 20 }}>
                                                    <Text style={styles.txtinner}>KEYNOTE{'\n'}<Text style={{ color: "#002646", fontSize: 15, fontWeight: "600" }}>Asset Abu Dhabi 2023, with Mubadala & BTG Pactual...</Text></Text>
                                                    <View style={{ marginVertical: 6, flexDirection: "row" }}>
                                                        <Image source={locate} resizeMode='stretch' />
                                                        <Text style={styles.ADFWTxt}>ADFW Arena</Text>
                                                    </View>
                                                    <View>
                                                        <Image source={Ellipse1} resizeMode='stretch' />
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ width: width / 1 - 45, height: 2, opacity: 0.1, backgroundColor: "#002646", marginVertical: 14 }}></View>
                                        <View style={{ marginVertical: -9 }}>
                                            <TouchableOpacity onPress={handleAgendaDetail}>
                                                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                    <Text style={styles.txtView}>View details</Text>
                                                    <Image source={Icon} style={{ marginHorizontal: 10 }} resizeMode='stretch' />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>

                                <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center", }}>
                                    <View style={[styles.cardAgenda, { width: width / 1 - 45 }]}>
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
                                        <View style={{ width: width / 1 - 45, height: 2, opacity: 0.1, backgroundColor: "#002646", marginVertical: 14 }}></View>
                                        <View style={{ marginVertical: -9 }}>
                                            <TouchableOpacity onPress={handleAgendaDetail}>
                                                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                    <Text style={styles.txtView}>View details</Text>
                                                    <Image source={Icon} style={{ marginHorizontal: 10 }} resizeMode='stretch' />
                                                </View>
                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                </View>

                            </Swiper>
                        </View>
                    </View>

                    <View style={styles.bgClr}>
                        <View style={[styles.container, { marginTop: 29 }]}>
                            <View style={{ width: width / 1 - 32 }}>
                                <View style={styles.content}>
                                    <Text style={styles.TxtContent}>Meet Our <Text style={{ color: "#1B6AD5" }}>Speakers</Text> </Text>
                                    <TouchableOpacity onPress={handleSpeaker}>
                                        <View style={styles.ErrowContent}>
                                            <Text style={styles.viewTxt}>View All</Text>
                                            <Image source={linearrow} resizeMode='stretch' />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={[styles.container, { marginTop: 24 }]}>
                            <View style={{ width: width / 1 - 32 }}>
                                <View style={styles.ImgContent}>
                                    <Swiper dotStyle={{ backgroundColor: 'lightblue', bottom: 40 }} inactiveDotColor='lightblue' activeDotStyle={{ width: 30, bottom: 40 }} >
                                        <View style={{ width: width / 3 - 15, flexDirection: "row", gap: 4 }}>
                                            <View>
                                                <Image source={shaikhImg} resizeMode='stretch' style={{ width: width / 3 - 15 }} />
                                                <Text style={[styles.ImgTxt]}>H.E. Ahmed Jasim Al Zaabi</Text>
                                            </View>
                                            <View>
                                                <Image source={mamimg} resizeMode='stretch' style={{ width: width / 3 - 15 }} />
                                                <Text style={[styles.ImgTxt, { letterSpacing: -0.5 }]}>H.H. Sheikha Shamma bint Sultan bint Khalifa Al Nayhan</Text>
                                            </View>
                                            <View>
                                                <Image source={princeImg} resizeMode='stretch' style={{ width: width / 3 - 15 }} />
                                                <Text style={[styles.ImgTxt]}>HRH Prince Khaled bin Alwaleed bin Talal</Text>
                                            </View>
                                        </View>

                                        <View style={{ width: width / 3 - 15, flexDirection: "row", gap: 4, }}>
                                            <View>
                                                <Image source={speakerImg4} resizeMode='stretch' style={{ width: width / 3 - 15, height: 115, borderRadius: 6 }} />
                                                <Text style={[styles.ImgTxt, { letterSpacing: -0.5 }]}>H.E. Abdulla Bin Touq Al Marri</Text>
                                            </View>
                                            <View>
                                                <Image source={speakerImg5} resizeMode='stretch' style={{ width: width / 3 - 15, height: 115, borderRadius: 6 }} />
                                                <Text style={[styles.ImgTxt, { letterSpacing: -0.5 }]}>Ray Dalio Founder, CIO Mentor, and Member</Text>
                                            </View>
                                            <View>
                                                <Image source={speakerImg6} resizeMode='stretch' style={{ width: width / 3 - 15, height: 115, borderRadius: 6 }} />
                                                <Text style={[styles.ImgTxt, { letterSpacing: -0.5 }]}>Jenny Lee Founding Partner GGV Capital</Text>
                                            </View>

                                        </View>

                                        <View style={{ width: width / 3 - 15, flexDirection: "row", gap: 4 }}>
                                            <View>
                                                <Image source={speakerImg7} resizeMode='stretch' style={{ width: width / 3 - 15, height: 115, borderRadius: 6 }} />
                                                <Text style={[styles.ImgTxt]}>Laura M Cha Chairman Hong Kong Exchanges</Text>
                                            </View>
                                            <View>
                                                <Image source={speakerImg8} resizeMode='stretch' style={{ width: width / 3 - 15, height: 115, borderRadius: 6 }} />
                                                <Text style={[styles.ImgTxt]}>Sir Christopher Hohn Founder, Managing Director</Text>
                                            </View>
                                            <View>
                                                <Image source={speakerImg9} resizeMode='stretch' style={{ width: width / 3 - 15, height: 115, borderRadius: 6 }} />
                                                <Text style={[styles.ImgTxt]}>Caspar Lee Co-founder Influencer.com</Text>
                                            </View>
                                        </View>


                                    </Swiper>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 20 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Text style={styles.eventTxt}>Major <Text style={{ color: "#1B6AD5" }}>Events</Text></Text>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 18 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                <TouchableOpacity onPress={handleADEconomic}>
                                    <Image style={{ width: width / 2.26 }} source={EconomyImg} resizeMode='stretch' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleAssetsAD}>
                                    <Image style={{ width: width / 2.26, }} source={assetimgs} resizeMode='stretch' />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
                                <TouchableOpacity onPress={handleFintech}>
                                    <Image style={{ width: width / 2.26 }} source={fintectImg} resizeMode='stretch' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleglobal}>
                                    <Image style={{ width: width / 2.26, }} source={finenceImg} resizeMode='stretch' />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
                                <TouchableOpacity onPress={handleRace}>
                                    <Image style={{ width: width / 2.26 }} source={raceImg} resizeMode='stretch' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 32 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Text style={styles.eventTxt}>All <Text style={{ color: "#1B6AD5" }}>Venues</Text></Text>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 18 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                <TouchableOpacity onPress={handleCapitalSqure}>
                                    <Image style={{ width: width / 2.26, height: 100 }} source={capitalSqure} resizeMode='stretch' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleFalconSqure}>
                                    <Image style={{ width: width / 2.26, height: 100 }} source={squre2} resizeMode='stretch' />
                                </TouchableOpacity>

                            </View>
                            <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
                                <TouchableOpacity onPress={handleInsideADGM}>
                                    <Image style={{ width: width / 2.26, height: 100 }} source={squre3} resizeMode='stretch' />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={handleFourSeason}>
                                    <Image style={{ width: width / 2.26, height: 100 }} source={squre4} resizeMode='stretch' />
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 40 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Text style={styles.eventTxt}>Food & <Text style={{ color: "#1B6AD5" }}>Entertainment</Text></Text>
                        </View>
                    </View>

                    <View style={styles.foodContain}>
                        <View style={[styles.foodCard, { width: width / 2.2 }]}>
                            <TouchableOpacity onPress={handleFoodADFW}>
                                <Image source={foodImg} style={{ width: width / 2.4, marginHorizontal: 7, marginVertical: 10 }} resizeMode='stretch' />
                                <Text style={[styles.foodCardtxt, { fontWeight: '600', marginVertical: -5 }]}>Food @ADFW</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.foodCard, { width: width / 2.2, marginHorizontal: 8 }]}>
                            <TouchableOpacity onPress={handleEntertainment}>
                                <Image source={foodImg} style={{ width: width / 2.4, marginHorizontal: 7, marginVertical: 10 }} resizeMode='stretch' />
                                <Text style={[styles.foodCardtxt, { fontWeight: '500', marginVertical: -5 }]}>Entertainment @ADFW</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.backClr}>
                        <View style={[styles.container, { marginTop: 29 }]}>
                            <View style={{ width: width / 1 - 32 }}>
                                <View style={styles.content}>
                                    <Text style={styles.TxtContent}>Meet Our <Text style={{ color: "#1B6AD5" }}> Sponsors</Text> </Text>
                                    <TouchableOpacity onPress={handleSponsor}>
                                        <View style={styles.ErrowContent}>
                                            <Text style={styles.viewTxt}>View All</Text>
                                            <Image source={linearrow} resizeMode='stretch' />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={[styles.container, { marginTop: 14 }]}>
                            <View style={{ width: width / 1 - 32 }}>
                                <SliderBox
                                    images={imagSlider2}
                                    style={{ height: 170, width: width / 1 - 32 }}
                                    dotColor='#1B6AD5'
                                    inactiveDotColor='lightblue'
                                    dotStyle={{  borderRadius: 50, top: 30, marginHorizontal: -5 }}
                                    autoplay={true}
                                    circleLoop={true}
                                    firstItem={1}
                                    resizeMode='stretch'
                                />
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 40 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Text style={styles.eventTxt}>About <Text style={{ color: "#1B6AD5" }}> ADGM</Text></Text>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 13 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.cardBanner}>
                                <TouchableOpacity onPress={handleAboutADGM}>
                                    <Image source={admwImg} resizeMode='stretch' style={{ width: width / 1 - 32 }} />
                                    <View style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                                        <View style={{ width: width / 1 - 54 }}>
                                            <Text style={styles.bannerTxt}>One of the world’s premier International Financial Centres in the capital of the UAE... <Text style={{ color: '#1B6AD5' }}>View details</Text></Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 40 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Text style={styles.eventTxt}>Explore <Text style={{ color: "#1B6AD5" }}> Abu Dhabi</Text></Text>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 13 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.cardBanner2}>
                                <Image source={abudhabiImg} resizeMode='stretch' style={{ width: width / 1 - 52 }} />
                                <View style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                                    <View style={{ width: width / 1 - 54 }}>
                                        <View style={styles.imgContentDown}>
                                            <Text style={styles.downloadTxt}>Download Guide</Text>
                                            <Image source={downloadImg} resizeMode='stretch' />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: 60 }}></View>

                </View>
            </SafeAreaView>
        </ScrollView>

    )
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",

    },
    innerContain: {
        height: 75,
        display: 'flex',
        justifyContent: "center"
    },
    innerContent: {
        flexDirection: 'row'
    },
    IconContent: {
        flexDirection: "row",
        gap: 14,
        display: 'flex',
        alignItems: "center"
    },
    NameLogo: {
        borderRadius: 35,
        backgroundColor: "#CAE1FF",
        borderColor: 'rgba(27, 106, 213, 0.50)',
        borderWidth: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 3.5,
        paddingBottom: 3.5,
        paddingLeft: 3.5,
        paddingRight: 3.5,
        height: 29,
        width: 29,
    },
    txt: {
        color: "#000",
        fontSize: 13,
        fontFamily: "Isidora Sans",
        fontWeight: '400'
    },
    borderLine: {
        height: 1,
        backgroundColor: "#002646",
        opacity: 0.15
    },
    content: {
        flexDirection: 'row',
        display: "flex",
        justifyContent: 'space-between',
    },
    TxtContent: {
        color: "#002646",
        fontFamily: 'Isidora Sans',
        fontSize: 18,
        fontWeight: '700'
    },
    viewTxt: {
        fontSize: 14,
        color: "#1B6AD5",
        fontFamily: 'Isidora Sans',
        fontWeight: '600',
        letterSpacing: 0.35
    },
    ErrowContent: {
        flexDirection: "row",
        gap: 8,
        display: "flex",
        alignItems: "center"
    },
    bgClr: {
        backgroundColor: 'rgba(27, 106, 213, 0.05)',
        marginTop: 22,
        height: 280,
    },
    ImgContent: {
        flexDirection: "row",
        display: "flex",
        justifyContent: 'space-between',
        gap: 10
    },
    ImgTxt: {
        color: "#002646",
        fontFamily: 'Isidora Sans',
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: 0.35,
        marginTop: 5,
        left: 5,
        height: 53
    },
    eventTxt: {
        color: '#002646',
        fontFamily: 'Isidora Sans',
        fontSize: 18,
        fontWeight: '700',
    },
    card: {
        height: 140,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        backgroundColor: "#FFF",
        elevation: 5,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,

    },
    foodCard: {
        marginTop: 17,
        height: 140,
        borderRadius: 10,
        backgroundColor: '#FFF',
        elevation: 5,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
    },
    foodCardtxt: {
        color: '#002646',
        fontSize: 13,
        letterSpacing: 0.35,
        marginHorizontal: 8
    },
    backClr: {
        backgroundColor: 'rgba(27, 106, 213, 0.05)',
        marginTop: 40,
        height: 280,
    },
    cardBanner: {
        height: 260,
        borderRadius: 10,
        backgroundColor: "#FFF",
        elevation: 5,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
    },
    bannerTxt: {
        color: "#2E2E2E",
        fontFamily: 'Isidora Sans',
        fontSize: 13,
        fontWeight: '500'
    },
    cardBanner2: {
        height: 240,
        borderRadius: 10,
        backgroundColor: "#FFF",
        elevation: 5,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 40.8,
    },
    downloadTxt: {
        color: "#002646",
        fontFamily: 'Isidora Sans',
        fontSize: 14,
        fontWeight: '600'
    },
    imgContentDown: {
        display: "flex",
        justifyContent: "center",
        flexDirection: 'row',
        marginTop: 10,
        gap: 10
    },
    headContain: {
        flexDirection: "row",
        gap: 40,
        borderColor: "#FFF",
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },
    foodContain: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 13
    },

    wrapper: {
        height: 220,
        marginHorizontal: 10
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
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
    cardTime: {
        width: 85,
        height: 85,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 10,
        backgroundColor: '#00A9CE'
    },
    txtinner: {
        color: "#1B6AD5",
        fontFamily: "#1B6AD5",
        fontSize: 12,
        fontWeight: '500',
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
    time: {
        fontSize: 20,
        fontWeight: '300',
        fontFamily: 'Isidora Sans',
        color: '#FFF',
    },
    cardPink: {
        width: 85,
        height: 102,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 10,
        backgroundColor: '#D23DC7'
    },
    txtinnerCard2: {
        color: "#1B6AD5",
        fontFamily: "Isidora Sans",
        fontSize: 12,
        fontWeight: '500',
        textTransform: 'uppercase'
    },

})

export default Home