import Header from './header';

// import '../../style/style';
// import '../../styles/style.scss';


const Layout = props => (
  <div className="container">
    <Header />
    {props.children}
  </div>
);

export default Layout;