import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Cart from "../components/Cart/Cart";

const Home: NextPage = () => {
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
          <button className="mt-6 w-full rounded-xl border flex flex-col items-start gap-4 p-4 text-left hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Los más vendidos</h3>
          </button>
          <div className="grid grid-cols-4 gap-4">
            <Link href={"/buzos"}>
              <a className="mt-6 w-full rounded-xl border flex flex-col items-center gap-4 p-4 text-left hover:text-blue-600 focus:text-blue-600">
                <div className="relative w-full h-96">
                  <Image src={"/buzo-1.jpeg"} layout="fill" />
                </div>
                <h3 className="text-2xl font-bold">Buzos</h3>
              </a>
            </Link>
            <Link href={"/camperas"}>
              <a className="mt-6 w-full rounded-xl border flex flex-col items-center gap-4 p-4 text-left hover:text-blue-600 focus:text-blue-600">
                <div className="relative w-full h-96">
                  <Image src={"/campera-1.jpeg"} layout="fill" />
                </div>
                <h3 className="text-2xl font-bold">Camperas</h3>
              </a>
            </Link>
            <Link href={"/remeras"}>
              <a className="mt-6 w-full rounded-xl border flex flex-col items-center gap-4 p-4 text-left hover:text-blue-600 focus:text-blue-600">
                <div className="relative w-full h-96">
                  <Image src={"/remera-1.jpeg"} layout="fill" />
                </div>
                <h3 className="text-2xl font-bold">Remeras</h3>
              </a>
            </Link>
            <Link href={"/pantalones"}>
              <a className="mt-6 w-full rounded-xl border flex flex-col items-center gap-4 p-4 text-left hover:text-blue-600 focus:text-blue-600">
                <div className="relative w-full h-96">
                  <Image src={"/pantalon-1.jpeg"} layout="fill" />
                </div>
                <h3 className="text-2xl font-bold">Pantalones</h3>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
