import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.image}
      />
    </View>
  );
};

export default ImageScreen;
