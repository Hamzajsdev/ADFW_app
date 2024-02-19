import { View, Text, ScrollView, SafeAreaView, useWindowDimensions, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import ArrowLeft from '../../images/SpeakerImg/ArrowLeft.png'
import { Image } from 'react-native'


const Notification = ({ navigation }) => {
    const handlepress = () => {
        navigation.navigate('Home')
    }


    const { width, height } = useWindowDimensions()
    return (
        <ScrollView style={{ backgroundColor: '#F4F4F4', width: width, height: height }}>
            <SafeAreaView>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor="#002646"
                />
                <View style={[styles.SpeakerHead, { width: width, height: height / 10 + 1 }]}>
                    <TouchableOpacity onPress={handlepress}>
                        <Image source={ArrowLeft} style={{ height: height / 34 - 2, marginVertical: height / 29 }} resizeMode='stretch' />
                    </TouchableOpacity>

                    <Text style={[styles.txtSpeaker, { marginHorizontal: 52, marginVertical: height / 29 - 5, fontWeight: '700' }]}>Notifications</Text>
                </View>

                <View style={styles.container}>
                    <View style={{ width: width / 1 - 32 }}>
                        <Text style={styles.txt}>Today</Text>
                    </View>
                </View>


                <View style={[styles.fieldTxt, { width: width}]}>
                    <View style={{ flexDirection: 'row', width: width / 1 - 32, display:"flex", justifyContent:'space-between'  }}>
                        <View style={[styles.innerTxt, { width: width / 2 + 80, }]}>
                            <Text style={styles.mainTxt}>Asset Abu Dhabi: Panel discussion will start soon!!!</Text>
                        </View>

                        <View style={styles.time}>
                            <Text style={styles.mainTime}>02:37 PM</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.borderLine}></Text>
                </View>

                <View style={{ height: 65, bottom: 15 }}>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center", paddingTop: 10, paddingBottom: 10 }}>
                        <View style={{ width: width / 1 - 32, flexDirection: "row", display: "flex", justifyContent: "space-between" }}>
                            <View style={{ width: width / 2 + 80 }}>
                                <Text style={styles.mainheadTxt}>Entertainment will start within 15mins @Capital Square!!!!!</Text>
                            </View>
                            <View style={{ display: "flex", justifyContent: 'center' }}>
                                <Text style={styles.mainTimeTxt}>02:25 PM</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.borderLine}></Text>
                </View>

                <View style={{ height: 65, bottom: 15 }}>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center", paddingTop: 10, paddingBottom: 10 }}>
                        <View style={{ width: width / 1 - 32, flexDirection: "row", display: "flex", justifyContent: "space-between" }}>
                            <View style={{ width: width / 2 + 80 }}>
                                <Text style={styles.mainheadTxt}>Panel Discussion will start @Innovation Square!!!!!</Text>
                            </View>
                            <View style={{ display: "flex", justifyContent: 'center' }}>
                                <Text style={styles.mainTimeTxt}>10:30 AM</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.borderLine}></Text>
                </View>

                <View style={styles.container}>
                    <View style={{ width: width / 1 - 32 }}>
                        <Text style={styles.txt}>Yesterday</Text>
                    </View>
                </View>


                <View style={{ height: 65, bottom: 15 }}>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center", paddingTop: 10, paddingBottom: 10 }}>
                        <View style={{ width: width / 1 - 32, flexDirection: "row", display: "flex", justifyContent: "space-between" }}>
                            <View style={{ width: width / 2 + 80 }}>
                                <Text style={styles.mainheadTxt}>Asset Abu Dhabi: Panel discussion will start soon!!!</Text>
                            </View>
                            <View style={{ display: "flex", justifyContent: 'center' }}>
                                <Text style={styles.mainTimeTxt}>1 day ago</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.borderLine}></Text>
                </View>

                <View style={{ height: 65, bottom: 15 }}>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center", paddingTop: 10, paddingBottom: 10 }}>
                        <View style={{ width: width / 1 - 32, flexDirection: "row", display: "flex", justifyContent: "space-between" }}>
                            <View style={{ width: width / 2 + 80 }}>
                                <Text style={styles.mainheadTxt}>Entertainment will start within 15mins @Capital Square!!!!!</Text>
                            </View>
                            <View style={{ display: "flex", justifyContent: 'center' }}>
                                <Text style={styles.mainTimeTxt}>1 day ago</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.borderLine}></Text>
                </View>

                <View style={{ height: 65, bottom: 15 }}>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center", paddingTop: 10, paddingBottom: 10 }}>
                        <View style={{ width: width / 1 - 32, flexDirection: "row", display: "flex", justifyContent: "space-between" }}>
                            <View style={{ width: width / 2 + 80 }}>
                                <Text style={styles.mainheadTxt}>Panel Discussion will start @Innovation Square!!!!!</Text>
                            </View>
                            <View style={{ display: "flex", justifyContent: 'center' }}>
                                <Text style={styles.mainTimeTxt}>1 day ago</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.borderLine}></Text>
                </View>



            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
    container: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30
    },
    txt: {
        color: "#1B6AD5",
        fontFamily: 'Isidora Sans',
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 0.35
    },
    fieldTxt: {
        height: 65,
        backgroundColor: 'rgba(27, 106, 213, 0.10)',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 16,
        paddingRight: 16,
        bottom: 15
    },
    mainTxt: {
        color: '#002646',
        fontFamily: 'Isidora Sans',
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 0.35
    },
    time: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainTime: {
        color: '#2E2E2E',
        fontFamily: 'Isidora Sans',
        fontSize: 11,
        fontWeight: '600',
        letterSpacing: 0.35,
        opacity: 0.5
    },
    borderLine: {
        height: 1,
        backgroundColor: '#2E2E2E',
        opacity: 0.3,
        bottom: 15
    },
    mainheadTxt: {
        color: '#2E2E2E',
        fontFamily: 'Isidora Sans',
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 0.35
    },
    mainTimeTxt: {
        color: '#2E2E2E',
        fontFamily: 'Isidora Sans',
        fontSize: 11,
        fontWeight: '600',
        letterSpacing: 0.35,
        opacity: 0.5
    }
})

export default Notification