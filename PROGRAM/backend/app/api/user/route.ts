// BUat FUngsi Post
import { NextRequest, NextResponse } from "next/server";
import { prisma, setBcrypt } from "../general";


// Buat API POST REQUEST UNTUK CREATE DATA
export const POST = async (request:NextRequest)=>{
    const {namaValue, usernameValue, noHpValue,emailValue, alamatValue,passwordValue} = await request.json()
   //  const salt = genSaltSync(10);
   
     // Cek data username tersedia/tidak
     const cek = await prisma.tb_user.findMany({
        where: {
          OR: [
            { username: usernameValue },
            { email: emailValue },
            { noHp: noHpValue },
          ]
        }
      });
      
      // Buat array untuk error per field
      let fieldErrors: { field: string, message: string }[] = [];
      
      if (cek.length > 0) {
        cek.forEach(user => {
          if (user.username === usernameValue && !fieldErrors.find(e => e.field === 'username')) {
            fieldErrors.push({
              field: 'username',
              message: 'Username sudah digunakan. Silakan pilih username lain.'
            });
          }
          if (user.email === emailValue && !fieldErrors.find(e => e.field === 'email')) {
            fieldErrors.push({
              field: 'email',
              message: 'Email sudah digunakan. Silakan gunakan email lain.'
            });
          }
          if (user.noHp === noHpValue && !fieldErrors.find(e => e.field === 'noHp')) {
            fieldErrors.push({
              field: 'noHp',
              message: 'Nomor HP sudah digunakan. Silakan gunakan nomor lain.'
            });
          }
        });
      
        if (fieldErrors.length > 0) {
          return NextResponse.json(
            {
              metadata: {
                error: 1,
                message: "Beberapa field sudah digunakan."
              },
              errors: fieldErrors
            },
            { status: 409 }
          );
        }
      }
    
      await prisma.tb_user.create({
     data:{
       namaLengkap:namaValue,
       username: usernameValue,
       password: setBcrypt(passwordValue),
       email: emailValue,
       noHp: noHpValue,
       alamat: alamatValue
     }
    })
   
   //proses atau respon api
   
   return NextResponse.json({
     metadata: {
       error: 0,
       message: 'Data User Berhasil Disimpan',
       status:201
     }
   },{status:201})
   }