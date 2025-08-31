'use server';

import { db } from '@/config/db';
const ContactAction  = async (FormData)=>{

    // console.log(FormData.get('fullName'))



const {fullName , email , massage} = Object.fromEntries(FormData.entries());
console.log(fullName,email,massage)

await db.execute(
    `insert into contact_form (full_name, email, message) values (?,?,?)`
    [fullName, email, massage]
);
};