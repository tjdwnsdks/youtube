/* 다 하면 src 폴더에 pages 폴더 만들어서 페이지 컴포넌트들 만들기 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 총 12개의 페이지를 제작할 것입니다.
import Home from './pages/Home'
import Today from './pages/Today'
import Developer from './pages/Developer'
import Webd from './pages/Webd'
import Website from './pages/Website'
import Gsap from './pages/Gsap'
import Port from './pages/Port'
import Youtube from './pages/Youtube'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'

const App = () => {
    return (
        <BrowserRouter> {/* 리액트 라우터의 BrowserRouter 컴포넌트로 감싸여 있습니다. 이 컴포넌트는 브라우저의 주소 히스토리 API를 사용하여 라우팅을 관리합니다. */}
        
            <Routes> {/* BrowserRouter 내에서 사용되며, 다양한 경로에 대한 라우트 정보를 정의합니다 */}
                <Route path='/' element={<Home />} /> {/*  경로가 '/'인 경우, Home 컴포넌트를 렌더링합니다 */}
                <Route path='/today' element={<Today />} /> 
                <Route path='/developer' element={<Developer />} /> 
                <Route path='/webd' element={<Webd />} /> 
                <Route path='/website' element={<Website />} /> 
                <Route path='/gsap' element={<Gsap />} /> 
                <Route path='/port' element={<Port />} /> 
                <Route path='/youtube' element={<Youtube />} /> 
                <Route path='/channel/:channelId' element={<Channel />} /> 
                <Route path='/video/:videoId' element={<Video />} /> 
                <Route path='/search/:searchId' element={<Search />} /> 
                <Route path='*' element={<Not />} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default App;

// 다 하면 src 폴더에 pages 폴더 만들어서 페이지 컴포넌트들 만들기