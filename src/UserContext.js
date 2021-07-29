import React from 'react';

const UserContext = React.createContext({
    email: "oyazbayev@gmail.com",
    fullName:"Oyazbayev Temirlan",
    auth: false,
    jwtToken: ""
});

export default UserContext;