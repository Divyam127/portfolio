import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud, Book, BookAIcon, BookCheck, BracesIcon, CodeXml, MonitorCog, BlocksIcon, Network, FileCode2, BrainCircuit, GitBranchIcon, User2, UserCircle, Users, Speech, Hourglass, AudioLines, LandPlot, CalendarCheck, Lightbulb, Sparkles } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
  SiExpress,
  SiMysql,
  SiSketch,
  SiDsautomobiles,
  SiNetlify,
  SiPostman,
  SiLeaderprice,
  SiTeamviewer,
  SiTeamspeak,
  SiSupabase,
  SiJavascript,
} from "react-icons/si";
import { TbBrandAdobePhotoshop, TbBrandAdobeXd, TbBrandVscode, TbSql } from "react-icons/tb";
import { BsBootstrap, BsFileEarmarkCode, BsGithub, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React", 
          icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
          {
          name: "JavaScript",
          icon: <SiJavascript className="w-4 h-4 text-[#ffdd00]" />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-4 h-4 text-white" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "HTML5",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "CSS3",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
        },
        {
          name: "bootstrap",
          icon: <BsBootstrap className="w-4 h-4 text-[#1572B6]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "SQL",
          icon: <TbSql className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="w-4 h-4 text-[#E10098]" />,
        },
        {
          name: "SupaBase",
          icon: <SiSupabase className="w-4 h-4 text-[#336791]" />,
        },
      ],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      color: "text-purple-400",
      skills: [
        { name: "Figma", 
          icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
        {
          name: "AdobeXD",
          icon: <TbBrandAdobeXd className="w-4 h-4 text-[#FC0345]" />,
        },
        {
          name: "Wireframe",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#9CA3AF]" />,
        },
        {
          name: "Sketch",
          icon: <SiSketch className="w-4 h-4 text-[#F59E0B]" />,
        },
        {
          name: "PhotoShop",
          icon: <TbBrandAdobePhotoshop className="w-4 h-4 text-[#0398FC]" />,
        },
      ],
    },
    {
      icon: BookCheck,
      title: "Course Work",
      color: "text-orange-400",
      skills: [
        { name: "DSA", 
          icon: <BrainCircuit className="w-4 h-4 text-[#0398FC]" /> 
        },
        {
          name: "DBMS",
          icon: <Database className="w-4 h-4 text-[#a647ff]" />,
        },
        { 
          name: "OOPs", 
          icon: <BlocksIcon className="w-4 h-4 text-[#56f5a5]" /> 
        },
        {
          name: "Operating System",
          icon: <MonitorCog className="w-4 h-4 text-[#326CE5]" />,
        },
        { 
          name: "Computer Networking", 
          icon: <Network className="w-4 h-4 text-[#6d71fc]" /> 
        },
        { 
          name: "Software Development", 
          icon: <FileCode2 className="w-4 h-4 text-[#1aff00]" /> 
        },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Platforms",
      color: "text-pink-400",
      skills: [
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        { name: "Git", icon: <GitBranchIcon className="w-4 h-4 text-[#C21325]" /> },
        {
          name: "Github",
          icon: <BsGithub className="w-4 h-4 text-[#8DD6F9]" />,
        },
        { name: "Redux", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
        {
          name: "Postman",
          icon: <SiPostman className="w-4 h-4 text-[#FFCA28]" />,
        },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        { name: "Netlify", icon: <SiNetlify className="w-4 h-4 text-[#00ffff]" /> },
      ],
    },
    {
      icon: Sparkles,
      title: "Soft Skills",
      color: "text-yellow-400",
      skills: [
        {
          name: "Leadership",
          icon: <Speech className="w-4 h-4 text-[#FF4081]" />,
        },
        {
          name: "Team Work",
          icon: <Users className="w-4 h-4 text-[#00C853]" />,
        },
        {
          name: "Time Management",
          icon: <Hourglass className="w-4 h-4 text-[#8c5454]" />,
        },
        {
          name: "Communication",
          icon: <AudioLines className="w-4 h-4 text-[#7C4DFF]" />,
        },
        {
          name: "Planning",
          icon: <CalendarCheck className="w-4 h-4 text-[#ccdb3d]" />,
        },
        
        {
          name: "Problem Solving",
          icon: <Lightbulb className="w-4 h-4 text-[#00ffff]" />,
        },
        
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(241, 241, 241, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
