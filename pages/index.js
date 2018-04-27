import withRedux from 'next-redux-wrapper';
import store from '../store';
import Index from '../components/homepage/index';
import { addUser } from '../reducers/user';

const mapStateToProps = state => ({
  users: state.userReducer.users,
  blogs: state.blogReducer
});

const mapDispatchToProps = dispatch => ({
  addUser: data => dispatch(addUser(data)),
});

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Index);

