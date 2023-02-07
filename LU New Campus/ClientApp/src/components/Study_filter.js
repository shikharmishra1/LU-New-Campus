import React, { useState } from 'react';
export default function StudyFilter() {
    let year2;

    const [Nyear, setNyear] = useState([<option value={year2}>choose an option</option>]);
    function addYear(e)
    {
        setNyear([]);
        let val = e.target.value;
        let year = e.target.children[e.target.selectedIndex].attributes['year'].value;
        console.log(e.target.children[e.target.selectedIndex].attributes['year'].value);
        year2 = year;
        for (let i = 1; i <=year; i++)
        {
            setNyear(prev => [...prev, <option value={year2}>{i}</option> ]);
        }
        
    }

    return (
        <nav className="glass-box left-[120px] top-2/4 -translate-y-2/4">
        <div className="flex gap-2"><div class="text-center text-base font-medium text-white self-center"> Course: </div>
                <select onChange={addYear} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose an option</option>
                <option value="btech" year="4">B.Tech</option>
                <option value="BCA" year="3">BCA</option>
                <option value="MCA" year="3">MCA</option>
                <option value="LLB" year="5">LLB</option>
                </select></div>
        <div className="flex gap-2"><div class="text-center text-base font-medium text-white self-center"> Year: </div>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                   
                    {Nyear }
                
            </select></div>

    </nav>);
}
