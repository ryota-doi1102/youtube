import { List, Divider, ListItem, IconButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

export type Mylist = {
  id: string;
  title: string;
  createdAt: number;
};

type Props = {
  mylists: Mylist[];
};

const MylistLibrary = (props: Props) => {
  return (
    <List>
      <Divider />
      {props.mylists.map((mylist) => (
        <ListItem
          key={mylist.id}
          divider
          secondaryAction={
            <IconButton>
              <MenuIcon />
            </IconButton>
          }
        >
          <ListItemText primary={mylist.title} secondary={mylist.createdAt} />
        </ListItem>
      ))}
    </List>
  );
};

export default MylistLibrary;
