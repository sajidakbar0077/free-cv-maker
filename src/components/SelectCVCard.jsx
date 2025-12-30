// components/SelectCVCard.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SelectCVCard = ({ image, name, selected, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[localStyles.card, selected && localStyles.selectedCard]}
    >
      <View style={localStyles.imageContainer}>
        <Image source={image} style={localStyles.image} resizeMode="cover" />
      </View>

      <Text style={localStyles.title} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
    marginBottom: 16,
  },
  selectedCard: {
    borderWidth: 3,
    borderColor: '#06CFF9', 
  },
  imageContainer: {
    height: 220,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    paddingHorizontal: 14,
    paddingVertical: 14,
    textAlign: 'left',
  },
});

export default SelectCVCard;