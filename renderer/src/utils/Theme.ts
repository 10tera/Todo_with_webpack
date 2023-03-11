import {createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#006a69",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#4a6362",
            contrastText: "#ffffff",
        },
        background: {
            default: "#fafdfc",
        },
        error: {
            main: "#ba1a1a",
            contrastText: "#ffffff",
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: "#6ff7f5",
                    color: "#00201f",
                }
            }
        }
    }
});

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#4ddad8",
            contrastText: "#003736",
        },
        secondary: {
            main: "#b0cccb",
            contrastText: "#1b3534",
        },
        background: {
            default: "#191c1c"
        },
        error: {
            main: "#ffb4ab",
            contrastText: "#690005",
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: "#00504f",
                    color: "#6ff7f5",
                }
            }
        }
    }
});

export {lightTheme, darkTheme};