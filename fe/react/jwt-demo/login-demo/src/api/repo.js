import axios from './config';

export const getRepo = async (data) => {
  const res = await axios.get('/repo');
  console.log(res);
  return res;
  // return res.data;
}
