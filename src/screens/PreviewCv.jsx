import { View, Text, Pressable, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../style/style'

const PreviewCv = () => {
  return (
    <View style={{ flex: 1, position: 'relative' }}>
         <View style={styles.headerContainer}>
        <Pressable>
          <MaterialIcons name="arrow-back" size={24} color="#111827" />
        </Pressable>
        <Text style={styles.headerTitle}>CV Preview</Text>
      </View>


 <View style={{ flex: 1, padding: 10, paddingBottom: 90 }}>
    <Image
      source={require('../assets/images/ats1.png')}
      style={{ width: '100%', height: '100%' }}
      resizeMode="contain"
    />
  </View>

<View style={[styles.footer, { position: 'absolute', bottom: 0, left: 0, right: 0 }]}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PreviewCv