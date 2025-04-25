import { genSaltSync, hashSync } from "bcrypt-ts";
import { NextResponse } from "next/server";
// src/index.ts
import { PrismaClient } from '@prisma/client'


 export const prisma = new PrismaClient()

 //  Buat rspon untuk "Data Tidak Ditemukan"
export const getResponseNotFound =()=>{

  return NextResponse.json(
     {
       metadata: {
         error: 1,
         message: "Data Tidak Ditemukan",
       },
     },{
       status:404
     })
     
   }

