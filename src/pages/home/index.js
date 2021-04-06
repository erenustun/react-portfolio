import React from 'react'
import TextLoop from 'react-text-loop'
import portrait from '../../assets/images/home.jpg'

export default function Home() {
  return (
    <section id="home" className="flex flex-col items-center justify-center">

      <div className="flex flex-col items-center">
        <img src={portrait} className="w-40 sm:w-72 lg:w-84 mb-5 block shadow rounded-lg" alt="portrait" />
        <h1 className="ml-0 lg:ml-3 text-4xl md:text-5xl lg:text-7xl self-end">Hello! I'm Eren. 😄</h1>
      </div>

      <div className="mt-5 lg:mt-12 text-center text-2xl md:text-3xl lg:text-5xl">

        <h2 id="dyntext" className="">
          ...& passionate about Technologies
        </h2>

        <h2 className="mr-10 lg:mr-40">
          such as {" "}
          <TextLoop
            children={['REACT APPs', 'RESTFUL APIs', 'RELATIONAL DBs']}
            interval={1750} // 1750
            springConfig={{ stiffness: 180, damping: 9 }}
            className="text-blue-500 font-semibold w-36"
          />
        </h2>
        
      </div>
    </section>
  );
}