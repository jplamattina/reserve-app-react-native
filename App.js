import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Home from './src/screen/Home'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Home />
        <StatusBar style={styles.statusBar} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBar: {
    backgroundColor: 'red',
  }
});
