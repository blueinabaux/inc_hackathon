import React from 'react';
import domain1 from '../Assets/domain1.png';
import domain2 from '../Assets/domain2.png';
import domain3 from '../Assets/domain3.png';
import domain4 from '../Assets/domain4.png';
import '../Styling/Themes.css';

const themeData = [
    { id: 1, name: 'Agriculture', image: domain4 },
    { id: 2, name: 'Healthcare', image: domain2 },
    { id: 3, name: 'Education Technology', image: domain3 },
    { id: 4, name: 'Others', image: domain1 },
];

const Themes = () => {
    return (
        <div className="themes">
            <h1>DOMAINS</h1>
            <div className="theme_list">
                {themeData.map((theme) => (
                    <div key={theme.id} className="single_theme">
                        <div className="theme_image">
                            <img src={theme.image} alt="" />
                        </div>
                        <div className="theme_content">
                            <p>{theme.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Themes;
