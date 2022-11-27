import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
        Authorization: "Client-ID -0xwAAoF3bHUHm1X1SOKrZOu-ikleJeX6SUCe3pZB_A",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;