import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection, CardSectionDescription } from './common';
import * as actions from '../actions';

class ListItem extends Component {

  // Life cycle method - Will automatically be called after being defined
  // componentWillUpdate is run when the component is rerendered to the screen.
  componentWillUpdate() {
    LayoutAnimation.configureNext({
    duration: 300,
    create: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: 0.7,
    },
    update: {
      type: LayoutAnimation.Types.spring,
      springDamping: 0.7,
    },
  });
  }

  // Method for rendering description component
  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSectionDescription color='#87aaa2' >
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
        </CardSectionDescription>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    const { expanded } = this.props;
    const color = (expanded) ? '#87aaa2' : '#fbf8ed';

    return (
      <TouchableWithoutFeedback
        // When a component is being pressed, assign its id to the props.
        // If it's already being expanded, then close it by assigning -1.
        // SelectionReducer will then return null since there isn't any 
        // json object with the id of -1.
        onPress={() => this.props.selectLibrary(expanded ? -1 : id)} 
      >
        <View>
          <CardSection color={color}>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()} // Render the description component
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

// Return expanded if this component has the same id as the one being pushed.
// ownProps is equal to "this.props" of every specific component. That makes the expanded status individual.
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id; // Check if this library is being selected.
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
