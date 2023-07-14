import { createTheme } from '@mui/material/styles';
import { MAIN_COLOR } from './constant';

export const theme = createTheme({
    palette: {
        primary: {
            main: MAIN_COLOR,
        },
    },
    typography: {
        fontFamily: '"Times New Roman", Times, serif',
        fontWeightBold: 'bolder'
    }

});

