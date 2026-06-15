import { Globe, Link } from "lucide-react";
import { useState } from "react";
import { UnderlineLink } from "../Global/UnderlineLink";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Dialog, DialogClose, DialogContent, DialogFooter } from "../ui/dialog";

const link =
	"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/custom-tab.webp";

export default function CustomHomepage() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Card className="project-card">
				<CardHeader>
					<CardTitle className="flex justify-between items-center">
						<UnderlineLink to="/">
							<span className="flex gap-4 items-center">
								Custom New Tab <Link size={14} />
							</span>
						</UnderlineLink>
						<div>
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
						</div>
					</CardTitle>
					<CardDescription>
						A simple custom new tab page extension that displays a search bar,
						drag and droppable infinite shortcuts and other personal utilities.
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col space-y-4">
					<button type="button" onClick={() => setOpen(true)}>
						<div className="flex justify-center gap-1">
							<img
								width={600}
								height={600}
								src={link}
								alt="Tap Whole Sale AI"
							/>
						</div>
					</button>

					<p>
						I basically built this as I wanted more shortcuts in my new tab page
						and chrome only provides a limited number of shortcuts. Other than
						that, I think this just looks better haha.
					</p>
				</CardContent>
			</Card>

			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent className="max-w-2xl! ">
					<img src={link} alt="Tap Whole Sale AI" />
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
