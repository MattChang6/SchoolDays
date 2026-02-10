
import { useProfile } from '../components/profiles/profileContext.jsx';

export function Info(){
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
            <h>Personal Information</h>
        </div>
        

        {/* Tasks Cards */}

        <div className=''>
            <h className='mediumHeading'>Image circle + {displayName}</h>
            <p>{activeProfile?.title || 'Guest'}</p>
            <p>{activeProfile?.email || 'default@schooldays.com'}</p>
            <p>Edit Profile Button</p>
        </div>

        {/* BOX 4 */}

        <div className=''>
            <h className='mediumHeading'>Change/ View secondary popupbox</h>
            <p>should be able to read/write csv file to update</p>
        </div>
      </>
    )

}
