import React,{useState} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import RNLocation from 'react-native-location';
import { useNavigation } from '@react-navigation/native';

RNLocation.configure({
  distanceFilter: 1,
});

//distanceFilter - minimum distance in meters that a device
//location will change before a new location is updated

const GetLocation = () => {
  //click on Get location - action
  const navigation = useNavigation();
  const [viewLocation,isViewLocaion] = useState([]);
  //const [tweet, setTweet] = useState([showLocation.longitude, showLocation.latitude]);
  const permissionHandle = async () => {
    console.log('inside the async call-1');
    //CHECK IF LOCATION ACCESS IS PERMITTED OR NOT
    let permission = await RNLocation.checkPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'coarse', //or 'fine'
      },
    });
    console.log('inside the async call-2');
    console.log(permission);
    //REQUEST THE LOCATION
    permission = await RNLocation.requestPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'coarse',
        rationale: {
          title: 'We need to access your location',
          message: 'We use your location to show where you are on the map',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      },
    });
    console.log('after requesting the permission: user responded with');
    console.log(permission);
    //check permission and make it compulsory to give access to your location
    let location;

    if (!permission) {
      //if the permission is not given
      permission = await RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'coarse',
          rationale: {
            title: 'We need to access your location',
            message: 'We use your location to show where you are on the map',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          },
        },
      });
      console.log(permission);
      location = await RNLocation.getLatestLocation({timeout: 100});
      console.log(
        location,
        location.longitude,
        location.latitude,
        location.timestamp,
      );
    } else {
      console.log('Here 7');
      location = await RNLocation.getLatestLocation({timeout: 100});
      console.log(
        
        location.longitude,
        location.latitude,
        location.timestamp,
      );
      isViewLocaion(location);
    }
  };

   


  return (
    <View style={styles.container}>
      <View
        style={{marginTop: 10, padding: 10, borderRadius: 30, width: '80%',}}>
        <Button style={{fontSize:50}} title="Get Location" onPress={permissionHandle} />
      </View>
      <Text style={{fontSize:25}}>Latitude:{viewLocation.latitude}</Text>
      <Text style={{fontSize:25}}>Longitude:{viewLocation.longitude}</Text>
      <View style={{position:'absolute',left:0,right:0,bottom:0,flex:0.1}}>
      <Button onPress={()=> navigation.navigate('Login')} title='Log Out'/>
  </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

export default GetLocation;
