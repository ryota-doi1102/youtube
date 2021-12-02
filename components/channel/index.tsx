import { List, Divider, ListItem, Button, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import React from 'react';

export type Channel = {
  id: string;
  avatarUrl: string;
  name: string;
  createdAt: number;
};

type Props = {
  userChannel: Channel;
};

const UserChannel = (props: Props) => {
  return (
    <List>
      <Divider />
      <ListItem key={props.userChannel.id} divider secondaryAction={<Button variant="outlined">チャンネル登録</Button>}>
        <ListItemAvatar>
          <Avatar src={props.userChannel.avatarUrl} />
        </ListItemAvatar>
        <ListItemText>{props.userChannel.name}</ListItemText>
      </ListItem>
    </List>
  );
};

export default UserChannel;
