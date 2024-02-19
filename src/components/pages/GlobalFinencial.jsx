import { View, Text, ScrollView, useWindowDimensions, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import ArrowLeft from '../../images/SpeakerImg/ArrowLeft.png'
import BannerImg from '../../images/FintectADImg/global.jpg'
import ADEcoBanner from '../../images/FintectADImg/globalFinenceBanner.jpeg'


const GlobalFinencial = ({navigation}) => {
    const { width, height } = useWindowDimensions()
    const handlePress = () => {
        navigation.navigate('Home')
    }

  return (
    <View style={{ flex: 1, backgroundColor: '#F4F4F4', width: width }}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View>
                    <View>
                        <Image source={BannerImg} resizeMode='stretch' style={{ width: width, height: 240 }} />
                    </View>
                    <View style={{ position: 'absolute' }}>
                        <TouchableOpacity onPress={handlePress}>
                            <Image source={ArrowLeft} style={{ height: height / 34 - 2, marginVertical: height / 29, position: 'absolute', left: 10, top: 30 }}  resizeMode='stretch' />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View style={[styles.container, { marginTop: 20, }]}>
                            <View style={{ width: width / 1 - 32 }}>
                                <Text style={styles.plaintxt}>The 2022 edition of Asset Abu Dhabi saw the world’s most significant funds assemble at this prime gathering of investment market leadership, with value-seeking deal-makers from across the global markets to explore shifting investment frontiers and evolving asset classes.This year’s Asset Abu Dhabi will build on the success of last year’s edition, continuing to shed light on topics such as investing in the next decade of technology, investing in cities of the future and insights derived from the world’s biggest hedge funds. The agenda will include the perspectives of institutional capital and asset allocators in a changing investment landscapeHeld as a public forum, Asset Abu Dhabi will convene asset allocators and asset managers, investment bankers, VCs, PEs, family offices and other institutional investors.</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 20, }]}>
                        <View style={{ width: width / 1 - 32}}>
                            <Text style={styles.inviTxt}>*Global Financial Regulator Summit is by{'\n'}invitation-only</Text>
                        </View>
                    </View>


                    <View style={[styles.container, { marginTop: 30 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Image source={ADEcoBanner} resizeMode='cover' style={{ width: width / 1 - 32, height: height / 1.5 }} />
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 60 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Text style={styles.speakerTxt}>Meet Our <Text style={{ color: "#1B6AD5" }}>Speakers</Text></Text>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 20 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.btn}>
                                <Text style={styles.viewTxt}>View All</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 35 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <Text style={styles.speakerTxt}>Event <Text style={{ color: "#1B6AD5" }}> Agenda </Text></Text>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 20 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.btn}>
                                <Text style={styles.viewTxt}>View All</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 50 }}></View>
                </View>
            </ScrollView>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },
    plaintxt: {
        color: '#000',
        fontFamily: 'Isidora Sans',
        fontSize: 16,
        fontWeight: '400'
    },
    speakerTxt: {
        color: '#002646',
        fontFamily: 'Isidora Sans',
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 0.35
    },
    speakCard: {
        width: 177,
        height: 260,
        paddingTop: 10,
        paddingBottom: 10,
        display: "flex",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: '#FFF'
    },
    cardTxt: {
        color: "#002646",
        fontFamily: 'Isidora Sans',
        fontSize: 12,
        fontWeight: '700'
    },
    btn: {
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        borderRadius: 5,
        backgroundColor: '#1B6AD5',
        borderLeftColor: '#1B6AD5',
        borderRightColor: '#1B6AD5',
        borderTopColor: '#1B6AD5',
        borderBottomColor: '#1B6AD5',
        borderWidth: 1,
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center'
    },
    viewTxt: {
        color: '#FFF',
        fontFamily: 'Isidora Sans',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.35
    },
    cardAgenda: {
        height: 175,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 15,
        backgroundColor: '#FFF',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 1,
        marginTop: 20
    },
    cardPink: {
        width: 85,
        height: 102,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 10,
        backgroundColor: '#D23DC7'
    },

    time: {
        fontSize: 20,
        fontWeight: '300',
        fontFamily: 'Isidora Sans',
        color: '#FFF',
    },
    txtinnerCard2: {
        color: "#1B6AD5",
        fontFamily: "Isidora Sans",
        fontSize: 12,
        fontWeight: '500',
        textTransform: 'uppercase'
    },
    ADFWTxt: {
        marginHorizontal: 8,
        color: "#002646",
        fontSize: 13,
        fontWeight: '500',
        fontFamily: 'Isidora Sans'
    },
    txtView: {
        fontSize: 14,
        fontFamily: 'Isidora Sans',
        color: "#002646",
        fontWeight: '500',
    },
    inviTxt: {
        color: '#1B6AD5',
        fontFamily: 'Isidora Sans',
        fontSize: 14,
        fontWeight: '400',
        fontStyle: 'italic',
    },
    FintechADTxt: {
        color: '#000',
        fontFamily: 'Isidora Sans',
        fontSize: 20,
        fontWeight: 'bold',
    },
    containerFintech: {
        height: 220,
        borderColor: '#D23DC7',
        borderWidth: 2,
        borderRadius: 5,
        paddingTop: 15,
        paddingLeft: 15,
        paddingBottom: 15,
        paddingRight: 15,
    },
    txtBox:{
        color: '#000',
        fontFamily: 'Isidora Sans',
        fontSize: 16,
        fontWeight: 'bold',
    },
    txtBoxMain:{
        color: '#000',
        fontFamily: 'Isidora Sans',
        fontSize: 13,
    }
    

})

export default GlobalFinencial