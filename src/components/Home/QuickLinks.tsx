import { GraduationCap, Mail, MapPinHouse } from "lucide-react";

export default function QuickLinks() {
	return (
		<div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
			<div className="flex items-center gap-2">
				<GraduationCap size={18} className="shrink-0 text-primary" />
				<span className="text-xs md:text-sm text-muted-foreground">
					BSc (Hons) in Computing
				</span>
			</div>

			<div className="flex items-center gap-2">
				<MapPinHouse size={18} className="shrink-0 text-primary" />
				<span className="text-xs md:text-sm text-muted-foreground">
					Kathmandu, Nepal 🇳🇵
				</span>
			</div>

			<div className="flex items-center gap-2">
				<Mail size={18} className="shrink-0 text-primary" />
				<a
					href="mailto:pranishchaulagain06@gmail.com"
					className="text-xs md:text-sm text-muted-foreground transition-colors hover:text-primary"
				>
					pranishchaulagain06@gmail.com
				</a>
			</div>
		</div>
	);
}
