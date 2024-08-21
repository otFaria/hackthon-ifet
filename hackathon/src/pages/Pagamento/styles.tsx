import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

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
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  qrCode: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    color: '#007BFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  copyButton: {
    backgroundColor: '#23C646',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  copyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  beneficiario: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  valor: {
    fontSize: 18,
    color: '#333',
  },
  progressContainer: {
    width: '100%',
    height: 12,
    backgroundColor: '#e0e0e0',
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  progressBar: {
    height: '100%',
    borderRadius: 6,
    backgroundColor: '#000',
    position: 'relative',
    overflow: 'hidden',
  },
  timer: {
    fontSize: 20,
    color: '#333',
  },
});

export default styles;
