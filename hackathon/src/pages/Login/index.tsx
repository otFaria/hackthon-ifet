import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../../banco_de_dados/service/supabase';
import { useUser } from '../../auth/UserContext';
import styles from './styles';

const LoginScreen: React.FC = () => {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();
  const { setUser } = useUser();

  const handleLogin = async () => {
    try {
      const { data, error } = await supabase
        .from('usuarios')
        .select('*')
        .eq('matricula_usuario', matricula)
        .eq('senha', senha)
        .single();
        
      if (error) {
        Alert.alert('Erro', 'Erro ao fazer login: ' + error.message);
        console.error('Erro ao fazer login:', error.message);
      } else if (data) {
        const user = {
          id: data.id,
        };
        setUser(user);
        navigation.navigate('Home', { userId: user.id });
        console.log('ID do usuário:', user.id);
      } else {
        Alert.alert('Erro', 'Usuário não encontrado');
        console.log('Usuário não encontrado');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao fazer login: ' + error.message);
      console.error('Erro ao fazer login:', error);
    }
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Matrícula"
        value={matricula}
        onChangeText={setMatricula}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
