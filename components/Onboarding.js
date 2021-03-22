import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import OnboardingItem from '../components/OnboardingItem'
import slides from '../slides'

export default function Onboarding() {
  return (
    <View style={styles.container}>
        <FlatList 
            data = {slides} 
            renderItem = {({item}) => <OnboardingItem item = {item}/>}
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            bounces = {false}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
