export const getStates = () => {
  return fetch ('./estados.json', {
    headers:{
      'Accept': 'application/json'
    }
  });
};

export const getInstitutions = () => {
  return fetch ('./institutions-v2.json', {
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

export const getCampus = () => {
  return fetch ('./campus.json', {
    headers:{
      'Accept': 'application/json'
    }
  });
};



