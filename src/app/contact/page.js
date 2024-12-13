import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="container mx-auto p-8">
      <Card className="w-full bg-card dark:bg-card-dark border-0">
        <CardHeader>
          <CardTitle className="text-2xl font-bold mb-2 text-primary dark:text-primary-dark">
            Contact Me
          </CardTitle>
          <CardDescription className="text-base text-foreground dark:text-foreground-dark">
            I would love to hear from you! Please reach out using the form below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground dark:text-foreground-dark">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                className="w-full rounded-md border border-primary/20 dark:border-primary-dark/20 bg-background dark:bg-background-dark p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
                required 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground dark:text-foreground-dark">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                className="w-full rounded-md border border-primary/20 dark:border-primary-dark/20 bg-background dark:bg-background-dark p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
                required 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground dark:text-foreground-dark">
                Message
              </label>
              <textarea 
                id="message" 
                rows="6" 
                className="w-full rounded-md border border-primary/20 dark:border-primary-dark/20 bg-background dark:bg-background-dark p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
                required 
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-primary dark:bg-primary-dark text-white px-4 py-3 rounded-md hover:bg-primary/90 dark:hover:bg-primary-dark/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 