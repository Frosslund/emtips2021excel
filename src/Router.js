import { Route, Switch } from 'react-router-dom';
import TipsView from './TipsView';
import BloggView from './BloggView';
import ReglerView from './ReglerView';
import BeforeView from './BeforeView';

const Router = () => {
	return ( // views to switch between in the main body of the page
		<Switch>
			<Route exact path="/" component={BeforeView} />
			<Route exact path="/tips" component={TipsView} />
            <Route exact path="/blogg" component={BloggView} />
			<Route exact path="/regler" component={ReglerView} />
		</Switch>	
	)
}

export default Router;