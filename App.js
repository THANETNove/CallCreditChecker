import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/index';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      {/*  <Provider store={store}>
      <PersistGate persistor={persister}> */}
      <Navigation />
      {/*     </PersistGate>
   
    </Provider> */}
    </SafeAreaProvider>
  );
}

