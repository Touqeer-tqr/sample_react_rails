// import { connect } from 'react-redux'
import Details from './Details.jsx'

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

// export default connect(mapStateToProps)(Details);
