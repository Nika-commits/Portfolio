import UnderlineWrapper from "./UnderlineWrapper";

export default function Introduction() {
    const textStyleBase = "text-xs md:text-xs lg:text-sm text-left text-muted-foreground font-medium leading-relaxed" as const;
    const textSizeHighlight = `${textStyleBase} text-foreground` as const;
    return (
        <article className="flex flex-col items-start justify-start gap-4 ">
            <h1 className="text-sm font-extrabold">Hi, 👋🏽</h1>

            <p className={textStyleBase}>
                I am a frontend-focused
                <UnderlineWrapper className={textSizeHighlight}>
                    {" "}Full-stack Engineer{" "}
                </UnderlineWrapper>
                and an
                <UnderlineWrapper className={textSizeHighlight}>
                    {" Android developer"}
                </UnderlineWrapper>.
                {" I currently work as a "}
                <UnderlineWrapper className={textSizeHighlight}>
                    Frontend Developer
                </UnderlineWrapper>
                {" for "}
                <UnderlineWrapper
                    href="https://restobrain.ai/"
                    className={textSizeHighlight}
                >
                    Restobrain AI
                </UnderlineWrapper>
                , where I primarily work on admin and client dashboards using TanStack Start
                and TypeScript. I also have an internship experience as an Android Developer at
                <UnderlineWrapper
                    href="https://esewa.com.np/"
                    className={textSizeHighlight}
                >
                    {" eSewa "}
                </UnderlineWrapper>
                , where I learned to develop native Android applications with
                {/*<UnderlineWrapper className={textSizeHighlight}>*/}
                {" Kotlin,"}
                {/*</UnderlineWrapper>, <UnderlineWrapper className={textSizeHighlight}>*/}
                {" Jetpack Compose"}
                {/*</UnderlineWrapper>, and <UnderlineWrapper className={textSizeHighlight}>*/}
                {" and XML Views"}
                {/*</UnderlineWrapper>.*/}
            </p>

            <p className={textStyleBase}>
                My primary stack is
                <UnderlineWrapper className={textSizeHighlight}>
                    {" TypeScript "}
                </UnderlineWrapper>
                and recently
                <UnderlineWrapper className={textSizeHighlight}>
                    {" Kotlin"}
                </UnderlineWrapper>.
                I have also worked with
                <UnderlineWrapper className={textSizeHighlight}>
                    {" Node.js"}
                </UnderlineWrapper>,
                <UnderlineWrapper className={textSizeHighlight}>
                    {" FastAPI"}
                </UnderlineWrapper>,
                <UnderlineWrapper className={textSizeHighlight}>
                    {" ASP.NET"}
                </UnderlineWrapper> and
                <UnderlineWrapper className={textSizeHighlight}>
                    {" Supabase "}
                </UnderlineWrapper>on the backend. Outside of work, I am exploring system
                design,
                <UnderlineWrapper className={textSizeHighlight}>
                    {" Go"}
                </UnderlineWrapper>, and backend architectures.
            </p>
        </article>
    );
}
