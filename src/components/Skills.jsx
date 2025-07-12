import { FaHtml5, FaCss3Alt, FaJava, FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import { SiC, SiFigma, SiMongodb, SiExpress, SiJavascript, SiTailwindcss } from "react-icons/si";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Code, Palette, Database, Server, Zap } from "lucide-react";

export default function Skills() {
  const skillCategories = {
    frontend: [
      { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-600" />, level: 90 },
      { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-600" />, level: 85 },
      { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-500" />, level: 80 },
      { name: "React", icon: <FaReact size={40} className="text-blue-500" />, level: 75 },
      { name: "UI/UX Design", icon: <SiFigma size={40} className="text-purple-600" />, level: 75 },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-teal-500" />, level: 70 },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-600" />, level: 75 },
    //   { name: "Express.js", icon: <SiExpress size={40} className="text-gray-700" />, level: 70 },
      { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" />, level: 65 },
      { name: "Java", icon: <FaJava size={40} className="text-red-600" />, level: 80 },
    //   { name: "Python", icon: <FaPython size={40} className="text-blue-500" />, level: 70 },
    ],
    languages: [
      { name: "C", icon: <SiC size={40} className="text-blue-700" />, level: 85 },
      { name: "Java", icon: <FaJava size={40} className="text-red-600" />, level: 80 },
      { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-500" />, level: 80 },
      { name: "Python", icon: <FaPython size={40} className="text-blue-500" />, level: 70 },
    ],
    tools: [
      { name: "Git", icon: <Code size={40} className="text-orange-600" />, level: 70 },
      { name: "VS Code", icon: <Code size={40} className="text-blue-600" />, level: 90 },
      { name: "Figma", icon: <SiFigma size={40} className="text-purple-600" />, level: 65 },
    ]
  };

  const tabConfig = [
    { id: "frontend", label: "Frontend", icon: <Palette className="w-4 h-4" /> },
    { id: "backend", label: "Backend", icon: <Server className="w-4 h-4" /> },
    { id: "languages", label: "Languages", icon: <Code className="w-4 h-4" /> },
    { id: "tools", label: "Tools", icon: <Zap className="w-4 h-4" /> },
  ];

  const SkillCard = ({ skill }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="group-hover:scale-110 transition-transform duration-300">
            {skill.icon}
          </div>
          <div className="w-full">
            <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <Code className="w-8 h-8 text-blue-600" />
        <h2 className="text-3xl font-bold">Skills & Technologies</h2>
      </div>
      
      <Tabs defaultValue="frontend" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          {tabConfig.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id} className="flex items-center gap-2">
              {tab.icon}
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {Object.entries(skillCategories).map(([category, skills]) => (
          <TabsContent key={category} value={category} className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      <Separator className="my-8" />
      
      {/* Skills Overview */}
      {/* <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              Technical Focus
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Full-Stack Development</span>
                <Badge variant="secondary">Primary</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Frontend Development</span>
                <Badge variant="secondary">Expert</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Backend Development</span>
                <Badge variant="secondary">Intermediate</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">UI/UX Design</span>
                <Badge variant="secondary">Intermediate</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Currently Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Advanced React Patterns</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm">Docker & DevOps</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div> */}
    </section>
  );
}