import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.loading}>Getting the Weather...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: '#FFC371',
  },
  loading: {
    color: 'white',
    fontSize: 25,
  },
});
