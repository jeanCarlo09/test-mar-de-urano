import React, { useEffect, useRef } from 'react';


export const ImageRef = ({ ...props }) => {
    // console.log(props);
    const ref = useRef(null);

    useEffect(() => {
        ref.current.complete &&
            console.log('Cargado');
        // props.onLoad();
    }, []);

    return (
        <img
            {...props}
            ref={ref}
        />
    );

}
