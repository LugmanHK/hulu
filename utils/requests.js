const API_KEY = "804dfd47fda42d7ef24c8bcef8e0e502";

export default {
  fetchTrending: {
    title: "Trending",
    url: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`
  },
  fetchNetflixOriginals: {
    title: "Netflix Originals",
    url: `/discover/tv?api_key=${API_KEY}&with_networks=213`
  },
  fetchHotstarOriginals: {
    title: "Hotstar Originals",
    url: `/discover/tv?api_key=${API_KEY}&with_networks=2739`
  },
  fetchAmazonOriginals: {
    title: "Amazon Originals",
    url:`/discover/tv?api_key=${API_KEY}&with_networks=174`
  },
  fetchTrendingMovies: {
    title: "Trending Movies",
    url:`/trending/movie/week?api_key=${API_KEY}`,
  },
  fetchTrendingTv: {
    title: "Trending Shows",
    url:`trending/tv/week?api_key=${API_KEY}`,
  },
  fetchMarvelMovie: {
    title:"Marvel Movies",
    url:`/discover/movie?api_key=${API_KEY}&with_companies=420`
  }
}