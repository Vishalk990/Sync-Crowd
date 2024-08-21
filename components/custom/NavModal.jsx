import React from "react";

import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const blogs = [
    { title: "What Is Synthetic Data?", href: "https://blogs.nvidia.com/blog/what-is-synthetic-data/", description: "Synthetic data generated from computer simulations or algorithms provides an inexpensive alternative to real-world data that’s increasingly used to create accurate AI models." },
    { title: "Data Access + Data Insights for Everyone", href: "https://mostly.ai/blog/data-access-data-insights-for-everyone", description: "Data democratization is the process of making data more accessible to a wider range of people within an organization (and).. empowering people to make informed decisions and take action based on data insights." },
    { title: "Synthetic Data for Better Machine Learning", href: "https://www.databricks.com/blog/2023/04/12/synthetic-data-better-machine-learning.html", description: "Leverage AI to generate synthetic data for better models, or safer data sharing with data teams" },
];

const videos = [
    { title: "What is Synthetic Data? No, It's Not FAKE Data", href: "https://www.youtube.com/watch?v=HIusawrGBN4", description: "Synthetic data is artificially generated data versus data based on actual events, but it's not fake data. It replicates the properties of real data without the troubles of capturing it, such as confidentiality, low-volume, or expensive-to-validate. With synthetic data, it's easier and less costly to train AI models, however, it's not a panacea. For example, synthetic data may not fully represent the unexpected events that happen in the real world. In this video, Martin Keen explains what synthetic data is, its uses, benefits, and challenges; he wraps up his presentation by explain how it's generated." },
    { title: "5 ways to generate synthetic data", href: "https://www.youtube.com/watch?v=wJuCnYkrYLA&t=618s", description: "5 ways to generate synthetic data Synthetic data generation machine learning Synthetic data generation Synthetic data explained Synthetic data in healthcare Synthetic data ai Synthetic data unity Synthetic data pipeline" },
    { title: "How to Make Synthetic Data", href: "https://www.youtube.com/watch?v=-vUoRZgWKUw&t=235s", description: "Description for Video 3" },
];


const components = [
    
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
];

export function NavModal() {
    return (
        <NavigationMenu className="max-sm:hidden">
            <NavigationMenuList className="space-x-5">
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-gradient rounded-full">Platform</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        {/* <Icons.logo className="h-6 w-6" /> */}
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            shadcn/ui
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed components built with Radix UI and
                                            Tailwind CSS.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/docs" title="Introduction">
                                Re-usable components built using Radix UI and Tailwind CSS.
                            </ListItem>
                            <ListItem href="/docs/installation" title="Installation">
                                How to install dependencies and structure your app.
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Typography">
                                Styles for headings, paragraphs, lists...etc
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-gradient rounded-full">Use Cases</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
    <NavigationMenuTrigger className="bg-gradient rounded-full">Resources</NavigationMenuTrigger>
    <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            <li>
                <h3 className="font-semibold text-lg">Blogs</h3>
                <ul className="ml-4 mt-2 space-y-2">
                    {blogs.map((blog) => (
                        <ListItem key={blog.title} title={blog.title} href={blog.href}>
                            {blog.description}
                        </ListItem>
                    ))}
                </ul>
            </li>
            <li>
                <h3 className="font-semibold text-lg">Videos</h3>
                <ul className="ml-4 mt-2 space-y-2">
                    {videos.map((video) => (
                        <ListItem key={video.title} title={video.title} href={video.href}>
                            {video.description}
                        </ListItem>
                    ))}
                </ul>
            </li>
        </ul>
    </NavigationMenuContent>
</NavigationMenuItem>


                <NavigationMenuItem>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(),"bg-gradient rounded-full hover:bg-black hover:text-white")} href="/pricing">
                        Pricing
                    </NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
