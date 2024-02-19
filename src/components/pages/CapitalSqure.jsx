import { View, Text, ScrollView, SafeAreaView, Image, useWindowDimensions, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import img1 from '../../images/CapitalSqureImg/img1.png'
import img2 from '../../images/CapitalSqureImg/img2.png'
import img3 from '../../images/CapitalSqureImg/img3.png'
import Vector from '../../images/CapitalSqureImg/Vector.png'
import pavilion from '../../images/CapitalSqureImg/pavilion.jpg'
import SponsorSuites from '../../images/CapitalSqureImg/SponsorSuites.jpg'
import ADFWLIVE from '../../images/CapitalSqureImg/ADFWLIVE.jpg'
import ADFWArena from '../../images/CapitalSqureImg/ADFWArena.jpg'
import ADFWFoodStations from '../../images/CapitalSqureImg/ADFWFoodStations.jpg'
import ADFWCapitalAvenue from '../../images/CapitalSqureImg/ADFWCapitalAvenue.jpg'
import ExitFalcon from '../../images/CapitalSqureImg/ExitFalcon.jpg'


import ADFWStudio from '../../images/CapitalSqureImg/ADFWStudio.jpg'

import Modal from 'react-native-modal';
import registration from '../../images/CapitalSqureImg/registration.png'
import ArrowLeft from '../../images/SpeakerImg/ArrowLeft.png'


const CapitalSqure = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible1, setModalVisible1] = useState(false);
    const [isModalVisible2, setModalVisible2] = useState(false);
    const [isModalVisible3, setModalVisible3] = useState(false);
    const [isModalVisible4, setModalVisible4] = useState(false);
    const [isModalVisible5, setModalVisible5] = useState(false);
    const [isModalVisible6, setModalVisible6] = useState(false);
    const [isModalVisible7, setModalVisible7] = useState(false);
    const [isModalVisible8, setModalVisible8] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }
    const toggleModal1 = () => {
        setModalVisible1(!isModalVisible1);
    }
    const toggleModal2 = () => {
        setModalVisible2(!isModalVisible2);
    }
    const toggleModal3 = () => {
        setModalVisible3(!isModalVisible3);
    }
    const toggleModal4 = () => {
        setModalVisible4(!isModalVisible4);
    }
    const toggleModal5 = () => {
        setModalVisible5(!isModalVisible5);
    }
    const toggleModal6 = () => {
        setModalVisible6(!isModalVisible6);
    }
    const toggleModal7 = () => {
        setModalVisible7(!isModalVisible7);
    }
    const toggleModal8 = () => {
        setModalVisible8(!isModalVisible8);
    }
    const ModalContent = () => (
        <View style={{ backgroundColor: "rgba(219, 219, 219, 0.85)", height: 230, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: width / 1 - 32 }} source={registration} resizeMode='stretch' />
                </View>
                <View style={{ position: 'absolute' }} >
                    <TouchableOpacity onPress={toggleModal}>
                        <View style={[styles.box, { marginHorizontal: width / 1 - 63, width: width / 32 + 20 }]}>
                            <Text style={styles.cross}>X</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View >
                    <View style={[styles.field, { marginHorizontal: width / 16 - 24, flexDirection: "row", marginVertical: 10 }]}>
                        <View style={{ height: 38, width: 29 }}>
                            <View style={{ marginVertical: 6 }}>
                                <Image style={{ position: 'relative' }} source={img3} />
                                <Text style={[styles.circleTxt, { position: 'absolute' }]}>01</Text>
                                <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.InnerTxt}>Registration</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
    const ModalPavilion = () => (
        <View style={{ backgroundColor: "rgba(219, 219, 219, 0.85)", height: 230, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: width / 1 - 32, height: 203, borderRadius: 10 }} source={pavilion} resizeMode='stretch' />
                </View>
                <View style={{ position: 'absolute' }} >
                    <TouchableOpacity onPress={toggleModal1}>
                        <View style={[styles.box, { marginHorizontal: width / 1 - 63, width: width / 32 + 20 }]}>
                            <Text style={styles.cross}>X</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View >
                    <View style={[styles.field, { marginHorizontal: width / 16 - 24, flexDirection: "row", marginVertical: 10 }]}>
                        <View style={{ height: 38, width: 29 }}>
                            <View style={{ marginVertical: 6 }}>
                                <Image style={{ position: 'relative' }} source={img3} />
                                <Text style={[styles.circleTxt, { position: 'absolute' }]}>02</Text>
                                <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.InnerTxt}>DED & ADGM Pavilion</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
    const ModalSponsor = () => (
        <View style={{ backgroundColor: "rgba(219, 219, 219, 0.85)", height: 230, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: width / 1 - 32, height: 203, borderRadius: 10 }} source={SponsorSuites} resizeMode='stretch' />
                </View>
                <View style={{ position: 'absolute' }} >
                    <TouchableOpacity onPress={toggleModal2}>
                        <View style={[styles.box, { marginHorizontal: width / 1 - 63, width: width / 32 + 20 }]}>
                            <Text style={styles.cross}>X</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View >
                    <View style={[styles.field, { marginHorizontal: width / 16 - 24, flexDirection: "row", marginVertical: 10 }]}>
                        <View style={{ height: 38, width: 29 }}>
                            <View style={{ marginVertical: 6 }}>
                                <Image style={{ position: 'relative' }} source={img3} />
                                <Text style={[styles.circleTxt, { position: 'absolute' }]}>03</Text>
                                <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.InnerTxt}>Sponsors Suites</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
    const ModalADFW = () => (
        <View style={{ backgroundColor: "rgba(219, 219, 219, 0.85)", height: 230, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: width / 1 - 32, height: 203, borderRadius: 10 }} source={ADFWLIVE} resizeMode='stretch' />
                </View>
                <View style={{ position: 'absolute' }} >
                    <TouchableOpacity onPress={toggleModal3}>
                        <View style={[styles.box, { marginHorizontal: width / 1 - 63, width: width / 32 + 20 }]}>
                            <Text style={styles.cross}>X</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View >
                    <View style={[styles.field, { marginHorizontal: width / 16 - 24, flexDirection: "row", marginVertical: 10 }]}>
                        <View style={{ height: 38, width: 29 }}>
                            <View style={{ marginVertical: 6 }}>
                                <Image style={{ position: 'relative' }} source={img3} />
                                <Text style={[styles.circleTxt, { position: 'absolute' }]}>04</Text>
                                <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.InnerTxt}>ADFW Live</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
    const ModalADFWArena = () => (
        <View style={{ backgroundColor: "rgba(219, 219, 219, 0.85)", height: 230, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: width / 1 - 32, height: 203, borderRadius: 10 }} source={ADFWArena} resizeMode='stretch' />
                </View>
                <View style={{ position: 'absolute' }} >
                    <TouchableOpacity onPress={toggleModal4}>
                        <View style={[styles.box, { marginHorizontal: width / 1 - 63, width: width / 32 + 20 }]}>
                            <Text style={styles.cross}>X</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View >
                    <View style={[styles.field, { marginHorizontal: width / 16 - 24, flexDirection: "row", marginVertical: 10 }]}>
                        <View style={{ height: 38, width: 29 }}>
                            <View style={{ marginVertical: 6 }}>
                                <Image style={{ position: 'relative' }} source={img3} />
                                <Text style={[styles.circleTxt, { position: 'absolute' }]}>05</Text>
                                <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.InnerTxt}>ADFW Arena</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
    const ModalFoodStudio = () => (
        <View style={{ backgroundColor: "rgba(219, 219, 219, 0.85)", height: 230, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: width / 1 - 32, height: 203, borderRadius: 10 }} source={ADFWFoodStations} resizeMode='stretch' />
                </View>
                <View style={{ position: 'absolute' }} >
                    <TouchableOpacity onPress={toggleModal5}>
                        <View style={[styles.box, { marginHorizontal: width / 1 - 63, width: width / 32 + 20 }]}>
                            <Text style={styles.cross}>X</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View >
                    <View style={[styles.field, { marginHorizontal: width / 16 - 24, flexDirection: "row", marginVertical: 10 }]}>
                        <View style={{ height: 38, width: 29 }}>
                            <View style={{ marginVertical: 6 }}>
                                <Image style={{ position: 'relative' }} source={img3} />
                                <Text style={[styles.circleTxt, { position: 'absolute' }]}>06</Text>
                                <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.InnerTxt}>Food Station</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
    const ModalADFWStudio = () => (
        <View style={{ backgroundColor: "rgba(219, 219, 219, 0.85)", height: 230, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: width / 1 - 32, height: 203, borderRadius: 10 }} source={ADFWStudio} resizeMode='stretch' />
                </View>
                <View style={{ position: 'absolute' }} >
                    <TouchableOpacity onPress={toggleModal6}>
                        <View style={[styles.box, { marginHorizontal: width / 1 - 63, width: width / 32 + 20 }]}>
                            <Text style={styles.cross}>X</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View >
                    <View style={[styles.field, { marginHorizontal: width / 16 - 24, flexDirection: "row", marginVertical: 10 }]}>
                        <View style={{ height: 38, width: 29 }}>
                            <View style={{ marginVertical: 6 }}>
                                <Image style={{ position: 'relative' }} source={img3} />
                                <Text style={[styles.circleTxt, { position: 'absolute' }]}>07</Text>
                                <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.InnerTxt}>ADFW Studio</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
    const ModalCapitalAvenue = () => (
        <View style={{ backgroundColor: "rgba(219, 219, 219, 0.85)", height: 230, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: width / 1 - 32, height: 203, borderRadius: 10 }} source={ADFWCapitalAvenue} resizeMode='stretch' />
                </View>
                <View style={{ position: 'absolute' }} >
                    <TouchableOpacity onPress={toggleModal7}>
                        <View style={[styles.box, { marginHorizontal: width / 1 - 63, width: width / 32 + 20 }]}>
                            <Text style={styles.cross}>X</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View >
                    <View style={[styles.field, { marginHorizontal: width / 16 - 24, flexDirection: "row", marginVertical: 10 }]}>
                        <View style={{ height: 38, width: 29 }}>
                            <View style={{ marginVertical: 6 }}>
                                <Image style={{ position: 'relative' }} source={img3} />
                                <Text style={[styles.circleTxt, { position: 'absolute' }]}>08</Text>
                                <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.InnerTxt}>Capital Avenue</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
    const ModalExitFalcon = () => (
        <View style={{ backgroundColor: "rgba(219, 219, 219, 0.85)", height: 230, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: width / 1 - 32, height: 203, borderRadius: 10 }} source={ExitFalcon} resizeMode='stretch' />
                </View>
                <View style={{ position: 'absolute' }} >
                    <TouchableOpacity onPress={toggleModal8}>
                        <View style={[styles.box, { marginHorizontal: width / 1 - 63, width: width / 32 + 20 }]}>
                            <Text style={styles.cross}>X</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View >
                    <View style={[styles.field, { marginHorizontal: width / 16 - 24, flexDirection: "row", marginVertical: 10 }]}>
                        <View style={{ height: 38, width: 29 }}>
                            <View style={{ marginVertical: 6 }}>
                                <Image style={{ position: 'relative' }} source={img3} />
                                <Text style={[styles.circleTxt, { position: 'absolute' }]}>09</Text>
                                <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.InnerTxt}>Exit to Falcon Squre</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )


    const handlePress = () => {
        navigation.navigate('Home')
    }

    const { width, height } = useWindowDimensions()
    return (
        <ScrollView style={{ backgroundColor: '#F4F4F4' }}>
            <SafeAreaView>
                <StatusBar barStyle='dark-content' backgroundColor="#FFF" />
                <View>
                    <Image source={img1} style={{ width: width > 500 ? 400 : '100%', height: height / 4 + 18, }} resizeMode='stretch' />
                    <View>
                        <TouchableOpacity onPress={handlePress}>
                            <Image source={ArrowLeft} style={{ height: height / 34 - 2, bottom: 170, marginHorizontal: 10, position: 'absolute' }} resizeMode='stretch' />
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Image style={{ marginHorizontal: width / 16, marginVertical: 8 }} source={img2} resizeMode='stretch' />
                </View>

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ marginHorizontal: width / 16 }}>
                        <Text style={styles.mainTxt}>ADFW’s signature outdoor marketplace and showcase. An energetic and vibrant meeting hub – Capital Square hosts buzzy social events and spaces like UrbanX, ADFW Live, Food Zones as well as Pavillions showcasing partners, sponsors and media.</Text>
                    </View>
                </View>

                <View style={{ marginHorizontal: width / 16 }}>
                    <Text style={styles.locationTxt}>Location:</Text>
                </View>

                <View >
                    <View style={[styles.field, { marginHorizontal: width / 16, flexDirection: "row" }]}>
                        <View style={{ height: 38, width: 29 }}>
                            <View style={{ marginVertical: 6 }}>
                                <Image style={{ position: 'relative' }} source={img3} />
                                <Text style={[styles.circleTxt, { position: 'absolute' }]}>01</Text>
                                <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                            </View>
                        </View>

                        <View style={{ marginHorizontal: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={toggleModal}>
                                <Text style={styles.InnerTxt}>Registration</Text>
                            </TouchableOpacity>
                            <Modal isVisible={isModalVisible}>
                                <ModalContent />
                            </Modal>
                        </View>

                    </View>
                </View>

                <View style={{ marginVertical: 11 }}>
                    <View style={[styles.field, { marginHorizontal: width / 16, flexDirection: "row" }]}>
                        <View style={{ height: 38, width: 29 }}>
                            <View style={{ marginVertical: 6 }}>
                                <Image style={{ position: 'relative' }} source={img3} />
                                <Text style={[styles.circleTxt, { position: 'absolute' }]}>02</Text>
                                <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={toggleModal1}>
                                <Text style={styles.InnerTxt}>DED & ADGM Pavilion</Text>
                            </TouchableOpacity>
                            <Modal isVisible={isModalVisible1}>
                                <ModalPavilion />
                            </Modal>
                        </View>
                    </View>
                </View>

                <View>
                    <View style={[styles.field, { marginHorizontal: width / 16, flexDirection: "row" }]}>
                        <View style={{ height: 38, width: 29 }}>
                            <View style={{ marginVertical: 6 }}>
                                <Image style={{ position: 'relative' }} source={img3} />
                                <Text style={[styles.circleTxt, { position: 'absolute' }]}>03</Text>
                                <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={toggleModal2}>
                                <Text style={styles.InnerTxt}>Sponsors Suites</Text>
                            </TouchableOpacity>
                            <Modal isVisible={isModalVisible2}>
                                <ModalSponsor />
                            </Modal>
                        </View>
                    </View>
                </View>

                <View style={{ marginVertical: 11 }}>
                    <View style={[styles.field, { marginHorizontal: width / 16, flexDirection: "row" }]}>
                        <View style={{ height: 38, width: 29 }}>
                            <View style={{ marginVertical: 6 }}>
                                <Image style={{ position: 'relative' }} source={img3} />
                                <Text style={[styles.circleTxt, { position: 'absolute' }]}>04</Text>
                                <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={toggleModal3}>
                                <Text style={styles.InnerTxt}>ADFW Live</Text>
                            </TouchableOpacity>
                            <Modal isVisible={isModalVisible3}>
                                <ModalADFW />
                            </Modal>
                        </View>
                    </View>
                </View>

                <View>
                    <View style={[styles.field, { marginHorizontal: width / 16, flexDirection: "row" }]}>
                        <View style={{ height: 38, width: 29 }}>
                            <View style={{ marginVertical: 6 }}>
                                <Image style={{ position: 'relative' }} source={img3} />
                                <Text style={[styles.circleTxt, { position: 'absolute' }]}>05</Text>
                                <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={toggleModal4}>
                                <Text style={styles.InnerTxt}>ADFW Arena</Text>
                            </TouchableOpacity>
                            <Modal isVisible={isModalVisible4}>
                                <ModalADFWArena />
                            </Modal>

                        </View>
                    </View>
                </View>

                <View style={{ marginVertical: 11 }}>
                    <View style={[styles.field, { marginHorizontal: width / 16, flexDirection: "row" }]}>
                        <View style={{ height: 38, width: 29 }}>
                            <View style={{ marginVertical: 6 }}>
                                <Image style={{ position: 'relative' }} source={img3} />
                                <Text style={[styles.circleTxt, { position: 'absolute' }]}>06</Text>
                                <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={toggleModal5}>
                                <Text style={styles.InnerTxt}>Food Stations</Text>
                            </TouchableOpacity>
                            <Modal isVisible={isModalVisible5}>
                                <ModalFoodStudio />
                            </Modal>
                        </View>
                    </View>
                </View>

                <View>
                    <View style={[styles.field, { marginHorizontal: width / 16, flexDirection: "row" }]}>
                        <View style={{ height: 38, width: 29 }}>
                            <View style={{ marginVertical: 6 }}>
                                <Image style={{ position: 'relative' }} source={img3} />
                                <Text style={[styles.circleTxt, { position: 'absolute' }]}>07</Text>
                                <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={toggleModal6}>
                                <Text style={styles.InnerTxt}>ADFW Studio</Text>
                            </TouchableOpacity>
                            <Modal isVisible={isModalVisible6}>
                                <ModalADFWStudio />
                            </Modal>

                        </View>
                    </View>
                </View>

                <View style={{ marginVertical: 11 }}>
                    <View style={[styles.field, { marginHorizontal: width / 16, flexDirection: "row" }]}>
                        <View style={{ height: 38, width: 29 }}>
                            <View style={{ marginVertical: 6 }}>
                                <Image style={{ position: 'relative' }} source={img3} />
                                <Text style={[styles.circleTxt, { position: 'absolute' }]}>08</Text>
                                <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={toggleModal7}>
                                <Text style={styles.InnerTxt}>Capital Avenue</Text>
                            </TouchableOpacity>
                            <Modal isVisible={isModalVisible7}>
                                <ModalCapitalAvenue />
                            </Modal>
                        </View>
                    </View>
                </View>

                <View>
                    <View style={[styles.field, { marginHorizontal: width / 16, flexDirection: "row" }]}>
                        <View style={{ height: 38, width: 29 }}>
                            <View style={{ marginVertical: 6 }}>
                                <Image style={{ position: 'relative' }} source={img3} />
                                <Text style={[styles.circleTxt, { position: 'absolute' }]}>09</Text>
                                <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={toggleModal8}>
                                <Text style={styles.InnerTxt}>Exit to Falcon Square</Text>
                            </TouchableOpacity>
                            <Modal isVisible={isModalVisible8}>
                                <ModalExitFalcon />
                            </Modal>
                        </View>
                    </View>
                </View>

                <View style={{ marginVertical: 30 }}></View>

            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainTxt: {
        color: '#2E2E2E',
        fontFamily: 'Isidora Sans',
        fontSize: 16,
        lineHeight: 21,
        fontWeight: '500',
        marginVertical: 2,
        textAlign: 'justify'
    },
    locationTxt: {
        fontSize: 16,
        fontFamily: 'Isidora Sans',
        lineHeight: 21,
        fontWeight: '700',
        color: '#1B6AD5',
        marginVertical: 12
    },
    field: {
        height: 55,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        backgroundColor: '#FFF',
        borderLeftColor: '#1B6AD5',
        borderRightColor: '#1B6AD5',
        borderTopColor: '#1B6AD5',
        borderBottomColor: '#1B6AD5',
        borderWidth: 1,

    },
    circleTxt: {
        textAlign: 'center',
        width: 21,
        height: 18,
        backgroundColor: '#FFF',
        borderRadius: 100,
        fontFamily: 'Isidora Sans',
        fontSize: 11,
        fontWeight: '600',
        color: 'black',
        marginHorizontal: 4,
        marginVertical: 6
    },
    InnerTxt: {
        fontSize: 16,
        fontFamily: 'Isidora Sans',
        color: '#002646',
        fontWeight: '600'
    },

    InnerTxt: {
        fontSize: 16,
        fontFamily: 'Isidora Sans',
        color: '#002646',
        fontWeight: '600'
    },
    box: {
        height: 32,
        borderRadius: 3,
        backgroundColor: '#FFF',
    },
    cross: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        fontFamily: 'Isidora Sans',
        marginHorizontal: 10,
        marginVertical: 3
    }
})

export default CapitalSqure