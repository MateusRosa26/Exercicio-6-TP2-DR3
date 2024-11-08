import React from 'react';
import { StyleSheet, View } from 'react-native';
import List from './components/List';

const App = () => {
  const items = [
    { id: '1', title: 'Comprar leite' },
    { id: '2', title: 'Estudar React Native' },
    { id: '3', title: 'Caminhar' },
  ];

  return (
    <View style={styles.container}>
      <List items={items} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
});

export default App;
