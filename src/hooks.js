import { useState } from 'react';
import axios from 'axios';

function useFlip() {
  const [isFacingUp, setIsFacingUp] = useState(true);

  const flipCard = () => {
    setIsFacingUp((isUp) => !isUp);
  };

  return [isFacingUp, flipCard];
}

function useAxios(resource, baseUrl) {
    const [data, setData] = useState([]);
  
    const addData = (newData) => {
      setData([...data, { ...newData, id: newData.id || newData.name }]);
    };
  
    const fetchData = async (name) => {
      const url = `${baseUrl}${name}/`;
      try {
        const response = await axios.get(url);
        addData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    return [data, fetchData];
  }

  export { useFlip, useAxios };