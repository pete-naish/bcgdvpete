import React from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import Textarea from './textarea';

const Idea = ({ id, title, created_date, body, onDelete, onBlur, onChange }) => (
  <div className="idea" key={id}>
    <Input
      className="idea__title"
      id={id}
      name='title'
      value={title}
      onBlur={() => onBlur({ id, title, body })}
      onChange={onChange}
    />
    <p className="idea__created-date">{created_date}</p>
    <Textarea
      className="idea__body"
      id={id}
      name="body"
      value={body}
      onBlur={() => onBlur({ id, title, body })}
      onChange={onChange}
      maxLength={140}
    />
    <button
      className="idea__delete"
      onClick={onDelete}
    >
      Delete idea
    </button>
  </div>
);

Idea.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  created_date: PropTypes.string,
  onDelete: PropTypes.func
}

export default Idea;
