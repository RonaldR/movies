const apiKey = '26fc32c3'; // should be in .env

export const searchMovie = async (search: string) => {
    const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${apiKey}`);
    return await response.json();
}

export const getMovie = async (movieId: string) => {
    const response = await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`);
    return await response.json();
}