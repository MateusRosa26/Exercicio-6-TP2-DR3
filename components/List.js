import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from './ListItem';

const List = ({ items }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <ListItem title={item.title} />}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
});

export default List;
