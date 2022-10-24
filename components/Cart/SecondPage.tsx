import React from "react";

type Props = {};

export default function SecondPage({}: Props) {
  return (
    <form className="w-full flex gap-8 flex-col items-center h-full">
      <div className="flex flex-col gap-4 w-2/3">
        <label className="text-xl" htmlFor="name">Nombre Completo</label>
        <input className="border-b border-black" type="text" name="name" id="name" />
      </div>
      <div className="flex flex-col gap-4 w-2/3">
        <label className="text-xl" htmlFor="name">Teléfono</label>
        <input className="border-b border-black" type="text" name="name" id="name" />
      </div>
      <div className="flex flex-col gap-4 w-2/3">
        <label className="text-xl" htmlFor="name">Medio de Pago</label>
        <input className="border-b border-black" type="text" name="name" id="name" />
      </div>
      <div className="flex flex-col gap-4 w-2/3">
        <label className="text-xl" htmlFor="name">Envio</label>
        <input className="border-b border-black" type="text" name="name" id="name" />
      </div>
    </form>
  );
}
