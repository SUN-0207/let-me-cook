import React from "react";
import { Welcome } from "./Welcome";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";


type WelcomeScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.WELCOME
>;

export const WelcomeContainer = ({
  navigation,
}: WelcomeScreenNavigatorProps) => {
  const onNavigate = ()=>{
    navigation.navigate(RootScreens.MAIN);
  }
  // const doneButton = ({...props})=>{
  //   return (
  //       <TouchableOpacity style={styles.doneButton} {...props}>
  //           <Text>Done</Text>
  //       </TouchableOpacity>
  //   )

  return <Welcome onNavigate={onNavigate} />;
};
