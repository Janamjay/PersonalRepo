import React from 'react'
import './Imagechange.css'
import { useState } from 'react'

export default function Imagechange() {
    const [imageUrl, setImageUrl] = useState(0);

    const images = [
        'https://cdn.wallpapersafari.com/4/55/stSVQd.jpg',
        'https://images7.alphacoders.com/506/506800.jpg',
        'https://c4.wallpaperflare.com/wallpaper/844/91/639/harry-potter-harry-potter-and-the-goblet-of-fire-albus-dumbledore-hd-wallpaper-preview.jpg',
        'https://upload.wikimedia.org/wikipedia/en/1/10/RubeusHagrid.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYdz1hZjuedzNx38bFMKnrCfF2W2zvFU--uQ&usqp=CAU',
        'https://upload.wikimedia.org/wikipedia/en/b/b9/Ootp076.jpg',
        'https://wallpaperset.com/w/full/7/5/c/469531.jpg',
        'https://c4.wallpaperflare.com/wallpaper/435/850/519/harry-potter-harry-potter-characters-poster-wallpaper-preview.jpg',
        'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/12/Harry-Potter-Characters-Ranked-by-Intelligence.jpg'
    ];
    function toggleChange() {
        setImageUrl((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className='outer-box'>
            <div className="main-box">
                <div className="image-part">
                    <img src={images[imageUrl]} alt="" />
                </div>
                <div className="btn-part">
                    <button onClick={toggleChange}>Change Pic</button>
                </div>
            </div>
        </div>
    )
}
