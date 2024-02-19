import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, useWindowDimensions, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import bgImg from '../../images/EnterTainImg/Img1.png'
import Img2 from '../../images/EnterTainImg/Img2.png'
import Img3 from '../../images/EnterTainImg/Img3.png'
import Img4 from '../../images/EnterTainImg/Img4.png'
import Img5 from '../../images/EnterTainImg/Img5.png'
import Img6 from '../../images/EnterTainImg/Img6.png'
import Img7 from '../../images/EnterTainImg/Img7.png'
import Img8 from '../../images/EnterTainImg/Img8.png'
import Img9 from '../../images/EnterTainImg/Img9.png'
import Img10 from '../../images/EnterTainImg/Img10.png'
import Img11 from '../../images/EnterTainImg/Img11.png'
import Img12 from '../../images/EnterTainImg/Img12.png'
import clock from '../../images/EnterTainImg/clock.png'
import locate from '../../images/EnterTainImg/locate.png'
import ArrowLeft from '../../images/SpeakerImg/ArrowLeft.png'


const Entertainment = ({ navigation }) => {
    const handlePress = () => {
        navigation.navigate('Home')
    }
    const { width, height } = useWindowDimensions()
    return (
        <ScrollView style={{ backgroundColor: '#000', width: width, height: height }}>
            <SafeAreaView>
                <StatusBar
                    translucent backgroundColor='transparent'
                    barStyle='light-content'
                />
                <View>
                    <View>
                        <Image source={bgImg} resizeMode='stretch' style={{ width: width }} />
                        <View style={{ position: 'absolute' }}>
                            <View style={{ flexDirection: "row", width: width / 1 - 26, left: 13, marginTop: 19 }}>
                                <View>
                                    <TouchableOpacity onPress={handlePress}>
                                        <Image source={ArrowLeft} style={{ height: height / 34 - 2, marginVertical: height / 29 }} resizeMode='stretch' />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginHorizontal: 25, width: width / 2 + 60, marginVertical: height / 29 }}>
                                    <Text style={[styles.containTxt, { width: width / 3 + 40 }]}>Entertainment @ADFW</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 32 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Text style={styles.txtFluid}>November 27 - <Text style={{ color: '#1B6AD5' }}>Day 1</Text></Text>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 31 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.boxContainer}>
                                <View style={styles.boxBorder}>
                                    <Image source={Img2} resizeMode='stretch' />
                                    <Image source={Img3} resizeMode='stretch' style={{ position: "absolute", top: 7, left: 10 }} />
                                </View>
                                <View>
                                    <View style={styles.containTxtDJ}>
                                        <Text style={styles.DJtxt}>DJ Natalie</Text>
                                        <View style={{ width: width / 2 + 20 }}>
                                            <Text style={styles.DJPlainTxtt}>Award-winning DJ, setting the rhythm for a vibrant nightlife, one beat at a time.</Text>
                                        </View>

                                        <View style={[styles.DJContainer, { width: width / 2 + 20 }]}>
                                            <View style={[styles.DJbtn, { width: width / 5 + 25 }]}>
                                                <View style={styles.mainContainer}>
                                                    <Image source={clock} resizeMode='stretch' />
                                                    <View style={{ width: width / 5 - 15 }}>
                                                        <Text style={styles.btnTxt}>10:30AM Onwards</Text>
                                                    </View>
                                                </View>
                                            </View>

                                            <View style={[styles.DJbtn, { width: width / 5 + 25 }]}>
                                                <View style={styles.mainContainerFalcon}>
                                                    <Image source={locate} resizeMode='stretch' />
                                                    <View style={{ width: width / 5 - 15 }}>
                                                        <Text style={styles.btnTxt}>Falcon Square</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 20.2 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.boxContainer}>
                                <View style={styles.boxBorder}>
                                    <Image source={Img2} resizeMode='stretch' />
                                    <Image source={Img4} resizeMode='stretch' style={{ position: "absolute", top: 7, left: 10 }} />
                                </View>
                                <View>
                                    <View style={styles.containTxtDJ}>
                                        <Text style={styles.DJtxt}>Abri Duo</Text>
                                        <View style={{ width: width / 2 + 20 }}>
                                            <Text style={styles.DJPlainTxtt}>UAE-based singer, songwriter and musician with a track record of international collaborations.</Text>
                                        </View>

                                        <View style={[styles.DJContainer, { width: width / 2 + 20 }]}>
                                            <View style={[styles.DJbtn, { width: width / 5 + 25 }]}>
                                                <View style={styles.mainContainer}>
                                                    <Image source={clock} resizeMode='stretch' />
                                                    <View style={{ width: width / 5 - 15 }}>
                                                        <Text style={styles.btnTxt}>11:30AM Onwards</Text>
                                                    </View>
                                                </View>
                                            </View>

                                            <View style={[styles.DJbtn, { width: width / 5 + 25 }]}>
                                                <View style={styles.mainContainerFalcon}>
                                                    <Image source={locate} resizeMode='stretch' style={{ top: 5 }} />

                                                    <View style={styles.btnSubTxt}>
                                                        <Text style={styles.btnTxt}>Falcon Square</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: width, marginTop: 29.6 }}>
                        <Text style={styles.borderLine}></Text>
                    </View>

                    <View style={[styles.container, { marginTop: 30 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Text style={styles.txtFluid}>November 28 - <Text style={{ color: '#1B6AD5' }}>Day 2</Text></Text>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 31 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.boxContainer}>
                                <View style={styles.boxBorder}>
                                    <Image source={Img2} resizeMode='stretch' />
                                    <Image source={Img5} resizeMode='stretch' style={{ position: "absolute", top: 7, left: 10 }} />
                                </View>
                                <View>
                                    <View style={styles.containTxtDJ}>
                                        <Text style={styles.DJtxt}>DJ Liutik</Text>
                                        <View style={{ width: width / 2 + 20 }}>
                                            <Text style={styles.DJPlainTxtt}>Moldovan DJ who plays a vibrant and eclectic mix of hip-hop, R&B, soul and funk music.</Text>
                                        </View>

                                        <View style={[styles.DJContainer, { width: width / 2 + 20 }]}>
                                            <View style={[styles.DJbtn, { width: width / 5 + 27 }]}>
                                                <View style={[styles.mainContainerFalcon, { top: 5 }]}>
                                                    <Image source={clock} resizeMode='stretch' />
                                                    <View style={{}}>
                                                        <Text style={styles.btnTxt}>12PM Onwards</Text>
                                                    </View>
                                                </View>
                                            </View>

                                            <View style={[styles.DJbtn, { width: width / 5 + 25 }]}>
                                                <View style={styles.mainContainerFalcon}>
                                                    <Image source={locate} resizeMode='stretch' />
                                                    <View style={{ width: width / 5 - 15 }}>
                                                        <Text style={styles.btnTxt}>Capital Square</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 20.2 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.boxContainer}>
                                <View style={styles.boxBorder}>
                                    <Image source={Img2} resizeMode='stretch' />
                                    <Image source={Img6} resizeMode='stretch' style={{ position: "absolute", top: 7, left: 10 }} />
                                </View>
                                <View>
                                    <View style={styles.containTxtDJ}>
                                        <Text style={styles.DJtxt}>Sandra Sahi</Text>
                                        <View style={{ width: width / 2 + 20 }}>
                                            <Text style={styles.DJPlainTxtt}>Dubai-based singer-songwriter creating ripples in the oriental pop music industry.</Text>
                                        </View>

                                        <View style={[styles.DJContainer, { width: width / 2 + 20 }]}>
                                            <View style={[styles.DJbtn, { width: width / 5 + 27 }]}>
                                                <View style={[styles.mainContainerFalcon, { top: 5 }]}>
                                                    <Image source={clock} resizeMode='stretch' />
                                                    <View style={{}}>
                                                        <Text style={styles.btnTxt}>5PM Onwards</Text>
                                                    </View>
                                                </View>
                                            </View>

                                            <View style={[styles.DJbtn, { width: width / 5 + 25 }]}>
                                                <View style={styles.mainContainerFalcon}>
                                                    <Image source={locate} resizeMode='stretch' />
                                                    <View style={{ width: width / 5 - 15 }}>
                                                        <Text style={styles.btnTxt}>Capital Square</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 20.2 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.boxContainer}>
                                <View style={styles.boxBorder}>
                                    <Image source={Img2} resizeMode='stretch' />
                                    <Image source={Img7} resizeMode='stretch' style={{ position: "absolute", top: 7, left: 10 }} />
                                </View>
                                <View>
                                    <View style={styles.containTxtDJ}>
                                        <Text style={[styles.DJtxt, { width: width / 2 }]}>DJ Jack Sleiman</Text>
                                        <View style={{ width: width / 2 + 20 }}>
                                            <Text style={styles.DJPlainTxtt}>Sensational DJ & music producer well-known for the global success of his remixes and tracks.</Text>
                                        </View>

                                        <View style={[styles.DJContainer, { width: width / 2 + 20 }]}>
                                            <View style={[styles.DJbtn, { width: width / 5 + 27 }]}>
                                                <View style={[styles.mainContainerFalcon, { top: 5 }]}>
                                                    <Image source={clock} resizeMode='stretch' />
                                                    <View style={{}}>
                                                        <Text style={styles.btnTxt}>7PM Onwards</Text>
                                                    </View>
                                                </View>
                                            </View>

                                            <View style={[styles.DJbtn, { width: width / 5 + 25 }]}>
                                                <View style={styles.mainContainerFalcon}>
                                                    <Image source={locate} resizeMode='stretch' />
                                                    <View style={{ width: width / 5 - 15 }}>
                                                        <Text style={styles.btnTxt}>Capital Square</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 20.2 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.boxContainer}>
                                <View style={styles.boxBorder}>
                                    <Image source={Img2} resizeMode='stretch' />
                                    <Image source={Img8} resizeMode='stretch' style={{ position: "absolute", top: 7, left: 10 }} />
                                </View>
                                <View>
                                    <View style={styles.containTxtDJ}>
                                        <Text style={[styles.DJtxt, { width: width / 2 }]}>Noel Kharman</Text>
                                        <View style={{ width: width / 2 + 20 }}>
                                            <Text style={styles.DJPlainTxtt}>Palestinian singer-songwriter connecting Middle Eastern and Western music cultures.</Text>
                                        </View>

                                        <View style={[styles.DJContainer, { width: width / 2 + 20 }]}>
                                            <View style={[styles.DJbtn, { width: width / 5 + 27 }]}>
                                                <View style={[styles.mainContainerFalcon, { top: 5 }]}>
                                                    <Image source={clock} resizeMode='stretch' />
                                                    <View style={{}}>
                                                        <Text style={styles.btnTxt}>8PM Onwards</Text>
                                                    </View>
                                                </View>
                                            </View>

                                            <View style={[styles.DJbtn, { width: width / 5 + 25 }]}>
                                                <View style={styles.mainContainerFalcon}>
                                                    <Image source={locate} resizeMode='stretch' />
                                                    <View style={{ width: width / 5 - 15 }}>
                                                        <Text style={styles.btnTxt}>Capital Square</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: width, marginTop: 29.6 }}>
                        <Text style={styles.borderLine}></Text>
                    </View>

                    <View style={[styles.container, { marginTop: 30 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Text style={styles.txtFluid}>November 29 - <Text style={{ color: '#1B6AD5' }}>Day 3</Text></Text>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 31 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.boxContainer}>
                                <View style={styles.boxBorder}>
                                    <Image source={Img2} resizeMode='stretch' />
                                    <Image source={Img9} resizeMode='stretch' style={{ position: "absolute", top: 7, left: 10 }} />
                                </View>
                                <View>
                                    <View style={styles.containTxtDJ}>
                                        <Text style={styles.DJtxt}>DJ Kaboo</Text>
                                        <View style={{ width: width / 2 + 20 }}>
                                            <Text style={styles.DJPlainTxtt}>Versatile DJ, also known as “Arab Trap KING”, popular for his culture-infused beats.</Text>
                                        </View>

                                        <View style={[styles.DJContainer, { width: width / 2 + 20 }]}>
                                            <View style={[styles.DJbtn, { width: width / 5 + 27 }]}>
                                                <View style={[styles.mainContainerFalcon, { top: 5 }]}>
                                                    <Image source={clock} resizeMode='stretch' />
                                                    <View style={{}}>
                                                        <Text style={styles.btnTxt}>12PM Onwards</Text>
                                                    </View>
                                                </View>
                                            </View>

                                            <View style={[styles.DJbtn, { width: width / 5 + 25 }]}>
                                                <View style={styles.mainContainerFalcon}>
                                                    <Image source={locate} resizeMode='stretch' />
                                                    <View style={{ width: width / 5 - 15 }}>
                                                        <Text style={styles.btnTxt}>Capital Square</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 20.2 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.boxContainer}>
                                <View style={styles.boxBorder}>
                                    <Image source={Img2} resizeMode='stretch' />
                                    <Image source={Img10} resizeMode='stretch' style={{ position: "absolute", top: 7, left: 10 }} />
                                </View>
                                <View>
                                    <View style={styles.containTxtDJ}>
                                        <Text style={styles.DJtxt}>Gohary</Text>
                                        <View style={{ width: width / 2 + 20 }}>
                                            <Text style={styles.DJPlainTxtt}>A lyric-focused band combining different elements of music to create groovy songs.</Text>
                                        </View>

                                        <View style={[styles.DJContainer, { width: width / 2 + 20 }]}>
                                            <View style={[styles.DJbtn, { width: width / 5 + 27 }]}>
                                                <View style={[styles.mainContainerFalcon, { top: 5 }]}>
                                                    <Image source={clock} resizeMode='stretch' />
                                                    <View style={{}}>
                                                        <Text style={styles.btnTxt}>1PM Onwards</Text>
                                                    </View>
                                                </View>
                                            </View>

                                            <View style={[styles.DJbtn, { width: width / 5 + 25 }]}>
                                                <View style={styles.mainContainerFalcon}>
                                                    <Image source={locate} resizeMode='stretch' />
                                                    <View style={{ width: width / 5 - 15 }}>
                                                        <Text style={styles.btnTxt}>Capital Square</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 20.2 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.boxContainer}>
                                <View style={styles.boxBorder}>
                                    <Image source={Img2} resizeMode='stretch' />
                                    <Image source={Img11} resizeMode='stretch' style={{ position: "absolute", top: 7, left: 10 }} />
                                </View>
                                <View>
                                    <View style={styles.containTxtDJ}>
                                        <Text style={styles.DJtxt}>Maro Hereira</Text>
                                        <View style={{ width: width / 2 + 20 }}>
                                            <Text style={styles.DJPlainTxtt}>Sensational DJ & music producer well-known for the global success of his remixes and tracks.</Text>
                                        </View>

                                        <View style={[styles.DJContainer, { width: width / 2 + 20 }]}>
                                            <View style={[styles.DJbtn, { width: width / 5 + 27 }]}>
                                                <View style={[styles.mainContainerFalcon, { top: 5 }]}>
                                                    <Image source={clock} resizeMode='stretch' />
                                                    <View style={{}}>
                                                        <Text style={styles.btnTxt}>PM Onwards</Text>
                                                    </View>
                                                </View>
                                            </View>

                                            <View style={[styles.DJbtn, { width: width / 5 + 25 }]}>
                                                <View style={styles.mainContainerFalcon}>
                                                    <Image source={locate} resizeMode='stretch' />
                                                    <View style={{ width: width / 5 - 15 }}>
                                                        <Text style={styles.btnTxt}>Capital Square</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 20.2 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.boxContainer}>
                                <View style={styles.boxBorder}>
                                    <Image source={Img2} resizeMode='stretch' />
                                    <Image source={Img12} resizeMode='stretch' style={{ position: "absolute", top: 7, left: 10 }} />
                                </View>
                                <View>
                                    <View style={styles.containTxtDJ}>
                                        <Text style={styles.DJtxt}>DJ Rodge</Text>
                                        <View style={{ width: width / 2 + 20 }}>
                                            <Text style={styles.DJPlainTxtt}>Middle East’s favourite DJ and a renowned name among clubbing aficionados.</Text>
                                        </View>

                                        <View style={[styles.DJContainer, { width: width / 2 + 20 }]}>
                                            <View style={[styles.DJbtn, { width: width / 5 + 27 }]}>
                                                <View style={[styles.mainContainer]}>
                                                    <Image source={clock} resizeMode='stretch' />
                                                    <View style={{ width: width / 5 - 15 }}>
                                                        <Text style={styles.btnTxt}>7:30PM Onwards</Text>
                                                    </View>
                                                </View>
                                            </View>

                                            <View style={[styles.DJbtn, { width: width / 5 + 25 }]}>
                                                <View style={styles.mainContainerFalcon}>
                                                    <Image source={locate} resizeMode='stretch' />
                                                    <View style={{ width: width / 5 - 15 }}>
                                                        <Text style={styles.btnTxt}>Capital Square</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: 52 }}></View>

                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containTxt: {
        color: "#FFF",
        display: "flex",
        fontFamily: 'Isidora Sans',
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 24,
        letterSpacing: 0.35
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center'
    },
    txtFluid: {
        color: '#FFF',
        fontFamily: 'Isidora Sans',
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 0.35
    },
    boxContainer: {
        flexDirection: "row",
        gap: 34
    },
    boxBorder: {
        width: 96,
        height: 153,
        elevation: 4,
        shadowColor: '#D84D4D',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        borderLeftColor: '#D84D4D',
        borderRightColor: '#D84D4D',
        borderTopColor: '#D84D4D',
        borderBottomColor: '#D84D4D',
        borderWidth: 1,
        paddingTop: 4,
        paddingLeft: 4,
    },
    DJtxt: {
        color: '#FFF',
        fontFamily: 'Isidora Sans',
        fontSize: 18,
        fontWeight: "700",

    },
    containTxtDJ: {
        width: 121,
        marginTop: 16.8,
    },
    DJPlainTxtt: {
        color: '#FFF',
        fontFamily: 'Isidora Sans',
        fontSize: 14,
        fontWeight: "400",
    },
    DJbtn: {
        height: 30,
        paddingLeft: 4,
        borderRadius: 5,
        borderLeftColor: '#D84D4D',
        borderRightColor: '#D84D4D',
        borderTopColor: '#D84D4D',
        borderBottomColor: '#D84D4D',
        borderWidth: 1,
    },
    btnTxt: {
        color: "#FFF",
        fontFamily: 'Isidora Sans',
        fontSize: 11,
        fontWeight: '500',
        display: 'flex'
    },
    mainContainer: {
        flexDirection: 'row',
        gap: 10,
        display: "flex",
        alignItems: "center"
    },
    mainContainerFalcon: {
        flexDirection: 'row',
        gap: 4,
        display: "flex",
        alignItems: "center"
    },
    DJContainer: {
        flexDirection: "row",
        gap: 10,
        marginTop: 7
    },
    btnSubTxt: {
        top: 5
    },
    borderLine: {
        height: 1,
        backgroundColor: "#2E2E2E",
        elevation: 4,
        shadowColor: '#1B6AD5',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
    }
})

export default Entertainment