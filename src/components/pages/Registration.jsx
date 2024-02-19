import { View, Text, SafeAreaView, useWindowDimensions, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import registration from '../../images/CapitalSqureImg/registration.png'
import img3 from '../../images/CapitalSqureImg/img3.png'
import Vector from '../../images/CapitalSqureImg/Vector.png'



const Registration = ({navigation}) => {
    const handlepress=()=>{
        navigation.navigate('SocialTalk')
    }
    const { width, height } = useWindowDimensions()
    return (
        <SafeAreaView >
            <View style={{ backgroundColor: "rgba(219, 219, 219, 0.85)", width: width, height: height, display:'flex', justifyContent:'center', alignItems:'center' }}>
                <View>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={handlepress}>
                        <Image style={{ width: width / 1 - 32 }} source={registration} resizeMode='stretch' />
                        </TouchableOpacity>
                    </View>
                         <View style={{position:'absolute'}} >
                           <View style={[styles.box, {marginHorizontal:width/1-63, width:width/32+20}]}>
                            <Text style={styles.cross}>X</Text>
                           </View>
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
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
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
        elevation: 5,
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
    box:{
        height:32,
        borderRadius:3,
        backgroundColor:'#FFF',
    },
    cross:{
        position:'absolute',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:18,
        fontWeight:"bold",
        color:"black",
        fontFamily:'Isidora Sans',
        marginHorizontal:10,
        marginVertical:3
    }
})

export default Registration