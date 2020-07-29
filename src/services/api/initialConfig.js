const initialConfig = {
  timeout: 10000,
  validateStatus: status => {
    return status;
  },
};

function handleRequest(config) {
  return config;
}

function handleResponse(response) {
  if (response.status < 400) {
    return response.data;
  }

  return Promise.reject({
    type: 'ERROR',
    data: response.message
  });
}

const handleResponseError = error => {
  console.log("error", error);
  return Promise.reject({
    type: 'ERROR',
    data: error.message
  });
}

export {
  initialConfig as default,
  handleRequest,
  handleResponse,
  handleResponseError,
};