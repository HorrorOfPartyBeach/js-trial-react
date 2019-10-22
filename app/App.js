import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
    state = {
        users: []
    };

    componentDidMount() {
        fetch('/users')
          .then(res => res.json())
          .then(users => this.setState({ users }));
      };

      render() {
        return (
          <div className="App">
            <h1>PlanetRomeo</h1>
            {this.state.users.map(user =>
              <div key={user.id}>{user.username}</div>
            )}
          </div>
        );
      }
}

ReactDOM.render(<App />, document.getElementById('app'))