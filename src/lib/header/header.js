// import { faChevronLeft, faCircleNotch, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './header.css';

function Header({ image, imageSrc, imageSize, imageType,
    icon, iconSize, iconColor,
    text, textColor, textSize, textPadding,
    subText, subTextPadding,
    alignment }) {

    let textStyles = {
        color: textColor || 'black',
        fontSize: textSize || '1rem',
        paddingTop: alignment !== 'vertical' ? 0 : textPadding || 0,
        paddingBottom: alignment !== 'vertical' ? 0 : textPadding || 0,
        paddingLeft: alignment !== 'vertical' ? textPadding || 0 : 0,
        paddingRight: alignment !== 'vertical' ? textPadding || 0 : 0,

    };



    let subTextStyles = {
        color: textColor || 'grey',
        fontSize: '0.8rem',
        paddingTop: alignment !== 'vertical' ? 0 : subTextPadding || 0,
        paddingBottom: alignment !== 'vertical' ? 0 : subTextPadding || 0,
        paddingLeft: alignment !== 'vertical' ? subTextPadding || 0 : 0,
        paddingRight: alignment !== 'vertical' ? subTextPadding || 0 : 0,
    }


    let imageStyles = {
        width: imageSize || '',
        borderRadius: imageType === 'circle' ? '50%' : 0,
    }

    return (
        <div className={`Header ${alignment || ''}`} >

            {image ? <div className="image">
                <img src={imageSrc} alt='' style={imageStyles} />
            </div> : <div className="icon">
                    <FontAwesomeIcon size={iconSize || ''} icon={icon} color={iconColor || 'black'} />
                </div>}

            <div className="text" style={textStyles} >
                {text}
                {subText ? <div className="subText" style={subTextStyles} >
                    {subText}
                </div> : null}
            </div>


        </div>
    );
}

export default Header;