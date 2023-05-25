import React from "react";
import '../App.css'
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  
} from "@mui/material";
import {createTheme,ThemeProvider} from '@mui/material/styles'

import {useNavigate} from 'react-router-dom'
import { CryptoState } from "../CryptoContext";
import AuthModal from "./Authentication/AuthModal";
import UserSidebar from "./Authentication/UserSidebar";

const Header = () => {

    const navigate = useNavigate();

    const {currency, setCurrency, user} = CryptoState()

    const darkTheme = createTheme({
        palette:{
            primary:{
                main:"#fff",
            },
            mode:"dark",
        }
    })

    return (
    
    <ThemeProvider theme={darkTheme}>    
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography onClick={()=> navigate("/")} className="title" variant='h5'>Crypto Hunter</Typography>
          <Select
            variant="outlined"
            style={{
              width: 100,
              height: 40,
              marginRight: 15,
            }}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value={"INR"}>INR</MenuItem>
            <MenuItem value={"USD"}>USD</MenuItem>
          </Select>
          {user ? <UserSidebar /> : <AuthModal />}
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
    
  );
};

export default Header;
