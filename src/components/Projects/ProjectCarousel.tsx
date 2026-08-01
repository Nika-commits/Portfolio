import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export function ProjectCarousel({ images }: { images: string[] }) {
    // const containerRef = useRef<HTMLDivElement>(null);
    // const [api, setApi] = useState<CarouselApi>()

    // const autoplay = useRef(
    //     Autoplay({
    //         delay: 1500,
    //     }),
    // );

    // const isInCenter = useInView(containerRef, {
    //     margin: "-20% 0px -30% 0px",
    // });

    // useEffect(() => {
    //     if (!api) return;
    //     const autoplayPlugin = api.plugins().autoplay
    //     if (!autoplayPlugin) return;
    //     if (isInCenter) {
    //         autoplay?.current?.play();
    //     } else {
    //         autoplay?.current?.stop();
    //     }
    // }, [isInCenter, api]);

    return (
        <div className="w-full">
            <Carousel
                className="relative w-full"
                // setApi={setApi}
                opts={{
                    align: "start",
                    loop: true,
                }}
                // plugins={[autoplay.current]}
                plugins={[
                    Autoplay({
                        delay: 1500,
                        playOnInit: true,
                    }),
                ]}
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

                <CarouselPrevious variant={"secondary"} className="-left-4 z-99" />
                <CarouselNext variant={"secondary"} className="-right-4 z-99" />
            </Carousel>
        </div>
    );
}
