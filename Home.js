import React from 'react';

import { View, StyleSheet, Button } from 'react-native';
import Kontak from './kontak';

const Home = ({ navigation }) => {
  const handlePress = (gambar, judul, telpon) => {
    navigation.navigate('About', { gambar, judul, telpon });
};

return (
  <View style={styles.container}>
    <Kontak
    gambar={require('../assets/snack-icon.png')}
      judul="Ferry ekalaya"
    />
    <Button
      title="Deskripsi"
      onPress={() => handlePress(require('../assets/snack-icon.png'),
'Ferry ekalaya', '081378682871')}
     />

    <Kontak
    gambar={require('../assets/snack-icon.png')}
      judul="Fajar Budiman"
    />
   <Button
     title="Deskripsi"
      onPress={() => handlePress(require('../assets/snack-icon.png'), 'Fajar Budiman', '085746888777')}
    />
  </View>
);
};

  const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
});
   export default Home;