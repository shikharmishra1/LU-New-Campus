import React, { Component } from 'react';

export default function Home(props)
{
    let iframe = 'hi';
    return (
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!4v1675355032255!6m8!1m7!1sCAoSLEFGMVFpcE9JOUZDQkhqZGRGY3E4MjJUN2wwcjNFMkJ5OHUzUjJGRjlMa2tF!2m2!1d26.9293611!2d80.93854309999999!3f340.7158395530528!4f-7.589160354832629!5f0.7820865974627469" className="w-full" style={{border:0, height:'86vh'}} allowfullscreen="no" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
        );
}
