import React, {useContext} from 'react';
import {GlobalContext} from '../../Context/GlobalState';
import { createMuiTheme, ThemeProvider, Typography } from '@material-ui/core';
import CountUp from 'react-countup';


const theme = createMuiTheme({
    typography: {
      h4:{
        fontFamily: 'helvetica',
        fontSize: 30,
        color: "white",
        fontWeight: "bold"
      },
      h5:{
        fontFamily: 'helvetica',
        fontSize: 20,
        color: "white",
        fontWeight: 50,
        letterSpacing: 3,
        fontWeight: "bold"
      },
    },
  });

 const Balance = () => {
 
    const {transactions} =  useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
        <ThemeProvider theme={theme}>
        <Typography variant="h4" align ="center">Your Balance</Typography>
        <Typography variant="h5" align ="center">$
        <CountUp 
                    start ={0}
                    end   = { total}
                    duration = {2.5}
                    separator = ","
                /> </Typography>
           </ThemeProvider>
        </div>
    )
}
export default Balance;