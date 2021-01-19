import bcrypt from 'bcryptjs';

const user = [
//user: admin
{
    name: "Admin Jackf",
    email: "jackf@gmail.com",
    password: bcrypt.hashSync('123456',10),
    isAdmin: true
},
//user 1: user
{
    name: "John Foo",
    email: "johnf@gmail.com",
    password: bcrypt.hashSync('123456',10),
    isAdmin: false
},
//user 2: user
{
    name: "June Foo",
    email: "junef@gmail.com",
    password: bcrypt.hashSync('123456',10),
    isAdmin: false
},
]

export default user;