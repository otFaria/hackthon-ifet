import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../../banco_de_dados/service/supabase'

const Home: React.FC = () => {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [saldoRefeitorio, setSaldoRefeitorio] = useState(0);
  const [saldoOnibus, setSaldoOnibus] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      const { data, error } = await supabase
        .from('usuarios')
        .select('matricula_do_usuario, saldo_refeitorio, saldo_onibus')
        .eq('matricula_do_usuario', matricula) 
        .single();

      if (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      } else {
        setMatricula(data.matricula_do_usuario);
        setSaldoRefeitorio(data.saldo_refeitorio);
        setSaldoOnibus(data.saldo_onibus);
      }
    };

    fetchUserData();
  }, []);

  const handleRefeitorio = () => {
    navigation.navigate('Refeitorio');
  };

  const handleOnibus = () => {
    navigation.navigate('Onibus');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recarregar carteirinha</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleRefeitorio}>
        <Text style={styles.buttonText}>Refeitório</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={handleOnibus}>
        <Text style={styles.buttonText}>Ônibus</Text>
      </TouchableOpacity>

      <Text style={styles.saldoText}>Saldo:</Text>
      <Text style={styles.ticketText}>Tickets refeitório: {saldoRefeitorio}</Text>
      <Text style={styles.ticketText}>Tickets ônibus: {saldoOnibus}</Text>
    </View>
  );
};

export default Home;
