import { ICurrency } from '../models';

interface ValutaProps {
  valuta: ICurrency
  maincurrency: number
}



export function Newvaluta( { valuta, maincurrency }: ValutaProps) {

  return (
    <tr className='tablevaluta'>
      
      <td>{valuta.cc }</td>
      <td>1</td>
      <td>{valuta.txt}</td>
      <td>{valuta.rate/maincurrency}</td> 
    </tr>

  );
}

