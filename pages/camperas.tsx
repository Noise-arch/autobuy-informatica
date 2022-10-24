import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Cart from "../components/Cart/Cart";

type Props = {};

export default function Camperas({}: Props) {
  const [cartVisible, setCartVisible] = useState<boolean>(false);


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed bottom-4 left-4">
        <p>By Iñaki Martinez Bertran & Matias Valtolina</p>
      </div>
      {cartVisible && <Cart setCartVisible={setCartVisible} />}

      <main className="flex w-full flex-1 flex-col h-full">
        <div className="container mx-auto flex flex-col w-full flex-wrap justify-around">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-bold">INIZ - AutoBuy</h1>
            <button
              onClick={() => setCartVisible(true)}
              className="mt-6 w-96 rounded-xl border flex items-center gap-4 p-4 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
              <h3 className="text-2xl font-bold">Carrito</h3>
            </button>
          </div>
          <Link href={"/"}>
            <a className="mt-6 w-full rounded-xl border flex items-center gap-4 p-4 text-left hover:text-blue-600 focus:text-blue-600 text-2xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                className="bi bi-arrow-left-square"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                />
              </svg>
              <p>Volver al inicio</p>
              
            </a>
          </Link>
          <div className="grid grid-cols-4 gap-4">
            <Link href={"/buzos"}>
              <a className="mt-6 w-full rounded-xl border flex flex-col items-center gap-4 p-4 text-left hover:text-blue-600 focus:text-blue-600">
                <div className="relative w-full h-96">
                  <Image src={"/campera-1.jpeg"} layout="fill" />
                </div>
                <div className="flex justify-between w-full items-center">
                  <h3 className="text-xl font-bold">Rompeviento Verde</h3>
                  <p className="text-xl font-bold"> AR$ 5500</p>
                </div>
              </a>
            </Link>
            <Link href={"/buzos"}>
              <a className="mt-6 w-full rounded-xl border flex flex-col items-center gap-4 p-4 text-left hover:text-blue-600 focus:text-blue-600">
                <div className="relative w-full h-96">
                  <Image src={"/campera-2.jpeg"} layout="fill" />
                </div>
                <div className="flex justify-between w-full items-center">
                  <h3 className="text-xl font-bold">Pullover Negro</h3>
                  <p className="text-xl font-bold"> AR$ 2500</p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
