import { View, Text, ScrollView, SafeAreaView, StyleSheet, useWindowDimensions, TouchableOpacity, StatusBar, TextInput } from 'react-native'
import React, { useState } from 'react'
import ArrowLeft from '../../images/SpeakerImg/ArrowLeft.png'
import { Image } from 'react-native'
import search from '../../images/ChatImg/search.png'
import chatIcon from '../../images/ChatImg/chatIcon.png'




const Chat = ({ navigation }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState('recent');
    const { width, height } = useWindowDimensions()
    const handleChat = () => {
        navigation.navigate('Conversation');
    }
    const handlePress = () => {
        navigation.navigate('Home')
    }
    const handleTabPress = (tabular) => {
        setSelectedTab(tabular);
    };
    const handlePress1 = () => {
        setIsSearchOpen(!isSearchOpen);
    };
    const Recent = () => (
        <View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: width / 1 - 32 }}>
                    <TouchableOpacity onPress={handleChat}>
                        <View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={styles.box}>
                                    <Text style={styles.TStxt}>TS</Text>
                                </View>
                                <View style={{ marginHorizontal: 13, width: width / 2 + 10, }}>
                                    <Text style={styles.typography}>Trey Stevens{'\n'}<Text style={{ color: '#979797', fontSize: 14, fontWeight: '500' }}>Managing Partner-Striking Capital</Text> </Text>
                                </View>
                            </View>
                            <View style={{ marginVertical: 18 }}>
                                <Text style={styles.timeTxt}>11:20 am</Text>
                                <Image source={chatIcon} style={{ left: 29, top: 2 }} resizeMode='stretch' />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 23 }}>
                <View style={{ width: width / 1 - 32 }}>
                    <View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.box}>
                                <Text style={styles.TStxt}>CP</Text>
                            </View>
                            <View style={{ marginHorizontal: 13, width: width / 2 + 10, }}>
                                <Text style={styles.typography}>Nishna Dixit{'\n'}<Text style={{ color: '#979797', fontSize: 14, fontWeight: '500' }}>COO - Sinarline</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bottom: 5 }}>
                <View style={{ width: width / 1 - 32 }}>
                    <View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.box}>
                                <Text style={styles.TStxt}>KS</Text>
                            </View>
                            <View style={{ marginHorizontal: 13, width: width / 2 + 10, }}>
                                <Text style={styles.typography}>Dr. Karim El Solh{'\n'}<Text style={{ color: '#979797', fontSize: 14, fontWeight: '500' }}>Co-founder & CEO - Gulf Capital</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 13 }}>
                <View style={{ width: width / 1 - 32 }}>
                    <View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.box}>
                                <Text style={styles.TStxt}>AZ</Text>
                            </View>
                            <View style={{ marginHorizontal: 13, width: width / 2 + 10, }}>
                                <Text style={styles.typography}>Michael Clarke{'\n'}<Text style={{ color: '#979797', fontSize: 14, fontWeight: '500' }}>CEO, Company name</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 5 }}>
                <View style={{ width: width / 1 - 32 }}>
                    <View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.box}>
                                <Text style={styles.TStxt}>SY</Text>
                            </View>
                            <View style={{ marginHorizontal: 13, width: width / 2 + 10, }}>
                                <Text style={styles.typography}>Dr. Samer Haj-Yehia{'\n'}<Text style={{ color: '#979797', fontSize: 14, fontWeight: '500' }}>Chairman, Bank Leumi</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 13 }}>
                <View style={{ width: width / 1 - 32 }}>
                    <View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.box}>
                                <Text style={styles.TStxt}>KL</Text>
                            </View>
                            <View style={{ marginHorizontal: 13, width: width / 2 + 10, }}>
                                <Text style={styles.typography}>Brian Leo{'\n'}<Text style={{ color: '#979797', fontSize: 14, fontWeight: '500' }}>Chairman, Shorthand</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 5 }}>
                <View style={{ width: width / 1 - 32 }}>
                    <View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.box}>
                                <Text style={styles.TStxt}>CL</Text>
                            </View>
                            <View style={{ marginHorizontal: 13, width: width / 2 + 10, }}>
                                <Text style={styles.typography}>Caspar Lee{'\n'}<Text style={{ color: '#979797', fontSize: 14, fontWeight: '500' }}>Co-founder, Creator Ventures</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 13 }}>
                <View style={{ width: width / 1 - 32 }}>
                    <View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.box}>
                                <Text style={styles.TStxt}>HA</Text>
                            </View>
                            <View style={{ marginHorizontal: 13, width: width / 2 + 10, }}>
                                <Text style={styles.typography}>Henri Arslanian{'\n'}<Text style={{ color: '#979797', fontSize: 14, fontWeight: '500' }}>Co-founder and Managing Partner, Nine Blocks Capital Management</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
    const Delegate = () => (
        <View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: width / 1 - 32 }}>
                    <TouchableOpacity onPress={handleChat}>
                        <View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={styles.box}>
                                    <Text style={styles.TStxt}>KL</Text>
                                </View>
                                <View style={{ marginHorizontal: 13, width: width / 2 + 10, }}>
                                    <Text style={styles.typography}>Brian Leo{'\n'}<Text style={{ color: '#979797', fontSize: 14, fontWeight: '500' }}>Chairman, Shorthand Partner-Striking Capital</Text> </Text>
                                </View>
                            </View>
                            <View style={{ marginVertical: 18 }}>
                                <Text style={styles.timeTxt}>11:20 am</Text>
                                <Image source={chatIcon} style={{ left: 29, top: 2 }} resizeMode='stretch' />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 23 }}>
                <View style={{ width: width / 1 - 32 }}>
                    <View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.box}>
                                <Text style={styles.TStxt}>CL</Text>
                            </View>
                            <View style={{ marginHorizontal: 13, width: width / 2 + 10, }}>
                                <Text style={styles.typography}>Caspar Lee{'\n'}<Text style={{ color: '#979797', fontSize: 14, fontWeight: '500' }}>CO-founder, Creater Ventures</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bottom: 5 }}>
                <View style={{ width: width / 1 - 32 }}>
                    <View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.box}>
                                <Text style={styles.TStxt}>HA</Text>
                            </View>
                            <View style={{ marginHorizontal: 13, width: width / 2 + 10, }}>
                                <Text style={styles.typography}>Henri Arslanian{'\n'}<Text style={{ color: '#979797', fontSize: 14, fontWeight: '500' }}>Co-founder & CEO - Gulf Capital</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 13 }}>
                <View style={{ width: width / 1 - 32 }}>
                    <View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.box}>
                                <Text style={styles.TStxt}>AZ</Text>
                            </View>
                            <View style={{ marginHorizontal: 13, width: width / 2 + 10, }}>
                                <Text style={styles.typography}>Michael Clarke{'\n'}<Text style={{ color: '#979797', fontSize: 14, fontWeight: '500' }}>CEO, Company name</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 5 }}>
                <View style={{ width: width / 1 - 32 }}>
                    <View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.box}>
                                <Text style={styles.TStxt}>SY</Text>
                            </View>
                            <View style={{ marginHorizontal: 13, width: width / 2 + 10, }}>
                                <Text style={styles.typography}>Dr. Samer Haj-Yehia{'\n'}<Text style={{ color: '#979797', fontSize: 14, fontWeight: '500' }}>Chairman, Bank Leumi</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 13 }}>
                <View style={{ width: width / 1 - 32 }}>
                    <View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.box}>
                                <Text style={styles.TStxt}>KL</Text>
                            </View>
                            <View style={{ marginHorizontal: 13, width: width / 2 + 10, }}>
                                <Text style={styles.typography}>Brian Leo{'\n'}<Text style={{ color: '#979797', fontSize: 14, fontWeight: '500' }}>Chairman, Shorthand</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 13 }}>
                <View style={{ width: width / 1 - 32 }}>
                    <View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.box}>
                                <Text style={styles.TStxt}>HA</Text>
                            </View>
                            <View style={{ marginHorizontal: 13, width: width / 2 + 10, }}>
                                <Text style={styles.typography}>Henri Arslanian{'\n'}<Text style={{ color: '#979797', fontSize: 14, fontWeight: '500' }}>Co-founder and Managing Partner, Nine Blocks Capital Management</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
    return (
        <ScrollView style={{ backgroundColor: '#F4F4F4' }}>
            <SafeAreaView>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor="#002646"
                />
                <View>
                    <View style={[styles.SponsorHead, { width: width, height: isSearchOpen ? height / 7 : height / 10 }]}>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: width / 1 - 32 }}>
                                <View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <TouchableOpacity onPress={handlePress}>
                                            <Image style={{ marginVertical: 6 }} source={ArrowLeft} resizeMode='stretch' />
                                        </TouchableOpacity>
                                        <Text style={styles.chatTxt}>Chat</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={handlePress1}>
                                            <Image source={search} resizeMode='stretch' />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {isSearchOpen && (
                                    <View>
                                        <TextInput
                                            placeholder="Search...."
                                            placeholderTextColor="darkgray"
                                            style={{ fontSize: 14, left: 8, bottom: 10, borderBottomColor: 'white', borderBottomWidth: 2, color: 'white', }}
                                        />
                                    </View>
                                )}
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 12 }}>
                            <View style={{ flexDirection: 'row', width: width / 1 - 32 }}>
                                <TouchableOpacity
                                    style={[
                                        styles.btn,
                                        { width: width / 2 - 23, backgroundColor: selectedTab === 'recent' ? '#005AD4' : 'transparent' },
                                    ]}
                                    onPress={() => handleTabPress('recent')}
                                >
                                    <Text style={[styles.btnTxt, { color: selectedTab === 'recent' ? '#fff' : '#2E2E2E' }]}>Recent Chats</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        styles.btn2,
                                        { width: width / 2 - 23, backgroundColor: selectedTab === 'delegates' ? '#005AD4' : 'transparent' },
                                    ]}
                                    onPress={() => handleTabPress('delegates')}
                                >
                                    <Text style={[styles.btnTxt, { color: selectedTab === 'delegates' ? '#fff' : '#2E2E2E' }]}>All Delegates</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {selectedTab === 'recent' ? <Recent /> : <Delegate />}
                    </View>
                    <View style={{ marginTop: 20 }}></View>

                </View>
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
    chatTxt: {
        color: '#FFF',
        fontFamily: 'Isidora Sans',
        fontSize: 22,
        fontWeight: '700',
        letterSpacing: 0.35,
        marginHorizontal: 10
    },
    btn: {
        height: 50,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftColor: '#1B6AD5',
        borderRightColor: '#1B6AD5',
        borderTopColor: '#1B6AD5',
        borderBottomColor: '#1B6AD5',
        borderWidth: 1,
    },
    btnTxt: {
        fontFamily: 'Isidora Sans',
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 0.35,
    },
    btn2: {
        height: 50,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        borderLeftColor: '#1B6AD5',
        borderRightColor: '#1B6AD5',
        borderTopColor: '#1B6AD5',
        borderBottomColor: '#1B6AD5',
        borderWidth: 1,
    },
    box: {
        width: 53,
        height: 53,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 90, 212, 0.60)',
        borderLeftColor: '#1B6AD5',
        borderRightColor: '#1B6AD5',
        borderTopColor: '#1B6AD5',
        borderBottomColor: '#1B6AD5',
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TStxt: {
        color: '#002646',
        fontFamily: 'Isidora Sans',
        fontSize: 20, fontWeight: '300'
    },
    typography: {
        color: '#002646',
        fontFamily: 'Isidora Sans',
        fontSize: 16,
        fontWeight: '700'
    },
    timeTxt: {
        color: '#A4A4A4',
        fontFamily: 'Isidora Sans',
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 16
    },
    chatIcon: {
        display: 'flex',
        alignItems: 'flex-end'
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
    container2: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },

})

export default Chat