// import React from 'react';
// import ReactDOM from "react-dom";
// import { connect } from 'react-redux'
const selectUser = (user) => {
    console.log("You clicked on user: ", user);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

const allUsers = (user) => {
    return {
        type: 'ALL_USER',
        payload: user
    }
};

class RdxList extends React.Component {

   constructor(props) {
      super(props);
        
      this.state = {
         data:[
            {
               name: 'First...',
               id: 1
            },
            {
               name: 'Second...',
               id: 2
            },
            {
               name: 'Third...',
               id: 3
            }
         ]
      }
   }
  componentWillMount() {
    console.log("componentWillMount");
  }

  render() {
    return (
        <ul>
            {this.state.data.map(function(arr, index){
                return <h4 key={arr.id} onClick={() => this.selectUser(arr)}>
                    {arr.name}
                </h4>;
              })}
        </ul>
        // <h4>zcxc</h4>
        // <h4 key={user.id} onClick={() => this.props.selectUser(user)}> {user.name} </h4>
    )
  }
}