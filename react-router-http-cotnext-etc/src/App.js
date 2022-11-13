import { Route, Switch } from 'react-router-dom';

import AllMeetUpPage from './pages/AllMeetUp';
import NewMeetUpPage from './pages/NewMeetUp';
import Favourites from './pages/Favourites';
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';

function App() {
    return (
        <Layout className="App">
            <Switch>
                <Route path="/" exact>
                    <AllMeetUpPage />
                </Route>
                <Route path="/new-meetup/" exact>
                    <NewMeetUpPage />
                </Route>
                <Route path="/favourites" exact>
                    <Favourites />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
