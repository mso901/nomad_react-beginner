/** @format */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//Link,브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트. a태그는 새로고침함

function Movie({ coverImage, title, summary, genres }) {
  return (
    <div>
      <img src={coverImage} alt="title" />
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.protoTypes = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
