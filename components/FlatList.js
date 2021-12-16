import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';

function flatList() {
  const [Items, setItems] = useState([
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' },
    { name: 'Item 6' },
    { name: 'Item 7' },
    { name: 'Item 8' },
    { name: 'Item 9' },
    { name: 'Item 27' },
    { name: 'Item 78' },
  ]);
  const onRefresh =()=>{
    setRefreshing(true)
    setItems([...Items , {name : 'Nghĩa'}])
    setRefreshing(false)
  }
  const [Refreshing, setRefreshing] = useState(false);
  return (
    <FlatList
      style = {styles.body}
      keyExtractor={(item, index) => index.toString()}
      data={Items}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
        />
      }
      
    />
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});
export default flatList;
