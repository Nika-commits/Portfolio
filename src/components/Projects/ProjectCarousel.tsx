import Autoplay from "embla-carousel-autoplay";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export function ProjectCarousel({ images }: { images: string[] }) {
    const containerRef = useRef<HTMLDivElement>(null);

    const autoplay = useRef(
        Autoplay({
            delay: 1000,
            playOnInit: false,
        }),
    );

    const isInCenter = useInView(containerRef, {
        margin: "-30% 0px -30% 0px",
    });

    useEffect(() => {
        if (isInCenter) {
            autoplay.current?.play();
        } else {
            autoplay.current?.stop();
        }
    }, [isInCenter]);

    return (
        <div ref={containerRef} className="w-full">
            <Carousel
                className="relative w-full"
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[autoplay.current]}
            >
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={image}>
                            <div className="aspect-video overflow-hidden rounded-lg">
                                <img
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    className="h-full w-full rounded-lg object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="-left-4 z-99" />
                <CarouselNext className="-right-4 z-99" />
            </Carousel>
        </div>
    );
}
