import { ICurrency } from '../models';

interface ValutaProps {
  valuta: ICurrency
}



export function Newoption({ valuta }: ValutaProps) {

  return (
    <option value={valuta.cc}>{valuta.cc}</option>
  );
}
