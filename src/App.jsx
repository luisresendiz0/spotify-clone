import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from './Search';
import Home from './Home';
import { useEffect, useState } from 'react';

const initialState = JSON.parse(localStorage.getItem('favoritos') || '[]');

const App = () => {
	const [ favoriteSongs, setFavoriteSongs ] = useState(initialState);
	//const [ favoriteSongs, setFavoriteSongs ] = useLocalStorage('favoritos', []);
	useEffect(
		() => {
			localStorage.setItem('favoritos', JSON.stringify(favoriteSongs));
		},
		[ favoriteSongs ]
	);
	return (
		<Router>
			<Link to="/">Home</Link>
			<Link to="/search">Search</Link>
			<Switch>
				<Route exact path="/">
					<Home favoriteSongs={favoriteSongs} />
				</Route>
				<Route path="/search">
					<Search favoriteSongs={favoriteSongs} setFavoriteSongs={setFavoriteSongs} />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
