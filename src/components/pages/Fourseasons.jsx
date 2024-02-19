import { View, Text, ScrollView, SafeAreaView, useWindowDimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import Img2 from '../../images/FalconSqureImg/Img2.png'
import FourBgImg from '../../images/FalconSqureImg/FourBgImg.png'
import ArrowLeft from '../../images/SpeakerImg/ArrowLeft.png'
import { StatusBar } from 'react-native'
import img3 from '../../images/CapitalSqureImg/img3.png'
import Vector from '../../images/CapitalSqureImg/Vector.png'
import Registration from '../../images/FourSeasonImg/Registration.jpg'
import Stage from '../../images/FourSeasonImg/Stage.jpg'
import Modal from 'react-native-modal';





const Fourseasons = ({ navigation }) => {
    const handlesubmit = () => {
        navigation.navigate('Home')
    }
    const { width, height } = useWindowDimensions()

    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible1, setModalVisible1] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }
    const toggleModal1 = () => {
        setModalVisible1(!isModalVisible1);
    }

    const Modalregistration = () => (
        <View style={{ backgroundColor: "rgba(219, 219, 219, 0.85)", height: 230, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: width / 1 - 32, height: 203, borderRadius: 10 }} source={Registration} resizeMode='stretch' />
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
    const ModalMainStage = () => (
        <View style={{ backgroundColor: "rgba(219, 219, 219, 0.85)", height: 230, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: width / 1 - 32, height: 203, borderRadius: 10 }} source={Stage} resizeMode='stretch' />
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
                            <Text style={styles.InnerTxt}>Main Stage</Text>
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
                        <Image source={FourBgImg} resizeMode='stretch' style={{ width: width, marginTop: -20 }} />
                        <View style={{ position: 'absolute' }}>
                            <View>
                                <View>
                                    <TouchableOpacity onPress={handlesubmit}>
                                        <Image source={ArrowLeft} style={{ height: height / 34 - 2, marginVertical: height / 29, left: 13 }} resizeMode='stretch' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.container, {}]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Image source={Img2} resizeMode='stretch' />
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 9.86 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Text style={styles.mainTxt}>Partner events and key events happening on the periphery of Abu Dhabi Finance Week will be held within this premier venue including Women in Finance and the Global Financial Regulators Summit.</Text>
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
                                    <Modalregistration />
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
                                    <Text style={styles.InnerTxt}>Main Stage</Text>
                                </TouchableOpacity>
                                <Modal isVisible={isModalVisible1}>
                                    <ModalMainStage />
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

export default Fourseasons