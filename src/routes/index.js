/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
    const apiKey = import.meta.env.VITE_MOVIE_DB_API_KEY;
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US`);
    const data = await response.json();

    return {
      status: 200,
      headers: {
        'access-control-allow-origin': '*'
      },
      body: {
        data: data,
      }
    };
  }
