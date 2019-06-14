module.exports = {

  getArtistData: () => {
    return fetch('/api/artists')
      .then(response => response.json()).then((data) => data);
  }
};
