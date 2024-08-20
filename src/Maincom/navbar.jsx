import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import Brightness3Icon from '@mui/icons-material/Brightness3';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link } from "react-router-dom";
import Search from '../Google component/search';

function Navbar() {
  const { theme, setTheme } = useTheme('light');

  const handleThemeChange = (isSelected) => {
    setTheme(isSelected ? 'dark' : 'light');
  };

  return (
    <header className="bg-white dark:bg-gray-900 ">
      <nav className="container mx-auto flex flex-col sm:flex-row items-center justify-between p-4">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <Link to='/'>
           <h1 className="text-4xl italic font-bold">DANA</h1>
          </Link>

          <div className="flex items-center gap-4 sm:hidden">
            <Switch
              defaultSelected={theme === 'dark'}
              size="lg"
              color="secondary"
              startContent={<LightModeIcon />}
              endContent={<Brightness3Icon />}
              onChange={(e) => handleThemeChange(e.target.checked)}
              className="ml-4"
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-center sm:max-w-md sm:mx-auto mt-4 sm:mt-0">
          <Search />
        </div>

        <div className="hidden sm:flex items-center">
          <Switch
            defaultSelected={theme === 'dark'}
            size="lg"
            color="secondary"
            startContent={<LightModeIcon />}
            endContent={<Brightness3Icon />}
            onChange={(e) => handleThemeChange(e.target.checked)}
            className="ml-4"
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
