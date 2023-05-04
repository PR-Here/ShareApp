import React from "react";
import { StyleSheet } from "react-native";
import FontName from "../../utils/FontName";
import Color from "../../utils/MyColors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },
  text: {
    color: Color.BLACK,
    fontSize: hp('4%'),
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    marginTop: hp('6%'),
    fontFamily: FontName.Sen_Bold,
  },
  descText: {
    color:Color.BLACK,
    fontSize: hp('2%'),
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    marginTop: hp('3%'),
    paddingHorizontal: 20,
    fontFamily: FontName.Sen_Regular,
  },
  image: {
    width: wp('100%'),
    height:hp('40%'),
    alignSelf: "center",
  },
  textView: {
    alignSelf: "center",
  },
  nextButton: {
    width: wp("90%"),
    height: hp('6%'),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 5,
    backgroundColor: Color.DARK_RED,
    marginBottom: hp('3%'),
  },
  buttonText: {
    color: Color.WHITE,
    fontFamily: FontName.Sen_Bold,
    fontSize: hp('2%'),
  },
});

export default Style;
