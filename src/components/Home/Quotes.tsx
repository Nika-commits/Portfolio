import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/card";
import { useState } from "react";

export default function Quotes() {
    const [random, setRandom] = useState(
        Math.floor(Math.random() * quotes.length),
    );

    const currentQuote = quotes[random];

    const getRandomQuote = () => {
        setRandom(Math.floor(Math.random() * quotes.length));
    };

    return (
        <Card className="w-full">
            <CardHeader>
                {/*<CardTitle className="text-xl">Quotes</CardTitle>*/}
            </CardHeader>

            <CardContent className="space-y-6">
                <blockquote className="relative border-l-2 pl-6">
                    <span className="absolute -left-3 -top-5 text-5xl font-serif text-muted-foreground">
                        “
                    </span>

                    <p className="text-xl leading-relaxed font-medium tracking-tight">
                        {currentQuote.quote}
                    </p>

                    <footer className="mt-4 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">
                            {currentQuote.author}
                        </span>
                        <span className="mx-2">·</span>
                        <span>{currentQuote.date}</span>
                    </footer>
                </blockquote>

                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {currentQuote.title}
                </p>
            </CardContent>

            <CardFooter>
                <Button variant="outline" onClick={getRandomQuote}>
                    New Quote
                </Button>
            </CardFooter>
        </Card>
    );
}

type Quotes = {
    title: string;
    quote: string;
    author: string;
    date: string;
};

const quotes: Quotes[] = [
    {
        title: "The First Step",
        quote: "The journey of a thousand miles begins with a single step.",
        author: "Laozi",
        date: "c. 4th century BC",
    },
    {
        title: "Know Thyself",
        quote: "Know thyself.",
        author: "Socrates",
        date: "5th century BC",
    },
    {
        title: "Excellence",
        quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        author: "Aristotle",
        date: "4th century BC",
    },
    {
        title: "The Mind",
        quote: "The mind is everything. What you think you become.",
        author: "Buddha",
        date: "5th century BC",
    },
    {
        title: "Begin",
        quote: "Well begun is half done.",
        author: "Aristotle",
        date: "4th century BC",
    },
    {
        title: "The Obstacle",
        quote: "The impediment to action advances action. What stands in the way becomes the way.",
        author: "Marcus Aurelius",
        date: "2nd century",
    },
    {
        title: "Control",
        quote: "You have power over your mind—not outside events. Realize this, and you will find strength.",
        author: "Marcus Aurelius",
        date: "2nd century",
    },
    {
        title: "Perspective",
        quote: "The happiness of your life depends upon the quality of your thoughts.",
        author: "Marcus Aurelius",
        date: "2nd century",
    },
    {
        title: "Waste No Time",
        quote: "You could leave life right now. Let that determine what you do and say and think.",
        author: "Marcus Aurelius",
        date: "2nd century",
    },
    {
        title: "The Present",
        quote: "Confine yourself to the present.",
        author: "Marcus Aurelius",
        date: "2nd century",
    },
    {
        title: "The Daily Work",
        quote: "Waste no more time arguing about what a good man should be. Be one.",
        author: "Marcus Aurelius",
        date: "2nd century",
    },
    {
        title: "Understanding",
        quote: "I cannot teach anybody anything. I can only make them think.",
        author: "Socrates",
        date: "5th century BC",
    },
    {
        title: "Learning",
        quote: "The only true wisdom is in knowing you know nothing.",
        author: "Socrates",
        date: "5th century BC",
    },
    {
        title: "Questioning",
        quote: "An unexamined life is not worth living.",
        author: "Socrates",
        date: "399 BC",
    },
    {
        title: "Knowledge",
        quote: "Knowledge itself is power.",
        author: "Francis Bacon",
        date: "1597",
    },
    {
        title: "Reading",
        quote: "Reading maketh a full man; conference a ready man; and writing an exact man.",
        author: "Francis Bacon",
        date: "1597",
    },
    {
        title: "Practice",
        quote: "I am no genius; I am merely inquisitive.",
        author: "Albert Einstein",
        date: "20th century",
    },
    {
        title: "Curiosity",
        quote: "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
        author: "Albert Einstein",
        date: "1955",
    },
    {
        title: "Mistakes",
        quote: "A person who never made a mistake never tried anything new.",
        author: "Albert Einstein",
        date: "20th century",
    },
    {
        title: "Imagination",
        quote: "Imagination is more important than knowledge.",
        author: "Albert Einstein",
        date: "1929",
    },
    {
        title: "Persistence",
        quote: "It's not that I'm so smart, it's just that I stay with problems longer.",
        author: "Albert Einstein",
        date: "20th century",
    },
    {
        title: "Simplicity",
        quote: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci",
        date: "15th–16th century",
    },
    {
        title: "Learning",
        quote: "Learning never exhausts the mind.",
        author: "Leonardo da Vinci",
        date: "15th–16th century",
    },
    {
        title: "Experience",
        quote: "Experience does not err. Only your judgments err by expecting from her what is not in her power.",
        author: "Leonardo da Vinci",
        date: "15th–16th century",
    },
    {
        title: "Action",
        quote: "Knowing is not enough; we must apply. Willing is not enough; we must do.",
        author: "Johann Wolfgang von Goethe",
        date: "19th century",
    },
    {
        title: "Courage",
        quote: "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.",
        author: "Johann Wolfgang von Goethe",
        date: "19th century",
    },
    {
        title: "Work",
        quote: "Without haste, but without rest.",
        author: "Johann Wolfgang von Goethe",
        date: "19th century",
    },
    {
        title: "Perseverance",
        quote: "Energy and persistence conquer all things.",
        author: "Benjamin Franklin",
        date: "1770",
    },
    {
        title: "Time",
        quote: "Lost time is never found again.",
        author: "Benjamin Franklin",
        date: "1746",
    },
    {
        title: "Learning from Failure",
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas Edison",
        date: "20th century",
    },
    {
        title: "Opportunity",
        quote: "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
        author: "Thomas Edison",
        date: "20th century",
    },
    {
        title: "Grit",
        quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
        author: "Confucius",
        date: "5th century BC",
    },
    {
        title: "Growth",
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
        date: "5th century BC",
    },
    {
        title: "Discipline",
        quote: "He who conquers others is strong; he who conquers himself is mighty.",
        author: "Laozi",
        date: "c. 4th century BC",
    },
    {
        title: "Knowing Others",
        quote: "Knowing others is intelligence; knowing yourself is true wisdom. Mastering others is strength; mastering yourself is true power.",
        author: "Laozi",
        date: "c. 4th century BC",
    },
    {
        title: "Adaptation",
        quote: "Life is really simple, but we insist on making it complicated.",
        author: "Confucius",
        date: "5th century BC",
    },
    {
        title: "Difficult Things",
        quote: "The difficult we do today; the impossible takes a little longer.",
        author: "Unknown",
        date: "20th century",
    },
    {
        title: "Action Over Talk",
        quote: "Well done is better than well said.",
        author: "Benjamin Franklin",
        date: "1737",
    },
    {
        title: "Future",
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker",
        date: "20th century",
    },
    {
        title: "Focus",
        quote: "The successful warrior is the average man, with laser-like focus.",
        author: "Bruce Lee",
        date: "20th century",
    },
    {
        title: "Absorb",
        quote: "Absorb what is useful, reject what is useless, add what is specifically your own.",
        author: "Bruce Lee",
        date: "20th century",
    },
    {
        title: "Adapt",
        quote: "Be like water making its way through cracks.",
        author: "Bruce Lee",
        date: "20th century",
    },
    {
        title: "Persistence",
        quote: "The successful man will profit from his mistakes and try again in a different way.",
        author: "Dale Carnegie",
        date: "20th century",
    },
    {
        title: "Courage",
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
        date: "20th century",
    },
    {
        title: "Never Give Up",
        quote: "Never, never, never give up.",
        author: "Winston Churchill",
        date: "1941",
    },
    {
        title: "Persevere",
        quote: "If you're going through hell, keep going.",
        author: "Winston Churchill",
        date: "20th century",
    },
    {
        title: "The Long Game",
        quote: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh",
        date: "1882",
    },
    {
        title: "Craft",
        quote: "Great things are not done by impulse, but by a series of small things brought together.",
        author: "Vincent van Gogh",
        date: "1882",
    },
    {
        title: "Knowledge and Action",
        quote: "Knowing and doing are two different things.",
        author: "Proverb",
        date: "Unknown",
    },
    {
        title: "The Work",
        quote: "Success is the sum of small efforts, repeated day in and day out.",
        author: "Robert Collier",
        date: "20th century",
    },
    {
        title: "Becoming",
        quote: "What you do every day matters more than what you do once in a while.",
        author: "Gretchen Rubin",
        date: "21st century",
    },
];
