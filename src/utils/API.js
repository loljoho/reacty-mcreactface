import axios from "axios";

export default {
  // Get races by year (default 'current')
  getRaces: function(year = 'current') {
    return axios.get(`https://ergast.com/api/f1/${year}/races.json`)
      .then(res => res.data.MRData.RaceTable.Races);
  },
};
