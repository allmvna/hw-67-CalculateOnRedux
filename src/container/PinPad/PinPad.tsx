import { Button, Card, Container, TextField, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";
import {checkPin, enterNumber, removeLastNumber} from "../Slices/pinSlice.ts";
import {useEffect} from "react";
import {toast} from "react-toastify";


const PinPad = () => {
    const dispatch = useDispatch();
    const pin = useSelector((state: RootState) => state.pin.pin);
    const isRightPin = useSelector((state: RootState) => state.pin.isRightPin);


    const buttons = [
        "7", "8", "9",
        "4", "5", "6",
        "1", "2", "3",
        "<", "0", "E"
    ];

    const onClick = (button: string) => {
        if (button === "<") {
            dispatch(removeLastNumber());
        } else if (button === "E") {
            dispatch(checkPin());
        } else {
            dispatch(enterNumber(button));
        }
    };

    useEffect(() => {
        if (pin.length === 4) {
            if (isRightPin) {
                toast.success("Access Granted");
            } else {
                toast.error("Access Denied");
            }
        }
    }, [isRightPin]);

    return (
        <>
            <Container maxWidth="sm">
                <Typography variant="h2" color="textSecondary" textAlign="center" mt = {3}>
                    PIN pad
                </Typography>
                <Grid container justifyContent="center" mt={2} >
                    <Card sx={{ p: 2, width: "100%" }}>
                        <TextField
                            sx={{
                                width: "100%",
                                backgroundColor: "white",
                                borderRadius: "10px",
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: pin.length === 4 ? (isRightPin ? "green" : "red") : "gray",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: pin.length === 4 ? (isRightPin ? "green" : "red") : "gray",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: pin.length === 4 ? (isRightPin ? "green" : "red") : "gray",
                                    },
                                },
                            }}
                            variant="outlined"
                            required
                            type="password"
                            value={pin}
                            inputProps={{ maxLength: 4 }}
                        />
                        <Grid container spacing={1} mt={3}>
                            {buttons.map((button, index) => (
                                <Grid size={4} key={index}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{ backgroundColor: '#000',
                                            fontSize: 17,
                                            "&:hover": {
                                                backgroundColor: '#606060',
                                            },
                                        }}
                                        onClick={() => onClick(button)}
                                    >
                                        {button}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Card>
                </Grid>
            </Container>
        </>
    );
};

export default PinPad;