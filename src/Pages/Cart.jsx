import React from 'react';
import Calender from "../assets/Group 1000001026 (1).png"
import Calender1 from "../assets/Group 1000001026 (2).png"
import Contect from "../assets/Group 1000001026.png"
import IMG from "../assets/cl.png"
import Arow from '../assets/vector (2).png'
import Arow1 from '../assets/vector (3).png'
import Group15 from '../assets/Group15.png'
import Group14 from '../assets/Group14.png'
import Group13 from '../assets/Group13.png'
import Group12 from '../assets/Group12.png'
import Group11 from '../assets/Group11.png'
import Group from '../assets/Group.png'

function Cart() {

  const carts = [
    { id: 1, img: Contect, Title: 'Active Case', digit: "42", txt: '12% from last month', arowimg: Arow },
    { id: 2, img: Calender, Title: 'Pending task', digit: "17", txt: '4% From last week', arowimg: Arow1 },
    { id: 3, img: Calender1, Title: 'Revenue', digit: "28,250", txt: '12% from last month', arowimg: Arow },
    { id: 4, img: IMG, Title: 'Total Clients', digit: "87", txt: '12% from last month', arowimg: Arow },
  ];

  const carts1 = [
    { id: 1, Title: 'Check Docs', imgs: Group15 },
    { id: 2, Title: 'Check Calender', imgs: Group14 },
    { id: 3, Title: 'manage Cases', imgs: Group13 },
    { id: 4, Title: 'All Tools', imgs: Group12 },
    { id: 5, Title: 'Raise Tickets', imgs: Group11 },
    { id: 6, Title: 'Takes Notes', imgs: Group },
  ];

  return (
    <>

      {/* Top Cards */}
      <div className="box1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

        {
          carts.map((item) => {
            return (
              <div key={item.id} className="flex flex-col gap-2 p-5 bg-white rounded-xl border">

                <div className="flex gap-4">

                  <img src={item.img} alt={item.Title} className="w-10"/>

                  <div>
                    <p>{item.Title}</p>
                    <p>{item.digit}</p>
                  </div>

                </div>

                <div className="flex gap-2 mt-2">

                  <img
                    src={item.arowimg}
                    alt=""
                    className="w-3 h-4"
                  />

                  <p>{item.txt}</p>

                </div>

              </div>
            );
          })
        }

      </div>

      {/* Bottom Cards */}
      <div className="box2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">

        {
          carts1.map((data) => {
            return (
              <div
                key={data.id}
                className="flex gap-2 p-3 bg-white rounded-xl border items-center"
              >

                <img
                  src={data.imgs}
                  alt=""
                  className="w-10 h-10"
                />

                <p className="p-2">{data.Title}</p>

              </div>
            );
          })
        }

      </div>

    </>
  );
}

export default Cart;
