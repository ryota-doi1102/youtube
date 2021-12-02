import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { useState } from 'react';

const MoviePostDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open}>
      <DialogTitle>動画投稿ダイアログ</DialogTitle>
      <DialogContent>
        <DialogContentText>MovieTitle</DialogContentText>
        <TextField></TextField>
        <DialogContentText>ユーザーID</DialogContentText>
        <TextField></TextField>
        <DialogContentText>動画</DialogContentText>
        <TextField></TextField>
        <DialogContentText>サムネイル</DialogContentText>
        <TextField></TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>キャンセル</Button>
        <Button onClick={handleClose}>投稿</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MoviePostDialog;
