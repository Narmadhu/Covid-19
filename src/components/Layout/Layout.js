import React from 'react';
import {Cards, Chart, CountryPicker } from "../../components";
// import styles from '../../App.module.css';
import "./Layout.css"

function Layout() {
    return (
        <div className="layout">
        <Cards/>
        <CountryPicker/>
        <Chart/>
        </div>
    )
}

export default Layout
