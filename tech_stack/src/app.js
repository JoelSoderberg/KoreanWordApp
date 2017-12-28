import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>              // Different components to show.
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <Header headerText="Korean" />                    // Header text
        <LibraryList />                                   // Card component
      </View>
    </Provider>
  );
};

export default App;
