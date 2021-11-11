import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  input: {
    height: 40,
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    borderColor: 'gray',
  },
  title: {
    marginHorizontal: 20,
    marginTop: 24,
    fontSize: 15,
    marginBottom: 4,
  },
  buttonContainer: {
    height: 40,
    marginHorizontal: 20,
    marginTop: 24,
    borderRadius: 10,
    width: '70%',
    alignSelf: 'center',
  },
  button: {
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
  },
  datepicker: {
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#FFFFFF',
    textShadowColor: '#000000',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 1,
  },

});
