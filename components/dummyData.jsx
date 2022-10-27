import { FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { BsWhatsapp, BsFillTelephoneFill } from 'react-icons/bs'

export const navData = [
    {
        label: "Home",
        slug: "/"
    },
    {
        label: "Placement Programs",
        slug: "#",
        submenu: [
            {
                heading: 'Cyberx Masters',
                slug: 'cyberx-masters',
                description: '100% Placement Program in Cyber Security'
            },
            {
                heading: 'Cloud Masters',
                slug: 'cloud-masters',
                description: '100% Placement program in Multicloud and Cloud security'
            },
            {
                heading: 'CCIE Enterprise',
                slug: 'ccie-enterprise-infra-training',
                description: 'Most demanded Networking certification- 100 % Placement'
            },
            {
                heading: 'CCIE Security',
                slug: 'ccie-security-training-course',
                description: 'Most demanded Networking certification- 100% Placement'
            },
        ]
    },
    {
        label: "All Courses",
        slug: "/all-courses"
    },
    {
        label: "Blog",
        slug: "/blog"
    },
]

export const slideData = [
    '/images/banner/3.jpg',
    '/images/banner/2.jpg',
    '/images/banner/1.png',
]

export const socialData = [
    { link: 'https://www.linkedin.com/company/networkers-home', icon: <FaLinkedinIn className='text-lg' /> },
    { link: 'https://www.youtube.com/user/networkershome/videos', icon: <FaYoutube className='text-lg' /> },
    { link: 'https://api.whatsapp.com/send?phone=+919611027980', icon: <BsWhatsapp className='text-lg' /> },
    { link: 'tel:+91-9811027980', icon: <BsFillTelephoneFill className='text-lg' /> },
    { link: 'matilto:info@networkershome.com', icon: <GrMail className='text-lg' /> },
]


export const courses = [
    {
        title: 'Cloud Masters',
        link: '/cloud-masters',
        desc: 'Learn technologies of tomorrow that can give you an edge over competitors. We have created a unique combination of Cloud technologies and Cloud security practices. Cloud Masters takes you into the Deep dive world of cloud computing with real projects. Its first program in india which offers you multi-cloud expertise in AWS,Google cloud and Azure domain',
        projects: [
            {
                0: 'Cisco CCNA',
            },
            {
                1: 'AWS Associate , AWS Professional and AWS Security'
            },

            {
                2: 'GCP And MS AZURE'
            },

            {
                3: 'Cloud and Cloud Security Projects'
            },
        ]
    },
    {
        title: 'Cyberx Masters',
        link: '/cyberx-masters',
        desc: 'Our 6 Months Cyber Security Program is designed to train fresh graduates. Program covers some of the latest IT Certifications in demand like CCNA, CCNP- 3 modules, CEH and CHFI, Penetration testing/ Cloud Pen testing along with automation using python and ansible. Lifetime video access to course.',
        projects: [
            {
                0: 'Cisco CCNA',
            },
            {
                1: 'CEH, CHFI'
            },

            {
                2: 'Bug Bounty hunting'
            },

            {
                3: '3 Advanced security Projects'
            },
        ]
    },
    {
        title: 'CCIE Enterprise Integrated',
        link: '/ccie-enterprise-infra-training',
        desc: 'This program suitable for candidates who want to build career in Core Networking. Cover SDN, SDWAN and more advance technologies',
        img: '/assets/images/people4.jpeg'
    },
    {
        title: 'CCIE Security Integrated',
        link: '/ccie-security-training-course',
        desc: '6 Months Training program suitable for candidates who want to build a career in Cyber Security and Network security domain',
        img: '/assets/images/people4.jpeg'

    },
    {
        link: '/ccna-ccnp-training-online-combo',
        title: 'CCNA + CCNP Combo',
        desc: 'This program suitable for candidates who want to build career in Networking Industry. Learn MPLS,SDWAN and SDACCESS technologies',
    },
    {
        link: '/engineer-starter-program',
        title: 'Engineer starter program',
        desc: 'We are pleased to announce our new Engineer starter package for students who are 12th pass or pursuing 12th class',
    },
]

export const reviews = [
    {
        name: 'Kiran Vishnu',
        message: 'I completed CCNA, CCNP Enterprice , PCNSE training from Networkershome. They are the best training institute for networking courses. I know many students from different background are placed at big companies. Networkershome is achieving this through well trained & experience faculties and very effective placement team.',
        rating: 5
    },
    {
        name: 'Sri Chakraverthi',
        message: 'If anyone want to start a carrier in networking domain then its a perfect place for it. Believe me here we can get very good environment for lab practices and self studies and there are lot of supportive trainers who can teach good and also guide you for your placements and CCIE lab exam also',
        rating: 5
    },
    {
        name: 'Sachin Bangari',
        message: `My personal experience in networkers home is very very good. I had joined for a course here and got 2 offers immediately after completion of my course.My advice to the candidates willing to do networking course is that, this is the Best training institute in Bangalore in networking domain, the concepts clarity, the lab facility anytime we need, the support and respect from the management and special mention the HR Preethi ma'am will support everyone to get placed it you are serious about your learning.`,
        rating: 5
    },
    {
        name: 'Purthviraj BN',
        message: `I have joined this institute in jan 2021 and i enrolled for ccie security integrated traing and recently got placed in Capgemini through Networkers Home. Networkers home has best quality training and best lab facilities . Here training starts from the scratch and give the in-depth knowledge about on each topics. Lab facilites are really good. And all the trainers are very friendly and helpfull.`,
        rating: 5
    },
    {
        name: 'Alekh Parekh',
        message: `If you are looking to start your career in the networking domain, I would definitely suggest Networkers home because they provide the best training for CCNA, CCNP and CCIE. I have opted for the CCIE  security integrated course where the trainers teach you from the basics of networking to high-level security concepts. And one more thing which is worth mentioning are their trainers, who are highly knowledgeable and will answer all your questions. If you are preparing for CCIE exams, they provide you with server access 24/7.`,
        rating: 5
    },
    {
        name: 'Belari Kiran',
        message: `I've joined this institute in January 2021 and I've opted for CCIE Security Integrated program and I got placed in Tejas Networks Ltd in R&D with an excellent package through NetworkersHome. NetworkersHome has the best quality in training, best quality in lab facility and the trainers here are the certified professional who trains from beginner level to advance level in every course.`,
        rating: 5
    },
    {
        name: 'Sunil Sundar U',
        message: `I am from different stream ( Mech ) having 4years experience in different domain. Actually I want to switch my career to networking domain so I preferred and enrolled my CCNP Enterprise course in Networkers home which is one of the best networking institute in India. With help of NH team I improved my technical skills in networking. NH gave me lot of opportunities to attend the interview and also provided technical interview preparation session which helped me to crack the interview`,
        rating: 5
    },
    {
        name: 'Girish Dhini',
        message: `I joined this institute to take networking course they suggested me with CCIE security. They provide very good training all the trainers are very friendly.  They provide CCNA CCNP CCIE CYBERSECURITY CEH AWS and other firewall training.. if interested please do join the institute.`,
        rating: 5
    },
    {
        name: 'Vinod Ravi',
        message: `Hi I'm Vinod ravi and I have completed CCIE Security  from Networkers home. NH provided us quality of training and 24*7 lab access more over faculties are very friendly. NH helps us to build the carrier in network Security domain. I got placed in Rakuten India as a network security engineer with a very good package. I would like to thank all NH faculties,`,
        rating: 5
    },
    {
        name: 'Divakar Naik K',
        message: `Hi I'm Divakar Naik and I completed CCNA and CCNP switching and routing from Networkers home. The NH provided us quality of training faculties are very friendly. This NH helps us to build the carrier in networking domain. I got placed in IBM as a network analyst with a very good package. I would like to thanks all NH faculties, manager and HR prithi mam who is take care about our placement....This is the best place for who all are planning to get into networking domain.`,
        rating: 5
    },
    {
        name: 'Kiran Vishnu',
        message: 'I completed CCNA, CCNP Enterprice , PCNSE training from Networkershome. They are the best training institute for networking courses. I know many students from different background are placed at big companies. Networkershome is achieving this through well trained & experience faculties and very effective placement team.',
        rating: 5
    },
    {
        name: 'Sri Chakraverthi',
        message: 'If anyone want to start a carrier in networking domain then its a perfect place for it. Believe me here we can get very good environment for lab practices and self studies and there are lot of supportive trainers who can teach good and also guide you for your placements and CCIE lab exam also',
        rating: 5
    },

]

export const coursePageGridData = [
    {
        heading: 'CCNA 200-301',
        text: 'CCNA is entry-level Networking certification in the Cisco domain. Covers various technologies like Routing/switching and automation fundamentals in detail.',
        slug: '/ccna-course-in-bangalore-india'
    },
    {
        heading: 'CCNP Enterprise',
        text: 'Cisco Advanced Level certifications. We teach ENCORE, ENARSI and Cisco SDWAN Modules in our CCNP Enterprise course',
        slug: '/ccnp-enterprise-training-bangalore',
        highlight: true
    },
    {
        heading: 'Cisco SDWAN',
        text: `Most demanded course today for working professionals and must have technology to upgrade your career. Learn from India's best instructors`,
        slug: '/cisco-sdwan-training-online'
    },
    {
        heading: 'Cisco DNAC',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '/cisco-dna-center-training-online-dnac-ise'
    },
    {
        heading: 'CEH',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '/ceh-v-11-certification-training-course'
    },
    {
        heading: 'F5 LTM',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '/f5-ltm-v-13-training-course'
    },
    {
        heading: 'PALO ALTO',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '/palo-alto-firewall-course'

    },
    {
        heading: 'Fortigate',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '/fortigate-firewall-course'
    },
    {
        heading: 'AWS Assocaite',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '/aws-associate-training-course'
    },
    {
        heading: 'AWS Professional',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '/aws-professional-training-course'
    },
    {
        heading: 'AWS Security',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '/aws-security-training-course'
    },
    {
        heading: 'AWS Advance Networking',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '/aws-advance-networking-course'
    },
    {
        heading: 'CCIE Enterprise',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '/ccie-enterprise-infra-training'
    },
    {
        heading: 'CCIE Security',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '/ccie-security-training-course'
    },
    {
        heading: 'CCNA+CCNP Combo',
        text: `Advanced level certifications for highly qualified Cisco engineers. Must be minimum CCNP certified before taking this course.`,
        slug: '/ccna-ccnp-training-online-combo'
    },
    {
        heading: 'Engineer starter Program',
        text: `We are pleased to announce our new Engineer starter package for students who are 12th pass or pursuing 12th class`,
        slug: '/engineer-starter-program'
    },
    {
        heading: '300-715 Cisco SISE Certification Training Course',
        text: `The Implementing and Configuring Cisco Identity Services Engine (SISE) v3.0 course demonstrates how to use and position the Cisco ISE (Identity Services Engine).  `,
        slug: '/cisco-sise-training'
    },
    {
        heading: 'Administering Cisco Umbrella Operations v2.0 Certification Training Course',
        text: `Cisco is one of the world's most prominent software and networking enterprises, specializing in networking, cloud, and security solutions.`,
        slug: '/administering-cisco-umbrella-operations-certification-training-course'
    },
    {
        heading: 'AZ-104: Microsoft Azure Administrator Certification Training Course',
        text: `One of the fastest-growing business cloud platforms, Microsoft Azure, enables professionals to deploy more secure cloud environments.`,
        slug: '/microsoft-azure-administrator-certification-training'
    },
    {
        heading: 'AZ-500: Microsoft Azure Security Technologies Certification Training Course',
        text: `Everyone is migrating to the cloud, regardless of their organization type. Asset security is crucial for a business to ensure data integrity, given the rise in cybersecurity assaults and breaches worldwide`,
        slug: '/microsoft-azure-security-technologies-training'
    },
    {
        heading: 'Cisco ACI Troubleshooting Training (ACITS) Course',
        text: `Cisco has retained its position as the world’s leading software-based solution provider, delivering modern cloud-based networking and security solutions`,
        slug: '/cisco-aci-troubleshooting-training'
    },
    {
        heading: 'CCNP Cisco Enterprise ENCOR 350-401 Certification Training Course',
        text: `Cisco is constantly growing as a leading cloud-oriented network and security solutions provider.`,
        slug: '/ccnp-cisco-encor-training'
    },
    {
        heading: 'AZ-204 Developing Solutions for Microsoft Azure Training Course',
        text: `There is a rising need for Microsoft Azure Certified specialists as firms undergo digital transformations and transfer their operations to the cloud.`,
        slug: '/developing-solutions-for-microsoft-azure-training'
    },
    {
        heading: 'Implementing Cisco Enterprise Advanced Routing and Services (ENARSI) Course',
        text: `Technological advancements have made it feasible to maintain accuracy and regularly monitor a global corporate environment standard.`,
        slug: '/cisco-enarsi-training'
    },
    {
        heading: 'Implementing and Operating Cisco Security Core Technologies (SCOR) Course',
        text: `Register for Implementing and Operating Cisco Security Core Technologies (SCOR) course on Networkers Home.`,
        slug: '/cisco-scor-ccnp-security-training'
    },
    {
        heading: 'Python Programming for Cisco Network Engineers (PCNE) Course',
        text: `You might wonder why you need to learn Python as a network engineer or someone with a similar background.`,
        slug: '/python-programming-for-cisco-network-engineers-course'
    },
    {
        heading: 'Securing Networks with Cisco Firepower Next Generation Firewall (SSNGFW) v1.0 Training Course',
        text: `Technology plays a significant role in today's corporate environment, enabling success and maintaining a competitive advantage.`,
        slug: '/cisco-next-generation-firewalls-ngfw-training'
    },
]

export const coursePageProgramsData = [
    {
        title: 'Cloud Masters',
        link: '/cloud-masters',
        desc: 'Learn technologies of tomorrow that can give you an edge over competitors. We have created a unique combination of Cloud technologies and Cloud security practices. Cloud Masters takes you into the Deep dive world of cloud computing with real projects. Its first program in india which offers you multi-cloud expertise in AWS,Google cloud and Azure domain',
        img: '/assets/images/people4.jpeg'
    },
    {
        title: 'Cyber Masters',
        link: '/cyberx-masters',
        desc: 'Our 6 Months Cyber Security Program is designed to train fresh graduates. Program covers some of the latest IT Certifications in demand like CCNA, CCNP- 3 modules, CEH and CHFI, Penetration testing/ Cloud Pen testing along with automation using python and ansible. Lifetime video access to course.',
        img: '/assets/images/people4.jpeg'
    },
    {
        title: 'CCIE Enterprise Integrated',
        link: '/ccie-enterprise-infra-training',
        desc: 'This program suitable for candidates who want to build career in Core Networking. Cover SDN, SDWAN and more advance technologies',
        img: '/assets/images/people4.jpeg'
    },
    {
        title: 'CCIE Security Integrated',
        link: '/ccie-security-training-course',
        desc: '6 Months Training program suitable for candidates who want to build a career in Cyber Security and Network security domain',
        img: '/assets/images/people4.jpeg'

    },
    {
        link: '/ccna-ccnp-training-online-combo',
        title: 'CCNA + CCNP Combo',
        desc: 'This program suitable for candidates who want to build career in Networking Industry. Learn MPLS,SDWAN and SDACCESS technologies',
        img: '/assets/images/people4.jpeg'
    },
    {
        link: '/ccie-security-training-course',
        title: 'Blockchain Masters',
        desc: 'Blockchain Masters program for building long-lasting career in Web3 technologies. Hands on lab with projects',
        img: '/assets/images/people4.jpeg'
    },
]







export const categories = [
    {
        title: "Computer Networks",
        slug: "computer-networks",
    },
    {
        title: "Cisco",
        slug: "cisco",
    },
    {
        title: "Placement Program",
        slug: 'placement-program'
    }

]














export const blogs = [
    {
        seo: {
            title: "How many types of Hackers are there? - Networkers Home",
            description: 'The term ‘Hacker’ first came into the world through MIT (Massachusetts Institute of Technology), when highly skilled professionals solved different problems using programming languages and came into existence in the year 1960s.',
            og_img: '/assets/images/blog/1.jpg',
        },
        slug: 'types-of-hackers',
        category: {
            title: "Computer Networks",
            slug: 'computer-networks'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/1.jpg'
            },
            {
                type: 'h1',
                text: `How many types of Hackers are there?`
            },
            {
                type: 'p',
                isDesc: true,
                text: `The term ‘Hacker’ first came into the world through MIT(Massachusetts Institute of Technology), when highly skilled professionals solved different problems using programming languages and came into existence in the year 1960s.`
            },
            {
                type: 'p',
                text: `The first hacker’s conference took place in the year 1993 in Las Vegas, Nevada, and the conference was conducted by DEFCON.Every year in Las Vegas, Nevada, where government agents, security professionals, and black and white hat hackers from all over the world attend that conference, DEFCON is one of the most popular and largest hacker’s as well as a security consultant’s conferences.`
            },
            {
                type: 'p',
                text: `In the late 70s, hackers and cyber criminals figured out how wired technologies work and how they could be used to gain additional advantage or misuse the technology.So in 1970, the field of hacking is concerned about hacking.`
            },
            {
                type: 'p',
                text: `This is the beginning of the history of hackers.Now a days, hackers are evolving their hacking skills according to new technologies.Hackers primarily target small businesses, and a hacker attack occurs every 40 seconds.`
            },
            {
                type: 'p',
                text: `Now let’s see how many types of hackers are there and which is one is the best to choose.`
            },
            {
                type: 'h2',
                text: `Types of Hackers:`
            },
            {
                type: 'p',
                text: `Ther are different types of hackers. We will try to understand the difference between them.`
            },
            {
                type: 'list',
                items: [
                    `White hat hackers`,
                    `Black hat hackers`,
                    `Grey hat hackers`,
                    `Red hat hackers`,
                    `Blue hat hackers`,
                    `Green hat hackers`,
                    `Government sponsored hackers`,
                ]
            },
            {
                type: 'h3',
                text: `White Hat Hackers :`
            },
            {
                type: 'p',
                text: `
                White hat hackers are called ethical hackers. These types of hackers don’t have any bad intentions or harm organisation. They log into the system to test or evaluate its security measures, don’t have malicious intent, and are focused on helping the organisation improve its security measures.`
            },
            {
                type: 'p',
                text: `It will be harder for a hacker to get into a system managed by a large company than it will be for a system operated by a small business. For that reason, it’s very important for online business to make sure it takes strong preventative measures by installing quality anti-malware security, spyware removal tools, and firewall software defense.`
            },
            {
                type: 'h3',
                text: `Black Hat Hackers :`
            },
            {
                type: 'p',
                text: `Black-hat hackers are mostly criminals because they use there hacking skills to harm organisation or steal data from small or big organisations. Black hat hackers may want to spy on staff and customers.`
            },
            {
                type: 'p',
                text: `Their motives can vary from financial to political, or they can simply be showing off their skills. Since they know how serious the legal consequences are, these hackers do everything they can to remain anonymous.`
            },
            {
                type: `h3`,
                text: `Grey Hat Hackers :`
            },
            {
                type: `p`,
                text: ` A grey - hat hacker is a security expert who may sometimes violate laws but usually does not have the malicious intent of a black - hat hacker.A “grey - hat hacker” is someone who does both black - hat and white - hat activities.They usually hack a system without the owner’s permission and it takes time to find vulnerabilities in it.They often ask for a price to fix the problem.This isn’t considered a crime, but it isn’t ethical either.`
            },
            {
                type: `p`,
                text: `The term “grey - hat hacker” was first used in the late 1990s.It comes from the concepts of white hat hackers and black hat hackers. `
            },
            {
                type: `h3`,
                text: `Red Hat Hackers :`
            },
            {
                type: `p`,
                text: `The James Bonds of the virtual world are red - hat hackers.They are not opposed to taking back what the cyber attackers stole from their victims.`
            },
            {
                type: `p`,
                text: `A hacker wearing a red hat is trying to stop black hat hackers.Red - hat hackers do everything they can to stop the bad guys, including taking matters into their own hands.They have the capability to launch full- scale attacks to take down cyber attackers and destroy their resources.`
            },
            {
                type: `h3`,
                text: `Blue Hat Hackers :`
            },
            {
                type: `p`,
                text: `There are two types of definitions for “blue - hat hacker”.Let’s explore both of them`
            },
            {
                type: `p`,
                text: ` First, they are revenge seekers.These people don’t care about money or fame.They hack to take revenge against a person, employer, institution, or government.Blue - hat hackers use various cyber attacks on their enemies to cause harm to their data, websites, or devices.`
            },
            {
                type: `p`,
                text: ``
            },
            {
                type: `p`,
                text: `
Sometimes blue - hat hackers use various hacking techniques to gain unauthorised access to their targets’ email clients or social media profiles.They have the ability to send emails and post inappropriate messages from those profiles to take revenge.`
            },
            {
                type: `p`,
                text: ` The second definitions is that they are outside security professionals.They are often invited to test the new software before it is released.Sometimes companies organise conferences for blue - hat hackers to find bugs in their online systems.Blue - hat hackers conduct various cyber - attacks test while causing no harm to the organization.`
            },
            {
                type: `h3`,
                text: `Green Hat Hackers :`
            },
            {
                type: `p`,
                text: `Green - hat hackers are the young people in the world of hacking.They are not aware of the security mechanisms and the inner working of the web, but they are keen learners and determined to elevate their position in the hacker community.`
            },
            {
                type: `p`,
                text: `They don’t want to harm you.They may or may not be aware of the inner workings of the web.That’s why sometimes they can be harmful because they are not always aware of the consequences of their actions or how to fix them.`
            },
            {
                type: `h3`,
                text: `Government Sponsored Hackers :`
            },
            {
                type: `p`,
                text: `Government hackers are allowed to find vulnerabilities in electronic products to gain remote access to information of interest.Government investigators can use this information to monitor user activity and interfere with device operation.`
            },
            {
                type: `p`,
                text: `The hackers are sponsored by the Nation/ state.`
            },
            {
                type: `h3`,
                text: `Which is the best type of hacker ?`
            },
            {
                type: `p`,
                text: `All the hackers have their own specific rules and regulations, except the black hat hackers.A person who is thinking of becoming the best hacker should choose to be an ethical hacker, i.e., a white hat.They basically don’t have any bad intentions towards harming the organization.There are numerous path to becoming an ethical hacker.`
            },
            {
                type: `p`,
                text: `Below, we will see what the certification paths are to become an ethical hacker.`
            },
            {
                type: `h3`,
                text: `Certifications for learning Ethical hacking: `
            },
            {
                type: 'list',
                items: [
                    `CEH: Certified Ethical Hacker(Theoritical)`,
                    `CEH Master: Practical`,
                    `CHFI: Computer Hacking Forensic Investigator`,
                    `CPENT: Certified Penetration Testing Professional`,
                    `CND: Certified Network Defender`,
                    `CTIA: Certified Threat Intelligence Analyst`,
                    `C - CSE: Certified Cloud Security Engineer`,
                    `CSA: Certified SOC Analyst`,
                ]
            },

            {
                type: 'p',
                text: `A Person can choose any certification as per their interest.All the certification courses mentioned above are beginner to intermediate level certification to get entry into cyber security as an ethical hacker.`,
            },
            {
                type: 'h3',
                text: `Conclusion:`,
            },
            {
                type: 'p',
                text: `In this article we have seen all the types of hackers and heard the description of each hacker.Each and every hacker has their own different roles and responsibilities.Some of them wants to save the world, but some of them wants to give harm to organizations or individual people.`,
            },
            {
                type: 'p',
                text: `The journey of learning hacking is nice to take, and you can use these skills in the right ways.This will help every one to build a secure network organization.`,
            },
        ]
    },
    {
        seo: {
            title: "Top 7 Reasons for Choosing NETWORKERS HOME ",
            description: 'With the ever growing Security domain, demand for Cisco CCIE Security certification has substantially risen. The aspirants into this field, planning to build a career in the IT industry can opt for CCIE Security course at Networkers Home – India’s best CCIE training Company.',
            og_img: '/assets/images/blog/2.avif',
        },
        slug: 'with-the-ever-growing-security-domain-demand-for-cisco',
        category: {
            title: "Cisco",
            slug: 'cisco'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/2.avif'
            },
            {
                type: 'h1',
                text: `Top 7 Reasons for Choosing NETWORKERS HOME`
            },
            {
                type: 'h3',
                text: `Asia’s Largest Lab Facilities`
            },
            {
                type: 'p',
                classes: 'italic',
                text: `“The goal of education is the advancement of knowledge and the dissemination of truth”- John F. Kennedy`
            },
            {
                type: 'p',
                isDesc: true,
                text: `Networkers Home, being the No.1 Cisco training institute in India offers the Asia’s Largest Cisco labs for its students. Being the best institute offering Cisco courses, Networkers Home provides advanced and world class lab facilities for our students worldwide.`
            },
            {
                type: 'p',
                text: `We have special lab setup for each of the courses and tracks we offer, labs at Networkers Home are undoubtedly the best and beyond comparison to any.`
            },
            {
                type: 'h3',
                text: `What makes our lab facilities the best in the industry?`
            },
            {
                type: 'p',
                text: ` Our labs are constantly updated as per the latest blueprint and checklist by Cisco, ensuring that our students get the best and latest technologies of the market.Every course at each level has a separate lab with variety of course specific devices and racks assembled.We provide our students with individual fully loaded racks with dedicated devices so that all our students can have an excellent learning experience. `
            },
            {
                type: 'p',
                text: `Each lab for each course has fully loaded racks with dedicated devices for course practice.Apart from the availability of excellent lab facilities, complete lab assistance is also provided to our students.Certified and experienced lab instructors pay individual attention to each student to make our students skilled and highly proficient. `
            },
            {
                type: 'h3',
                text: `Networkers Home provides 24x7 lab facility for our students. `
            },
            {
                type: 'p',
                text: `We offer 24x7 lab access for our students so that they can practice any time they want without thinking about the timings.  With day and night open labs, one can access labs at any time they want.`
            },
            {
                type: 'p',
                text: `We offer online and on campus rack access, so that our students can be in their houses safely in this pandemic and continue their learning. `
            },
            {
                type: 'p',
                text: `We make sure the students get deep knowledge and learning on their practical aspect of the course rather than just focusing on the theoretical part. `
            },
            {
                type: 'h3',
                text: `Labs are available even on weekends and noted regular holidays.`
            },
            {
                type: 'p',
                text: ` Students can practice in their free days, when regular classes aren’t conducted.`
            },
            {
                type: 'h3',
                text: `We regularly update our equipment and devices as per the industry requirements and standards. `
            },
            {
                type: 'p',
                text: `We do this to make sure that our students will be the right fit for our industry.`
            },
            {
                type: 'p',
                text: `Certified and experienced lab instructors are available. Individual guidance is given on each student so that our students can acquire best training experience throughout the day`
            },
            {
                type: 'h3',
                text: `6. High Speed internet facility `
            },
            {
                type: 'p',
                text: `This is present for smooth working of all the equipment and devices`
            },
            {
                type: 'p',
                text: `With our excellent practical training we transform our students into a highly skilled professional ready to achieve great success.`
            },

        ]
    },
    {
        seo: {
            title: "What makes NH #1 CCIE Training company in ASIA",
            description: 'With the revolutionary changes in IT infrastructure and more businesses shifting to clouds, networks and networking professionals are facing tremendous pressure to align themselves with the technological trends of networking.',
            og_img: '/assets/images/blog/3.avif',
        },
        slug: 'networkers-home-asias-1-it-training-company',
        category: {
            title: "Placement Program",
            slug: 'placement-program'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/3.avif'
            },
            {
                type: 'h1',
                text: `What makes NH #1 CCIE Training company in ASIA`
            },
            {
                type: 'p',
                isDesc: true,
                text: ` Welcome to Networkers Home - Asia’s largest, most awarded and a top - notch IT training institute whose rich history, proven records of success and innovative training methodologies have helped transform lives and careers of students seeking professional training and impactful results.`
            },
            {
                type: 'p',
                text: `Founded in 2006 by seasoned technical professionals - Vikas Swami(Dual CCIE# 22239) and Khawar Butt(Hexa CCIE#12353 + CCDE #20110020, augmented with vast combined experience of 36 years in IT consulting, networking and training, Networkers Home has emerged as the industry leader setting a high benchmark in IT training and development space. `
            },
            {
                type: 'h3',
                text: `Our Heritage and Vision `
            },
            {
                type: 'p',
                text: `Over the course of the past 12 years in business, having witnessed the most rapid cycles of change and technology advancement, we have been matching pace with the innovation driving technologies in offering the highly demanded and reputed IT training with brilliance and bagged 22 awards for excellence. We have been at the forefront, outpacing the competition, guiding our students to acquire the cutting-edge technical knowledge and skills.`
            },
            {
                type: 'p',
                text: `The endeavour to constantly outdo ourselves in IT training has been our style since the beginning and it still continues as we explore infinite training innovations, work with the best technology experts of the nation, striving to carve careers, opening doors to plethora opportunities in IT and networking domain.`
            },
            {
                type: 'h3',
                text: `Training Excellence- What Differentiates Us?`
            },
            {
                type: 'p',
                text: `Our Uniqueness lies in our strong proven presence at designing, developing and delivering world-class IT training in diverse trending domains like Networking, Cloud Computing, Cyber Security, Business Management and many more, and carving a technology expert out of a technology enthusiast.`
            },
            {
                type: 'p',
                text: `Consistently stepping ahead with benchmarked training excellence, Networkers Home proudly owns the world record of producing 4000+ CCIEs for which Networkers Home is rated as the World’s Best CCIE Training Institute. Our CCIE results that speak for itself has placed us at the pinnacle of offering the best-in-class Cisco training and certification courses of different levels that include:`
            },
            {
                type: 'list',
                items: [
                    `CCNA Tracks – Routing and Switching, Security, Data Center and Collaboration`,
                    `CCNP Tracks - Routing and Switching, Security, Data Center and Collaboration`,
                    `CCIE Tracks - Routing and Switching, Security, Data Center and Collaboration`,
                ]
            },
            {
                type: 'h3',
                text: `Our Flagship Offerings- Integrated 100% Job Guaranteed Courses`
            },
            {
                type: 'p',
                text: `We proudly claim to be the inventors of the integrated 100% job guaranteed CCIE program and architects of successful careers. Our well-knit technical program pedagogy laying emphasis on practical training, for the following job-oriented expert-level courses in different fields of networking, cyber security, network security and cloud computing have helped us rank #1 in the industry.`
            },
            {
                type: 'p',
                text: `Our flagship courses include:`
            },
            {
                type: 'list',
                items: [
                    `Integrated CCIE Routing and Switching`,
                    `Integrated CCIE Security`,
                    `Cloud Masters`,
                    `CYBERX Masters`,
                ]
            },
            {
                type: 'h3',
                text: `What Makes Networkers Home Rank #1?`
            },
            {
                type: 'p',
                text: `Following reasons have helped us become a premium IT training institute:`
            },
            {
                type: 'list',
                items: [
                    `World’s Biggest Team Of Hexa CCIEs`,
                    `Excellent research and training division`,
                    `Expertly Authored Workbooks / Video Lessons`,
                    `Technical Excellence Build Up With Extensively Designed Job - Oriented Curriculums`,
                    `Master Classes On 200 + IT Programs Delivered By A Pool Of 50 + Certified And Experienced Instructors`,
                    `Personality Excellence Build Up By IIM Alumni`,
                    `Formal Recruitment Tie - Up With 125 + Top IT Companies`,
                    `World - Class Campus Infrastructure `,
                    `Convenient Learning Formats - Instructor - Led Online and Classroom Training at Flexible Schedules`,
                    `24 * 7 Access To Ultra - Modern Lab `,
                    `Hands - On Practical Lab Training on Latest Cisco And Multivendor Devices`,
                ]
            },

        ]
    },
    {
        seo: {
            title: "7 Networking Trends To Watch Out In 2020",
            description: 'With the revolutionary changes in IT infrastructure and more businesses shifting to clouds, networks and networking professionals are facing tremendous pressure to align themselves with the technological trends of networking.',
            og_img: '/assets/images/blog/4.avif',
        },
        slug: '7-networking-trends-to-watch-out-in-2020',
        category: {
            title: "Cisco",
            slug: 'cisco'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/4.avif'
            },
            {
                type: 'h1',
                text: `7 Networking Trends To Watch Out In 2020`
            },
            {
                type: 'p',
                isDesc: true,
                text: ` With the revolutionary changes in IT infrastructure and more businesses shifting to clouds, networks and networking professionals are facing tremendous pressure to align themselves with the technological trends of networking. Networking industry needs to keep pace and evolve rapidly with the changes in technology, software and hardware updates. It is certainly a gate pass for networking professionals, opening doors to new positions, better and effective ways of handling complex networks. All the migrations and IT infrastructure change implementations require the IT and networking professionals to possess expert networking skills and in-depth understanding of the advanced technologies, to ensure swift and smooth transitions.`
            },
            {
                type: 'p',
                text: `The overwhelming trends include:`
            },
            {
                type: 'df',
                qs: 'SDN: ',
                text: `Software-defined networking (SDN) refers to an advanced architecture, deployed to ensure network agility and flexibility. It leads to an improved network control system and enables enterprises to respond quickly to the constantly changing business needs. SDN has replaced traditionally dedicated hardware with virtualized hardware and software, benefiting organizations with reduced hardware footprints and low operational costs. `
            },
            {
                type: 'df',
                qs: `SD-WAN: `,
                text: `It is a major movement towards designing and delivering a flexible network infrastructure, ensuring effective routing and distribution of network traffic. SD-WAN’s security secret lies in the segmentation, enabling isolation of small and high priority networks to protect them against network attacks. Organizations tend to leverage a hybrid approach utilizing traditional MPLS and LTE connectivity while using SD-WAN and delivering network transport efficiencies on the go. Various SD-WAN deployment projects are expected to take place in 2019 and beyond, requiring skilled SD-WAN professional experts to deliver them with agility and accuracy.`
            },
            {
                type: 'df',
                qs: 'Multi-Cloud:',
                text: ` With more and more organizations shifting their IT dependencies over the cloud, there is an emerging culture of using multi-cloud services. It is mainly because of tight competition in the cloud domain and constant expansion of cloud solutions and services being made available at competitive prices. This requires IT network professionals to acquire an in-depth understanding of cloud technologies, rather multi-cloud expertise can reap you even better opportunities and benefits.`
            },
            {
                type: 'df',
                qs: 'Cloud Repatriation: ',
                text: `Where one side, the industry is experiencing rapid cloud adoption, the other side is falling back to the on-premise solutions, marking the importance of traditional data centres. The organizations are repatriating from cloud to have equilibrium and a balanced IT
infrastructure architecture. `
            },
            {
                type: 'df',
                qs: 'Edge Computing: ',
                text: `Edge computing aims to change the networking picture and streamlining the flow of traffic from IoT devices, processing and analyzing the collected data on the nearest device instead of sending it over long routes to cloud or data centre. Creating this mesh network including microdata centres reduces the backhaul traffic to the central data repository preventing data leakages and adding to the network security. `
            },
            {
                type: 'df',
                qs: 'IoT: ',
                text: `Powerful IoT platform has empowered organizations with improved uptime and lowered the operational costs. Deploying robust, secure and automated IoT solutions help the organizations derive the maximum value from the data, and ensure smooth running of operations. As per the changing trends, deep IoT integration into the networks and systems, have actually led to a collection of such voluminous data, that it is imposing a challenge in building correlation and eventually lowering down the rate of decision making, thus requiring networking industry to make essential changes to counter and address them effectively.`
            },
            {
                type: 'df',
                qs: 'Intent-based Networking:  ',
                text: `It is an innovative approach to networking, where special software helps networking professionals plan, design, configure and automatically implement the changes to the network, improving its availability and agility. The technology has its core embedded in AI and machine learning. This intelligent software works to maintain the network state as well and adopt corrective measures to avoid any deviations.`
            },
            {
                type: 'h3',
                text: `How to keep pace with the changing networking trends?`
            },
            {
                type: 'p',
                text: `You need to move with the ever-changing networking trends to accelerate your career and become recognized as an expert professional in the global arena. The top networking technologies that can help you stay ahead of the curve in 2019 include:`
            },
            {
                type: 'list',
                items: [
                    `Network Routing and Switching`,
                    `Network Security`,
                    `Cloud Security`,
                    `Network Virtualization`,
                    `Data Center`,
                    `IOT`,
                    `Collaboration`,

                ]
            },
            {
                type: 'h3',
                text: `Conclusion`
            },
            {
                type: 'p',
                text: `You can certainly take a lead in networks and networking technology by acquiring proficient skills, hands-on experience and extensive knowledge of top trends. Networkers Home helps you achieve top-notch IT networking skills through all-encompassing training and certification courses. Our pool of 10+ instructors help you walk through the course and pass the relevant certification exams with striking scores. Our Cisco certification training and courses are aligned to instil a hands-on understanding of the most recent networking platforms, technologies and best practices. `
            },
        ]
    },
]