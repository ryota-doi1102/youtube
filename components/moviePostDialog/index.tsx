import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React, { useCallback } from 'react';

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MoviePostDialog = (props: Props) => {
  const handleClose = useCallback(() => {
    props.setOpen(false);
  }, [props]);

  return (
    <>
      <Dialog open={props.open} fullScreen>
        <DialogTitle>動画投稿ダイアログ</DialogTitle>
        <DialogContent>
          <TextField
            label={'title'}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            margin={'dense'}
          />
          <DialogContentText>動画</DialogContentText>
          <Button>
            Upload
            <input type="file" style={{ opacity: 0, appearance: 'none', position: 'absolute' }} />
          </Button>
          <DialogContentText>サムネイル</DialogContentText>
          <Button>
            Upload
            <input type="file" style={{ opacity: 0, appearance: 'none', position: 'absolute' }} />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={handleClose}>投稿</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MoviePostDialog;
