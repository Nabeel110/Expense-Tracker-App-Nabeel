import React from 'react';
import { createMuiTheme, ThemeProvider, Typography  } from '@material-ui/core';
import Expenses from '../../static/images/expenses.png'



const theme = createMuiTheme({
    typography: {
      h2: {
        fontFamily: "helvetica",
        fontSize: 40,
        padding: 20,
        color: "white",
        fontWeight: "bold"
      },
    },
  });

  const imageStyle = {
      width: 150,
      height: 150,
      paddingTop: "6%",
      marginLeft: "38%",
      
      
      
  }

 const Header = () => {
    return (
        <div>
        
        <ThemeProvider theme={theme}>
        <img src = {Expenses} style = {imageStyle} alt ="Expenses Image"/>
            <Typography variant="h2" align ="center"> Nabeel Expense Tracker </Typography>
         </ThemeProvider>
        </div>
    )
}

export default Header;