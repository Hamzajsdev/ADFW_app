import { View, Text, SafeAreaView, useWindowDimensions, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import ArrowLeft from '../../images/SpeakerImg/ArrowLeft.png'
import heartImg from '../../images/Favourties/heartImg.png'


const Favourties = ({navigation}) => {

    const handlepress =()=>{
        navigation.navigate('Home')
    }

    const handleSubmit =()=>{
        navigation.navigate('AboutADGM')
    }
    const handleViewAgenda =()=>{
        navigation.navigate('Agenda')
    }
    
    const { width, height } = useWindowDimensions()
    return (
        <SafeAreaView style={{backgroundColor:"#F4F4F4", width:width, height:height}}>
            <StatusBar
                barStyle='light-content'
                backgroundColor="#002646"
            />
            <View style={[styles.SpeakerHead, { width: width, height: height / 10 + 1 }]}>
                <TouchableOpacity onPress={handlepress}>
                <Image source={ArrowLeft} style={{ height: height / 34 - 2, marginVertical: height / 29 }} resizeMode='stretch' />
                </TouchableOpacity>
                <Text style={[styles.txtSpeaker, { marginHorizontal: 52, marginVertical: height / 29 - 5, fontWeight: '700' }]}>Favorites</Text>
            </View>

            <View style={{display:'flex', alignItems:'center', marginTop:243.5}}>
                <View style={{width:width/1-32, display:"flex", alignItems:"center"}}>
                   <Image source={heartImg} resizeMode='stretch' style={{opacity:0.3}}/>
                   <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.heartTxt}>You haven’t added any favorites yet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleViewAgenda}>
                    <View style={styles.box}>
                        <Text style={styles.faTxt}>View agenda</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
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
    heartTxt:{
        color:"#2E2E2E",
        fontFamily:'Isidora Sans',
        fontSize:16,
        fontWeight:'500',
        letterSpacing:0.35,
        marginTop:10.5
    },
    box:{
        width:150,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:3,
        borderWidth: 1.5,
        borderLeftColor: '#005AD4',
        borderRightColor: '#005AD4',
        borderTopColor: '#005AD4',
        borderBottomColor: '#005AD4',
        marginTop:29
    },
    faTxt:{
        color:"#005AD4",
        fontFamily:'Isidora Sans',
        fontSize:16,
        fontWeight:'500',
        letterSpacing:0.35
    }
})

export default Favourties