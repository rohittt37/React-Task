import React, { useState } from 'react'

const ImageGallery = () => {
    const initialImages = [
        { id: 1, src: 'https://images.pexels.com/photos/29023460/pexels-photo-29023460/free-photo-of-brazilian-cowboy-riding-horse-in-arena.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', isDeleted: false },
        { id: 2, src: 'https://images.pexels.com/photos/28924817/pexels-photo-28924817/free-photo-of-hong-kong-island-dazzling-night-skyline.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', isDeleted: false },
        { id: 3, src: 'https://images.pexels.com/photos/29008754/pexels-photo-29008754/free-photo-of-scenic-desert-highway-at-sunrise-in-utah.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', isDeleted: false },
    ];

    const [images, setImages] = useState(initialImages);
    const [deletedImages, setDeletedImages] = useState([]);

    const handleDeleteToggle = (id) => {
        const updatedImages = images.map((image)=> image.id === id ? {...image, isDeleted : ! image.isDeleted }: image);
        setImages(updatedImages);

        const deleted = updatedImages.filter((image) => image.isDeleted);
        setDeletedImages(deleted);
    };
  return (
    <div>
      <h1>Image Gallery</h1>
      {/* Image list rendering */}

      <div className='image-grid'>
        {images.map((image) => (
            <div key={image.id}>
                {/* Conditionally render image or "Deleted" text*/}
                {image.isDeleted ? (
                    <div>
                        <p>Deleted</p>
                        <button onClick={()=> handleDeleteToggle(image.id)}>Undo</button>
                    </div>
                ) : (
                    <div>
                        <img src={image.src} alt={`image-${image.id}`} width='100' />
                        <button onClick={()=> handleDeleteToggle(image.id)}>Delete</button>
                    </div>
                )}
            </div>
        ))}
      </div>
       {/*Display deleted images*/}
       <div>
        <h2>Deleted Images</h2>
        {deletedImages.length === 0 ? (
            <p>No deleted images</p>
        ) : (
            deletedImages.map((image)=> (
                <div key={image.id}>
                 <p>{`Image ${image.id} deleted`}</p>
                </div>
            ))
        )}
       </div>
    </div>
  );
};

export default ImageGallery
