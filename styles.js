import {StyleSheet} from 'react-native';
import {create} from 'react-test-renderer';

// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'red',
//   },

//   nav: {
//     backgroundColor: 'lightgray',
//   },

//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },

//   content: {
//     fontSize: 23,
//     fontWeight: 'bold',
//   },
//   section1: {
//     backgroundColor: '#999',
//     width: 250,
//     height: 250,
//   },
//   section2: {
//     backgroundColor: '#666',
//     width: 250,
//     height: 250,
//   },
//   section3: {
//     backgroundColor: '#333',
//     width: 250,
//     height: 250,
//   },
// });

const boxes = StyleSheet.create({
  box: {
    backgroundColor: '#999',
    width: 250,
    height: 50,
    marginBottom: 3,
  },
});

const wrapper = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcc00',
    //justifyContent: 'center', // vertical align
    alignItems: 'center', // horizontal align
  },
});

const myImage = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

const progressBar = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  bar: {
    height: 20,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
  },
  absoluteFill: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export {boxes, wrapper, myImage, progressBar};
