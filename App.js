import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';

export default class extends React.Component {
  getLocation = async () => {
    // 사용자의 현재 좌표를 가져온다
    const location = Location.getCurrentPositionAsync();
    console.log(location);
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    return <Loading />;
  }
}
