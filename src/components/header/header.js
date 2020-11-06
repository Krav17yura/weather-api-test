import React, {useEffect} from 'react'
import './header.css'

const Header = () => {


    useEffect(() => {
    /*    //const url = `http://api.openweathermap.org/data/2.5/weather?q=Trypillia&appid=11b3dfa1d2e40fc8786190fab4640d93&lang=ru`
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=Kiev&appid=11b3dfa1d2e40fc8786190fab4640d93`
        fetch(url)
            .then(res => res.json())
            .then(d => setData(d))
            .catch(err => console.log(err))*/
    }, [])




    return (

        <header className='header'>
            <h1 className='header__title'>Weather-App</h1>
          {/*  {data &&
            <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/>
            }*/}
        </header>

    )
}

export default Header