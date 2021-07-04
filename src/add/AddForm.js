import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const AddForm = ({navigation}) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [about, setAbout] = useState("");
  const [avatar, setAvatar] = useState("");
  const handleSubmit=()=>{
    navigation.navigate('Simpsons',{
        job,
        about,
        avatar,
        name
    })
  }
  return (
    <View style={styles.loginView}>
      <Text style={styles.text}>Name Surname</Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.text}>Job Title</Text>
      <TextInput
        style={styles.textInput}
        value={job}
        onChangeText={(text) => setJob(text)}
      />
      <Text style={styles.text}>About Him/Her:</Text>
      <TextInput
        style={styles.textInput}
        editable
        multiline={true}
        numberOfLines={8}
        value={about}
        onChangeText={(text) => setAbout(text)}
      />
      <Text style={styles.text}>İmage Link:</Text>
      <TextInput
        style={styles.textInput}
        value={avatar}
        onChangeText={(text) => setAvatar(text)}
      />
      <TouchableOpacity style={styles.touchableOpacity} onPress={() => handleSubmit()}>
           <Text style={{color:'white'}}>Add Character</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AddForm;

const styles = StyleSheet.create({
  loginView: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop:10,
    marginHorizontal:10
  },
  touchableOpacity:{
   borderRadius:10,
   backgroundColor:'royalblue',
   paddingHorizontal:10,
   paddingVertical:15,
   alignItems:'center'
  },
  text:{
   marginLeft:10
  },
  textInput:{
    marginBottom: 20,
    minHeight:40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor:'white'
  }
});
