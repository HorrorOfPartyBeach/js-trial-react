import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as api from './Api';
import {Container, Row, Col} from 'react-bootstrap';
//import Row from 'react-bootstrap/Row';
import './App.css';

import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component{
    state = {
        users: [],
        profile: []
    };

      render() {
        const {users} = this.state;
        return (
          <div id="app" role="main">

          <div >
            <img alt="Planet Romeo logo" id="romeoLogo" src="app/assets/planetromeo.svg"></img>
            </div>

<Container>
  <Row>
          {users.map(user => {
        return <div key={user.id} className="userProfiles">

<Col xs="3">
        <p>{user.id}</p>
        <p>{user.name}</p>
        <p>{user.online_status}</p>
        <img className="profilePic" src={user.picture && user.picture.url} alt={user.name}></img>
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
        });
    }
}

export default App;