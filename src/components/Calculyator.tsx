import './calculyator.css';
import { useCurrency } from '../hook/currency';
import { useEffect, useState } from 'react';
import { Newoption } from './Newoption';

export function Calculyator() {
    const valuta = useCurrency();


    const [currency1, setCurrency1] = useState(valuta.filter(e => e.cc == 'USD'));
    const [currency2, setCurrency2] = useState(valuta.filter(e => e.cc == 'EUR'));


    const [valuecalc, setValuecalc] = useState(0);
    const [valuecalc1, setValuecalc1] = useState(0);

    useEffect(() => {
        if (currency2.length == 0 && currency1.length == 0) {
            setValuecalc1(valuecalc * 1)
        }else if(currency2.length == 0){
            setValuecalc1(valuecalc * (currency1[0].rate / 1))
        }else if( currency1.length == 0){
            setValuecalc1(valuecalc * (1 / currency2[0].rate))
        }else {
            setValuecalc1(valuecalc * (currency1[0].rate / currency2[0].rate))
        }
    }, [valuecalc, currency2, currency1])



    function Switchoption1(el: any) {
        setCurrency1(valuta.filter(e => e.cc == el.target.value));    
    }

    function Switchoption2(el: any) {
        setCurrency2(valuta.filter(e => e.cc == el.target.value))      
    }

    return (
        <div className='calculator'>
            <p>КОНВЕРТЕР ПО КУРСУ</p>
            <div className='topcalc'><input  type='number'onChange={e => setValuecalc(+e.target.value)} /><select onChange={Switchoption1}>
                <option value='UAH'>UAH</option>
                {valuta.map(e => <Newoption valuta={e} key={e.r030} />)}
            </select></div>
            <div><input type='number' value={valuecalc1} readOnly /><select onChange={Switchoption2}>
                <option value='UAH'>UAH</option>
                {valuta.map(e => <Newoption valuta={e} key={e.r030} />)}
            </select></div>
        </div>
    );
}
