import { View, Text, ScrollView, SafeAreaView, useWindowDimensions, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import BGImg from '../../images/AboutADGMImg/BGImg.png'
import ArrowLeft from '../../images/SpeakerImg/ArrowLeft.png'
import Img1 from '../../images/AboutADGMImg/Img1.png'
import Img2 from '../../images/AboutADGMImg/Img2.png'
import Img3 from '../../images/AboutADGMImg/Img3.png'
import Img4 from '../../images/AboutADGMImg/Img4.png'
import Img5 from '../../images/AboutADGMImg/Img5.png'
import Img6 from '../../images/AboutADGMImg/Img6.png'
import Img7 from '../../images/AboutADGMImg/Img7.png'
import Img8 from '../../images/AboutADGMImg/Img8.png'
import Img9 from '../../images/AboutADGMImg/Img9.png'
import Img10 from '../../images/AboutADGMImg/Img10.png'
import Img11 from '../../images/AboutADGMImg/Img11.png'
import Img12 from '../../images/AboutADGMImg/Img12.png'
import Img13 from '../../images/AboutADGMImg/Img13.png'
import Img14 from '../../images/AboutADGMImg/Img14.png'
import Img15 from '../../images/AboutADGMImg/Img15.png'
import Img16 from '../../images/AboutADGMImg/Img16.png'
import Img17 from '../../images/AboutADGMImg/Img17.png'
import IconImg from '../../images/AboutADGMImg/IconImg.png'
import cover from '../../images/AboutADGMImg/cover.png'
import Line from '../../images/AboutADGMImg/Line.png'


const AboutADGM = ({navigation}) => {
    const handlePress=()=>{
        navigation.navigate('Home')
    }
    const { width, height } = useWindowDimensions()
    return (
        <ScrollView style={{ backgroundColor: '#F4F4F4', width: width }}>
            <SafeAreaView>
            <StatusBar
            translucent backgroundColor='transparent'
                barStyle='light-content'
            />
                <View>
                    <View>
                        <Image source={BGImg} resizeMode='stretch' style={{ width: width }} />
                        <View style={{ position: 'absolute' }}>
                            <View style={{ flexDirection: "row", width: width / 1 - 26, left: 13, marginTop: 19 }}>
                                <View>
                                    <TouchableOpacity onPress={handlePress}>
                                    <Image source={ArrowLeft} style={{ height: height / 34 - 2, marginVertical: height / 29 }} resizeMode='stretch' />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginHorizontal: 25, width: width / 2 + 60, marginVertical: height / 29 }}>
                                    <Text style={styles.containTxt}>Welcome to the International Financial Centre of Abu Dhabi</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <View style={styles.container}>
                        <View style={{ width: width / 1 - 32, marginTop: 19 }}>
                            <Text style={styles.txt}>One of the world’s premier International Financial Centres in the capital of the UAE</Text>
                        </View>

                    </View>

                    <View style={styles.containerFluid}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Text style={styles.plaintxt}>Abu Dhabi Global Market is an award winning international financial centre, located across both Al Maryah and Al Reem Islands, covering an area of 14.38 million sqm, making it one of the largest financial centres in the world. ADGM has pioneered numerous industry-first initiatives both regionally and globally and has attracted a diverse range of businesses, financial institutions, and professional services firms to the IFC. {'\n'}{'\n'}The IFC offers a comprehensive suite of business solutions, choice of legal structures, registration, and incorporation, underpinned by an independent legal jurisdiction. Through its future focused infrastructure, pioneering regulatory framework, and direct application of English Common Law, ADGM has developed a unique and robust environment for its community to thrive.</Text>
                        </View>
                    </View>

                    <View style={styles.bgClr}>
                        <View style={styles.containerFluidTxt}>
                            <View style={{ width: width / 1 - 32, display: "flex", alignItems: 'center' }}>
                                <Text style={styles.mainTxt}>Meet the <Text style={{ color: '#005AD4' }}>Market Development Team</Text></Text>
                            </View>
                        </View>

                        <View style={styles.ImgContain}>
                            <View style={{ width: width / 1 - 32 }}>
                                <Image source={Img1} resizeMode='stretch' style={{ width: width / 1 - 32 }} />
                            </View>
                        </View>

                        <View style={styles.containerADGM}>
                            <View style={{ width: width / 1 - 32, display: "flex", alignItems: 'center' }}>
                                <Text style={styles.mainTxtADGM}>The ADGM Pavilion provides the ideal place to meet. If you would like to contact the ADGM team, use the chat function to connect with the appropriate representative.</Text>
                            </View>
                        </View>

                        <View style={styles.persnImg}>
                            <View style={{ width: width / 1 - 32, display: "flex", alignItems: "center" }}>
                                <View>
                                    <Image source={Img2} resizeMode='stretch' />
                                    <View style={{ width: 115, marginTop: 5 }} >
                                        <Text style={styles.imgTxt}>Bharath Shivappa<Text style={{ color: '#2E2E2E', fontSize: 11, fontWeight: '400' }}> Executive Vice President - Business Development</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ width: width, height: 1, marginTop: 30 }}>
                            <Text style={{ backgroundColor: '#D2D0D0' }}></Text>
                        </View>

                        <View style={styles.txtContain}>
                            <View style={{ width: width / 1 - 102 }}>
                                <Text style={styles.PETxt}>PE, VC, Hedge Funds, or Mutual Funds (Asset Management)</Text>
                            </View>
                        </View>

                        <View style={styles.line}>
                            <Image source={Line} resizeMode='stretch' style={{ width: width / 1 - 32 }} />
                        </View>

                        <View style={styles.cards}>
                            <View style={{ width: width / 1 - 155 }}>
                                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: "center" }}>
                                    <View>
                                        <Image source={Img3} resizeMode='stretch' style={{ width: width / 4 + 15 }} />
                                        <Text style={[styles.txtImg3, { width: width / 4 + 15 }]}>Jonathan Summers <Text style={{ color: "#2E2E2E", fontSize: 11, fontWeight: '400' }}> Senior Vice President - Asset Management</Text></Text>
                                    </View>

                                    <View style={{ left: 8 }}>
                                        <Image source={Img4} resizeMode='stretch' style={{ width: width / 4 + 15 }} />
                                        <Text style={[styles.txtImg3, { width: width / 4 + 15 }]}>Hamad Al Faheem <Text style={{ color: "#2E2E2E", fontSize: 11, fontWeight: '500' }}> Specialist - Business Development</Text></Text>
                                    </View>

                                </View>
                            </View>
                        </View>

                        <View style={{ width: width, height: 1, marginTop: 30 }}>
                            <Text style={{ backgroundColor: '#D2D0D0' }}>Hello</Text>
                        </View>

                        <View style={styles.txtContain}>
                            <View style={{ width: width / 1 - 102 }}>
                                <Text style={styles.PETxt}>Fintech, Virtual Assets, CyberTech or Health Tech (New Age Finance)</Text>
                            </View>
                        </View>

                        <View style={styles.line}>
                            <Image source={Line} resizeMode='stretch' style={{ width: width / 1 - 32 }} />
                        </View>

                        <View style={styles.cards}>
                            <View style={{ width: width / 1 - 32 }}>
                                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: "center", gap: 8 }}>
                                    <View>
                                        <Image source={Img5} resizeMode='stretch' style={{ width: width / 4 + 15 }} />
                                        <Text style={[styles.txtImg3, { width: width / 4 + 15 }]}>Faisal Al Mansoori <Text style={{ color: "#2E2E2E", fontSize: 11, fontWeight: '400' }}> Senior Vice President - New Age Finance</Text></Text>
                                    </View>

                                    <View>
                                        <Image source={Img6} resizeMode='stretch' style={{ width: width / 4 + 15 }} />
                                        <Text style={[styles.txtImg3, { width: width / 4 + 15 }]}>Khalifa Al Yousef <Text style={{ color: "#2E2E2E", fontSize: 11, fontWeight: '300' }}> Associate Vice President - Business Development</Text></Text>
                                    </View>

                                    <View>
                                        <Image source={Img7} resizeMode='stretch' style={{ width: width / 4 + 15 }} />
                                        <Text style={[styles.txtImg3, { width: width / 4 + 15 }]}>Shamma Al Jaberi <Text style={{ color: "#2E2E2E", fontSize: 11, fontWeight: '500' }}> Specialist - Business Development</Text></Text>
                                    </View>

                                </View>
                            </View>
                        </View>



                        <View style={{ width: width, height: 1, marginTop: 30 }}>
                            <Text style={{ backgroundColor: '#D2D0D0' }}></Text>
                        </View>

                        <View style={styles.txtContain}>
                            <View style={{ width: width / 1 - 102 }}>
                                <Text style={styles.PETxt}>Private Banking, Wealth Management, M&A, Debt Capital Markets, or Treasury (Traditional Finance)</Text>
                            </View>
                        </View>

                        <View style={styles.line}>
                            <Image source={Line} resizeMode='stretch' style={{ width: width / 1 - 32 }} />
                        </View>

                        <View style={styles.cards}>
                            <View style={{ width: width / 1 - 155 }}>
                                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: "center" }}>
                                    <View>
                                        <Image source={Img8} resizeMode='stretch' style={{ width: width / 4 + 15 }} />
                                        <Text style={[styles.txtImg3, { width: width / 4 + 15 }]}>Olivier Honsberger <Text style={{ color: "#2E2E2E", fontSize: 11, fontWeight: '400' }}> Senior Vice President - Traditional Finance</Text></Text>
                                    </View>

                                    <View style={{ left: 8 }}>
                                        <Image source={Img9} resizeMode='stretch' style={{ width: width / 4 + 15 }} />
                                        <Text style={[styles.txtImg3, { width: width / 4 + 15 }]}>Ahmed Alnuaimi <Text style={{ color: "#2E2E2E", fontSize: 11, fontWeight: '500' }}> Specialist - Business Development</Text></Text>
                                    </View>

                                </View>
                            </View>
                        </View>



                        <View style={{ width: width, height: 1, marginTop: 30 }}>
                            <Text style={{ backgroundColor: '#D2D0D0' }}>Hello</Text>
                        </View>

                        <View style={styles.txtContain}>
                            <View style={{ width: width / 1 - 102 }}>
                                <Text style={styles.PETxt}>Restructuring, Dispute Resolution (Functional Finance)</Text>
                            </View>
                        </View>

                        <View style={styles.line}>
                            <Image source={Line} resizeMode='stretch' style={{ width: width / 1 - 32 }} />
                        </View>

                        <View style={styles.cards}>
                            <View style={{ width: width / 1 - 32 }}>
                                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: "center", gap: 8 }}>
                                    <View>
                                        <Image source={Img10} resizeMode='stretch' style={{ width: width / 4 + 15 }} />
                                        <Text style={[styles.txtImg3, { width: width / 4 + 15 }]}>Amna Alzaabi <Text style={{ color: "#2E2E2E", fontSize: 11, fontWeight: '400' }}> Senior Vice President - Functional Finance</Text></Text>
                                    </View>

                                    <View>
                                        <Image source={Img11} resizeMode='stretch' style={{ width: width / 4 + 15 }} />
                                        <Text style={[styles.txtImg3, { width: width / 4 + 15 }]}>Sarah Al Hosani <Text style={{ color: "#2E2E2E", fontSize: 11, fontWeight: '500' }}> Associate Vice President - Business Development</Text></Text>
                                    </View>

                                    <View>
                                        <Image source={Img12} resizeMode='stretch' style={{ width: width / 4 + 15 }} />
                                        <Text style={[styles.txtImg3, { width: width / 4 + 15 }]}>Mohammad Al  <Text style={{ color: "#2E2E2E", fontSize: 11, fontWeight: '300' }}> Senior Specialist - Business Development</Text></Text>
                                    </View>

                                </View>
                            </View>
                        </View>


                        <View style={{ width: width, height: 1, marginTop: 30 }}>
                            <Text style={{ backgroundColor: '#D2D0D0' }}></Text>
                        </View>

                        <View style={styles.txtContain}>
                            <View style={{ width: width / 1 - 102 }}>
                                <Text style={styles.PETxt}>Sustainable Finance</Text>
                            </View>
                        </View>

                        <View style={styles.line}>
                            <Image source={Line} resizeMode='stretch' style={{ width: width / 1 - 32 }} />
                        </View>

                        <View style={styles.cards}>
                            <View style={{ width: width / 1 - 155 }}>
                                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: "center" }}>
                                    <View>
                                        <Image source={Img13} resizeMode='stretch' style={{ width: width / 4 + 15 }} />
                                        <Text style={[styles.txtImg3, { width: width / 4 + 15 }]}>Oana Picincu <Text style={{ color: "#2E2E2E", fontSize: 11, fontWeight: '400' }}> Associate Vice President – Sustainable Finance</Text></Text>
                                    </View>

                                    <View style={{ left: 8 }}>
                                        <Image source={Img14} resizeMode='stretch' style={{ width: width / 4 + 15 }} />
                                        <Text style={[styles.txtImg3, { width: width / 4 + 15 }]}>Fatima Al Kaabi <Text style={{ color: "#2E2E2E", fontSize: 11, fontWeight: '500' }}> Specialist, Sustainable Finance</Text></Text>
                                    </View>

                                </View>
                            </View>
                        </View>

                    </View>


                    <View style={styles.operateContaine}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Text style={styles.ADGMTxt}>Operating in<Text style={{ color: '#005AD4' }}>ADGM</Text></Text>
                        </View>
                    </View>

                    <View style={styles.BussinessContaine}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Image source={Img15} resizeMode='stretch' style={{ width: width / 1 - 32, borderRadius: 4}} />
                            <Image source={cover} resizeMode='stretch' style={{ width: width / 1 - 32, position: 'absolute', borderRadius: 4 }} />
                            <View style={styles.TxtContan}>
                                <Text style={styles.innerTxtImg}>Business Areas</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.clrInnerTxt}>Discover more</Text>
                                    <Image source={IconImg} resizeMode='stretch' style={{ marginHorizontal: 5, marginTop: 7 }} />
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={styles.BussinessContaine}>
                        <View style={{ width: width / 1 - 32, }}>
                            <Image source={Img16} resizeMode='stretch' style={{ width: width / 1 - 32, borderRadius: 4 }} />
                            <Image source={cover} resizeMode='stretch' style={{ width: width / 1 - 32, position: 'absolute', borderRadius: 4 }} />
                            <View style={styles.TxtContan}>
                                <Text style={styles.innerTxtImg}>Make an Enquiry</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.clrInnerTxt}>Discover more</Text>
                                    <Image source={IconImg} resizeMode='stretch' style={{ marginHorizontal: 5, marginTop: 7 }} />
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={styles.BussinessContaine}>
                        <View style={{ width: width / 1 - 32, }}>
                            <Image source={Img17} resizeMode='stretch' style={{ width: width / 1 - 32, borderRadius: 4 }} />
                            <Image source={cover} resizeMode='stretch' style={{ width: width / 1 - 32, position: 'absolute', borderRadius: 4 }} />
                            <View style={styles.TxtContan}>
                                <Text style={styles.innerTxtImg}>Announcements</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.clrInnerTxt}>Discover more</Text>
                                    <Image source={IconImg} resizeMode='stretch' style={{marginHorizontal:5, marginTop:7 }} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:58}}></View>
            </SafeAreaView>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    containTxt: {
        color: "#FFF",
        display: "flex",
        textAlign: 'center',
        fontFamily: 'Isidora Sans',
        fontSize: 23,
        fontWeight: '600',
        lineHeight: 26
    },
    container: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        color: "#002646",
        fontFamily: 'Isidora Sans',
        fontSize: 22,
        fontWeight: '600'
    },
    containerFluid: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 23
    },
    plaintxt: {
        color: "#000",
        fontFamily: 'Isidora Sans',
        fontSize: 15,
        fontWeight: '400'
    },
    bgClr: {
        backgroundColor: "rgba(27, 106, 213, 0.05)",
        height: 2132,
        marginTop: 30
    },
    containerFluidTxt: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 17
    },
    mainTxt: {
        color: '#002646',
        display: "flex",
        justifyContent: 'center',
        fontFamily: 'Isidora Sans',
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: 0.35
    },
    ImgContain: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 14
    },
    mainTxtADGM: {
        color: '#2E2E2E',
        fontFamily: 'Isidora Sans',
        fontSize: 16,
        fontWeight: '500',
    },
    containerADGM: {
        marginTop: 10,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    persnImg: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 43
    },
    imgTxt: {
        fontFamily: 'Isidora Sans',
        fontSize: 13,
        fontWeight: '700',
        letterSpacing: -0.3,
        color: "#002646",
        textAlign: 'center',
    },
    txtContain: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20.5
    },
    PETxt: {
        color: '#1B6AD5',
        textAlign: 'center',
        fontFamily: 'Isidora Sans',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.35
    },
    line: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 13.5
    },
    cards: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 20
    },
    txtImg3: {
        fontFamily: 'Isidora Sans',
        fontSize: 13,
        fontWeight: '700',
        letterSpacing: -0.3,
        color: "#002646",
        textAlign: 'center',
        marginTop: 5
    },
    operateContaine: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    ADGMTxt: {
        fontFamily: 'Isidora Sans',
        fontSize: 18,
        fontWeight: '700',
        color: "#002646",
        marginTop: 5
    },
    BussinessContaine: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12
    },
    innerTxtImg: {
        fontFamily: 'Isidora Sans',
        fontSize: 18,
        fontWeight: '600',
        color: "#FFF",
        marginTop: 5
    },
    TxtContan: {
        position: 'absolute',
        marginTop: 33,
        left: 20
    },
    clrInnerTxt: {
        fontFamily: 'Isidora Sans',
        fontSize: 11,
        fontWeight: '600',
        color: "#B4B4B4",
        marginTop: 5
    }


})

export default AboutADGM