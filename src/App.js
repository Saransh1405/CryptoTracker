import './App.css';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Coin from './Coin';
import './Coin.css'
import {Helmet} from "react-helmet";


function App() {

  const [coins,setCoins] =useState([])
  const [scearch,setScearh]=useState('');

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false')
    .then(
      res=>{
        setCoins(res.data);
        
      }
    ).catch(error=>console.log(error));
  })


  const handleChange=e=>{
    setScearh(e.target.value)
  }

  const filtered=coins.filter(coin=>
    coin.name.toLowerCase().includes(scearch.toLowerCase()))

  return (
    <div className='coin-app'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>CryptoTracker</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className='coin-scearch'>
        <h1 className='coin-txt'>Scearch a currency</h1>
        <form>
          <input type="text" placeholder="Scearch" className='coin-input'
          onChange={handleChange}
         />
        </form>
      </div>

      {filtered.map(coin=>{
        return ( <Coin 
          key={coin.id} 
          name={coin.name} 
          image={coin.image} 
          symbol={coin.symbol}
          marketcap={coin.market_cap} price={coin.current_price}
          pricechange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
          />
        )
})}



    </div>
  );
}

export default App;
