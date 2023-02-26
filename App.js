import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import image from './assets/diamond.png';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diamante 💎</Text>
      <Image source={{ uri: 'https://picsum.photos/200/200' }}
        style={styles.image}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "aliceblue"

  },
  title: {
    fontSize: 30, color: "aqua"
  },
  image: {
    height: 180,
    width: 180,
    borderRadius: 90,
  }
});
export default App;