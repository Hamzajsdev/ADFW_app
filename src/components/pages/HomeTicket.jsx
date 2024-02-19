import { View, Text, SafeAreaView, useWindowDimensions, StyleSheet, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import btnImg from '../../images/HomeTicketImg/btn.png'
import locate from '../../images/HomeTicketImg/locate.png'
import TicketImg from '../../images/HomeTicketImg/Ticket.png'
import QRCode from '../../images/HomeImg/QRCode.png'


const HomeTicket = () => {
    const { width, height } = useWindowDimensions()
    return (
        <ScrollView style={[styles.container, { width: width, height: height }]}>
        <SafeAreaView >
            <StatusBar backgroundColor='#FFF' barStyle='dark-content' />
            <View>

                <View style={{display:'flex', justifyContent:"center", alignItems:"center"}}>
                    <View style={{width:width/1-32, marginTop:60}}>
                        <View style={[styles.ticketCard,{height:height/1.64}]}>
                        <Image source={TicketImg} resizeMode='stretch' style={{width:width/1-64, height:height/1.75, borderRadius:20}}/>
                        <Image source={QRCode} resizeMode='cover' style={{position:'absolute', width:width/6, height:62, left:32, top:325}}/>
                        <View style={{position:"absolute", left:32, top:160, gap:30 }}>
                            <Text style={styles.ticketTxt}>Jonathan Samules</Text>
                            <Text style={styles.scetxt}>CEO</Text>
                            <Text style={styles.devTxt}>DeveloperStudio</Text>
                        </View>
                        </View>
                    </View>
                </View>

                <View style={[styles.containerFluid, { marginTop: 62 }]}>
                    <View style={{ width: width / 1 - 32}}>
                        <View style={styles.Card}>
                            <View style={styles.lineBorder}>
                                <View style={{ width: width / 2 + 100 }}>
                                    <View style={styles.btncontain}>
                                        <Image source={btnImg} resizeMode='stretch' style={{ width: width / 2 + 100, height: 50 }} />
                                    </View>
                                    <View style={styles.txtContainer}>
                                        <Text style={styles.mainTxt}>29th November</Text>
                                    </View>
                                    <View style={styles.borderLiner}>
                                        <Text style={styles.border}></Text>
                                    </View>


                                    <View style={[styles.boxContainer,{marginTop:11}]}>
                                        <Text style={[styles.txtBox, { width: width / 2 - 20 }]}>Fintech Abu Dhabi / Blockchain Abu Dhabi</Text>
                                        <View style={[styles.ADFWBox, { width: width / 4 + 10 }]}>
                                            <View style={{flexDirection:'row', gap:6}}>
                                                <Image source={locate} resizeMode='stretch' style={{top:5}}/>
                                                <Text style={styles.innerADFWTxt}>ADFW Arena <Text style={{fontSize:9}}>(Capital square)</Text></Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={[styles.boxContainer,{marginTop:20}]}>
                                        <Text style={[styles.txtBox, { width: width / 2 - 20 }]}>AI Abu Dhabi /{'\n'}Risk 4.0</Text>
                                        <View style={[styles.ADFWBox, { width: width / 4 + 10 }]}>
                                            <View style={{flexDirection:'row', gap:6}}>
                                                <Image source={locate} resizeMode='stretch' style={{top:10}}/>
                                                <Text style={[styles.innerADFWTxt,{ width:65}]}>Auditorium<Text style={{fontSize:9}}> (4th Floor ADGM Building)</Text></Text>
                                            </View>
                                        </View>
                                    </View>


                                    <View style={[styles.boxContainer,{marginTop:20}]}>
                                        <Text style={[styles.txtBox, { width: width / 2 - 20 }]}>Urban Experience <Text style={{fontSize:14}}>(Evening Social Event)</Text></Text>
                                        <View style={[styles.ADFWBox, { width: width / 4 + 10 }]}>
                                            <View style={{flexDirection:'row', gap:6}}>
                                                <Image source={locate} resizeMode='stretch' style={{top:13}}/>
                                                <Text style={[styles.innerADFWTxt,{ width:70}]}>Al Maryah Ballroom, Four Seasons</Text>
                                            </View>
                                        </View>
                                    </View>


                                    <View style={[styles.boxContainer,{marginTop:8}]}>
                                        <Text style={[styles.txtBox, { width: width / 2 - 20 }]}>Capital Square</Text>
                                    </View>

                                    <View style={styles.txtContainer}>
                                        <Text style={styles.mainTxt}>29th November</Text>
                                    </View>
                                    <View style={styles.borderLiner}>
                                        <Text style={styles.border}></Text>
                                    </View>

                                    <View style={{marginTop:11}}>
                                        <Text style={styles.falcon}>Falcon Square</Text>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{marginTop:60}}></View>

            </View>
        </SafeAreaView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(219, 219, 219, 0.50)',
    },
    containerFluid: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
    },
    Card: {
        height: 563,
        borderRadius: 10,
        backgroundColor: '#FFF',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    lineBorder: {
        borderRadius: 10,
        borderLeftColor: '#005AD4',
        borderRightColor: '#005AD4',
        borderTopColor: '#005AD4',
        borderBottomColor: '#005AD4',
        borderWidth: 1,
        height: 523,
        display: "flex",
        alignItems: "center"
    },
    mainTxt: {
        color: '#002646',
        fontFamily: 'Isidora Sans',
        fontSize: 22,
        fontWeight: '600',
        lineHeight: 34
    },
    txtContainer: {
        marginTop: 21,
        left: 10
    }
    , border: {
        height: 1,
        backgroundColor: "#002646"
    },
    btncontain: {
        marginTop: 12
    },
    boxContainer: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between'
    },
    txtBox: {
        color: '#002646',
        fontFamily: 'Isidora Sans',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 22

    },
    ADFWBox: {
        display:'flex',
        alignItems:"center",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor:'#E5F0FF',
        borderRadius:50,
    },
    innerADFWTxt:{
        color: '#002646',
        fontFamily: 'Isidora Sans',
        fontSize: 11,
        fontWeight: '500',
    },
    falcon:{
        color: '#002646',
        fontFamily: 'Isidora Sans',
        fontSize: 16,
        fontWeight: '500',
    },
    tabs: {
        height: 60,
        paddingTop: 8,
        paddingBottom: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
        borderRadius: 15,
        backgroundColor: "#002646",
        elevation: 5,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
    },
    txtHome: {
        color: "#005AD4",
        fontSize: 10,
        fontWeight: '600',
        fontFamily: 'Isidora Sans',
        marginTop: 2,
        right: 2
    },
    circle: {
        width: 50,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: "#1B6AD5",
        borderColor: '#F4F4F4',
        borderWidth: 2
    },
    tabtTxt: {
        color: '#FFF',
        fontFamily: 'Isidora Sans',
        fontSize: 10,
        fontWeight: '400',
        marginTop: 2,
        right: 2
    },
    headContain: {
        flexDirection: "row",
        gap: 40,
        borderColor: "#FFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    container2:{
        display:"flex",
        justifyContent:'center',
        alignItems:"center"
    },
    ticketCard:{
        // height:500,
        borderRadius:20,
        backgroundColor:'#FFF',
        paddingTop: 15,
        paddingBottom: 20,
        paddingLeft: 16,
        paddingRight: 20,
    },
    ticketTxt:{
        fontSize:20,
        color: '#1B6AD5',
        fontFamily: 'Isidora Sans',
        fontWeight:'bold',
        letterSpacing:0.35
    },
    scetxt:{
        fontSize:16,
        color: '#000',
        fontFamily: 'Isidora Sans',
        fontWeight:'normal',
        letterSpacing:0.35,
        bottom:5
    },
    devTxt:{
        fontSize:17,
        color: '#000',
        fontFamily: 'Isidora Sans',
        fontWeight:'bold',
        letterSpacing:0.35
    }
})


export default HomeTicket