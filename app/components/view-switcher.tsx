"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"

export default function ViewSwitcher() {
  const [activeView, setActiveView] = useState("work")

  return (
    <div className="w-full w-[95%] lg:w-[90%] xl:w-[85%] mx-auto p-4 rounded-lg">
      <Tabs value={activeView} onValueChange={setActiveView} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-200">
          <TabsTrigger value="work" className="text-gray-700 data-[state=active]:bg-white data-[state=active]:text-gray-900">Work</TabsTrigger>
          <TabsTrigger value="education" className="text-gray-700 data-[state=active]:bg-white data-[state=active]:text-gray-900">Education</TabsTrigger>
        </TabsList>
        <TabsContent value="work">
          <WorkView />
        </TabsContent>
        <TabsContent value="education">
          <EducationView />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function WorkView() {
  return (
    <Card className="bg-transparent text-gray-900 border-0">
      <CardHeader>
        <CardTitle className="text-gray-900">Work Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
            <li>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Data Engineer Consultant</h3>
                <p className="font-semibold mb-1 text-gray-800">Talan</p>
                <p className="mb-2 text-gray-700">Geneva, Switzerland</p>
                <p className="text-sm text-gray-600">Nov 2023 - Mar 2024</p>
                <div className="mt-4">
                    <ul className="list-disc list-inside">
                        <p className="font-bold text-gray-900">Data Engineer for the City of Geneva</p>
                        <li className="text-gray-700">Developed QlikSense dashboards adhering to best practices for production, cost, and consumption data management.</li>
                        <li className="text-gray-700">Utilized data modeling techniques in QlikSense to optimize data structures, improve performance, and ensure accurate reporting for production, cost, and consumption data.</li>
                        <li className="text-gray-700">Optimized QlikSense data table structures to enhance efficiency and ensure reliability.</li>
                        <li className="text-gray-700">Refactored cost and consumption calculations by incorporating specific technical parameters for greater accuracy.</li>
                        <li className="text-gray-700">Authored comprehensive documentation on dashboards and data table structures, tailored for both technical and non-technical audiences.</li>
                        <br />
                        
                        <p className="font-bold text-gray-900">Internal PoC on Microsoft Fabric</p>
                        <li className="text-gray-700">Developed QlikSense dashboards adhering to best practices for production, cost, and consumption data management.</li>
                        <li className="text-gray-700">Utilized data modeling techniques in QlikSense to optimize data structures, improve performance, and ensure accurate reporting for production, cost, and consumption data.</li>
                        <li className="text-gray-700">Optimized QlikSense data table structures to enhance efficiency and ensure reliability.</li>
                        <li className="text-gray-700">Refactored cost and consumption calculations by incorporating specific technical parameters for greater accuracy.</li>
                        <li className="text-gray-700">Authored comprehensive documentation on dashboards and data table structures, tailored for both technical and non-technical audiences.</li>
                    </ul>
                </div>
            </li>
            <br />
            <li>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Data Engineer Intern</h3>
                <p className="font-semibold mb-1 text-gray-800">Talan</p>
                <p className="mb-2 text-gray-700">Neuchâtel, Switzerland</p>
                <p className="text-sm text-gray-600">Apr 2023 - Nov 2023</p>
                <div className="mt-4">
                    <ul className="list-disc list-inside">
                        <p className="font-bold text-gray-900">Data platform for Bulgari Watches</p>
                        <li className="text-gray-700">Implemented ETL pipelines on Azure Data Factory using both time-driven and event-driven triggers.</li>
                        <li className="text-gray-700">Transformed and loaded data from SAP and on-premise Microsoft Server databases into the Azure environment.</li>
                        <li className="text-gray-700">Developed SQL queries tailored to the specific needs of cross-functional users.</li>
                        <li className="text-gray-700">Optimized and monitored pipeline performance to ensure efficiency and reliability</li>
                        <li className="text-gray-700">Automated metadata-driven and data flows pipeline creation through Python scripting, increasing operational efficiency.</li>
                        <li className="text-gray-700">Documented pipeline architecture and dependencies to provide clear guidance for ongoing and future projects.</li>
                    </ul>
                </div>
            </li>
            <br />
            <li>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Data & Cloud Intern</h3>
                <p className="font-semibold mb-1 text-gray-800">Infotel Conseil</p>
                <p className="mb-2 text-gray-700">Nanterre, France</p>
                <p className="text-sm text-gray-600">Jun 2022 - Sep 2022</p>
                <div className="mt-4">
                    <ul className="list-disc list-inside">
                        <p className="font-bold text-gray-900">Proof of Concept for Enedis</p>
                        <li className="text-gray-700">Enhanced video speech-to-text extraction using AWS Transcribe with Custom Vocabulary for improved accuracy</li>
                        <li className="text-gray-700">Developed AWS Lambda functions in Python to manipulate and enrich data, streamlining processing workflows.</li>
                        <li className="text-gray-700">Extracted and ingested data in and out of S3 buckets through Lambda functions, ensuring seamless data flow</li>
                        <li className="text-gray-700">Documented the entire process and presented the final results and conclusions of the Proof of Concept (PoC) to stakeholders.</li>
                    </ul>
                </div>
            </li>
        </ul>
      </CardContent>
    </Card>
  )
}

function EducationView() {
  return (
    <Card className="bg-transparent text-gray-900 border-0">
      <CardHeader>
        <CardTitle className="text-gray-900">Education</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          <li>
            <h3 className="font-semibold text-gray-900">Master Engineering Degree in Artificial Intelligence</h3>
            <p className="text-sm text-gray-600">ESME Sudria, 2023</p>
            <p className="text-gray-700">Specialized in Artificial Intelligence and Machine Learning</p>
          </li>
          <li>
            <h3 className="font-semibold text-gray-900">International Semester</h3>
            <p className="text-sm text-gray-600">California State University Monterey Bay, 2021</p>
            <p className="text-gray-700">Computer Science</p>
          </li>
          <li>
            <h3 className="font-semibold text-gray-900">Baccalaureat - Scientific</h3>
            <p className="text-sm text-gray-600">Présentation de Marie HighSchool, 2017</p>
            <p className="text-gray-700">Scientific Baccalaureat with mention</p>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}