import { Globe, Link } from "lucide-react";
import { UnderlineLink } from "../Global/UnderlineLink";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";

const images = [
	"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/home.webp",
	"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/partss.webp",
	"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/sales.webp",
	"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/dashboard.webp",
];

export default function NepAuto() {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex justify-between items-center">
					<UnderlineLink to="/">
						<span className="flex gap-4 items-center">
							Nep Auto <Link size={14} />
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
					Tap Whole Sale AI is an AI-powered platform that
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col space-y-4">
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

				{/*<div className="flex justify-center">
					<UnderlineWrapper>
						<Link to="/">Learn More</Link>
					</UnderlineWrapper>
				</div>*/}
			</CardContent>
			{/*<CardFooter></CardFooter>*/}
		</Card>
	);
}
