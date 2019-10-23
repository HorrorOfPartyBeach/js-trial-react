import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as api from './Api';

class App extends React.Component{
    state = {
        users: []
    };

      render() {
        //console.log(this, 'THIS');
        const {users} = this.state;
        return (
          <div>
          <h1>Users</h1>
          {users.map(user => {
            console.log(user, 'user1')
        return <div key={user.id} className="userList">
          <p>{user.id}</p>
        <p>{user.name}</p>
        <p>{user.online_status}</p>
        <img src={user.picture && user.picture.url} alt="Avatar"></img>
       </div>
        })}
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
        })
    }
}

export default App;