import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const App = () => {
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("El permiso de la camara es Obligatorio, Por favor acepte el permiso");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hola mundo!</Text>
        <Image source={{ uri: 'https://picsum.photos/200/300' }}
          style={styles.image}
        />

        <TouchableOpacity style={styles.button}
          onPress={openImagePickerAsync}
        >
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>
      </View >
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1, justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "cornsilk"

    },
    title: {
      fontSize: 30, color: "aqua"
    },
    image: {
      height: 180,
      width: 180,
      borderRadius: 90,
    },
    button: {
      backgroundColor: "aqua",
      padding: 7,
      marginTop: 10,
    },
    buttonText: {
      color: "black",
      fontSize: 20,
    }
  });
}




export default App;