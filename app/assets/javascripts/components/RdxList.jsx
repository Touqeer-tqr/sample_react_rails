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

const employeesFetch = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(json => {
                var action = { type: 'ALL_USERS', payload: json }
                dispatch(action)
            })
    };
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
    )
  }
}

// RdxList.propTypes = {
//   user: React.PropTypes.array,
// };

// const mapStateToProps = (state) => ({
//   user: state.notifications.data
// })