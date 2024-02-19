import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, ScrollView, Text, View, useWindowDimensions } from 'react-native';
import Home from './Home'
import Agenda from './Agenda'
import Ticket from './HomeTicket'
import Chat from './Chat'
import Profile from './ProfileSetting'



const BottomTabs = () => {
    const { width, height } = useWindowDimensions()
    const Tab = createBottomTabNavigator();


  
    return (
        // <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        let iconImage;
                        let ticketImg;
                        let containerStyle;

                        if (route.name === 'Home') {
                            iconImage = require('../../images/HomeImg/home.png');
                        } else if (route.name === 'Agenda') {
                            iconImage = require('../../images/HomeImg/bagIcon.png');
                        } else if (route.name === 'Ticket') {
                            ticketImg = require('../../images/HomeImg/ticket.png');
                            containerStyle = {
                                backgroundColor: '#1B6AD5',
                                borderRadius: 100,
                                borderColor: 'white',
                                borderWidth: 2,
                                width: 50,
                                height: 50,
                                bottom: 10,
                                paddingTop: 10,
                                paddingLeft: 12
                            };
                        } else if (route.name === 'Chat') {
                            iconImage = require('../../images/HomeImg/chat.png');
                        } else if (route.name === 'Profile') {
                            iconImage = require('../../images/HomeImg/profile.png');
                        }
                        const tintColor = focused ? '#007BFF' : 'white';
                        return (
                            <View>
                                <View>
                                    <Image source={iconImage} style={{ width: 21, height: 20, tintColor, top: 5 }} />
                                </View>
                                <View style={[containerStyle, { bottom: 20 }]}>
                                    <Image source={ticketImg} style={{ position: 'absolute', bottom: 11, left: 9 }} />
                                </View>
                            </View>
                        )
                    },

                    tabBarStyle: {
                        backgroundColor: '#002646', bottom: 20, width: width / 1 - 32, left: 16, borderRadius: 15, height: 60, gap: 10, elevation: 5,
                        shadowOffset: { width: 5, height: 5 },
                        shadowOpacity: 1,
                    },
                    tabBarLabel: ({ focused }) => {
                        const routeName = route.name;
                        const textColor = focused ? '#007BFF' : 'white';

                        switch (routeName) {
                            case 'Home':
                            case 'Agenda':
                            case 'Ticket':
                            case 'Chat':
                            case 'Profile':
                                return <Text style={{ color: textColor, fontSize: 11, fontWeight: '400' }}>{routeName}</Text>;
                            default:
                                return null;
                        }
                    },
                })}

            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Agenda" component={Agenda} />
                <Tab.Screen name="Ticket" component={Ticket} />
                <Tab.Screen name="Chat" component={Chat} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        // </NavigationContainer>
    )
}

export default BottomTabs