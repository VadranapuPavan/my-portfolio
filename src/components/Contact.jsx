import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const sendEmail = (e) => {
  e.preventDefault();
  setIsLoading(true);

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setAlert({
        show: true,
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      form.current.reset();
    })
    .catch((error) => {
      setAlert({
        show: true,
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
      console.error(error);
    })
    .finally(() => {
      setIsLoading(false);
      setTimeout(() => setAlert({ show: false, type: '', message: '' }), 5000);
    });
};

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "vadranapupavan@email.com",
      href: "mailto:vadranapupavan@email.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+91 91605 25769",
      href: "tel:+919160525769"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "India",
      href: null
    }
  ];

  return (
    <section className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <Mail className="w-8 h-8 text-blue-600" />
        <h2 className="text-3xl font-bold">Get in Touch</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send me a message</CardTitle>
          </CardHeader>
          <CardContent>
            {alert.show && (
              <Alert className={`mb-4 ${alert.type === 'success' ? 'border-green-500' : 'border-red-500'}`}>
                {alert.type === 'success' ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-500" />
                )}
                <AlertDescription className={alert.type === 'success' ? 'text-green-700' : 'text-red-700'}>
                  {alert.message}
                </AlertDescription>
              </Alert>
            )}
            
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="user_name">Your Name</Label>
                <Input
                  id="user_name"
                  name="user_name"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="user_email">Your Email</Label>
                <Input
                  id="user_email"
                  name="user_email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hi!"
                  rows={4}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Let's connect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-700">
              I'm always open to discussing new opportunities, collaborating on projects, 
              or just having a chat about technology and development.
            </p>
            
            <Separator />
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                  <div className="text-blue-600">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold text-sm">{info.title}</h4>
                    {info.href ? (
                      <a href={info.href} className="text-gray-700 hover:text-blue-600 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-gray-700">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <Separator />
            
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Response time: Usually within 24 hours
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}