import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList,TouchableOpacity, ScrollView } from 'react-native';
import GoalItem from './goalitem';
import GoalInput from './goalinput';
import { useNavigation } from '@react-navigation/native';


export default function TodoScreen() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const navigation = useNavigation();
  
    const addGoalHandler = goalTitle => {
      setCourseGoals(currentGoals => [
        ...currentGoals,
        { id: Math.random().toString(), value: goalTitle }
      ]);
      setIsAddMode(false);
    };
  
    const removeGoalHandler = goalId => {
      setCourseGoals(currentGoals => {
        return currentGoals.filter(goal => goal.id !== goalId);
      });
    };
  
    const cancelGoalAdditionHandler = () => {
      setIsAddMode(false);
    };
  
    return (
        <View style={{flex:1}}>
      <View style={styles.screen}>
         
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={cancelGoalAdditionHandler}
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
          )}
        />
        
        
      </View>
      <View style={{position:'absolute',left:0,right:0,bottom:0,flex:0.1}}>
      <Button onPress={()=> navigation.navigate('Login')} title='Log Out'/>
  </View>
      
  </View>
    );
  }
  
  const styles = StyleSheet.create({
    screen: {
      padding: 50,
      flex:0.9
    }
  });