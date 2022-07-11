import Head from 'next/head'
import { useState } from 'react';
import Bar from '../components/Bar'
import Percentage from '../components/Percentage';
import Time from '../components/Time';


const Home = () => {
  const [hour, setHour] = useState<number>(12);
  var today = new Date();
  var time = today.getHours();
  var min = today.getMinutes();
  let arr = new Array();
  for (var i = 1; i < hour; i++) {
    arr.push(i);
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Battery Status</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex align-center justify-center">
        <input placeholder='insert time format 12 or 24' onChange={(e) => setHour(e.target.value)} type="number" style={{ width: "300px" }} />
      </div>
      <div className='flex justify-evenly w-80 mb-4 mt-4'>
        <Time hour={hour} time={time} min={min} />
        <Percentage time={time} hour={hour} />
      </div>
      <Bar hour={hour} time={time} arr={arr} />
    </div>
  )
}

export default Home
