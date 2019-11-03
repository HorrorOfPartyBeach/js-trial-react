import React, { Component } from 'react';
import * as api from '../Api';
import {Container, Row, Col} from 'react-bootstrap';

class ProfileCard extends Component{
    state = {
        users: [],
        fullInfo: [],
        combinedProfiles: []
    };

      render() {
        const {combinedProfiles} = this.state;
        
        return (
          <div id="app" role="main">

          <div>
            <img alt="Planet Romeo logo" id="romeoLogo" src="app/assets/planetromeo.svg"></img>
            </div>

<Container id="profileContainer">
  <Row id="profileRow">

      {combinedProfiles.map((user) => {
        return <div key={user.id} className="userProfiles">

      <Col sm={3} className="profileCols">
        <img className="profilePic" src={user.picture && user.picture.url || './app/assets/nopic.png'} alt={user.name}></img>
          <p id="headline">"{user.headline}"</p>
          <p className="userDetails">Name: {user.name}</p>
          <p className="userDetails">Age: {user.personal.age}</p>
          <p className="userDetails">Location: {user.location.city}</p>
          <p className="userDetails">Distance: {user.location.distance}</p>
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
        this.fetchUsers();
        this.fetchAllDetails();
      }

      // Fetch the returned data of the initial basic user information
      fetchUsers = async () => {
        const basicUsers = await api.getUsers();
        this.setState({
          users: basicUsers.items
        });
      };

      // Fetch the returned data of the more detailed user information
      fetchAllDetails = async () => {
        const details = await api.getAllDetails();
        const users = this.state.users;

        // Concat the two arrays of returned data
        let merge = [...details, ...users];

        // Reduce the concatenated array to match and combine objects with the same id
        let allData = merge.reduce(function(acc, curr) {
          let findIndex = acc.findIndex(function(item) {
            return item.id === curr.id
          });
      
          if (findIndex === -1) {
            acc.push(curr)
          } else {
            acc[findIndex] = (Object.assign({}, acc[findIndex], curr))
          }
      
          return acc;
        }, [])

        this.setState({
          combinedProfiles: allData
        });
        console.log(this.state.combinedProfiles, 'profiles');
      };

}

export default ProfileCard;