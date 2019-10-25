import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import * as api from './Api';
import {Container, Row, Col} from 'react-bootstrap';
import './App.css';

class App extends React.Component{
    state = {
        users: []
    };

      render() {
        const {users} = this.state;
        return (
          <div id="app" role="main">

          <div >
            <img alt="Planet Romeo logo" id="romeoLogo" src="app/assets/planetromeo.svg"></img>
            </div>

<Container id="profileContainer">
  <Row id="profileRow">

          {users.map((user) => {
        return <div key={user.id} className="userProfiles">

      <Col sm={3} className="profileCols">
        <img className="profilePic" src={user.picture && user.picture.url || './app/assets/nopic.png'} alt={user.name}></img>
          <p id="comment">"{user.picture && user.picture.comment || 'No Comment'}"</p>
          <p className="userDetails">Name: {user.name}</p>
          <p className="userDetails">Online status: {user.online_status}</p>
          <p className="userDetails">Last Login: {user.last_login}</p>
      </Col>

          </div>
        })}

        </Row>
</Container>

         </div>
        );
      }

      componentDidMount() {
        console.log('Component mounted...')
        api.getUsers()
            .then(data => {
        console.log(data, 'users')
          this.setState({
              users: data.items
          })
          console.log(this.state, 'State');
        })
        .catch(err => {
          console.log(err.message, 'error');
        })
    };
    
}

export default App;