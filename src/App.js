
import { React, useState, useEffect } from 'react'
import axios from "axios";
import CardSensor from "./components/CardSensor";
const baseURL = "http://127.0.0.1:3001/sensor";

function App() {
  let [data, setdata] = useState([]);
  let [sensor1, setsensor1] = useState('30');
  let [sensor2, setsensor2] = useState('90');
  
  const getData = async() => {
    try {
      await axios.get(baseURL).then((response) => {
        setdata(response.data['data']);
        // console.log(data);
        setsensor1(data['sensor1'])
        setsensor2(data['sensor2'])
        console.log(data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData()
    }, [sensor1]);
  return (
    <div className="App">
      <div class="flex flex-row mt-10">

        <div class="flex-none md:flex-1 ...">
        <CardSensor title="Volume Infus" data={sensor1}/>
        </div>
        <div class="flex-none md:flex-1 ...">
        <CardSensor title="Kecepatan Cairan " data={sensor2}/>
        </div>

      </div>
    </div>
  );
}

export default App;
