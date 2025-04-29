// Buat service get buat detail data

import { NextRequest, NextResponse } from "next/server";
import { getResponseNotFound, prisma } from "../../general";

export const GET = async(request:NextRequest, props:{params: Promise<{idMenu:string}>}) => {
  
    try{
      const params = await props.params;
      
    // Cek data username tersedia/tidak
    const cek = await prisma.tb_menu.findUnique({
      where:{
        id: Number(params.idMenu)
      },
    });
  
    // BUat kondisi jika data ditemukan
    if(!cek){
      // tampilkan respon api
      return getResponseNotFound();
  }
  return NextResponse.json(
    {
        metadata: {
          error: 0,
          message: "Data Ditampilkan!!!",
        },
      dataMenu:cek,
    },{
        status:200
    })
  } catch(e:any){
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
  