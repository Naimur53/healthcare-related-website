import { useEffect, useState } from 'react';

const useCard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://naimur53.github.io/health-api/fakeData.json')
            .then(res => res.json())
            .then(result => setData(result))
    }, [])
    return { data }
};
export default useCard;