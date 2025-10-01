import { Award, BarChart3, Brain, Briefcase, Code, Cpu, Database, Download, Github, GraduationCap, Instagram, LineChart, Linkedin, Mail, MapPin, TrendingUp, Twitter, Users } from "lucide-react";

const basicInfo = {
    name: "Kritika Bhachawat",
    title: "Data Analytics & Business Intelligence Professional",
    subtitle: "Transforming Data into Actionable Insights",
}

const socialMedia = [
    {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/kritika-bhachawat-jain-4740ba194/",
        icon: Linkedin,
    },
    {
        platform: "GitHub",
        url: "https://github.com/kritikab01",
        icon: Github,
    },
    {
        platform: "Resume",
        url: "/Kritika_Bhachawat_Resume.pdf",
        icon: Download,
    },
    {
        platform: "Email",
        url: "mailto:kritikabhachawat@gmail.com",
        icon: Mail,
    },
    {
        platform: "Twitter",
        url: "",
        icon: Twitter,
    },
    {
        platform: "Instagram",
        url: "https://www.instagram.com/wireless4ger",
        icon: Instagram,
    }
]

const education = [
    {
        degree: "PGDM (Business Data Analytics)",
        institution: "FORE School of Management",
        year: "2025 - 2027",
        result: "Pursuing",
    },
    {
        degree: "B.E. (Computer Science Engineering)",
        institution: "M.B.M. University",
        year: "2020 - 2024",
        result: "88.00%",
    },
];

const experience = [
    {
        role: "Marketing Intern",
        company: "SUPYAR®",
        duration: "July 2025 - August 2025",
        description: "Conducted market research covering 500+ customers and designed marketing plans that lifted brand recall by 35% among urban youth.",
    },
    {
        role: "Power BI Intern",
        company: "Celebal Technologies",
        duration: "June 2023 - August 2023",
        description: "Analyzed 100,000+ sales records, created dashboards achieving 25% improvement in data accessibility and 10% increase in sales insights.",
    },
    {
        role: "Embedded Systems & Robotics Trainee",
        company: "M.B.M. University",
        duration: "June 2022 - July 2022",
        description: "Built TIC-TAC-TOE robotic arm with Arduino and ESP32, enhancing IoT and embedded systems expertise.",
    },
];


const about = {
    description: `I'm a passionate data analytics professional with expertise in transforming complex datasets into actionable business insights. With a strong foundation in Power BI, DAX, and data visualization, I've successfully delivered impactful KPI dashboards and analytical solutions that drive data-driven decision-making. 

    Beyond analytics, I bring hands-on experience in IoT automation, embedded systems, and innovative project development. My leadership roles in finance coordination and campus engagement have honed my abilities in team collaboration, strategic planning, and problem-solving.`,
    highlights: [
        {
            icon: GraduationCap,
            title: "Education",
            description: "PGDM in Business Data Analytics from FORE School of Management",
        },
        {
            icon: Briefcase,
            title: "Experience",
            description: "Power BI Development, Data Analytics & Marketing Strategy",
        },
        {
            icon: Award,
            title: "Certifications",
            description: "Google Data Analytics, Power BI, SQL & Python",
        }
    ],
}


const projects = [
    {
        icon: TrendingUp,
        title: "SUPYAR® Marketing Strategy",
        description: "Conducted comprehensive market research covering 500+ customers and executed a test-run marketing plan that increased brand recall by 35% among urban youth within 4 weeks.",
        tags: ["Market Research", "GTM Strategy", "Brand Management"],
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: BarChart3,
        title: "Sales Analytics Dashboard",
        description: "Analyzed 100,000+ sales records using Power BI and DAX to create interactive dashboards, achieving 25% improvement in data accessibility and 10% increase in sales insights.",
        tags: ["Power BI", "DAX", "Data Visualization"],
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: Cpu,
        title: "TIC-TAC-TOE Robotic Arm",
        description: "Built an intelligent robotic arm using Arduino and ESP32 with wireless capabilities, demonstrating expertise in IoT, embedded systems, and automation technologies.",
        tags: ["Arduino", "ESP32", "IoT", "Robotics"],
        color: "from-orange-500 to-red-500",
    },
    {
        icon: BarChart3,
        title: "Tech Fest Financial Management",
        description: "Managed financial operations for a 3-day tech fest with ₹1,20,000 budget and 600+ students, optimizing planning through Power BI dashboards and ensuring complete transparency.",
        tags: ["Financial Planning", "Power BI", "Event Management"],
        color: "from-green-500 to-emerald-500",
    },
];


const skillCategories = [
    {
        icon: LineChart,
        title: "Data Analytics",
        skills: ["Power BI", "DAX", "Data Visualization", "KPI Dashboards", "Business Intelligence"],
        level: 95,
        color: "bg-blue-500",
    },
    {
        icon: Database,
        title: "Data Management",
        skills: ["SQL", "Data Modeling", "ETL Processes", "Database Design", "Data Quality"],
        level: 85,
        color: "bg-purple-500",
    },
    {
        icon: Code,
        title: "Programming",
        skills: ["Python", "MATLAB", "Arduino", "MIT App Inventor", "C++"],
        level: 80,
        color: "bg-green-500",
    },
    {
        icon: Cpu,
        title: "IoT & Embedded",
        skills: ["Arduino", "ESP32", "Diptrace", "Embedded Systems", "Wireless Communication"],
        level: 75,
        color: "bg-orange-500",
    },
    {
        icon: Brain,
        title: "Analytical Skills",
        skills: ["Market Research", "Statistical Analysis", "Problem Solving", "Critical Thinking"],
        level: 90,
        color: "bg-pink-500",
    },
    {
        icon: Users,
        title: "Leadership",
        skills: ["Team Management", "Financial Planning", "Event Coordination", "Strategic Planning"],
        level: 85,
        color: "bg-cyan-500",
    },
];

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "kritikabhachawat@gmail.com",
        link: "mailto:kritikabhachawat@gmail.com",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Rajasthan, India",
        link: null,
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "kritika-bhachawat",
        link: "https://www.linkedin.com/in/kritika-bhachawat-jain-4740ba194/",
    },
    {
        icon: Github,
        label: "GitHub",
        value: "kritika-bhachawat",
        link: "https://github.com/kritikab01",
    },
];
export { basicInfo, education, experience, socialMedia, about, projects, skillCategories, contactInfo };
