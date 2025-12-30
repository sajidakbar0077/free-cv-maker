import { View, Text, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import SelectionCard from '../components/SelectionCards';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../style/style';

const SelectSections = () => {
  const cards = [
    {
      title: 'Personal Information',
      details: 'Your Contact Details, Links, And Basic Info',
      icon: 'person',
    },
    {
      title: 'Work Information',
      details: 'Company Details, Position, And Contact Info',
      icon: 'work',
    },
    {
      title: 'Education',
      details: 'School, College, and University Details',
      icon: 'school',
    },
    {
      title: 'Skills',
      details: 'Your Technical And Soft Skills',
      icon: 'build',
    },
    {
      title: 'Work Experience',
      details: 'Previous Jobs And Roles',
      icon: 'business-center',
    },
    {
      title: 'Hobbies',
      details: 'Your Interests And Hobbies',
      icon: 'sports-esports',
    },
    {
      title: 'Languages',
      details: 'Languages You Speak',
      icon: 'language',
    },
    {
      title: 'Projects',
      details: 'Projects You Have Worked On',
      icon: 'folder',
    },
    {
      title: 'Preferences',
      details: 'Your Preferences And Settings',
      icon: 'settings',
    },
    {
      title: 'Certifications',
      details: 'Your Certificates And Courses',
      icon: 'card-membership',
    },
    {
      title: 'Achievements',
      details: 'Awards And Achievements',
      icon: 'emoji-events',
    },
  ];

  return (
  <View style={{ flex: 1, position: 'relative' }}>

      <View style={styles.headerContainer}>
        <Pressable >
          <MaterialIcons name="arrow-back" size={24} color='#111827' />
        </Pressable>

        <Text style={styles.headerTitle}>Select Sections</Text>
      </View>
    <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
     {cards.map((cards,index) => (
       <SelectionCard key={index} title={cards.title} details={cards.details} iconName={cards.icon}/>
     ))}  
    </ScrollView>
       <View style={[styles.footer, { position: 'absolute', bottom: 0, left: 0, right: 0 }]}>
        <TouchableOpacity style={styles.footerButton} onPress={() => console.log('Create New CV')}>
          <Text style={styles.footerButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
   </View>
  )
}

export default SelectSections