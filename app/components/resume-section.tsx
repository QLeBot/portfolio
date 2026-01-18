"use client"

import React from "react"
import { designTokens } from "@/lib/design-tokens"
import ViewSwitcher from "@/app/components/view-switcher"
import { FaAws, FaDatabase, FaMicrosoft } from "react-icons/fa"
import {
  SiDbt,
  SiKeras,
  SiMongodb,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPowerbi,
  SiPython,
  SiQlik,
  SiScikitlearn,
  SiSnowflake,
  SiTensorflow,
  SiPytorch,
  SiApachespark,
  SiMicrosoftsqlserver,
} from "react-icons/si"

export default function ResumeSection() {
  return (
    <section id="resume" className={`${designTokens.layout.section} ${designTokens.spacing.section.py} bg-muted/90`}>
      <div className={designTokens.layout.container}>
        <h2 className={`${designTokens.typography.heading.h2} ${designTokens.colors.text.primary} ${designTokens.typography.font.heading} mb-4`}>
          Resume
        </h2>
        <p className={`${designTokens.typography.body.base} mb-10 ${designTokens.colors.text.secondary} max-w-2xl`}>
          My professional experience and technical skills in Data Engineering, Data Science, and Cloud technologies.
        </p>

        <h3 className={`${designTokens.typography.heading.h3} ${designTokens.colors.text.primary} ${designTokens.typography.font.heading} mb-6`}>
          Skills
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-gray-100 p-6 ${designTokens.layout.card.base}`}>
            <h4 className={`${designTokens.typography.heading.h4} ${designTokens.colors.text.primary} ${designTokens.typography.font.heading} mb-3`}>
              Data Science &amp; AI
            </h4>
            <div className="flex flex-wrap gap-4">
              <SkillIcon label="Python" Icon={SiPython} className="text-blue-500" />
              <SkillIcon label="Pandas" Icon={SiPandas} className="text-blue-800" />
              <SkillIcon label="NumPy" Icon={SiNumpy} className="text-blue-600" />
              <SkillIcon label="Scikit-Learn" Icon={SiScikitlearn} className="text-orange-500" />
              <SkillIcon label="Keras" Icon={SiKeras} className="text-red-500" />
              <SkillIcon label="TensorFlow" Icon={SiTensorflow} className="text-orange-500" />
              <SkillIcon label="PyTorch" Icon={SiPytorch} className="text-red-500" />
            </div>
          </div>

          <div className={`bg-gray-100 p-6 ${designTokens.layout.card.base}`}>
            <h4 className={`${designTokens.typography.heading.h4} ${designTokens.colors.text.primary} ${designTokens.typography.font.heading} mb-3`}>
              Data Engineering
            </h4>
            <div className="flex flex-wrap gap-4">
              <SkillIcon label="SQL" Icon={FaDatabase} className="text-gray-600" />
              <SkillIcon label="MongoDB" Icon={SiMongodb} className="text-green-500" />
              <SkillIcon label="PostgreSQL" Icon={SiPostgresql} className="text-blue-400" />
              <SkillIcon label="MySQL" Icon={SiMysql} className="text-blue-600" />
              <SkillIcon label="SQL Server" Icon={SiMicrosoftsqlserver} className="text-red-600" />
              <SkillIcon label="PySpark" Icon={SiApachespark} className="text-orange-600" />
              <SkillIcon label="Snowflake" Icon={SiSnowflake} className="text-blue-600" />
              <SkillIcon label="dbt" Icon={SiDbt} className="text-orange-600" />
            </div>
          </div>

          <div className={`bg-gray-100 p-6 ${designTokens.layout.card.base}`}>
            <h4 className={`${designTokens.typography.heading.h4} ${designTokens.colors.text.primary} ${designTokens.typography.font.heading} mb-3`}>
              Cloud
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                  <FaMicrosoft className="w-8 h-8 text-blue-500" />
                  <span className="text-sm text-gray-700">Azure</span>
                </div>
                <span className="text-xs mt-1 ml-10 text-gray-600">Data Factory, Azure SQL Database, Blob Storage</span>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                  <FaAws className="w-8 h-8 text-orange-500" />
                  <span className="text-sm text-gray-700">AWS</span>
                </div>
                <span className="text-xs mt-1 ml-10 text-gray-600">S3, Lambda</span>
              </div>
            </div>
          </div>

          <div className={`bg-gray-100 p-6 ${designTokens.layout.card.base}`}>
            <h4 className={`${designTokens.typography.heading.h4} ${designTokens.colors.text.primary} ${designTokens.typography.font.heading} mb-3`}>
              Data Analysis &amp; Visualization
            </h4>
            <div className="flex flex-wrap gap-4">
              <SkillIcon label="Power BI" Icon={SiPowerbi} className="text-yellow-500" />
              <SkillIcon label="Qlik Sense" Icon={SiQlik} className="text-green-500" />
            </div>
          </div>
        </div>
      </div>

      <ViewSwitcher />
    </section>
  )
}

function SkillIcon({
  label,
  Icon,
  className,
}: {
  label: string
  Icon: React.ComponentType<{ className?: string }>
  className?: string
}) {
  return (
    <div className="flex flex-col items-center">
      <Icon className={`w-8 h-8 ${className ?? ""}`} />
      <span className="text-sm mt-1 text-gray-700">{label}</span>
    </div>
  )
}

