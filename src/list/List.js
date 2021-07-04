import React, { useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import useDeleteItem from "../customHooks/useDeleteItem";
import useGetItems from "../customHooks/useGetItems";
import useAddItem from "../customHooks/useAddItem";
import Item from "./Item";

const List = ({ navigation, route }) => {
  const { state, setState } = useGetItems();
  const handleAdd = useAddItem(setState, state);
  const handleDelete = useDeleteItem(setState, state);
  useEffect(() => {
    if (route?.params !== undefined) {
      handleAdd(route);
    }
  }, [route]);
  const handleNavigation = () => {
    navigation.navigate("Add New Character");
  };
  const renderItem = ({ item }) => (
    <Item item={item} navigation={navigation} handleDelete={handleDelete} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.simpsons}>
        <Text>Simpsons</Text>
      </View>
      <FlatList
        data={state}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.add} onPress={() => handleNavigation()}>
        <AntDesign name="pluscircle" size={56} color="royalblue" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default List;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  simpsons: {
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#b8b8b8",
  },
  add: {
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
