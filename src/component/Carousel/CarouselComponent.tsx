import { Carousel } from '@mantine/carousel';
import { Box, Image, Loader } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useGetAllImagesQuery } from '../../store/api/imageApi';




export function CarouselDemo() {
    const { data, isLoading } = useGetAllImagesQuery();
    // console.log(`imagedata`, data,);


    const autoplay = useRef(Autoplay({ delay: 3000 }));
    const allImageUrls = data?.images?.flatMap((img) => img.imageUrl) ?? [];



    return (
        <Carousel withIndicators height='auto' plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={() => autoplay.current.play()}>
            {
                allImageUrls.map((url, idx) => (
                    <Carousel.Slide key={idx}>
                        <Box h="100%" w="100%">
                            <Image src={url} fit="cover" height="100%" width="100%" />
                        </Box>
                    </Carousel.Slide>

                ))
            }
            {/* {slides} */}
        </Carousel >
    );
}