import React, { Component } from 'react';
import Wrapper from './components/Wrapper/Wrapper.js'
import Navbar from './components/navComponent/navbar.js'
import Jumbotron from './components/jumbotronComponent/jumbotron.js'
import Footer from './components/footerComponent/footer.js'
import Tiles from './components/tilesComponent/tiles.js'


class App extends Component {
    render() {
      return (
        // just be wrapped in an enclosing tag. single wrap (you wrap everything in a button, a p tag, etc)
        <Wrapper>
          <Navbar/>
          <Jumbotron/>
          <Tiles/>
          <Footer/>
        </Wrapper>
      );
    }
  }

export default App;
