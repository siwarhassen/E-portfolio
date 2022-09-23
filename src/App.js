import { BrowserRouter , Route, Switch } from "react-router-dom";

import Content from './components/Content';
import InfoBar from './components/infobar';
import MenuBar from './components/Menubar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Certification from './components/Certification';
import DetailProject from './components/DetailProject';
import History from './components/History';
// import '../public/css/style.css';
function App() {
  return (
    <BrowserRouter forceRefresh={true}>
  {/* <div className="art-preloader">
   <div className="art-preloader-content">

    <div id="preloader" className="art-preloader-load"></div>
   </div>
 </div> */}
    <div className="art-app">


    {/* <!-- mobile top bar --> */}
    <div className="art-mobile-top-bar"></div>

    {/* <!-- app wrapper --> */}
    <div className="art-app-wrapper">

      {/* <!-- app container end --> */}
      <div className="art-app-container">

        {/* <!-- info bar --> */}
        <InfoBar/>
        
        {/* <!-- info bar end --> */}

        {/* <!-- menu bar --> */}

        {/* <!-- menu bar end --> */}
        <Switch>
          <Route  exact path="/" component={Content}/>
          <Route  exact path="/contact" component={Contact}/>
          <Route exact path="/interests" component={Interests}/>
          <Route exact path="/certification" component={Certification}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/history" component={History}/>
        <Route path="/detailproject/:projectid" exact render={(props) => <DetailProject {...props} />}></Route>
          <Route  exact path="*" component={Content}/>
        </Switch>
        <MenuBar />
        {/* <!-- content --> */}
{/* <Content /> */}
          {/* <!-- swup container end --> */}

        </div>
        {/* <!-- content end --> */}



      </div>
      {/* <!-- app container end --> */}


    </div>
    </BrowserRouter>
  );
}


export default App;
