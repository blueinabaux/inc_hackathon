import { useEffect, useState } from "react";
import axios from 'axios';
import '../Styling/gallery.css';
const Gallery = () => {
    
    const [image, setImage] = useState([]);
    const [error, setError] = useState('');


    // For static images
    const eventImages = [
        {
            id:1,
            img:"image_url here"
        },
        {
            id:2,
            img:"image_url here"
        },
        {
            id:3,
            img:"image_url here"
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
                        image.length > 0 ? (image.map((img) => {
                            return(
                                <>
                                    {/* <h2>{img.author}</h2> */}
                                    <img src={img.download_url} alt="" />
                                </>
                            );
                        })) : (<h1>NOT FOUND</h1>)
                        
                    }
                   </div>
                </div>
            </div>
        </>
     );
}
 
export default Gallery;