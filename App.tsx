import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Layout from './components/Layout';
import { FC } from 'react';
import Typography from './components/Typography';
import Pizza from './components/Pizza/Pizza';

const App: FC = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Typography text='Лучшая пицца🍕' size={30} weight={"900"} />
        <Pizza />
        <StatusBar style="auto" />
      </View>
    </Layout>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  },
});
