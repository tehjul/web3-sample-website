import '../styles/Body.css';
import Header from './Header';
import Main from './Main';

const Body = () => {
  return (
    <div className="body">
      <Header />
      <div className="delimiter"></div>
      <Main />
    </div>
  );
};

export default Body;