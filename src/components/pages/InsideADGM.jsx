import { View, Text, ScrollView, SafeAreaView, useWindowDimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import bgImg1 from '../../images/FalconSqureImg/bgImg1.png'
import img3 from '../../images/CapitalSqureImg/img3.png'
import Vector from '../../images/CapitalSqureImg/Vector.png'
import ArrowLeft from '../../images/SpeakerImg/ArrowLeft.png'
import { StatusBar } from 'react-native'
import registration from '../../images/InsideADGMImg/welcome.jpg'
import ExecutiveStage from '../../images/InsideADGMImg/ExecutiveStage.jpg'
import Seating from '../../images/InsideADGMImg/Seating.jpg'
import AuditoriumStage from '../../images/InsideADGMImg/AuditoriumStage.jpg'
import Modal from 'react-native-modal';


const InsideADGM = ({ navigation }) => {
    const { width, height } = useWindowDimensions()
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible1, setModalVisible1] = useState(false);
    const [isModalVisible2, setModalVisible2] = useState(false);
    const [isModalVisible3, setModalVisible3] = useState(false);
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
                            <Text style={styles.InnerTxt}>Welcome Reception</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )

    const ModalExecutive = () => (
        <View style={{ backgroundColor: "rgba(219, 219, 219, 0.85)", height: 230, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: width / 1 - 32, height: 203, borderRadius: 10 }} source={ExecutiveStage} resizeMode='stretch' />
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
                            <Text style={styles.InnerTxt}>The Executive Stage</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
    const ModalSeating = () => (
        <View style={{ backgroundColor: "rgba(219, 219, 219, 0.85)", height: 230, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: width / 1 - 32, height: 203, borderRadius: 10 }} source={Seating} resizeMode='stretch' />
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
                            <Text style={styles.InnerTxt}>Seating</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )

    const ModalAuditorium = () => (
        <View style={{ backgroundColor: "rgba(219, 219, 219, 0.85)", height: 230, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: width / 1 - 32, height: 203, borderRadius: 10 }} source={AuditoriumStage} resizeMode='stretch' />
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
                            <Text style={styles.InnerTxt}>ADFW Auditorium Stage</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )



    return (
        <ScrollView style={{ width: width, height: height, backgroundColor: "#F4F4F4" }}>
            <SafeAreaView>
                <StatusBar barStyle='dark-content' backgroundColor="#FFF" />

                <View>
                    <View>
                        <Image source={bgImg1} resizeMode='stretch' style={{ width: width, height: 221 }} />
                        <TouchableOpacity onPress={handleSubmit}>
                            <Image source={ArrowLeft} style={{ height: height / 34 - 2, bottom: 170, marginHorizontal: 10, position: 'absolute' }} resizeMode='stretch' />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.container, { marginTop: 30 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Text style={styles.insideTxt}>Inside <Text style={{ color: '#1B6AD5' }}>ADGM</Text> </Text>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 9.86 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Text style={styles.mainTxt}>Inside the building, executive pass holders will have the opportunity to network in the Executive Lounge on the 3rd floor, which will also host key events through the week. On the 4th floor, the ADFW Auditorium will run key events including T.R.I., AI Abu Dhabi and Risk 4.0 Forum.</Text>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 30 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Text style={styles.txtLocation}>The Executive Lounge:</Text>
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
                                    <Text style={styles.InnerTxt}>Welcome Reception</Text>
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
                                    <Text style={styles.InnerTxt}>The Executive Stage</Text>
                                </TouchableOpacity>
                                <Modal isVisible={isModalVisible1}>
                                    <ModalExecutive />
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
                                    <Text style={styles.InnerTxt}>Seating</Text>
                                </TouchableOpacity>
                                <Modal isVisible={isModalVisible2}>
                                    <ModalSeating />
                                </Modal>
                            </View>
                        </View>
                    </View>


                    <View style={[styles.container, { marginTop: 30 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Text style={styles.txtLocation}>ADFW Auditorium:</Text>
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
                                    <Text style={styles.InnerTxt}>ADFW Auditorium Stage</Text>
                                </TouchableOpacity>
                                <Modal isVisible={isModalVisible3}>
                                    <ModalAuditorium />
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
    insideTxt: {
        color: '#002646',
        fontFamily: 'Isidora Sans',
        fontSize: 22,
        fontWeight: '700',
        lineHeight: 21
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

export default InsideADGM