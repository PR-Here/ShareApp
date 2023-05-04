import React, { FC } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../navigation/types/RootStackParamList";
import { StackNavigationProp } from "@react-navigation/stack";
import Style from "./Style";
import Images from "../../utils/Images";
import Swiper from "react-native-swiper";
import Strings from "../../utils/Strings";
import GradientButton from "../../component/ButtonStyle";
import Color from "../../utils/MyColors";

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Welcome"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const handleButtonPress = () => {
  console.log("Button pressed!");
};

const Welcome: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={Style.container}>
      <Swiper style={{}} showsButtons={false}>
        {/* First Image */}
        <View style={Style.slide1}>
          <Image
            resizeMode="contain"
            style={Style.image}
            source={Images.FIRST}
          />
          <View style={Style.textView}>
            <Text style={Style.text}>{Strings.onboarding_1}</Text>
            <Text style={Style.descText}>{Strings.lorem_ispem}</Text>
          </View>
        </View>
        {/* second Image */}
        <View style={Style.slide2}>
          <Image
            resizeMode="contain"
            style={Style.image}
            source={Images.SECOND}
          />
          <View style={Style.textView}>
            <Text style={Style.text}>{Strings.secure}</Text>
            <Text style={Style.descText}>{Strings.lorem_ispem}</Text>
          </View>
        </View>
        
        {/* Third Image */}
        <View style={Style.slide3}>
          <Image
            resizeMode="contain"
            style={Style.image}
            source={Images.THIRD}
          />
          <View style={Style.textView}>
            <Text style={Style.text}>{Strings.using}</Text>
            <Text style={Style.descText}>{Strings.lorem_ispem}</Text>
          </View>
        </View>
      </Swiper>
      {/* Button Here */}
      <GradientButton
        title={Strings.finish}
        onPress={handleButtonPress}
        colors={[Color.BLACK, Color.BLACK]}
        containerStyle={Style.nextButton}
        titleStyle={Style.buttonText}
      />
    </View>
  );
};

export default Welcome;
