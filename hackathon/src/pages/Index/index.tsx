import React, {useEffect} from 'react';
import { SafeAreaView } from 'react-native';
import ImageScreen from "../../components/logo";
import { useNavigation } from "@react-navigation/native";

const Index = () => {

  const navigation = useNavigation<any>();

  useEffect(() => {
      const timer = setTimeout(() => {
          navigation.navigate('Login', {}, { replace: true });//TEM Q FICAR NO LOGIN
      }, 3000);

      return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageScreen />
    </SafeAreaView>
  );
};

export default Index;