'use client'
import { useState } from "react"
import { Dancing_Script } from "next/font/google"
import Calendar from "../components/Calendar"

const dancingScript = Dancing_Script({subsets:['latin'], weight: ['400','700']})
const Asesorias = () => {
  const date = new Date()
  
  return (
    <div className="flex flex-col w-[100vw] h-[90vh] items-center py-12 px-8">
      <h1 className={`${dancingScript.className} text-5xl mb-2`}>Asesorías</h1>
      <p className="w-2/3">El objetivo de las asesorías es ayudarte a resolver algún problema que tengas
        en el taller, o enseñarte alguna técnica nueva que quieras aprender! Consisten de 
        una video llamada de 40min/una hora donde me podes preguntar todo lo que necesites
        saber. Reservá tu turno!
      </p>
      
      <form action="/reserva-asesoria" method="post" className="flex flex-col w-[40vw] mt-12 z-50">
        <label className="py-2 text-xl"> Nombre </label>
        <input type="text" name="nombre" id="nombre" placeholder="Nombre"
        className="py-2 px-2 rounded-md" />
        <label className="py-2 text-xl"> Apellido </label>
        <input type="text" name="apellido" id="apellido" placeholder="Apellido" 
        className="py-2 px-2 rounded-md"/>
        <label className="py-2 text-xl"> Email</label>
        <input type="email" name="email" id="email" placeholder="ejemplo@gmail.com" 
        className="py-2 px-2 rounded-md"/>
        <label className="py-2 text-xl"> Fecha </label>
        <Calendar />
  
        <button className="btn btn-success mx-2 bg-[#A7BFA2] border-0 hover:bg-[#6c9664] text-base-100 mt-4">Reservar</button>
        </form>
    </div>
  )
}

export default Asesorias