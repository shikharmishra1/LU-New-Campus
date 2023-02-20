import React, { useState, useContext, useRef } from 'react';
import StudyFilter from './Study_filter';
import axios from 'axios';
import { post } from 'jquery';
export default function UploadStudy(props) {
    let year2;

    const [Nyear, setNyear] = useState([<option value={year2}>choose an option</option>]);
    const [showFile, setShowFile] = useState(false);
    const [fileName, setFileName] = useState("");

    //Adds Suitable Year options associated with the course
    function addYear(e) {
        setNyear([]);
        let val = e.target.value;
        let year = e.target.children[e.target.selectedIndex].attributes['year'].value;
        console.log(e.target.children[e.target.selectedIndex].attributes['year'].value);
        year2 = year;
        for (let i = 1; i <= year; i++) {
            setNyear(prev => [...prev, <option value={i}>{i}</option>]);
        }
        post_data.Course = e.target.value;
        

    }
    let post_data = useRef(
        {
            Title: "",
            Content: "",
            Course: "",
            Year: 1,
        });

    //Post: Creates Study Material
    function createStudyMat(e) {

        if (post_data.Year == null)
            post_data.Year = 1;
; 

        axios.post('/api/studymat',
            post_data,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(function (response) {
            
            console.log(response);
            console.log(post_data);

        })
            .catch(function (error) {
                console.log(error.response);
                console.log(error.request);
            });
    }
    return (<div className="flex">
        <nav className={"glass-box " + props.position}>
            <div>
            <div className="flex gap-2">
                <div class="flex items-center justify-center w-[400px]">
                    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-[10rem] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">PDF, DOCS, PPT or TXT (MAX. 10mb)</p>
                        </div>
                            <input onChange={(e) =>
                            {
                                if (e.target.files[0])
                                {
                                    setShowFile(true);
                                    setFileName(e.target.files[0].name);
                                    
                                }
                            }} id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div>
                </div></div>
            {showFile ? <div className="flex text-base text-white">Uploaded file: &nbsp;<div className="text-pink-500"> {fileName}</div></div> : null}

            <div className="flex gap-2 mb-4"><div class="text-center text-base font-medium text-white self-center"> Title: </div><input onChange={(e) => {

                post_data.Title = e.target.value;
                
                console.log(post_data.Title);
            }} className="relative glass-box w-[82%] text-pink-500" /></div>


            <div className="flex gap-2 mb-4"><div class="text-center text-base font-medium text-white self-center"> Content: </div><textarea onChange={(e) => {
                post_data.Content = e.target.value;
                console.log(post_data.Content);
            }} className=" relative text-sm  glass-box w-[82%] text-pink-700" /></div>
           <div className="flex gap-2">
            <div className="flex gap-2"><div class="text-center text-base font-medium text-white self-center"> Course: </div>
                    <select onChange={addYear} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Choose an option</option>
                    <option value="btech" year="4">B.Tech</option>
                    <option value="BCA" year="3">BCA</option>
                    <option value="MCA" year="2">MCA</option>
                    <option value="LLB" year="5">LLB</option>
                </select></div>
                <div className="flex gap-2"><div className="text-center text-base font-medium text-white self-center"> Year: </div>
                   
                    <select onChange={(e) => {
                        post_data.Year = parseInt(e.target.value);
                        
                    }} class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                        {Nyear}


                    </select>
                
                </div>
                
            </div>
            <div className="flex justify-center"><button onClick={ createStudyMat } type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-pink-400 dark:hover:text-white dark:hover:bg-pink-600 dark:focus:ring-pink-600">Upload</button></div>
        </nav></div>
        );
}