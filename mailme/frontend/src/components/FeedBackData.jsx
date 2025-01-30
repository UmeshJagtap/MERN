import React, { useState, useEffect } from 'react';
import '../App.css';

export default function FeedBackData() {
  const base_url = 'http://localhost:3000/api/feedbacks';

  //   const res = async fetch(base_url);
  //   const mail  async

  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/todos')
    fetch(base_url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <p>FeedBackData :-</p>
      {/* <p>{JSON.stringify(data)}</p> */}

      <table className="border-2 border-gray">
        <thead>
          <tr>
            <th>Feedback</th>
            <th>Email</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((mail) => (
            <tr key={mail.id}>
              <td>
                <p>{mail.feedback}</p>
              </td>

              <td>
                <p>{mail.email}</p>
              </td>

              <td>
                <p>{mail.name}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <section>
        <title>Tracking Eyes in Html CSS</title>

        <div className="wrapper">
          {/* <div style="--a: 0;" className="btn-sensor sensor-n"></div>
          <div style="--a: 45;" className="btn-sensor sensor-ne"></div>
          <div style="--a: 90;" className="btn-sensor sensor-e"></div>
          <div style="--a: 135;" className="btn-sensor sensor-se"></div>
          <div style="--a: 180;" className="btn-sensor sensor-s"></div>
          <div style="--a: 225;" className="btn-sensor sensor-sw"></div>
          <div style="--a: 270;" className="btn-sensor sensor-w"></div>
          <div style="--a: 315;" className="btn-sensor sensor-nw"></div> */}

          <button className="btn-button">
            <div className="btn-lid"></div>
            <div className="btn-pupil"></div>
          </button>

          <button className="btn-button">
            <div className="btn-lid"></div>
            <div className="btn-pupil"></div>
          </button>
        </div>
      </section>
    </div>
  );
}

{
  /* <div style="--a: 0;" className="btn-sensor sensor-n"></div>
<div style="--a: 45;" className="btn-sensor sensor-ne"></div>
<div style="--a: 90;" className="btn-sensor sensor-e"></div>
<div style="--a: 135;" className="btn-sensor sensor-se"></div>
<div style="--a: 180;" className="btn-sensor sensor-s"></div>
<div style="--a: 225;" className="btn-sensor sensor-sw"></div>
<div style="--a: 270;" className="btn-sensor sensor-w"></div>
<div style="--a: 315;" className="btn-sensor sensor-nw"></div> */
}

{
  /* <div style="--a: 0;" class="btn-sensor sensor-n"></div>
          <div style="--a: 45;" class="btn-sensor sensor-ne"></div>
          <div style="--a: 90;" class="btn-sensor sensor-e"></div>
          <div style="--a: 135;" class="btn-sensor sensor-se"></div>
          <div style="--a: 180;" class="btn-sensor sensor-s"></div>
          <div style="--a: 225;" class="btn-sensor sensor-sw"></div>
          <div style="--a: 270;" class="btn-sensor sensor-w"></div>
          <div style="--a: 315;" class="btn-sensor sensor-nw"></div> */
}

// Sample JSON
// [
//   {
//     _id: '67953110cd2f4fd3ca202e63',
//     name: 'abc',
//     email: 'abc@hotmail.com',
//     feedback: 'You are awesome ... First Feedback',
//     quantity: 10,
//     price: 5.99,
//     createdAt: '2025-01-25T18:44:32.491Z',
//     updatedAt: '2025-01-25T18:44:32.491Z',
//     __v: 0,
//   },
//   {
//     _id: '679532581b64d42ed8ea0e5e',
//     name: 'xyz',
//     email: 'xyz@hotmail.com',
//     feedback: 'You are really very awesome ...',
//     quantity: 8,
//     price: 5.99,
//     createdAt: '2025-01-25T18:50:00.498Z',
//     updatedAt: '2025-01-25T18:50:00.498Z',
//     __v: 0,
//   },
//   {
//     _id: '679537ca3e32604f041fd527',
//     name: 'jkl',
//     email: 'jkl@hotmail.com',
//     feedback: 'Totally satisfied ...',
//     quantity: 91,
//     price: 6.95,
//     createdAt: '2025-01-25T19:13:14.967Z',
//     updatedAt: '2025-01-25T19:13:14.967Z',
//     __v: 0,
//   },
//   {
//     _id: '679538ed592540848faf5226',
//     name: 'jk',
//     email: 'jk@hotmail.com',
//     feedback: 'Totally very satisfied ...',
//     quantity: 99,
//     price: 3.95,
//     createdAt: '2025-01-25T19:18:05.157Z',
//     updatedAt: '2025-01-25T19:18:05.157Z',
//     __v: 0,
//   },
//   {
//     _id: '67953c3079e4653fec40c5c6',
//     name: 'asdf',
//     email: 'asdf@hotmail.com',
//     feedback: 'Good one ...',
//     quantity: 20,
//     price: 5.34,
//     createdAt: '2025-01-25T19:32:00.260Z',
//     updatedAt: '2025-01-25T19:32:00.260Z',
//     __v: 0,
//   },
//   {
//     _id: '67953cd1956653d934e0832d',
//     name: 'asdfgh',
//     email: 'asdfgh@hotmail.com',
//     feedback: 'Good one two...',
//     quantity: 20,
//     price: 5.34,
//     createdAt: '2025-01-25T19:34:41.521Z',
//     updatedAt: '2025-01-25T19:34:41.521Z',
//     __v: 0,
//   },
// ];
