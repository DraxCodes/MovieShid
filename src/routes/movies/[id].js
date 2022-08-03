/** @type {import('./__types/[id]').RequestHandler} */
export async function GET({ params }) {
    const id = params.id;
    const apiKey = import.meta.env.VITE_MOVIE_DB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    const request = await fetch(url);
    const data = await request.json();
    
   
    if (data) {
      return {
        status: 200,
        headers: { 'access-control-allow-origin': '*' },
        body: { movie: data }
      };
    }
   
    return {
      status: 404
    };
  }