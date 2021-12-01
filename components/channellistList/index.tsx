import { Divider, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export type Channellist = {
  id: string;
  title: string;
  createdAt: number;
};

type Props = {
  channellists: Channellist[];
};

const ChannellistList = (props: Props) => {
  return (
    <List>
      <Divider />
      {props.channellists.map((channellist) => (
        <ListItem
          key={channellist.id}
          divider
          secondaryAction={
            <IconButton>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemButton>
            <ListItemText>{channellist.title}</ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ChannellistList;
