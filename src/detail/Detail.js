import React from "react";
import { Text, StyleSheet, SafeAreaView, Image, View } from "react-native";
const Detail = ({ route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.avatar} source={{ uri: route.params.avatar }} />
      <View style={styles.text}>
        <Text style={{fontSize:35,fontWeight:'500'}}>{route.params.name}</Text>
      </View>
      <View style={styles.text}>
        <Text style={{fontSize:20,color:"#707070"}}>{route.params.job}</Text>
      </View>
      <View style={styles.text}>
        <Text style={{paddingVertical:20,color:"#808080"}}>{route.params.about}</Text>
      </View>
    </SafeAreaView>
  );
};
export default Detail;
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginHorizontal:10,
    marginVertical:10
  },
  avatar: {
    width: "100%",
    height: "45%",
    resizeMode: "contain",
  },
  text: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal:20,
  },
});
