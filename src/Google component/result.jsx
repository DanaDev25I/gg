import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useTheme } from 'next-themes';
import Search from './search';
import All from './tabs/All';
import ImagesTab from './tabs/Images';

const links = [
  { url: '/search', text: 'All', component: <All /> },
  { url: '/images', text: 'Images', component: <ImagesTab /> },
];

export const Results = () => {
  const [value, setValue] = useState('1');
  const { theme } = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="mt-4">
         <div className="w-full flex items-center justify-center sm:max-w-md sm:mx-auto mt-4 sm:mt-0">
          <Search />
        </div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="tabs">
              {links.map(({ url, text }, index) => (
                <Tab
                  key={url}
                  label={text}
                  value={(index + 1).toString()}
                  component={NavLink}
                  to={url}
                  sx={{
                    fontSize:'20px',
                    textTransform: 'none',
                    fontWeight: value === (index + 1).toString() ? 'bold' : 'normal',
                    color: theme === 'dark' ? 'white' : 'text.primary',
                    '&:hover': {
                      color: theme === 'dark' ? 'gray' : 'blue',
                    },
                  }}
                />
              ))}
            </TabList>
          </Box>
          {links.map(({ component, url }, index) => (
            <TabPanel key={url} value={(index + 1).toString()}>
              {component}
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </div>
  );
};

export default Results;
