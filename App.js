import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, Platform } from 'react-native';
import Navigator from './src/navigation/Navigator'
import { colors } from './src/constants/colors'
import { Provider } from 'react-redux';
import store from './src/store'
import { initSQLiteDB, truncateSessionsTable } from './src/persistence';

(async () => {
  try {
    await truncateSessionsTable()
    const response = await initSQLiteDB()
    console.log('response', {responseCreatingDb: response})
    console.log('db initialized')
  } catch (error) {
    console.log('error', {errorCreatingDB: error})
  }

})()


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <Navigator />
        </Provider>
        <StatusBar style={styles.statusBar} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.teal200,
  },
  statusBar: {
    backgroundColor: 'red',
  }
});
