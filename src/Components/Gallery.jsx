import { useEffect, useState } from "react";
import axios from 'axios';
import '../Styling/gallery.css';
import img1 from "../Assets/tf_img1.jpg"
import img2 from "../Assets/tf_img2.jpg"
import img3 from "../Assets/tf_img3.jpg"
import img4 from "../Assets/tf_img4.jpg"
import img5 from "../Assets/tf_img5.jpg"
import img6 from "../Assets/tf_img6.jpg"
import img7 from "../Assets/tf_img7.jpg"


const Gallery = () => {
    
    const [image, setImage] = useState([]);
    const [error, setError] = useState('');


    // For static images
    const eventImages = [
        {
            id:1,
            img: img1
        },
        {
            id:2,
            img: img2
        },
        {
            id:3,
            img: img3
        },
        {
            id:4,
            img: img4
        },
        {
            id:5,
            img: img5
        },
        {
            id:6,
            img: img6
        },
        {
            id:7,
            img: img7
        },

    ];


    useEffect(() => {
        const fetchImages = async () => {
            try{
                const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=20');
                const imageData = response.data;
                setImage(imageData);
                console.log(imageData);

            }
            catch(error){
                setError('Failed to Fetch Image')
            }
        }

        fetchImages();
    },[]);
    console.log(image);


    return ( 
        <>
            <div className="galleryContainer">
                <div className="gallery-header">
                    <h1>Gallery</h1>
                </div>

                <div className="main-gallery">
                   <div className="scroll-gallery">

                    {/* for static images, change the image to eventImages accordingly */}
                    {
                        eventImages.map((img) => {
                            return(
                                <>
                                    <img src={img.img} alt="" />
                                </>
                            );
                        })
                    }
                   {/* {
                        image.length > 0 ? (image.map((img) => {
                            return(
                                <>
                                    <img src={img.download_url} alt="" />
                                </>
                            );
                        })) : (<h1>NOT FOUND</h1>)
                        
                    } */}
                   </div>
                </div>
            </div>
        </>
     );
}
 
export default Gallery;