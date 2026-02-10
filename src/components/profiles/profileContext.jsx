import React from 'react';
import { useLocation } from 'react-router-dom';
import profiles from './profiles.json';

const ProfileContext = React.createContext(null);

const DEFAULT_PROFILE_ID = 'default';
const JOHN_PROFILE_ID = 'john';

export function ProfileProvider({ children }) {
  const location = useLocation();
  const [activeProfileId, setActiveProfileId] = React.useState(DEFAULT_PROFILE_ID);

  React.useEffect(() => {
    const path = location.pathname || '/';
    const isLoginRoute = path === '/' || path === '/login';

    if (!isLoginRoute && activeProfileId !== DEFAULT_PROFILE_ID) {
      setActiveProfileId(DEFAULT_PROFILE_ID);
    }
  }, [location.pathname, activeProfileId]);

  const profileMap = profiles || {};
  const activeProfile = profileMap[activeProfileId] || profileMap[DEFAULT_PROFILE_ID];

  const value = React.useMemo(
    () => ({
      profiles: profileMap,
      activeProfile,
      activeProfileId,
      setActiveProfileId,
      defaultProfileId: DEFAULT_PROFILE_ID,
      johnProfileId: JOHN_PROFILE_ID
    }),
    [profileMap, activeProfile, activeProfileId]
  );

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  const context = React.useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider.');
  }
  return context;
}
