import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/customsearch/v1?key=AIzaSyAs-jfKim8RQqh_HMT-Ae7x5b7Gdv0vEuY&cx=f4589861069644b07&q=${searchTerm}`
        );
        setData(response.data.items || []);
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    };

    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  return (
    <StateContext.Provider value={{ searchTerm, setSearchTerm, data }}>
      {children}
    </StateContext.Provider>
  );
};

StateContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useStateContext = () => useContext(StateContext);
