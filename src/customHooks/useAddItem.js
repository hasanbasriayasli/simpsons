import useStorage from "./useStorage";
import uuid from 'react-native-uuid';

const AVATAR_LINK = "https://image.shutterstock.com/shutterstock/photos/744886198/display_1500/stock-vector-no-image-available-vector-illustration-on-white-background-744886198.jpg"
const useAddItem = (setState,state) => {
  return (route) => {
    const {addStore}= useStorage()
    const newItem = {
      id: uuid.v4(),
      name: route?.params?.name || "",
      job: route?.params?.job || "",
      about: route?.params?.about || "",
      avatar: route?.params?.avatar || AVATAR_LINK,
    };
    const newItems = [newItem, ...state];
    setState(newItems);
    addStore(newItems)
  };
};
export default useAddItem;
