'use client'

import React from 'react';
import PageLayout from '../components/page-layout';
import ViewSwitcher from '../components/view-switcher';
import { designTokens } from '@/lib/design-tokens';
import { 
  FaPython, FaDatabase, FaAws, FaMicrosoft, 
  FaReact, FaHtml5, FaCss3, FaJava, FaSwift, 
  FaAndroid 
} from 'react-icons/fa';
import { 
  SiPython, SiPandas, SiNumpy, SiKeras, SiScikitlearn, SiTensorflow, SiPytorch, 
  SiMongodb, SiPostgresql, SiMysql, SiOracle, SiApachespark, SiScala, SiDatabricks, SiApachekafka, SiDbt, SiApacheairflow,, SiSnowflake 
  SiPowerbi, SiQlik, 
  SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, 
  SiKotlin, SiSwift
} from 'react-icons/si';

const ResumePage = () => {
  return (
    <PageLayout theme="light">
      {/* Hero Section */}
      <section className={`flex-grow ${designTokens.layout.container} py-10 pt-40`}>
        <h1 className={`mb-4 py-8 pt-4 ${designTokens.typography.heading.h1} ${designTokens.colors.text.primary} ${designTokens.typography.font.heading}`}>
          Resume
        </h1>
        <p className={`${designTokens.typography.body.base} mb-8 ${designTokens.colors.text.secondary} max-w-2xl`}>
          My professional experience and technical skills in Data Engineering, Data Science, and Cloud technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section className={`${designTokens.layout.section} ${designTokens.spacing.section.py}`}>
        <div className={designTokens.layout.container}>
          <h2 className={`${designTokens.typography.heading.h2} ${designTokens.colors.text.primary} ${designTokens.typography.font.heading} mb-8`}>
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Data Science & AI */}
            <div className={`bg-gray-100 p-6 ${designTokens.layout.card.base}`}>
              <h3 className={`${designTokens.typography.heading.h4} ${designTokens.colors.text.primary} ${designTokens.typography.font.heading} mb-3`}>
                Data Science & AI
              </h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center">
                  <SiPython className="w-8 h-8 text-blue-500" />
                  <span className="text-sm mt-1 text-gray-700">Python</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiPandas className="w-8 h-8 text-blue-800" />
                  <span className="text-sm mt-1 text-gray-700">Pandas</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiPolars className="w-8 h-8 text-blue-800" />
                  <span className="text-sm mt-1 text-gray-700">Polars</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiNumpy className="w-8 h-8 text-blue-600" />
                  <span className="text-sm mt-1 text-gray-700">Numpy</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiScikitlearn className="w-8 h-8 text-orange-500" />
                  <span className="text-sm mt-1 text-gray-700">Scikit-Learn</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiKeras className="w-8 h-8 text-red-500" />
                  <span className="text-sm mt-1 text-gray-700">Keras</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiTensorflow className="w-8 h-8 text-orange-500" />
                  <span className="text-sm mt-1 text-gray-700">TensorFlow</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiPytorch className="w-8 h-8 text-red-500" />
                  <span className="text-sm mt-1 text-gray-700">PyTorch</span>
                </div>
              </div>
            </div>

            {/* Data Engineering */}
            <div className={`bg-gray-100 p-6 ${designTokens.layout.card.base}`}>
              <h3 className={`${designTokens.typography.heading.h4} ${designTokens.colors.text.primary} ${designTokens.typography.font.heading} mb-3`}>
                Data Engineering
              </h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center">
                  <FaDatabase className="w-8 h-8 text-gray-600" />
                  <span className="text-sm mt-1 text-gray-700">SQL</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiMongodb className="w-8 h-8 text-green-500" />
                  <span className="text-sm mt-1 text-gray-700">MongoDB</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiPostgresql className="w-8 h-8 text-blue-400" />
                  <span className="text-sm mt-1 text-gray-700">PostgreSQL</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiMysql className="w-8 h-8 text-blue-600" />
                  <span className="text-sm mt-1 text-gray-700">MySQL</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiOracle className="w-8 h-8 text-red-600" />
                  <span className="text-sm mt-1 text-gray-700">SQL Server</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiApachespark className="w-8 h-8 text-orange-600" />
                  <span className="text-sm mt-1 text-gray-700">PySpark</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiSnowflake className="w-8 h-8 text-blue-600" />
                  <span className="text-sm mt-1 text-gray-700">Snowflake</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiDbt className="w-8 h-8 text-orange-600" />
                  <span className="text-sm mt-1 text-gray-700">dbt</span>
                </div>
              </div>
            </div>

            {/* Cloud */}
            <div className={`bg-gray-100 p-6 ${designTokens.layout.card.base}`}>
              <h3 className={`${designTokens.typography.heading.h4} ${designTokens.colors.text.primary} ${designTokens.typography.font.heading} mb-3`}>
                Cloud
              </h3>
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
                  <span className="text-xs mt-1 ml-10 text-gray-600">S3 Bucket, Lambda</span>
                </div>
              </div>
            </div>

            {/* Data Analysis & Visualization */}
            <div className={`bg-gray-100 p-6 ${designTokens.layout.card.base}`}>
              <h3 className={`${designTokens.typography.heading.h4} ${designTokens.colors.text.primary} ${designTokens.typography.font.heading} mb-3`}>
                Data Analysis & Visualization
              </h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center">
                  <SiPowerbi className="w-8 h-8 text-yellow-500" />
                  <span className="text-sm mt-1 text-gray-700">PowerBI</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiQlik className="w-8 h-8 text-green-500" />
                  <span className="text-sm mt-1 text-gray-700">QlikSense</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ViewSwitcher />
    </PageLayout>
  );
};

export default ResumePage;