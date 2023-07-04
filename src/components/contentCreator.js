import React from 'react';

const ContentCreatorCard = ({ name, url, description, imageURL }) => {
  return (
    <div className="content-creator-card">
      {imageURL && <img src={imageURL} alt={name} className="content-creator-card__image" />}
      <h2 className="content-creator-card__name">{name}</h2>
      <p className="content-creator-card__description">{description}</p>
      <a href={url} className="content-creator-card__link">Visit Profile</a>
    </div>
  );
};

export default ContentCreatorCard;
