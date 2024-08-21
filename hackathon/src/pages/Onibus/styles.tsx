import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  goBackButton: {
    marginTop: 20,
    marginBottom: 20,
  },
  img: {
    height: 45,
    width: 50,
    resizeMode: 'contain',
  },
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 72,
    width: 72,
  },
  clock: {
    height: 72,
    width: 72,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 400, // Ajuste o tamanho máximo conforme necessário
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginHorizontal: 10,
    backgroundColor: '#D9D9D9', // Cor de fundo do botão (opcional)
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default styles;
