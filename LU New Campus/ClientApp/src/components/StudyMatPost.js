import react, { useEffect } from 'react';
import axios from 'axios';
export default function StudyMatPost(props)
{
    
    return (<div className="glass-box flex relative py-2">
        <div className="text-white font-bold">
            { props.title }
        </div>
        <div className="text-gray-200">
            { props.content }
        </div>

    </div>);
}
