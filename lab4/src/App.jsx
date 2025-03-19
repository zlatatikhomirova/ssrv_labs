import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Content from './components/Content';
import { Container } from 'react-bootstrap';
import labs from './data/labs'
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { counterReducer } from './store/redux'
import './App.css';

const store = createStore(counterReducer);

const App = () => {
	const [selectedLab, setSelectedLab] = useState(null);

	const handleLabSelect = (labId) => {
		const lab = labs.find((lab) => lab.id === labId);
		setSelectedLab(lab);
	};

	return (
		<Provider store={store}>
			<ThemeProvider>
				<Router>
					<Header />
					<Container className="mt-4 flex-grow-1">
						<Content lab={selectedLab} />
					</Container>
					<Footer />
				</Router>
			</ThemeProvider>
		</Provider>
	);
};

export default App;