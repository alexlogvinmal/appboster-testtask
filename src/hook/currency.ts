import axios from 'axios'
import { ICurrency } from '../models';
import { useEffect, useState } from 'react';

export function useCurrency() {

    const [valuta, setValuta] = useState<ICurrency[]>([])

    async function fetchCurrency() {

        const response = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
        setValuta(response.data)
    }
    useEffect(() => {
        fetchCurrency()
    }, [])

    return (valuta)
}