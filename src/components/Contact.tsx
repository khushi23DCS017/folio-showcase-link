
import { useState } from 'react';
import { SendIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-secondary to-white/80 dark:from-navy dark:to-lightNavy/60 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-4 text-navy dark:text-white">Let's Work Together</h3>
            <p className="text-slate mb-6 dark:text-lightSlate">
              I'm currently available for freelance work and open to new opportunities. 
              Whether you have a project in mind or just want to say hello, feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-start animate-slide-in" style={{ animationDelay: '0.3s' }}>
                <div className="bg-gradient-to-br from-purple-light to-accent p-3 rounded-full shadow-md mr-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-navy dark:text-white font-medium">Email</h4>
                  <a href="mailto:johndoe@example.com" className="text-slate hover:text-accent transition-colors dark:text-lightSlate">johndoe@example.com</a>
                </div>
              </div>
              <div className="flex items-start animate-slide-in" style={{ animationDelay: '0.4s' }}>
                <div className="bg-gradient-to-br from-purple-light to-accent p-3 rounded-full shadow-md mr-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-navy dark:text-white font-medium">Location</h4>
                  <p className="text-slate dark:text-lightSlate">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <form onSubmit={handleSubmit} className="glass-card bg-white/50 dark:bg-navy/30 backdrop-blur-md shadow-xl p-6 rounded-lg border border-white/20 dark:border-white/5 transition-transform duration-300 hover:scale-[1.01]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
                  <label htmlFor="name" className="block text-sm font-medium text-navy dark:text-white mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-white/70 dark:bg-navy/50 focus:ring-accent"
                  />
                </div>
                <div className="animate-slide-in" style={{ animationDelay: '0.5s' }}>
                  <label htmlFor="email" className="block text-sm font-medium text-navy dark:text-white mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full bg-white/70 dark:bg-navy/50 focus:ring-accent"
                  />
                </div>
              </div>
              <div className="mb-4 animate-slide-in" style={{ animationDelay: '0.6s' }}>
                <label htmlFor="subject" className="block text-sm font-medium text-navy dark:text-white mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full bg-white/70 dark:bg-navy/50 focus:ring-accent"
                />
              </div>
              <div className="mb-6 animate-slide-in" style={{ animationDelay: '0.7s' }}>
                <label htmlFor="message" className="block text-sm font-medium text-navy dark:text-white mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="w-full min-h-[150px] bg-white/70 dark:bg-navy/50 focus:ring-accent"
                  rows={5}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-default to-indigo-default hover:opacity-90 text-white shadow-lg transition-all duration-300 animate-slide-in" 
                style={{ animationDelay: '0.8s' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <SendIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
