import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      response: { conformed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    return {conformed, recovered, deaths, lastUpdate };

  } catch (error) {}
};

// export default fetchData;
