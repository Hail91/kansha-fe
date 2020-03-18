import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../../store/actions/feed-actions';
import { ReactComponent as AddComment } from '../../assets/addcomment.svg';

export const SendComments = ({ id, scrollToBottom }) => {
	const [newComment, setNewComment] = useState('');

	const dispatch = useDispatch();

	const handleInput = event => {
		setNewComment(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log(newComment);
		dispatch(addComment(id, newComment, sendSuccess));
	};

	const sendSuccess = () => {
		setNewComment('');
		scrollToBottom();
	};
	return (
		<section className="comment-box">
			<textarea
				//we want to be able to use the AddComment svg inside the placeholder
				placeholder={`Type message here`}
				value={newComment}
				onChange={handleInput}
			/>
			<button onClick={handleSubmit}>Send</button>
		</section>
	);
};
