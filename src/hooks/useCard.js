import { useEffect, useState } from 'react';

const useCard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(result => setData(result))
    }, [])
    return { data }
};
export default useCard;