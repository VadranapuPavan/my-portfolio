import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Code, Zap, Target } from "lucide-react";

export default function About() {
  const highlights = [
    { icon: <Code className="w-5 h-5" />, title: "Web Developer", description: "Front-End development expertise" },
    { icon: <Zap className="w-5 h-5" />, title: "Performance", description: "Optimized & scalable solutions" },
    { icon: <Target className="w-5 h-5" />, title: "User-Focused", description: "Seamless user experiences" },
  ];

  return (
    <section className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <User className="w-8 h-8 text-blue-600" />
        <h2 className="text-3xl font-bold">About Me</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Professional Background
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              I am an enthusiastic and driven full-stack developer with a focus on the MERN stack 
              (MongoDB, Express.js, React, Node.js). Through personal projects and internships, I have 
              developed a strong understanding of both front-end and back-end technologies, with a 
              passion for creating seamless user experiences and efficient, scalable back-end systems.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Strengths</CardTitle>
            <CardDescription>What drives my development approach</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                <div className="text-blue-600 mt-1">{highlight.icon}</div>
                <div>
                  <h4 className="font-semibold">{highlight.title}</h4>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Front-End Development</Badge>
              <Badge variant="secondary">Problem Solving</Badge>
              <Badge variant="secondary">Team Collaboration</Badge>
              <Badge variant="secondary">Continuous Learning</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}