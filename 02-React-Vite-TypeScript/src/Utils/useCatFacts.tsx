//This is a custom Hook to call CAT API
import { useEffect, useState } from "react";
import axios from "axios";

//Cat API return me a "JSON Object", so I am giving it a structrure using "INTERFACE".
interface CatFact {
  fact: string;
  length: number;
}

const useCatFacts = () => {

  const [data, setData] = useState<CatFact | null>(null);

  const fetchCatFact = async () => {
    try {
      const response = await axios.get<CatFact>("https://catfact.ninja/fact");
      setData(response.data);
    } catch (err) {
      console.log("Error fetching cat fact:", err);
    }
  };

  useEffect(() => {
    fetchCatFact();
  }, []); // Just an empty dependency array

  return { data, refetchCatFacts: fetchCatFact };
};

export default useCatFacts;


