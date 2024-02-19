import { View, Text, ScrollView, SafeAreaView, useWindowDimensions, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import bgImg from '../../images/FalconSqureImg/bgImg.png'
import Img1 from '../../images/FalconSqureImg/Img1.png'
import img3 from '../../images/CapitalSqureImg/img3.png'
import Vector from '../../images/CapitalSqureImg/Vector.png'
import ArrowLeft from '../../images/SpeakerImg/ArrowLeft.png'
import registration from '../../images/FalconSqureImg/Registration.jpg'
import startupCampus from '../../images/FalconSqureImg/startupCampus.jpg'
import VentureStage from '../../images/FalconSqureImg/VentureStage.jpg'
import ExitCapitalSquare from '../../images/FalconSqureImg/ExitCapitalSquare.jpg'
import ADGMBuilding from '../../images/FalconSqureImg/ADGMBuilding.jpg'
import Modal from 'react-native-modal';


const FalconSqure = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible1, setModalVisible1] = useState(false);
    const [isModalVisible2, setModalVisible2] = useState(false);
    const [isModalVisible3, setModalVisible3] = useState(false);
    const [isModalVisible4, setModalVisible4] = useState(false);

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


    const handleSubmit = () => {
        navigation.navigate('Home')
    }
    const ModalContent = () => (
        <View style={{ backgroundColor: "rgba(219, 219, 219, 0.85)", height: 230, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: width / 1 - 32, height: 203, borderRadius: 10 }} source={registration} resizeMode='stretch' />
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

    const ModalStartupCampus = () => (
        <View style={{ backgroundColor: "rgba(219, 219, 219, 0.85)", height: 230, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: width / 1 - 32, height: 203, borderRadius: 10 }} source={startupCampus} resizeMode='stretch' />
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
                            <Text style={styles.InnerTxt}>Startup Campus</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )

    const ModalADGM = () => (
        <View style={{ backgroundColor: "rgba(219, 219, 219, 0.85)", height: 230, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: width / 1 - 32, height: 203, borderRadius: 10 }} source={ADGMBuilding} resizeMode='stretch' />
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
                            <Text style={styles.InnerTxt}>ADGM Building Entrance</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )

    const ModalVentureStage = () => (
        <View style={{ backgroundColor: "rgba(219, 219, 219, 0.85)", height: 230, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: width / 1 - 32, height: 203, borderRadius: 10 }} source={VentureStage} resizeMode='stretch' />
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
                            <Text style={styles.InnerTxt}>Venture Stage</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )

    const ModalExitCS = () => (
        <View style={{ backgroundColor: "rgba(219, 219, 219, 0.85)", height: 230, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: width / 1 - 32, height: 203, borderRadius: 10 }} source={ExitCapitalSquare} resizeMode='stretch' />
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
                            <Text style={styles.InnerTxt}>Exit to capital Squre</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )


    const { width, height } = useWindowDimensions()
    return (
        <ScrollView style={{ width: width, height: height, backgroundColor: "#F4F4F4" }}>
            <SafeAreaView>
                <StatusBar barStyle='dark-content' backgroundColor="#FFF" />
                <View>
                    <View>
                        <Image source={bgImg} resizeMode='stretch' style={{ width: width, height: 221 }} />
                        <View>
                            <TouchableOpacity onPress={handleSubmit}>
                                <Image source={ArrowLeft} style={{ height: height / 34 - 2, bottom: 170, marginHorizontal: 10, position: 'absolute' }} resizeMode='stretch' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.container, { marginTop: 30 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Image source={Img1} resizeMode='stretch' />
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 9.86 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Text style={styles.mainTxt}>Situated in the North Plaza of the ADGM Building, this new edition of the Abu Dhabi Finance Week will feature conversations around the buzzing startup ecosystem of Abu Dhabi with a startup stage showcasing new ideas, upcoming innovations and expert speakers. The Falcon Square will be brought to life with food trucks, live entertainment and a host of interactive activations.</Text>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 19.47 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Text style={styles.txtLocation}>Location:</Text>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 10 }]}>
                        <View style={[styles.field, { flexDirection: "row", width: width / 1 - 32 }]}>
                            <View style={{ height: 38, width: 29 }}>
                                <View style={{ marginVertical: 6 }}>
                                    <Image style={{ position: 'relative' }} source={img3} />
                                    <Text style={[styles.circleTxt, { position: 'absolute' }]}>01</Text>
                                    <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                                </View>
                            </View>
                            <View style={styles.falconContainer}>
                                <TouchableOpacity onPress={toggleModal}>
                                    <Text style={styles.InnerTxt}>Registration</Text>
                                </TouchableOpacity>
                                <Modal isVisible={isModalVisible}>
                                    <ModalContent />
                                </Modal>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 10 }]}>
                        <View style={[styles.field, { flexDirection: "row", width: width / 1 - 32 }]}>
                            <View style={{ height: 38, width: 29 }}>
                                <View style={{ marginVertical: 6 }}>
                                    <Image style={{ position: 'relative' }} source={img3} />
                                    <Text style={[styles.circleTxt, { position: 'absolute' }]}>02</Text>
                                    <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                                </View>
                            </View>
                            <View style={styles.falconContainer}>
                                <TouchableOpacity onPress={toggleModal1}>
                                    <Text style={styles.InnerTxt}>Startup Campus</Text>
                                </TouchableOpacity>
                                <Modal isVisible={isModalVisible1}>
                                    <ModalStartupCampus />
                                </Modal>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 10 }]}>
                        <View style={[styles.field, { flexDirection: "row", width: width / 1 - 32 }]}>
                            <View style={{ height: 38, width: 29 }}>
                                <View style={{ marginVertical: 6 }}>
                                    <Image style={{ position: 'relative' }} source={img3} />
                                    <Text style={[styles.circleTxt, { position: 'absolute' }]}>03</Text>
                                    <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                                </View>
                            </View>
                            <View style={styles.falconContainer}>
                                <TouchableOpacity onPress={toggleModal2}>
                                    <Text style={styles.InnerTxt}>ADGM Building Entrance</Text>
                                </TouchableOpacity>
                                <Modal isVisible={isModalVisible2}>
                                    <ModalADGM />
                                </Modal>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 10 }]}>
                        <View style={[styles.field, { flexDirection: "row", width: width / 1 - 32 }]}>
                            <View style={{ height: 38, width: 29 }}>
                                <View style={{ marginVertical: 6 }}>
                                    <Image style={{ position: 'relative' }} source={img3} />
                                    <Text style={[styles.circleTxt, { position: 'absolute' }]}>04</Text>
                                    <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                                </View>
                            </View>
                            <View style={styles.falconContainer}>
                                <TouchableOpacity onPress={toggleModal3}>
                                    <Text style={styles.InnerTxt}>Venture Stage</Text>
                                </TouchableOpacity>
                                <Modal isVisible={isModalVisible3}>
                                    <ModalVentureStage />
                                </Modal>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 10 }]}>
                        <View style={[styles.field, { flexDirection: "row", width: width / 1 - 32 }]}>
                            <View style={{ height: 38, width: 29 }}>
                                <View style={{ marginVertical: 6 }}>
                                    <Image style={{ position: 'relative' }} source={img3} />
                                    <Text style={[styles.circleTxt, { position: 'absolute' }]}>05</Text>
                                    <Image source={Vector} style={{ marginHorizontal: 8 }} resizeMode='stretch' />
                                </View>
                            </View>
                            <View style={styles.falconContainer}>
                                <TouchableOpacity onPress={toggleModal4}>
                                    <Text style={styles.InnerTxt}>Exit to Capital Square</Text>
                                </TouchableOpacity>
                                <Modal isVisible={isModalVisible4}>
                                    <ModalExitCS />
                                </Modal>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: 104 }}></View>

                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center"
    },
    mainTxt: {
        color: "#2E2E2E",
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 21,
        fontFamily: 'Isidora Sans'
    },
    txtLocation: {
        color: '#1B6AD5',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 21,
        fontFamily: 'Isidora Sans'
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
        elevation: 1,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
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
    falconContainer: {
        marginHorizontal: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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

export default FalconSqure