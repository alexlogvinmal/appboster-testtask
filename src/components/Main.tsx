import { useState } from 'react';
import { useCurrency } from '../hook/currency';
import { Newvaluta } from './Newvaluta';
import { Newoption } from './Newoption';
import './newvaluta.css';


export function Main() {
  const valuta = useCurrency()
  const [currency, setCurrency] = useState(1);


  function Switchcurrency(el: any) {
    if (el.target.value == 'UAH') {
      setCurrency(1);
    } else {
      let obje = valuta.filter(e => e.cc == el.target.value);
      setCurrency(obje[0].rate);
    }
  }


  return (
    <table>
      <caption>КУРСИ ВАЛЮТ ДО <select className='mainselect' onChange={Switchcurrency}>
        <option value='UAH'>UAH</option>
        {valuta.map(e => <Newoption valuta={e} key={e.r030} />)}
      </select>
      </caption>
      <tr>
        <th>Код</th>
        <th>Одиниця</th>
        <th>Валюта</th>
        <th>Курс</th>
      </tr>
      {valuta.map(e => <Newvaluta valuta={e} maincurrency={currency} key={e.r030} />)}
    </table>
  );
}

