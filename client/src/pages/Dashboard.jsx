import React, { useContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import axios from 'axios'

import Chart from "react-apexcharts";


const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
const Dashboard = () => {

  const [data, setData] = useState({
    totalUsers:0,
    male:0,
    female:0,
    fullTime:0,
    partTime:0,
    dailyWages:0,
  });

  useEffect(() => {
    const fun = async () =>{
      const x = await axios.get(`${baseUrl}/api/v1/user/all-users`) 
      const allData = x.data.allUsers;
      if(allData){
        // console.log(allData);
        const t_users = allData.length;
        const full_time = allData.filter(user => user.employmentType === 'full time').length;
        const part_time = allData.filter(user => user.employmentType === 'part time').length;
        const daily = allData.filter(user => user.employmentType === 'daily wages').length;
        const femaleCount = allData.filter(user => user.gender === 'female').length;
        const maleCount = allData.filter(user => user.gender === 'male').length;
        setData({
          totalUsers:t_users,
          male:maleCount,
          female:femaleCount,
          fullTime:full_time,
          partTime:part_time,
          dailyWages:daily,
        })
        // console.log(data);
      }
    }
    fun();
  },[]);


  return (
    <section className="mt-[10vh]">
      <Nav />

      <main className="flex ">

        {/* --- Side Bar Dashboard --- */}
        <div className="fixed left-0 top-[10vh] md:flex hidden md:felx-col w-[14vw] h-[90vh] border-r-2 border-black bg-yellow-400">
          <h1 className="text-xl text-center w-full py-3 border-b-2 border-black h-fit">
            {" "}
            DASHBOARD
          </h1>
        </div>

        {/* --- Pie Charts --- */}
        <main className=" flex-col md:border-2 border-black md:mt-8 md:mb-2 md:mr-6 md:ml-[17vw] ml-0 p-4 rounded-xl w-full text-lg">


          <div className="flexCenter md:flex-row flex-col gap-y-5 mb-10">
            <h2 className="md:w-[16%] w-auto">GENDER</h2>

            <div className="h-auto sm:w-[355px] w-[300px] mx-10">
              <Chart
                type="pie"
                series={[data.male, data.female]}
                options={
                  { labels: ["Male", "Female"] }
                }
              />
            </div>

            <div className="md:w-[20%] w-auto">
              <h2>TOTAL USER = {data.totalUsers}</h2>
              <h2>MALE = {data.male}</h2>
              <h2>FEMALE = {data.female}</h2>
            </div>
          </div>

          <div className="flexCenter md:flex-row flex-col gap-y-5">
            <h2 className="md:w-[16%] w-auto">EMPLOYMENT TYPE</h2>

            <div className="h-auto sm:w-[370px] w-[300px] mx-10">
              <Chart
                type="pie"
                series={[data.fullTime, data.partTime, data.dailyWages]}
                options={{
                  labels: ["Full-time", "Part-time", "Daily-wage"]
                }}
              />
            </div>

            <div className="md:w-[20%] w-auto">
              <h2>TOTAL USER = {data.totalUsers}</h2>
              <h2>FULL TIME = {data.fullTime}</h2>
              <h2>PART TIME = {data.partTime}</h2>
              <h2>DAILY WAGE = {data.dailyWages}</h2>
            </div>
          </div>
        </main>

      </main>

    </section>
  );
};

export default Dashboard;
