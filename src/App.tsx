import logo from './logo.svg';
import './App.module.css';
import React from "react";
import {Header} from "./Components/Header";
import styles from './App.module.css'
import {Table} from "./Components/Table";


let arr = [
  {
    "id": 1,
    "name": "ExpsaertSender",
    "sites": 0,
    "type": "email",
    "status": "blocked"
  },
  {
    "id": 2,
    "name": "Tag Commander",
    "sites": 0,
    "type": "tag_manager",
    "status": "blocked"
  },
  {
    "id": 3,
    "name": "Ysance",
    "sites": 0,
    "type": "dmp_crm",
    "status": "blocked"
  },
  {
    "id": 4,
    "name": "AT Internet",
    "sites": 1,
    "type": "analytics",
    "status": "enable"
  },
  {
    "id": 5,
    "name": "Content Square",
    "sites": 3,
    "type": "analytics",
    "status": "enable"
  },
  {
    "id": 6,
    "name": "Google Tag Manager",
    "sites": 2,
    "type": "tag_manager",
    "status": "enable"
  },
  {
    "id": 7,
    "name": "Heatmap",
    "sites": 1,
    "type": "heatmap",
    "status": "enable"
  },
  {
    "id": 8,
    "name": "Tealium",
    "sites": 0,
    "type": "dmp_crm",
    "status": "disable"
  },
  {
    "id": 9,
    "name": "Emarsys",
    "sites": 0,
    "type": "email",
    "status": "disable"
  }
]

// const renderItems = (item:any,index:number)=>{
//   return(
//       <tr key={index}>
//         <td>{item.name}</td>
//         <td>{`${item.sites} site`}</td>
//         <td>{item.type}</td>
//         <td>{item.status}</td>
//       </tr>
//   )
// }

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.newnew}>
        {/*<Header />*/}
        <Table/>
      </div>

    </div>
  );
}

export default App;
