import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 80,
    color: '#333',
    textAlign: 'center',
  },
  image: {
    width: 600,
    height: 500,
    resizeMode: 'contain',
  },
});

export default styles;
