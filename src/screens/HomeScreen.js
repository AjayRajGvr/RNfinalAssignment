import React,{useState} from 'react';
import {View,Button,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TodoScreen from './TodoScreen/TodoScreen';

export default function HomeScreen() {

    const navigation = useNavigation();

return(
   <View style={{flex:1,alignItems:'center'}} >

       <TouchableOpacity
          onPress={()=> navigation.navigate('ImagePicker')}
         style={styles.button} >
          <Text style={styles.btnText}>Go to ImagePicker</Text>
      </TouchableOpacity>

      <TouchableOpacity
          onPress={()=> navigation.navigate('Todo')}
          style={styles.button}>
          <Text style={styles.btnText}>Go to {'\n'}TODO App</Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={()=> navigation.navigate('Get location')}
          style={styles.button} >
          <Text style={styles.btnText}>View My Location</Text>
      </TouchableOpacity>
      <View style={{position:'absolute',left:0,right:0,bottom:0,flex:0.1}}>
      <Button onPress={()=> navigation.navigate('Login')} title='Log Out'/>
  </View>




   </View>

)

}

const styles = StyleSheet.create({

  button: {
    width: 200,
    marginTop: 60,
    backgroundColor: "#3982b3",
    padding: 25,
    borderRadius: 100,
  },
  btnText: {
    color: "white",
    fontSize: 25,
    justifyContent: "center",
    textAlign: "center",
  },
});