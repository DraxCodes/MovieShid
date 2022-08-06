/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
    const apiKey = import.meta.env.VITE_MOVIE_DB_API_KEY;
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`);
    const data = await response.json();
    console.log(data)

    return {
      status: 200,
      headers: {
        'access-control-allow-origin': '*'
      },
      body: {
        movies: data.results,
      }
    };
  }