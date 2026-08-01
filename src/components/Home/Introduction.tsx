import UnderlineWrapper from "./UnderlineWrapper";

export default function Introduction() {
    return (
        <article className="flex flex-col items-start justify-start gap-4 ">
            <h1 className="text-sm md:text-sm font-extrabold">Hi, 👋🏽</h1>

            <p className="text-sm text-justify md:text-sm leading-relaxed text-muted-foreground font-medium tracking-wide">
                I am a frontend-focused
                <UnderlineWrapper className="text-foreground font-medium text-sm md:text-sm leading-relaxed">
                    {" "}Full-stack Engineer{" "}
                </UnderlineWrapper>
                and an
                <UnderlineWrapper className="text-foreground font-medium text-sm md:text-sm leading-relaxed">
                    {" "}Android developer
                </UnderlineWrapper>.
                I currently work
                as a Frontend Developer at{" "}
                <UnderlineWrapper
                    href="https://restobrain.ai/"
                    className="text-foreground font-medium text-sm md:text-sm leading-relaxed"
                >
                    Restobrain AI
                </UnderlineWrapper>
                , where I primarily work on admin and client dashboards using TanStack Start
                and TypeScript. I am also currently interning at{" "}
                <UnderlineWrapper
                    href="https://esewa.com.np/"
                    className="text-foreground font-medium text-sm md:text-sm leading-relaxed"
                >
                    eSewa {" "}
                </UnderlineWrapper>
                as an Android Developer, learning to develop native Android applications with
                <UnderlineWrapper className="text-foreground font-medium text-xs md:text-sm leading-relaxed">
                    {" Kotlin"}
                </UnderlineWrapper>, <UnderlineWrapper className="text-foreground font-medium text-xs md:text-sm leading-relaxed">
                    {" Java"}
                </UnderlineWrapper>, <UnderlineWrapper className="text-foreground font-medium text-xs md:text-sm leading-relaxed">
                    {" Jetpack Compose"}
                </UnderlineWrapper>, and <UnderlineWrapper className="text-foreground font-medium text-xs md:text-sm leading-relaxed">
                    {" XML Views"}
                </UnderlineWrapper>.
            </p>

            <p className="text-sm text-justify md:text-sm leading-relaxed text-muted-foreground font-medium tracking-wide">
                My primary stack is
                <UnderlineWrapper className="text-foreground font-medium text-xs md:text-sm leading-relaxed">
                    {" TypeScript "}
                </UnderlineWrapper>
                and recently
                <UnderlineWrapper className="text-foreground font-medium text-xs md:text-sm leading-relaxed">
                    {" Kotlin"}
                </UnderlineWrapper>.
                I have also worked with
                <UnderlineWrapper className="text-foreground font-medium text-xs md:text-sm leading-relaxed">
                    {" Node.js"}
                </UnderlineWrapper>,
                <UnderlineWrapper className="text-foreground font-medium text-xs md:text-sm leading-relaxed">
                    {" FastAPI"}
                </UnderlineWrapper>,
                <UnderlineWrapper className="text-foreground font-medium text-xs md:text-sm leading-relaxed">
                    {" ASP.NET"}
                </UnderlineWrapper> and
                <UnderlineWrapper className="text-foreground font-medium text-xs md:text-sm leading-relaxed">
                    {" Supabase "}
                </UnderlineWrapper>on the backend. Outside of work, I am exploring system
                design,
                <UnderlineWrapper className="text-foreground font-medium text-xs md:text-sm leading-relaxed">
                    {" Go"}
                </UnderlineWrapper>, and backend architectures.
                {/*I am always open to
                challenging software engineering opportunities where I can continue
                learning and building good softwares.*/}
            </p>
        </article>
    );
}
