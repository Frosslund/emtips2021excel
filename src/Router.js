import { Route, Switch } from 'react-router-dom';
import StartView from './StartView';
import TipsView from './TipsView';
import BloggView from './BloggView';
import ReglerView from './ReglerView';

const Router = () => {
	return ( // views to switch between in the main body of the page
		<Switch>
			<Route exact path="/" component={StartView} />
			<Route exact path="/tips" component={TipsView} />
            <Route exact path="/blogg" component={BloggView} />
			<Route exact path="/regler" component={ReglerView} />
		</Switch>	
	)
}

export default Router;