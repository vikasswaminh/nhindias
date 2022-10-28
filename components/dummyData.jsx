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
    },
    {
        title: "Cloud Computing",
        slug: 'cloud-computing'
    }
]














export const blogs = [
    {
        seo: {
            title: "How many types of Hackers are there?",
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
    {
        seo: {
            title: "CISCO Certification Charter guide",
            description: 'Cisco training offers both basic and higher level certification. The fundamental level of certifications will assist you in obtaining an entry-level job in the IT industry.The most popular basic level of certification is CCNA, and according to level of expertise, people can do higher levels of certification too, like CCNP, CCIE, etc.',
            og_img: '/assets/images/blog/5.jpg',
        },
        slug: 'cisco-certification-charter-guide',
        category: {
            title: "Cisco",
            slug: 'cisco'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/5.jpg'
            },
            {
                type: 'h1',
                text: `CISCO Certification Charter guide`
            },
            {
                type: 'p',
                isDesc: true,
                text: `Cisco training offers both basic and higher level certification. The fundamental level of certifications will assist you in obtaining an entry-level job in the IT industry.The most popular basic level of certification is CCNA, and according to level of expertise, people can do higher levels of certification too, like CCNP, CCIE, etc.
The basics level of certification gives an idea of routing, switching, concepts of design, security, and storage networking. In this article we will discuss all the CISCO certification courses that are available on the market, from beginner to intermediate level. We will focus on a few points for each certification, such as: what is the purpose of doing certification; what topics are covered in the certification course; the benefits of doing certification; and what kind of job you will get after doing certification.
`
            },
            {
                type: 'p',
                text: `Let’s start with basic level of certification.`
            },
            {
                type: 'h3',
                text: `CCNA Certification 200-301`
            },
            {
                type: 'p',
                text: `CCNA stands for Cisco Certified Network Associate. People can do CCNA 200-301 training in both online and classroom mode. The certification is valid for three years. After giving the certification exam, you will receive the certificate of completion. That will ensure that you have the skills needed to start a career in the IT industry or in the networking domain.`
            },
            {
                type: 'p',
                text: `Doing CCNA certification gives you the concept of computer network, switching and routing, gives a clear understanding of using switch, routers, hubs and other cisco devices. `
            },
            {
                type: 'h3',
                text: `Benefits of CCNA Certification`
            },
            {
                type: 'p',
                text: `Lots of benefits are there to obtain a certification, it helps in to secure your job in IT industry or get entry in Networking domains. When a person become a CCNA certified, then you can try for better job or you can raise either negotiate a higher salary than other IT persons. Different types of technologies are coming every year, like SDN (Software-defined Networking) and cloud infrastructure.  `
            },
            {
                type: 'h3',
                text: `CCNA course topics`
            },
            {
                type: 'list',
                style: 'line',
                items: [
                    `Network Fundamentals`,
                    ` Network Access`,
                    ` IP connectivity`,
                    ` IP services`,
                    ` Network Security`,
                ]
            },
            {
                type: 'p',
                text: `Let’s have a look inside the CCNA course topics:`
            },
            {
                type: 'df',
                qs: 'Networking Fundamentals:',
                text: `This topic will teach the fundamentals of Networking like LAN, WAN, MAN, OSI Layers, TCP/ IP Layers.It helps in understanding of internetworking devices used on network like nic, hubs, bridges, Switches, Routers, Brouters, Modems.Also provide the good understanding of Internet protocol, ARP protocol, ICMP protocol and many other protocols used in networking.`
            },
            {
                type: 'df',
                qs: 'Network Access:',
                text: ` Network access technology are relevant to entry-level IT roles and networking roles. This topic has various sub categories of network access like: configuration of VLANs, configuration and diagnostics of inter-switch connectivity, configure and verify cisco discovery protocol and LLDP, Cisco wireless architecture and AP nodes, WLAN components, WLC management access connections.`
            },
            {
                type: 'df',
                text: ` IP connectivity has various topics inside, like routing table components. This routing table components topic will help you to understand the concept of how routers are forwarding decisions. Other topics within IP connectivity include how to configure and verify IPV4 and IPV6 static routing, which provides an overview of how static routers are manually added to the routing table using "ip route" or "ipv6 route." First-hop redundancy protocols (FHRP) are a class of protocols that allow multiple routers on the same subnet to behave as a single default router for the hosts in that subnet.`,
                qs: 'IP Connectivity:'
            },
            {
                type: 'df',
                text: ` DHCP and how it helps in programmed IP setup, as well as the utilisation of upper leg tendons in sifting traffic in our organizations, and how it helps in assisting gadgets in an organisation with getting to the web. In this part, we will take a gander at other IP benefits that you want to be aware of as a CCNA. We will take a gander at high accessibility utilising HSRP, VRRP, and GLBP, NTP, and SYSLOG.`,
                qs: 'IP Services:'
            },
            {
                type: 'df',
                text: ` In the CCNA course, there is a topic on network security, where you have to learn the basics of network security technologies and the use of Cisco devices to monitor the network security. Lots of Cisco devices or network devices are used in an organization; Cisco ASA firewall, IPS, IronPort C & S series, Junipers, PaloAlto firewalls, etc. to ensure that the network is 100% secure.`,
                qs: `Network Security:`
            },
            {
                type: 'p',
                text: `After successfully completing the CCNA certification, you can give the certification exams for CCNP enterprise and CCIE enterprise certification. Now let’s take a look at enterprise level certification.`,

            },
            {
                type: 'h3',
                text: `CCNP Certification`,
            },
            {
                type: 'p',
                text: `CCNP stands for Cisco Certified Network Professional. It is an enterprise infrastructure training program. In this certification programme, Cisco introduced advanced technologies like Cisco DNA Center, Cisco SDWAN, Cisco Encore, and the ENRASI Module. So, for CCNP certification, there are two exam modules: the core exam and the concentration exam.`,
            },
            {
                type: 'df',
                text: `It focuses on your knowledge of enterprise infrastructure, including IPv4 and IPv6 architecture, virtualization, infrastructure, security, and automation. This core exam is also a qualifying exam for CCIE enterprise infrastructure and CCIE enterprise wireless certification. After passing the core exam, candidates are able to schedule and take the CCIE lab within the validity of their core exam.
In the core exam students have to enroll in 350-401 ENCOR, which is Implementing and operating Cisco Enterpise Network Core Technologies`,
                qs: "-Core exam: "
            },
            {
                type: 'df',
                text: `It focuses on industry-specific topics such as network-design, SD-WAN, wireless, and automation. Students can prepare for concentration exams by taking the corresponding Cisco training course.
In the concentration exam, students have to choose any one module from a given six modules. Let’s see which of the six modules come under the concentration exam.`,
                qs: "-Concentration exam: "
            },
            {
                type: 'list',
                style: 'numbers',
                items: [
                    ` Implementing Cisco Enterprise Advanced Routing and Services  300 - 410 ENARSI`,
                    ` Implementing Cisco SD - WAN Solutions 300 - 415 ENSDWI`,
                    ` Designing Cisco Enterprise Networks 300 - 420 ENSLD`,
                    ` Designing Cisco Enterprise Wireless Networks 300 - 425 ENWLSD`,
                    ` Implementing Cisco Enterprise Wireless Networks 300 - 430 ENWLSI`,
                    ` Implementing Automation for Cisco Enterprise Solutions 300-435 ENAUTO`,
                ]
            },
            {
                type: 'p',
                text: `So in core exam, students have to clear the ENCOR module. ENCOR exam takes 120 minutes of exam duration, which covers six major branches, i.e. architecture virtualization, infrastructure, automation, network security. Let’s have a look inside of the ENCOR module syllabus.
`
            },
            {
                type: 'list',
                items: [
                    `Examining Cisco Enterprise Network Architecture`,
                    `Understanding Cisco Switching Paths`,
                    `Implementing Campus LAN Connectivity`,
                    `Building Redundant Switched Topology`,
                    `Implementing Layer 2 Port Aggregation`,
                    `Understanding EIGRP`,
                    `Implementing OSPF`,
                    `Optimizing OSPF`,
                    `Exploring EBGP`,
                    `Implementing Network Redundancy`,
                    `Implementing NAT`,
                    `Introducing Virtualization Protocols and Techniques`,
                    `Understanding Virtual Private Networks and Interfaces`,
                    `Understanding Wireless Principles`,
                    `Examining Wireless Deployment Options`,
                    `Understanding Wireless Roaming and Location Services`,
                    `Examining Wireless AP Operation`,
                    `Understanding Wireless Client Authentication`,
                    `Troubleshooting Wireless Client Connectivity`,
                    `Introducing Multicast Protocols`,
                    `Introducing QoS`,
                    `Implementing Network Services`,
                    `Using Network Analysis Tools`,
                    `Implementing Infrastructure Security`,
                    `Implementing Secure Access Control`,
                    `Understanding Enterprise Network Security Architecture`,
                    `Exploring Automation and Assurance Using Cisco DNA Center`,
                    `Examining the Cisco SD - Access Solution`,
                    `Understanding the Working Principles of the Cisco SD - WAN Solution`,
                    `Understanding the Basics of Python Programming`,
                    `Introducing Network Programmability Protocols`,
                    `Introducing APIs in Cisco DNA Center and vManage`,
                ]
            },
            {
                type: 'p',
                text: `In the concentration exam, most of the candidates choose the ENARSI module. ENARSI exam takes 90 minutes of exam duration, which covering four major branches, i.e. OSI model layer 3 enviornment, VPN technologies, infrastructure security and services. So let’s have a look  inside the ENARSI syllabus. `
            },
            {
                type: 'list',
                style: 'numbers',
                items: [
                    `Implementing EIGRP`,
                    `Optimizing EIGRP`,
                    `Troubleshooting EIGRP`,
                    `Implementing OSPF`,
                    `Optimizing OSPF`,
                    `Troubleshooting OSPF`,
                    `Configuring Redistribution`,
                    `Troubleshooting Redistribution`,
                    `Implementing Path Control`,
                    `Implementing Internal Border Gateway Protocol(IBGP)`,
                    `Optimizing BGP`,
                    `Implementing MP - BGP`,
                    `Troubleshooting BGP`,
                    `Exploring MPLS`,
                    `Introducing MPLS L3 VPN Architecture`,
                    `Introducing MPLS L3 VPN Routing`,
                    `Configuring Virtual Routing and Forwarding(VRF) - Lite`,
                    `Implementing DMVPN`,
                    `Implementing DHCP`,
                    `Introducing IPv6 First Hop Security`,
                    `Securing Cisco Routers`,
                    `Troubleshooting Infrastructure Security and Services`,
                    `Troubleshooting with DNA Center Assurance`,

                ]
            },
            {
                type: 'h3',
                text: `Benefits of CCNP Certification:`
            },
            {
                type: 'list',
                items: [
                    `Experienced leaders will help to get trained.`,
                    `Vast range of career options.`,
                    `It helps to get up - to - date in network technologies.`,
                    `Helps to raise salary or get promoted.`,

                ]
            },
            {
                type: 'h2',
                text: `Cisco SD-WAN Certification`
            },
            {
                type: 'p',
                text: `The Cisco SD-WAN training course is designed in such a manner that students can gain the skills and knowledge necessary to implement, configure, manage, and troubleshoot Cisco SDWAN solutions. This course covers all the basics of Cisco SDWAN architecture and components, as well as provides knowledge of how to deploy Cisco SDWAN in both single-site and multi-site deployments, how to deploy initial configuration and management tasks, and how to troubleshoot common problems.`
            },
            {
                type: 'h3',
                text: `Course objectives:`
            },
            {
                type: 'list',
                items: [
                    `Explains how to implement WAN Edge devices`,
                    `Characterize and carry out cutting edge control approaches, like arrangements for custom topologies`,
                    `Implement and execute an Application- Aware Routing(AAR) policy`,
                    `Implementation of Direct Internet Access(DIA) and Cisco SD - WAN cloud entrance choices`,
                    `Despite Cisco SD - WAN help for multicast`,
                    `Review the device configuration setup layout and depict new highlights device configuration templetes.`,
                    `Describe choices for giving adaptability, high accessibility and redundancy`,
                ]
            },
            {
                type: 'h3',
                text: `Prerequisites:`
            },
            {
                type: 'p',
                text: `Before enrolling for this course, candidates should have the following knowledge and skills before taking this course:`
            },
            {
                type: 'list',
                items: [
                    `Information on Software - Defined Networking(SDN) concepts as applied to huge scope live organization network deployments`,
                    `Solid understanding of enterprise WAN design`,
                    `Solid understanding of routing protocol, which includes both inside and outside routing protocol operation`,
                    `Good knowledge of IPSec i.e, IP Security and Transport layer security(TLS)`,

                ]
            },
            {
                type: 'h3',
                text: `Course Syllabus: `
            },
            {
                type: 'list',
                items: [
                    `Cisco SD - WAN Overlay Network`,
                    `Cisco SD - WAN Routing Options`,
                    `Cisco SD - WAN Deployment`,
                    `Cisco SD - WAN Migration and Interoperability`,
                    `Cisco SD - WAN Policy Configuration`,
                    `Cisco SD - WAN Management and Operations`,
                    `Cisco Lab:`,

                ]
            },
            {
                type: 'list',
                style: 'line',
                items: [
                    `vManage Dashboard Overview`,
                    `vManage - Monitor - 1`,
                    `vManage - Monitor - 2`,
                    `vManage Tools`,
                    `OMP Configuration - Edge Devices - LAB`,
                    `OMP Configuration - vSmart Controllers - LAB`,
                    `OMP Verification - CLI - LAB`,
                    `OMP Verification - CLI - LAB`,
                    `OMP Verification - vManage - LAB`,
                    `VPN Configuration Feature Template - LAB`,
                    `VPN Interface Configuration - LAB`,
                    `VRRP Configuration and Verifcation`,
                    `OSPF Configuration Feature Template - LAB`,
                    `BGP Configuration Feature Template - LAB`,
                    `Device Template Configuration - LAB`,
                    `vEdge - Zero - Touch Provisioning LAB`,
                    `vEdge on - boarding through Manual configuration - LAB`,
                    `Configure Device using Device Template`,
                    `Adding additional configuration to device through device template - LAB`,
                    `OSPF Verification CLI & vManage`,
                    `Removing perticular configuration to device through device template - LAB`,
                    `Control Policy: Multi - Topology using Route Filtering`,
                    `Control Policy: Multi - Topology using TLOC change`,
                    `Control Policy - Hub - Spoke LAB`,
                    `Control Policy - Firewall Insertion between Branches`,
                    `App - Aware - Route - Policy - LAB`,
                    `Control Policy - Datacenter Preferences`,

                ]
            },
            {
                type: 'h3',
                text: `Benefits of Cisco SD-WAN Certification:`
            },
            {
                type: 'list',
                items: [
                    `Cisco SD - WAN provides a cloud - first infrastructure, which means Cisco SD - WAN has vManage console.We can use the vManage console to easily automate virtual private gateway deployment in IaaS and PaaS enviornments.`,
                    `The Cisco SD - WAN onRamp provides automated connectivity to IaaS and PaaS cloud enviornments without performing any manual processes.Cisco SD - WAN provide instant access to cloud traffic, allowing you to control your deployment at any time.`,
                    `Cisco SD - WAN provides end - to - end visibility into applications and infrastructure, real time information without any failure correlation.`,
                    `It helps to change policies according to predictable performance and categorization of application quality of service(QoS).`,
                ]

            },
            {
                type: 'h3',
                text: `CCIE Certification`
            },
            {
                type: 'p',
                text: `CCIE stands for Cisco Certified Internetwork Expert, it’s an expert level of certification. CCIE is designed for architects and engineers, and involves configuration, troubleshooting, and integration.
`
            },
            {
                type: 'p',
                text: ` CCIE consists of two major courses:`
            },
            {
                type: 'list',
                items: [
                    `CCIE Enterprise Training Course`,
                    `CCIE Security Training course`,
                ]
            },
            {
                type: 'h3',
                text: `CCIE Enterprise training course`
            },
            {
                type: 'p',
                text: `CCIE applicants are recommended to have five to seven years of involvement in planning, designing, and deploying enterprise networking technologies and solutions before taking the test. So, to pass the CCIE Enterprise Infrastructure exam, candidates should have to pass two exams.`
            },
            {
                type: 'list',
                items: [
                    `Cisco Enterprise Network Core Technologies Implementation and Operation(Encore 350 - 401)`,
                    `(Lab exam) CCIE Enterprise Infrastructure v1.0`,

                ]
            },
            {
                type: 'p',
                text: `Course Syllabus:`
            },
            {
                type: 'list',
                items: [
                    ` Network Infrastructure`,
                    `Software Defined Infrastructure`,
                    `Transport Technologies and Solutions `,
                    `Infrastructure Security and Services`,
                    `Infrastructure Automation and Programmability`,
                ]
            },
            {
                type: 'p',
                text: `The CCIE Enterprise Course will teach you all of the latest technologies such as Cisco DNA Center, SDWAN, and automation technologies such as python, ansible, and selenium, among others. This course covers around 6 months of training that covers multiple Cisco IT certifications.`
            },
            {
                type: 'h3',
                text: `CCIE Security Training v6.0: `
            },
            {
                type: 'p',
                text: `This course is also the same as the CCIE Enterprise training course.This course contains the following topics:
            CCNA 200 - 301`
            },
            {
                type: 'list',
                items: [
                    `CCNP Enterprise – Encore Module`,
                    `CCNP Enarsi Module`,
                    `CCNP SDWAN Module`,
                    `CCNP Security – Cisco FTD`,
                    `CCNP Security – Cisco WSA`,
                    `CCNP Security – Cisco ESA`,
                    `CCNP Security – Cisco IPS`,
                    `CCNP Security – Cisco VPN`,
                ]
            },
            {
                type: 'p',
                text: `CCIE Security v6.0 course takes 6 months of training programme and covers the full lifecycle of complex security solutions and provides technologies from designing and deploying to operating and optimizing.`
            },
            {
                type: 'p',
                text: `CCIE Security practical exam gives candidates 8 hours of time to complete and requires a candidate to plan, design, deploy, execute, and optimize network security solutions to protect a given network. They have to implement programming and automate the network within the exam, as per course topics mentioned below.`
            },
            {
                type: '',
                items: [
                    `Perimeter and Intrusion Prevention Security(20 %)`,
                    `Secure Connectivity and Segmentation(20 %)`,
                    `Infrastructure Security(15 %)`,
                    `Identity and Incident Management, Information, and Access Control(25 %)`,
                    `Advanced Threat Security and Content Security(20 %) `,

                ]
            },
            {
                type: 'h3',
                text: `Benefits of CCIE certification:`
            },
            {
                type: '',
                items: [
                    `Highest paid IT certification`,
                    `Increase the salary packages`,
                    `Career growth opportunities`,
                    `Career support and guidance provided after completing cisco cerification`,
                    `Trainers are Cisco certified and experienced`,
                    `Concepts are explained through theoretically and practically practicing on the Cisco devices.`,
                    `Lab is available for students 24* 7, also availability of trainers/ Mentor 24 * 7`,

                ]
            },
            {
                type: 'p',
                text: `The Cisco ISE training comes under the CCIE Enterprise training course. When candidates enrol for the CCIE certification, they will also learn the Cisco ISE training. Let’s have a look inside the Cisco ISE training.`
            },
            {
                type: 'h3',
                text: `Cisco ISE Training`
            },
            {
                type: 'p',
                text: `Cisco ISE stands for Implementating and configuring Cisco Identity Services Engine. This course provides a brief understanding of an identity and access control policy platform, and skills to implement and use of Cisco ISE, including security policy, profiling services, web authentication and guest access services, endpoint compliance services.`
            },
            {
                type: 'p',
                text: `Objectives of Cisco ISE Course:`
            },
            {
                type: 'list',
                items: [
                    `It describes Cisco ISE deployments, including core deployment components, and also describes how they communicate to create a firm security architecture.Describe the benefits of such a deployment and how every Cisco ISE capacity adds to these benefits.`,
                    `Describe the process and configure the components related to 802.1X and MAC authentication bypass, identity management, and certificate services.`,
                    `Describe how Cisco ISE policy strategy sets are utilized to carry out authentication and authorization, and how to use this ability to address the issues in your organization.`,
                    `Describe and configure web authentication, processes, operations, and visitor services, including visitor access parts and different visitor access situations.`,
                    `Design Cisco ISE profiling services and describe how to monitor these services to improve your situational awareness about network - associated endpoints.`,
                    `Describe best practises for conveying this profiler’s administration in your specific environment.`,
                ]
            },
            {
                type: 'h3',
                text: `Prerequisites `
            },
            {
                type: 'p',
                text: `To take the full advantage from this course, candidate should have the following prior knowledge:`
            },
            {
                type: 'list',
                items: [
                    `Knowledge of the Cisco IOS Programming Command Line Connection point(CLI)`,
                    `Knowledge of Cisco AnyConnect Secure client`,
                    `Knowledge of Microsoft Windows OS`,
                    `Knowledge of 802.1X`,

                ]
            },
            {
                type: 'p',
                text: `If we have a look at the outline of this course, then it will be:`
            },
            {
                type: '',
                items: [
                    `Cisco ISE Architecture and Deployment`,
                    `Cisco ISE Policy Enforcement`,
                    `Web Authentication and Guest Services`,
                    `Cisco ISE Profiler`,
                    `Cisco ISE BYOD`,
                    `Cisco ISE Endpoint Compliance Services`,
                    `Working with Network Access Devices`,


                ]
            },
            {
                type: 'h3',
                text: `Benefits of Cisco ISE training:`
            },
            {
                type: 'list',
                items: [
                    `Increase overall efficiency`,
                    `It helps IT professional, mostly for networking and IT teams.`,
                    `Effortless management of network components`,
                    `Policy making is easy and easily implement it in whole organizations.`,
                    `Enhanced experience for guest and permanent users`,
                ]
            },
            {
                type: 'p',
                text: `In this article we have seen all the certifications from entry-level to experienced-level. Candidates can choose certification according to their expertise. Begineers can start with CCNA certification, and experienced people who are already working in the IT industry can choose any certification according to their experience in the field.`
            },
        ]
    },
    {
        seo: {
            title: "Is google cloud certification worth it?",
            description: 'On a daily basis, we all hear the word “google” Our lives are more connected to the internet than to any other thing at the moment.',
            og_img: '/assets/images/blog/6.jpg',
        },
        slug: 'is-google-cloud-certification-worth-it',
        category: {
            title: "Cloud Computing",
            slug: 'cloud-computing'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/6.jpg'
            },
            {
                type: 'h1',
                text: `Is google cloud certification worth it?`
            },
            {
                type: 'p',
                isDesc: true,
                text: `On a daily basis, we all hear the word “google” Our lives are more connected to the internet than to any other thing at the moment. There are many opportunities that are open to the public. The role of professional architect is one of those. Whether it is worth it or not, we will read about it in this post.`
            },
            {
                type: 'p',
                text: `Before dive into google cloud certification worth it or not, first let’s check what is cloud computing and what are the benefits of it?`
            },
            {
                type: 'h3',
                text: `Cloud computing, In Simple word what is Cloud and why we need it?`
            },
            {
                type: 'p',
                text: `The name “Cloud” came from a network design that a network engineer used to represent the location of various network devices. This network design looks like a cloud. `
            },
            {
                type: 'p',
                text: `The idea of network-based cloud computing was first introduced in the 1960s, but it came into existence in 2006 when Google CEO Eric Schmidt introduced this term to an industry conference. After that, AWS and Google introduced their cloud platform app engine in 2008.`
            },
            {
                type: 'p',
                text: `An organisation’s data is more valuable than any other thing, so they have to build their own data storage. Data storage has become a priority in all fields due to the increase in computer and mobile users. Large and small-scale businesses spend a lot of money to maintain their data.`
            },
            {
                type: 'p',
                text: `It’s not easy for all businesses to afford the high cost of IT infrastructure. Cloud computing is a cheaper solution for them. It is possible that its efficiency in storing data, computation, and less maintenance cost has attracted even bigger businesses. On an in-house IT server, you have to pay a lot of attention to make sure that the system runs smoothly.`
            },
            {
                type: 'p',
                text: `Whenever a technical glitch comes, you are completely responsible, and it will require a lot of time and money for repair. In cloud computing, the service provider takes full responsibility for the technical problems.`
            },
            {
                type: 'p',
                text: `Hardware and software demand is decreased by cloud computing. The cloud computing system interface software is the only thing that a user needs to run, and the cloud network takes care of the rest. Cloud computing requires strong IT support and a storage hub.`
            },
            {
                type: 'p',
                text: `Our data is stored on a cloud server while we access e-mail. The infrastructure behind the cloud is not visible. As far as user-friendliness and functionality are concerned, it is less important that the cloud services are on front-end and back-end technologies. Individual users can connect to the cloud system from their own devices.`
            },
            {
                type: 'h3',
                text: `Types of clouds:`
            },
            {
                type: 'list',
                style: 'df',
                items: [
                    {
                        qs: 'Private cloud : ',
                        text: `Its use for intra-business interactions. Where the computing resources are operated by the same organization.`
                    },
                    {
                        qs: 'Community cloud : ',
                        text: `computing resources are used for a community and organizations.`
                    },
                    {
                        qs: 'Public cloud : ',
                        text: `It’s usually for business to consumer.The computing resource is operated by government, education institute or business organization.`
                    },
                    {
                        qs: 'Hybrid cloud: ',
                        text: `It’s a combination of business to business or business to consumer.`
                    },
                ]
            },
            {
                type: 'h3',
                text: `Benefits of using cloud computing :`
            },
            {
                type: 'p',
                text: `Cloud computing has made it possible to run IT operations without much in-house resources. Many organisations are adopting cloud services because of the potential for cost savings. Cloud computing allows you to use services as per your requirements and pay for what you use. `
            },
            {
                type: 'p',
                text: `Cloud computing has made it possible to run IT operations without much in-house resources.`
            },
            {
                type: 'list',
                items: [
                    `Less Maintenance`,
                    `Rapid software updates`,
                    `Backup and restore`,
                    `Performance `,
                    `Storage capacity increased`,
                    `Data security`,
                    `Performance increase`,
                    `Value for money`,

                ]
            },
            {
                type: 'p',
                text: `There are numerous certifications available in the cloud industry that can assist a candidate to increase their competitiveness at work. Such certificates are available in a variety of fields, including cloud computing. As we previously mentioned, one such position is Google Professional Cloud Architect. Here, we’ll learn more about it and the specifics of the exam required to earn this certification.`
            },
            {
                type: 'h3',
                text: `What is Google Professional Cloud Architect Certification?`
            },
            {
                type: 'p',
                text: `Everyone will be able to understand that this certification is provided by “Google.”  This suggests that network architects have a reputation for being extremely knowledgeable about a broad range of Google products and technologies. They are proficient in all the tools and technology that Google provides.`
            },
            {
                type: 'p',
                text: `The cloud architect should be knowledgeable about cloud design, development, and implementation. A Google Certified Cloud Architect not only has a thorough understanding of all of Google’s cloud technologies, but they also know how to identify and record the business goals of an organisation and apply the appropriate solutions to every requirement.`
            },
            {
                type: 'p',
                text: `You might be wondering about what a “cloud architect” is and what its roles and responsibilities are.`
            },
            {
                type: 'p',
                text: `A cloud architect is in charge of transforming a project’s technical specifications into the architecture and design  that will serve as the end product’s compass and of bridging the gap between complex business challenges and cloud solutions. `
            },
            {
                type: 'p',
                text: `In general, a cloud architect’s skill set varies by organisation, however some common ones include:`
            },
            {
                type: 'list',
                items: [
                    `Thorough knowledge of networking`,
                    `Operating system expertise`,
                    `Awareness of available data storage alternatives`,
                    `Software skills`,

                ]
            },
            {
                type: 'h3',
                text: `Certification details:`
            },
            {
                type: 'list',
                style: 'df',
                items: [
                    {
                        text: `Google Cloud Professional Architect Certified`,
                        qs: `Name of certification: `
                    },
                    {
                        text: `2hrs`,
                        qs: `Exam time: `
                    },
                    {
                        qs: `Exam Cost: `,
                        text: `$200 (excluding Tax)`
                    },
                    {
                        text: `MCQ Multiple choice questions`,
                        qs: `Exam Type: `
                    },
                    {
                        text: `English, Japanese`,
                        qs: `Exam Language: `
                    },
                    {
                        text: `50`,
                        qs: `Number of questions: `
                    },
                    {
                        text: `70% or more than 70%`,
                        qs: `Passing score: `
                    },
                    {
                        text: `None`,
                        qs: `Prerequisites: `
                    },
                    {
                        text: `2 years`,
                        qs: `Certification validation: `
                    },
                ]
            },
            {
                type: 'h3',
                text: `Course topics:`
            },
            {
                type: 'list',
                items: [
                    `Designing and planning cloud solution architecture`,
                    `Infrastructure management and provisioning for cloud solutions`,
                    `Designing for security and compliance`,
                    `Evaluating and enhancing business and technological processes`,
                    `Manage implementation`,
                    `Ensuring solution and operations reliability`,

                ]
            },
            {
                type: 'h2',
                text: `Is Google Cloud Certification worth it?`
            },
            {
                type: 'p',
                text: `We will now address the actual question that we addressed after learning everything we need to know about the certification and exam.`
            },
            {
                type: 'p',
                text: ` There are numerous opportunites for cloud architect, and the Google cloud architect is well worth the investment for as many administrators and network architects as possible.It turns out to be a superb certification for almost all IT professionals who are eager to advance their careers and are closer to accomplishing this goal.`
            },
            {
                type: 'p',
                text: `The Google cloud platform service is used worldwide, and top MNCs companies are also using their services.like Verizon, Twitch Interactive, CenturyLink, LinkedIn Corp, Facebook, Intel, Yahoo, Marriott International, SAP, and many more.`
            },
            {
                type: 'p',
                text: `Google is achieving considerable gains by winning relationships with big businesses like Sabre, even if this is not comparable to AWS and Azure revenues, which do several times that each and every quarter.GCP comes after AWS and Azure, but still, its revenues are much higher than theirs.`
            },
            {
                type: 'p',
                text: `Another benefit of this certification is that it increases a candidate’s attractiveness to employers.They are some of the most skilled and adaptable architects of cloud solutions in business.`
            },
        ]
    },
]