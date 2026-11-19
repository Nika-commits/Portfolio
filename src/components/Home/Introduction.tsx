import UnderlineWrapper from "./UnderlineWrapper";

const textStyle =
    "text-xs md:text-xs lg:text-sm text-left text-muted-foreground font-medium leading-relaxed";
const textSizeHighlight = `${textStyle} text-foreground` as const;

export default function Introduction() {
    return (
        <article className="flex flex-col items-start justify-start gap-4">
            <h1 className="text-sm font-extrabold">
                Hi, 👋🏽
            </h1>

            <p className={textStyle}>
                I am a frontend-focused{" "}
                <Highlight>Full-stack Engineer</Highlight>
                {" and an "}
                <Highlight>
                    Android developer.
                </Highlight>
                {" I currently work as a "}
                <Highlight>Frontend Developer</Highlight>
                {" at "}
                <Highlight href="https://restobrain.ai/">
                    RestoBrain AI
                </Highlight>
                , primarily building admin and client dashboards using
                TypeScript and TanStack libraries.

                I also have internship experience as an Android Developer
                at{" "}
                <Highlight href="https://esewa.com.np/">
                    eSewa
                </Highlight>
                , where I worked with Kotlin, Jetpack Compose, and XML Views.
            </p>

            <p className={textStyle}>
                My primary technologies are TypeScript and Kotlin.
                I have also worked with Node.js, FastAPI, ASP.NET, and
                Supabase on the backend.

                Outside of work, I am exploring system design,
                Go, and backend architectures.
            </p>
        </article>
    );
}

interface HighlightProps {
    children: React.ReactNode;
    href?: string;
}

function Highlight({ children, href }: HighlightProps) {
    return (
        <UnderlineWrapper
            href={href}
            className={textSizeHighlight}
        >
            {children}
        </UnderlineWrapper>
    );
}
