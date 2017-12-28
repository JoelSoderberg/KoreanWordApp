import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAbh9lMISrnUqfrhxjPsqmGdJzgUzAb104',
      authDomain: 'korean-96666.firebaseapp.com',
      databaseURL: 'https://korean-96666.firebaseio.com',
      projectId: 'korean-96666',
      storageBucket: 'korean-96666.appspot.com',
      messagingSenderId: '1079386364490'
    };
    firebase.initializeApp(config);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

// Connects the json file to the store.
export default connect(mapStateToProps)(LibraryList);
