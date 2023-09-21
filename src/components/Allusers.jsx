import { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { getUsers , deleteUser } from '../service/api';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom'; 



const StyledTable = styled(Table)`
width: 90%;
margin:50px auto 0px auto;
`;

const Thead = styled(TableRow)`
background:#000;
& > th{
    color: #fff;
    font-size: 20px;
}
`
const Tbody = styled(TableRow)`
& > td {
   
    font-size: 20px;
}
`

const Allusers = () => {

const [users,setUsers] = useState([]);

useEffect(() => {
    getUsersDetails();
}, [])

const getUsersDetails = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
}

const deleteUserData = async(id) => {
    await deleteUser(id);
    getUsersDetails();
 }

  return (
    <StyledTable>
        <TableHead>
            <Thead>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>UserName</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell></TableCell>
            </Thead>
        </TableHead>
        <TableBody>
            {
                users.map(user => (
                    <Tbody>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button variant='contained' style={{marginRight:'10px'}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                            <Button variant='contained' color='secondary' onClick={() => deleteUserData(user.id)}>Delete</Button>
                        </TableCell>
                    </Tbody>
                ))
            }
        </TableBody>
    </StyledTable>
  )
}

export default Allusers;