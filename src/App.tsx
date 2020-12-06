import './App.module.css';
import React from "react";
import styles from './App.module.css'
import {TableContainer} from "./Components/Table/TableContainer";

function App() {
    return (
        <div className={styles.App}>
            <div className={styles.newContainer}>
                <TableContainer/>
            </div>
        </div>
    );
}

export default App;
