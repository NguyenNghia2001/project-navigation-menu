import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [submited, setSubmited] = useState(false);
  const [showWarning, SetshowWarning] = useState(false);

  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmited(!submited);
    } else {
      SetshowWarning(true);
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/anhnen.jpeg')}>
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() => SetshowWarning(false)}
        animationType="slide">
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>ERROR!</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>
                The name must be longer than 3 charachters
              </Text>
            </View>
            <Pressable
              onPress={() => SetshowWarning(false)}
              style={styles.warning_button}
              android_ripple={{ color: '#fff' }}>
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Text style={styles.textheader}>Please write login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        onChangeText={(value) => setName(value)}
        placeholderTextColor = '#cccccc'
      />
      <TextInput
        style={styles.input}
        secureTextEntry = {true}
        placeholder="Enter password"
        placeholderTextColor = '#cccccc'
        onChangeText={(value) => setName(value)}
      />
      <Pressable
        onPress={onPressHandler}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#f24b4b' : '#fc1919' },
          styles.button,
        ]}>
        <Text style={styles.text}>{submited ? 'Clear' : 'Submit'}</Text>
      </Pressable>

      {submited ? (
        <View style={styles.container}>
          <Text style={styles.text}>You are registered as : {name}</Text>
          <Image
            style={styles.image}
            source={require('../../assets/done.png')}
            resizeMode="stretch"
          />
        </View>
      ) : (
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_960_720.png',
          }}
          resizeMode="stretch"
        />
      )}
     
    </ImageBackground>
  );
};
export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  text: {
    color: '#000000',
    fontSize: 24,
    margin: 10,
    textAlign: 'center',
  },
  textheader:{
    fontSize: 24,
    margin: 10,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    fontSize: 20,
    marginBottom: 10,
    paddingLeft: 20,

  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
    borderRadius: 5,
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f43535',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  back: {
    width: '100%',
    borderRadius: 5,
    fontSize: 14,
    textAlign: 'center',
    padding: 5,
    textDecorationLine: 'underline',
    color: '#1212e2'
  }
});
