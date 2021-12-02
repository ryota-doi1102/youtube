import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import UploadIcon from '@mui/icons-material/Upload';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
const ACTION_LIST: {
  label: string;
  icon: React.ReactNode;
  address: string;
}[] = [
  { label: 'Home', icon: <HomeIcon />, address: '/' },
  { label: 'Timeline', icon: <TimelineIcon />, address: '/timeline' },
  { label: 'Channel', icon: <SubscriptionsIcon />, address: '/channellist' },
  { label: 'MyList', icon: <VideoLibraryIcon />, address: '/mylist' },
  { label: 'Upload', icon: <UploadIcon />, address: 'upload' },
];

type Props = {
  setOpenMoviePostDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navigation = (props: Props) => {
  const router = useRouter();

  const [index, setIndex] = useState(0);

  const handleChange = useCallback((_, value) => {
    setIndex(value);
  }, []);

  const handleClick = useCallback(
    (url: string) => {
      if (url === 'upload') {
        props.setOpenMoviePostDialog(true);
      } else {
        router.push(url);
      }
    },
    [props, router],
  );

  return (
    <Paper elevation={3} sx={{ position: 'fixed', left: 0, right: 0, bottom: 0 }}>
      <BottomNavigation showLabels value={index} onChange={handleChange}>
        {ACTION_LIST.map((action, index) => (
          <BottomNavigationAction
            key={index}
            label={action.label}
            icon={action.icon}
            onClick={() => handleClick(action.address)}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default Navigation;
