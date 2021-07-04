import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
  const addStore = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@simpsonItems", jsonValue);
    } catch (e) {
      console.error("There was an error!");
    }
  };
  const getStore = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@simpsonItems");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error("There was an error!");
    }
  };
  return {
    addStore,
    getStore
  };
};
export default useStorage;
