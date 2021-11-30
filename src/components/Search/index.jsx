import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/Auth';
import { searchUsersList } from '../../services/api';
import './styles.scss';

export function Search() {
	const [users, setUsers] = useState([]);
	const { user } = useAuth();
	const [displayValue, setDisplayValue] = useState();
	const userName = user.user_metadata.user_name;

	console.log('USUÁRIO', userName);

	function handleChange(event) {
		setDisplayValue(event.target.value);
	}

	function handleSubmit(event) {
		alert('Um nome foi enviado: ' + userName);
		event.preventDefault();
	}
	const [text, setText] = useState('');

	useEffect(() => {
		searchUsersList().then((response) => {
			setUsers(response);
		});
		console.log('user', userName);
		console.log('users', users);
	}, [users, user]);

	return (
		<div className='search'>
			<h1>Usuários</h1>
			<form onSubmit={handleSubmit}>
				<input type='search' value={displayValue} onChange={handleChange} />
			</form>
			{text && !users && <span>Carregando...</span>}
			{users && (
				<ul className='users-list'>
					{users.map((userName) => (
						<li key={users.login}>
							<img src={userName.avatar_url} alt={userName.name} />
							{userName.email}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
