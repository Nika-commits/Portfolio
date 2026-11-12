import {
    type SimpleIcon,
    siBlazor,
    siDocker,
    siDotnet,
    siExpress,
    siFastapi,
    siGooglecloud,
    siJavascript,
    siJetpackcompose,
    siKotlin,
    siMongodb,
    siNextdotjs,
    siPostgresql,
    siReact,
    siSupabase,
    siTanstack,
    siTypescript,
    siVercel,
    siXml,
} from "simple-icons";

type TechStack = {
    name: string;
    icon: SimpleIcon;
};

export type ProjectContent = {
    name: string;
    description: string;
    images: string[];
    liveUrl: string | null;
    githubUrl: string | null;
    techStack: TechStack[];
};

export const Projects: ProjectContent[] = [
    {
        name: "Tap WholeSale AI",
        description: `
# Tap WholeSale AI

An AI-powered wholesale ecommerce platform built to help small and medium-sized clothing retailers digitize their wholesale purchases and manage their business more efficiently. The platform combines traditional ecommerce functionality with intelligent business tools that help store owners make data-driven decisions.

## Features

- Secure authentication and role-based access control (I used Supabase Auth for this).
- Product, catalogue, and inventory management.
- Shopping cart and checkout workflows (Esewa and Khalti Integrations).
- Order and customer management (Admin Side).
- Administrative analytics dashboard (Admin Side).
- AI-powered product recommendation engine (Uses IF-IDF and SVD algorithms).
- Sales demand forecasting using historical sales data (Uses LightGBM Model).

## Technical Highlights

The application was built using Next.js, FastAPI, Supabase, Docker, Google Cloud, and Vercel. The architecture separates frontend, backend, and AI services to maintain scalability and performance while supporting real-world ecommerce workflows.

## Outcome

This project demonstrates full-stack development, cloud deployment, containerization, machine learning integration, and the implementation of business intelligence features within a production-style ecommerce platform.`,
        images: [
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/tapwholesale.webp",
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/tapwholesale-prod.webp",
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/forecast.webp",
        ],
        liveUrl: "https://tapwholesalenepal.com",
        githubUrl: null,
        techStack: [
            { name: "Next.js", icon: siNextdotjs },
            { name: "Fast API", icon: siFastapi },
            { name: "Supabase", icon: siSupabase },
            { name: "Vercel", icon: siVercel },
            { name: "Google Cloud", icon: siGooglecloud },
            { name: "Docker", icon: siDocker },
        ],
    },

    {
        name: "Esewa Market",
        description: `
# eSewa Market

A full-stack mock e-commerce application developed during my Android Developer Internship at eSewa, based on a provided Figma design. The application provides a complete shopping experience, allowing users to browse products, manage their cart and favourites, search for products, and place orders through multiple payment methods.

## Features

- User authentication with email/password and Google OAuth using Firebase.
- Product catalogue with categories, featured products, and product recommendations.
- Product search with search history, autocomplete suggestions, and price filtering.
- Shopping cart and favourites with local persistence using Room Database.
- Paginated product listings using Android Paging 3.
- Checkout workflow with promo code support.
- Shipping address management with map-based location selection.
- Order placement, history, and status tracking.
- Multiple payment options including eSewa, Khalti, and Cash on Delivery.

## Technical Highlights

The Android application was developed using Kotlin, following MVVM and Repository architecture. It combines XML Views and Jetpack Compose for UI development, Retrofit for REST API communication, Room for local persistence, and Kotlin Coroutines and StateFlow for asynchronous operations and state management.

The supporting backend was developed using ASP.NET Core and PostgreSQL, providing REST APIs for product, user, address, and order management. Firebase Authentication handles user authentication, while eSewa and Khalti payment integrations include server-side transaction verification to validate payment status and amounts.

## Outcome

This project demonstrates end-to-end Android application development, full-stack integration, mobile application architecture, local data persistence, asynchronous programming, and third-party payment gateway integration. It also provided practical experience in building maintainable Android applications using modern development patterns and technologies.
        `,
        githubUrl: "https://github.com/Nika-commits/EsewaMarket",
        images: [
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/MarketHome.webp",
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/MarketCart.webp",
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/MarketFav.webp",
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/MarketMore.webp",
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/MarketSearch.webp",
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/MarketCheckout.webp",
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/MarketMap.webp",
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/MarketOrder.webp"
        ],
        liveUrl: null,
        techStack: [
            { name: "Kotlin", icon: siKotlin },
            { name: "XML Views", icon: siXml },
            { name: "Jetpack Compose", icon: siJetpackcompose },
            // { name: "Retrofit", icon: siRetrofit },
            { name: "ASP.NET", icon: siDotnet },
        ],
    },
    {
        name: "Nep Auto",
        description: `
# Nep Auto

A full-stack automotive vehicle and parts inventory management platform designed to simplify the buying and selling of vehicle parts through a centralized digital marketplace. The system provides customers with an intuitive shopping experience while offering business owners powerful inventory and sales management tools This was my college coursework project I did with my group.

- User authentication and account management (Uses Identity Framework).
- Automotive parts catalogue and search functionality.
- Inventory and product management dashboard.
- Sales tracking and reporting.
- Sales and Purchase Invoice generation. (Uses QuestPDF)

## Technical Highlights

Built using TanStack in Frontend, ASP.NET, PostgreSQL, and Docker, the application follows modern full-stack development practices with a focus on scalability, maintainability, and performance.

## Outcome

This project showcases enterprise application architecture, database design, API development, containerized deployment, and business management workflows commonly found in real-world ecommerce systems.`,
        images: [
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/home.webp",
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/partss.webp",
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/sales.webp",
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/dashboard.webp",
        ],
        liveUrl: null,
        githubUrl: "https://github.com/hacket41/NepAuto",
        techStack: [
            { name: "Tanstack", icon: siTanstack },
            { name: "ASP.NET", icon: siDotnet },
            { name: "PostgreSQL", icon: siPostgresql },
            { name: "Docker", icon: siDocker },
        ],
    },

    {
        name: "Quizex ",
        description: `
# Quizex

A quiz platform that allows admins (teachers) to create and manage quizzes, and allow users (students) to participate in these quizzes while tracking their performance through real-time scoring and analytics. The application was designed to provide an engaging and interactive learning experience. This was actually my first full-stack project which I made while learning MERN stack. Now that I look back on it, it looks amateurish where i have used useEffect for almost everything and used AI a lot but still this was a great learning experience for me.

- Quiz and question set creation. (Admin Side)
- User authentication and profile management. (User Side and Admin Side)
- Real-time quiz scoring.
- Leaderboards and rankings.
- Detailed performance analytics.
- Responsive user interface across devices.

## Technical Highlights

The frontend was developed using React and TypeScript, while the backend was built with Express.js and MongoDB. The project follows a client-server architecture with REST APIs for communication between services.

## Outcome

This project demonstrates full-stack web development, API integration, state management, authentication systems, and database modeling for educational applications.`,
        images: [
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/UnAuthHomePage.webp",
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/CreateQuestionSet.webp",
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/leadeboard.webp",
        ],
        liveUrl: null,
        githubUrl: "https://github.com/Nika-commits/QuizX__FullStack-Quiz-App",
        techStack: [
            { name: "React", icon: siReact },
            { name: "TypeScript", icon: siTypescript },
            { name: "Express.js", icon: siExpress },
            { name: "MongoDB", icon: siMongodb },
        ],
    },

    {
        name: "My Custom Home Page",
        description: `
# Custom Home Page

A customizable browser new-tab page created to provide a cleaner and more productive browsing experience. I made this simple project as default chrome new-tab page had very limited shortcuts and I wanted more flexibility. I also added some neat personal utilities for myself.

- Infinite customizable shortcuts.
- Drag-and-drop shortcut organization.
- Local storage persistence.
- Integrated search functionality. (Uses Google Search API)
- Responsive and minimal user interface.
- Shortcut creation, editing, and deletion.

## Technical Highlights

Built with React and JavaScript, the application focuses on smooth interactions, efficient state management, and a lightweight user experience. The project makes extensive use of browser APIs and local storage for data persistence.

## Outcome

This project highlights frontend development skills, user experience design, drag-and-drop functionality, and client-side data management techniques.`,
        images: [
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/custom-tab.webp",
        ],
        liveUrl: "https://nika-commits.github.io/custom-new-tab/",
        githubUrl: "https://github.com/Nika-commits/custom-new-tab",
        techStack: [
            { name: "React", icon: siReact },
            { name: "JavaScript", icon: siJavascript },
        ],
    },

    {
        name: "My Journal",
        description: `
# My Journal

A cross-platform journaling application built with .NET MAUI Blazor Hybrid that allows users to create, organize, and manage personal journal entries across multiple devices through a single shared codebase. This was another college coursework project. Blazor is quite a niche technology but I had fun using it.

- Rich journal writing experience.
- Calendar-based navigation.
- Journal organization and history tracking.
- Search and filtering capabilities.
- User settings and customization options.
- Cross-platform desktop and mobile support.

## Technical Highlights

The application leverages .NET MAUI and Blazor Hybrid to combine native platform capabilities with modern web technologies. The architecture emphasizes code reuse, maintainability, and a consistent user experience across platforms.

## Outcome

This project demonstrates hybrid application development, cross-platform architecture, local data management, and modern .NET development practices.
`,
        images: [
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/journal-write.webp",
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/journal-list.webp",
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/calendar.webp",
            "https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/settings.webp",
        ],
        liveUrl: null,
        githubUrl: "https://github.com/Nika-commits/MyJournal",
        techStack: [
            { name: "Blazor", icon: siBlazor },
            { name: ".NET MAUI", icon: siDotnet },
        ],
    },
];
