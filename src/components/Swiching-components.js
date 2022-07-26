import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainTitle } from './Home';
import { NavBar } from './Nav-bar';
import {TableHeadSeptember, TableHeadOctober, TableBodySeptember, TableBodyOctober} from './Schedule';
import { RenderingUpcomingEvents } from './Home';
import {RenderingContactBox} from './Contact'
import { Matches } from './Schedule-extensions';
import {MessagesToEachGame } from './Chat'
import { PhotoGallery } from './Photo-gallery'


function RouterComponent (){

  
    return(
      <Router>
      <div>
        <NavBar />
        <MainTitle />
          <Switch>
            <Route path="/" exact>
              <div className="d-flex justify-content-around">
                <RenderingUpcomingEvents />
                <RenderingContactBox />
              </div>
            <div className='text-center img1'>
            </div>
            </Route>

            <Route exact path="/schedule/:id/:game" component={MessagesToEachGame}>
              <MessagesToEachGame />
            </Route>

            <Route exact path="/schedule/:id/:game/:gallery" component={PhotoGallery}>
              <PhotoGallery/>
            </Route>
            <Route exact path="/schedule/:id" component={Matches}>
              <Matches/>
            </Route>
            <Route path="/schedule">
              <div className="d-flex justify-content-around">
                <table className="table table-striped table-hover table1">
                  <TableHeadSeptember />
                  <tbody>
                    <TableBodySeptember />
                  </tbody>
                </table>
                <table className="table table-striped table-hover table 2">
                  <TableHeadOctober />
                  <tbody>
                    <TableBodyOctober />
                  </tbody>
                </table>
              </div>
            </Route>
          </Switch>
      </div>
    </Router>
    )
}

export default RouterComponent;