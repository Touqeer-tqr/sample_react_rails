import { connect } from 'react-redux'

export default class Details extends React.Component {
  render() {
    console.log("You clicked on user: asdsddsadasdas");
    return (
      <div>
        <h4>{this.props.user.name}</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("You clicked on user: asdsddsadasdas");
  return {
    user: state.activeUser
  };
}

export default function (state = null, action) {
  switch (action.type) {
    case 'USER_SELECTED':
      return action.payload;
      break;
  }
  return state;
}

export default connect(mapStateToProps)(Details);

