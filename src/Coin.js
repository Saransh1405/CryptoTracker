import React from 'react'

const Coin = ({name,image,symbol,price,volume,pricechange,marketcap}) => {
  return (
    <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin'>
                <img src={image} alt="crypto"/>
                <h1>{name}</h1>
                <p classname= 'coin-symbol'> {symbol}</p>
            </div>
            <div className='coin-data'>
               <p className='coin-price'>${price}</p>
               <p className='coin-volume'>${volume.toLocaleString()}</p>
               {pricechange<0?(
                <p className='coin-percent red'> {pricechange.toFixed(2)}%</p>
               ):
               (<p className='coin-percent green'> {pricechange.toFixed(2)}%</p>)
            }

            <p className='coin-marketcap'>
                Market Cap: ${marketcap.toLocaleString()}
            </p>
            </div>
        </div>
    </div>
  )
}

export default Coin