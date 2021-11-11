import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF',
    textShadowColor: '#000000',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },
  card: {
    backgroundColor: 'white',
    justifyContent: 'center',
    minHeight: 100,
    marginHorizontal: 20,
    marginVertical: 12,
    borderRadius: 10,
  },
  image: {
    borderRadius: 10,
  },
  imageOverlay: {
    flex: 1,
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
});
