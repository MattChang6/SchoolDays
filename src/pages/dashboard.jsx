import '../components/workday.css';
import '../components/dashboard.css'
import { useProfile } from '../components/profiles/profileContext.jsx';

export function Dashboard() {
  const { activeProfile } = useProfile();
  const displayName = activeProfile
    ? [activeProfile.firstName, activeProfile.lastName].filter(Boolean).join(' ')
    : 'Default';

  return (
    <>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
    </style>

      {/* DASHBOARD Title */}
      <div className='largeTitle'>
          <h>Dashboard</h>
      </div>

      {/* Welcome Header */}
      <div>
        <h className='largeHeading'>Welcome {displayName}</h>
      </div>
      

      {/* Tasks Cards */}

      <div className=''>
        <h className='mediumHeading'>Tasks</h>
        <p>put task card here</p>
      </div>

      {/* BOX 4 */}

      <div className=''>
        <h className='mediumHeading'>Training</h>
        <p>put training module cards here</p>
      </div>
      </>
    );

}
