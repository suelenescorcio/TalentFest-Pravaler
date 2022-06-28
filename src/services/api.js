
export const getStates = () => {
  return fetch ('../../public/estados.json', {
    headers:{
      Accept:'application/json'
    }
  })
  .then(res => res.json()
  );
};

