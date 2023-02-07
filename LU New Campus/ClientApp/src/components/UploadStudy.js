import React, { useState } from 'react';
import StudyFilter from './Study_filter';

export default function UploadStudy(props) {
    let year2;

    const [Nyear, setNyear] = useState([<option value={year2}>choose an option</option>]);
    function addYear(e) {
        setNyear([]);
        let val = e.target.value;
        let year = e.target.children[e.target.selectedIndex].attributes['year'].value;
        console.log(e.target.children[e.target.selectedIndex].attributes['year'].value);
        year2 = year;
        for (let i = 1; i <= year; i++) {
            setNyear(prev => [...prev, <option value={year2}>{i}</option>]);
        }

    }
    return (
        <nav className={"glass-box " + props.position}>
            <div className="flex gap-2">
                <div class="flex items-center justify-center w-[400px]">
                    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-[10rem] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">PDF, DOCS, PPT or TXT (MAX. 10mb)</p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div>
            </div>
        
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

                    {Nyear}

                </select></div>
        </nav>
        );
}