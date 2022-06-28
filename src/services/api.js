export const getStates = () => {
  return fetch ('./estados.json', {
    headers:{
      'Accept': 'application/json'
    }
  });
};

export const getInstitutions = () => {
  return fetch ('./institutions.json', {
    headers:{
      'Accept': 'application/json'
    }
  });
};

