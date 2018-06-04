import React, { Component, Fragment } from 'react';
import Navbar from './components/navComponent/navbar.js'
import Jumbotron from './components/jumbotronComponent/jumbotron.js'
// import Footer from './components/footerComponent/footer.js'
import Tiles from './components/tilesComponent/tiles.js'
import friends from "./components/tilesComponent/tiles.json";
import swal from 'sweetalert';
import './App.css'


class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    friends: []
  }
  componentDidMount() {
    this.setState({ friends })
  }

  shuffle(friends) {
    var j, x, i;
    for (i = friends.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = friends[i];
      friends[i] = friends[j];
      friends[j] = x;
    }
    return friends;
  }


  handleEventChange = event => {
    const friendId = event.target.id;

    let friends = this.state.friends;

    // shuffle friends array
    friends = this.shuffle(friends);

    for (var i = 0; i < friends.length; i++) {
      if (friends[i].id == friendId) {

        if (friends[i].isClicked) {
          // if the user losses

          if (this.state.score !== friends.length) {
            swal({
              title: "You have lost!",
              text: "Keep training and testing your memory skills.",
              icon: "error",
              button: "Play Again",
            });
          }

          this.setState({ score: 0 })
          // reset all on click to false
          friends.map(friend => {
            friend.isClicked = false;
          })
        }
        else {
          this.setState({ score: this.state.score + 1 });
          // look into while this is happening
          if (this.state.highScore < this.state.score + 1) {
            this.setState({ highScore: this.state.score + 1 });
          }

          if (this.state.score + 1 == friends.length) {
            swal({
              title: "You have won the game!",
              text: "Keep training and testing your memory skills.",
              icon: "success",
              button: "Play Again",
            });

            this.setState({ score: 0 })
            // reset all on click to false
            friends.map(friend => {
              friend.isClicked = false;
            })
          }
          else {
            friends[i].isClicked = true
          }
        }
        break;
      }
    }
  }

  render() {
    return (
      <Fragment>
        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Jumbotron />
        <main role="main" className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              {this.state.friends.map(friend =>
                // do the on click event here
                <Tiles
                  key={friend.id}
                  id={friend.id}
                  name={friend.name}
                  image={friend.image}
                  onClick={this.handleEventChange}
                />
              )}
            </div>
            <div className="col-md-1"></div>
          </div>
        </main>
        {/* <Footer /> */}
      </Fragment>
    );
  }
}

export default App;
