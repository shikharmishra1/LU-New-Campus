import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudyFilter from './Study_filter.js';
import StudySearch from './StudySearch.js';
import UploadStudy from './UploadStudy.js';
import { Transition } from '@headlessui/react';
import StudyMatPost from './StudyMatPost.js';
export default function Study()
{
    const [showfilter, setshowfilter] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showUpload, setShowUpload] = useState(false);


    let postdata = [];
    let index;
    let title;
    let content;
    const [post, setPost] = useState([null]);
    function addPost() {
        //setNyear([]);
        
        

    }

    
    useEffect(() => {
        axios.get('/api/studymat',

            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(function (res) {
            postdata = res.data;
            console.log(postdata[0].Title);
            for (let i = 0; i <= postdata.length; i++) {
                index = i;
                title = postdata[i].Title;
                content = postdata[i].Content;
                console.log(title);
                setPost(prev => [...prev, <StudyMatPost title={ title } content={content} />]);
            }
            
        })
            .catch(function (error) {
                console.log(error.response);
                console.log(error.request);
            });
    }, [])
    //document.body.style = 'background: red;';
    return (
        
            <div
                class="relative bg-gray-50 dark:bg-slate-900 w-screen h-screen pattern"
            >
            <nav className="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
                <a onClick={(e) => { setShowUpload(!showUpload); setShowSearch(false); setshowfilter(false) }} class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-indigo-600 dark:bg-sky-900 dark:text-sky-50" target="_blank">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z" />
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                    </svg>

                    <small class="text-center text-xs font-medium"> Upload </small>
                </a>
                <a class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-indigo-600 dark:bg-sky-900 dark:text-sky-50" target="_blank">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                    </svg>

                    <small class="text-center text-xs font-medium"> Recent </small>
                </a>
                <a onClick={(e) => { setshowfilter(!showfilter); setShowSearch(false) }} class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-indigo-600 dark:bg-sky-900 dark:text-sky-50" target="_blank">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
                    </svg>

                    <small class="text-center text-xs font-medium"> Filters </small>
                </a>
                <a onClick={(e) => { setShowSearch(!showSearch); setshowfilter(false) }} class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-indigo-600 dark:bg-sky-900 dark:text-sky-50" target="_blank">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>

                    <small class="text-center text-xs font-medium"> Search </small>
                </a>
            </nav>  
            <div className="glass-box relative py-2 w-[60%] gap-2 flex border-white left-[130px] top-[10px]">
                {post }
            </div>
            <Transition
                show={showfilter}
                enter="transition-opacity duration-90"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-170"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <StudyFilter position='w-[30%] relative left-[120px] top-[145px]'/>
            </Transition>
            <Transition
                show={showSearch}
                enter="transition-opacity duration-90"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-170"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <StudySearch className="glass-box text-amber-50 left-[120px] top-[280px] relative" />
            </Transition>
            <Transition
                show={showUpload}
                enter="transition-opacity duration-90"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-170"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <UploadStudy position="flex fixed left-[120px]  top-[120px]" />
            </Transition>
            </div>
       
        );
}
