import {useEffect, useState} from "react";

export default function TestSearch() {

    const [srchResult, setSrchResult] = useState()
    const [inputVal, setVal] = useState('');

    function onInputChange(e) {
        setVal(e.target.value);
    }

    useEffect(() => {
        const search = async (value) => {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/keyword?query=${value}`,
            );

            const data = await response.json();

            if (!srchResult) {
                setSrchResult(data);
            }
        }

        if (inputVal) {
            search(inputVal);
        }
    }, [inputVal])


    return (
        <div>
            <input type="text" placeholder="Search..." value={inputVal} onChange={onInputChange}/>
        </div>
    )


}