import {Button, Card, Container, TextField, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";


const PinPad = () => {

    const buttons = [
        "7", "8", "9",
        "4", "5", "6",
        "1", "2", "3",
        "<", "0", "E"
    ];

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
                            }}
                            variant="outlined"
                            value={"*"}
                            required
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