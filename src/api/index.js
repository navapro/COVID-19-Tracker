import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.error();
  }
};

export const fetchDailyData  = async() => {
  try{
    const {data} = await axios.get(`${url}/daily`);
    const modData = data.map((dailyData) =>({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modData;
  } catch(error){
    console.error();
  }
}

export const countries = async() => {
  try {
    const response = await axios.get( `${url}/countries`);
    console.log(response);
    return(response);
  } catch(error){

  }
}