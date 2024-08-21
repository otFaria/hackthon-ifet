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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
  totalText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
    fontWeight: '300',
  },
  button: {
    backgroundColor: '#23C646',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
