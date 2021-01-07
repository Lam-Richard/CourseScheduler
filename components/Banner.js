import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Banner = ({title}) => {
    return (
      <Text style={styles.banner}>{title}</Text>
    )
  };

const styles = StyleSheet.create({
    banner: {
        color: '#888',
        fontSize: 32,
        },
})

export default Banner;