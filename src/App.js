import React from 'react';
import { fetchData } from './api';
import Layout from './components/Layout/Layout';

class App extends React.Component{
  async componentDidMount(){
    const data = await fetchData();
    console.log(data);
  }
  render(){
    return(
      <div>
       <Layout />
      </div>
    )
  }
}

export default App;