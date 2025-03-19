import React, { useEffect, useState, useContext } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import Counter from './Counter'
import Menu from './Menu'
import labs from '../data/labs'

const displayLab = (item) => {
	return (<ul>
		{
			Object.keys(item).map(el => {
				if (typeof item[el] != 'string')
					return displayLab(item[el])
				return <li>{item[el]}</li>
			})
		}
	</ul>)
}

const ContentItem = ({ lab }) => {
	const { theme } = useContext(ThemeContext);
	useEffect(() => {
		console.log('Content component mounted');

		return () => {
			console.log('Content component unmounted');
		};
	}, []); // Пустой массив зависимостей означает, что useEffect будет вызван только при монтировании и размонтировании

	if (!lab) {
		return (
			<Card className={theme == "light" ? 'light' : 'dark'}>
				<Card.Body>
					Выберите лабораторную работу из меню.
				</Card.Body>
			</Card>
		);
	}

	return (
		<Card className={theme == "light" ? 'light' : 'dark'}>
			<Card.Body>
				<Card.Title>{lab.title}</Card.Title>
				<Card.Text>{lab.subtitle ? lab.subtitle : ""}</Card.Text>
				<Card.Text as='div'>{displayLab(lab.content)}</Card.Text>
			</Card.Body>
		</Card>
	);
};


const Content = () => {
	const [selectedLab, setSelectedLab] = useState(null);

	const handleLabSelect = (labId) => {
		const lab = labs.find((lab) => lab.id === labId);
		setSelectedLab(lab);
	};
	return (
		<Routes>
			<Route path='/' element={<Row>
				<Col md={3}>
					<Menu labs={labs} onLabSelect={handleLabSelect} />
				</Col>
				<Col md={9}>
					<ContentItem lab={selectedLab} />
				</Col>
			</Row>} />
			<Route path='/redux' element={<Counter />} />
		</Routes>

	)
}

export default Content;