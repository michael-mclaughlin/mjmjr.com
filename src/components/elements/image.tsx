import React from 'react';
import styled from 'styled-components';

interface ImageProps {
    src: string | undefined;
    alt: string;
    width?: string;
}

export const Image: React.FC<ImageProps> = (props: ImageProps) => {
    const { src, alt, width } = props;
    return <ImageContainer src={src} alt={alt} style={{ width: `${width}` }} />;
};

const ImageContainer = styled.img``;
