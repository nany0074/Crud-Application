import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material';
import React from 'react'
import { useNavigate , useParams } from 'react-router-dom';
import { getUser , editUser } from '../service/api';

const Container = styled(FormGroup)`
width:50%;
margin: 5% auto 0 auto;
& > div {
    margin-top: 20px;
}
`
const InitialValues = {
    name:'',
    username:'',
    email:'',
    phone:''
}

const Edituser = () => {
const [user , setUser] = useState(InitialValues);
const navigate = useNavigate();
const { id } = useParams();

useEffect(() => {
    getUserData();
},[])

const getUserData = async () => {
    let response = await getUser(id);
    setUser(response.data);
}

const onValueChange = (e) => {
setUser({...user, [e.target.name]: e.target.value})
}

const addUserDetails = async () => {
    await editUser(user , id);
    navigate('/all');
}
  return (
    <Container>
        <Typography variant='h4'>Edit User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name='name' value={user.name}/>
        </FormControl>
        <FormControl>
            <InputLabel>UserName</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name='username' value={user.username}/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name='email' value={user.email}/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name='phone' value={user.phone}/>
        </FormControl>
        <FormControl>
            <Button onClick={()=> addUserDetails()} variant='contained'>Edit User</Button>
        </FormControl>
        
    </Container>
  )
}

export default Edituser;