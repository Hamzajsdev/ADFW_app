import { View, Text, ScrollView, SafeAreaView, StyleSheet, useWindowDimensions, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import ArrowLeft from '../../images/SpeakerImg/ArrowLeft.png'
import search from '../../images/ChatImg/search.png'
import dotIcon from '../../images/ConversationImg/dot.png'
import mseg from '../../images/ConversationImg/mseg.png'
import Tick from '../../images/ConversationImg/Tick.png'
import mseg2 from '../../images/ConversationImg/mseg2.png'
import user from '../../images/ConversationImg/user.png'
import galleryImg from '../../images/ConversationImg/galleryImg.png'
import camera from '../../images/ConversationImg/camera.png'
import send from '../../images/ConversationImg/send.png'

const ConversationAttach = ({navigation}) => {
    const handlepress = () => {
        navigation.navigate('Conversation')
    }
   
    const handleImageLoad = () => {
        navigation.navigate('ContactShare')
    }

    
    const { width, height } = useWindowDimensions()
    return (
        <ScrollView style={{ backgroundColor: '#F4F4F4' }}>
            <SafeAreaView>
                <View style={[styles.SponsorHead, { width: width, height: height / 10 + 1 }]}>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: width / 1 - 32, }}>
                            <View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: "row", display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={handlepress}>
                                        <Image style={{ marginVertical: 6 }} source={ArrowLeft} resizeMode='stretch' />
                                    </TouchableOpacity>
                                    <View style={styles.box}>
                                        <Text style={styles.BoxTxt}>TS</Text>
                                    </View>
                                    <Text style={styles.chatTxt}>H.R.H. Prince Khaled...</Text>
                                </View>
                                <View style={{ flexDirection: "row", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ right: 11 }} source={search} resizeMode='stretch' />
                                    <Image style={{ right: 4 }} source={dotIcon} resizeMode='stretch' />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: width / 1 - 32, marginTop: 24 }}>
                        <Image source={mseg} style={{ width: width / 1 - 30 }} resizeMode='stretch' />
                        <View style={[styles.innerTxt, { width: width / 2 + 70 }]}>
                            <Text style={styles.mainTxt}>Hello, How are you doing?</Text>
                        </View>
                    </View>
                </View>

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <View style={{ width: width / 1 - 48, display: 'flex', alignItems: 'flex-end' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={Tick} style={{ top: 4, right: 6 }} resizeMode='stretch' />
                            <Text style={styles.time}>11:20 am</Text>
                        </View>
                    </View>
                </View>


                <View style={styles.mainContainer}>
                    <View style={{ width: width / 1 - 32 }}>
                        <View style={styles.containFluid}>
                            <View>
                                <Image source={mseg2} resizeMode='stretch' />
                                <View style={[styles.fluid, { width: width / 2, }]}>
                                    <Text style={styles.sendTxt}>Hi Arnaud!{'\n'}How are you doing?</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 6 }}>
                                    <Image source={Tick} style={{ top: 4 }} resizeMode='stretch' />
                                    <Text style={[styles.time, { left: 6 }]}>11:25 am</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: width / 1 - 32, marginTop: 12 }}>
                        <Image source={mseg} style={{ width: width / 1 - 70 }} resizeMode='stretch' />
                        <View style={[styles.innerTxt, { width: width / 2 + 70 }]}>
                            <Text style={styles.mainTxt}>Hope you are attending event tomorrow</Text>
                        </View>
                    </View>
                </View>

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <View style={{ width: width / 2 + 70, display: 'flex', alignItems: 'flex-end' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Image source={Tick} style={{ top: 4, right: 6 }} resizeMode='stretch' />
                            <Text style={styles.time}>11:28 am</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.mainContainer}>
                    <View style={{ width: width / 1 - 32 }}>
                        <View style={styles.containFluid}>
                            <View>
                                <Image source={mseg2} resizeMode='stretch' />
                                <View style={[styles.fluid, { width: width / 2, }]}>
                                    <Text style={styles.sendTxt}>yes sure!</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 6 }}>
                                    <Image source={Tick} style={{ top: 4 }} resizeMode='stretch' />
                                    <Text style={[styles.time, { left: 6 }]}>11:35 am</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: width / 1 - 32, marginTop: 12 }}>
                        <Image source={mseg} style={{ width: width / 1 - 70 }} resizeMode='stretch' />
                        <View style={[styles.innerTxt, { width: width / 2 + 70 }]}>
                            <Text style={styles.mainTxt}>Thank you, see you there!</Text>
                        </View>
                    </View>
                </View>

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <View style={{ width: width / 2 + 70, display: 'flex', alignItems: 'flex-end' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Image source={Tick} style={{ top: 4, right: 6 }} resizeMode='stretch' />
                            <Text style={styles.time}>11:40 am</Text>
                        </View>
                    </View>
                </View>

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:100 }}>
                    <View style={{  width: width / 1 - 32 }}>
                        <View style={{ display: 'flex', alignItems: "flex-end" }}>
                            <View style={[styles.gallery, { width: width / 1 - 90, gap:10 }]}>
                                <View style={[styles.circle, { width: width / 75 + 75 }]}>
                                    <View style={{ display: 'center', alignItems: "center" }}>
                                        <Image source={user} resizeMode='stretch' />
                                        <Text style={styles.userTxt}>Contact</Text>
                                    </View>
                                </View>
                                <View style={[styles.circle1, { width: width / 75 + 75 }]}>
                                    <TouchableOpacity onPress={handleImageLoad}>
                                    <View style={{ display: 'center', alignItems: "center" }}>
                                        <Image source={galleryImg} resizeMode='stretch' />
                                        <Text style={styles.userTxt}>Gallery</Text>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.circle2, { width: width / 75 + 75 }]}>
                                    <View style={{ display: 'center', alignItems: "center" }}>
                                        <Image source={camera} resizeMode='stretch' />
                                        <Text style={styles.userTxt}>Camera</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={[styles.mainContain]}>
                    <View style={{ width: width / 1 - 32 }}>
                        <Text style={styles.type}>Arnaud is typing....</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center",marginTop:10 }}>
                    <View style={{ width: width / 1 - 32 }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ width: width / 2 + 85, height: 45 }}>
                                <View style={[styles.txtArea, { display: 'flex', justifyContent: "center", alignItems: 'center' }]}>
                                    <View style={{ width: width / 2 + 60, flexDirection: 'row', display: "flex", justifyContent: "space-between" }}>
                                        <View style={{ width: width / 2 + 15 }}>
                                            <TextInput style={{fontSize:14, bottom:4}} placeholder='Message' placeholderTextColor="#ADB5BD" />
                                        </View>
                                        <View>
                                            <Image source={send} resizeMode='stretch' />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.plus1, { width: width / 5 - 10, }]}>
                                <Text style={styles.plusTxt}>+</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{marginTop:20}}></View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    SponsorHead: {
        backgroundColor: '#002646',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtSponsor: {
        position: 'absolute',
        fontSize: 22,
        letterSpacing: 0.35,
        fontFamily: 'Isidora Sans',
        color: '#FFF',
    },
    searchField: {
        height: 48,
        borderRadius: 5,
        opacity: 0.5,
        backgroundColor: '#FFF'
    },
    chatTxt: {
        color: '#FFF',
        fontFamily: 'Isidora Sans',
        fontSize: 20,
        fontWeight: '600',
        letterSpacing: 0.35,
        marginHorizontal: 7,
        letterSpacing: 0.35
    },
    box: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#5BA1FF',
        borderLeftColor: '#005AD4',
        borderRightColor: '#005AD4',
        borderTopColor: '#005AD4',
        borderBottomColor: '#005AD4',
        borderWidth: 1,
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        marginHorizontal: 7
    },
    BoxTxt: {
        color: '#002646',
        fontFamily: 'Isidora Sans',
        fontSize: 18,
        fontWeight: '300',
    },
    innerTxt: {
        position: 'absolute',
        marginHorizontal: 36,
        height: 58,
        display: "flex",
        textAlign: 'center',
        justifyContent: "center"
    },
    mainTxt: {
        color: '#FFF',
        fontFamily: 'Montserrat',
        fontSize: 15,
        fontWeight: '500'
    },
    time: {
        color: '#898A8D',
        fontFamily: 'Isidora Sans',
        fontSize: 12,
        fontWeight: '500'
    },
    sendTxt: {
        color: '#002646',
        fontFamily: 'Isidora Sans',
        fontSize: 15,
        fontWeight: '500'
    },
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12
    },
    containFluid: {
        display: 'flex',
        alignItems: 'flex-end'
    },
    fluid: {
        height: 55,
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        marginHorizontal: 11.8,
    },
    type: {
        color: "#ADB5BD",
        fontFamily: 'Montserrat',
        fontSize: 15,
        fontWeight: '400'
    },
    mainContain: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    plus: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        left: 8,
        backgroundColor: '#FFF',
        borderRadius: 10,
        height: 45
        
    },
    plus1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        left: 8,
        backgroundColor: '#E8E9EB',
        borderRadius: 10,
        height: 45
       
    },
    plusTxt: {
        color: "#002646",
        fontFamily: "Montserrat",
        fontSize: 36,
        fontWeight: '200',
        bottom: 4
    },
    txtArea: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        height: 45,
        paddingTop: 10,
    },
    gallery: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#FFF",
        borderRadius: 10,
        height: 100,
        flexDirection: "row"
    },
    circle: {
        height: 75,
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#B93282'
    },
    circle1: {
        height: 75,
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#375A7C'
    },
    circle2: {
        height: 75,
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#00A9CE'
    },
    userTxt: {
        color: '#FFF',
        fontFamily: "Isidora Sans",
        fontSize: 11,
        fontWeight: '500'
    }
})

export default ConversationAttach