import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import UploadIcon from '@mui/icons-material/Upload';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import React, { useCallback, useState } from 'react';
const ACTION_LIST: {
  label: string;
  icon: React.ReactNode;
}[] = [
  { label: 'Home', icon: <HomeIcon /> },
  { label: 'Timeline', icon: <TimelineIcon /> },
  { label: 'Channel', icon: <SubscriptionsIcon /> },
  { label: 'MyList', icon: <VideoLibraryIcon /> },
  { label: 'Upload', icon: <UploadIcon /> },
];

const Navigation = () => {
  const [index, setIndex] = useState(0);

  const handleChange = useCallback((_, value) => {
    setIndex(value);
  }, []);

  return (
    <Paper elevation={3} sx={{ position: 'fixed', left: 0, right: 0, bottom: 0 }}>
      <BottomNavigation showLabels value={index} onChange={handleChange}>
        {ACTION_LIST.map((action, index) => (
          <BottomNavigationAction key={index} label={action.label} icon={action.icon} />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default Navigation;
