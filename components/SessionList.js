import React from 'react'
import {Text , SafeAreaView , View , StyleSheet, SectionList} from 'react-native'

function sessionList(){
  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1'],
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2'],
    },
  ]
  return (
    <SafeAreaView>
      <SectionList style = {styles.body}
        keyExtractor={(item , index) => index.toString()}
        sections={DATA}
        renderItem={({item}) =>(
          <Text style={styles.text}>{item}</Text>
        )}
        renderSectionHeader={({section})=>(
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
      />
    </SafeAreaView>
  )
}
export default sessionList
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
    fontSize: 25,
    fontStyle: 'italic',
    margin: 10,
  },
});