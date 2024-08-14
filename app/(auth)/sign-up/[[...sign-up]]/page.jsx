"use client";

import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="bg-img"
            src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
          <a className="block text-white" href="#">
              <Image src="/logo2.png" alt="logo" height={90} width={90} className="-ml-2" />
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to SyncCrowd
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Access a wide range of high-quality, diverse datasets generated
              through crowdsourcing and synthetic data.
            </p>
          </div>
        </section>

        <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <SignUp />
        </div>
      </div>
    </section>
  );
}
