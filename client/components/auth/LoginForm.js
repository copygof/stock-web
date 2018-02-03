import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form'
import {withStyles} from 'material-ui/styles';
import Card, {CardHeader, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';

// Import custom components
import renderText from '../common/form/renderText';

const styles = {
	root: {
		minWidth: 320,
		maxWidth: 400,
		height: 'auto',
		position: 'absolute',
		top: '15%',
		left: 0,
		right: 0,
		margin: 'auto'
	},
	card: {
		padding: 20,
		overflow: 'auto'
	},
	cardHeader: {
		textAlign: 'center'
	},
	btnDiv: {
		textAlign: 'center'
	},
	btn: {
		marginTop: 21,
	}
};

const LoginForm = props => {

	const {handleSubmit, onSubmit, classes} = props;

	return (
		<div className={classes.root}>
			<Card className={classes.card}>
				<CardHeader
					className={classes.cardHeader}
					title="Login"
				/>
				<CardContent>
					<form method="post" onSubmit={handleSubmit(onSubmit)}>
						<Field
							type="text"
							name="email"
							component={renderText}
							label="Username"
						/>
						<br />
						<Field
							type="password"
							name="password"
							component={renderText}
							label="Password"
						/>
						<br />
						<div className={classes.btnDiv}>
						{/* <Link to={'/' + 'dashboard'}> */}
							<Button className={classes.btn} type="submit" raised color="primary">Login</Button>
						{/* </Link> */}
						   
						</div>
					</form>
				</CardContent>

			</Card>
		</div>
	)
};

const validateLogin = values => {
	const errors = {}

	const requiredFields = [
		'email',
		'password'
	];
	requiredFields.forEach(field => {
		if (!values[field]) {
			errors[field] = '(The ' + field + ' field is required.)';
		}
	});

	if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = '(Invalid email address.)';
	}
	return errors
};

LoginForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired
};

export default reduxForm({
	form: 'LoginForm', // a unique identifier for this form
	validate: validateLogin // ←Callback function for client-side validation
})(withStyles(styles)(LoginForm))
