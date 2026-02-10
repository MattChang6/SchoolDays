import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Dashboard } from '../pages/dashboard.jsx';
import { Route, Routes, Link } from "react-router-dom";
import { Resources } from '../pages/resources.jsx';
import { Login } from '../pages/login.jsx';
import ScrollToTop from '../components/scrollTop.jsx';
import { Benefits } from '../pages/benefits.jsx';
import { Time } from '../pages/time.jsx';
import { Payroll } from '../pages/payroll.jsx';
import { Absence } from '../pages/absence.jsx';
import { Info } from '../pages/info.jsx';
import { Training } from '../pages/training.jsx';
import '../components/workday.css';
import DashIcon from './images/wd-accent-dashboard.png';
import HandMoney from './images/wd-accent-hand-money.png';
import OpenBook from './images/wd-accent-open-book-blank.png';
import Person from './images/wd-accent-person.png';
import ShieldBenefits from './images/wd-accent-shield-benefits.png';
import Suitcase from './images/wd-accent-suitcase.png';
import TimeClock from './images/wd-accent-time-clock.png';
import Arrow from './images/wd-accent-chevron-solid-right.png';


const SideMenu = () => {


const [collapsed, setCollapsed] = React.useState(false);

return(

  <div style={{ display: 'flex', height: '100%', minHeight: '400px', textWrap:'hidden', height:'1000px'}}>
    <Sidebar collapsed={collapsed} collapsedWidth='90px'>
      <Menu>
        <MenuItem onClick={() => setCollapsed(!collapsed)} icon={<img className='' src={Arrow}/>}> &nbsp;Collapse </MenuItem>
        <MenuItem component={<Link to='/dashboard' />} icon={<img className='' src={DashIcon}/>}> 	&nbsp;Dashboard</MenuItem>
        <MenuItem component={<Link to='/time' />} icon={<img className='' src={TimeClock}/>}> &nbsp;Time </MenuItem>
        <MenuItem component={<Link to='/payroll' />} icon={<img className='' src={HandMoney}/>}> &nbsp;Payroll </MenuItem>
        <MenuItem component={<Link to='/absence' />} icon={<img className='' src={Suitcase}/>}> &nbsp;Absence </MenuItem>
        <MenuItem component={<Link to='/benefits' />} icon={<img className='' src={ShieldBenefits}/>}> &nbsp;Benefits </MenuItem>
        <MenuItem component={<Link to='/training' />} icon={<img className='' src={OpenBook}/>}> &nbsp;Training </MenuItem>
        <MenuItem component={<Link to='/info' />} icon={<img className='' src={Person}/>}> &nbsp;Personal Info </MenuItem>
      </Menu>
    </Sidebar>

    <main>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/time" element={<Time />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/absence" element={<Absence />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/training" element={<Training />} />
            <Route path="/info" element={<Info />} />
        </Routes> 
    </main>
  </div>

);
}

export default SideMenu;