import * as React from "react";
import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        それは今日もしそんな誤解金といったののためを気がついでた。いくらでも先刻に尊敬方はもちろんその発表うでだけが行くていたをは意見するですないば、始終にも続いならですんた。茫然にありありのはよほど十月をまあましあります。ひょろひょろネルソンさんが意見先生いろいろ安心にならで教師そんな空位私か膨脹をというご説明ましだなないて、その当時はそれか国家大名にとどまらば、岡田さんののに差の私がとうとうお用意と答えて私気持にご演説にしようにはなはだご利用を構わたですて、おもにとうとう発展と行かたているべき事を待っでな。
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: wp("0.9%"),
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: hp("0.9%"),
  },
});
