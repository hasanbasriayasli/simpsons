
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
const Item = ({ item, navigation, handleDelete }) => {
  const handleNavigation = () => {
    navigation.navigate("Details", item);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={() => handleNavigation()}>
        <Image style={styles.avatar} source={{ uri: item.avatar }} />
        <Text  style={styles.title}>{item.job}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <EvilIcons name="trash" size={36} color="black" />
      </TouchableOpacity>
    </View>
  );
};
export default Item
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 16,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#B8B8B8",
        backgroundColor:'white'
      },
      title: {
        flex:1,
        paddingHorizontal: 30,
      },
      avatar: {
        width: 35,
        height: 60,
        resizeMode: "contain",
      },
      touchableOpacity:{
        flex: 1,
        flexDirection:'row',
        alignItems: "center",
      }
})