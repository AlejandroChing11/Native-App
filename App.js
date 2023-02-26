import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Er diavlo loko 👺👺👺</Text>
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
    fontSize: 30, color: "crimson"
  },
  image: {
    height: 200,
    width: 200
  }
});
export default App;