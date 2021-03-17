import axios from 'axios';

const agent = axios.create({
  // baseURL: process.env.API_BASE_URL,
  baseURL: 'http://localhost:8888/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

let unauthorised = null;

const send = ({ method, url, data, params, token, responseType }) => {
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
  return agent
    .request({
      method,
      url,
      headers,
      data,
      params,
      responseType: responseType || 'json',
    })
    .catch((err) => {
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx.
        // error(err.response.data.error);
        throw new Error(err.response.data.error);
      } else if (err.request) {
        // The request was made but no response was received.
        throw new Error('OOPS');
      } else {
        // Something happened in setting up the request that triggered an Error
        throw new Error('OOPS');
      }
    });
};

const bindUnauthorised = (cb) => {
  if (unauthorised) {
    agent.interceptors.response.eject(unauthorised);
  }
  unauthorised = agent.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        cb(error);
      }
      return Promise.reject(error);
    }
  );
};

export { bindUnauthorised, send };
