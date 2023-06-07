import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Box, Tooltip, Fab, Modal, styled, Typography, Avatar, TextField, Stack } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const Add = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Tooltip title="Delete" onClick={(e) => setOpen(true)} sx={{ position: "fixed", left: 20, bottom: 20 }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} width={400} height={250} bgColor={"background.default"} color={"text.primary"} borderRadius={5} p={3}>
                    <Typography variant="h6" textAlign="center"> Create Post</Typography>
                    <UserBox>
                        <Avatar sx={{ width: 30, height: 30 }} src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000">
                        </Avatar>
                        <Typography fontWeight={500} variant="span">John Doe</Typography>
                    </UserBox>
                    <TextField sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind"
                        variant="standard"
                    />
                    <Stack direction="row" spacing={1} mt={2} mb={3}>
                        <EmojiEmotionsIcon color="secondary" />
                        <ImageIcon color="primary" />
                        <VideoCameraFrontIcon color="error" />
                        <PersonAddIcon color="success" />
                    </Stack>
                    <ButtonGroup fullWidth
                    variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}> <DateRangeIcon/> </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add
