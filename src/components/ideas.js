import React from 'react';
import PropTypes from 'prop-types';
import { map, size } from 'lodash';
import Idea from './idea';

const NoResults = ({ ideas, isLoading }) => {
  const finishedLoadingWithNoResults = !size(ideas) && !isLoading;

  if (finishedLoadingWithNoResults) {
    return (
      <p>No ideas found.</p>
    );
  }

  return null;
};

const Ideas = ({ ideas, isLoading, onChange, onBlur }) => {
  return (
    <section className="ideas">
      <NoResults ideas={ideas} isLoading={isLoading} />
      {
        map(ideas, ({ id, created_date, title, body }) => (
          <Idea
            key={id}
            id={id}
            created_date={created_date}
            title={title}
            body={body}
            onChange={onChange}
            onBlur={onBlur}
            onDelete={() => {}}
          />
        ))
      }
    </section>
  );
};

Ideas.propTypes = {
  ideas: PropTypes.array,
}

export default Ideas;
