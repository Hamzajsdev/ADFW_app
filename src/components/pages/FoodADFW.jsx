import { View, Text, ScrollView, SafeAreaView, useWindowDimensions, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'
import ArrowLeft from '../../images/SpeakerImg/ArrowLeft.png'
import Img1 from '../../images/FOODADFWImg/Img1.png'
import Img2 from '../../images/FOODADFWImg/Img2.png'
import Img3 from '../../images/FOODADFWImg/Img3.png'
import Img4 from '../../images/FOODADFWImg/Img4.png'
import Img5 from '../../images/FOODADFWImg/Img5.png'
import Img6 from '../../images/FOODADFWImg/Img6.png'
import Img7 from '../../images/FOODADFWImg/Img7.png'
import Img8 from '../../images/FOODADFWImg/Img8.png'
import Img9 from '../../images/FOODADFWImg/Img9.png'
import Img10 from '../../images/FOODADFWImg/Img10.png'
import Img11 from '../../images/FOODADFWImg/Img11.png'
import Img12 from '../../images/FOODADFWImg/Img12.png'
import Img13 from '../../images/FOODADFWImg/Img13.png'
import Img14 from '../../images/FOODADFWImg/Img14.png'
import Img15 from '../../images/FOODADFWImg/Img15.png'
import Img16 from '../../images/FOODADFWImg/Img16.png'
import Img17 from '../../images/FOODADFWImg/Img17.png'
import Img18 from '../../images/FOODADFWImg/Img18.png'
import Img19 from '../../images/FOODADFWImg/Img19.png'
import Img20 from '../../images/FOODADFWImg/Img20.png'
import Img21 from '../../images/FOODADFWImg/Img21.png'
import Img22 from '../../images/FOODADFWImg/Img22.png'
import cover from '../../images/FOODADFWImg/cover.png'


const FoodADFW = ({navigation}) => {
    const handlePress = () => {
        navigation.navigate('Home')
    }
    const { width, height } = useWindowDimensions()
    return (
        <ScrollView style={{ backgroundColor: '#F4F4F4', width: width, height: height }}>
            <SafeAreaView>
            <StatusBar
                translucent backgroundColor='transparent'
                barStyle='light-content'
            />
                <View>
                    <View>
                        <Image source={Img1} resizeMode='stretch' style={{ width: width }} />
                        <Image source={cover} resizeMode='stretch' style={{ position: 'absolute', }} />
                        <View style={{ position: 'absolute' }}>
                            <View style={{ flexDirection: "row", width: width / 1 - 26, left: 13, marginTop: 19 }}>
                                <View>
                                    <TouchableOpacity onPress={handlePress}>
                                        <Image source={ArrowLeft} style={{ height: height / 34 - 2, marginVertical: height / 29 }} resizeMode='stretch' />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginHorizontal: 25, width: width / 2 + 60, marginVertical: height / 29 }}>
                                    <Text style={[styles.containTxt, { width: width / 3 }]}>Food @ADFW</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 30 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.containFluid}>
                                <Text style={styles.line}>Hello</Text>
                                <Image source={Img2} resizeMode='stretch' />
                                <Text style={styles.line}>Hello</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 19 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.Card}>
                                <View style={styles.content}>
                                    <Image source={Img3} resizeMode='stretch' />
                                    <View style={{ width: width / 2 + 38 }}>
                                        <Text style={styles.contentTxt}>Al Meylas{'\n'}<Text style={{ color: '#002646', fontWeight: "400" }}>An exquisite lounge where sophistication meets comfort, offering a perfect backdrop for relaxing meals, afternoon tea, or productive business meetings.</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 10 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.Card}>
                                <View style={styles.content}>
                                    <Image source={Img4} resizeMode='stretch' />
                                    <View style={{ width: width / 2 + 38, display: "flex", justifyContent: "center" }}>
                                        <Text style={styles.contentTxt}>Butcher & Still{'\n'}<Text style={{ color: '#002646', fontWeight: "400" }}>A refined 1920s Chicago steakhouse, serving prime American beef with classic flavours and exotic cocktails in an elegant setting.</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 10 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.Card}>
                                <View style={styles.content}>
                                    <Image source={Img5} resizeMode='stretch' />
                                    <View style={{ width: width / 2 + 38, display: "flex", justifyContent: "center" }}>
                                        <Text style={styles.contentTxt}>Specialty Coffee Booth{'\n'}<Text style={{ color: '#002646', fontWeight: "400" }}>Dive into a carefully crafted selection of beverages, from Frappuccino and caramel coffee to tea and mocktails.</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 10 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.Card}>
                                <View style={styles.content}>
                                    <Image source={Img6} resizeMode='stretch' />
                                    <View style={{ width: width / 2 + 38, display: "flex", justifyContent: "center" }}>
                                        <Text style={styles.contentTxt}>Café Milano{'\n'}<Text style={{ color: '#002646', fontWeight: "400" }}>Experience the authentic Italian culinary journey with handcrafted pastas, fresh seafood, and other delicacies - enjoyed on a tranquil waterfront terrace.</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 10 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.Card}>
                                <View style={styles.content}>
                                    <Image source={Img7} resizeMode='stretch' />
                                    <View style={{ width: width / 2 + 38, display: "flex", justifyContent: "center" }}>
                                        <Text style={styles.contentTxt}>Eclipse{'\n'}<Text style={{ color: '#002646', fontWeight: "400" }}>A tranquil daytime retreat with healthful cuisine, transforming into an enchanting evening venue with lounge seating and innovative bar fare.</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 10 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.Card}>
                                <View style={styles.content}>
                                    <Image source={Img8} resizeMode='stretch' />
                                    <View style={{ width: width / 2 + 38 }}>
                                        <Text style={styles.contentTxt}>Kamoon at Khalidiya Palace Rayhaan by Rotana {'\n'}<Text style={{ color: '#002646', fontWeight: "400" }}>A beachfront Levant gem, offering authentic Middle Eastern cuisine and live oud performances against the backdrop of the Arabian Gulf.</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 10 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.Card}>
                                <View style={styles.content}>
                                    <Image source={Img9} resizeMode='stretch' />
                                    <View style={{ width: width / 2 + 38, display: "flex", justifyContent: "center" }}>
                                        <Text style={styles.contentTxt}>Prego’s at the Beach Rotana{'\n'}<Text style={{ color: '#002646', fontWeight: "400" }}>Taste the authentic flavours of Italy in Abu Dhabi, with expertly crafted pizzas prepared in Prego's renowned wood-fire oven.</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 10 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.Card}>
                                <View style={styles.content}>
                                    <Image source={Img10} resizeMode='stretch' />
                                    <View style={{ width: width / 2 + 38, display: "flex", justifyContent: "center" }}>
                                        <Text style={styles.contentTxt}>Sama Lounge{'\n'}<Text style={{ color: '#002646', fontWeight: "400" }}>A spacious and charming retreat for connecting over tea, coffee, pastries and light meals, complemented by serene Arabian Sea views.</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 10 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.Card}>
                                <View style={styles.content}>
                                    <Image source={Img11} resizeMode='stretch' />
                                    <View style={{ width: width / 2 + 38, display: "flex", justifyContent: "center" }}>
                                        <Text style={styles.contentTxt}>Makr Shakr{'\n'}<Text style={{ color: '#002646', fontWeight: "400" }}>Innovation meets personalization: Get limitless cocktail servings and beverage offerings from the world's first robotic bartender.</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 68 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.containFluid}>
                                <Text style={styles.line}></Text>
                                <Image source={Img12} resizeMode='stretch' />
                                <Text style={styles.line}></Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 20 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.Card}>
                                <View style={styles.content}>
                                    <Image source={Img13} resizeMode='stretch' />
                                    <View style={{ width: width / 2 + 38, display: "flex", justifyContent: "center" }}>
                                        <Text style={styles.contentTxt}>Aria Pizzeria{'\n'}<Text style={{ color: '#002646', fontWeight: "400" }}>Indulge in Italian cuisine with a never-ending selection of pizzas customised to perfection with your choice of toppings.</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 10 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.Card}>
                                <View style={styles.content}>
                                    <Image source={Img22} resizeMode='stretch'/>
                                    <Image source={Img14} resizeMode='stretch' style={{position:'absolute',left:15, top:22}} />

                                    <View style={{ width: width / 2 + 38, display: "flex", justifyContent: "center" }}>
                                        <Text style={styles.contentTxt}>Feels{'\n'}<Text style={{ color: '#002646', fontWeight: "400" }}>Committed to clean eating, their menu features a blend of healthy breakfasts, smoothies, and juices crafted with 100% natural ingredients.</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 10 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.Card}>
                                <View style={styles.content}>
                                    <Image source={Img15} resizeMode='stretch' />
                                    <View style={{ width: width / 2 + 38, display: "flex", justifyContent: "center" }}>
                                        <Text style={styles.contentTxt}>Krush Burger{'\n'}<Text style={{ color: '#002646', fontWeight: "400" }}>Satisfy your food cravings with an array of mini burgers - packing a punch in bite-sized pieces. Pair them with sides and drinks for the ultimate burger experience.</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 10 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.Card}>
                                <View style={styles.content}>
                                    <Image source={Img16} resizeMode='stretch' />
                                    <View style={{ width: width / 2 + 38, display: "flex", justifyContent: "center" }}>
                                        <Text style={styles.contentTxt}>Not So Guilty{'\n'}<Text style={{ color: '#002646', fontWeight: "400" }}>Nostalgic bites that combine traditional flavours with a contemporary twist. The menu features savoury bites, decadent desserts and so much more.</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 10 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.Card}>
                                <View style={styles.content}>
                                    <Image source={Img17} resizeMode='stretch' />
                                    <View style={{ width: width / 2 + 38, display: "flex", justifyContent: "center" }}>
                                        <Text style={styles.contentTxt}>Pickl{'\n'}<Text style={{ color: '#002646', fontWeight: "400" }}>Fast food made healthy - grab the best burgers in town cooked with the freshest homemade ingredients.</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 10 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.Card}>
                                <View style={styles.content}>
                                    <Image source={Img18} resizeMode='stretch' />
                                    <View style={{ width: width / 2 + 38, display: "flex", justifyContent: "center" }}>
                                        <Text style={styles.contentTxt}>Starbucks{'\n'}<Text style={{ color: '#002646', fontWeight: "400" }}>Bringing the quintessential cafe experience to ADFW. Grab your perfect cup of coffee with quick bites at this mobile stop.</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 10 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.Card}>
                                <View style={styles.content}>
                                    <Image source={Img19} resizeMode='stretch' />
                                    <View style={{ width: width / 2 + 38, display: "flex", justifyContent: "center" }}>
                                        <Text style={styles.contentTxt}>Soil{'\n'}<Text style={{ color: '#002646', fontWeight: "400" }}>Fuel your body with healthy, eco-friendly food options, embracing vegan, keto, paleo, and vegetarian delights.</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 10 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.Card}>
                                <View style={styles.content}>
                                    <Image source={Img20} resizeMode='stretch' />
                                    <View style={{ width: width / 2 + 38, display: "flex", justifyContent: "center" }}>
                                        <Text style={styles.contentTxt}>TURF Café{'\n'}<Text style={{ color: '#002646', fontWeight: "400" }}>Your go-to breakfast or brunch spot, serving hearty bites of croissants, falafel wraps, bagels and other delectable food choices.</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.container, { marginTop: 10 }]}>
                        <View style={{ width: width / 1 - 32 }}>
                            <View style={styles.Card}>
                                <View style={styles.content}>
                                    <Image source={Img21} resizeMode='stretch' />
                                    <View style={{ width: width / 2 + 38, display: "flex", justifyContent: "center" }}>
                                        <Text style={styles.contentTxt}>1762{'\n'}<Text style={{ color: '#002646', fontWeight: "400" }}>Relish a wholesome culinary experience with gourmet sandwiches and decadent cakes, paired with a cup of custom blend coffee.</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 30 }}></View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containTxt: {
        color: "#FFF",
        display: "flex",
        fontFamily: 'Isidora Sans',
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 26,
        letterSpacing: 0.35
    },
    container: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
    },
    containFluid: {
        flexDirection: "row",
        display: 'flex',
        justifyContent: "space-between"
    },
    line: {
        height: 1,
        width: 84,
        backgroundColor: "#000",
        marginTop: 19
    },
    Card: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: "center",
        gap: 12,
        borderRadius: 8,
        backgroundColor: "#FFF",
        borderLeftColor: '#D2D0D0',
        borderRightColor: '#D2D0D0',
        borderTopColor: '#D2D0D0',
        borderBottomColor: '#D2D0D0',
        borderWidth: 1,
        elevation: 2,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,

    },
    content: {
        flexDirection: 'row',
        gap: 12
    },
    contentTxt: {
        color: '#002646',
        fontFamily: 'Isidora Sans',
        fontSize: 13,
        fontWeight: '700',
    }
})
export default FoodADFW