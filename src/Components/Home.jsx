import React from 'react'
import Suitup from './Suitup'
import Cart from '../Pages/Cart'
import Scan from '../assets/scan.png'
import vector from '../assets/Vector.png'
import vectorimg from '../assets/Vector (1).png'
import vectorimg1 from '../assets/Group 1000001100.png'
import Landingcart from '../Pages/Landingcart'
import Videocart from '../Pages/Videocart'
import Start from '../assets/Start.png'
import Stop from '../assets/images.png'
import time from '../assets/Vector (4).png'

function Home() {
  return (
    <div className="flex bg-gray-200 w-full min-h-screen">

      {/* Sidebar */}
      <div className="hidden md:block w-64 h-screen shadow z-30 fixed left-0 top-0">
        <Suitup />
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 p-3 overflow-y-auto">

        <h2 className="text-2xl font-bold mb-2">Dashboard</h2>

        {/* Header Section */}
        <div className="flex flex-wrap gap-4 items-center">

          <p className="font-bold">
            Hi, Pranesh. What are your plans for today?
          </p>

          {/* Search */}
          <div className="relative w-full sm:w-40">

            <img
              src={Scan}
              alt="scan"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5"
            />

            <input
              type="text"
              placeholder="Search"
              className="w-full border rounded-md py-2 pl-10 pr-3"
            />
          </div>

          {/* Time Tracker */}
          <div className="rounded-lg bg-white text-center h-14 w-40 p-1">

            <div className="flex items-center gap-1 justify-center">
              <img src={time} alt="" className="w-6 h-6" />
              <p>Time Tracker</p>
            </div>

            <p className="text-blue-500 font-bold">08:40:10</p>
          </div>

          {/* Buttons */}
          <div className="flex bg-white p-1 rounded">

            <button className="px-2 py-1 bg-blue-700 rounded flex gap-1 text-white">
              <img src={Start} alt="" className="w-5 h-5" />
              Start
            </button>

            <button className="px-2 py-1 rounded flex gap-1  ml-1">
              <img src={Stop} alt="" className="w-5 h-5" />
              Stop
            </button>
          </div>

          <button className="bg-white rounded h-14 px-3">
            + Invite Team
          </button>

          <button className="px-3 py-1 bg-blue-700 h-14 text-white rounded">
            + New Client
          </button>

          {/* Icons */}
          <div className="flex gap-2">

            <img src={vector} alt="" className="w-5 h-5" />
            <img src={vectorimg} alt="" className="w-5 h-5" />
            <img src={vectorimg1} alt="" className="w-8 h-8" />

          </div>

        </div>

        {/* Cards */}
        <div className="mt-4">
          <Cart />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row gap-4 mt-4">

          <div className="w-full lg:w-1/2">
            <Landingcart />
          </div>

          <div className="w-full lg:w-1/2">
            <Videocart />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Home
