import React, { useState } from 'react';
import { View, Text, Pressable, ImageBackground } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../style/style';

const SelectionCard = ({title,details,iconName}) => {
  const [checked, setChecked] = useState(false);
  const toggle = () => setChecked(!checked);
  return (

     <Pressable
      onPress={toggle}
      style={[styles.card, checked && styles.cardChecked]}
    >

    <View style={styles.iconContainer}>
        <View style={styles.iconCircle}>
        <MaterialIcons name={iconName} size={24} color='#01D3F8' />
      </View>
      </View>

      <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
         <Text style={styles.detailText}>
          {details}
        </Text>
      </View>

     
      <Pressable onPress={toggle} style={styles.checkboxContainer}>
        <View style={[styles.box, checked && styles.checkedBox]}>
          {checked && <Text style={styles.tick}>✓</Text>}
        </View>
      </Pressable>
    </Pressable>
  )
}

export default SelectionCard