import React from 'react'

interface WorkExperienceItem {
  startDate: string;
  endDate?: string;
  companyName: string;
  companyLogo?: string;
  jobTitle: string;
  description: string[];
  companyLink?: string;
}

const workExperienceData: WorkExperienceItem[] = [
  {
    startDate: "August 2024",
    endDate: "Present",
    companyName: "Topo",
    jobTitle: "Senior Software Engineer",
    description: [
      "Building AI SDRs and training them to help sales teams close deals faster.",
    ],
  },
  {
    startDate: "December 2023",
    endDate: "August 2024",
    companyName: "Artisan AI",
    jobTitle: "Senior Software Engineer",
    description: [
      "Spearheaded the integration of multiple CRMs including HubSpot and Salesforce into the platform, enhancing lead management efficiency.",
      "Achieved a remarkable 99% improvement in email deliverability through meticulous optimization strategies.",
      "Implemented advanced techniques to enhance email quality and refine email filtering mechanisms, resulting in a more streamlined communication process.",
      "Developed comprehensive analytics infrastructure, enabling real-time monitoring and analysis of all lead and email-related activities within the platform.",
    ],
  },
  {
    startDate: "June 2023",
    endDate: "December 2023",
    companyName: "LeadSquared",
    jobTitle: "Senior Software Engineer",
    description: [
      "Automated release pipeline that helps faster releases and 100% efficiency.",
      "Automated Region Setup Infra for LeadSquared to create all its infra in new region on requirement basis. Automating it via Terraform, AWS, RDS, Powershell scripts.",
    ],
  },
  {
    startDate: "June 2021",
    endDate: "June 2023",
    companyName: "LeadSquared",
    jobTitle: "Software Engineer",
    description: [
      "Part of DevOps Portal team which helps in automating infra management of LeadSquared",
      "Automated RDS Cluster upgrade / downgrade activity with very less downtime around 1-10 seconds in production",
      "Devised notification system for the platform supporting both web and email notifications on based of certain actions custom selected by user",
    ],
  },
];

const WorkExperience: React.FC = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>Work  Experience</h1>
      
<ol className="relative border-s border-gray-200 dark:border-gray-700">
    {workExperienceData.map((item, index) => (              
    <li key={index} className={`mb-10 ms-4 ${
              index === workExperienceData.length - 1 ? "mb-0" : ""
            }`}>
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.startDate} - {item.endDate || "Present"}</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.jobTitle} at {item.companyName}</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
    </li>
     ))}       
</ol>


    </div>
  )
}

export default WorkExperience
