import { GraduationCap, Mail, MapPinHouse } from "lucide-react";
import UnderlineWrapper from "./UnderlineWrapper";

export default function QuickLinks() {
	return (
		<div className="flex flex-col md:flex-row items-start justify-between gap-x-8 gap-y-3">
			<div className="flex items-center gap-2">
				<GraduationCap size={18} className="shrink-0 text-primary" />
				<span className="text-xs md:text-sm text-muted-foreground ">
					<UnderlineWrapper href="https://islington.edu.np/programmes/computing">
						BSc (Hons) in Computing
					</UnderlineWrapper>
				</span>
			</div>

			<div className="flex items-center gap-2">
				<MapPinHouse size={18} className="shrink-0 text-primary" />
				<span className="text-xs md:text-sm text-muted-foreground">
					<UnderlineWrapper href="https://www.google.com/search?q=Kathmandu">
						Kathmandu, Nepal 🇳🇵
					</UnderlineWrapper>
				</span>
			</div>

			<div className="flex items-center gap-2">
				<Mail size={18} className="shrink-0 text-primary" />
				<UnderlineWrapper href="mailto:pranishchaulagain06@gmail.com">
					pranishchaulagain06@gmail.com
				</UnderlineWrapper>
			</div>
		</div>
	);
}
