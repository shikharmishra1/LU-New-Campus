import react, { useEffect } from 'react';
import axios from 'axios';
export default function StudyMatPost(props)
{
    
    return (
        
        <div className="glass-box flex border-white m-0 p-0 relative py-2">
        <div className="text-white px-2 text-lg font-bold">
            { props.title }
        </div>
        <div className="px-2 text-gray-200">
            { props.content }
        </div>
        <div className="text-gray-200 px-2 py-1 flex justify-between bg-teal-800 translate-y-2 rounded-b-lg">
            <div className="flex gap-1 hover:bg-gray-600 hover:cursor-pointer rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
            </svg>
            <div className="text-gray-400 ">Images</div>
            </div>
            <div className="flex gap-1 hover:bg-gray-600 hover:cursor-pointer rounded-md ">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-file-earmark-binary-fill" viewBox="0 0 16 16">
                    <path d="M5.526 10.273c-.542 0-.832.563-.832 1.612 0 .088.003.173.006.252l1.559-1.143c-.126-.474-.375-.72-.733-.72zm-.732 2.508c.126.472.372.718.732.718.54 0 .83-.563.83-1.614 0-.085-.003-.17-.006-.25l-1.556 1.146z" />
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-2.45 8.385c0 1.415-.548 2.206-1.524 2.206C4.548 14.09 4 13.3 4 11.885c0-1.412.548-2.203 1.526-2.203.976 0 1.524.79 1.524 2.203zm3.805 1.52V14h-3v-.595h1.181V10.5h-.05l-1.136.747v-.688l1.19-.786h.69v3.633h1.125z" />
                </svg>
                <div className="text-gray-400">Document</div>
            </div>
            <div className="flex gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="hover:bg-gray-600 rounded-md hover:cursor-pointer" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
               
            </div>
        </div>

            </div>
        );
}
