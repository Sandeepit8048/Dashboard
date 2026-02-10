import React from 'react'
import Img from '../media/task.png'
import Img1 from '../media/client.png'
import Img2 from '../media/chat.png'
import Img3 from '../media/calendar.png'
import Img4 from '../media/team.png'
import Img5 from '../media/tickets.png'
import Img6 from '../media/vt10.png'
import ICON from '../media/ic1.png'
import GICON from '../media/gps.png'

function Suitup() {

  const arr = [
    { id: 0, name: "Dashboard", img: GICON },
    { id: 1, name: "Category 2", img: Img },
    { id: 2, name: "Category 3", img: Img1 },
    { id: 3, name: "Category 4", img: Img2 },
    { id: 4, name: "Category 5", img: Img3 },
    { id: 5, name: "Category 6", img: Img4 },
    { id: 6, name: "Category 7", img: Img5 },
    { id: 7, name: "Category 8", img: Img6 },
  ];

  return (
    <div
      className="h-full flex flex-col gap-4 text-white p-6 overflow-y-auto"
      style={{ backgroundColor: '#1F2937' }}
    >

      <img src={ICON} alt="" className="w-36 mb-4" />

      {
        arr.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer"
          >

            <img
              src={item.img}
              alt={item.name}
              className="w-4 h-4"
            />

            <p>{item.name}</p>

          </div>
        ))
      }

    </div>
  )
}

export default Suitup
