import { View, Text, SafeAreaView, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ArrowLeft from '../../images/SpeakerImg/ArrowLeft.png'
import { Image } from 'react-native'
import DropDown from '../../images/SpeakerImg/dropDown.png'
import search from '../../images/SpeakerImg/serach.png'
import { TextInput } from 'react-native'
import assets from '../../images/AgendaImg/assets.png'
import locate from '../../images/AgendaImg/locate.png'
import Ellipse1 from '../../images/AgendaImg/Ellipse1.png'
import Ellipse2 from '../../images/AgendaImg/Ellipse2.png'
import Ellipse3 from '../../images/AgendaImg/Ellipse3.png'
import Ellipse4 from '../../images/AgendaImg/Ellipse4.png'
import Ellipse5 from '../../images/AgendaImg/Ellipse5.png'
import Ellipse6 from '../../images/AgendaImg/Ellipse6.png'
import Ellipse7 from '../../images/AgendaImg/Ellipse7.png'
import Ellipse8 from '../../images/AgendaImg/Ellipse8.png'
import Ellipse9 from '../../images/AgendaImg/Ellipse9.png'
import Ellipse10 from '../../images/AgendaImg/Ellipse10.png'
import Icon from '../../images/AgendaImg/Icon.png'
import global from '../../images/AgendaImg/global.png'
import huawei from '../../images/AgendaImg/huawei.png'
import DropDownPicker from 'react-native-dropdown-picker'
import { ScrollView } from 'react-native-virtualized-view'
import { StatusBar } from 'react-native'






const Agenda = ({ navigation }) => {
    const { width, height } = useWindowDimensions()
    const [open1, setOpen1] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [value1, setValue1] = useState(null);
    const [items1, setItems1] = useState([
        { label: 'All Events', value: 'All Events', },
        { label: 'Asset Abu Dhabi', value: 'Asset Abu Dhabi' },
        { label: 'Fintech Abu Dhabi', value: 'Fintech Abu Dhabi' },
        { label: 'Regulator Summit', value: 'Regulator Summit' },
        { label: 'Global Economic Forum', value: 'Global Economic Forum' },
        { label: 'Capital Square', value: 'Capital Square' },
    ]);
    const [items, setItems] = useState([
        { label: 'All Days', value: 'All Days', },
        { label: '27 Nov', value: '27 Nov' },
        { label: '28 Nov', value: '28 Nov' },
        { label: '29 Nov', value: '29 Nov' },
        { label: '30 Nov', value: '30 Nov' },
    ]);
    const handlepress = () => {
        navigation.navigate('Home')
    }
    const handlesubmit = () => {
        navigation.navigate('ADagenda');
    }
    const handleagendaDetail = () => {
        navigation.navigate('AgendaDetail');
    }

    
    return (
        <ScrollView style={{ backgroundColor: '#F4F4F4' }}>
            <SafeAreaView>
            <StatusBar
                barStyle='light-content'
                backgroundColor="#002646"
            />
                <View style={[styles.SponsorHead, { width: width, height: height / 10 + 1 }]}>
                    <TouchableOpacity onPress={handlepress}>
                        <Image source={ArrowLeft} style={{ height: height / 34 - 2, marginVertical: height / 29 }} resizeMode='stretch' />
                    </TouchableOpacity>
                    <Text style={[styles.txtSponsor, { marginHorizontal: 52, marginVertical: height / 29 - 5, fontWeight: '700' }]}> Event <Text style={{ color: '#1B6AD5' }}> Agenda </Text></Text>
                </View>

                <View style={{ flexDirection: 'row', gap: -25 }}>
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
                                    <Text style={styles.txt1}>Select day</Text>
                                    <Text style={styles.txt2}>All Days</Text>
                                </View>
                            }
                            style={[styles.dropContain, { width: width / 2 - 20, }]}
                        />
                    </View>
                    <View
                        style={styles.container}>
                        <DropDownPicker
                            open={open1}
                            value={value1}
                            items={items1}
                            setOpen={setOpen1}
                            setValue={setValue1}
                            setItems={setItems1}
                            placeholder={
                                <View>
                                    <Text style={styles.txt1}>Select event</Text>
                                    <Text style={styles.txt2}>All Events</Text>
                                </View>
                            }
                            style={[styles.dropContain, { width: width / 2 - 20 }]}
                        />
                    </View>

                </View>

                <View>
                    <TextInput style={[styles.field, { width: (width > 500) ? 400 : '92%', marginHorizontal: width / 16 - 9, position: 'relative' }]} placeholder='Search session, speaker, etc.' placeholderTextColor="rgba(129, 129, 129, 0.50)" />
                    <Image style={{ position: 'absolute', marginHorizontal: 35, marginVertical: 12 }} source={search} />
                </View>

                <View>
                    <Text style={[styles.txt, { marginVertical: height / 26 - 4, marginHorizontal: width / 16 - 6 }]}>November 27 - <Text style={{ color: '#1B6AD5' }}>Day 1</Text></Text>
                </View>

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: width / 1 - 32 }} source={assets} resizeMode='stretch' />
                </View>

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <View style={[styles.cardAgenda, { width: width / 1 - 32 }]}>
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

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center", marginVertical: -10 }}>
                    <View style={[styles.cardAgenda, { width: width / 1 - 32 }]}>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: 115, width: width / 1 - 36 - 38, flexDirection: "row" }}>
                                <View style={[styles.cardTime, { display: "flex", justifyContent: "center", alignItems: "center" }]}>
                                    <Text style={styles.time}>09:30 09.45</Text>
                                </View>
                                <View style={{ width: width / 1 - 180, height: 69, marginHorizontal: 20 }}>
                                    <Text style={styles.txtinner}>KEYNOTE{'\n'}<Text style={{ color: "#002646", fontSize: 15, fontWeight: "600" }}>10 Rules of Successful Nations...</Text></Text>
                                    <View style={{ marginVertical: 6, flexDirection: "row" }}>
                                        <Image source={locate} resizeMode='stretch' />
                                        <Text style={styles.ADFWTxt}>ADFW Arena</Text>
                                    </View>
                                    <View>
                                        <Image source={Ellipse2} resizeMode='stretch' />
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

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <View style={[styles.cardAgenda, { width: width / 1 - 32 }]}>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: 115, width: width / 1 - 36 - 38, flexDirection: "row" }}>
                                <View style={[styles.cardTime, { display: "flex", justifyContent: "center", alignItems: "center" }]}>
                                    <Text style={styles.time}>09:27 09.30</Text>
                                </View>
                                <View style={{ width: width / 1 - 180, height: 69, marginHorizontal: 20 }}>
                                    <Text style={styles.txtinner}>PRESENTATION{'\n'}<Text style={{ color: "#002646", fontSize: 15, fontWeight: "600" }}>New Rules & Old Rules: The Principles of...</Text></Text>
                                    <View style={{ marginVertical: 6, flexDirection: "row" }}>
                                        <Image source={locate} resizeMode='stretch' />
                                        <Text style={styles.ADFWTxt}>ADFW Arena</Text>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <Image source={Ellipse4} resizeMode='stretch' />
                                        <Image source={Ellipse3} style={{ right: 9 }} resizeMode='stretch' />
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

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center", marginVertical: -10 }}>
                    <View style={[styles.cardAgenda, { width: width / 1 - 32 }]}>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: 115, width: width / 1 - 36 - 38, flexDirection: "row" }}>
                                <View style={[styles.cardTime, { display: "flex", justifyContent: "center", alignItems: "center" }]}>
                                    <Text style={styles.time}>09:30 09.45</Text>
                                </View>
                                <View style={{ width: width / 1 - 180, height: 69, marginHorizontal: 20, marginVertical: 12 }}>
                                    <Text style={styles.txtinner}>PANEL{'\n'}<Text style={{ color: "#002646", fontSize: 15, fontWeight: "600" }}>A Brief Guide To Abu Dhabi Investment...</Text></Text>
                                    <View style={{ marginVertical: 6, flexDirection: "row" }}>
                                        <Image source={locate} resizeMode='stretch' />
                                        <Text style={styles.ADFWTxt}>ADFW Arena</Text>
                                        <Image source={Ellipse5} resizeMode='stretch' />
                                        <Image source={Ellipse6} style={{ right: 8 }} resizeMode='stretch' />
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
                    <View style={[styles.cardFlip, { width: width / 1 - 32, flexDirection: 'row' }]}>
                        <View style={[styles.innerstyle, { display: 'flex', justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style={styles.timer}>11.00 12.00</Text>
                        </View>
                        <View style={[styles.txtCardInner, { width: width / 1 - 148, marginHorizontal: 10, marginVertical: 8 }]}>
                            <Text style={styles.lunchTxt}>Lunch & Networking{'\n'}<Text style={{ fontSize: 14, fontWeight: 'normal', textTransform: 'lowercase' }}>The Asset Abu Dhabi global investors forum</Text></Text>
                        </View>
                    </View>
                </View>

                <View style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: width / 1 - 32, marginVertical: 30 }} source={global} resizeMode='stretch' />
                </View>

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center", marginVertical: -30 }}>
                    <View style={[styles.cardAgenda, { width: width / 1 - 32 }]}>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: 115, width: width / 1 - 36 - 38, flexDirection: "row" }}>
                                <View style={[styles.cardPrimary, { display: "flex", justifyContent: "center", alignItems: "center" }]}>
                                    <Text style={styles.time}>09:00 09.30</Text>
                                </View>
                                <View style={{ width: width / 1 - 180, height: 69, marginHorizontal: 20, marginVertical: 5 }}>
                                    <Text style={styles.txtinnerCard2}>Session{'\n'}<Text style={{ color: "#2E2E2E", fontSize: 14, fontWeight: '600', textTransform: 'none' }}>Presentation{'\n'}</Text><Text style={{ color: '#2E2E2E', textTransform: 'none', fontSize: 14 }}>Lorem Ipsum is simply dummy text of the printing...</Text></Text>
                                    <View style={{ marginVertical: 10, flexDirection: "row", }}>
                                        <Image source={locate} resizeMode='stretch' />
                                        <Text style={styles.ADFWTxt}>Auditorium</Text>
                                        <Image source={Ellipse5} resizeMode='stretch' />
                                        <Image source={Ellipse6} style={{ right: 8 }} resizeMode='stretch' />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: width / 1 - 32, height: 2, opacity: 0.1, backgroundColor: "#002646", marginVertical: 14 }}></View>
                        <View style={{ marginVertical: -9 }}>
                            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                <Text style={styles.txtView}>View details</Text>
                                <Image source={Icon} style={{ marginHorizontal: 10 }} resizeMode='stretch' />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center", marginVertical: 20 }}>
                    <View style={[styles.cardAgenda, { width: width / 1 - 32 }]}>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: 115, width: width / 1 - 36 - 38, flexDirection: "row" }}>
                                <View style={[styles.cardPrimary, { display: "flex", justifyContent: "center", alignItems: "center" }]}>
                                    <Text style={styles.time}>09:30 10.30</Text>
                                </View>
                                <View style={{ width: width / 1 - 180, height: 69, marginHorizontal: 20, marginVertical: 5 }}>
                                    <Text style={styles.txtinnerCard2}>Session{'\n'}<Text style={{ color: "#2E2E2E", fontSize: 14, fontWeight: '600', textTransform: 'none' }}>Panel{'\n'}</Text><Text style={{ color: '#2E2E2E', textTransform: 'none', fontSize: 14 }}>Lorem Ipsum is simply dummy text of the printing...</Text></Text>
                                    <View style={{ marginVertical: 10, flexDirection: "row", }}>
                                        <Image source={locate} resizeMode='stretch' />
                                        <Text style={styles.ADFWTxt}>Auditorium</Text>
                                        <Image source={Ellipse5} resizeMode='stretch' />
                                        <Image source={Ellipse6} style={{ right: 8 }} resizeMode='stretch' />
                                        <Image source={Ellipse4} style={{ right: 12 }} resizeMode='stretch' />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: width / 1 - 32, height: 2, opacity: 0.1, backgroundColor: "#002646", marginVertical: 14 }}></View>
                        <View style={{ marginVertical: -9 }}>
                            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                <Text style={styles.txtView}>View details</Text>
                                <Image source={Icon} style={{ marginHorizontal: 10 }} resizeMode='stretch' />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={[styles.borderLine, { width: width / 1 }]}></View>

                <View>
                    <Text style={[styles.txt, { marginVertical: height / 35 - 13, marginHorizontal: width / 16 - 6 }]}>November 28 - <Text style={{ color: '#1B6AD5' }}>Day 2</Text></Text>
                </View>

                <View style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handlesubmit}>
                        <Image style={{ width: width / 1 - 32, marginVertical: 20 }} source={huawei} resizeMode='stretch' />
                    </TouchableOpacity>
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
                            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                <Text style={styles.txtView}>View details</Text>
                                <Image source={Icon} style={{ marginHorizontal: 10 }} resizeMode='stretch' />
                            </View>
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
                            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                <Text style={styles.txtView}>View details</Text>
                                <Image source={Icon} style={{ marginHorizontal: 10 }} resizeMode='stretch' />
                            </View>
                        </View>
                    </View>
                </View>

                {/* <View style={[styles.container, { marginTop: 43 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.tabs}>
                                <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <View style={{ width: width / 1 - 64, borderColor: 'white' }}>
                                        <View style={{ flexDirection: 'row', display: "flex", justifyContent: "space-between", alignItems:"center" }}>
                                            <View >
                                                <TouchableOpacity onPress={handleHomePage}>
                                                    <Image source={homeIcon} resizeMode='stretch' />
                                                    <Text style={styles.txtHome}>Home</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View >
                                                <TouchableOpacity onPress={handleAgendaPage}>
                                                    <Image source={bagIconImg} resizeMode='stretch' />
                                                    <Text style={styles.tabtTxt}>Agenda</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ bottom: 16 }}>
                                                <TouchableOpacity onPress={handleTicketPage}>
                                                    <View style={styles.circle}>
                                                        <Image source={ticketIcon} resizeMode='stretch' />
                                                    </View>
                                                    <Text style={[styles.tabtTxt, { left: 10 }]}>Ticket</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View >
                                                <TouchableOpacity onPress={handleChatPage}>
                                                    <Image source={chatImg} resizeMode='stretch' />
                                                    <Image source={eliipseIcon} resizeMode='stretch' style={{ position: 'absolute', left: 10 }} />
                                                    <Text style={styles.tabtTxt}>Chat</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View>
                                                <TouchableOpacity onPress={handleProfilePage}>
                                                    <Image source={profileImg} resizeMode='stretch' />
                                                    <Text style={styles.tabtTxt}>Profile</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View> */}

                <View style={{marginTop:40}}></View>
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
        letterSpacing: 0.352,
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
        letterSpacing: 0.352,
    },
    AllEvent: {
        color: '#2E2E2E',
        fontFamily: 'Isidora Sans',
        fontSize: 14,
        letterSpacing: 0.352,
    },
    field: {
        borderRadius: 5,
        borderLeftColor: '#818181',
        borderRightColor: '#818181',
        borderTopColor: '#818181',
        borderBottomColor: '#818181',
        borderWidth: 1,
        paddingRight: 20,
        paddingLeft: 45,
        height: 47,
        width: 361,
        fontSize: 14
    },
    txt: {
        color: '#002646',
        fontFamily: 'Isidora Sans',
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: 0.352,
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
    cardPrimary: {
        width: 85,
        height: 85,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 10,
        backgroundColor: '#1B6AD5'
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
    txtinnerCard2: {
        color: "#1B6AD5",
        fontFamily: "Isidora Sans",
        fontSize: 12,
        fontWeight: '500',
        textTransform: 'uppercase'
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
    cardFlip: {
        height: 110,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 15,
        backgroundColor: '#00A9CE',
        elevation: 5,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
    },
    innerstyle: {
        width: 85,
        height: 85,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 10,
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderTopColor: '#FFF',
        borderBottomColor: '#FFF',
        borderWidth: 1,
    },
    timer: {
        fontSize: 20,
        color: '#FFF',
        fontFamily: 'Isidora Sans',
        fontWeight: '300',
    },
    txtCardInner: {
        height: 69,
    },
    lunchTxt: {
        color: "#FFF",
        fontFamily: "Isidora Sans",
        fontSize: 15,
        fontWeight: '600',
        textTransform: 'uppercase',
        marginVertical: 6
    },
    borderLine: {
        height: 1,
        opacity: 0.3,
        backgroundColor: "#002646",
        marginVertical: 30
    },
    
    container: {
        // flex: 2,
        marginVertical: 20,
        paddingHorizontal: 16,
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
    dropContain: {
        borderColor: '#818181',
        borderRadius: 5,
        height: 40,
        backgroundColor: '#F4F4F4'
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

export default Agenda