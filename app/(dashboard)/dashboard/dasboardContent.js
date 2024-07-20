import { LayoutDashboard, Database, Tags, Users, FileSpreadsheet, LineChart } from "lucide-react";

export const sidebarLinks = [
    {
        label: 'Dashboard',
        route: '/',
        icon: LayoutDashboard,
    },
    {
        label: 'Synthetic Dataset',
        route: '/upcoming',
        icon: Database,
    },
    {
        label: 'Data Labelling',
        route: '/previous',
        icon: Tags,
    },
    {
        label: 'CrowdSource',
        route: '/recordings',
        icon: Users,
    },
    {
        label: 'Data Cleaning',
        route: '/personal-room',
        icon: FileSpreadsheet,
    },
    {
        label: 'Model Evaluation',
        route: '/personal-room',
        icon: LineChart,
    },
];