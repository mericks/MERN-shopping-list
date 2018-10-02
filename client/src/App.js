import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ItemList from './components/ItemList';
import AddItemModal from './components/AddItemModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemList />
            <AddItemModal />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
