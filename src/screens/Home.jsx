import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../style/style';


const Home = () => {
  return (
    <View style={{flex:1}}>
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <Image
          style={styles.logoImage}
          source={require('../assets/images/logo.png')}
        />
        <Text style={styles.appTitle}>
          <Text style={styles.brandText}>Free</Text>
          <Text style={styles.normalText}> CV Maker</Text>
        </Text>
      </View>
      <View style={styles.headerRight}>
        <Text>Icon</Text>
      </View>
    </View>

    <View style={styles.centerContainer}>
      <Text style={styles.mainText}>Create Your Professional Cv</Text>

    <View style={styles.buttonGroup}>
    <TouchableOpacity style={styles.primaryButton}>
      <Text style={styles.primaryButtonText}>Create New CV</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.secondaryButton}>
      <Text style={styles.secondaryButtonText}>My Saved CV</Text>
    </TouchableOpacity>
  </View>
    </View>
    </View>


   
  );
};

export default Home;
