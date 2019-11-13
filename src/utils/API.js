import axios from "axios";

export default {
  // Get races by year (default 'current')
  getRaces: function(year = 'current') {
    return axios.get(`https://ergast.com/api/f1/${year}/races.json`)
      .then(res => res.data.MRData.RaceTable.Races);
  },
  // Get race results by year (default 'current')
  getResults: function(year = 'current', limit = 750) {
    return axios.get(`https://ergast.com/api/f1/${year}/results.json?limit=${limit}`)
      .then(res => res.data.MRData.RaceTable.Races);
  }
};