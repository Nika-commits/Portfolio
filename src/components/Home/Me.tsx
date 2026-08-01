import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../ui/carousel";

const myImages = [
    "https://img.vsco.co/cdn-cgi/image/width=960,height=720/90d792/274469124/691b557ddce0a533bb4c34d6/f9c5da89-9824-4a07-b97a-5891951933ac5910148862502348387.jpg",
    "/Icons/me.webp",
    "https://img.vsco.co/90d792/274469124/66ebd5fd2905784f82000003/488990bb-4a44-4a7c-977c-d6e56ca9a1364123555580034908993.jpg",
    "https://img.vsco.co/cdn-cgi/image/width=1136,height=1515/90d792/274469124/67074e2d2905786e71000004/a07b310b-0861-4dc4-bcbe-492fe887d9818171188111927354762.jpg",
    "https://img.vsco.co/90d792/274469124/691b574587d8af151122e166/c19d85c0-b4b2-47c8-8d9b-6f55e6c404b11812276535008576607.jpg",
    "https://img.vsco.co/cdn-cgi/image/width=1136,height=1515/90d792/274469124/6724435b29057854b9000007/bf22c20a-f1b5-440f-88ab-63a0303031403927531093230102197.jpg"
]

export default function Me() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)


    useEffect(() => {
        if (!api) return

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap())
        }
        onSelect()
        api.on("select", onSelect)
        return () => {
            api.off("select", onSelect)
        }
    }, [api])
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <Carousel
                setApi={setApi}
                plugins={[
                    Autoplay({
                        delay: 2000,
                        playOnInit: true,
                    })
                ]}
                className="w-38 h-38 md:w-48 md:h-48"
            >
                <CarouselContent>
                    {myImages.map((src, index) => (
                        <CarouselItem
                            key={index}
                        >
                            <img src={src} alt="" className="w-38 h-38 md:w-48 md:h-48 rounded-2xl object-cover" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className="flex items-center gap-1.5">
                {myImages.map((_, index) => (
                    <span
                        key={index}
                        className={`size-1 rounded-full transition-colors ${current === index
                            ? "bg-foreground"
                            : "bg-muted-foreground/30"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
