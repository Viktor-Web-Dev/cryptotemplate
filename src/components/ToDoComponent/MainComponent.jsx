import React, { useState, memo } from 'react';
import {
	CircularProgress,
	Container,
	makeStyles,
	Typography
} from '@material-ui/core';

import {TODO_LIST_ADDRESS, TODO_LIST_ABI} from '../config';
import ToDoList from '../ToDoList/ToDoList';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	wrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	},
	container: {
		width: '390px',
	},
}));

const MainComponent = () => {
	const classes = useStyles();
	const [item, setItem] = useState(
		{
			tasks: [],
			taskCount: 0,
			account: '',
			loading: true,
		});
	const [flag, setFlag] = useState(false);
	const [inputValue, setInputValue] = useState('');

	return (
		<Container className={classes.wrapper}>
			<Container className={classes.container}>
				<Typography variant="h2">
					TO DO LIST
				</Typography>
				{item.loading ? (
					<div className={classes.root}>
						<CircularProgress />
					</div>
				) : (
					<ToDoList />
				)}
			</Container>
		</Container>
	);
};

export default memo(MainComponent);