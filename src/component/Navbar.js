import React from 'react'
import { Link } from "react-router-dom"
import { Stack } from "@mui/material"


const Navbar = () => {

    const logoStyle = {
        width: "48px",
        height: "48px",
        marginLeft:"50px" 

    }
    let profile="https://images.yourstory.com/cs/images/companies/16327398275031-1651231564425.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff";

    return (
        <Stack direction="row"
        justifyContent="space-between"
        alignItems="center"
            sx={{
                gap: { sm: "122px", xs: "40px" }, mt: { sm: "32px", xs: "20px" },
                 px: "20px"
            }}>
            <Link to="/" style={{ textDecoration: "none", color: "#97DECE",}}>
               <h1 className='logo'>WhigCo</h1>
            </Link>
            <Stack
                direction="row"
                gap="40px"
                fontSize="18px"
                alignItems="center"
                justifyContent="center">
                <Link to="/"
                    style={{ textDecoration: "none", color: "grey",}}>
                    Home
                </Link>
                <Link to="/"
                    style={{ textDecoration: "none", color: "black",  }}>
                    Creators
                </Link>
                <Link to="/"
                    style={{ textDecoration: "none", color: "#97DECE", }}>
                    My Campaign
                </Link>
                <Link to="/"
                    style={{ textDecoration: "none", color: "#97DECE", }}>
                 <img className='profile-image' src={profile} alt="Logo" />
                </Link>
              
            </Stack>
        </Stack>
    )
}

export default Navbar