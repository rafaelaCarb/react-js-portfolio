import React from "react";

const AboutMe = () => {
  return (
    <div className="h-[100vh] w-full flex flex-col bg-white">
      <div className="h-[80vh] w-screen bg-black text-white px-4 flex justify-between pt-9">
        <h1 className="text-[100px]">Sobre</h1>
        <div className="w-3/5 pt-3 space-y-32">
          <p className="text-2xl leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            tempora molestias quibusdam eaque enim aliquam aut autem officia! Et
            magni ullam, corrupti repellat numquam modi necessitatibus iste
            porro impedit ab? Corrupti repellat numquam modi necessitatibus iste
            porro impedit ab?
          </p>
          <div className="flex flex-col">
            <p className="font-light">
              BUILDING PRODUCTS AT THE CROSSPATH OF AI -- SAAS -- WEB3
            </p>
            <div className="flex gap-4 mt-5">
              <div className="rounded-lg w-16 h-16 bg-[#444444]"></div>
              <div>
                <p>Suporte Técnico</p>
                <p className="text-stone-400">08/23 - 01/24</p>
              </div>
              <div className="rounded-lg w-16 h-16 bg-[#444444]"></div>
              <div>
                <p>Desenvolvedora Frontend</p>
                <p className="text-stone-400">04/24 - Atual</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
