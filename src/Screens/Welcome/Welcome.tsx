import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Onboarding from 'react-native-onboarding-swiper'
import Lottie from 'lottie-react-native';
const {width, height} = Dimensions.get('window');
export const Welcome = (props: {
  onNavigate: () => void;
  
}) => {
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={props.onNavigate}
        onSkip={props.onNavigate}
        // bottomBarHighlight={false}
        // DoneButtonComponent={doneButton}
        containerStyles={{paddingHorizontal: 15}}
        pages={[
            {
                backgroundColor: '#a7f3d0',
                image: (
                    <View style={styles.lottie}>
                        {/* <Lottie source={require('../assets/animations/boost.json')} autoPlay loop /> */}
                        <Text>Hello 1</Text>
                    </View>
                ),
                title: 'Boost Productivity',
                subtitle: 'Subscribe this channel to boost your productivity level',
            },
            {
                backgroundColor: '#fef3c7',
                image: (
                    <View style={styles.lottie}>
                        {/* <Lottie source={require('../assets/animations/work.json')} autoPlay loop /> */}
                        <Text>Hello 2</Text>
                    </View>
                ),
                title: 'Work Seamlessly',
                subtitle: 'Get your work done seamlessly without interruption',
            },
            {
                backgroundColor: '#a78bfa',
                image: (
                    <View style={styles.lottie}>
                        {/* <Lottie source={require('../assets/animations/achieve.json')} autoPlay loop /> */}
                        <Text>Hello 3</Text>
                    </View>
                ),
                title: 'Achieve Higher Goals',
                subtitle: 'By boosting your productivity we help you to achieve higher goals',
            },
        ]}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white'
  },
  lottie:{
      width: width*0.9,
      height: width
  },
  doneButton: {
      padding: 20,
      // backgroundColor: 'white',
      // borderTopLeftRadius: '100%',
      // borderBottomLeftRadius: '100%'
  }
})
