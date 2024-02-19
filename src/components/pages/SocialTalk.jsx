import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet, useWindowDimensions, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import ArrowLeft from '../../images/SpeakerImg/ArrowLeft.png'
import img1 from '../../images/SocialTalk/img1.png'
import img2 from '../../images/SocialTalk/img2.png'


const SocialTalk = ({navigation}) => {
    const handlepress=()=>{
        navigation.navigate('Home');
    }
   
    const { width, height } = useWindowDimensions()
    return (
        <ScrollView>
            <SafeAreaView>
            <StatusBar
                barStyle='light-content'
                backgroundColor="#002646"

            />
                <View style={[styles.SponsorHead, { width: width, height: height / 10 + 1 }]}>
                    <TouchableOpacity onPress={handlepress}>
                    <Image source={ArrowLeft} style={{ height: height / 34 - 2, marginVertical: height / 29 }} resizeMode='stretch' />
                    </TouchableOpacity>
                    <Text style={[styles.txtSponsor, { marginHorizontal: 52, marginVertical: height / 29 - 5, fontWeight: '700' }]}> Social 
                    <Text style={{ color: '#1B6AD5' }}> Activity </Text>
                    </Text>
                </View>

                <View>
                    <View>

                        <Image style={{width:width/1}} source={img1} resizeMode='stretch'/>

                        <Image style={{width:width/1}} source={img2} resizeMode='stretch'/>
                    </View>
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
    txtSponsor: {
        position: 'absolute',
        fontSize: 22,
        letterSpacing: 0.35,
        fontFamily: 'Isidora Sans',
        color: '#FFF',

    },
})

export default SocialTalk