import axios from 'axios';
import md5 from 'md5';

const publicKey = '4da3934f2cba655d02924072ed9c89bd';
const privateKey = '88615743b5735e1ca2df263d17f5a55d59b8f700';

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: 'https://gateway.marvel.com',
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export default api;
