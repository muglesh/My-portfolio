// project images
import BeReady from '../assets/beready.png';
import Notes from '../assets/notes.png';
import Movies from '../assets/movies.png';

// skills images
import Html from '../assets/html5.svg';
import Css from '../assets/css.svg';
import Js from '../assets/javascript.svg';
import React from '../assets/react.svg';
import FireBase from '../assets/fireBase.svg';
import Python from '../assets/python.svg';
import Tailwind from '../assets/tailwindcss.svg';
import Cpp from '../assets/c++.svg';

export const projects = [
    {
        id: 1,
        title: 'BeReady',
        description:
            'BeReady is an AI-powered interview preparation platform built with React, Next.js, and Tailwind CSS. It features Vapi Assistant for realistic mock interviews and uses Firebase for authentication, data storage, and real-time interaction.',
        image: BeReady,
        stack: ['Next.js', 'Tailwind CSS', 'Fire Base', 'Vapi asistent'],
        liveUrl: 'https://be-ready-interview-platform.vercel.app',
        sourceUrl: 'https://github.com/muglesh/BeReady-interview-platform',
    },

    {
        id: 2,
        title: 'Popular Movies',
        description:
            'Popular Movies is a modern web app built with React, Tailwind CSS, and JavaScript. It displays the latest movies and reviews, using Appwrite for backend services like authentication, database, and API integration.',

        image: Movies,
        stack: ['React', 'Tailwind CSS', 'JavaScript', 'app-write',],
        liveUrl: 'https://popular-movies-sigma.vercel.app',
        sourceUrl: 'https://github.com/muglesh/MyProjects/tree/main/Popular%20movies',
    },

    {
        id: 3,
        title: 'Noteasy',
        description:
            'Noteasy is a sleek online notes app built with React, Tailwind CSS, and Redux Toolkit. It offers real-time note management and seamless state handling, using React-DOM for efficient rendering and a smooth user experience.',
        image: Notes,
        stack: ['React', 'Tailwind CSS', 'Redux-toolkit', 'React-dom'],
        liveUrl: 'https://noteasy.netlify.app',
        sourceUrl: 'https://github.com/muglesh/Notes-app',
    },
];

export const skills = [
    {
        id: 1,
        name: 'React',
        icon: React,
    },

    {
        id: 2,
        name: 'C++',
        icon: Cpp,
    },

    {
        id: 3,
        name: 'JavaScript',
        icon: Js,
    },

    {
        id: 4,
        name: 'HTML',
        icon: Html,
    },

    {
        id: 5,
        name: 'Fire Base',
        icon: FireBase,
    },

    {
        id: 6,
        name: 'Python',
        icon: Python,
    },

    {
        id: 7,
        name: 'Tailwind',
        icon: Tailwind,
    },

    {
        id: 8,
        name: 'Css',
        icon: Css,
    },
];