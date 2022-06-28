export const getStates = () => {
  return fetch ('./estados.json', {
    headers:{
      'Accept': 'application/json'
    }
  });
};

