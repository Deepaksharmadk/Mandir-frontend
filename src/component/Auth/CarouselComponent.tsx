import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

const images = [
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
];

export function CarouselDemo() {
    const autoplay = useRef(Autoplay({ delay: 12000 }));

    const slides = images.map((url) => (
        <Carousel.Slide key={url}
        >
            <Image src={url} />
        </Carousel.Slide>
    ));

    return (
        <Carousel withIndicators height={300} plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={() => autoplay.current.play()}>
            {slides}
        </Carousel>
    );
}