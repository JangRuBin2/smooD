import React, { useState } from 'react';
import MyInfo from '../common/myInfo';
import Search from '../common/Search';
// import Listdiv from '../services/Listdiv';
import MainBtn from '../common/mainbtn';
import MapPage from './mapPage';
const Mainpage = (): JSX.Element => {
  const [selectedBtn, setSelectedBtn] = useState<string>('');

  const handleBtnClick = (name: string) => {
    setSelectedBtn(name);
  };
  const handleSearch = (searchTerm: string) => {
    // Handle the search logic here
    console.log('Search term:', searchTerm);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Search onSearch={handleSearch} />
      <div>
        <MainBtn handleBtnClick={handleBtnClick} />
        <MapPage selectedBtn={selectedBtn} />
      </div>
      <div>
        <div onClick={toggleMenu}>햄버거 메뉴</div>
        {isOpen && <MyInfo />}
      </div>
    </div>
  );
};
export default Mainpage;
