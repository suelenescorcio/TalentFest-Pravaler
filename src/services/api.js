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

export const getCourses = () => {
  return fetch ('./courses.json', {
    headers:{
      'Accept': 'application/json'
    }
  });
};


