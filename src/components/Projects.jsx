import { projects } from "@/utils/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Eye, Calendar, FolderOpen } from "lucide-react";

export default function Projects() {
  return (
    <section className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <FolderOpen className="w-8 h-8 text-blue-600" />
        <h2 className="text-3xl font-bold">Projects</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-3">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden mb-3 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        size="sm" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <FolderOpen className="w-5 h-5" />
                          {project.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full rounded-lg"
                        />
                        <div className="space-y-2">
                          <h4 className="font-semibold">Description</h4>
                          <p className="text-gray-700">{project.description}</p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <Badge key={i} variant="secondary">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {project.liveLink && (
                            <Button asChild>
                              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                          {project.githubLink && (
                            <Button variant="outline" asChild>
                              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              
              <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                {project.title}
              </CardTitle>
              
              {project.date && (
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {project.date}
                </div>
              )}
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-gray-700 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <Separator />
              
              <div className="flex gap-2">
                {project.liveLink && (
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubLink && (
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-center">Want to see more?</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 mb-4">
            Check out my GitHub for more projects and contributions
          </p>
          <Button asChild>
            <a href="https://github.com/VadranapuPavan" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View GitHub Profile
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}