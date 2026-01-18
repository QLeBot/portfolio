"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { designTokens } from "@/lib/design-tokens"

export default function ViewSwitcher() {
  const [activeView, setActiveView] = useState("work")

  return (
    <div className={`${designTokens.layout.container} py-4`}>
      <Tabs value={activeView} onValueChange={setActiveView} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-200">
          <TabsTrigger 
            value="work" 
            className={`${designTokens.colors.text.secondary} data-[state=active]:bg-white data-[state=active]:text-gray-900 ${designTokens.transitions.default} space-mono-regular`}
          >
            Work
          </TabsTrigger>
          <TabsTrigger 
            value="education" 
            className={`${designTokens.colors.text.secondary} data-[state=active]:bg-white data-[state=active]:text-gray-900 ${designTokens.transitions.default} space-mono-regular`}
          >
            Education
          </TabsTrigger>
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
    <Card className="bg-transparent border-0">
      <CardHeader>
        <CardTitle className={`${designTokens.colors.text.primary} ${designTokens.typography.font.heading}`}>
          Work Experience
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
            <li>
                <h3 className={`${designTokens.typography.heading.h4} mb-2 ${designTokens.colors.text.primary} ${designTokens.typography.font.heading}`}>
                  Data Engineer Consultant
                </h3>
                <p className={`font-semibold mb-1 ${designTokens.colors.text.secondary}`}>Talan</p>
                <p className={`mb-2 ${designTokens.colors.text.secondary}`}>Geneva, Switzerland</p>
                <p className={`${designTokens.typography.body.small} ${designTokens.colors.text.tertiary}`}>Nov 2023 - Mar 2024</p>
                <div className="mt-4">
                    <ul className="list-disc list-inside space-y-2">
                        <p className={`font-bold ${designTokens.colors.text.primary} ${designTokens.typography.font.heading}`}>
                          Data Engineer for the City of Geneva
                        </p>
                        <li className={designTokens.colors.text.secondary}>Developed QlikSense dashboards adhering to best practices for production, cost, and consumption data management.</li>
                        <li className={designTokens.colors.text.secondary}>Utilized data modeling techniques in QlikSense to optimize data structures, improve performance, and ensure accurate reporting for production, cost, and consumption data.</li>
                        <li className={designTokens.colors.text.secondary}>Optimized QlikSense data table structures to enhance efficiency and ensure reliability.</li>
                        <li className={designTokens.colors.text.secondary}>Refactored cost and consumption calculations by incorporating specific technical parameters for greater accuracy.</li>
                        <li className={designTokens.colors.text.secondary}>Authored comprehensive documentation on dashboards and data table structures, tailored for both technical and non-technical audiences.</li>
                        <br />
                        
                        <p className={`font-bold ${designTokens.colors.text.primary} ${designTokens.typography.font.heading}`}>
                          Internal PoC on Microsoft Fabric
                        </p>
                        <li className={designTokens.colors.text.secondary}>Developed QlikSense dashboards adhering to best practices for production, cost, and consumption data management.</li>
                        <li className={designTokens.colors.text.secondary}>Utilized data modeling techniques in QlikSense to optimize data structures, improve performance, and ensure accurate reporting for production, cost, and consumption data.</li>
                        <li className={designTokens.colors.text.secondary}>Optimized QlikSense data table structures to enhance efficiency and ensure reliability.</li>
                        <li className={designTokens.colors.text.secondary}>Refactored cost and consumption calculations by incorporating specific technical parameters for greater accuracy.</li>
                        <li className={designTokens.colors.text.secondary}>Authored comprehensive documentation on dashboards and data table structures, tailored for both technical and non-technical audiences.</li>
                    </ul>
                </div>
            </li>
            <li>
                <h3 className={`${designTokens.typography.heading.h4} mb-2 ${designTokens.colors.text.primary} ${designTokens.typography.font.heading}`}>
                  Data Engineer Intern
                </h3>
                <p className={`font-semibold mb-1 ${designTokens.colors.text.secondary}`}>Talan</p>
                <p className={`mb-2 ${designTokens.colors.text.secondary}`}>Neuchâtel, Switzerland</p>
                <p className={`${designTokens.typography.body.small} ${designTokens.colors.text.tertiary}`}>Apr 2023 - Nov 2023</p>
                <div className="mt-4">
                    <ul className="list-disc list-inside space-y-2">
                        <p className={`font-bold ${designTokens.colors.text.primary} ${designTokens.typography.font.heading}`}>
                          Data platform for Bulgari Watches
                        </p>
                        <li className={designTokens.colors.text.secondary}>Implemented ETL pipelines on Azure Data Factory using both time-driven and event-driven triggers.</li>
                        <li className={designTokens.colors.text.secondary}>Transformed and loaded data from SAP and on-premise Microsoft Server databases into the Azure environment.</li>
                        <li className={designTokens.colors.text.secondary}>Developed SQL queries tailored to the specific needs of cross-functional users.</li>
                        <li className={designTokens.colors.text.secondary}>Optimized and monitored pipeline performance to ensure efficiency and reliability</li>
                        <li className={designTokens.colors.text.secondary}>Automated metadata-driven and data flows pipeline creation through Python scripting, increasing operational efficiency.</li>
                        <li className={designTokens.colors.text.secondary}>Documented pipeline architecture and dependencies to provide clear guidance for ongoing and future projects.</li>
                    </ul>
                </div>
            </li>
            <li>
                <h3 className={`${designTokens.typography.heading.h4} mb-2 ${designTokens.colors.text.primary} ${designTokens.typography.font.heading}`}>
                  Data & Cloud Intern
                </h3>
                <p className={`font-semibold mb-1 ${designTokens.colors.text.secondary}`}>Infotel Conseil</p>
                <p className={`mb-2 ${designTokens.colors.text.secondary}`}>Nanterre, France</p>
                <p className={`${designTokens.typography.body.small} ${designTokens.colors.text.tertiary}`}>Jun 2022 - Sep 2022</p>
                <div className="mt-4">
                    <ul className="list-disc list-inside space-y-2">
                        <p className={`font-bold ${designTokens.colors.text.primary} ${designTokens.typography.font.heading}`}>
                          Proof of Concept for Enedis
                        </p>
                        <li className={designTokens.colors.text.secondary}>Enhanced video speech-to-text extraction using AWS Transcribe with Custom Vocabulary for improved accuracy</li>
                        <li className={designTokens.colors.text.secondary}>Developed AWS Lambda functions in Python to manipulate and enrich data, streamlining processing workflows.</li>
                        <li className={designTokens.colors.text.secondary}>Extracted and ingested data in and out of S3 buckets through Lambda functions, ensuring seamless data flow</li>
                        <li className={designTokens.colors.text.secondary}>Documented the entire process and presented the final results and conclusions of the Proof of Concept (PoC) to stakeholders.</li>
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
    <Card className="bg-transparent border-0">
      <CardHeader>
        <CardTitle className={`${designTokens.colors.text.primary} ${designTokens.typography.font.heading}`}>
          Education
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          <li>
            <h3 className={`font-semibold ${designTokens.colors.text.primary} ${designTokens.typography.font.heading}`}>
              Master Engineering Degree in Artificial Intelligence
            </h3>
            <p className={`${designTokens.typography.body.small} ${designTokens.colors.text.tertiary}`}>ESME Sudria, 2023</p>
            <p className={designTokens.colors.text.secondary}>Specialized in Artificial Intelligence and Machine Learning</p>
          </li>
          <li>
            <h3 className={`font-semibold ${designTokens.colors.text.primary} ${designTokens.typography.font.heading}`}>
              International Semester
            </h3>
            <p className={`${designTokens.typography.body.small} ${designTokens.colors.text.tertiary}`}>California State University Monterey Bay, 2021</p>
            <p className={designTokens.colors.text.secondary}>Computer Science</p>
          </li>
          <li>
            <h3 className={`font-semibold ${designTokens.colors.text.primary} ${designTokens.typography.font.heading}`}>
              Baccalaureat - Scientific
            </h3>
            <p className={`${designTokens.typography.body.small} ${designTokens.colors.text.tertiary}`}>Présentation de Marie HighSchool, 2017</p>
            <p className={designTokens.colors.text.secondary}>Scientific Baccalaureat with mention</p>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}