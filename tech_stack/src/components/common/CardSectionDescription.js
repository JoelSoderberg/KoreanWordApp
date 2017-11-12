import React from 'react';
import { View } from 'react-native';

const CardSectionDescription = (props) => {
  return (
    <View style={{ ...styles.containerStyle, backgroundColor: props.color }}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSectionDescription };
