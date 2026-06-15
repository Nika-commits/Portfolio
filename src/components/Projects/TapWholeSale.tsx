import { Globe, Link } from "lucide-react";
import { useState } from "react";
import { UnderlineLink } from "../Global/UnderlineLink";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel";
import { Dialog, DialogClose, DialogContent, DialogFooter } from "../ui/dialog";

const imageLinks = [
	"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/tapwholesale.webp",
	"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/tapwholesale-prod.webp",
	"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/forecast.webp",
];

export default function TapWholeSale() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle className="flex justify-between items-center">
						<UnderlineLink to="/">
							<span className="flex gap-4 items-center">
								Tap WholeSale AI
								<Link size={14} />
							</span>
						</UnderlineLink>
					</CardTitle>
					<CardDescription>
						Tap Whole Sale AI is an AI-powered platform that that I created as
						my Final Year Project.
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col space-y-4">
					<button type="button" onClick={() => setOpen(true)}>
						<div className="flex justify-center gap-1">
							<img
								width={200}
								height={200}
								src="https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/tapwholesale.webp"
								alt="Tap Whole Sale AI"
							/>

							<img
								width={200}
								height={200}
								src="https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/tapwholesale-prod.webp"
								alt="Tap Whole Sale AI"
							/>
						</div>
					</button>

					<div>
						<p className="text-justify">
							This is a web-based wholesale ecommerce platform with essential
							ecommerce features like User authentication, Products and
							Catalogues, Shopping and checkout, Payments Integration, Admin
							Management with AI powered features like Sales Demand Forecasting
							and a complete Recommendation Engine which are based on real-world
							data. This project is designed to provide digital wholesale
							platform for small to medium business owners running a clothing
							outlet.
						</p>
					</div>
				</CardContent>
				<CardFooter className="flex justify-end">
					<a
						href="https://tapwholesalenepal.com"
						target="_blank"
						rel="noopener"
					>
						<Button>
							<Globe />
							Live
						</Button>
					</a>
				</CardFooter>
			</Card>

			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent className="max-w-2xl! ">
					<Carousel>
						<CarouselContent>
							{imageLinks.map((image, index) => {
								return (
									<CarouselItem key={image}>
										<div className="p-1">
											<img
												src={image}
												alt={`Slide ${index + 1}`}
												className="w-full h-full object-cover"
											/>
										</div>
									</CarouselItem>
								);
							})}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
					<DialogFooter>
						<DialogClose asChild>
							<Button variant="outline">Close</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
}
