import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";

const HorariosOnibusIFScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack}>
        <Image
          source={require('../../assets/Return.png')}
          style={styles.img}
        />
      </TouchableOpacity>
      <View style={styles.base}>
      <Text style={styles.title}>Horários Ônibus IF</Text>
      <Image
        source={require('../../assets/horario.png')}
        style={styles.image}
      />
      </View>
    </View>
  );
};

export default HorariosOnibusIFScreen;
