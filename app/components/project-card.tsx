"use client";

import * as React from "react"
import { useRouter } from "next/navigation"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/app/components/ui/card"

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  status?: string;
  imageUrl?: string; // Add optional imageUrl prop
  image?: React.ReactNode; // Add optional image prop
}

const ProjectCard = ({ title, description, technologies, link, status, imageUrl, image }: ProjectCardProps) => {
  const router = useRouter();
  
  return (
    <Card className="w-full h-auto bg-white text-gray-900 shadow-lg border border-gray-200 p-0 transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-xl"
         onClick={() => router.push(link)}>
      {/* Image Section */}
      <div className="w-full h-40 bg-gray-200 flex items-center justify-center overflow-hidden rounded-t-md">
        {image ? (
          image
        ) : imageUrl ? (
          <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
        ) : (
          <span className="text-gray-400 text-sm">No image available</span>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900 font-bold">{title}</CardTitle>
        {status && (
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
              {status}
            </span>
          </div>
        )}
        <CardDescription className="text-sm text-gray-700">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;