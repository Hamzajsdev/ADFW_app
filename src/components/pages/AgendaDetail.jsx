import { View, Text, ScrollView, StyleSheet, Image, useWindowDimensions, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ArrowLeft from '../../images/SpeakerImg/ArrowLeft.png'
import assets from '../../images/AgendaDetailImg/assets.png'
import heart from '../../images/AgendaDetailImg/heart.png'
import location from '../../images/AgendaDetailImg/location.png'
import clock from '../../images/AgendaDetailImg/clock.png'
import stars from '../../images/AgendaDetailImg/stars.png'
import star1 from '../../images/AgendaDetailImg/Star1.png'
import img1 from '../../images/AgendaDetailImg/img1.png'
import img2 from '../../images/AgendaDetailImg/img2.png'
import img3 from '../../images/AgendaDetailImg/img3.png'
import img4 from '../../images/AgendaDetailImg/img4.png'
import img5 from '../../images/AgendaDetailImg/img5.png'
import Modal from 'react-native-modal';
import starsRate from '../../images/AgendaDetailImg/starsRate.png'
import { StatusBar } from 'react-native'




const AgendaDetail = ({ navigation }) => {
    const [isFirstComponentVisible, setFirstComponentVisible] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
    const [currentImageIndex3, setCurrentImageIndex3] = useState(0);
    const [currentImageIndex4, setCurrentImageIndex4] = useState(0);
    const [currentImageIndex5, setCurrentImageIndex5] = useState(0);
    
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }
    const ModalContent = () => (
        <View >
            <View style={styles.rateContainer}>
                <View style={{ width: width / 1 - 32 }}>
                    <View style={[styles.RateCard]}>
                        <TouchableOpacity onPress={toggleModal}>
                        <View style={{display:'flex', alignItems:"flex-end", right:8}}>
                            <View style={styles.rateCross}>
                                <Text style={styles.cross}>X</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                        <View style={styles.RateTxtContain}>
                            <Text style={styles.ratetxt}>Rate This Session</Text>
                        </View>
                        <View style={styles.fluidContain}>
                            <View style={[styles.starsRateContain, { width: width / 1 - 146 }]}>
                                <Image source={starsRate} resizeMode='stretch' />
                            </View>
                        </View>

                        <View style={styles.btnRate}>
                            <View style={{ width: width / 2 + 15 }}>
                                <View style={styles.btnRateContain}>
                                    <Text style={styles.btnTxt}>Rate</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )

    
    const handlepress = () => {
        navigation.navigate('Home')
    }
    const images = [
        require('../../images/AgendaDetailImg/thumbs.png'),
        require('../../images/AgendaDetailImg/thumbs2.png'),
    ];
    const handleImageClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleImageClick2 = () => {
        setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % images.length);
    };
    const handleImageClick3 = () => {
        setCurrentImageIndex3((prevIndex) => (prevIndex + 1) % images.length);
    };
    const handleImageClick4 = () => {
        setCurrentImageIndex4((prevIndex) => (prevIndex + 1) % images.length);
    };
    const handleImageClick5 = () => {
        setCurrentImageIndex5((prevIndex) => (prevIndex + 1) % images.length);
    };
    const toggleComponentVisibility = () => {
        setFirstComponentVisible(!isFirstComponentVisible);
    };

    const { width, height } = useWindowDimensions()
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

                    <Image source={assets} style={{ width: 80, height: height / 40 + 20, position: "absolute", marginHorizontal: 52, marginVertical: height / 29, }} resizeMode='stretch' />
                </View>

                <View style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", width: width / 1 - 32, display: "flex", justifyContent: "space-between", marginVertical: 25 }}>
                        <View>
                            <Text style={styles.panelTxt}>Panel</Text>
                        </View>
                        <View>
                            {isFirstComponentVisible ? (
                                <TouchableOpacity style={styles.field} onPress={toggleComponentVisibility}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.txt}>Add to favourites</Text>
                                        <Image source={heart} style={styles.heart} resizeMode='stretch' />
                                    </View>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity style={styles.field} onPress={toggleComponentVisibility}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.txt}>Remove favourites</Text>
                                        <Image source={heart} style={styles.heart} resizeMode='stretch' />
                                    </View>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                </View>

                <View style={{ display: 'flex', justifyContent: "center", alignItems: "center", bottom: 12 }}>
                    <View style={{ width: width / 1 - 32 }}>
                        <Text style={styles.lgTxt}>Investment Risk Across Asset Classes - a New Paradigm</Text>
                    </View>
                </View>

                <View style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: width / 1 - 32 }}>
                        <Text style={styles.SmTxt}>The period between 2020-2022 has seen sizable economic events. These events and resultant headwinds have seen investors adopt new strategies. This session convenes several global investors to analyse their approach over the next 18 months.</Text>
                    </View>
                </View>

                <View style={{ display: 'flex', justifyContent: "center", alignItems: "center", marginVertical: 8 }}>
                    <View style={[styles.Lgfield, { width: width / 1 - 32, borderWidth: 1 }]}>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={location} resizeMode='stretch' />
                            <Text style={styles.LGfield}>Al Maryah Ballroom, Four Seasons</Text>
                        </View>
                    </View>
                </View>

                <View style={{ display: 'flex', justifyContent: "center", alignItems: "center", marginVertical: 2 }}>
                    <View style={[styles.Lgfield, { width: width / 1 - 32, borderWidth: 1 }]}>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={clock} resizeMode='stretch' />
                            <Text style={[styles.LGfield, { fontSize: 16.889 }]}>09.50 - 10.30</Text>
                        </View>
                    </View>
                </View>

                <View style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", width: width / 1 - 32, display: "flex", justifyContent: "space-between", marginVertical: 10 }}>
                        <View>
                            <Text style={styles.sessionTxt}>Session Rating</Text>
                            <Image source={stars} style={{ marginVertical: 1 }} resizeMode='stretch' />
                            <Text style={styles.num}>4/5</Text>
                        </View>
                        <View>
                            <View style={styles.rateField}>
                                <TouchableOpacity onPress={toggleModal}>
                                    <View style={{ flexDirection: "row", marginVertical: 1 }}>
                                        <Image source={star1} />
                                        <Text style={styles.txtRate}>Rate</Text>
                                    </View>
                                </TouchableOpacity>
                                <Modal isVisible={isModalVisible}>
                                    <ModalContent />
                                </Modal>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ display: 'flex', justifyContent: "center", alignItems: 'center', marginVertical: 20 }}>
                    <View style={{ width: width / 1 - 32 }}>
                        <Text style={styles.speakerTxt}>Speakers</Text>
                    </View>
                </View>

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bottom: 6 }}>
                    <View style={[styles.speakerCard, { width: width / 1 - 32 }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 86, marginVertical: 6 }}>
                                <Image source={img1} resizeMode='cover' />
                            </View>

                            <View style={{ width: width / 1 - 150, marginHorizontal: 19, display: "flex", justifyContent: "center", }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View>
                                        <Text style={styles.dr}>Dr. Arnaud Leclercq{'\n'}<Text style={{ fontSize: 15, fontWeight: '500' }}>Partner Private Holding{'\n'}</Text><Text style={{ color: "#00A9CE", fontSize: 15, fontWeight: '600' }}>Lombard Odier Group</Text></Text>
                                    </View>
                                    <View style={{ height: 21, width: width / 4 - 20 }}>
                                        <TouchableOpacity onPress={handleImageClick}>
                                            <Image style={{ marginHorizontal: 20 }} source={images[currentImageIndex]} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 4 }}>
                    <View style={[styles.speakerCard, { width: width / 1 - 32 }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 86, marginVertical: 6 }}>
                                <Image source={img2} resizeMode='cover' />
                            </View>

                            <View style={{ width: width / 1 - 150, marginHorizontal: 19, display: "flex", justifyContent: "center", }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View>
                                        <Text style={styles.dr}>Hazem Ben-Gacem{'\n'}<Text style={{ fontSize: 15, fontWeight: '500' }}>Co-CEO{'\n'}</Text><Text style={{ color: "#00A9CE", fontSize: 15, fontWeight: '600' }}>Investcorp</Text></Text>
                                    </View>
                                    <View style={{ height: 21, width: width / 4 - 20 }}>

                                        <TouchableOpacity onPress={handleImageClick2}>
                                            <Image style={{ marginHorizontal: 30 }} source={images[currentImageIndex2]} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 6 }}>
                    <View style={[styles.speakerCard, { width: width / 1 - 32 }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 86, marginVertical: 6 }}>
                                <Image source={img3} resizeMode='cover' />
                            </View>

                            <View style={{ width: width / 1 - 150, marginHorizontal: 19, display: "flex", justifyContent: "center", }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View>
                                        <Text style={styles.dr}>Courtney Powell{'\n'}<Text style={{ fontSize: 15, fontWeight: '500' }}>COO & Managing Partner{'\n'}</Text><Text style={{ color: "#00A9CE", fontSize: 15, fontWeight: '600' }}>500 Global</Text></Text>
                                    </View>
                                    <View style={{ height: 21, width: width / 4 - 20 }}>
                                        <TouchableOpacity onPress={handleImageClick3}>
                                            <Image style={{ marginHorizontal: 6 }} source={images[currentImageIndex3]} />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 4 }}>
                    <View style={[styles.speakerCard, { width: width / 1 - 32 }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 86, marginVertical: 6 }}>
                                <Image source={img4} resizeMode='cover' />
                            </View>

                            <View style={{ width: width / 1 - 150, marginHorizontal: 19, display: "flex", justifyContent: "center", }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View>
                                        <Text style={styles.dr}>Dr. Karim El Solh{'\n'}<Text style={{ fontSize: 15, fontWeight: '500' }}>Co-founder & CEO{'\n'}</Text><Text style={{ color: "#00A9CE", fontSize: 15, fontWeight: '600' }}>Gulf Capital</Text></Text>
                                    </View>
                                    <View style={{ height: 21, width: width / 4 - 20, }}>
                                        <TouchableOpacity onPress={handleImageClick4}>
                                            <Image style={{ marginHorizontal: 50 }} source={images[currentImageIndex4]} />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 6 }}>
                    <View style={[styles.speakerCard, { width: width / 1 - 32 }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 86, marginVertical: 6 }}>
                                <Image source={img5} resizeMode='cover' />
                            </View>

                            <View style={{ width: width / 1 - 150, marginHorizontal: 19, display: "flex", justifyContent: "center", }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View>
                                        <Text style={styles.dr}>Volkan Kurtas{'\n'}<Text style={{ fontSize: 15, fontWeight: '500' }}>Founder & CIO{'\n'}</Text><Text style={{ color: "#00A9CE", fontSize: 15, fontWeight: '600' }}>Vibrant Capital Partners, Inc.</Text></Text>
                                    </View>
                                    <View style={{ height: 21, width: width / 7 - 30, right: 25 }}>
                                        <TouchableOpacity onPress={handleImageClick5}>
                                            <Image source={images[currentImageIndex5]} />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 20 }}>
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
    field: {
        width: 154,
        height: 32,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 5,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        paddingLeft: 10,
        paddingTop: 5
    },
    txt: {
        fontSize: 13,
        fontWeight: '500',
        letterSpacing: 0.35,
        color: 'rgba(46, 46, 46, 0.30)',
        fontFamily: 'Isidora Sans'
    },
    heart: {
        marginHorizontal: 8,
        marginVertical: 3
    },
    panelTxt: {
        color: "#00A9CE",
        fontFamily: 'Isidora Sans',
        fontSize: 20,
        fontWeight: '600',
        letterSpacing: 0.35,
        marginVertical: 3
    },
    lgTxt: {
        height: 94,
        color: "#002646",
        fontSize: 30,
        fontWeight: '700',
        lineHeight: 32,
        letterSpacing: 0.35,
        fontFamily: 'Isidora Sans'
    },
    SmTxt: {
        color: "#2E2E2E",
        fontFamily: 'Isidora Sans',
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 0.35

    },
    Lgfield: {
        height: 45,
        paddingTop: 10.5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 12.5,
        borderRadius: 10,
        borderLeftColor: '#CCCED3',
        borderRightColor: '#CCCED3',
        borderTopColor: '#CCCED3',
        borderBottomColor: '#CCCED3',
        borderWidth: 1,
    },
    LGfield: {
        marginHorizontal: 10,
        color: "#2E2E2E",
        fontFamily: 'Isidora Sans',
        fontSize: 16.8,
        fontWeight: '500',
        letterSpacing: 0.441
    },
    sessionTxt: {
        height: 17,
        color: 'rgba(46, 46, 46, 0.75)',
        fontFamily: 'Isidora Sans',
        fontSize: 13,
        fontWeight: '500',
        letterSpacing: 0.35
    },
    num: {
        height: 17,
        color: '#2E2E2E',
        fontFamily: 'Isidora Sans',
        fontSize: 13,
        fontWeight: '500',
        letterSpacing: 0.35,
    },
    rateField: {
        width: 72,
        height: 42,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        borderLeftColor: '#1B6AD5',
        borderRightColor: '#1B6AD5',
        borderTopColor: '#1B6AD5',
        borderBottomColor: '#1B6AD5',
        borderWidth: 1,
        marginVertical: 4
    },
    txtRate: {
        color: '#005AD4',
        fontFamily: 'Isidora Sans',
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: 0.35,
        marginHorizontal: 3
    },
    speakerTxt: {
        color: '#002646',
        fontFamily: 'Isidora Sans',
        fontSize: 21,
        fontWeight: '500',
        letterSpacing: 0.35,
    },
    speakerCard: {
        height: 100,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 15,
        backgroundColor: '#FFF',
    },
    dr: {
        fontSize: 17,
        color: "#2E2E2E",
        fontFamily: 'Isidora Sans',
        fontWeight: "700",
        letterSpacing: 0.35
    },

    rateContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    RateCard: {
        height: 180,
        borderRadius: 10,
        backgroundColor: "#FFF",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        elevation: 5,
    },
    rateCross: {
        width: 32,
        height: 32,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "rgba(0, 38, 70, 0.20)",
        // marginHorizontal: 319,
        marginTop: 8,

    },
    cross: {
        color: '#2E2E2E',
        fontFamily: 'Isidora Sans',
        fontSize: 18,
        fontWeight: '600'
    },
    ratetxt: {
        color: '#002646',
        fontFamily: 'Isidora Sans',
        fontSize: 18,
        fontWeight: '600'
    },
    RateTxtContain: {
        display: 'flex',
        alignItems: "center"
    },
    startsRate: {
        borderWidth: 1,
        display: 'flex',
        alignItems: "center"
    },
    fluidContain: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
    },
    starsRateContain: {
        display: "flex",
        alignItems: "center",
        marginTop: 15,
        left: 3
    },
    btnRate: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        left: 5,
        marginTop: 15
    },
    btnRateContain: {
        height: 39,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "#1B6AD5"
    },
    btnTxt: {
        color: '#FFF',
        fontFamily: 'Isidora Sans',
        fontSize: 13,
        fontWeight: '600',
        letterSpacing: 0.35
    },


})

export default AgendaDetail