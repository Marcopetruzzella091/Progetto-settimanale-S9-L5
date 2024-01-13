const fetchData = async () => {
    try {
      const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=7460c44f&s=harry%20potter');
  
      if (!response.ok) {
        throw new Error('Errore nella richiesta');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Errore durante la richiesta:', error);
    }
  };
  
  fetchData();