"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"

export default function ViewSwitcher() {
  const [activeView, setActiveView] = useState("work")

  return (
    <div className="w-full w-[95%] lg:w-[90%] xl:w-[85%] mx-auto p-4 rounded-lg">
      <Tabs value={activeView} onValueChange={setActiveView} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-slate-700">
          <TabsTrigger value="work" className="data-[state=active]:bg-slate-600">Work</TabsTrigger>
          <TabsTrigger value="education" className="data-[state=active]:bg-slate-600">Education</TabsTrigger>
        </TabsList>
        <TabsContent value="work" className="bg-slate-600">
          <WorkView />
        </TabsContent>
        <TabsContent value="education" className="bg-slate-600">
          <EducationView />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function WorkView() {
  return (
    <Card className="bg-slate-600">
      <CardHeader>
        <CardTitle>Work Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
            <li>
                <h3 className="text-xl text-stone-400 font-bold mb-2">Data Engineer Consultant</h3>
                <p className="text-white font-semibold mb-1">Talan</p>
                <p className="text-white mb-2">Geneva, Switzerland</p>
                <p className="text-sm text-white">Nov 2023 - Mar 2024</p>
                {/* Description of the experience */}
                <p className="text-white mt-4">
                <ul className="list-disc list-inside">
                    {/* Title */}
                    <p className="font-bold">Data Engineer for the City of Geneva</p>
                    {/* Description */}
                    <li>Developed QlikSense dashboards adhering to best practices for production, cost, and consumption data management.</li>
                    <li>Utilized data modeling techniques in QlikSense to optimize data structures, improve performance, and ensure accurate reporting for production, cost, and consumption data.</li>
                    <li>Optimized QlikSense data table structures to enhance efficiency and ensure reliability.</li>
                    <li>Refactored cost and consumption calculations by incorporating specific technical parameters for greater accuracy.</li>
                    <li>Authored comprehensive documentation on dashboards and data table structures, tailored for both technical and non-technical audiences.</li>
                    {/* Add Spacing */}
                    <br />
            
                    {/* Title */}
                    <p className="font-bold">Internal PoC on Microsoft Fabric</p>
                    {/* Description */}
                    <li>Developed QlikSense dashboards adhering to best practices for production, cost, and consumption data management.</li>
                    <li>Utilized data modeling techniques in QlikSense to optimize data structures, improve performance, and ensure accurate reporting for production, cost, and consumption data.</li>
                    <li>Optimized QlikSense data table structures to enhance efficiency and ensure reliability.</li>
                    <li>Refactored cost and consumption calculations by incorporating specific technical parameters for greater accuracy.</li>
                    <li>Authored comprehensive documentation on dashboards and data table structures, tailored for both technical and non-technical audiences.</li>
                </ul>
                </p>
            </li>
            <br />
            <li>
                <h3 className="text-xl font-bold mb-2 text-stone-400">Data Engineer Intern</h3>
                <p className="text-white font-semibold mb-1">Talan</p>
                <p className="text-white mb-2">Neuchâtel, Switzerland</p>
                <p className="text-sm text-white">Apr 2023 - Nov 2023</p>
                {/* Description of the experience */}
                <p className="text-white mt-4">
                <ul className="list-disc list-inside">
                    {/* Title */}
                    <p className="font-bold">Data platform for Bulgari Watches</p>
                    {/* Description */}
                    <li>Implemented ETL pipelines on Azure Data Factory using both time-driven and event-driven triggers.</li>
                    <li>Transformed and loaded data from SAP and on-premise Microsoft Server databases into the Azure environment.</li>
                    <li>Developed SQL queries tailored to the specific needs of cross-functional users.</li>
                    <li>Optimized and monitored pipeline performance to ensure efficiency and reliability</li>
                    <li>Automated metadata-driven and data flows pipeline creation through Python scripting, increasing operational efficiency.</li>
                    <li>Documented pipeline architecture and dependencies to provide clear guidance for ongoing and future projects.</li>
                </ul>
                </p>
            </li>
            <br />
            <li>
                <h3 className="text-xl font-bold mb-2 text-stone-400">Data & Cloud Intern</h3>
                <p className="text-white font-semibold mb-1">Infotel Conseil</p>
                <p className="text-white mb-2">Nanterre, France</p>
                <p className="text-sm text-white">Jun 2022 - Sep 2022</p>
                {/* Description of the experience */}
                <p className="text-white mt-4">
                <ul className="list-disc list-inside">
                    {/* Title */}
                    <p className="font-bold">Proof of Concept for Enedis</p>
                    {/* Description */}
                    <li>Enhanced video speech-to-text extraction using AWS Transcribe with Custom Vocabulary for improved accuracy</li>
                    <li>Developed AWS Lambda functions in Python to manipulate and enrich data, streamlining processing workflows.</li>
                    <li>Extracted and ingested data in and out of S3 buckets through Lambda functions, ensuring seamless data flow</li>
                    <li>Documented the entire process and presented the final results and conclusions of the Proof of Concept (PoC) to stakeholders.</li>
                </ul>
                </p>
            </li>
        </ul>
      </CardContent>
    </Card>
  )
}

function EducationView() {
  return (
    <Card className="bg-slate-600">
      <CardHeader>
        <CardTitle>Education</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          <li>
            <h3 className="font-semibold">Master Engineering Degree in Artificial Intelligence</h3>
            <p className="text-sm text-gray-500">ESME Sudria, 2023</p>
            <p>Specialized in Artificial Intelligence and Machine Learning</p>
          </li>
          <li>
            <h3 className="font-semibold">International Semester</h3>
            <p className="text-sm text-gray-500">California State University Monterey Bay, 2021</p>
            <p>Computer Science</p>
          </li>
          <li>
            <h3 className="font-semibold">Baccalaureat - Scientific</h3>
            <p className="text-sm text-gray-500">Présentation de Marie HighSchool, 2017</p>
            <p>Scientific Baccalaureat with mention</p>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}