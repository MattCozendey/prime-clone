import React from 'react';
import './Style.css';
import Navbar from './Navbar/Navbar';
import Carrousel from './Carrousel/Carrousel';
import Catalog from './Catalog/Catalog';

const Main = (props)=>{
    return <div>
        <Navbar/>
        <Carrousel titles={
            [
                {
                    id: 0,
                    title: "American Horror Story",
                    url: "https://m.media-amazon.com/images/G/01/digital/video/sonata/SVOD_ROW_AmericanHorrorStory_S9/5ff3f5a7-6c65-4037-b32f-8f26114fca3f._UR3000,600_SX1500_FMwebp_.jpg"
                },
                {
                    id: 1,
                    title: "The Boys",
                    url: "https://m.media-amazon.com/images/G/01/digital/video/sonata/SVOD_ROW_TheBoys_S2_Homelander/891a1d8f-8e1b-4991-8208-7d018f280bac._UR3000,600_SX1500_FMwebp_.jpg"
                },
                {
                    id: 2,
                    title: "High Town",
                    url: "https://m.media-amazon.com/images/G/01/digital/video/sonata/CROW_BR_STARZ_Hightown/291cf99c-9e26-4fbc-82f3-15c9295653df._UR3000,600_SX1500_FMwebp_.jpg"
                },
                {
                    id: 3,
                    title: "Fear the Walking Dead",
                    url: "https://m.media-amazon.com/images/G/01/digital/video/sonata/SVOD_ROW_SH_FeartheWalkingDead_S5_NoLocaleOnly/a250aa9c-9675-47fe-a895-749f9d8947dd._UR3000,600_SX1500_FMwebp_.jpg"
                },
                {
                    id: 4,
                    title: "The Act",
                    url: "https://m.media-amazon.com/images/G/01/digital/video/sonata/CROW_BR_STARZ_TheAct/181b8c47-0f6c-4348-9468-17450826b741._UR3000,600_SX1500_FMwebp_.jpg"
                },
                {
                    id: 5,
                    title: "Upload",
                    url: "https://m.media-amazon.com/images/G/01/digital/video/sonata/SVOD_ROW_Upload_S1_POST_NoLocaleOnly/8b2ff283-82fa-4601-92fa-717618445e0b._UR3000,600_SX1500_FMwebp_.jpg"
                },
            ]
        }/>
        <Catalog/>
    </div>
}

export default Main;