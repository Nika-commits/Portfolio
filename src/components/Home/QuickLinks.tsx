import { GraduationCap, Mail, MapPinHouse } from "lucide-react";
import UnderlineWrapper from "./UnderlineWrapper";

export default function QuickLinks() {
	return (
		<div className="flex flex-col md:flex-row items-start justify-between gap-x-2 gap-y-4 px-2">
			<div className="flex items-center gap-2">
				<GraduationCap size={18} className="shrink-0 text-primary" />
				<UnderlineWrapper
					href="https://islington.edu.np/programmes/computing"
					className="text-xs md:text-sm font-medium"
				>
					BSc (Hons) Computing
				</UnderlineWrapper>
			</div>

			<div className="flex items-center gap-2">
				<MapPinHouse size={18} className="shrink-0 text-primary" />
				<UnderlineWrapper
					href="https://www.google.com/search?q=Kathmandu "
					className="text-xs md:text-sm font-medium"
				>
					Kathmandu, Nepal 🇳🇵
				</UnderlineWrapper>
			</div>

			<div className="flex items-center gap-2">
				<Mail size={18} className="shrink-0 text-primary" />
				<UnderlineWrapper
					href="mailto:itismepranish@gmail.com"
					className="text-xs md:text-sm font-medium"
				>
					itismepranish@gmail.com
				</UnderlineWrapper>
			</div>
		</div>
	);
}
