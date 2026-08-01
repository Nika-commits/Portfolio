import { CalendarClock, GraduationCap, Mail, MapPinHouse } from "lucide-react";
import UnderlineWrapper from "./UnderlineWrapper";

export default function QuickLinks() {
    return (
        <div className="flex flex-col md:flex-col items-start justify-between gap-x-6 gap-y-4">

            <div className="flex items-center gap-2">
                <CalendarClock size={14} className="shrink-0 text-primary" />
                <UnderlineWrapper
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    className="text-xs md:text-xs font-medium"
                >
                    20 yrs
                </UnderlineWrapper>
            </div>

            <div className="flex items-center gap-2">
                <GraduationCap size={14} className="shrink-0 text-primary" />
                <UnderlineWrapper
                    href="https://islington.edu.np/programmes/computing"
                    className="text-xs md:text-xs font-medium"
                >
                    BSc (Hons) Computing
                </UnderlineWrapper>
            </div>

            <div className="flex items-center gap-2">
                <MapPinHouse size={14} className="shrink-0 text-primary" />
                <UnderlineWrapper
                    href="https://www.google.com/search?q=Kathmandu "
                    className="text-xs md:text-xs font-medium"
                >
                    Kathmandu, Nepal 🇳🇵
                </UnderlineWrapper>
            </div>

            <div className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-primary" />
                <UnderlineWrapper
                    href="mailto:itismepranish@gmail.com"
                    className="text-xs md:text-xs font-medium"
                >
                    itismepranish@gmail.com
                </UnderlineWrapper>
            </div>
        </div>
    );
}
