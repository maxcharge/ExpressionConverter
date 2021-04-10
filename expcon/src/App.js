import './App.css';
import styles from './styles'

import Header from './components/Header'
import InfixPostfix from './components/InfixPostfix'
import Footer from './components/Footer'
import Test from './components/Test'

import {React} from 'react';
function App() {
  return (
    <div style={styles.parentContainer} >
      <Header>
        Expression Converter
      </Header>
      <InfixPostfix />
      <Footer/>
    </div>
  );
}

export default App;
