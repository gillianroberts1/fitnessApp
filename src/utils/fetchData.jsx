export const exerciseOptions = {
  method: "GET",
  headers: {
    'x-rapidapi-key': 'd0686690ccmshe4cdddf0b40ddebp138f9fjsn8b1711334654',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
