import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export default function Education() {
  const education = [
    {
      level: "Bachelor's Degree",
      institution: "Sasi Institute Of Technology And Engineering",
      field: "Computer Science and Engineering",
      duration: "2022 - 2026",
      location: "India",
      status: "Pursuing",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      level: "Intermediate",
      institution: "Sri Srinivasa Graviity Junior College",
      field: "MPC (Mathematics, Physics, Chemistry)",
      duration: "2019 - 2021",
      location: "India",
      gpa: "7.2 GPA",
      icon: <Award className="w-6 h-6" />,
      color: "bg-green-500"
    },
    {
      level: "High School",
      institution: "Bhashyam E.M High School",
      field: "10th Standard",
      duration: "2018 - 2019",
      location: "India",
      gpa: "8.8 GPA",
      icon: <Award className="w-6 h-6" />,
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="w-8 h-8 text-blue-600" />
        <h2 className="text-3xl font-bold">Education</h2>
      </div>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${edu.color} text-white`}>
                    {edu.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{edu.level}</CardTitle>
                    <p className="text-lg font-semibold text-gray-700">{edu.institution}</p>
                  </div>
                </div>
                {edu.gpa && (
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    {edu.gpa}
                  </Badge>
                )}
                {edu.status && (
                  <Badge className="text-sm px-3 py-1">
                    {edu.status}
                  </Badge>
                )}
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Award className="w-4 h-4" />
                  <span className="font-medium">{edu.field}</span>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
              
              {index < education.length - 1 && (
                <Separator className="mt-4" />
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-lg">Academic Highlights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">8.8</div>
              <div className="text-sm text-gray-600">High School GPA</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">7.2</div>
              <div className="text-sm text-gray-600">Intermediate GPA</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">4+</div>
              <div className="text-sm text-gray-600">Years in CSE</div>
            </div>
          </div>
        </CardContent>
      </Card> */}
    </section>
  );
}