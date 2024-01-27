/** @format */

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//url의 변경되는 값 을 반환해주는 함수.

function Detail() {
  const { id } = useParams();
  //js의 인수인 id를 받아오므로 콘솔창에 {id:'12345'}대신 12345라고 뜸.
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
