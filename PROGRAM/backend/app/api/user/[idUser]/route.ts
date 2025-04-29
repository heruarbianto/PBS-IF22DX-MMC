import { NextRequest, NextResponse } from "next/server";
import { prisma, setBcrypt } from "../../general";

export const PUT = async(request:NextRequest, props:{params: Promise<{idUser:string}>}) => {
    try{
      const {namaValue, usernameValue,passwordValue} = await request.json()
      const params = await props.params;
      // const salt = genSaltSync(10);
      
    // Cek data username tersedia/tidak
    const cek = await prisma.tb_user.findUnique({
      where:{
        id: Number(params.idUser)
      },
    });
  
    // BUat kondisi jika data ditemukan
    if(!cek){
      // tampilkan respon api
      return NextResponse.json(
          {
            metadata: {
              error: 1,
              message: `Update gagal! ${process.env.USER_NOT_FOUND_MESSAGE}`,
            },
          },{
              status:404
          })
  }
  
  // Cek data username tersedia/tidak
  const cekUsername = await prisma.tb_user.findMany({
    where:{
      username: usernameValue,
      NOT:{
        id: Number(params.idUser)
      }
    }
  });
  
  // BUat kondisi jika data ditemukan
  if(cekUsername.length >= 1){
    // tampilkan respon api
    return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "Gagal Disimpan!!! Username Sudah digunakan!!!",
          },
        },{
            status:409
        })
  }
  
  const updateUser = await prisma.tb_user.update({
    where: {
      id: Number(params.idUser),
    },
    data: {
      namaLengkap: namaValue,
      username: usernameValue,
      password: setBcrypt(passwordValue)
    },
  })
  
  return NextResponse.json(
    {
      metadata: {
        error: 0,
        message: "Berhasil DIUPDATE!!!",
      },
      dataUser:updateUser,
    },{
      status:200
    })
  
    }catch(e:any){
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "ID Parameter Harus Angka",
          },
        },{
            status:400
        })
    } 
  }