import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Award, Eye, Calendar } from "lucide-react";

const certifications = [
  {
    image: "/certificates/certificate1.png",
    title: "Full Stack Web Development",
    issuer: "Tech Academy",
    date: "2024",
    description: "Comprehensive course covering MERN stack development"
  },
  {
    image: "/certificates/certificate2.png",
    title: "JavaScript Fundamentals",
    issuer: "Code Institute",
    date: "2023",
    description: "Advanced JavaScript concepts and ES6+ features"
  },
  {
    image: "/certificates/certificate3.png",
    title: "React Development",
    issuer: "React Academy",
    date: "2024",
    description: "Modern React development with hooks and context"
  },
];

export default function Certifications() {
  return (
    <section className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <Award className="w-8 h-8 text-yellow-600" />
        <h2 className="text-3xl font-bold">Certifications</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-3">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardTitle className="text-lg">{cert.title}</CardTitle>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>{cert.date}</span>
              </div>
            </CardHeader>
            <CardContent>
              <Badge variant="outline" className="mb-3">{cert.issuer}</Badge>
              <p className="text-sm text-gray-700 mb-4">{cert.description}</p>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>{cert.title}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}