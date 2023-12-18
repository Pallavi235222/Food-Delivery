import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate('(home)');
  }, [navigation]);

  return null; // Since this is a redirect, no need for any content to be rendered
};

export default Index;
