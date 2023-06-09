import { useEffect, useState } from 'react';
import { Movie } from '../types/food';

function FoodList() {
  const [foodData, setMovieData] = useState<Movie[]>([]);
  //Use effect makes it so that it doesn't constantly send request after request.
  useEffect(() => {
    //This gets the data from the api
    const fetchMovies = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div className="row">
        <h4>Joel Hilton Film Collection</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>Lent To</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {foodData.map((f) => (
            <tr key={f.movieID}>
              <td>{f.category}</td>
              <td>{f.title}</td>
              <td>{f.year}</td>
              <td>{f.director}</td>
              <td>{f.rating}</td>
              <td>{f.edited}</td>
              <td>{f.lentTo}</td>
              <td>{f.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default FoodList;
