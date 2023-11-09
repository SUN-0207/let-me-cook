import React from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "native-base";
import { RootScreens } from "..";
import { OnboardFlow } from 'react-native-onboard';
import { OnboardFlowProps } from 'react-native-onboard';

export const Welcome = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  const image1 = require("../../../assets/onboarding-1.png");
  const image2 = require("../../../assets/onboarding-2.png");
  const image3 = require("../../../assets/onboarding-3.png");

  return (
    <View style={styles.container}>
      <OnboardFlow
        pages={[
          {
            title: 'Ingredient Scanner',
            subtitle: 'Scan ingredients and discover delicious dishes instantly.',
            imageUri: Image.resolveAssetSource(image1).uri,
          },
          {
            title: 'Virtual Chef',
            subtitle: 'our personal chef: just scan ingredients and let us suggest dishes.',
            imageUri: Image.resolveAssetSource(image2).uri,
          },
          {
            title: 'Culinary Magic',
            subtitle: 'Turn your ingredients into culinary magic with our app\'s scanning feature.',
            imageUri: Image.resolveAssetSource(image3).uri,
          },
        ]}
        onDone={() => props.onNavigate(RootScreens.MAIN)}
        type={'fullscreen'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});