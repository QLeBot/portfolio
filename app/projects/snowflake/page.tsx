import React from 'react';
import PageLayout from '../../components/page-layout';
import { SiPython, SiAmazon, SiSnowflake } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { designTokens } from '@/lib/design-tokens';

const SnowflakePage = () => {
  return (
    <PageLayout theme="dark">
      {/* Project Header */}
      <section className={`flex-grow ${designTokens.layout.container} py-10 pt-40`}>
        <h1 className={`mb-4 py-8 pt-4 ${designTokens.typography.heading.h1} ${designTokens.colors.text.light.primary} ${designTokens.typography.font.heading}`}>
          Modern Data Stack with Snowflake
        </h1>
        <p className={`${designTokens.typography.body.large} mb-4 ${designTokens.colors.text.light.primary}`}>
          A comprehensive data engineering project leveraging Snowflake, dbt, Python, AWS, and SQL to build a scalable modern data stack.
        </p>
        <p className={`${designTokens.typography.body.base} mb-8 ${designTokens.colors.text.light.primary} max-w-3xl`}>
          This project demonstrates end-to-end data pipeline development, from data ingestion to transformation and analytics, 
          using industry-standard tools and best practices for modern data engineering.
        </p>
      </section>

      {/* Image Section */}
      <section className={`${designTokens.layout.section} ${designTokens.spacing.section.py}`}>
        <div className={designTokens.layout.container}>
          <div className={`${designTokens.colors.bg.cardDark} p-6 ${designTokens.layout.card.base} flex items-center justify-center min-h-[400px]`}>
            <div className="text-center">
              <p className={`${designTokens.colors.text.light.primary} ${designTokens.typography.body.large} mb-4`}>
                Project Architecture Diagram
              </p>
              <div className="w-full h-64 bg-gray-700 rounded flex items-center justify-center">
                <span className={designTokens.colors.text.light.secondary}>
                  Image placeholder - Add your architecture diagram or project image here
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Context */}
      <section className={`${designTokens.layout.section} ${designTokens.spacing.section.py}`}>
        <div className={designTokens.layout.container}>
          <h2 className={`${designTokens.typography.heading.h2} ${designTokens.colors.text.light.primary} ${designTokens.typography.font.heading} mb-8`}>
            Project Context
          </h2>
          <div className={`${designTokens.colors.bg.cardDark} p-6 ${designTokens.layout.card.base}`}>
            <p className={`${designTokens.colors.text.light.primary} mb-4 ${designTokens.typography.body.base}`}>
              This project showcases a modern data stack implementation using Snowflake as the core data warehouse, 
              combined with dbt for data transformation, Python for data processing and automation, AWS for cloud infrastructure, 
              and SQL for data querying and analysis.
            </p>
            <p className={`${designTokens.colors.text.light.primary} mb-4 ${designTokens.typography.body.base}`}>
              The architecture follows best practices for scalable data engineering, including automated data pipelines, 
              version-controlled transformations, and cloud-native infrastructure. The stack enables efficient data ingestion, 
              transformation, and analytics workflows that can scale with business needs.
            </p>
            <p className={`${designTokens.colors.text.light.primary} ${designTokens.typography.body.base}`}>
              Key focus areas include data quality, pipeline reliability, cost optimization, and enabling self-service analytics 
              for stakeholders across the organization.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className={`${designTokens.layout.section} ${designTokens.spacing.section.py}`}>
        <div className={designTokens.layout.container}>
          <h2 className={`${designTokens.typography.heading.h2} ${designTokens.colors.text.light.primary} ${designTokens.typography.font.heading} mb-8`}>
            Technical Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`${designTokens.colors.bg.cardDark} p-6 ${designTokens.layout.card.base}`}>
              <h3 className={`${designTokens.typography.heading.h4} ${designTokens.colors.text.light.primary} ${designTokens.typography.font.heading} mb-3`}>
                Tech Stack
              </h3>
              <div className="space-y-4">
                <div className="flex justify-start gap-8">
                  <div className="flex flex-col items-center">
                    <SiSnowflake className="w-8 h-8 text-cyan-400" />
                    <span className={`text-sm mt-1 ${designTokens.colors.text.light.primary}`}>Snowflake</span>
                  </div>
                </div>
                <div className="flex justify-start gap-8">
                  <div className="flex flex-col items-center">
                    <SiPython className="w-8 h-8 text-blue-500" />
                    <span className={`text-sm mt-1 ${designTokens.colors.text.light.primary}`}>Python</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaDatabase className="w-8 h-8 text-white" />
                    <span className={`text-sm mt-1 ${designTokens.colors.text.light.primary}`}>SQL</span>
                  </div>
                </div>
                <div className="flex justify-start gap-8">
                  <div className="flex flex-col items-center">
                    <SiAmazon className="w-8 h-8 text-orange-400" />
                    <span className={`text-sm mt-1 ${designTokens.colors.text.light.primary}`}>AWS</span>
                  </div>
                </div>
                <div className="flex justify-start gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 flex items-center justify-center bg-orange-500 rounded">
                      <span className="text-white text-xs font-bold">dbt</span>
                    </div>
                    <span className={`text-sm mt-1 ${designTokens.colors.text.light.primary}`}>dbt</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${designTokens.colors.bg.cardDark} p-6 ${designTokens.layout.card.base}`}>
              <h3 className={`${designTokens.typography.heading.h4} ${designTokens.colors.text.light.primary} ${designTokens.typography.font.heading} mb-3`}>
                Key Features
              </h3>
              <ul className={`list-disc list-inside space-y-2 ${designTokens.colors.text.light.primary} ${designTokens.typography.body.base}`}>
                <li>Cloud-native data warehouse with Snowflake</li>
                <li>Data transformation pipelines using dbt</li>
                <li>Python-based data processing and automation</li>
                <li>AWS infrastructure for data storage and compute</li>
                <li>SQL-based analytics and reporting</li>
                <li>Version-controlled data transformations</li>
                <li>Automated data quality checks</li>
                <li>Scalable and cost-effective architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Details */}
      <section className={`${designTokens.layout.section} ${designTokens.spacing.section.py}`}>
        <div className={designTokens.layout.container}>
          <h2 className={`${designTokens.typography.heading.h2} ${designTokens.colors.text.light.primary} ${designTokens.typography.font.heading} mb-8`}>
            Architecture & Implementation
          </h2>
          <div className={`${designTokens.colors.bg.cardDark} p-6 ${designTokens.layout.card.base}`}>
            <p className={`${designTokens.colors.text.light.primary} mb-4 ${designTokens.typography.body.base}`}>
              The modern data stack is built on a foundation of Snowflake for data warehousing, providing scalable compute 
              and storage capabilities. Data transformations are managed through dbt, enabling version control, testing, and 
              documentation of data models.
            </p>
            <p className={`${designTokens.colors.text.light.primary} mb-4 ${designTokens.typography.body.base}`}>
              Python scripts handle data ingestion, API integrations, and custom data processing tasks. AWS services provide 
              the cloud infrastructure, including storage (S3), compute resources, and orchestration capabilities.
            </p>
            <p className={`${designTokens.colors.text.light.primary} ${designTokens.typography.body.base}`}>
              SQL is used throughout for data querying, analysis, and creating views and materialized tables that power 
              downstream analytics and business intelligence tools.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SnowflakePage;
