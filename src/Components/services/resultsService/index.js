import axios from 'axios';

const getTableResults = data => {
  // it is better to load url from some config file or .env configuration,
  // it is up to you, but hardcoding api endpoint is a very bad practice
  return axios.post('https://jsonplaceholder.typicode.com/users', data);
};
export default getTableResults;