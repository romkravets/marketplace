import axios from 'axios';

const instance =  axios.create({
   baseURL: 'https://marketplace-91001.firebaseio.com/'
});

export default instance;