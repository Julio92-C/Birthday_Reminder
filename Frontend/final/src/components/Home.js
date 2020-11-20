import React, {useEffect, useState} from 'react';
import { Birthdays } from './Birthdays';


export const Home = () => {
    const [birthdays, setBirthdays] = useState([]);

  useEffect(() => {
    fetch('/birthdays').then(response => response.json().then(data => {
      setBirthdays(data.birthdays);
    }))
  }, []);

  console.log(birthdays);

    return (
        <main>
        <section className='container'>
          <h3>{birthdays.length} birthdays today</h3>
          <Birthdays birthdays={ birthdays } />
          <button onClick={() => setBirthdays([])}>clear all</button>
        </section>
      </main>
    )
}
