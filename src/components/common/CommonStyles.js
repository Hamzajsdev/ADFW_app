import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../helper/Matrix";


const styles = StyleSheet.create({
  container: {
    display: "flex", justifyContent: "center", alignItems: "center",
  },
  txt: {
    color: '#FFF', 
    fontFamily: "Cairo", 
    fontSize: 20, 
    fontWeight: '200', 
    lineHeight: 22

  },
  textInput: {
    display: 'flex',
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    borderRadius: 10,
    borderStyle: 'solid',
    borderLeftColor: 'rgba(255, 255, 255, 0.30)',
    borderRightColor: 'rgba(255, 255, 255, 0.30)',
    borderTopColor: 'rgba(255, 255, 255, 0.30)',
    borderBottomColor: 'rgba(255, 255, 255, 0.30)',
    backgroundColor: 'rgba(0, 20, 52, 0.30)',
    borderWidth: 1,
    color: 'white'

  },
  btn: {
    display: 'flex',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: '#1B6AD5',

  },
  ractangleImg: {
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center"
  },
})

export default styles;