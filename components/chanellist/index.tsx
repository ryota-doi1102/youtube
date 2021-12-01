import { Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';

export type Channel = {
  id: string;
  avatarUrl: string;
  name: string;
  createdAt: number;
};

type Props = {
  channels: Channel[];
};

const Channellist = (props: Props) => {
  return (
    <List>
      <Divider />
      {props.channels.map((channel) => (
        <ListItem
          key={channel.id}
          divider
          disablePadding
          secondaryAction={<Button variant="outlined">チャンネル登録</Button>}
        >
          <ListItemButton>
            <ListItemAvatar>
              <Avatar src={channel.avatarUrl} />
            </ListItemAvatar>
            <ListItemText>{channel.name}</ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Channellist;
