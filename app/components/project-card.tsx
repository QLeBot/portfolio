"use client";

import * as React from "react"
import { useRouter } from "next/navigation"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/app/components/ui/card"

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  status?: string;
  imageUrl?: string;
  image?: React.ReactNode;
  theme?: 'light' | 'dark';
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  link, 
  status, 
  imageUrl, 
  image,
  theme = 'light'
}: ProjectCardProps) => {
  const router = useRouter();
  
  const cardBg = theme === 'dark' ? 'bg-uni-slate-light' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-stone-200' : 'text-gray-900';
  const textSecondary = theme === 'dark' ? 'text-stone-300' : 'text-gray-700';
  const textMuted = theme === 'dark' ? 'text-stone-400' : 'text-gray-400';
  const badgeBg = theme === 'dark' ? 'bg-slate-600' : 'bg-gray-100';
  const badgeText = theme === 'dark' ? 'text-stone-200' : 'text-gray-700';
  const borderColor = theme === 'dark' ? 'border-slate-600' : 'border-gray-200';
  
  return (
    <Card 
      className={`w-full h-auto ${cardBg} ${textColor} shadow-lg border ${borderColor} p-0 transition-all duration-300 hover:scale-[1.02] cursor-pointer hover:shadow-xl space-mono-regular`}
      onClick={() => router.push(link)}
    >
      {/* Image Section */}
      <div className={`w-full h-40 ${theme === 'dark' ? 'bg-slate-700' : 'bg-gray-200'} flex items-center justify-center overflow-hidden rounded-t-md`}>
        {image ? (
          image
        ) : imageUrl ? (
          <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
        ) : (
          <span className={`${textMuted} text-sm`}>No image available</span>
        )}
      </div>
      <CardHeader>
        <CardTitle className={`text-xl ${textColor} font-bold space-mono-bold`}>
          {title}
        </CardTitle>
        {status && (
          <div className="flex flex-wrap gap-2 mt-2">
            <span className={`px-2 py-1 ${badgeBg} ${badgeText} rounded-full text-xs space-mono-regular`}>
              {status}
            </span>
          </div>
        )}
        <CardDescription className={`text-sm ${textSecondary} space-mono-regular`}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className={`px-2 py-1 ${badgeBg} ${badgeText} rounded-full text-xs space-mono-regular`}
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;