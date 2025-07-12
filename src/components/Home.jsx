import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Download, Github, Linkedin, Mail, Code, Zap, Heart } from "lucide-react";

export default function Home() {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/VadranapuPavan",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/pavan-vadranapu-963a89296/",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:vadranapupavan@email.com",
      label: "Email"
    }
  ];

  const highlights = [
    { icon: <Heart className="w-4 h-4" />, text: "UI/UX Enthusiast" },
    { icon: <Code className="w-4 h-4" />, text: "Web Developer" },
    { icon: <Zap className="w-4 h-4" />, text: "Performance Focused" }
    
  ];

  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Badge variant="outline" className="w-fit">
                Welcome to my portfolio
              </Badge>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Vadranapu Pavan
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700">
                Full-Stack Developer
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Passionate about creating amazing web experiences with modern technologies. 
                I love turning ideas into beautiful, functional applications.
              </p>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2">
              {highlights.map((highlight, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1 px-3 py-1">
                  {highlight.icon}
                  {highlight.text}
                </Badge>
              ))}
            </div>

            <Separator />

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="/resume.pdf" download>
                <Button size="lg" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
              <Button variant="outline" size="lg" onClick={() => {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors group"
                  aria-label={link.label}
                >
                  <div className="text-gray-600 group-hover:text-gray-800 transition-colors">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center">
            <Card className="p-1 bg-gradient-to-br from-blue-500 to-purple-600">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src="/profile.png"
                    alt="Vadranapu Pavan - Full Stack Developer"
                    className="w-80 h-80 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* <Card className="text-center p-4">
            <CardContent className="p-0">
              <div className="text-2xl font-bold text-blue-600">3+</div>
              <div className="text-sm text-gray-600">Years Coding</div>
            </CardContent>
          </Card>
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <div className="text-2xl font-bold text-green-600">1+</div>
              <div className="text-sm text-gray-600">Projects</div>
            </CardContent>
          </Card>
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <div className="text-2xl font-bold text-purple-600">5+</div>
              <div className="text-sm text-gray-600">Technologies</div>
            </CardContent>
          </Card>
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <div className="text-2xl font-bold text-orange-600">100%</div>
              <div className="text-sm text-gray-600">Dedication</div>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  );
}