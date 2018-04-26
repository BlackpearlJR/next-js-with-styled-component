import Header from './header';

import '../../style/style';

const Layout = props => (
  <div className="container">
    <Header />
    {props.children}
  </div>
);

export default Layout;