import { Github, Globe, Link } from "lucide-react";
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
	"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/UnAuthHomePage.webp",
	"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/CreateQuestionSet.webp",
	"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/leadeboard.webp",
];

export default function Quizex() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle className="flex justify-between items-center">
						<UnderlineLink to="/">
							<span className="flex gap-4 items-center">
								Quizex <Link size={14} />
							</span>
						</UnderlineLink>
					</CardTitle>
					<CardDescription></CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col space-y-4">
					<button onClick={() => setOpen(true)} type="button">
						<div className="flex justify-center gap-1">
							<img
								width={200}
								height={200}
								src="https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/UnAuthHomePage.webp"
								alt="Quizex"
							/>

							<img
								width={200}
								height={200}
								src="https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/CreateQuestionSet.webp"
								alt="Tap Whole Sale AI"
							/>
							<img
								width={200}
								height={200}
								src="https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/leadeboard.webp"
								alt="Tap Whole Sale AI"
							/>
						</div>
						<div>
							<p className="text-center">
								A modern full-stack quiz application built with React and
								TypeScript for the frontend and Node.js for the backend. This
								comprehensive platform allows users to create, manage, and
								attempt quizzes with real-time scoring and detailed analytics.
							</p>
						</div>
					</button>
				</CardContent>
				<CardFooter className="flex justify-end">
					<a href="https://github.com/Nika-commits/QuizX__FullStack-Quiz-App">
						<Button>
							<Github />
							GitHub
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
