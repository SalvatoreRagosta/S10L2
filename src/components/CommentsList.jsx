import React from 'react';
import { ListGroup } from 'react-bootstrap';
import SingleComment from './SingleComment';

const CommentsList = ({ reviews }) => {
  return (
    <ListGroup>
      {reviews.map((review) => (
        <SingleComment singleReview={review} key={review._id} />
      ))}
    </ListGroup>
  );
};

export default CommentsList;
