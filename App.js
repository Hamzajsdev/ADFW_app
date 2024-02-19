import React from 'react'
import Login from './src/components/common/Login'
import Otp from './src/components/pages/Otp'
import Home from './src/components/pages/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Speaker from './src/components/pages/Speaker'
import SpeakerDetail from './src/components/pages/SpeakerDetail'
import Sponsor from './src/components/pages/Sponsor'
import Location from './src/components/pages/Location'
import CapitalSqure from './src/components/pages/CapitalSqure'
import Registration from './src/components/pages/Registration'
import SocialTalk from './src/components/pages/SocialTalk'
import Agenda from './src/components/pages/Agenda'
import ADagenda from './src/components/pages/ADagenda'
import AgendaDetail from './src/components/pages/AgendaDetail'
import Chat from './src/components/pages/Chat'
import Conversation from './src/components/pages/Conversation'
import ConversationAttach from './src/components/pages/ConversationAttach'
import ContactShare from './src/components/pages/ContactShare'
import ProfileSetting from './src/components/pages/ProfileSetting'
import ContactQR from './src/components/pages/ContactQR'
import ScannerQR from './src/components/pages/ScannerQR'
import Notification from './src/components/pages/Notification'
import Favourties from './src/components/pages/Favourties'
import AboutADGM from './src/components/pages/AboutADGM'
import AssetsAD from './src/components/pages/AssetsAD'
import FoodADFW from './src/components/pages/FoodADFW'
import Entertainment from './src/components/pages/Entertainment'
import FalconSqure from './src/components/pages/FalconSqure'
import InsideADGM from './src/components/pages/InsideADGM'
import Fourseasons from './src/components/pages/Fourseasons'
import HomeTicket from './src/components/pages/HomeTicket'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import ADEconomy from './src/components/pages/ADEconomy'
import FintechAD from './src/components/pages/FintechAD'
import GlobalFinencial from './src/components/pages/GlobalFinencial'
import RaceSummit from './src/components/pages/RaceSummit'



const Stack = createNativeStackNavigator();
const App = () => {
  const { width, height } = useWindowDimensions()
  const Tab = createBottomTabNavigator();

  const BottomTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconImage;
            let ticketImg;
            let containerStyle;

            if (route.name === 'Home') {
              iconImage = require('./src/images/HomeImg/home.png');
            } else if (route.name === 'Agenda') {
              iconImage = require('./src/images/HomeImg/bagIcon.png');
            } else if (route.name === 'Ticket') {
              ticketImg = require('./src/images/HomeImg/ticket.png');
              containerStyle = {
                backgroundColor: '#1B6AD5',
                borderRadius: 100,
                borderColor: 'white',
                borderWidth: 2,
                width: 60,
                height: 60,
                bottom: 15,
                paddingTop: 10,
                paddingLeft: 12
              };
            } else if (route.name === 'Chat') {
              iconImage = require('./src/images/HomeImg/chat.png');
            } else if (route.name === 'Profile') {
              iconImage = require('./src/images/HomeImg/profile.png');
            }
            const tintColor = focused ? '#007BFF' : 'white';
            return (
              <View>
                <View>
                  <Image source={iconImage} style={{ width: 21, height: 20, tintColor, top: 5 }} />
                </View>
                <View style={[containerStyle, { bottom: 25 }]}>
                  <Image source={ticketImg} style={{ position: 'absolute', bottom: 15, left: 14 }} />
                </View>
              </View>
            )
          },

          tabBarStyle: {
            backgroundColor: '#002646', bottom: 20, width: width / 1 - 32, left: 16, borderRadius: 15, height: 60, gap: 10,
            elevation: 5,
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
        <Tab.Screen name="Ticket" component={HomeTicket} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Profile" component={ProfileSetting} />
      </Tab.Navigator>
    )
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Otp' component={Otp} />
          < Stack.Screen name='BottomTabs' component={BottomTabs} />
          <Stack.Screen name='ProfileSetting' component={ProfileSetting} /> 
          <Stack.Screen name='Speaker' component={Speaker} />
          <Stack.Screen name='SpeakerDetail' component={SpeakerDetail} />
          <Stack.Screen name='Sponsor' component={Sponsor} />
          <Stack.Screen name='Location' component={Location} />
          <Stack.Screen name='CapitalSqure' component={CapitalSqure} />
          <Stack.Screen name='Registration' component={Registration} />
          <Stack.Screen name='SocialTalk' component={SocialTalk} />
          <Stack.Screen name='ADagenda' component={ADagenda} />
          <Stack.Screen name='AgendaDetail' component={AgendaDetail} />
          <Stack.Screen name='Conversation' component={Conversation} />
          <Stack.Screen name='ConversationAttach' component={ConversationAttach} />
          <Stack.Screen name='ContactShare' component={ContactShare} />
          <Stack.Screen name='ContactQR' component={ContactQR} />
          <Stack.Screen name='ScannerQR' component={ScannerQR} />
          <Stack.Screen name='Notification' component={Notification} />
          <Stack.Screen name='Favourties' component={Favourties} />
          <Stack.Screen name='AboutADGM' component={AboutADGM} />
          <Stack.Screen name='AssetsAD' component={AssetsAD} />
          <Stack.Screen name='FoodADFW' component={FoodADFW} />
          <Stack.Screen name='Entertainment' component={Entertainment} />
          <Stack.Screen name='FalconSqure' component={FalconSqure} />
          <Stack.Screen name='InsideADGM' component={InsideADGM} />
          <Stack.Screen name='Fourseasons' component={Fourseasons} />
          <Stack.Screen name='ADEconomy' component={ADEconomy} />
          <Stack.Screen name='FintechAD' component={FintechAD} />
          <Stack.Screen name='GlobalFinencial' component={GlobalFinencial} />
          <Stack.Screen name='RaceSummit' component={RaceSummit} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
export default App



