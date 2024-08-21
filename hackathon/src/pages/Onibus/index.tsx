import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";

const ViajacaoRioPombaScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  const navigateToHorarios = () => {
    navigation.navigate('Horario');
  };

  const navigateToRecarga = () => {
    navigation.navigate('TicketBus');
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
        <Text style={styles.title}>Viação Rio Pomba</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={navigateToHorarios}>
            <Image
              source={require('../../assets/Clock.png')}
              style={styles.clock}
            />
            <Text>Horários</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={navigateToRecarga}>
            <Image
              source={require('../../assets/Card.png')}
              style={styles.card}
            />
            <Text>Recarga</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ViajacaoRioPombaScreen;
