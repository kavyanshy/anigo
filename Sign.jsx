import { Button } from '@mui/material'
import React ,{useEffect}from 'react'
import {signInWithGoogle,auth} from "./Firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";


export default function Sign() {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) navigate("/");

      }, [user, loading]);



  return (
    <>
    <div>Sign</div>
    <Button onClick={signInWithGoogle}>SIGN IN</Button>
    </>
  )
}
