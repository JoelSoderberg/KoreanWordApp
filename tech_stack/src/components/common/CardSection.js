import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={{ ...styles.containerStyle, backgroundColor: props.color }}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    marginTop: 1,
    marginBottom: 1,
    borderBottomColor: '#000',
    borderTopColor: '#000',
    padding: 10,
    backgroundColor: '#fbf8ed',
    borderRadius: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
