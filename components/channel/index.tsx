import { List, Divider, ListItem, Button, ListItemButton, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import React from 'react';

export type Channel = {
  id: string;
  avatarUrl: string;
  name: string;
  createdAt: number;
};

const UserChannel = (UserChannel: Channel) => {
  return (
    <List>
      <Divider />
      <ListItem
        key={UserChannel.id}
        divider
        disablePadding
        secondaryAction={<Button variant="outlined">チャンネル登録</Button>}
      >
        <ListItemButton>
          <ListItemAvatar>
            <Avatar src={UserChannel.avatarUrl} />
          </ListItemAvatar>
          <ListItemText>{UserChannel.name}</ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default UserChannel;
