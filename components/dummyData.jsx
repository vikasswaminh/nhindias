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
                slug: '/cyberx-masters',
                description: '100% Placement Program in Cyber Security'
            },
            {
                heading: 'Cloud Masters',
                slug: '/cloud-masters',
                description: '100% Placement program in Multicloud and Cloud security'
            },
            {
                heading: 'CCIE Enterprise',
                slug: '/ccie-enterprise-infra-training',
                description: 'Most demanded Networking certification- 100 % Placement'
            },
            {
                heading: 'CCIE Security',
                slug: '/ccie-security-training-course',
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
    },
    {
        title: "Amazon Web Services",
        slug: 'aws'
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
    {
        seo: {
            title: "100% Job Guarantee Courses",
            description: 'This blog focus on step-by-step guide, to start your career in IT domains through 100% job guarantee courses available in online.',
            og_img: '/assets/images/blog/7.jpg',
        },
        slug: 'job-guarantee-courses',
        category: {
            title: "Placement Program",
            slug: 'placement-program'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/7.jpg'
            },
            {
                type: 'h1',
                text: `100% Job Guarantee Courses`
            },
            {
                type: 'p',
                isDesc: true,
                text: `This blog focus on step-by-step guide, to start your career in IT domains through 100% job guarantee courses available in online.`
            },
            {
                type: 'p',
                text: `Just imagine a candidate had all the required knowledge to clear the technical certification exam, but don’t have a proper guidance on how to get a 100% job gurantee. Some of the major questions of the technical students who wish to get a job in the IT industry are explained by us.`,
            },
            {
                type: 'p',
                text: `You are at the right place if you are looking for the 100% job guarantee course. Networkers Home has more than 15 years of experience in IT domains and helps students by providing a step-by-step guide to start your carrer in IT domains.`,
            },
            {
                type: 'p',
                text: `Lifetime access to recorded video. Live technology and real-time scenarios have been designed for our courses. We offer online, classroom, and corporate training for more than 100+ IT certificaitons.`,
            },
            {
                type: 'p',
                text: `Begineers have many questions in their mind, at below we have answered few of the top asked questions about how to start career in IT domains:`,
            },
            {
                type: 'h3',
                text: `What are the different domains in IT industry?`,
            },
            {
                type: 'p',
                text: `There are lots of short-term courses that are available for students to get started in their career in the IT industry. Most of the course also give the assurance of a 100% job guarantee after completing the course. `,
            },
            {
                type: 'p',
                text: `At Networkers Home, we have courses for beginners, intermediates, and experienced. Below there is a list of different domains you can choose and get any certification according to your experience.`,
            },
            {
                type: 'list',
                items: [
                    `Networking Courses`,
                    `Cyber Security Courses`,
                    `Cloud Architect Courses`,
                    `Firewall Courses`,
                ]
            },
            {
                type: 'p',
                text: `These courses are used for job placement. We have also made combo courses to get you a job even if you are fresher. These job-oriented courses give a 100% job guarantee as they fill up with all the needed skills by the top MNCs companies.`,
            },
            {
                type: 'p',
                text: `If you want to be the best in the industry, you should have all the in-demand technical skills.`,
            },
            {
                type: 'h3',
                text: `If you want to be the best in the industry, you should have all the in-demand technical skills.`,
            },
            {
                type: 'p',
                text: `There are lots of IT certifications out there in market, but only a few certifications give the assurance of  a 100% job guarantee after completing the certification.`,
            },
            {
                type: 'p',
                text: `In the IT industry, most of the courses are from networking backgrounds, cloud computing, and cyber security. Those domains are in high demand now a days, also be in demand for the next 10-20 years. So we will talk about one-by-one domains and we will see what the certifications are available for each domain.`,
            },
            {
                type: 'p',
                text: `First start with networking domains. In these domains, different certifications are available. Like:`,
            },
            {
                type: 'list',
                items: [
                    `CCNA Certification`,
                    `CCNP Enterprise Certification`,
                    `Cisco SDWAN Certification`,
                    `CCNA + CCNP Combo Certification`,
                ]
            },
            {
                type: 'p',
                text: `There are several job opportunities or different positions available for networking domain:`,
            },
            {
                type: 'list',
                items: [
                    `Network Engineer`,
                    `System Engineer`,
                    `Networks Admin`,
                    `Technical Support Engineers`,
                    `Network Security Engineer / Specialist`,
                    `Information Technology Manager`,

                ]
            },
            {
                type: 'p',
                text: `Next, let’s see what the certifications are available for cloud domain:`,
            },
            {
                type: 'list',
                items: [
                    `AWS Associate`,
                    `AWS Professional`,
                    `AWS Security`,
                    `AWS Advance Networking`,
                    `Microsoft Azure Administrator Certification`,
                    `Microsoft Azure Security Technologies`,
                ]
            },

            {
                type: 'p',
                text: `Job Opportunities or available positions available for cloud AWS or Azure Certified:`,
            },
            {
                type: 'list',
                items: [
                    `Cloud Architect`,
                    `Cloud Developer`,
                    `Cloud System Admin`,
                    `Cloud Devops Engineer`,
                    `Cloud Network Engineer`,
                    `Cloud Data Architect`,
                    `Cloud Consultant`,

                ]
            },
            {
                type: 'p',
                text: `At last, Cyber Security is the most demand branch of IT Industry. Most of the passed out candidates and degree-pursuing candidates want to get a 100% job guarantee course. `,
            },
            {
                type: 'p',
                text: `The best courses for entry-level cyber security jobs are:`
            },
            {
                type: 'list',
                items: [
                    `CEH Certification`,
                    `CCIE Security`,
                    `PenTesting Certification`,
                    `CHFI Certification`,
                ]
            },
            {
                type: 'p',
                text: `The above four certifications are the best courses available on the market. These certification will provide a basic understanding of ethical hacking, malware analysis, web application security, firewall certification, and python network automation.`,
            },
            {
                type: 'p',
                text: `Let’s see what the career options are available for Cyber Security certification:`,
            },
            {
                type: 'list',
                items: [
                    `Penetration Tester`,
                    `Vulnerability Assessment`,
                    `Security Researcher`,
                    `Bug Bounty Hunter`,
                    `Security Engineer`,
                    `Cyber Security Consultant`,
                    `Network Security Engineer`,
                ]
            },
            {
                type: 'h3',
                text: `Which domains has the highest salary?`,
            },
            {
                type: 'p',
                text: `When a candidate is looking for job-oriented courses, it’s hard to select the best course which will help them get their first job after completing certification. We provide 100% job guarantee courses that will help students start their career in networking, cloud computing, cyber security, Firewall and many more.`,
            },
            {
                type: 'p',
                text: `When a person starts his career in IT domains, he/she can start his career with a minimum of 4 lakhs to 7 lakhs as per the skills and knowledge the person possesses.`,
            },
            {
                type: 'p',
                text: `Below I have mentioned a few of the certifications which provide the best salary:`,
            },
            {
                type: 'list',
                items: [
                    `AWS Cloud Certification`,
                    `CCIE Certification`,
                    `Azure Cloud Certification`,
                ]
            },
            {
                type: 'h3',
                text: `Which course is best to get a job?`,
            },
            {
                type: 'p',
                text: `The best courses to get a job with a 100% job guarantee are Cisco certifications and AWS or Azure cloud certifications. The best certifications are mentioned below :`,
            },
            {
                type: 'list',
                items: [
                    `CCNA Certification`,
                    `CCNP Certification`,
                    `CCIE Certification`,
                    `AWS Certifications`,
                    `Azure Certifications`,
                ]
            },
            {
                type: 'p',
                text: `We are providing training for all the certifications that are mentioned above with 15+ years of hand-on experience in the technical domain. We also provide assistance for job placement and help them improve their communication skills.`,
            },
            {
                type: 'h3',
                text: `Which course to choose as a fresher?`,
            },
            {
                type: 'p',
                text: `Most of the Cisco courses, cloud courses and cyber security courses are for freshers. People can start their career by slecting any one of the courses, and they will get assistance from our top trainers, who provide them with a 100% job assurance.`,
            },
            {
                type: 'p',
                text: `Cisco courses like CCNA and CCIE are the best courses to start a career in the IT industry.`,
            },
            {
                type: 'p',
                text: `Cloud courses like AWS Associate and Microsoft Azure Administrator Certification are the best courses for cloud domains to start a career in cloud computing.`,
            },
            {
                type: 'p',
                text: `Cyber Security Courses like: CEH Certification, CCIE Security Certification. CEH is an entry-level certification in Cyber Security and CCIE certification is an advanced level of certification, but there are no prerequisities to get entry into CCIE certification.`,
            },
            {
                type: 'h3',
                text: `What are the courses we provide with 100% job placements?`,
            },
            {
                type: 'p',
                text: `We offer a wide range of IT courses. All of the courses we offer are 100% job guranteed. The courses we provide are:`,
            },
            {
                type: 'list',
                items: [
                    `CCIE Enterprise infrastructure training`,
                    `Cyberx Masters Course`,
                    `Cloud Masters Course`,
                    `CCIE Security Course`,
                ]
            },
            {
                type: 'p',
                text: `Let’s see an overview of all these courses one-by-one.`,
            },
            {
                type: 'h3',
                text: `CCIE Enterprise infrastructure training course:`,
            },
            {
                type: 'p',
                text: `The CCIE stands for Cisco Certified Infrastructure Expert Enterprise. It’s a Cisco certification. This certification has modules of CCNA, CCNP – SDWAN, CCNP Enarsi and also add-on modules like F5 LTM, Palo Alto Firewall, Cisco DNAC + Cisco ISE, and Python automation.`,
            },
            {
                type: 'p',
                text: `The duration of the CCIE Enterprise certification is a 6 months training course that will provide 100% job placement at Networkers Home.`,
            },
            {
                type: 'h3',
                text: ` Cyberx Masters Course:`,
            },
            {
                type: 'p',
                text: `This course is also for the 6 month duration of the cyber security programme and is specially designed for fresh graduates. This course covers modules like CCNA, Certified Ethical Hacker (CEH),CHFI,  PenTesting, Bug Bounty Hunting, Palo Alto Firewall, Fortigate, and Python Network Automation.`,
            },
            {
                type: 'p',
                text: `This course also helps candidates to get 100% job placement at Networkers Home, and helps candidates to get better positions with better salaries.`,
            },
            {
                type: 'h3',
                text: `Cloud Masters Course:`,
            },
            {
                type: 'p',
                text: `This cloud masters course is a unique course that we have created with a combination of cloud technologies and cloud security practices. This course covered the modules of CCNA-CCNP Enterprise, AWS Associate, AWS Advanced Security, Cloud Security projects, Palo Alto Firewall, Cloud Routing protocols, CEH, CHFI, and 3 optional advanced projects.`,
            },
            {
                type: 'p',
                text: `In this course, the most demanding three cloud technologies will be taught to you, i.e., AWS, Azure and Google Cloud domain.`,
            },
            {
                type: 'h3',
                text: `CCIE Security Course:`,
            },
            {
                type: 'p',
                text: `This course duration is 6 months and this course covers the 15 IT certifications. Most of the Cisco certifications are covered while enrolling for this certification and also save lakhs of rupees for students. This course covered everything from CCNA to CCNP security, CCNP SDWAN, Cisco FTD and many more. `,
            },
            {
                type: 'p',
                text: `At Networkers Home, we have 100% job guarantee courses that are available with top brand placements. Our placement teams are have more than 14 years of placement records, with successful placing candidates in top MNCs companies in India.`,
            },
        ]
    },
    {
        seo: {
            title: "Is a CCNA Certification Worth  it?",
            description: 'Most people have the same question: is CCNA certification really worth it in 2022 or upcomming years. To answer this question we need to first see what is CCNA certification, what are the benefits of doing CCNA certification? What are the disadvantages of doing the CCNA certification? And why CCNA certification still worth it?',
            og_img: '/assets/images/blog/8.jpg',
        },
        slug: 'is-a-ccna-certification-worth-it',
        category: {
            title: "Placement Program",
            slug: 'placement-program'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/8.jpg'
            },
            {
                type: 'h1',
                text: `Is a CCNA Certification Worth  it?`
            },
            {
                type: 'p',
                isDesc: true,
                text: `Most people have the same question: is CCNA certification really worth it in 2022 or upcomming years.
To answer this question we need to first see what is CCNA certification, what are the benefits of doing CCNA certification? What are the disadvantages of doing the CCNA certification? And why CCNA certification still worth it?`
            },
            {
                type: 'p',
                text: `In this blog we will learn about all the aspects of CCNA certification, so let’s get started with what is CCNA certification and what different types of CCNA certification are available?`
            },
            {
                type: 'h3',
                text: `CCNA Certification details`
            },
            {
                type: 'p',
                text: `CCNA stands for Cisco Certified Network Associate. People can do CCNA 200-301 training in both online and classroom mode. The certification is valid for three years and for all types of engineers can able to do this certification. After clearing the certification exam, you will receive the certificate of completion. That will ensure that you have the skills needed to start a career in the IT industry or in the networking domain.`
            },
            {
                type: 'p',
                text: `Doing CCNA certification gives you the concept of computer network, switching and routing, gives a clear understanding of using switch, routers, hubs and other cisco devices.`
            },
            {
                type: 'p',
                text: `CCNA certification is the first step to getting started in IT domain. It helps to get job as a network engineer, system engineer, technical support engineer, network administrator, senior network engineer, or network security specialist.`
            },
            {
                type: 'h4',
                text: `Different types of CCNA certification:`
            },
            {
                type: 'p',
                text: `The original focus of CCNA was on Routing and Switching, and now there are different types of CCNA courses focused on:`
            },
            {
                type: 'list',
                items: [
                    `CCNA Routing and Switching`,
                    `CCNA Industrial`,
                    `CCNA Data Center`,
                    `CCNA Collaboration`,
                    `CCNA Cloud`,
                    `CCNA Cyber Operations`,
                    `CCNA Wireless`,
                    `CCNA Service provider`,
                    `CCNA Security`,

                ]
            },
            {
                type: 'h2',
                text: `CCNA Routing and Switching`
            },
            {
                type: 'p',
                text: `A network professional with a CCNA certification can use his knowledge about network layers 1-3 which are applicable to core routing and switching, skills needed to install, configuration, and operate a small enterprise network. The candidate can evolve into the role of a network engineer with this certification.`
            },
            {
                type: 'h3',
                text: `CCNA Industrial`
            },
            {
                type: 'p',
                text: `The certification gives candidates the skills to successfully implement and diagnose the most common industry standard protocols while using the best practices needed for today’s connected networks.`
            },
            {
                type: 'h3',
                text: `CCNA Data Center`
            },
            {
                type: 'p',
                text: `CCNA Data Center certification describe the knowledge of basic data center networking concepts, configuration and troubleshooting of data center virtualization, configuring cisco MDS switches, NPV nodes and many more.`
            },
            {
                type: 'h3',
                text: `CCNA Collaboration`
            },
            {
                type: 'p',
                text: `This certification is for network video engineers, IP telephony, and IP network engineers. It’s help students to learn and work more effectively in voice, video, data, and mobile apps.`
            },
            {
                type: 'p',
                text: `The CCNA collaboration certification also helps students to gain knowledge in installation, configure, operate and maintain Cisco’s Unified Communications solutions.`
            },
            {
                type: 'h3',
                text: `CCNA Cloud`
            },
            {
                type: 'p',
                text: `CCNA cloud certification is for individuals who wants to develop their cloud skills. It is the only certification that covers all major cloud technologies such as Application Centric Infrastructure (ACI), OpenStack, and Cloud Management System.`
            },
            {
                type: 'p',
                text: `This certification is mainly focused on helping cloud engineers, cloud administrators, and network engineers enhance their cloud skill set.`
            },
            {
                type: 'h3',
                text: `CCNA Cyber Operations`
            },
            {
                type: 'p',
                text: `This CCNA Cyber Ops certification focuses on educating applicants for associate-level roles in cyber security operations centers.`
            },
            {
                type: 'p',
                text: `It will help you understand how an enterprise network infrastructure is designed, implemented, and used. You will be familiar with key security technologies such as firewalls, Network Access Control (NAC), intrusion prevention systems (IPSs), and virtual private networks. `
            },
            {
                type: 'h3',
                text: `CCNA Wireless`
            },
            {
                type: 'p',
                text: `This certification will help you dig deep into wireless LAN technologies, Cisco Prime Infrastructure & Identity services, and Meraki cloud-managed services. The programme has basic security features, including rogue SSID broadcast control and a layer-11. It has wireless intrusion prevention systems, air quality monitoring tools, and location tracking services. `
            },
            {
                type: 'p',
                text: `The course teaches students how to set up a WLAN controller in stand-alone mode as well as in mobility group mode.`
            },
            {
                type: 'h3',
                text: `CCNA Service Provider`
            },
            {
                type: 'p',
                text: `This CCNA Service Provider certification focuses on configuring and operating the Juniper Networks M320 router. This certification also teaches the deployment of IPv46 and Ipv41 services in branch offices, including VPNs internetworking technologies such as MPLS layer and VPN Pass-through secure sockets layer/virtual private network protocols are included. `
            },
            {
                type: 'p',
                text: `The course will teach you how to make decisions when planning enterprise campus core and remote access network deployments.`
            },
            {
                type: 'h3',
                text: `CCNA Security`
            },
            {
                type: 'p',
                text: `This certification provides specialised training beyond the basics of entry-level network support. Candidates are taught how to secure router and switch networks using industry best practices.`
            },
            {
                type: 'p',
                text: `Strong security is implemented for endpoints, applications, cloud services, data center environments and more.`
            },
            {
                type: 'h2',
                text: `Benefits of doing CCNA certification:`
            },
            {
                type: 'p',
                text: `Lots of benefits are there for obtaining a certification. When a person becomes CCNA certified, they can try for a better job, or they can raise or negotiate a higher salary than other IT professionals. Different types of technologies are coming every year, like SDN (Software-defined Networking) and cloud infrastructure. `
            },
            {
                type: 'list',
                items: [
                    `Lots of job opportunities`,
                    `Every organisation that accepts this certific,ation`,
                    `Help to get into other domains`,
                    `Value for money.`,
                    `No prerequisites, are needed to enrol in CCNA certification.`,
                ]
            },
            {
                type: 'h2',
                text: `Disadvantages of doing CCNA certification`
            },
            {
                type: 'p',
                text: `We have seen all the types of CCNA certification and the benefits of having certification. Now let’s see what the disadvantages of CCNA certification are:`
            },
            {
                type: 'list',
                items: [
                    `Certification costs are high`
                ]
            },
            {
                type: 'p',
                text: `If a person wants to take the CCNA certification exam, he has to pay a large amount of $300, i.e., Rs. 22,885. This amount is just for giving the exam. The expense of this exam can be justified by the value of the exam. You can apply for a lot of job positions once you get the certification.
`
            },
            {
                type: 'list',
                items: [
                    `Certification needs to be recertified`
                ]
            },
            {
                type: 'p',
                text: `When you get the certification, it’s valid for only three years. After that, you have to recertify the certification. You must upgrade to a newer version of the certification if you want to take advantage of it.`
            },
            {
                type: 'list',
                items: [
                    `Lots of other certifications are available in the same range`
                ]
            },
            {
                type: 'p',
                text: `There are many certifications that are available in the same range. You don’t want to keep taking the certification exam if you don’t have experience in a specific field. It is not easy to give exams. It requires a lot of money and mental effort. It is difficult to crack the certification exams. You might need to get other levels of the certification to get an entry-level certification.`
            },
            {
                type: 'list',
                items: [
                    `Time-consuming`
                ]
            },
            {
                type: 'p',
                text: `Certification exams are not easy to crack. You need to study hard to pass the exam. You will need a better understanding of the network in order to understand the concepts on the exams. It takes a lot of hard work to have good knowledge. The exam process takes a long time. You have to pass the certification. It is necessary to work hard. You may want to take classes for the exam, and the classes are expensive.`
            },
            {
                type: 'h3',
                text: `Why CCNA Certification still worth it?`
            },
            {
                type: 'p',
                text: `The CCNA certification is the most valuable certification to get when entering into networking domain and it’s also an entry level certification. As I mentioned above, there are plenty of job oppotunities out there in market to get start in IT domains.`
            },
            {
                type: 'p',
                text: `The CCNA certification opens the door for other certifications like CCNP, CCIE, and many more. Most professionals want to take the higher certification, but before enrolling in the higher certification, a person should have the fundamental understanding and skills to get started. So it’s highly recommended by highly trained professionals that a person should have basic level of knowledge and skills.`
            },
            {
                type: 'p',
                text: `This certification is required for anyone who wants to work in the IT industry as a network engineer, system engineer, senior network engineer, technical support engineer, and so on. Most companies want to hire certified professionals, so they have to give minimal training to a person. It also improves your skills and knowledge while keeping you up to date on the latest technology used by businesses.`
            },
            {
                type: 'p',
                text: `So it’s better to start your carrer with a begineer level of certification.`
            },
        ]
    },
    {
        seo: {
            title: "Networking Course in India",
            description: 'In this blog we will get to know about the role of networking in IT domains and what types of courses are available in India for the networking domain.',
            og_img: '/assets/images/blog/9.jpg',
        },
        slug: 'networking-course-in-india',
        category: {
            title: "Placement Program",
            slug: 'placement-program'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/9.jpg'
            },
            {
                type: 'h1',
                text: `Networking Course in India`
            },
            {
                type: 'p',
                isDesc: true,
                text: `In this blog we will get to know about the role of networking in IT domains and what types of courses are available in India for the networking domain. Networking is a part of Information technology and is widely used in every organisation. All the Networks related certifications are provided in our organization, and networking domain is booming in the IT industry. `
            },
            {
                type: 'p',
                text: `Even the candidates do not have a background in IT or a cmoputer science degree, a true beginner can enrol in these courses. If a candidate has passed out from a different domain, like having done a bachelor’s in commerce or coming from a non-IT domain, that’s totally fine. `
            },
            {
                type: 'p',
                text: `First, let’s see what networking is? and what courses are available in our company? Last, we will take a look at other certifications available in market for networking course.`
            },
            {
                type: 'p',
                text: `Computer networking is the excahnge of data between computing devices. These networked devices are bound to rules, known as communication protocols, to transport information over physical or wireless technologies.`
            },
            {
                type: 'p',
                text: `Computer networking allows devices and endpoints to be connected to each other on a local area network or larger network. Sharing resources, use or offer services is an essential function for service providers, business and consumers. Telephone calls, text messaging, streaming videos, and the internet of things are all possible because of networking.`
            },
            {
                type: 'h3',
                text: `IT Domains to explore: Networking Courses`
            },
            {
                type: 'p',
                text: `Networking courses can be confusing to find the right one for you. We have a list of networking courses that will make it easy for you. You can enter in any domains based on your area of interest. `
            },
            {
                type: 'p',
                text: `In the technical industry, you can explore the following:`
            },
            {
                type: 'list',
                items: [
                    `Routing and Switching`,
                    `Cloud domain`,
                    `Cyber Security`,
                    `Data Center`,
                    `Firewall`,
                ]
            },
            {
                type: 'P',
                text: `Let’s begin with what certifications are available for the networking course.`
            },
            {
                type: 'h2',
                text: `Top Courses for Networking in India:`
            },
            {
                type: 'h3',
                text: `Cisco CCNA Certification (200-301): Beginners Level course`
            },
            {
                type: 'p',
                text: `Cisco CCNA course is totally for beginners. Candidates who want to get into the IT industry, the CCNA course is the best choice for them and its entry level certification of Networking course. They can do this course in both online and classroom mode. After passing the certification it is valid for three years.`
            },
            {
                type: 'p',
                text: `Doing CCNA certification gives you the concept of computer networks, switching and routing, and gives a clear understanding of using switches, routers, hubs, and other cisco devices.`
            },
            {
                type: 'h4',
                text: `CCNA Course topics:`
            },
            {
                type: 'list',
                items: [
                    `Network Fundamentals`,
                    `Network Access`,
                    `IP Connectivity`,
                    `IP Services`,
                    `Network Automation `,
                    `Infrastructure Security`,
                ]
            },
            {
                type: 'h4',
                text: `Benefits of CCNA Certification`
            },
            {
                type: 'p',
                text: `Lots of benefits are there to obtain a certification, it helps in to secure your job in IT industry or get entry in Networking domains. When a person become a CCNA certified, then you can try for better job or you can raise either negotiate a higher salary than other IT persons.`
            },
            {
                type: 'h3',
                text: `CCNP Certification: Intermediate level Course`
            },
            {
                type: 'p',
                text: `CCNP stands for Cisco Certified Network Professional. It is an enterprise infrastructure training program. In this certification programme, Cisco introduced advanced technologies like Cisco SD-WAN, Cisco Encore, and the ENARSI Module. `
            },
            {
                type: 'p',
                text: `There are no requirements for both training and certification for the CCNP certification, its an intermediate level of networking course.
So for the CCNP certification, there are two exam modules: the core exam and the concentration exam.`
            },
            {
                type: 'list',
                style: 'df',
                items: [
                    {
                        text: ' It focuses on your knowledge of enterprise, infrastructure, including IPv4 and IPv6 architecture, virtualization, infrastructure, security and automation. This core exam is also a qualifying exam for CCIE enterprise infrastructure and CCIE enterprise wireless certification. Students have to enrol in(350- 401) ENCOR, which is Implementing and operating Cisco Enterprise Network Core Technologies.',
                        qs: 'Core Exam: '
                    },
                    {
                        text: `It focuses on industry - specific topics such as network - design, SD - WAN, wireless, and automation.Students can prepare for concentration exams by taking the corresponding Cisco training course.Students have to choose any one module of exam from all the other cisco available course. In our company, we provide Cisco ENARSI course(300- 410), i.e.Cisco Enterprise Advanced Routing and Services `,
                        qs: `Concentration Exam: `
                    }
                ]
            },
            {
                type: 'h4',
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
                type: 'h3',
                text: `Cisco SD-WAN Certification: Fundamental Networking Course`
            },
            {
                type: 'p',
                text: `The Cisco SD-WAN (300-415 ENSDWI) training course is designed in such a manner that students can gain the skills and knowledge necessary to implement, configure, manage, and troubleshoot Cisco SDWAN solutions. `
            },
            {
                type: 'p',
                text: `This certification is also the fundamental level of certification in networking courses, so before taking this course, students’ prior knowledge of networking helps to gain knowledge.`
            },
            {
                type: 'p',
                text: `This course covers all the basics of Cisco SDWAN architecture and components, as well as provides knowledge of how to deploy Cisco SDWAN in both single-site and multi-site deployments, how to deploy initial configuration and management tasks, and how to troubleshoot common problems.`
            },
            {
                type: 'h4',
                text: `Course Syllabus:`
            },
            {
                type: '',
                items: [
                    `Cisco SD - WAN Overlay Network`,
                    `Cisco SD - WAN Routing Options`,
                    `Cisco SD - WAN Deployment`,
                    `Cisco SD - WAN Migration and Interoperability`,
                    `Cisco SD - WAN Policy Configuration`,
                    `Cisco SD - WAN Management and Operations`,
                    `Cisco Labs`,

                ]
            },
            {
                type: 'h4',
                text: `Benefits of Cisco SD-WAN Certification:`
            },
            {
                type: 'list',
                items: [
                    `Cisco SD-WAN provides a cloud-first infrastructure, which means Cisco SD-WAN has vManage console. We can use the vManage console to easily automate virtual private gateway deployment in IaaS and PaaS enviornments.`,
                    `The Cisco SD-WAN onRamp provides automated connectivity to IaaS and PaaS cloud enviornments without performing any manual processes. Cisco SD-WAN provide instant access to cloud traffic, allowing you to control your deployment at any time.`,
                    `Cisco SD-WAN provides end-to-end visibility into applications and infrastructure, real time information without any failure correlation.`,
                    ` It helps to change policies according to predictable performance and categorization of application quality of service(QoS).`

                ]
            },
            {
                type: 'h3',
                text: `Advanced Networking course: CCIE Certification`
            },
            {
                type: 'p',
                text: `CCIE stands for Cisco Certified Internetwork Expert, it’s an expert level of certification. CCIE is designed for architects and engineers, and involves configuration, troubleshooting, and integration. `
            },
            {
                type: 'p',
                text: `CCIE consists of two major courses:`
            },
            {
                type: '',
                items: [
                    `CCIE Enterprise Training Course`,
                    `CCIE Security Training course`,
                ]
            },
            {
                type: 'h4',
                text: `CCIE Enterprise training course:`
            },
            {
                type: 'p',
                text: `CCIE applicants are recommended to have five to seven years of involvement in planning, designing, and deploying enterprise networking technologies and solutions before taking the test. So, to pass the CCIE Enterprise Infrastructure exam, candidates should have to pass two exams.`
            },
            {
                type: 'list',
                items: [
                    ` Cisco Enterprise Network Core Technologies Implementation and Operation(Encore 350 - 401)`,
                    `(Lab exam) CCIE Enterprise Infrastructure v1.0`
                ]
            },
            {
                type: 'h4',
                text: `Course Syllabus:`
            },
            {
                type: 'list',
                items: [
                    `Network Infrastructure`,
                    `Software Defined Infrastructure`,
                    `Transport Technologies and Solutions `,
                    `Infrastructure Security and Services`,
                    `Infrastructure Automation and Programmability`,

                ]
            },
            {
                type: 'p',
                text: `CCIE course covers around 6 months of training that covers multiple Cisco IT certifications.`
            },
            {
                type: 'h3',
                text: `Advanced Security Networking Course: CCIE Security v6.0`
            },
            {
                type: 'p',
                text: `This is the most advanced course in Cyber Security, CCIE security practical exam gives candidates 8 hours of time to complete and requires a candidate to plan, design, deploy, execute, and optimize network security solutions to protect a given network. `
            },
            {
                type: 'p',
                text: `They have to implement programming and automate the network within the exam, as per course topics mentioned below.`
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
                type: 'p',
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
                type: 'h3',
                text: `Most popular Security Networking course: CEH v11  `
            },
            {
                type: 'p',
                text: `CEH stands for Certified Ethical hacking, it is the entry-level certification which covers the both networking and security domains knowledge`
            },
            {
                type: 'p',
                text: `IT departments across the globe have made CEH Ethical Hacker Certification a must, as it has become a popular cybersecurity course for professionals. The course was designed to consider industrial and professional requirements`
            },
            {
                type: 'p',
                text: `The new module pays more attention to the internet of things and cloud concepts and more in malware analysis. You will learn how to use the most recent hacking tools and strategies in this course. The most recent hacking tools, methods, and procedures utilized by cybercriminals and cyber security experts will be provided by the CEH v11.`
            },
            {
                type: 'p',
                text: `CEH course covers the following topics below:`
            },
            {
                type: 'list',
                items: [
                    `Introduction to Ethics and Ethical hacking`,
                    `Networking concepts & design`,
                    `Cryptography`,
                    `Hacking testing Methodology`,
                    `Web Application testing`,
                    `Software Security`,
                    `Malware Operations`,
                    `Wireless Networking`,
                ]
            },
            {
                type: 'p',
                text: `One of the best networking course for beginners is the Certified Ethical Hacking certification. The Certified Ethical Hacking course fills you all the skills you need to get a job in IT domain.`
            },
            {
                type: 'h3',
                text: `Firewall Networking Course: Palo Alto Certified Network Security Engineer (PCNSE)`
            },
            {
                type: 'p',
                text: `Many skilled workers are pursing a career at Palo Alto Firewall. This course will teach you how to use the Palo Alto Firewall to protect and enhance cloud infrastructures. `
            },
            {
                type: 'p',
                text: `This course will provide the knowledge and skills to install, manage, and configure Palo Alto firewalls. You will learn how to protect your organization’s cloud infrastructure from cyber-attacks. We will dive into Palo Alto netowrks policies and configuration so that you can see how they work together. `
            },
            {
                type: 'p',
                text: `You will learn how to use key features if the Palo Alto Firewall to their fullest and understand their benefits and drawbacks. The outcomes will allow you to set up a Palo Alto Firewall.`
            },
            {
                type: 'p',
                text: `Networkers Home offers professional level of certification in Palo Alto Firewall, only the minimum requirement for enrol this course is CCNP certification.`
            },
            {
                type: 'p',
                text: `Major topics covered in this course:`
            },
            {
                type: '',
                items: [
                    `Network Security`,
                    `Firewall Technology`,
                    `Virtualization Technology`,
                    `Configuration & Troubleshooting of Palo Alto firewall`,
                    `DNS & DHCP Theory / Lab`,
                    `Cryptography and Hashing concepts`,
                ]
            },
            {
                type: 'h3',
                text: `Another Firewall Networking Course: FortiGate Firewall v6.4 NSE4`
            },
            {
                type: 'p',
                text: `This course will help you to understand how to use and manage FortiGate tools and features, as well as basic understanding of network security concepts. You will learn how to create a FortiGate firewall from scratch with our course.`
            },
            {
                type: 'p',
                text: `Networkers Home will help you achieve excellence in various network security- centered courses with the help of advanced level certifications. One of our best-improvised course modules the FotiGate Firewall course. `
            },
            {
                type: 'p',
                text: `People who are beginners to network security and want to improve their skills can sign up for this course.`
            },
            {
                type: 'h4',
                text: `Topics covered in this course:`
            },
            {
                type: 'list',
                items: [
                    `Network Security `,
                    `Malware Analysis`,
                    `Firewall Concept`,
                    `DNS & DHCP Lab`,
                    `Antivirus`,
                    `NAT Policy`,
                    `VPN Concepts`,
                ]
            },
            {
                type: 'p',
                text: `Individuals must have minimum CCNP certification to take this course. It is recommended that you have a good understanding of network and security protocols.`
            },
            {
                type: 'h3',
                text: `IT Networking beginner course: Juniper Routing and Switching`
            },
            {
                type: 'p',
                text: `In this certification Juniper providing four level of certifications,Associate level, Specialist level, Professional level, Expert level. `
            },
            {
                type: 'list',
                items: [
                    `Associate Level: JNCIA - Junos(JN0 - 104)`,
                    `Specialist Level: JNCIS - SP(JN0 - 363)`,
                    `Professional Level: JNCIP - SP(JN0 - 663)`,
                    `Expert Level: JNCIE - SP(JN0 - 961)`,

                ]
            },
            {
                type: 'p',
                text: `Students or working professional are able to take any Juniper certification in India through Pearson VUE.`
            },
            {
                type: 'p',
                text: `Associate level of certification, Networking professionals with beginner-intermediate knowledge of networking can benefit from the JNCIA-Junos certification.`
            },
            {
                type: 'h3',
                text: `Another IT Networking Beginner course: Comptia Network+ `
            },
            {
                type: 'p',
                text: `The career development of IT professionals in network administration can be advanced with flexible training options. `
            },
            {
                type: 'p',
                text: `Candidates for the CompTIA Network+ are prepared to support networks on any platform. The skills that network professionals need are covered in the only certification that covers them. The hands-on skills and precise knowledge needed in today’s networking enviornments are not covered by other certifications.`
            },
            {
                type: 'p',
                text: `Major topics in this course covers:`
            },
            {
                type: '',
                items: [
                    `Basics Ports and Protocols`,
                    `OSI Layers overview`,
                    `Networking Technology`,
                    `Cloud`,
                    `Network design`,
                    `Network Security`,

                ]
            },
            {
                type: 'h3',
                text: `Conclusions:`
            },
            {
                type: 'p',
                text: `The above mentioned Networking courses have been designed for you. We have seen all the major certifications, from entry-level to experienced-level. Candidates can choose a certification according to their expertise. Beginners can start with the CCNA certification, and experienced people who are already working in the IT industry can choose any certification.`
            },
            {
                type: 'p',
                text: `All those basic to advanced level certification exams that were mentioned above. All certifications are provided in Networkers Home. So if anyone wants to enrol in those certifications, he/she can check out the Networkers Home website.`
            },
            {
                type: 'slug',
                href: '/',
                label: 'www.networkershome.com'
            }
        ]
    },
    {
        seo: {
            title: "Azure Certification Path in 2023 Is So Famous, But Why?",
            description: 'The deployment of computing resources as a service, or “cloud computing,” means that the cloud provider, rather than the end user, owns and manages the resources.',
            og_img: '/assets/images/blog/9.jpg',
        },
        slug: 'azure-certification-path-in-2023-is-so-famous',
        category: {
            title: "Cloud Computing",
            slug: 'cloud-computing'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/10.avif'
            },
            {
                type: 'h1',
                text: `Azure Certification Path in 2023 Is So Famous, But Why?`
            },
            {
                type: 'p',
                isDesc: true,
                text: `The deployment of computing resources as a service, or “cloud computing,” means that the cloud provider, rather than the end user, owns and manages the resources. These resources could be anything from web-based software programmers (like Tik Tok, Netflix, Prime, etc.) to third-party data storage for pictures and other digital media (like iCloud or Dropbox) or third-party servers used to support the cloud computing infrastructure of a company, a research project, or a personal undertaking. `
            },
            {
                type: 'p',
                text: `The world is moving to the cloud every day, which is causing a new rise in technology. As a result, cloud computing is on track to become a $1 billion industry with thousands of new job opportunities.`
            },
            {
                type: 'p',
                text: `Around the world, many businesses provide cloud certification training courses, but only Microsoft Azure meets the needs of the technology. Let’s learn more about the area in depth.`
            },
            {
                type: 'p',
                text: `Topics covered in this blog are:`
            },
            {
                type: 'list',
                items: [
                    `Things you need to know before beginning your Microsoft Azure Certification path`,
                    `Description of Azure Certification and Why Get Certified in Azure?`,
                    `What are the various levels of Azure certification?`,
                    `Gaining an Azure certification has benefits`,
                    `What qualifications are needed to earn a Microsoft Azure Certification?`,
                    `What positions are available for a Microsoft Azure Certified?`,
                    `Why should I acquire a certification in Microsoft Azure?`,
                    `Conclusion`,

                ]
            },
            {
                type: 'h3',
                text: `Things you need to know before beginning your Microsoft Azure Certification path`
            },
            {
                type: 'p',
                text: `Azure is the most widely used cloud computing platform in the world and the industry leader. Most organisations and enterprises, whether small or large, are transferring their operations to the cloud in order to remain competitive as the demand for cloud-based solutions grows daily. Additionally, it directly affects the need for cloud-based experts. Microsoft certifications are valuable, and the majority of businesses prefer it if an applicant has one on their resume.`
            },
            {
                type: 'p',
                text: `You can prove and certify your understanding of specialised cloud roles through Azure Certifications. Even yet, you might not be sure which Azure certification best suits your needs because there are so many of them available. Because of this, we’re here with a new blog article that explains all you need to know about the Azure Certification Path so you can pick the certification that suits your requirements.`
            },
            {
                type: 'h3',
                text: `Description of Azure Certification and Why Get Certified in Azure?`
            },
            {
                type: 'p',
                text: `The Azure cloud platform is made up of more than 200 products and cloud services that can be used to develop new solutions, address current problems, and predict the future. You can design, run, manage apps across several clouds, on-premises, and at the edge using your choice of tools and frameworks.`
            },
            {
                type: 'p',
                text: `Nobody can contradict the recent rapid expansion of cloud computing. One of the top cloud service providers is Microsoft Azure.`
            },
            {
                type: 'p',
                text: `Its high-quality products and service options make it a good option for businesses. Popular companies like eBay, Samsung, and BMW are among Microsoft Azure’s top clients. They provide examples of Azure’s features and functionalities.`
            },
            {
                type: 'h3',
                text: `What are the various levels of Azure certification? `
            },
            {
                type: 'p',
                text: `A job in the cloud computing sector requires having Azure certifications. Microsoft now offers 13 Azure certifications divided into Fundamental, Associate, and Expert levels. These tests are meant to verify your Azure cloud skills and solely concentrate on acquiring knowledge and skills relevant to career roles on the present market.`
            },
            {
                type: 'h4',
                text: `Fundamental Level:`
            },
            {
                type: 'p',
                text: `The Fundamentals Certification is intended for those who have just begun to learn about cloud concepts. With these certificates, individuals with non-technical backgrounds can begin their cloud career.`
            },
            {
                type: 'list',
                items: [
                    `Azure AI Fundamentals[AI-900]`,
                    `Azure Fundamentals[AZ-900]`,
                    `Azure Data Fundamentals[DP-900]`,
                ]
            },
            {
                type: 'h4',
                text: `Associate Level:`
            },
            {
                type: 'p',
                text: `You can add these qualifications to your CV if you are already familiar with Azure.`
            },
            {
                type: 'list',
                items: [
                    `Azure Administrator [AZ-104]`,
                    `Azure Developer [AZ-204]`,
                    `Azure Security Engineer [AZ-500]`,
                    `Developing and Implementation of a Microsoft Azure AI Solution [AI-102]`,
                    `Azure Data Scientist [DP-100]`,
                    `Data Engineering on Microsoft [DP-203]`,
                    `Azure Database Administrator [DP-300]`,
                ]
            },
            {
                type: 'h4',
                text: `Expert Level:`
            },
            {
                type: 'p',
                text: `You can obtain an expert certification if you have past experience, a solid comprehension of the subject, and associate-level knowledge of Azure.`
            },
            {
                type: 'list',
                items: [
                    `Azure Solutions Architect[AZ - 303 / AZ - 304]`,
                    `Azure DevOps Engineer[AZ - 400]`,

                ]
            },
            {
                type: 'h3',
                text: `Gaining an Azure Certification has benefits`
            },
            {
                type: 'p',
                text: `The ability to progress professionally, entry into a variety of career alternatives, the chance to earn a higher pay, and improved security options for your organisation are just a few advantages of earning an Azure certification.`
            },
            {
                type: 'list',
                items: [
                    `Career advancement`,
                    `Flexible career possibilities`,
                    `Increased income potential`,
                    `Improved skill set`,
                    `Increased security`,

                ]
            },
            {
                type: 'h3',
                text: `What qualifications are needed to earn a Microsoft Azure Certification?`
            },
            {
                type: 'p',
                text: `As we have mentioned above, Microsoft Azure certifications are divided into three levels.So we will discuss qualifications for each level, and some of the qualifications are common for all levels.`
            },
            {
                type: 'h4',
                text: `Common prerequisites for all levels:`
            },
            {
                type: 'list',
                items: [
                    `Bachelor Degree with a minimum of 50% in graduation`,
                    `Awareness of virtualization`,
                    `A working knowledge of Microsoft`,
                    `Fundamental understanding of cloud computing`,
                    `Communication skills`,
                    `Excellent management abilities`,

                ]
            },
            {
                type: 'h4',
                text: `Prior qualifications for Fundamental level certification:`
            },
            {
                type: 'p',
                text: `It is advised to become familiar with the ideas behind networking, storage, computation, application development, and application support. Getting the Azure Fundamentals certification can help you brush up on the basics for other Azure role-based or specialty certifications, but none of them mandate it.`
            },
            {
                type: 'h4',
                text: `Qualifications needed for associate level certification:`
            },
            {
                type: 'p',
                text: `Different types of certification are available for associate level certification, so the prerequisites for each certification are different. We will discuss each associate-level certification one-by-one.`
            },
            {
                type: 'h4',
                text: `Prerequisites for Azure Administrator [AZ-104]:`
            },
            {
                type: 'p',
                items: [
                    `Basics of Microsoft Azure: Describe cloud concepts`,
                    `Demonstrate the architecture and services of Azure in Azure Fundamentals.`,
                    `Describe the management and governance of Azure in Azure Fundamentals.`,
                ]
            },
            {
                type: 'h4',
                text: `Prerequisites for Azure Developer [AZ-204]:`
            },
            {
                type: 'p',
                items: [
                    `Candidates should have between one and two years of professional development experience, as well as Microsoft Azure knowledge. They should be capable of writing programmes in the languages that Azure supports, as well as using other tools like Azure CLI and Azure PowerShell.`,
                    `Cloud developers who take part in all stages of development, from requirements creation and design to programming, deployment, and maintenance, are eligible to take this test. To execute solutions, they collaborate with cloud DBAs, cloud administrators, and clients.`,
                ]
            },
            {
                type: 'h4',
                text: `Prerequisites for Azure Security Engineer [AZ-500]:`
            },
            {
                type: 'list',
                items: [
                    `Candidates for this certification should have hands- on expertise managing hybrid and Azure setups.Candidates should be familiar with Azure services, cloud computing, security operations procedures, and infrastructure as code.`,
                    `The Azure Security Engineer Associate certification requires candidates to have in-depth knowledge of establishing Azure security controls that secure identity, accessibility, information, applications, and networks in cloud and as a part of an end- to - end architecture, hybrid environments.`
                ]
            },
            {
                type: 'h4',
                text: `Prerequisites for Designing and Implementing a Microsoft Azure AI Solution [AI-102]:`
            },
            {
                type: 'p',
                items: [
                    `Candidates for this test should be fluent in C# or Python and be able to create conversational AI, knowledge mining, and computer vision applications on Azure using REST- based APIs and SDKs.`,
                    `Additionally, they need to be aware of the components that make up the Azure AI portfolio and the various possibilities for data storage.Additionally, candidates must comprehend `
                ]
            },
            {
                type: 'h4',
                text: `Prerequisites for Azure Data Scientist [DP-100]:`
            },
            {
                type: 'list',
                items: [
                    ` No prior certification is required for candidates to be eligible to sit for the DP- 100 exam.`,
                    `A candidate for this certification should be knowledgeable with data science and have experience using MLflow and Azure Machine Learning.`,
                    `In order to implement and run machine learning workloads on Azure, candidates for the Azure Data Scientist Associate certification should have subject- matter knowledge in data science and machine learning.`
                ]
            },
            {
                type: 'h4',
                text: `Prerequisites for Data Engineering on Microsoft [DP-203]:`
            },
            {
                type: 'list',
                items: [
                    `In addition to having a solid grasp of processing and data architectural patterns, candidates for this exam should be well- versed in data processing languages like SQL, Python, or Scala.`,
                    `The ability to integrate, process, and consolidate data from multiple structured and unstructured data systems into a format suitable for constructing analytics solutions is a prerequisite for candidates for this test.`
                ]
            },
            {
                type: 'h4',
                text: `Prerequisites for Azure Database Administrator [DP-300]:`
            },
            {
                type: 'list',
                items: [
                    `The construction of database systems that are intended to handle numerous workloads using Azure SQL database services should be the area of competence of candidates for this test.`,
                    `The knowledge and practical experience required for this test are for Azure SQL Edge, SQL database, Azure SQL Managed Instance, and SQL Server on Azure Virtual Machines (Windows and Linux).`
                ]
            },


            {
                type: 'h3',
                text: `What positions are available for a Microsoft Azure Certified?`
            },
            {
                type: 'p',
                text: `The top jobs for Microsoft Azure-certified professionals are listed below. After taking the certification exams, candidates can start their career in cloud computing.`
            },
            {
                type: 'list',
                items: [
                    `Azure Cloud Architect`,
                    `Cloud Administrator`,
                    `Cloud Developer`,
                    `Cloud Sales and Purchase Manager`,
                    `Cloud DevOps Engineer`,
                    `Azure Big Data Specialist`,
                    `Azure Networking Specialist`,
                    `Cloud Account Manager`,
                    `Azure Cloud Operator`,
                ]
            },

            {
                type: 'h3',
                text: `Why should I acquire a certification in Microsoft Azure?`
            },
            {
                type: 'p',
                text: `There are several reasons to earn a Microsoft Azure Certification. But these are the top reasons, in order:`
            },
            {
                type: 'list',
                items: [
                    `Flexible Employment`,
                    `Attractive earnings`,
                    `Advanced Security Factor`,
                    `Business Agreement Asset`,
                    `Improved DevOps Skills`,
                    `Combination of Improved Artificial Intelligence and Architectural Obligation`,
                    `Techniques for Integrating Learning`,
                ]
            },
            {
                type: 'h3',
                text: `Conclusion`
            },
            {
                type: 'p',
                text: `The Cloud is expanding quickly, so anyone looking for a job in the field needs to get ready to face the obstacles that lie ahead. Therefore, Microsoft Azure offers a variety of cloud certifications for a variety of cloud roles.`
            },
            {
                type: 'p',
                text: `Enroll today to become competent. Please keep in mind that we are always here to assist you with any questions. Best of luck!`
            },
        ]
    },
    {
        seo: {
            title: "Want to be a winner, change your bug bounty concepts Philosophy now!",
            description: 'Many businesses across all sectors make significant investments in cybersecurity, including by launching bug bounty programmes to accelerate the discovery of vulnerabilities in their systems.',
            og_img: '/assets/images/blog/11.png',
        },
        slug: 'want-to-be-a-winner-change-your-bug-bounty-concepts-philosophy-now',
        category: {
            title: "Cloud Computing",
            slug: 'cloud-computing'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/11.png',
            },
            {
                type: 'h1',
                text: `Want to be a winner, change your bug bounty concepts Philosophy now!`
            },
            {
                type: 'p',
                isDesc: true,
                text: `Many businesses across all sectors make significant investments in cybersecurity, including by launching bug bounty programmes to accelerate the discovery of vulnerabilities in their systems.`
            },
            {
                type: 'p',
                text: `In bug bounty programs, anyone from around the world who already has skills and knowledge as a security researcher, penetration tester, or white hat hackers is welcome to legally perform testing on web applications, android applications, or iOS applications and find flaws or different vulnerabilities within a scope target.`
            },
            {
                type: 'p',
                text: `Let’s check out in this blog what skills are required to become a good bug bounty hunter and how you can master those skills. Each has its own set of methodologies and techniques; you must determine which one is best for you or create your own.`
            },
            {
                type: 'p',
                text: `Before getting started with bug bounty, learn the below-mentioned topics and try to practise while learning:`
            },
            {
                type: 'list',
                items: [`Windows and Linux fundamentals`]
            },
            {
                type: 'p',
                text: `Learn the fundamentals of Windows, group and policies, active directory, the basics of PowerShell, Windows services, and vulnerabilities. In terms of linux, fundamentals such as linux basic terminal commands, linux direcrory structure, managing linux users and groups, managing and monitoring linux services and processes, and familiarity with the enviornment must be learned. Linux is a necessary skill for someone wishing to work in the field of cyber security.
                `
            },
            {
                type: 'list',
                items: [`Basics of web application`]
            },

            {
                type: 'p',
                text: `Here, we have to learn all the concepts of web applications like understanding of URL, role of client and server, request and response header working, catching service and catche, owasp top ten vulnerabilities of web application.`
            },
            {
                type: 'list',
                items: [`Programming language`]
            },

            {
                type: 'p',
                text: `Programming language are essential to getting started in bug bounty, programs. Every web app or android application is build with the help of one or more programming languages. Every programming languages has the same basics step, the only difference is how they are presented.`
            },
            {
                type: 'p',
                text: `Best programming language to get started is python, learn the basic syntax, working of loop, working of if-else, list, tupples, dictionaries, basics of functions, files I/O, exception heading, socket programming, and many more.`
            },
            {
                type: 'list',
                items: [`Networking concepts should be clear`]
            },
            {
                type: 'p',
                text: `Networking concepts are essential to learn not only for bug bounties; this will also help in other domains of cyber security. In networking, learn the 3-way handshake, TCP headers and UDP headers, secure socket layer, OSI model architecture, network topologies, TCP/IP protocol, subnetting, tunneling, protocol services, and port numbers, as well as network security vulnerabilities.
`
            },
            {
                type: 'list',
                items: [`Basics of server`]
            },
            {
                type: 'p',
                text: `The concept of server should be clear; this concept will also be useful for software developer and other cyber security domains. To understand what a server is, what types of server exist, how servers work, and how passwords are stored in servers.`
            },
            {
                type: 'p',
                text: `After we have learned all of the fundamental concepts, we must practise them at an online practise platform or a buggy web application. In addition, we’ll look at what hacking steps are required to find bugs in any web application.`
            },
            {
                type: 'p',
                text: `There are five steps of hacking, let’s see what are those:`
            },
            {
                type: 'list',
                items: [
                    `Reconnaissance`,
                    `Scanning`,
                    `Ganning access`, `Maintaining access`,
                    `Clearing tracks`,

                ]
            },
            {
                type: 'p',
                text: `The most important steps are the first two steps, i.e., reconnaissance and scanning. Most tools are used at this stage to find the loophole in any application or network. `
            },
            {
                type: 'p',
                text: `While doing reconnaissance, it’s divided into two parts: active recon and passive recon. In active recon we interact with the target network (hosts, employees, etc) and we can used tools like port scanning, vuln scans, web app scanning. We use publicly available information in passive recon by using tools like whois, OSINT, and search engine dorks.`
            },
            {
                type: 'p',
                text: `To find subdomains of the traget website, we can use tools like sublist3r, Amass, subfinder, dirbuster, etc. There are many tools for different purposes. For network scanning there are several tools like Zenmap, Nmap, Ettercap, Metasploit, and many more.`
            },
            {
                type: 'p',
                text: `The most important tools for every beginner need to learn are:`
            },
            {
                type: 'list',
                items: [
                    `Nmap`,
                    `Metasploit`,
                    `Amass`,
                    `Burpsuite / OWASP Zap`,
                    `Wappalyzer`,
                ]
            },
            {
                type: 'p',
                text: `We now need to put everything we’ve learned into practice, so here are some vulnerable platforms where we can do so:`
            },
            {
                type: 'list',
                items: [
                    `bWAPP(Buggy Web Application platform)`,
                    `OverTheWire(This platform will help to clear the linux commands)`,
                    `WebGoat`,
                    `Hackthissite`,
                    `TryHackMe`,
                    `HackTheBox`,
                ]
            },
            {
                type: 'p',
                text: `All of the vulnerable platforms mentioned above are free to use, there are more free platforms available like portswigger academy and CTF (Capture the flag) platforms (PicoCTF, CTFtime, Hacker101 CTF, etc).`
            },
            {
                type: 'p',
                text: `When you feel confident after solving all the CTF challenges and all the OWASP top 10 vulnerabilities. Then you’re ready to begin your bug bounty campaign. 
`
            },
            {
                type: 'p',
                text: `In bug bounty, there are different platforms available to get started, like HackerOne, BugCrowd, Open Bug Bounty, and Integriti. These are the individual platforms for bug bounty, but some of the companies are running their own bug bounty platforms, such as Facebook, Google, Github, etc. Also, when you become a professional in bug bounty some of the private programmes are also available at BugCrowd and HackerOne. It totally depends on your previous reports of the POC (proof of concept).`
            },
            {
                type: 'p',
                text: `While choosing the target at the bug bounty platform, we must look for a target that is not very popular. It will help with better reconnaissance at the target application. Try to do more as much reconnaissance as possible, and the first step to doing reconnaissance is to start with passive recon after that, find all the subdomains of the target application with the help of different tools and filter them with Http and Https (using the Httpx tool). `
            },
            {
                type: 'p',
                text: `After doing a perfect recon, you will get lots of information about the target application, such as:`
            },
            {
                type: 'list',
                items: [
                    `	List of all live subdomains`,
                    `List of different IPs and open ports`,
                    `Sensitive data exposed on github`,
                    `Hidden endpoints`,
                    `Juicy directories with sensitive information`,
                    `Publicly exposed secrets`,
                    `Hidden parameters`,
                    `Low hanging vulnerabilities such as Rxss, open redirect, SQLi`,
                    `Scope from 1x to 1000x`,

                ]
            },
            {
                type: 'p',
                text: `Better recon will help to increase the attack surface, which means more vulnerabilities. Finding untouched endpoints will help to get fewer duplicates. Recon will help you increase your attack surface and may allow you to find vulnerabilities, but the ultimate goal is to dig your target the deepest.`
            },
            {
                type: 'h3',
                text: `Conclusion:
`
            },
            {
                type: 'p',
                text: `Beginner in web application or android penetration testing should first learn the fundamentals before practicipating in bug bounty programs. Without learning all the basic, it’s a waste of time to directly enter bug bounty programmes. 
`
            },
            {
                type: 'p',
                text: `Those who are professional in pentration testing or vulnerability assessment can start doing bug bounties because they are already working as testing engineers. Also, some of the professionals recommend starting with building the application because, once you are familiar with the building of application, it will not take much time to find their vulnerabilities.
`
            },
            {
                type: 'p',
                text: `Bug bounty are simply a programme that allows you to find vulnerabilities in target application by putting your skills and knowledge to use.
`
            },
            {
                type: 'p',
                text: `Keep learning and keep exploring!
`
            },
        ]
    },

    {
        seo: {
            title: "Cybersecurity? It’s Easy, If You Do It Smartly",
            description: 'In today’s world of continuous online and digital presence, the concept of “cybersecurity” is a popular issue. The need for high-quality, reasonably-priced, and practical education has never been more pressing as the cyber industry continues to grow and more jobs become available, as demand for certain skills increases, and as compliance frameworks become more and more critical. ',
            og_img: '/assets/images/blog/13.webp'
        },
        slug: 'cypersecurity-is-easy',
        category: {
            title: "Cloud Computing",
            slug: 'cloud-computing'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/13.webp'
            },
            {
                type: 'h1',
                text: `	Cybersecurity? It’s Easy, If You Do It Smartly`
            },
            {
                type: 'p',
                isDesc: true,

                text: `In today’s world of continuous online and digital presence, the concept of “cybersecurity” is a popular issue. The need for high-quality, reasonably-priced, and practical education has never been more pressing as the cyber industry continues to grow and more jobs become available, as demand for certain skills increases, and as compliance frameworks become more and more critical. `
            },
            {
                type: 'p',
                text: `The cybersecurity domain is a vast field. Lots of different roles and responsibilities fall under this domain. The first thing I could advise is choosing a focus before you attempt to learn cybersecurity. If I don’t know anything about cybersecurity, how can I choose it? This could sound counter productive. You can choose a focus by concentrating on either your present skill set or your areas of interest.`
            },
            {
                type: 'p',
                text: `In this blog, we will see what easy ways there are to start a career in cybersecurity. What different types of job profiles are available that you can pick according to your area of interest, and what topics do you need to learn?`
            },
            {
                type: 'p',
                text: `First you need to choose the area of interest in cyber security, below we have mentioned the different paths of cybersecurity:`
            },
            {
                type: 'list',
                items: [
                    `Penetration testing / Vulnerability Assessment`,
                    `Forensic Investigator`,
                    `Network Security `,
                    `Security Auditor`,
                    `Cryptographic Engineer`,
                    `Threat Intelligence`,
                    `IAM Security engineer`,
                    `Cybersecurity Researcher`,

                ]
            },
            {
                type: 'p',
                text: `The above-mentioned paths of cybersecurity are the initial paths to get started, and for beginners, they have to choose any one of them. When someone starts down one of the paths, after gainning experience, they have to learn more things and need to keep updated.`
            },
            {
                type: 'p',
                text: `For an example, if someone has interest in penetration testing, they have to choose between web application security and android application security. Once they mastered any one topic, they can easily transition to another. `
            },
            {
                type: 'p',
                text: `After choosing any one path in cybersecurity, there are a few topics that are common to every field of cybersecurity. Let’s figure out what the topics are that are common to every field of cybersecurity.`
            },
            {
                type: 'list',
                items: [
                    `Windows and Linux fundamentals`,
                    `Networking`,
                    `Client and Servers working`,
                    `Programming languages(such as: C++, Java or Python)`,
                    `Working knowledge of computers`,
                ]
            },
            {
                type: 'p',
                text: `These are topics that are very essential to learn before getting into the cybersecurity domain. Once you’ve mastered these topics, you’ve completed half of your work. You can now choose which domain of cybersecurity you are interested in after successfully completing all of the topics.  `
            },
            {
                type: 'p',
                text: `Without knowing the basic fundamentals of information technology, it’s very hard to find your best field of interest. Once you have selected a field in the cybersecurity domain, then it’s up to you whether you want to take a certification course or go for self-study (a Long process).`
            },

            {
                type: 'p',
                text: `We will discuss both paths here; just stick with us.`
            },
            {
                type: 'h3',
                text: `Certification Path`
            },
            {
                type: 'p',
                text: `Let’s start with some certification courses that are appropriate for a beginner level candidate if you decide to take them. I’ve listed the best cybersecurity certifications for beginners below:`
            },
            {
                type: 'list',
                items: [
                    `CEH(Certified Ethical Hacker, conducted by ec - council)`,
                    `CCNA(Cisco Certified Network Associate)`,
                    `CHFI(Computer Hacking Forensic Investigator, conducted by ec - council)`,
                    `Comptia Security +`,
                    `SSCP(Systems Security Certified Practitioner, conducted by ISC2)`,

                ]
            },
            {
                type: 'p',
                text: `Let’s see most popular beginner level certification in little bit details.`
            },
            {
                type: 'h3',
                text: `CEH (Certified Ethical Hacker, provided by ec-council)`
            },
            {
                type: 'p',
                text: `CEH certification is popular all over the world, and it’s most popular certification because of the simplicity of this course. There is no prerequisites for taking this certification exam or enrolling in this course. Anyone, whether a high school graduate, a diploma holder, or a graduate, can enrol in this course and become certified. `
            },
            {
                type: 'p',
                text: `In India, most of the companies are looking for CEH-certified candidates who have better skills and knowledge. CEH certification consists of both a theoretical and practical exam. It totally depends on the candidates whether they want to take the theoretical exam or practical exam.`
            },
            {
                type: 'h3',
                text: `CCNA (Cisco Certified Network Associate)`
            },
            {
                type: 'p',
                text: `Cisco’s most valuable certification, and most of the candidates choose this certification. This certification covers the fundamental concept of networking, IP connectivity, security fundamentals, automation and programming. Because this is an entry-level certification, there are no prerequisites for enrolling in this course.`
            },
            {
                type: 'p',
                text: `After clearing the certification, candidates can join as network engineers, network security analysts, system engineers, network analysts, and many more. `
            },
            {
                type: 'h3',
                text: `CHFI (Computer Hacking Forensic Investigator)`
            },
            {
                type: 'p',
                text: `CHFI is a forensic investigator course, and this course provide the details of data acquisition and duplication, Windows forensics, Linux and Mac forensics, IoT forensics, malware forensics, network forensics, and many more. `
            },
            {
                type: 'p',
                text: `It is possible to successfully conduct a computer forensic investigation that results in the prosecution of offenders by taking CHFI, a thorough course that covers major forensic investigation scenarios and gives students hands-on experience with various forensic investigation techniques.`
            },
            {
                type: 'p',
                text: `Once the candidates clear the certification, they can join as IT security specialists, security engineers, security forensic investigators, and many more.`
            },
            {
                type: 'h3',
                text: `Self-Study Path`
            },
            {
                type: 'p',
                text: `Now let’s talk about the self-study path. If someone cannot afford the certification fees or for any other reason, what steps must they take to develop the skills and knowledge required to enter the cybersecurity domain without difficulty?`
            },
            {
                type: 'p',
                text: `Choose any one field in the cybersecurity domain and try to figure out what are the syllabus and topics are that you need to learn in order to master that specific field. There are plenty of online portals where fundamental and advanced levels of knowledge are provided to you. `
            },
            {
                type: 'p',
                text: `For instance, if you choose web application penetration testing, then lots of online portals are available to gain knowledge, such as Portswigger academy, Hack the Box Academy, Mozilla mdn web docs, and many more. These free resources does not provide any certification but they can help  build the skills and knowledge that you require.`
            },
            {
                type: 'p',
                text: `A major problem in self-study is clearing doubts. Once you have started learning, there is a good chance that you will have many doubts, so the easiest way to clear those doubts is to join online community groups like discord groups, wilders security forums, cybersecurity insiders, and so on.`
            },
            {
                type: 'h3',
                text: `Conclusion`
            },
            {
                type: 'p',
                text: `We’ve mostly seen different paths of cybersecurity as a newcomer in this blog; also check out the certification path and the self-study path. It is possible to achieve the best results if you choose one dedicated path and organise your study wisely. `
            },
            {
                type: 'p',
                text: `Once you have choose the area of interest, it is easy to develop the required skills. The only things required is dedication, which is easy to achieve with self-discipline. It is entirely up to you whether to pursue certification or self-study. To master all of those skills, both paths necessitate a lot of hard work and practice.`
            },
            {
                type: 'p',
                text: `Keep learning and keep exploring!`
            },

        ]
    },
    {
        seo: {
            title: "How to turn your Firewall concepts from zero to hero",
            description: 'A firewall is one such solution that prevents unauthorised access to our computer systems and data. Now a days, protecting our sensitive data from unauthorised and unwanted sources is a major concern.  ',
            og_img: '/assets/images/blog/14.webp',
        },
        slug: 'how-to-turn-your-firewall-concepts-from-zero-to-hero',
        category: {
            title: "Computer Networks",
            slug: 'computer-networks'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/14.webp',
            },
            {
                type: 'h1',
                text: `How to turn your Firewall concepts from zero to hero`
            },
            {
                type: 'p',
                isDesc: true,
                text: `A firewall is one such solution that prevents unauthorised access to our computer systems and data. Now a days, protecting our sensitive data from unauthorised and unwanted sources is a major concern.   `
            },
            {
                type: 'p',
                text: `A firewall is one such solution that prevents unauthorised access to our computer systems and data. Now a days, protecting our sensitive data from unauthorised and unwanted sources is a major concern.  `
            },
            {
                type: 'p',
                text: `We will discuss in this article the fundamentals of firewalls, such as their necessity, uses, drawbacks, and different types. Firewalls are mostly used by system administrators, system engineers, network engineers, and network administrators because they have to handle the configuration, troubleshooting, and monitoring of firewalls.`
            },
            {
                type: 'h3',
                text: `What exactly is Firewall?`
            },
            {
                type: 'p',
                text: `A firewall is a computer system or network component that allows authorised communications while preventing unauthorised access. Firewalls are still widely used and have had a significant effect on current security practises. `
            },
            {
                type: 'p',
                text: `Software, hardware, or a hybrid of the two can be used to implement firewalls. Unauthorized internet users are frequently prevented from accessing private networks linked to the internet by firewalls, particularly intranets. Every message entering or leaving the intranet must travel through the firewall, which inspects each one and rejects any that do not adhere to established security requirements.`
            },
            {
                type: 'h4',
                text: `Firewall working`
            },
            {
                type: 'p',
                text: `A firewall system analyses network traffic using pre-established rules. Following that, it filters the traffic to stop any of that traffic from originating from unreliable or illegal sources. Only inbound traffic that has been set to accept is allowed. `
            },
            {
                type: 'p',
                text: `Firewalls utilise the following three methods to control traffic entering and exiting a network:`
            },
            {
                type: 'list',
                items: [
                    `Packet filtering`,
                    `Proxy services`,
                    `Stateful packet inspection`,
                ]
            },
            {
                type: 'h4',
                text: `Packet filtering`
            },
            {
                type: 'p',
                text: `Packet filtering is one of the important services provided by firewalls. Packets are small data chunks that are inspected as they pass through the network using user-defined packet filtering rules.`
            },
            {
                type: 'p',
                text: `Packets are permitted or denied based on a wide range of criteria:`
            },
            {
                type: 'list',
                items: [
                    `Source address`,
                    `Source port`,
                    `Destination address`,
                    `Destination port`,
                    `Protocols(IP, TCP, ICMP, etc.)`,


                ]
            },
            {
                type: 'h4',
                text: `Proxy services`
            },
            {
                type: 'p',
                text: `A proxy server basically works as a middle-man for communication between devices. A Proxy server intercepts each message coming into and going out of the network. The true network addresses are effectively masked by the proxy server.`
            },
            {
                type: 'p',
                text: `Proxy servers have long been used to store a local copy of the requested external data. This enhanced performance in circumstances with inadequate bandwidth by enabling clients to request data through the proxy rather than the real external source.`
            },
            {
                type: 'list',
                items: [
                    `Source address`,
                    `Source port`,
                    `Destination address`,
                    `Destination port`,
                    `Protocols(IP, TCP, ICMP, etc.)`,
                ]
            },
            {
                type: 'h4',
                text: `Stateful packet inspection`
            },
            {
                type: 'p',
                text: `For the duration of the session, a “stateful” firewall stores key characteristics of each connection in a trusted information database. Monitoring TCP or UDP sessions between devices allows stateful packet inspection to provide services beyond simple packet filtering.`
            },
            {
                type: 'p',
                text: `Stateful inspection allows for the tracking of connections coming from a trusted network. A state session table that stores this session information enables temporary firewall openings for return traffic that would otherwise be blocked.`
            },
            {
                type: 'p',
                text: `To stop Denial of Service (DoS) attacks, connections from the untrusted network to the trusted network are carefully watched.`
            },
            {
                type: 'h3',
                text: `Firewall types`
            },
            {
                type: 'p',
                text: `Firewalls are of two types:`
            },
            {
                type: 'list',
                items: [
                    ` 	Software firewalls – For home users, software firewalls are the most common type of network protection.They typically come as standalone programmers or a component of comprehensive anti - virus protection software. A software firewall can guard against trojan or worm applications in addition security for both inbound and outbound traffic`,
                    `Hardware firewalls – Every machine on a network can be protected by hardware firewalls, which are incorporated into networking equipment like routers and need minimal configuration to function.
They check a packet’s header using packet filtering techniques to ascertain its source and destination.`

                ]
            },

            {
                type: 'h3',
                text: `Uses of firewall`
            },
            {
                type: 'p',
                text: `The client-server concept, which forms the basis for network security in modern computing, originated from firewalls. To examine traffic and reduce dangers, the majority of devices rely on firewalls or technologies that are quite similar to them.`
            },
            {
                type: 'list',
                items: [
                    `Prevents the delivery of malicious content as well as unauthorised remote access.`,
                    `A firewall can filter traffic and notify the user of intrusions on a single home network.`,
                    `At home networks, static IP addresses are used; they are particularly helpful for always - on connections like cable modems and digital subscriber line(DSL) connections.`,
                    `Network address translation(NAT), a sort of firewall, efficiently protects systems from people who are outside the connection to which they belong.`,
                ]
            },
            {
                type: 'h3',
                text: `Drawbacks of firewall`
            },
            {
                type: 'p',
                text: `Everyone thinks that firewalls are powerful enough to protect our computer systems or networks from online threats. However, “firewall is not very powerful”. Therefore, it’s crucial to employ additional defence mechanisms to assist in safeguarding the network and computer data. Cyber threats are dynamic in nature, a firewall should not be the only component considered while securing the home network.`
            },
            {
                type: 'list',
                items: [
                    `Firewalls are unable to stop the distribution of software or files that are compromised with viruses.`,
                    `Black hat hackers using modems cannot be stopped by firewalls from dialling into or out of an internal network.`,
                    `Firewalls cannot protect already hacked systems.`,
                    `Inaccurately setup security policies will not be secured by firewalls.`,
                    `Firewalls are unable to defend against social engineering and other non - technical security concerns.`,

                ]
            },
            {
                type: 'h3',
                text: `Certifications availables for firewall`
            },
            {
                type: 'p',
                text: `Certifications play an important role for those who are already working as professional network engineers or with similar designations in networking domains. Several certifications are available on the market, but only a few provide the necessary skills and knowledge.`
            },
            {
                type: 'p',
                text: `The Palo Alto and Fortinet Fortigate certifications are highly recommended for qualified Cisco engineers or professional network engineers. Both the certifications do not require any experience or certifications, but they recommend having basic knowledge of networking and cyber threats.`
            },
            {
                type: 'p',
                text: `Core firewall principles like routing, VPN, user authentication, and firewall policies are covered by these certifications. Students will get knowledge about web filters and efficient application control to secure their users. `
            },
            {
                type: 'h3',
                text: `Conclusion`
            },
            {
                type: 'p',
                text: `Firewalls are an essential part of network security; anyone interested in learning about the setup and administration of firewalls, or those who are newbies in network security and want to advance their skill set, can choose this route.`
            },
            {
                type: 'p',
                text: `So in this blog, we have provided an overview of firewall use, types, functions, and limitations. At Networkers Home, we provide both certifications and training for highly qualified Cisco engineers or individuals who want to learn and excel as professionals in firewall.`
            },
            {
                type: 'p',
                text: `Keep learning, keep exploring!`
            },
        ]
    },
    {
        seo: {
            title: "How to make your Ethical hacking look amazing in 6 months",
            description: 'Ethical hacking is the common path that the majority of the candidates are taking. If you have an interest in web application security, then ethical hacking is an excellent first step to take. ',
            og_img: '/assets/images/blog/15.webp',
        },
        slug: 'how-to-make-your-ethical-hacking-look-amazing-in-6-months',
        category: {
            title: "Placement Program",
            slug: 'placement-program'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/15.webp'
            },
            {
                type: 'h1',
                text: `How to make your Ethical hacking look amazing in 6 months`
            },
            {
                type: 'p',
                isDesc: true,
                text: `Ethical hacking is the common path that the majority of the candidates are taking. If you have an interest in web application security, then ethical hacking is an excellent first step to take. `
            },
            {
                type: 'p',
                text: `Data security is the more crucial than ever in today’s world of growing connectivity. Ethical hacking, as the term implies, is all about leveraging your knowledge to strengthen security protocols and defend organisations against potential online dangers. It is a type of security testing that is designed to find loopholes in computer systems, aid businesses in strengthening their security, and stop data breaches.`
            },
            {
                type: 'p',
                text: `In this article, we will learn how someone can brush up on their skills in 6 months so that they will be better at penetration testing or bug bounty hunting.`
            },
            {
                type: 'p',
                text: `Most common certification to start their journey as ethical hackers, i.e., CEH v11 (Certified Ethical Hacker Certification) and majorly certification are provided by offensive security. Most of the top companies in India consider the CEH certification, so it’s highly recommended by security experts to get started with the certification. After gaining more experience, you can consider OSCP certification.`
            },
            {
                type: 'p',
                text: `Candidates are taking an interest in web application penetration testing or bug bounty hunting after completing their ethical hacking course. Furthermore, these are the best cyber security subdomains to begin their journey. So to master ethical hacking, we need to have a basic understanding of all the concepts used in penetration testing.`
            },
            {
                type: 'p',
                text: `First, lets see what are the certifications are available for ethical hacker as beginner or professional level. After that we will see what are topics you need to master for ehtical hacking.`
            },
            {
                type: 'h3',
                text: `Certifications for Ethical hacking:`
            },
            {
                type: 'list',
                items: [
                    `CEH v11(Certified Ethical Hacker) – Beginner level certification`,
                    `OSCP(Offensive Security Certified Professional) – Advanced level certification`,
                    `OSCE(Offensive Security Certified Expert) – Expert level certification`,
                    `OSWE(Offensive Security Web Expert)`,
                    `OSWP(Offensive Security Wireless Professional)`,
                    `OSEE(Offensive Security Exploitation Expert)`,

                ]
            },
            {
                type: 'p',
                text: `There aren’t always levels in the Offensive Security certification process. As long as you finish the necessary course before taking any of the certification exams, you are free to take each one separately. Having said that, the OSCP could be thought of as the “entry-level” exam and the OSEE as the most difficult.`
            },
            {
                type: 'p',
                text: `Now, let’s look at the fundamentals skills and knowledge needed to become the best ethical hacker in six months. The following are some essential steps you must perform:`
            },
            {
                type: 'list',
                items: [
                    `Research and Resources`,
                    `Linux and Windows fundamentals`,
                    `Web application basics`,
                    `Basics of client and server`,
                    `Basics of networking`,
                    `Ethical hacking tools`,
                    `Programming`,
                    `Practice, and lots of practice`,
                ]
            },
            {
                type: 'h3',
                text: `Research and Resources:`
            },
            {
                type: 'p',
                text: `When it comes to research and the resources needed to  become acquainted with all of the terms used in the ethical hacking learning journey, interest is your best friend. If you don’t want to spend time learning new things, it’s difficult to get started in any field.`
            },
            {
                type: 'p',
                text: `If you want to find out about good resources for ethical hacking, read articles from Medium, Quora, and other cyber security blogs. Most experienced white hat hackers write articles describing common vulnerabilities and recommend books that will teach you specific topics in depth. `
            },
            {
                type: 'h2',
                text: `Linux and Windows Fundamentals:`
            },
            {
                type: 'p',
                text: `Linux is a very essential skills to master before entering ethical hacking. To master the linux fundamentals, you must be familiar with the environment, have a good command of the linux directory structure, basic linux terminal commands, the ability to manage files and folders permissions, manage linux users and groups, and the ability to manage and monitor linux services and processes. `
            },
            {
                type: 'p',
                text: `Candidates can master Linux fundamentals by taking free courses of linux fundamentals. There are numerous free linux fundamentals courses available on Udemy, Youtube, Coursera, and other sites.`
            },
            {
                type: 'p',
                text: `Windows basics are also important to master because most organisations rely on the Windows operating system on a daily basis. So to master the basics of Windows fundamentals, you need to learn about groups and policies, active directory, the basics of PowerShell, Windows services, and vulnerabilities.`
            },
            {
                type: 'h3',
                text: `Web Application basics:`
            },
            {
                type: 'p',
                text: `Web applications have lots of features to learn; to understand the basics of web applications, which include URL comprehension, how HTTP request and response work, the roles of client and server, catching services and cookies, web app technology, and web app vulnerabilities.`
            },
            {
                type: 'p',
                text: `Various programming languages are used to create a simple web application or website. A web application consists of two functionalities, i.e., server-side functionality and client-side functionality. `
            },
            {
                type: 'p',
                text: `Client-side functionality consists of several programming languages such as HTML, hyperlinks, forms, CSS, Javascript, VBscript, DOM, Ajax, JSON, same-origin policy, HTML5, Web 2.0, state and sessions.`
            },
            {
                type: 'p',
                text: `Server-side functionality consists of several scripting languages (PHP, Vbscript, and Perl), web application platforms (ASP.net and Java), web servers (Apache, IIS, and Netscape Enterprise), databases (Ms-SQL, Oracle, and My-SQL), and other back-end elements, including filesystems, SOAP-based web services, and directory services.`
            },
            {
                type: 'h3',
                text: `Basics of Client and Server:`
            },
            {
                type: 'p',
                text: `As we have mentioned above, what are the functionalities of client-side and server-side application? You might learn which languages are used on both side of functionalities.`
            },
            {
                type: 'p',
                text: `You also need to learn and understand what client and server are, what types of servers are used, how passwords are stored in servers, how client and server works, how they interact with each other. `
            },
            {
                type: 'h3',
                text: `Basics of Networking:`
            },
            {
                type: 'p',
                text: `The concept of networking is critical in the journey of ethical hacking. Candidates who ignore this part are not able to understand the basics of web application penetration testing. Most of the tools and reconnaissance concepts are linked with networking concepts. `
            },
            {
                type: 'p',
                text: `Security experts recommend that you understand networking concepts such as protocol services and port numbers, TCP 3-way handshake, TCP headers and UDP headers, Secure Socket layer (SSL), OSI layers, network topologies, the TCP/IP protocol, subnetting, tunneling, network service vulnerabilities, and so on.`
            },
            {
                type: 'h3',
                text: `Ethical hacking tools:`
            },
            {
                type: 'p',
                text: `Tools are most important part of ethical hacking to do reconnaissance or find vulnerabilities in computer systems, web applications, and networks. These tools will help to do active and passive reconnaissance as per your requirements.`
            },
            {
                type: 'p',
                text: `There are lots of several open-source and commercial tools available in the market that are widely used to prevent unauthorized access to a computer system. `
            },
            {
                type: 'p',
                text: `Most of the highly used tools are listed below:`
            },
            {
                type: 'list',
                items: [
                    `Nmap`,
                    `Metasploit`,
                    `Burpsuite or OWASP ZAP`,
                    `Wappalyzer`,
                    `Maltego`,
                    `Dirbuster`,
                    `Nuclei`,
                    `Httpx`,
                    `Assetfinder`,
                ]
            },
            {
                type: 'p',
                text: `Practice each and every tool one-by-one and try to master them all. There are also lots of other tools are available. Each tools is used for a particular purpose, like subdomain enumeration; tools such as subfinder, assetfinder, httpx, sublist3r, amass, etc. `
            },
            {
                type: 'h3',
                text: `Programming skills:`
            },
            {
                type: 'p',
                text: `An in-depth knowledge of how computer systems operate and how to take advantage of weaknesses is necessary for ethical hacking. Finding and exploiting these vulnerabilities would be impossible without solid programming skills.`
            },
            {
                type: 'p',
                text: `Candidates should have a basic understanding of programming languages and be able to read and identify errors in source code while performing source code analysis. You don’t have to master each and every programming languages; just master any of the programming languages. `
            },
            {
                type: 'p',
                text: `Python is a popular programming language; most tools are written in either Python or Go. Python is also a scripting language. When you become experienced in ethical hacking or web application penetration testing, you have to build your own tools because you cannot rely on other’s.`
            },
            {
                type: 'h3',
                text: `Practice, and lots of Practice:`
            },
            {
                type: 'p',
                text: `Practice will help you sharpen your skills; without practice, no one can become an ethical hacker. Most of the candidates are now unsure where they can practice, even though there are numerous online options. The following online reaources are highly recommended online for practising linux, networking, windows enumeration, web application hacking concepts, and so on:`
            },
            {
                type: 'list',
                items: [
                    `bWAPP(Buggy web application)`,
                    `OverTheWire`,
                    `PicoCTF`,
                    `Hack this site`,
                    `Try hack me`,
                    `Hack the box`,
                    `Vulnhub`,

                ]
            },
            {
                type: 'p',
                text: `OverTheWire will help you practise linux commands, bWAPP is being developed to practise all the web application vulnerabilities, the PicoCTF website provides capture the flag challenges, and Vulnhub has lots of options like CTF, “boot to root” types of machines, and many more.`
            },
            {
                type: 'h3',
                text: `Conclusion:`
            },
            {
                type: 'p',
                text: `The discipline of ethical hacking is demanding and profitable, and experts in it can contribute to global safety. To enrol in an ethical hacking institutes and learn how to become an ethical hacker, you must possess excellent technical abilities and a thorough knowledge of computer networks and systems. If you have the necessary knowledge and expertise, you should have no trouble getting employment as the job prospects for ethical hackers is favourable.`
            },
            {
                type: 'p',
                text: `While ethical hackers play a crucial role in the modern digital world, it’s important to keep in mind that they are not impenetrable. Just spend time mastering each and every topic mentioned above and keep your concepts clear.`
            },
            {
                type: 'p',
                text: `Keep learning and start exploring.`
            },
        ]
    },
    {
        seo: {
            title: "Understand levels of AWS certification for professionals",
            description: 'Big giant organisations are moving their software environments into the AWS (Amazon Web Services) cloud, and the count is still going on. This is the big reason cloud certifications are becoming vital skills in the IT domains',
            og_img: '/assets/images/blog/18.webp',
        },
        slug: 'understand-levels-of-AWS-certification-for-professionals',
        category: {
            title: "AWS",
            slug: 'aws'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/18.webp'
            },
            {
                type: 'h1',
                text: `Understand levels of AWS certification for professionals`
            },
            {
                type: 'p',
                isDesc: true,

                text: `Big giant organisations are moving their software environments into the AWS (Amazon Web Services) cloud, and the count is still going on. This is the big reason cloud certifications are becoming vital skills in the IT domains, and mostly all organizations, whether they are small businesses or large corporations, need people like cloud engineers, cloud administrators, cloud security, and many more.`
            },
            {
                type: 'p',
                text: `Anyone who wants to take certification has a big reason for doing so. It helps to add value to their resume and gives them chance to get a better salary, and anyone who wants to expand their knowledge should consider getting certified. `
            },
            {
                type: 'p',
                text: `Likewise, AWS certification helps them enhance their knowledge and develop a good understanding of the cloud services offered by AWS.`
            },
            {
                type: 'p',
                text: `This blog provides a brief understanding of all levels of AWS certification, who can take the certification according to the level, and after completing the certification, what kind of job are available for them.`
            },
            {
                type: 'h3',
                text: `AWS Certifications of Various Types`
            },
            {
                type: 'p',
                text: `The AWS cloud service offers three levels of certification based on the required experience.`
            },
            {
                type: 'list',
                items: [
                    `Foundation`,
                    `Associate`,
                    `Professional`,
                ]
            },
            {
                type: 'h3',
                text: `Foundation Level`
            },
            {
                type: 'p',
                text: `An AWS cloud practitioner is the foundation level certification. This certification is not mandatory; it’s an optional foundational-level certificate. This is a basic-level certification that anyone can take, whether they are newcomers to industry or starting their journey in the cloud domain.`
            },
            {
                type: 'p',
                text: `The AWS cloud practitioner certificate provides basic knowledge such as:`
            },
            {
                type: 'list',
                items: [
                    `AWS core services`,
                    `Basic AWS architecture`,
                    `Basics of compliance functions`,
                    `Basics of security`,
                    `Cloud computing infrastructure fundamentals`,
                ]
            },
            {
                type: 'p',
                text: `Jobs after completing AWS cloud practitioner certification:`
            },
            {
                type: 'list',
                items: [
                    `Cloud sys Administrator`,
                    `Cloud engineer`,
                    `Cloud developer`,
                ]
            },
            {
                type: 'p',
                text: `The exam cost is $100, and the duration of the exam is 90 minutes with 65 multiple-choice questions.`
            },
            {
                type: 'h3',
                text: `Associate Level`
            },
            {
                type: 'p',
                text: `The associate level consists of three different certifications. At the associate level, each certification covers broad concepts of cloud computing. Those who wants to take associate level certification they can choose any certification of AWS associate. So let’s check out what the three different AWS associate level certifications are:
`
            },
            {
                type: 'list',
                items: [
                    `AWS Certified Developer`,
                    `AWS Certified Solutions Architect`,
                    `AWS Certified SysOps Administrator`,
                ]
            },
            {
                type: 'h4',
                text: `AWS Certified Developer`
            },
            {
                type: 'p',
                text: `This certification mainly provides a basic understanding of AWS core services and the architectural concept of best practices. This certification provides benefits such as:`
            },
            {
                type: 'list',
                items: [
                    `Teach about how to develop, deploy and design AWS cloud solutions.`,
                    `Implementation of the correct architecture for development`,
                    `Help to understand the various tools used in AWS, which can be used to develop databases, messaging, workflows, and manage notification.`,
                    `Which AWS services are appropriate to use based on the application environment.`,
                    `Write code to improve performance and increase application utilization.`,

                ]
            },
            {
                type: 'p',
                text: `After clearing the AWS Certified Developer Associate exam, there are numerous job opportunities available to start a career in the cloud computing domain, such as cloud developer, cloud architecture, cloud devops engineer, cloud network engineer, cloud data architect, and many more.x`
            },
            {
                type: 'p',
                text: `The exam cost is $150, and the duration of the exam is 130 minutes, with 65 questions of multiple choice.`
            },
            {
                type: 'h4',
                text: `AWS Certified Solutions Architect`
            },
            {
                type: 'p',
                text: `This is an advanced-level certification for professionals with decent knowledge and experience in cloud computing and its features. The benefits of AWS Certified Solutions Architect Associate certification among others:`
            },
            {
                type: 'list',
                items: [
                    `Understanding best architectural practises and cost - effective architectural design`,
                    `Provides a better implementation of necessary security protocols.`,
                    `Utilising a range of AWS tools and services`,
                    `Design and deploy fault - free AWS systems with security and scalability.`,
                    `Identify and estimate AWS costs with perfect control methods.`,
                    `Choose an appropriate AWS service based on database design and security.`,

                ]
            },
            {
                type: 'p',
                text: `After successfully completing this certification you will be ready to enter in cloud computing domain as professional AWS associate. There are same job opportunities available after clearing this certification such as cloud architecture, cloud devops engineer, cloud data architect, etc.`
            },
            {
                type: 'p',
                text: `The exam cost is $150, and the duration of the exam is 130 minutes, with 65 questions of multiple choice.`
            },
            {
                type: 'h4',
                text: `AWS Certified SysOps Administrator`
            },


            {
                type: 'p',
                text: `This certification is also an associate-level certification, and those who having experience working as system administrators, working experience in AWS services, strong IT experience, and an understanding of cloud services are eligible to take this certification exam. `
            },
            {
                type: 'p',
                text: `A certified SysOps administrator also has benefits related to the administrator level, so let’s see what the outcomes are after taking this AWS certification, such as:`
            },
            {
                type: 'list',
                items: [
                    `Provides a hands - on experience in managing, deploying, and operating workloads on AWS.`,
                    `Familiar with security controls and compliance.`,
                    `Provides a brief understanding of command - line interface use in AWS and the AWS management console.`,
                    `A clear concept of AWS networking  and architectured framework`,
                ]
            },

            {
                type: 'p',
                text: `Those interested in taking the AWS Associate SysOps Administrator exam should be aware that it costs $150 and lasts 180 minutes. The exam will be multiple-choice or have an exam lab.`
            },
            {
                type: 'h3',
                text: `Professional Level`
            },
            {
                type: 'p',
                text: `AWS professional-level certification provides AWS Certified Solution Architects. This is an expert-level certification of the same associate level, and only those who have had previous working experience in AWS and also cleared the AWS Solution Architect – Associate exam can take this exam.`
            },
            {
                type: 'p',
                text: `This exam is $300 and lasts 180 minutes with 75 multiple-choice questions.`
            },
            {
                type: 'p',
                text: `There are numerous advantages to taking this certification exam, and it also improves skills and knowledge. Let’s look at some of the outcomes of taking this professional exam, such as:`
            },
            {
                type: 'list',
                items: [
                    `Provides a hands - on experience in monitoring, migration, and deployment of AWS services.`,
                    `Helps to implement real - world architecture solutions.`,
                    `Use of AWS tools and services.`,
                    `Implementation of cost - effective protocols and security.`,
                    `Provides a clear concepts of an architectural framework`,
                ]
            },
            {
                type: 'h3',
                text: `Wrapping up!`
            },
            {
                type: 'p',
                text: `Certification, from the fundamental to the professional level, can help anyone advance in their career. Each certification requires dedicated study and proper guidance to be cleared, which is why once cleared, they have a lot of value.`
            },
            {
                type: 'p',
                text: `So according to their experience level, a person can choose any AWS certification and try to clear it.`
            },
        ]
    },
    {
        seo: {
            title: "Best Roadmap for B.Tech, BCA or Graduates",
            description: 'In today’s world, mostly everyone wants to work for top MNCs or start their career in IT domains. The main reason they wants to work in the IT industry is that it is so vast . There are different job domains available to start a person’s career as a beginner. ',
            og_img: '/assets/images/blog/19.webp',
        },
        slug: 'best-roadmap-for-b-tech-BCA-or-graduates',
        category: {
            title: "Placement Program",
            slug: 'placement-program'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/19.webp'
            },
            {
                type: 'h1',
                text: `Best Roadmap for B.Tech, BCA or Graduates`
            },
            {
                type: 'p',
                isDesc: true,
                text: `In today’s world, mostly everyone wants to work for top MNCs or start their career in IT domains. The main reason they wants to work in the IT industry is that it is so vast . There are different job domains available to start a person’s career as a beginner. 
`
            },
            {
                type: 'p',
                text: `Those who have completed their bachelor’s or master’s degree can easily join the IT industry if they have the required skills and knowledge. But if they don’t have the required skills and knowledge, then they can take different course as per their interest, and after that, they can join the industry.`
            },
            {
                type: 'p',
                text: `The candidates having bachelor’s or master degree such as BCA, B.E., B.Tech., B.Sc., MCA, M.Tech., and M.Sc. can easily take different online course to upskill their knowledge. Most of them have doubts about which course is best for them to get a better job. `
            },
            {
                type: 'p',
                text: `This blog is a proper guide or roadmap of the best online courses available for beginners to get a better job after graduation. Candidates who do not have a background in computer science or information technology can also enrol in these courses and begin their career in the IT field.`
            },
            {
                type: 'p',
                text: `Without wasting time, let’s us begin with various courses that a graduate can take.`
            },
            {
                type: 'h3',
                text: `Courses after Students Graduation`
            },
            {
                type: 'h4',
                text: `1. CCNA – CISCO Certified Network Associate (200-301)
`
            },
            {
                type: 'p',
                text: `The most popular course for beginning a career in IT is the CCNA. There are various job opportunities available after completing the CCNA. This course provides a deep understanding of the networking fundamentals used in an organisation.`
            },
            {
                type: 'p',
                text: `Let’s see what major topics are covered in the CCNA course:`
            },
            {
                type: 'list',
                items: [
                    `Fundamentals of networking`,
                    `Routing and subnetting`,
                    `Switching technologies`,
                    `IP services and connectivity`,
                    `Network automation`,
                    `Security in Network`,
                ]
            },

            {
                type: 'p',
                text: `After learning and successfully completing the certification exam, candidates can apply for different entry-level jobs in the IT domain, such as:`
            },
            {
                type: 'list',
                items: [
                    `Network engineer`,
                    `Network administrator`,
                    `System administrator`,
                    `System engineer`,
                    `Technical network support engineer`,
                ]
            },

            {
                type: 'p',
                text: `Candidates can get an annual salary package of Rs. 3.5 LPA to Rs. 7 LPA as per their knowledge and skills.`
            },
            {
                type: 'h4',
                text: `2. CEH – Certified Ethical hacker v11`
            },
            {
                type: 'p',
                text: `Cyber security is a very popular field in the IT industry, and those who want to build their careers in cyber security can take the CEH course. After they clear the certification, they will be officially called “ethical hackers.” The certification is valid for three years.`
            },
            {
                type: 'p',
                text: `This CEH course provides a vast knowledge of cybersecurity, and lots of career opportunities are available after clearing the certification exam. Let’s see what topics are covered in the CEH course:`
            },
            {
                type: 'list',
                items: [
                    `Introduction to Ethical hacking`,
                    `Information gathering and Reconnaissance tactics`,
                    `Networking concepts`,
                    `Cryptographic technologies`,
                    `Web application testing`,
                    `Testing methodologies`,
                    `Malware analysis`,
                    `Cloud computing networking`,
                    `Phases of hacking`,
                ]
            },
            {
                type: 'p',
                text: `CEH certification is a valuable course for cyber security, and after clearing the certification, various job options are available. As per their interests, candidates can choose any one domain to start a career in cyber security. The following are the job opportunities for CEH certified individuals:`
            },
            {
                type: 'list',
                items: [
                    `Security engineer`,
                    `Penetration testing`,
                    `Malware analyst`,
                    `Network security engineer`,
                    `Vulnerability analyst`,
                    `SoC analyst`,

                ]

            },
            {
                type: 'p',
                text: `Initially, CEH-certified candidates can easily get annual salary package of Rs. 4 LPA to Rs. 6 LPA as per their skills and knowledge.`
            },
            {
                type: 'h3',
                text: `3. Cloud Computing Course`
            },
            {
                type: 'p',
                text: `Cloud computing is one of the best domains in the IT industry. Most organisations need a cloud engineer to maintain their cloud infrastructure. There are several cloud service providers that offer beginner-level certification to understand cloud computing services if you want to get into the cloud domain.`
            },
            {
                type: 'p',
                text: `The most valuable cloud service providers are AWS, Azure, and Google. They all provide an initial level of certification to understand and implement services in organisations.`
            },
            {
                type: 'p',
                text: `Let’s see what beginner-level certifications are available from different cloud services:`
            },
            {
                type: 'p',
                items: [
                    `AWS – AWS Certified Cloud Practitioner(CLF - C01)`,
                    `Azure – Microsoft Azure Fundamental(AZ - 900)`,
                    `Google – Google Cloud Digital Leader`,
                ]
            },
            {
                type: 'p',
                text: `Choose any of the mentioned beginner-level certifications and develop the skills and knowledge required to enter into cloud computing domain. The following are the job opportunities for cloud computing:`
            },
            {
                type: 'list',
                items: [
                    `Cloud system admin`,
                    `Cloud engineer`,
                    `Cloud developer`,

                ]
            },
            {
                type: 'p',
                text: `The initial salary after getting certified in cloud computing starts at Rs. 3.5 LPA to Rs. 4 LPA.`
            },
            {
                type: 'h3',
                text: `4. Web Development Course`
            },
            {
                type: 'p',
                text: `A web development course consists of both front-end and back-end development. Candidates who have an interest in front-end development need to learn the fundamentals of HTML, CSS, and JavaScript (Jquery and Angular.js). `
            },
            {
                type: 'p',
                text: `Those who have interest in back-end development need to learn PHP, Java, SQL, Python and Node.js. Some candidates having interest in learning both front-end and back-end, they are known as “Full-stack engineers.”`
            },
            {
                type: 'p',
                text: `All the three niche of web development have scope in the IT industry, but only you need to develop those skills and knowledge.`
            },
            {
                type: 'p',
                text: `Also, there is one more domain available in web development, i.e., UI/UX designer. They basically design the user interface of an application or product. The plus point is that only you have to master HTML, CSS, and also creativity in designing.`
            },
            {
                type: 'p',
                text: `The initial salary of a web developer or web designer starts at Rs. 3.5 LPA.`
            },
            {
                type: 'h3',
                text: `5. Data Engineer Course`
            },
            {
                type: 'p',
                text: `Data engineering is one of the most demanding jobs of the past few years. Data engineers works under the data scientist, and their main responsibilities are to collect data, manage it, and convert it into an understandable form for data scientists.`
            },
            {
                type: 'p',
                text: `Lets see what topics are covered in Data Engineer course:`
            },
            {
                type: 'list',
                items: [
                    `Introduction to Data Engineering`,
                    `Python programming concepts`,
                    `Database understanding such as SQL, No SQL, Mongodb, etc`,
                    `Data warehousing such as HIVE, Apache spark, Kafka, Hadoop, etc`,
                    `Machine learning`,


                ]
            },
            {
                type: 'p',
                text: `There are various job options are available for beginner Data engineering such as Data Architect, Database Administrator, and Data Engineer.`
            },
            {
                type: 'h3',
                text: `Conclusion`
            },
            {
                type: 'p',
                text: `All the courses mentioned above are beginner-friendly, and whatever course candidates choose, they will get knowledge from the basics to advanced. If someone is interested in taking networking, ethical hacking, or cloud computing courses, they can contact Networkers Home. Here we guide candidates from the basic to advance, so they can easily attend the interview without any hesitation.`
            },
            {
                type: 'p',
                text: `Those who have completed their graduation and master’s in computer science or any other specialisation and who want to upskill their knowledge then they can choose any one course and start their journey. There are unlimited job opportunities are available in market, only the organisations need skills and knowledge.`
            },
            {
                type: 'p',
                text: `Keep Learning and keep exploring!`
            },
        ]
    },
    {
        seo: {
            title: "The Top Beginner Level Networking Jobs – How to achieve them in 2023",
            description: 'Computer networking is a hot domain to start a career in the IT industry. Since the last 15 years, networking has been an essential skill for every organisation. To build a network infrastructure in an organisation, there is always a need of network engineer, administrator and system engineer. ',
            og_img: '/assets/images/blog/16.webp',
        },
        slug: 'the-top-beginner-level-networking-jobs–how-to-achieve-them-in-2023',
        category: {
            title: "Placement Program",
            slug: 'placement-program'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/16.webp'
            },
            {
                type: 'h1',
                text: `The Top Beginner Level Networking Jobs – How to achieve them in 2023`
            },
            {
                type: 'p',
                isDesc: true,
                text: `Computer networking is a hot domain to start a career in the IT industry. Since the last 15 years, networking has been an essential skill for every organisation. To build a network infrastructure in an organisation, there is always a need of network engineer, administrator and system engineer. `
            },
            {
                type: 'p',
                text: `These people build, manage, operate, and design the network infrastructure, and if any issue arise, they can troubleshoot and diagnose them with the help of their skills and knowledge.`
            },
            {
                type: 'p',
                text: `That is why candidates must develop those skills so that they can confidently join organisations. To build these skills, they can take a certification course, which will make them ready for industry.`
            },
            {
                type: 'p',
                text: `So in this blog, we will discuss about three best certifications in networking that will really help build the desired skills, and after that, we will take a look at the top networking jobs for beginners.
`
            },
            {
                type: 'p',
                text: `Let’s get started with three different certification courses in networking.`
            },
            {
                type: 'h2',
                text: `Certification Courses in Networking`
            },
            {
                type: 'h3',
                text: `1. CCNA – Cisco Certified Network Associate`
            },
            {
                type: 'p',
                text: `The CCNA programme is the most well-liked way to start a career in IT. Most of the organisation preferred CCNA certification in resumes, and if candidates mentioned it in their resumes, they got priority. `
            },
            {
                type: 'p',
                text: `This certification provides an overview of networking concepts and technology used in infrastructure. Those who want to learn advanced knowledge in routing and switching will choose the next certification on the list.
`
            },
            {
                type: 'h3',
                text: `2. CCNP -  Cisco Certified Network Professional`
            },
            {
                type: 'p',
                text: `The CCNP certification is an advanced certification of the CCNA. This certification provides an overview of SD-WAN, advanced routing and switching, Cisco Encor and Enarsi modules, and many more. 
`
            },
            {
                type: 'p',
                text: `There are no pre-requisites of enrolling in this certification, but it’s really important to understand the basic concepts of networking taught in the CCNA certification. That is why most professionals recommend completing the CCNA certification first, followed by the CCNP. 
`
            },
            {
                type: 'h3',
                text: `3. CCIE Enterprise Certification`
            },
            {
                type: 'p',
                text: `The CCIE Enterprise certification is an advanced-level course that is mainly for freshmen engineers. This certification covers all the topics of CCNA, CCNP, SDWAN, firewall concepts, and Python automation. `
            },
            {
                type: 'p',
                text: `Again, there are no pre-requisites of enrolling in this certification, except that candidates should have completed their graduation.
                `
            },
            {
                type: 'p',
                text: `Now let’s see what the five top networking jobs are for graduates.`
            },
            {
                type: 'h3',
                text: `Networking jobs for beginners`
            },
            {
                type: 'p',
                text: `Note: After clearing the CCNA certification, you will have entry-level career options, but if your aim is to enter a better position, it is necessary to level up your knowledge by taking the CCNP certification. `
            },
            {
                type: 'p',
                text: `Still, if someone wants to enter into a job after clearing the CCNA, then the below mentioned entry-level career options are available:`
            },
            {
                type: 'list',
                items: [
                    `Technical Support Engineer`,
                    `Junior System Engineer`,
                    `Network Engineer`,
                    `Network associate`,
                    `Network analyst`,
                ]
            },
            {
                type: 'p',
                text: `All the above-mentioned career options have salary packages starting from Rs. 2.5 to Rs 4 LPA. The initial salary packages is entirely dependent on location and skills. `
            },
            {
                type: 'p',
                text: `Now let’s see what career options are available after clearing both the CCNA and CCNP certification.`
            },
            {
                type: 'h3',
                text: `Career options after CCNP or CCIE certified`
            },
            {
                type: 'p',
                text: `As we have discussed earlier, CCNP and CCIE certifications provide an advanced level of skills and knowledge. Accordingly, it also provide a broad level of career options, and those who are already working as junior network engineers or associates can up-skill their career after CCNP or CCIE certification.`
            },
            {
                type: 'h4',
                text: `Senior Network Engineer`
            },
            {
                type: 'p',
                text: `A senior Network Engineer’s primary job role is to configure, troubleshoot, and maintain software, routers, servers and different network devices. Designing and deploying of network infrastructure, and monitoring network performance.`
            },
            {
                type: 'p',
                text: `Salary estimates for a Senior Network Engineer range from Rs. 7 LPA to Rs. 16 LPA, depending on experience.`
            },
            {
                type: 'h4',
                text: `Infrastructure Network Engineer`
            },
            {
                type: 'p',
                text: `The following are the roles and responsibilities of an Infrastructure Network Engineer:`
            },
            {
                type: 'list',
                items: [
                    `New network infrastructure involves the design and implementation of servers, routers, firewall, switches, hubs, and other components.`,
                    `Installing and configuring software and hardware. `,
                    `Monitoring network activity and maintaining network security for suspicious activity.`,
                    `Analysing and troubleshooting problems with existing devices.`,
                ]
            },
            {
                type: 'p',
                text: `An infrastructure network engineer should have a good command on networking skills, technical troubleshooting, communication, and project management skills.`
            },
            {
                type: 'p',
                text: `Salary estimates for infrastructure network engineer range from Rs. 4 LPA to Rs. 10 LPA, depending on job location and experience.`
            },
            {
                type: 'h3',
                text: `Network Specialist`
            },
            {
                type: 'p',
                text: `A network expert needs a broad variety of abilities. The most crucial requirements is that you have a solid foundation in networks. Additionally, you’ll need to be able to function well under pressure because when the network goes down, you’ll need to be capable of rapidly pinpoint the issue and create and put into place the best remedy.`
            },
            {
                type: 'p',
                text: `The salary estimation of network specialist in India range from Rs. 5 LPA to Rs. 9 LPA, depending on job location and experience.`
            },
            {
                type: 'h4',
                text: `Network Security Engineer`
            },
            {
                type: 'p',
                text: `The process of protecting a computer network infrastructure from network interruption is known as network security. The need for firms to adapt has become critical as security pressures become more sophisticated. The facilities need to be aware of the hazards that are present, and they should design strong safety measures to manage risk.`
            },
            {
                type: 'p',
                text: `The main roles and responsibilities of network engineer are:`
            },
            {
                type: 'list',
                items: [
                    `Assure network integrity by providing advanced expertise in the development of network testing, validation, and integration plans for projects.`,
                    `Design, implementation and evaluation of network firewall and IDS / IPS system.`,
                    `Regular research, analyze, testing, and troubleshooting problems.`,

                ]
            },
            {
                type: 'p',
                text: `The salary estimation of network security engineer in India range from Rs. 6 LPA to Rs. 10 LPA as per experience and location.`
            },
            {
                type: 'h3',
                text: `Conclusion`
            },
            {
                type: 'p',
                text: `The opportunities for networking are never going to end. Both CCNP and CCIE certified professionals get numerous job offers from all over the world. With the best skills and knowledge, they will get excellent salaries and respectable designations.`
            },
        ]
    },
    {
        seo: {
            title: "Cloud Vulnerability and Security Threat in Cloud Computing",
            description: 'Cloud storage and cloud security are two of the newest innovations in the world of contemporary generations. Cloud services could prevent the potential benefits if there is insufficient and suitable security protection, which would eventually lead to greater costs and possible loss of the firm.',
            og_img: '/assets/images/blog/17.webp',
        },
        slug: 'cloud-vulnerability-and-security-threat-in-cloud-computing',
        category: {
            title: "Cloud Computing",
            slug: 'cloud-computing'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/17.webp'
            },
            {
                type: 'h1',
                text: `Cloud Vulnerability and Security Threat in Cloud Computing`
            },
            {
                type: 'p',
                isDesc: true,

                text: `Cloud storage and cloud security are two of the newest innovations in the world of contemporary generations. Cloud services could prevent the potential benefits if there is insufficient and suitable security protection, which would eventually lead to greater costs and possible loss of the firm.`
            },
            {
                type: 'p',
                text: `When a firm adopts cloud computing, it is crucial to comprehend all the dangers and security hazards associated with it. There is no doubt cloud computing provides lots of benefits to organizations but it’s also true that cloud is not fully protected from hackers.`
            },
            {
                type: 'p',
                text: `In this blog, we will see what are the five common challenges or vulnerabilities of cloud computing security and how we can mitigate those security issues.`
            },
            {
                type: 'h2',
                text: `Data Theft of Intellectual Property`
            },
            {
                type: 'p',
                text: `Most of the cloud security threats are done through file uploads to cloud-based file-sharing sites contain sensitive information, including IP. When these cloud service are breached, attackers gain access to the private data stored in them.`
            },
            {
                type: 'p',
                text: `They make attractive targets and typically sustain the most harm when their data is stolen. It is among the most hazardous vulnerabilities in cloud computing.`
            },
            {
                type: 'h4',
                text: `Mitigation of Data Theft or Breaches`
            },
            {
                type: 'p',
                text: `To prevent data breaches, we must implement regular countermeasures to protect cloud computing data, such as:`
            },
            {
                type: 'list',
                items: [
                    `Regular security inspections`,
                    `Secure servers that use  encryption`,
                    `Plan for handling incidents`,

                ]
            },
            {
                type: 'h3',
                text: `Lost control over users action`
            },
            {
                type: 'p',
                text: `This type of vulnerability occurs when organisations lose control of their data assets and become exposed to security breaches and insider threats if they are unaware of how their staff are using cloud computing services.`
            },
            {
                type: 'p',
                text: `VPNs, firewalls, and other security measures are not necessary for employees to access the internal data stored on an organization’s cloud. They can easily and directly access private data stored in the cloud infrastructure. This may result from confidential information and intellectual property, which would clearly have negative effects on the company.`
            },
            {
                type: 'h4',
                text: `Mitigation of lost control over users actions`
            },
            {
                type: 'p',
                text: `We can prevent losing control over users’ actions by implementing security measures. The most valuable security measure is to provide training to employees so they can understand the common vulnerabilities, such as malware and phishing. When using cloud computing services, use this technology to protect any private data. Inform them of the consequences of malicious behaviour.`
            },
            {
                type: 'p',
                text: `Conduct regular server audits in the cloud architecture to find exploitable data security issues and promptly remedy them.`
            },
            {
                type: 'h3',
                text: `Insecure APIs`
            },
            {
                type: 'p',
                text: `Through the use of APIs, unconnected software products can interact and communicate without being aware of one another’s internal workings. APIs are typically necessary and frequently provide access to crucial corporate data. `
            },
            {
                type: 'p',
                text: `Businesses release a lot of public APIs to speed up the adoption of new technologies by enabling third-party developers and business partners to access their products and data. APIs are completely unsecured; anyone can access and misuse the data. That’s the reason APIs are major targets for hackers.`
            },
            {
                type: 'p',
                text: `Most of the organisations make public access to their APIs available so that third-party developers and business partners can use their software platforms. Because APIs are public access, attackers have discovered widespread methods to use insecure APIs for illegal purposes. `
            },
            {
                type: 'p',
                text: `When developers create APIs without providing proper authentication controls. While accessing open APIs, they can access enterprise data and systems.`
            },
            {
                type: 'h4',
                text: `Mitigation of Insecure APIs`
            },
            {
                type: 'p',
                text: `To prevent insecure APIs, we must follow a few steps to secure the APIs, such as:`
            },
            {
                type: 'list',
                items: [
                    `Regularly run penetration tests that simulate outside attacks on your API endpoints and acquire a secure code review. `,
                    `APIs should be secured, so to do that, developers need to create APIs with encryption, reliable access control, activity tracking, and authentication.`,
                    `Data transmission should be encrypted using SSL / TLS.`,
                    `Multi - factor authentication helps increase security measures.`,
                ]
            },
            {
                type: 'h3',
                text: `Misconfiguration of Cloud Storage`
            },
            {
                type: 'p',
                text: `This cloud computing vulnerability is most common in cloud services; it occurs when organisations fail to properly set up cloud storage, resulting in exposed data. Businesses still misconfigure cloud storage, which has cost several companies millions of dollars, despite the potentially serious effects.`
            },
            {
                type: 'p',
                text: `Some of the examples of misconfiguration include:`
            },
            {
                type: 'list',
                items: [
                    `AWS security group setup errors can be used by an attacker to gain access to your cloud servers and steal data because at the level of the source, destination, port, and protocol, AWS security groups offer control access.`,
                    `Unsecure cloud storage buckets could potentially provide hackers access to your organization’s important data and allow them to download it.Initially, S3 buckets on AWS were enabled by default, which led to several data breaches.`

                ]
            },
            {
                type: 'h4',
                text: `Mitigation of misconfigured cloud storage`
            },
            {
                type: 'p',
                text: `To prevent the misconfiguration of cloud storage, the configurations need to be checked properly after setting up a cloud server. This may seem simple, but other activities, like putting data into the cloud without considering its security, might easily let it go unnoticed.`
            },
            {
                type: 'p',
                text: `Another main issue is that many organisations are moving to cloud computing without having proper guidance or understanding of how to secure their data.`
            },
            {
                type: 'h3',
                text: `Improper Access Management`
            },
            {
                type: 'p',
                text: `Access management provides authorization to individuals so they can perform the provided tasks. Stolen or lost credentials have been the most frequently employed weapon by attackers in breaches affecting web services.`
            },
            {
                type: 'p',
                text: `There are various other cloud-specific concerns that organisations face in addition to the general access control problems they encounter today, such as managing a scattered workforce and user password exhaustion:`
            },
            {
                type: 'list',
                items: [
                    `Assigned inactive users`,
                    `Multiple accounts for administrators`,
                    `Improper provisioning and deprovisioning of users and services, such as when businesses fail to revoke the access rights of former employees.`,

                ]
            },
            {
                type: 'h4',
                text: `Mitigation of improper access management`
            },
            {
                type: 'p',
                text: `Improper access management in cloud computing can be prevented by developing a data governance framework for user accounts. The active directory should be in charge of provisioning, monitoring, and suspending access credentials from a central store; therefore, accounts for all users should be directly linked to these services.`
            },
            {
                type: 'p',
                text: `In order to spot strange behaviour or illegal modifications, organisations should make sure logging and event monitoring methods are in place in cloud environments. Access keys should be carefully handled and under strict supervision to prevent bad data handling or leakage.`
            },
            {
                type: 'h3',
                text: `Conclusion`
            },
            {
                type: 'p',
                text: `Most organisations and businesses are using cloud services, so data security is one of the key topics they should be concerned about. The IT processes that teams use to develop applications and deploy them in the cloud infrastructure must be well integrated into a company’s strong cloud security rules.`
            },
            {
                type: 'p',
                text: `Enterprises must continuously address the dangers and difficulties associated with cloud security while implementing the appropriate security technologies to facilitate operational work.`
            },
            {
                type: 'p',
                text: `In this blog, we have checked most of the common vulnerabilities of cloud computing. However, there are some other vulnerabilities present in cloud computing, such as contractual breaches with customers, unauthorized access, malicious insiders, and many more. All of these are vulnerabilities that attackers can exploit to gain authorization, access data or harms organizations, which is why cloud computing security is a major concern.`
            },
        ]
    },
    {
        seo: {
            title: "The most innovative things happening with cloud computing",
            description: 'Cloud computing is rapidly advancing, and new technologies are being added to the cloud every year. This is the technology that allows data and programmes to be stored over the Internet without the need for a physical hard drive.',
            og_img: '/assets/images/blog/12.webp',
        },
        slug: 'most-innovative-things-happening-with-cloud-computing',
        category: {
            title: "Cloud Computing",
            slug: 'cloud-computing'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/12.webp'
            },
            {
                type: 'h1',
                text: `The most innovative things happening with cloud computing`
            },
            {
                type: 'p',
                isDesc: true,
                text: `Cloud computing is rapidly advancing, and new technologies are being added to the cloud every year. This is the technology that allows data and programmes to be stored over the Internet without the need for a physical hard drive. `
            },
            {
                type: 'p',
                text: `Cloud computing is the delivery of computer services over the Internet (“The cloud”), including storages, databases, servers, networking, software, analytics. It aims to provide rapid innovation, flexible resources, and scale economies. Most of the time, you only pay for the cloud services that you actually use. This reduces operational costs, improves infrastructure management, and enables you to scale as your business’s needs change.`
            },
            {
                type: 'p',
                text: `Before we look at the new cloud computing technologies, let’s look at why cloud computing is important for any organization.`
            },
            {
                type: 'h3',
                text: `Why cloud computing is important for any organization?
`
            },
            {
                type: 'p',
                text: `Cloud computing has numerous advantages for a business or organization; the cloud market is expected to be worth $550 billion by 2023. At below we have mentioned the popular key advantages of cloud in business. `
            },
            {
                type: 'list',
                items: [
                    `Minimum Cost`,
                    `Increased storage`,
                    `Highly Automated`,
                    `Flexibility`,
                    `More mobility`,
                    `Data security and recovery`,

                ]
            },
            {
                type: 'p',
                text: `These are the reasons why your business or organization should consider to adapt cloud computing. Data backups and communications tools are only a couple of the IT services and applications that businesses can access through the cloud.`
            },
            {
                type: 'p',
                text: `Every technology comes with some risk of security, but the advantages of the cloud may be worth the difficulties. You may reduce risks and take advantage of the advantages that cloud-based IT services can offer if take the correct actions and collaborate with the right partners.`
            },
            {
                type: 'h3',
                text: `What are the new cloud computing technologies are comes in last couple of years?`
            },
            {
                type: 'p',
                text: `One significant advancement in the process that has fundamentally altered how business operate is cloud computing. And throughout the years, we have seen a number of new technologies emerge that are supported by cloud computing.`
            },
            {
                type: 'p',
                text: `The development of technology has been centred on cloud computing options and efficient cloud technology use. These innovations are altering the entire computing industry in the process, not just the cloud comuting environment.`
            },
            {
                type: 'h3',
                text: `Here are 5 cutting-edge cloud computing technologies:`
            },
            {
                type: 'h4',
                text: `1. Cloud-Native Applications`
            },
            {
                type: 'p',
                text: `Cloud native technology helps organizations to create and deploy scalable applications on public, private, and hybrid clouds. The term “cloud native” describes the idea of creating and executing programmes that make use of the distributed computing capabilities provided by the cloud delivery model. Apps that are cloud native are created to take advantages of the size, elasticity, robustness, and customization the cloud offers.`
            },
            {
                type: 'p',
                text: `Modern application development is made possible by cloud native services, which utilise tools like Kubernetes, Docker, serverless functions, APIs, and kafka. These tools and services are made available by market-leading cloud providers so that developers can create apps more quickly and reduce operational responsibilities. `
            },
            {
                type: 'p',
                text: `Cloud native services, which offer a complete, standards-based platform, can be used to build, deploy, and mange cloud native applications like microservices and serverless operations.`
            },
            {
                type: 'h4',
                text: `2. Grid Computing`
            },
            {
                type: 'p',
                text: `Grid computing is used by organisations to perform heavy task that are difficult to handle on a single computer. To complete complicated tasks, several computers on a network communicate under a common protocol and operate as a single virtual supercomputer.`
            },
            {
                type: 'p',
                text: `To solve a complex task, organisations use specialised software on every computer. These software programmes are connected to the grid network and help to cordinates with each other and manage all the tasks.`
            },
            {
                type: 'p',
                text: `Each computing task is divided into manageable pieces in grid computing and distributed among computing nodes for quick completion. A difficult task is completed in less time since each fragment is processed in parallel. Grid computing examples such as Weather modeling applications, Data-oriented applications, Commercial applications, and many more. `
            },
            {
                type: 'h4',
                text: `3. Utility Computing`
            },
            {
                type: 'p',
                text: `Utility computing is important to business models and provides a special service provider for customers who want to pay for IT services on a per-usage basis. The shared pool utility is utilised in business utility computing. With this strategy, the business may serve a large number of people while avoiding needless redundancy by centralising its processing power and resources.`
            },
            {
                type: 'p',
                text: `As a result of the massive amounts of data being distributed over numerous servers or backend systems, utility computing helps eliminate data redundancy. However, the client has 24/7 access to the information from any location.`
            },
            {
                type: 'p',
                text: `The cost of utility computing depends on how the organisation uses it and the services it requests. Instead of offering a set rate, the business bills the customer according to the services they use. The client should expect to pay more as they use the services more frequently. Few businesses choose to package their services at a discount.`
            },
            {
                type: 'h4',
                text: `4. Integrated Blockchain Technology`
            },
            {
                type: 'p',
                text: `Blockchains are increasingly acknowledged as the “fifth evolution” of cloud computing and the Internet’s missing trust layer. This is one of the reasons why there is so much interest in this subject. `
            },
            {
                type: 'p',
                text: `As a peer-to-peer system, a blockchain does not have a central organisation controlling the flow of data. Blockchains have the potential to increase data trust. It’s nearly impossible to remove or modify data after it has been added to a blockchain database. This power has never before been possible.
`
            },
            {
                type: 'p',
                text: `Perfect recordkeeping is a fascinating new capability made possible by blockchains. They are useful for establishing a precise timeline of who did what and when. Numerous sectors of the economy and regulatory organisations invest numerous hours in analysing this issue. Records that are kept using blockchain technology will lessen some of the burdens associated with trying to understand the past.
`
            },
            {
                type: 'h4',
                text: `5. Containers`
            },
            {
                type: 'p',
                text: `Software management and deployment in the cloud frequently use containers. Applications are separated from the actual environment in which they are running using containers. A containers runs all the dependencies associated with a software component in isolation and bundles them all.`
            },
            {
                type: 'p',
                text: `Using containers to run an instance of an application is a frequent pattern in the cloud. A single microservice or a backend application like a database or middleware component can serve as this. Multiple apps can operate on the same cloud VM thanks to containers, which also prevent issues with one container from impacting other containers or the VM as a whole.`
            },
            {
                type: 'p',
                text: `Running containers on upper edge of compute resources, that are technically virtual computers, is the most typical situation in the cloud. With the advent of the “container instances” model, cloud providers are now enabling the direct execution of containers on their servers without the use of virtual machines as a middleman.`
            },
            {
                type: 'h3',
                text: `Conclusion`
            },
            {
                type: 'p',
                text: `We have seen in this blog the important technologies that are involving every year and assisting organisations in reducing heavy tasks and managing complex tasks in a simple manner.`
            },
            {
                type: 'p',
                text: `There are also other technologies that were developed through cloud computing technology, such as DevOps, multi-cloud to omni-cloud, quantum computing, service-oriented architecture, artificial intelligence, and many more. The future of cloud computing for businesses and the importance of cloud computing service providers are both highlighted by these exciting new technologies.
`
            },

        ]
    },
    {
        seo: {
            title: "Top IT jobs without knowledge of Coding",
            description: 'Tech is a constantly expanding industry. In the upcoming years, IT employment will increase both domestically and internationally. The idea that coding is necessary for computer professions is a well-known urban legend. Without knowing how to code, there are many computer professionals you can choose from.',
            og_img: '/assets/images/blog/20.webp',
        },
        slug: 'top-it-jobs-without-knowledge-of-coding',
        category: {
            title: "Placement Program",
            slug: 'placement-program'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/20.webp'
            },
            {
                type: 'h1',
                text: `Top IT jobs without knowledge of Coding`
            },
            {
                type: 'p',
                isDesc: true,
                text: `Tech is a constantly expanding industry. In the upcoming years, IT employment will increase both domestically and internationally. The idea that coding is necessary for computer professions is a well-known urban legend. Without knowing how to code, there are many computer professionals you can choose from.`
            },
            {
                type: 'p',
                text: `You might have seen numerous articles in which people completed degrees in non-IT domains and then got jobs in the IT domain after a few months of training. Everyone is capable of doing so, so I’ve created this article to teach you about top IT jobs that don’t require coding knowledge. Individuals can start their careers in the IT industry by mastering the required skills.`
            },
            {
                type: 'h2',
                text: ` 10 Valuable tech careers that don’t require coding`
            },
            {
                type: 'h3',
                text: `1. Network Engineer`
            },
            {
                type: 'p',
                text: `A network engineer is a highly competent technical specialist with the ability to plan, design, and manage various types of networks to ensure smooth data, phone, and video connections, as well as wireless network services.`
            },
            {
                type: 'p',
                text: `They are in charge of establishing advanced network architectures and settings, resolving issues, and managing the security of all the network systems thanks to their networking knowledge.`
            },
            {
                type: 'p',
                text: `To develop networking skills, you must have a good command of networking devices, networking protocols, subnetting and routing, firewalls, and many more. You can grasp this skill through self-study, but it will take time to build those skills. Another way is through enrolling in a certification programme and obtaining the required skills.`
            },
            {
                type: 'p',
                text: `Most of the common beginner-level certifications available in the market are Comptia A+, Comptia N+, Juniper Network certification (JNCIA-Junos), CCNA (Cisco certification), and many more. All of these are beginner-level certifications with low costs.`
            },
            {
                type: 'h4',
                text: `Duties of a network engineer:`
            },
            {
                type: 'list',
                items: [
                    `Identifying, analysing, and resolving network- and device-related hardware, software, and other problems.`,
                    `Fixing faulty hardware network components wherever possible.`,
                    `For virus protection, maintain, personalise, and monitor the device and email applications.`,
                    `Monitoring network performance to see if adjustments are necessary. Meeting with network users to discuss fixing problems with the current networks.`,
                    `Control network and computer system output via master consoles. Coordination of computer networks and access usage.`,
                    `Plan, set up, and test networking hardware, computer hardware, and operating system hardware.`,
                    `Command over the ability to deploy, maintain, and troubleshoot network infrastructure technologies such as wireless access points, firewalls, routers, switches, and controllers.`,
                    `A thorough understanding of network infrastructure and hardware.`,

                ]
            },
            {
                type: 'p',
                text: `For a successful network engineer, a person must have these kinds of skills to get their first job. The average salary a network engineer will get in India is around INR 3.5 to 5 LPA for freshers.`
            },
            {
                type: 'h3',
                text: `2. Operations Manager`
            },
            {
                type: 'p',
                text: `Operations management is responsible for supervising high-level HR responsibilities like recruiting top personnel, enhancing organisational procedures, and working to boost quality, productivity, and efficiency.`
            },
            {
                type: 'p',
                text: `The basic roles and responsibilities of operations managers are to assist HR, promote an organisational culture that values excellence in performance and strong morale, control planning, reporting, auditing, and budgeting, and collaborate with senior stakeholders.`
            },
            {
                type: 'p',
                text: `To become an operations manager, they must have the necessary skills like Bachelor’s degree, and knowledge of management, operations, and leadership. Understanding of budgeting and general finance includes profit and loss, book value, and cash-flow management. `
            },
            {
                type: 'p',
                text: `The capacity to establish relationships and understanding among partners and employees. He should have strong financial management knowledge.`
            },
            {
                type: 'p',
                text: `You can begin your career as an operations manager; you can pursue an MBA in operations management and other certifications such as Advanaced Operations Management and Analytics (IIM Koshikode), Vskills Certified Operations Manager, Operations Management Certification by Wharton Online (Coursera), and many more.`
            },
            {
                type: 'p',
                text: `The average salary an operations manager with a minimum of 4 years of experience will get in India is around INR 4 to 7 LPA, depending on their skills and knowledge.`
            },
            {
                type: 'h3',
                text: `3. Information Architect`
            },
            {
                type: 'p',
                text: `To make information more understandable and user-friendly, information architects design and build user interfaces, visualisations, and layouts for the web, desktop, and mobile devices. The technology architecture of an organisation is designed, implemented, and interacted with by information architects using research and innovation. They usually collaborate with a group of designers to develop how users experience websites and apps.`
            },
            {
                type: 'p',
                text: `To be more successful in this role, they must possess key competencies such as team leadership experience, interpersonal skills when dealing with business and technology stakeholders, and data modelling knowledge.`
            },
            {
                type: 'p',
                text: `Anyone can begin their career as an information architect if they have the required skill sets like business process, user interface, architecture, data models, metadata, and information management. `
            },
            {
                type: 'p',
                text: `As an information architect, the initial salary is around INR 7 to 9 LPA, and with more than 5 years of experience, the salary is around INR 12 to 45 LPA, depending on their skills and knowledge. This IT job doesn’t require coding knowledge to get started.`
            },
            {
                type: 'h3',
                text: `4. Product Manager`
            },
            {
                type: 'p',
                text: `Product management is in charge of providing goods and services that satisfy customers and promote corporate expansion. It is critical to the company’s larger product development cycle, which includes the entire process of transforming a concept into a product that meets customer needs and then assessing the product’s marketability.`
            },
            {
                type: 'p',
                text: `Customer problems are resolved through the product manager’s attention to organising, creating, delivering, and refining solutions. Businesses succeed over the long term when their offerings are strong. Because of this, product management is becoming more and more influential and well-liked.`
            },
            {
                type: 'p',
                text: `Major roles and responsibilities of product managers include:`
            },
            {
                type: 'list',
                items: [
                    `Establishing a distinct product vision and strategy that delivers special value in response to client needs.`,
                    `Defining the product team’s deliverables and the implementation schedule.`,
                    `Assuming a cross - functional leadership role, particularly between engineering teams, sales and marketing teams, and support teams.`,
                    `Evaluating product performance.`,
                    `Accountable for a product’s or product line’s strategy, roadmap, and feature definition.`,
                ]
            },

            {
                type: 'p',
                text: `As a fresher, a person can start a career as a product manager, and this job position doesn’t require coding knowledge to get started. `
            },
            {
                type: 'p',
                text: `So the skills required to start a career as a product manager are, i.e., writing technical requirements and specification, market research, strategic thinking, excellent negotiation skills, critical thinking and analytical skills, and great communication skills. `
            },
            {
                type: 'h3',
                text: `5. Business Analyst`
            },
            {
                type: 'p',
                text: `A business analyst works with different data sets, analyses the data, transforms the data, and creates stunning representations from the data. A business analyst also manages interteam communication. Business analysts are experts who are in charge of gathering requirements, solving issues, visualising data, and much more.`
            },
            {
                type: 'p',
                text: `By understanding business issues and offering solutions that will increase the firm’s value to its stakeholders, a business analyst facilitates change inside the organisations.`
            },
            {
                type: 'p',
                text: `From establishing the corporate architecture to developing the strategy, they are involved in every aspect of the business. Each phase of a project’s life cycle involves the involvement of business analysts. A business analyst studies and documents the operationsl process of a corporation.`
            },
            {
                type: 'p',
                text: `Skills are required for business analysts are as follows:`
            },
            {
                type: 'list',
                items: [
                    `A business analyst may use critical thinking to assess a range of options prior to selecting the desired answer.`,
                    `A business analyst with great interpersonal and communication skills will feel more comfortable running meetings.`,
                    `Business analysts struggle during every stage of a project.Early on in a project, negotiation techniques are used to decide what must be incorporated into the project’s vision.`,
                    `Both directly and indirectly, a business analyst’s actions may have an impact on a company’s operations.Therefore, before making a decision, they should take everything into account.`,

                ]
            },

            {
                type: 'p',
                text: `As a beginner, the aforementioned skills are the fundamentals that are required to begin a career as a business analyst; however as your experience grows, you will need to learn coding languages such as Python and R. There are several libraries and packages available for data wrangling, data manipulation, data visualization, and analytics.`
            },
            {
                type: 'p',
                text: `The initial salary of a business analyst with less than 1 year of experience is INR 3-6 LPA, and with more than 3 years of experience, the average salary is INR 7-10 LPA.`
            },
            {
                type: 'h3',
                text: `6. Technical Writer`
            },
            {
                type: 'p',
                text: `Another excellent option for those looking for non-coding tech jobs is technical writing. A technical writer is a specialist who combines or converts difficult material into documents that are short, clear, and simple to grasp. `
            },
            {
                type: 'p',
                text: `A technical writer is needed to develop or update documentation for a product or service, such as technical manuals, user manuals, guides, white papers, etc., particularly in the IT industry.`
            },
            {
                type: 'p',
                text: `You may argue that technical writers frequently produce content for internal communication as well as writing for users, such as planning, design specifications, audits, etc., with the assistance of the appropriate teams.`
            },
            {
                type: 'p',
                text: `Skills required for technical writers are as follows:`
            },
            {
                type: 'list',
                items: [
                    `Understanding and expertise with your product clearly`,
                    `Comprehensive understanding of the market for your product`,
                    `Basics of technical documentation`,
                    `Controlling the communication channel`,
                    `Knowledge of software tools for technical writing`,
                    `Simple familiarity with graphic and web design`,
                    `Research abilities`,

                ]
            },

            {
                type: 'p',
                text: `Being knowledgeable, clear, informative, and well-organized are all important traits to have in this profession. Many technical writers begin their careers as employees, but some begin as independent contractors.`
            },
            {
                type: 'p',
                text: `One of the best non-programming jobs for software engineers is technical writing, if they have a broad knowledge base and want a break from the challenging tasks. Without having to write a single line of code, it’s the best way to apply your knowledge of many technologies.`
            },
            {
                type: 'p',
                text: `A technical writer’s starting pay is often between INR 4-6 LPA, but it can be greater depending on your qualifications and experience.`
            },
            {
                type: 'h3',
                text: `7. System Administrator`
            },
            {
                type: 'p',
                text: `Every organisation need a system administrator, who is in charge of duties like setting up systems for employees, resolving software issues, setting up servers, backing up files, and a variety of other things. `
            },
            {
                type: 'p',
                text: `A system administrator is responsible for ensuring the systems are secure, work as they should, and operate within the company’s budget. Additionally, he is crucial in the development of an organization’s IT policy.`
            },
            {
                type: 'p',
                text: `Skills required for system admin are as follows:`
            },
            {
                type: 'list',
                items: [
                    `Basic networking skills`,
                    `Troubleshoots problems and fixes system errors as soon as possible.`,
                    `Manage hardware and software upgrades.`,
                    `Investigate new offerings, service protocols, and industry standards to aid in the development and `, `purchase of system software.`,
                    `Install and configure LANs, WANs, network segments, and servers, including file servers, VPN `, `gateways, and intrusion detection systems.`,
                ]
            },
            {
                type: 'p',
                text: `Some of the people take certification course to get started as system administrator, and a few of them don’t do any certification they generally build skills through self learning. `
            },
            {
                type: 'p',
                text: `The entry-level certification that help get a job as a system administrator include, Microsoft certified solutions engineer (MCSE), Comptia Server+, Red Hat certified system administrator (RHCSA), Oracle linux system administrator (Oracle), and many more.`
            },
            {
                type: 'p',
                text: ` In India, the starting pay for a system administrator is roughly INR 4-5 LPA.`
            },
            {
                type: 'h3',
                text: `8. Cybersecurity`
            },
            {
                type: 'p',
                text: `Cybersecurity is a broad field with numerous positions. The majority of roles are classified as offensive or defensive. Offensive security deals with an aggressive strategy for defending against attacks on computer systems, networks, and people. `
            },
            {
                type: 'p',
                text: `Offensive security requires coding knowledge, but defensive security is the domain of cybersecurity, which doesn’t need much more coding knowledge. `
            },
            {
                type: 'p',
                text: `In defensive security job roles like Security engineers, Cybersecurity analysts, Security analyst, Threat research analysts, Security operation centres (SOC), IT Auditors, and many more.`
            },
            {
                type: 'p',
                text: `There are several certifications available to get into defensive security, but those certifications are for professionals with 3 to 5 years of experience in networking or cybersecurity.`
            },
            {
                type: 'p',
                text: `Certifications like Comptia CySA+, CISSP, CISM, GIAC Security Essentials certification (GSEC), System Security certified practicioner (SSCP), and many more.`
            },
            {
                type: 'p',
                text: `The basic responsibilities of cyber security analysts are to keep a lookout for attacks, intrusions, and strange, forbidden, or illegal activities. Similarly, threat research analysts also have similar responsibilities like knowledge of security operations, network monitoring, intrusion or detection analysis, and threat attribute assessment. So most of the defensive security job profiles have similar job responsibilities.`
            },
            {
                type: 'h3',
                text: `9. Software Quality Tester`
            },
            {
                type: 'p',
                text: `Software quality tester are individuals who manually test software applications to ensure that the quality meets everyone’s expectations. `
            },
            {
                type: 'p',
                text: `In small QA teams, a software testing function may also involve other tasks like test authoring, test planning, and test status reporting. When application faults are discovered and an implementation deviates from the given product specification, testers will raise bugs.`
            },
            {
                type: 'p',
                text: `Major responsibilities of software manual tester are as follows:`
            },
            {
                type: 'list',
                items: [
                    `Review the project requirements, specifications, and design and user documentation.`,
                    `Based on the needs of the product, create functional test cases and test specifications.`,
                    `Sanity, smoke, functional, and regression testing should be carried out.`,
                    `Report bugs and analyse mistakes.`,
                    `Assistance with test documentation, requirement analysis, and test design.`,
                ]
            },

            {
                type: 'p',
                text: `After a few years of experience, individuals must learn programming languages in order to automate testing. The average yearly income for manual testing in India is INR 4.5 LPA, with salaries ranging from INR 1.4 LPA to 14.4 LPA.`
            },
            {
                type: 'h3',
                text: `10. Cloud engineer`
            },
            {
                type: 'p',
                text: `IT specialists known as “cloud engineers” are in charge of constructing and managing the cloud infrastructure for their company. They may perform more specialised tasks like developing programmes to use cutting-edge platform technology or designing solutions.`
            },
            {
                type: 'p',
                text: `A cloud engineer is in charge of a number of activities, including assessing a company’s cloud infrastructure and monitoring its capacity and scalability.`
            },
            {
                type: 'p',
                text: `Responsibilities of the cloud engineer:`
            },
            {
                type: 'list',
                items: [
                    `Use best practises to build and maintain cloud-based solutions.`,
                    `Make sure that information storage and processing operations are carried out effectively and in compliance with the company’s security policies and industry best practises for cloud security.`,
                    `Identify, analyse, and resolve infrastructure flaws and issues with application deployment.`,
                    `Regularly review present systems, then propose upgrades.`,
                    `Engage with clients, provide cloud support, and offer guidance depending on their requirements.`,

                ]
            },
            {
                type: 'p',
                text: `There are several certifications available for cloud engineers; some of the certifications don’t require experience, like the AWS Certified Cloud Practitioner, the Microsoft Certified Azure Fundamentals, and the Google Cloud Platform (GCP) Certificate. `
            },
            {
                type: 'p',
                text: `These beginner-level certification don’t require coding knowledge, but if you want to pursue professional or associate level certifications, you’ll need to know how to code. `
            },
            {
                type: 'p',
                text: `Similarly, there are other certifications that are also available for experienced candidates, like AWS certified solutions architect associate, Google professional cloud architect, AWS certified developer associate, Microsoft Certified Azure administrator associate, and many more.`
            },
            {
                type: 'p',
                text: `Virtualization is also a part of cloud computing, so candidates can build their careers as virtualization engineers. Several certifications are available for virtualization, like VMware Certified Technical Associate (VCTA) and VMware Certified Professional (VCP). `
            },
            {
                type: 'p',
                text: `With less than one year of experience to seven years of experience, the average yearly income for a cloud engineer in India is INR 5.4 LPA.`
            },
            {
                type: 'h3',
                text: `Conclusion:`
            },
            {
                type: 'p',
                text: `In this blog, we have seen all the beginner and professional levels of IT jobs and their relevant certifications without having knowledge of coding. Few of the IT job positions don’t need certification to get in, but someone who has a relevant certificate will help them get a better job and salary.`
            },
            {
                type: 'p',
                text: `At Networkers Home, we provide certification for the networking domain, the cloud computing domain, and the cyber security domain and guide individual candidates to build their skills and knowledge according to their interests.`
            },
            {
                type: 'p',
                text: `Depending on your area of interest, you can sign up for any one of these courses. We are always open to guide you.`
            },
        ]
    },
    {
        seo: {
            title: "Welcome to Asia’s Biggest Cisco Labs",
            description: 'One of the best platforms for online training institutes is Networkers Home. We have always been renowned for providing top-notch Cisco Certification training. We pledge to provide the best service while utilising the biggest Cisco laboratories in Asia.',
            og_img: '/assets/images/blog/21.webp',
        },
        slug: 'welcome-to-asia-biggest-cisco-labs',
        category: {
            title: "Cisco",
            slug: 'cisco'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/21.webp'
            },
            {
                type: 'h1',
                text: "Welcome to Asia’s Biggest Cisco Labs",
            },
            {
                type: 'p',
                isDesc: true,
                text: `One of the best platforms for online training institutes is Networkers Home. We have always been renowned for providing top-notch Cisco Certification training. We pledge to provide the best service while utilising the biggest Cisco laboratories in Asia.`
            },
            {
                type: 'p',
                text: `Networkers Home provides us with access to the largest Cisco laboratories in Asia. The list of these Cisco laboratories is as follows:`
            },
            {
                type: 'list',
                items: [
                    `A CCNA lab`,
                    `A CCNP lab`,
                    `Labs for Cisco SD - WAN`,
                    `Labs for MPLS, OSPF, BGP, and EIGRP`,
                    `Fortigate firewall lab`,
                ]
            },

            {
                type: 'p',
                text: `With us, you can access the largest Cisco laboratories. In addition to having the most recent lab technologies, our labs are also up-to-date with current industry requirements.`
            },
            {
                type: 'p',
                text: `It makes it easier for students to get their certification without any bother in the modern world where everyone wants to learn via the Internet. You will have unrestricted access to Cisco labs as part of the online training, and our highly qualified instructors will provide you with the necessary support.`
            },
            {
                type: 'p',
                text: `We offer both theoretical and practical knowledge for every subject so that students will grasp how the material is applied in the real world. So, with us, you will get proper guidance and can complete certifications from home without any hassle.`
            },
            {
                type: 'p',
                text: `Let’s examine each lab for the courses one by one that we have mentioned above.`
            },
            {
                type: 'h3',
                text: `Cisco CCNA Practie Lab:`
            },
            {
                type: 'p',
                text: `At Networkers Home, we are having a virtual lab simulation for CCNA. In the CCNA lab it consists of heavy lab equipment, but in the virtual lab everything is present in online labs. Labs have all the equipment needed virtually. `
            },
            {
                type: 'p',
                text: `There are numerous virtual lab simulators and emulators for networking that can be used to gain hands-on experience with routing and switching. All of these tools are used to test networking technologies before deploying them in the real world.`
            },
            {
                type: 'p',
                text: `A Few of the common virtual lab simulators include:`
            },
            {
                type: 'list',
                items: [
                    `Cisco packet tracer`,
                    `Boson NetSim(Network Simulator)`,
                    `GNS3`,

                ]
            },
            {
                type: 'p',
                text: `Cisco Packet Tracer simulates network toplogies consisting of Cisco switches, firewalls, routers, and many more. The Packet Tracer is a fantastic simulator for anyone working for an entry-level Cisco certification, such as the CCNA or CCNP. It was initially created as teching tool for Cisco’s Networking Academy (better known as NetAcad).`
            },
            {
                type: 'img',
                src: '/assets/images/blog/21.1.png'
            },
            {
                type: 'p',
                text: `Boson NetSim (Network Simulator) is recognised for its rigorous practise examinations and coursework for Cisco certification exams. Another important Boson product is NetSim, an application that simulates Cisco network switches and routers.`
            },
            {
                type: 'p',
                text: `GNS3 Graphical Network Simulator-3 is a network software emulator that emulates the functions of virtual and real devices, which helps to practise complex networks. A simulator is designed to simulate an environment with all of the software configurations and variables that will be present in the actual production environment for an app.`
            },
            {
                type: 'p',
                text: `In the CCNA lab, we will learn configuration and troubleshooting of  interswitch, LLDP, routing, and subnetting exercises. The CCNA 200-301 labs will teach you about Cisco Packet Tracer software, and you may quickly become comfortable with the Cisco iOS version 15 router and switch commands in the CCNA test with the help of these labs.`
            },
            {
                type: 'p',
                text: `Our CCNA labs include the following features:`
            },
            {
                type: 'list',
                items: [
                    `Candidates for the CCNA certification can analyse configuration and troubleshoot problems in a real - world setting using the Cisco network simulator software.`,
                    `To obtain practical expertise, use structured laboratories designed by our top - tier network engineers with over 10 years of industry experience.`,
                    `The biggest virtual labs are those for the CCNA.`,
                    `Until the end of your course, our labs are available all the time.`,
                ]
            },
            {
                type: 'p',
                text: `You can also have access to our special training. Enroll today to receive all these advantages.`
            },
            {
                type: 'h3',
                text: `Cisco CCNP Practical lab:`
            },
            {
                type: 'p',
                text: `The CCNP (Cisco Certified Network Professional) labs are equipped with most recent GNS3 technology in our labs. The CCNP lab exercises include the following:`
            },
            {
                type: 'list',
                items: [
                    `Multicast address / IGMP / PIM and Layer 2 switches`,
                    `Layer 3 MPLS(Mulprotocol Label Switching) `,
                    `GRE tunnel / GRE practise`,
                    `Console Security / VTY Security, Password Encryption`,
                    `QoS(Quality of Service)`,
                    `Implementation of NAT`,
                    `Optimizing OSPF, BGP, and EIGRP`,
                ]
            },
            {
                type: 'p',
                text: `Here at Networkers Home, we provide both CCNP ENCOR and ENARSI configuration labs. These labs are easily accessible virtually from your house.`
            },
            {
                type: 'h3',
                text: ` Labs for Cisco SD-WAN:`
            },
            {
                type: 'p',
                text: `The Cisco SD-WAN course gives students the abilities and information required to set up, manage, configure, and troubleshoot Cisco SD-WAN solutions. `
            },
            {
                type: 'p',
                text: `In this course, we will covers the installation of Cisco SD-WAN in single-site and multi-site deployments, initial configuration, ongoing management, and troubleshooting of typical issues.`
            },
            {
                type: 'p',
                text: `We provide benefits to candidates that are mentioned below:`
            },
            {
                type: 'list',
                items: [
                    `Internet - based lab access for every student for a month, with unlimited SD - WAN lab access.`,
                    `It provides complete, end - to - end coverage of every CCNP Enterprise IT Certification need.`,

                ]
            },
            {
                type: 'p',
                text: `The Cisco SD-WAN labs contain a tonne of practical sessions. The topics covered in SD-WAN labs are:`
            },
            {
                type: 'list',
                items: [
                    `Dashboard and tools for vManage`,
                    `Configuration of OMP, OSPF, BGP`,
                    `Multi - Topology using Route filtering `,
                    `Zero - touch provisioning lab`,
                    `Configuration and Verification of VRRP, VPN`,
                    `Control policy lab`,
                    `Control policy - Firewall `,

                ]
            },
            {
                type: 'h3',
                text: `Labs for MPLS, OSPF, BGP, and EIGRP:`
            },
            {
                type: 'p',
                text: `We even have the finest laboratory in Asia for practising routing protocols. We will talk about each of these labs to learn more about their features. Let’s start by discussing each of them individually.`
            },
            {
                type: 'h4',
                text: `MPLS Lab:`
            },
            {
                type: 'p',
                text: `MPLS stands for Multi Protocol Label Switching. It is an IP packet routing method that uses labels to route IP packets along paths rather than looking at routers’ sophisticated routing tables. This function aids in speeding up IP packet discovery. `
            },
            {
                type: 'p',
                text: `MPLS utilises a router as a forwarding device and a layer 3 service, or Internet Protocol. Because MPLS functions somewhat like a VPN, the traffic of various clients is kept apart from one another.`
            },
            {
                type: 'p',
                text: `Additionally, we teach our students how to set up MPLS labs. The Cisco Packet Tracer is frequently used to configure MPLS. Our package includes various of a network simulators for beginners. Of course, as technology improves, we will also improve our lab exercises.`
            },
            {
                type: 'p',
                text: `We at Networkers Home do our best to give you access to cutting-edge labs. In a virtual setting, our labs are intended to be the biggest in Asia.`
            },
            {
                type: 'h3',
                text: `OSPF Lab:`
            },
            {
                type: 'p',
                text: `OSPF stands for Open Shortest Path First is a link-state routing protocol based on the Shortest Path First (SPF) algorithm that was created for IP networks. As one of the Interior Gateway Protocols (IGP), or the protocol that tries to move the packet within a huge autonomous system or routing domain, OSPF is designed by the Internet Engineering Task Force (IETF).`
            },
            {
                type: 'p',
                text: `OSPF utilises the multicast addresses 224.0.0.5 and 224.0.0.6 for routine communication and updating the designated router (DR) and backup designated router, respectively (BDR).`
            },
            {
                type: 'p',
                text: `We show our students how to set up OSPF on any Cisco device in our OSPF module. To simulate the OSPF virtual labs, we use the Cisco Packet Tracer. The OSPF setting is really easy and straightforward. However, RIP and EIGRP settings are difficult to configure and become a little hassle to configure. `
            },
            {
                type: 'p',
                text: `But the only OSPF configuration we ever test is on Cisco hardware. It is crucial to configure OSPF since understanding it is crucial. On your laptop or PC, you can remotely visit our largest OSPF laboratories at your leisure.`
            },
            {
                type: 'h3',
                text: `BGP Lab:`
            },
            {
                type: 'p',
                text: `BGP stands for Border Gateway Protocol (BGP), and it deals with the concepts of internal BGP (IBGP) and external BGP (EBGP). `
            },
            {
                type: 'p',
                text: `Our candidates are taught how to setup BGP labs in Cisco Packet Tracer in this section. The most challenging routing protocol to learn is BGP. So, our goal here is to make it as simple to master as possible.`
            },
            {
                type: 'p',
                text: `The BGP lab will teach you how to configure BGP, troubleshoot or resolve BGP issues, modification of BGP, communities, the origin of BGP, and much more. You will be most effective at configuring BGP once you have access to all of these BGP components. The largest BGP labs you will ever work with are here at our facility.`
            },
            {
                type: 'h3',
                text: `EIGRP Lab:`
            },
            {
                type: 'p',
                text: `EIGRP stands for Enhanced Interior Gateway Routing Protocol. Compared to older network protocols like Interior Gateway Routing Protocol (IGRP) or Broader Gateway Protocol, Enhanced Interior Gateway Routing Protocol (EIGRP) allows routers to communicate information more quickly (BGP).`
            },
            {
                type: 'p',
                text: `In this EIGRP lab you will learn the following:`
            },
            {
                type: 'list',
                items: [
                    `Good understanding of the EIGRP concept`,
                    `Implementing EIGRP`,
                    `Learn how to optimise EIGRP`,
                    `Learn how to troubleshoot EIGRP`,
                    `Understand the EIGRP design.`,
                    `Learn how to scale, limit queries, and improve the convergence of EIGRP.`,
                ]
            },
            {
                type: 'p',
                text: `You are going to be productive configuring EIGRP once you have access to all of these EIGRP components. You can work with the largest lab ever at our center.`
            },
            {
                type: 'h3',
                text: `FortiGate Firewall Lab:`
            },
            {
                type: 'p',
                text: `Networks are protected from internet attacks by Fortinet’s very advanced security firewall, FortiGate. Global corporations entrust FortiGate with safeguarding their infrastructure and networks. Understanding how to install, configure, administer, and troubleshoot FortiGate network firewalls is crucial to preventing cyberattacks.`
            },
            {
                type: 'p',
                text: `The fundamentals of firewall usage, including routing, VPNs, user authentication, and firewall policies, will be covered. Students will gain knowledge about web filters and efficient application control to secure their users.`
            },
            {
                type: 'p',
                text: `Networkers Home can guide you in succeeding in a variety of network protection courses and offers Advanced Level Certifications for highly qualified Cisco engineers. One of our best-improved training modules is our FortiGate Firewall course, which leaves out all the essential equipment a network security expert should be familiar with.`
            },
            {
                type: 'p',
                text: `Anyone interested in learning about the setup and administration of the FortiGate Firewall, or those who are new to network security and want to advance their skill set, can enrol in this course. To take this course, students must have at least CCNP certification. Additionally, it is advised to have a solid understanding of routing ideas, firewall fundamentals, and network and security protocols.`
            },
            {
                type: 'p',
                text: `What you will learn in the FortiGate Firewall lab is as follows:`
            },
            {
                type: 'list',
                items: [
                    `Configuration and verification of VLAN, DNS, DNS Server, Static & Default Route, Dynamic Protocol RIP, Dynamic Protocol OSPF, DHCP server.`,
                    `Recognize the Policy, Source, Interface NAT`,
                    `Learn the concept of High Availability(HA) Active - Passive, Active - Active lab`,
                    `Learn the concept of Site - to - Site IPSec Route - Based VPNs, Policy - Based VPNs.`,
                    `Learn how to implement remote access SSL VPN web portal, remote access IPSec VPN`,

                ]
            },
            {
                type: 'p',
                text: `You may learn how to set up a FortiGate firewall from scratch with the helps of our FortiGate Firewall course.`
            },
            {
                type: 'h3',
                text: `Conclusion: `
            },
            {
                type: 'p',
                text: `It is essential to have solid practical experience using networking ideas. Everything is made possible by the largest virtual networking laboratory we have. The ability to access our lab from any location while taking any course is its most notable feature.`
            },
            {
                type: 'p',
                text: `You have unlimited access to these labs until the end of your course. The largest and best labs in Asia are those of ours. Since we give our learners the most intelligent training available, they are successful wherever they go.`
            },
        ]
    },
    {
        seo: {
            title: "Why Networking Devices is the only skill you really need",
            description: 'According to each person’s area of interest, networking offers a large ocean of prospects that can lead to finally landing the dream jobs. A wide variety of gadgets are used in networking to start and aid effective fieldwork. ',
            og_img: '/assets/images/blog/22.webp',
        },
        slug: 'why-networking-devices-is-the-only-skill-you-really-need',
        category: {
            title: "Computer Networks",
            slug: 'computer-networks'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/22.webp'
            },
            {
                type: 'h1',
                text: "Why Networking Devices is the only skill you really need",
            },
            {
                type: 'p',
                isDesc: true,
                text: "According to each person’s area of interest, networking offers a large ocean of prospects that can lead to finally landing the dream jobs. A wide variety of gadgets are used in networking to start and aid effective fieldwork. In the field of networking, there are many different gadgets that all strive toward making this happen. Let’s now examine each of these gadgets closely to discover how they function and what purpose they serve.",
            },
            {
                type: 'p',
                text: `In  networking, lots of devices are used to implement the networking topologies in organizations. Most of the important devices, such as hubs, switches, routers, bridges, gatways, and many more, will be discussed in this blog.`
            },
            {
                type: 'p',
                text: `Networking skills will help students in most of the courses and also help them get started in IT domains. If a person starts their career in the developer domain, cyber security domain, or cloud computing domain, then students should have good command of the networking domain.`
            },
            {
                type: 'h2',
                text: `The Top Network Hardware Devices for Networking`
            },
            {
                type: 'h3',
                text: `1. Hub`
            },
            {
                type: 'p',
                text: `A hub is a kind of networking device that connects several networking nodes by way of the physical layer. They are frequently used to connect computer in a LAN.`
            },
            {
                type: 'p',
                text: `A hub contains a lot of ports. In order to connect to the network, a computer is connected into one of these ports. Data frames are broadcast to all ports when they arrive at a port, regardless of whether they are destined there or not.`
            },
            {
                type: 'p',
                text: `It is a network device that lacks intelligence and broadcasts messages to all ports. It broadcasts messages basically. Half-duplex transmission is the mode. There is no software connected to them; they are passive devices. When multiple computers send data to the same port at once, collisions may happen during setup of the transmission.`
            },
            {
                type: 'h4',
                text: `Types of Hubs:`
            },
            {
                type: 'list',
                items: [
                    `Passive Hub`,
                    `Active Hub`,
                    `Intelligent Hub`,

                ]
            },
            {
                type: 'h4',
                text: `Advantages of Hub:`
            },

            {
                type: 'list',
                items: [
                    `Due to its low cost, anyone can utilise it.`,
                    `It is simple to link a wide range of media types.`,
                    `The performance of the network is unaffected by the deployment of a hub.`,
                    `It can also increase the network’s overall distance.`,
                ]
            },
            {
                type: 'h4',
                text: `Disadvantages of Hub:`
            },
            {
                type: 'list',
                items: [
                    `It excludes components like collision detection.`,
                    `It cannot be separated into segment and is unable to operate in full-duplex mode.`,
                    `It has no mechanism; therefore, it can be used to reduce network traffic.`,
                    `As it sends packets to every connected segment, it is unable to filter the data.`,
                    `As it sends packets to every connected segment, it is unable to filter the data.`,
                    `Also, it cannot join different network designs such as a ring, token, ethernet, and others.`,
                ]
            },
            {
                type: 'h3',
                text: `2. Switches`
            },
            {
                type: 'p',
                text: `In the OSI model, switches are networking components that operate at layer 2, or the data link layer. They establish connections between networked devices and employ packet switching to transmit, receive, either forward data packets or frames over the network.`
            },
            {
                type: 'p',
                text: `Every data frames that enters one of the ports of a network switch is evaluated for its destination address, any necessary checks are performed, and the frame is then sent to the proper device. Broadcast, multicast, and unicast communications are all made possible.`
            },
            {
                type: 'h4',
                text: `Types of Switches:`
            },
            {
                type: 'list',
                items: [
                    `Unmanaged Switch`,
                    `Managed Switch`,
                    `LAN Switch`,
                    `PoE Switch`,

                ]
            },
            {
                type: 'h4',
                text: `Advantages of Switching:`
            },
            {
                type: 'list',
                items: [
                    `The network’s bandwidth is increased by the switch.`,
                    `By lowering network traffic, it improves the network’s overall performance.`,
                    `As the switch builds the collision domain for each connection, there will be fewer frame collisions.`,
                    `The devices that have been addressed receive information, which minimises the stress on individual PCs.`,
                ]
            },
            {
                type: 'h4',
                text: `Disadvantages of Switching:`
            },
            {
                type: 'list',
                items: [
                    `Network bridges are less expensive than switches.`,
                    `Switches are unable to quickly identify network connectivity problems.`,
                    `Multicast packet handling requires proper switch design and configuration.`,
                ]
            },
            {
                type: 'h3',
                text: `3. Router`
            },
            {
                type: 'p',
                text: `The layer 3, or network layer, of the OSI model is where routers operate as networking devices. Receiving, analysing, and transmitting data packets between the connected computer networks is their responsibility.`
            },
            {
                type: 'p',
                text: `Upon receiving a data packet, the router examines the destination address, check its routing databases to determine the best route, and then sends the packet along that same route. A routing table is present in routers and is periodically updated in response to network changes. `
            },
            {
                type: 'p',
                text: `It makes use of a routing protocol and checks the table to transmit data packets. In comparison to switches, hubs, bridges, and other networking equipment, routers are more expensive.`
            },
            {
                type: 'h4',
                text: `Types of Routers: `
            },
            {
                type: 'list',
                items: [
                    `Wireless Router`,
                    `Broadband Router`,
                    `Core Router`,
                    `Edge Router`,
                    `Brouters`,
                ]
            },
            {
                type: 'h4',
                text: `Advantages of Routers: `
            },
            {
                type: 'list',
                items: [
                    `Routers incorporate bundle filtering, which includes parcel separation and bundle exchanging. Routers use a number of separation rules to channel an organisation.`,
                    `Using a single IP address and a selection of UDP ports, NAT enables routers to share an association.`,
                    `Using dynamic routing algorithms, it may select the most advantageous route over the internetwork.`,
                    `By establishing collision domains and broadcast domains, it can minimise network traffic.`,
                    `Enabling the feedback loop will make redundant pathways available.`,

                ]
            },
            {
                type: 'h4',
                text: `Disadvantages of Routers:`
            },
            {
                type: 'list',
                items: [
                    `A router costs more than a bridge or a repeater.`,
                    `Not all network protocols are routable, and only those that are work with routers.`,
                    `As a result of the need to examine data transmitted from the physical to the network layer, the router is slower than a bridge or repeater.`,
                ]
            },

            {
                type: 'h3',
                text: `4. Bridges`
            },
            {
                type: 'p',
                text: `When two subnetworks that use different protocols need to be connected, bridges are used. It combines two LANs to create an extended LAN. All packets are accepted by a bridge, which then amplifies and transmits them to the other side. The bridges are clever devices that only permit specific packets from them to flow. A bridge only allows packets from one network node to another to pass through.`
            },

            {
                type: 'h4',
                text: `Types of Bridges:`
            },
            {
                type: 'list',
                items: [
                    `Source Routing Bridges`,
                    `Transparent Bridges`,
                ]
            },
            {
                type: 'h4',
                text: `Advantages of Bridges:`
            },
            {
                type: 'list',
                items: [
                    `It supports the expansion of the physical network.`,
                    `With minimal segmentation, it lowers network traffic.`,
                    `It establishes distinct collision domains. As fewer nodes share a collision domain, the available bandwidth for individuals nodes grows.`,
                    `There are fewer collisions.`,

                ]
            },
            {
                type: 'h4',
                text: `Disadvantages of Bridges:`
            },
            {
                type: 'list',
                items: [
                    `It takes longer than repeaters because of filtering.`,
                    `Broadcasts are not filtered by it.`,
                    `In comparison, it costs more than repeaters.`,
                ]
            },

            {
                type: 'h3',
                text: `5. Repeater`
            },
            {
                type: 'p',
                text: `In the process of amplifying or regenerate a signals coming before retransmitting it, repeaters are network devices that operate at the physical layer of the OSI model.`
            },
            {
                type: 'p',
                text: `Depending on the technology or the channel’s characteristics, an electrical signal delivered across a channel weakens. The signal is amplified by repeaters before being retransmitted. Even signals that have been distorted by transmission loss can be recreated by digital repeaters. Therefore, repeaters are frequently used to connect two LANs and create a big single LAN.`
            },
            {
                type: 'h4',
                text: `Types of Repeater:`
            },
            {
                type: 'p',
                text: `There are many different types of repeaters available, and each one serves a specific purpose in networking. Similarly to how different types of signals regenerate using different repeaters, different types of networks and LAN domains use different repeaters.`
            },
            {
                type: 'p',
                text: `For signals to regenerate, two types of repeaters are used:`
            },
            {
                type: 'list',
                items: [
                    `Analog Repeaters`,
                    `Digital Repeaters`,
                ]
            },
            {
                type: 'p',
                text: `For the different types of networks that they connect, two types of repeaters are used:`
            },
            {
                type: 'list',
                items: [
                    `Wired Repeaters`,
                    `Wireless Repeaters`,
                ]
            },

            {
                type: 'p',
                text: `For different LANs domains, they use two types of repeaters:`
            },
            {
                type: 'list',
                items: [
                    `Local Repeaters`,
                    `Remote Repeaters`,

                ]
            },
            {
                type: 'h4',
                text: `Advantages of Repeaters:`
            },
            {
                type: 'list',
                items: [
                    `Repeaters may easily increase the length or coverage area of networks and are easy to deploy.`,
                    `They are reasonably less costly.`,
                    `Repeaters don’t need any extra processing. If performance declines, that is the only situation in which they need to be looked into.`,
                    `Signals can be connected via a variety of cables`,
                ]
            },
            {
                type: 'h4',
                text: `Disadvantages of Repeaters:`
            },
            {
                type: 'list',
                items: [
                    `Repeaters are unable to link diverse networks.`,
                    `They cannot differentiate between signal and noise.`,
                    `They are unable to lessen network congestion or traffic.`,
                    `The number of repeaters that can be placed on the majority of networks is limited.`,
                ]
            },
            {
                type: 'h3',
                text: `6. Modem`
            },
            {
                type: 'p',
                text: `The digital data streams are transformed into analogue data signals via a modem. The signal between your phone connection and your computer is modulated and demodulated by the modem. Modulation and demodulation are hence abbreviated as “modem”.`
            },
            {
                type: 'p',
                text: `When you try to upload data from your home computer to the internet, the modem receives the digital signal and converts it into an analogue signal that the phone network can use.`
            },
            {
                type: 'p',
                text: `In a similar way, when computers request data from the internet, the modem receives the analogue data transmission over the phone and transforms it into a digital signal that the computer can use.`
            },
            {
                type: 'h4',
                text: `Advantages of Modem:`
            },
            {
                type: 'list',
                items: [
                    `Your system’s connection to the internet, or “world wide web” depends heavily on your modem.`,
                    `Fax transmission and reception are both possible with modern modems.`,
                    `As the number of services offered by the modem increases, so does its price.`,

                ]
            },
            {
                type: 'h3',
                text: `7. Gateway`
            },
            {
                type: 'p',
                text: `A gateway is a telecommunications network mode that joins two networks using various transmission protocols. A gateway acts as a network’s entry and exit points because all data must travel through it or connect with it before being forwarded.`
            },
            {
                type: 'p',
                text: `A gateway is frequently described as being made up of a modem and a router. Regardless of whether data is transferred internally or outside, the gateway manages all network traffic. It is implemented at the network’s edge. When a network wants to communicate with another, the data packet is sent to the gateway, where it is then routed via the most efficient path to the desired location.`
            },
            {
                type: 'h4',
                text: `Types of gateway:`
            },
            {
                type: 'list',
                items: [
                    `Unidirectional Gateways`,
                    `Bidirectional Gateways`,
                ]
            },
            {
                type: 'h4',
                text: `Advantages of Gateway:`
            },
            {
                type: 'list',
                items: [
                    `Gateway offers improved connectivity to many networks, and it also aids in network scaling by connecting several computers and other systems.`,
                    `The gateway can intercept all information from computers and other systems, allowing your network to be more flexible.`,
                    `Another important capability of a gateway is filtering which it can carry out by analysing each data packet as it passes through the gateway.`,
                ]
            },
            {
                type: 'h4',
                text: `Disadvantages of Gateway:`
            },
            {
                type: 'list',
                items: [
                    `Network gateways require extra time to translate the information; hence, they cannot send information instantly.It accesses older cached information that has not been cleared.As a result, it can take longer to produce an accurate result.`,
                    `Over the network that connects them, every computer uses a unique protocol.Every computer has to conduct its own troubleshooting whenever a problem arises.`,
                    `By default, gateways are set up on the router.Installing them is becoming increasingly challenging for network administrators.As a result, its cost can go up.`,

                ]
            },
            {
                type: 'h3',
                text: `8. Wireless LAN Controller`
            },
            {
                type: 'p',
                text: `A Wireless LAN Controller (WLC) is a centrally located network device that the network administrator or network operations centre uses in conjunction with the Lightweight Access Point Protocol (LWAPP).`
            },
            {
                type: 'p',
                text: `These network access points, often known as “fat” access points, are controlled, run, and configured separately. The WLC manages the wireless access point settings automatically.`
            },
            {
                type: 'h4',
                text: `Advantages of Wireless LAN Controller:`
            },
            {
                type: 'list',
                items: [
                    `With the use of a wireless controller, all the access points can be configured at once.`,
                    `Client service cannot be offered by access points that are not linked to the wireless controller.`,
                    `To stop malicious access points from being on the network, WLC can authenticate access points.`,

                ]
            },
            {
                type: 'h4',
                text: `Disadvantages of Wireless LAN Controller:`
            },
            {
                type: 'list',
                items: [
                    `The data transfer rate drops as there are more connected devices.`,
                    `Communication may be hindered by rain or thunder.`,
                    `Because of its low security, it allows attackers to view the transmitted data.`,
                    `In comparison to employing fibre optics, the environment may potentially harm signals.`,


                ]
            },
            {
                type: 'h3',
                text: `9. Access Point`
            },
            {
                type: 'p',
                text: `The Wireless Local Area Network (WLAN), which is frequently used in large offices and structures with enlarged business, is created by a Wireless Access Point (WAP).`
            },
            {
                type: 'p',
                text: `The wired networks are linked to the wireless client by a wireless AP. Mobile users may access the network more easily, which boosts productivity and lower infrastructure costs.`
            },
            {
                type: 'p',
                text: `A wireless access point (WAP) is a piece of hardware or a set-up LAN node that facilitates Bluetooth or Wi-Fi communication between wired networks and wirelessly enabled devices. Devices can connect to the internet or a network more easily thanks to WAPs’ radio transmitters and antennae.`
            },


            {
                type: 'h4',
                text: `Advantages of Access Point:`
            },
            {
                type: 'list',
                items: [
                    `Access is increased, so more user can able to connect.`,
                    `Transmission range is increased, access point can provide up to 100 - 300 metres of coverage.`,
                    `It provides versatile networking.`,
                    `It gives permission to connect multiple access points.`,
                ]
            },
            {
                type: 'h4',
                text: `Disadvantages of Access Point:`
            },
            {
                type: 'list',
                items: [
                    `High price`,
                    `Not suitable to use alone for personal use.`,
                    `Terrible stability`,
                ]
            },
            {
                type: 'h3',
                text: `10. Load Balancer`
            },
            {
                type: 'p',
                text: `A load balancer serves as the “traffic police” at the front of all servers, distributing client requests across all servers equipped to handle them in a way that maximises speed and capacity utilisation and makes sure that no server is overworked, which can result in performance degradation.`
            },
            {
                type: 'p',
                text: `The load balancer routes traffic to the active servers in case one server goes offline. The load balancer initiates requests to a new server when it is added to the server group.`
            },

            {
                type: 'h4',
                text: `Advantages of a Load balancer:`
            },
            {
                type: 'list',
                items: [
                    `Can evenly distribute the work to the primary service server.`,
                    `Minimize service interruptions.`,
                    `Access to services is made faster because it can route requests to servers that want quick responses.`,

                ]
            },
            {
                type: 'h4',
                text: `Disadvantages of a Load balancer:`
            },
            {
                type: 'list',
                items: [
                    `Increases the price when two or more servers are needed.`,
                    `All of the virtual systems on the host server cannot be used if it has a problem.`,
                    `A virus attack or a hacker will attempt to consolidation of all data onto a single server.`,

                ]
            },
            {
                type: 'h3',
                text: `Conclusion:`
            },
            {
                type: 'p',
                text: `We discussed the most commonly used networking devices in any organisation in this blog. Also, lots of other devices are used in networking. If a candidate takes a CCNA or CCNP course, they will learn in depth. In this course, every networking device that is used is described, like the routing tables of routers, how classful addresses work, subnetting, and many more.`
            },
            {
                type: 'p',
                text: `These abilities are useful in any IT field, whether the candidate is a developer, cloud engineer, or a cyber security analyst. Without a basic understanding of networking, candidates will not be able to understand any concept in depth. `
            },
            {
                type: 'p',
                text: `If a candidate wants to get a better salary, then they must have a basic understanding of networks. Best of luck!`
            },

        ]
    },
    {
        seo: {
            title: "Find out now, what should you do to grasp Linux fundamentals and core concepts",
            description: 'Linus Torvalds created the linux operating systme as a research project at first. Computers all throughout the world utilise linux, an open source, free operating system. It’s particularly well-liked for use in servers.',
            og_img: '/assets/images/blog/23.png',
        },
        slug: 'find-out-now-what-should-you-do-to-grasp-linux-fundamentals-and-core-concepts',
        category: {
            title: "Computer Networks",
            slug: 'computer-networks'
        },
        content: [
            {
                type: 'img',
                src: '/assets/images/blog/23.png'
            },
            {
                type: 'h1',
                text: `Find out now, what should you do to grasp Linux fundamentals and core concepts`
            },
            {
                type: 'p',
                isDesc: true,
                text: `Linus Torvalds created the linux operating systme as a research project at first. Computers all throughout the world utilise linux, an open source, free operating system. It’s particularly well-liked for use in servers.`
            },
            {
                type: 'p',
                text: `Linux is supported by a wide range of hardware platforms, including Intel, AMD, Mac, Sun, Dec, Alpha. Linux is an important skill for Developer, Cyber security, Cloud computing, Networks engineer, etc.`
            },
            {
                type: 'p',
                text: `For developers that require a dependable, stable platform with open source code, linux is a suitable option. However, linux file systems differ in structure from those available on Windows or MacOS, begineers to linux may find it challenging to get started. Additionally, whereas the majority of personal computers use graphical user interfaces, linux-based operating systems mainly rely on using the command line interface.`
            },
            {
                type: 'p',
                text: `In this blog, we will see all the fundamental concepts of Linux and what skills and knowledge are required to master it. The following topics will be discussed in this blog:`
            },
            {
                type: 'list',
                items: [
                    `Linux distribution system`,
                    `Linux Command line`,
                    `Filesystem or file operations`,
                    `Various types of text editor`,
                    `Shell scripting`,

                ]
            },
            {
                type: 'h3',
                text: `Linux distributions system`
            },
            {
                type: 'p',
                text: `Linux is different from any other operating system; each part of Linux is developed by different organizations. Various sections of linux include the kernel, shell tools, X server, system environment, graphical applications, and so on.`
            },
            {
                type: 'p',
                text: `The popular linux distributions are Red hat enterprise, Debian, SUSE, Arch linux, and many more. Ubuntu, Linux mint, Raspbian, Kali, Backtrack all are debian based linux operating system. Red hat based linux operating systems such as, CentOS, Fedora core, Oracle linux, CERN, etc are mostly used.`
            },
            {
                type: 'p',
                text: `SUSE is a worldwide open-source software firm with headquaters in Germany that creates and markets linux products to corporate clients. SuSE was founded in 1992, they have build lots of linux products and operating system such as, SUSE linux enterprise server, openSUSE, SUSE linux enterprise desktop.`
            },
            {
                type: 'p',
                text: `Arch linux is an independently developed linux distribution, the Arch linux project was initiated by Judd Vinet in march 2002. Using Arch linux different types of linux operating systems are build such as BlackArch, Chakra, Arch linux 32, Arch linux ARM, etc.`
            },
            {
                type: 'h3',
                text: `Linux Command line`
            },
            {
                type: 'p',
                text: `A command line is an interface that accepts lines of text and transforms them into instructions for your computer. We can execute both simple and complex jobs through its terminal. We can perform some simple operations like adding, removing, and moving files. Additionally, we are capable of performing complex jobs including administrative chore (such as user management and package installation), networking operations (such as ssh connections), security tasks, etc.`
            },
            {
                type: 'p',
                text: `Let’s check out 10 mostly used linux commands in our day-to-day life:`
            },
            {
                type: 'list',
                items: [
                    `pwd – Command used to print current working directory`,
                    `mkdir – This command used to create directories in linux`,
                    `touch – Its create blank files`,
                    `echo – Print the text, that provided in command`,
                    `cat – It help to show the file contents`,
                    `man – Provides an access to manual pages or use of all commands`,
                    `ls – The directories will all be listed by this command`,
                    `cp – Use to copying files`,
                    `mv – To move files from one directory to other directories`,
                    `rm – To remove / delete the files or directories`,

                ]
            },
            {
                type: 'p',
                text: `There are lots of other commands are also available such as less, whoami, tar, uname, In, grep, head, diff, cmp, sort, export, zip, unzip, ssh, service, traceroute, ifconfig, iwconfig, iptables, wget, and many more.`
            },
            {
                type: 'p',
                text: `The linux file system is a group of data and/or files that are kept on a computer’s hard drive or storage. Your computer depends on this file system to identify the position and location of files in your storage; if it weren’t there, the files would act as though they were invisible, which would obviously result in a lot of issues.`
            },
            {
                type: 'p',
                text: `In fact, there are a variety of file systems available for linux; the base of every linux file system is known as root and also denoted as a slash (/). `
            },
            {
                type: 'p',
                text: `The root directory contains of several file system such as: `
            },
            {
                type: 'list',
                items: [
                    `bin – command binaries`,
                    `boot – It show the static files of boot loader`,
                    `dev – device files`,
                    `etc – host - specific system config`,
                    `lib – Essential shared libraries`,
                    `mnt – Mount point for mounting temp filesystem`,
                    `opt – Add - on application software`,
                    `sbin – Essential system binaries`,
                    `tmp – Temporary files`,
                    `usr – Secondary hierarch`,
                    `var – variable data`,
                ]
            },
            {
                type: 'p',
                text: `There are different types of linux file system are available, if you want to check what type of file system is mounted into your linux distro then you can use df -T command in terminal. Let’s check different types of file system are use in linux. `
            },
            {
                type: 'list',
                items: [
                    `Ext – Extended file system`,
                    `Ext2 – Second extended file system, it helps to contains data upto 2 TB`,
                    `Ext3 – Third extended file system, journaling file system records in a separate log`,
                    `Ext4 – Fouth extended system, extension of the ext3 file system.Default file system for most of the linux OS such as Red hat enterprise.`,
                    `Xfs – External file system`,
                    `Jfs – Journaling file system`,

                ]
            },
            {
                type: 'p',
                text: `There are other file system are also available such as Btrfs, vfat, tmpfs. `
            },
            {
                type: 'h3',
                text: `Types of text editor`
            },
            {
                type: 'p',
                text: `A built-in text editor is included with every linux distribution. However, some editors include extra functions or a user-friendly interface. An application created for coding and editing in HTML, CSS, Javascript, PHP, and many other programming languages is referred to as a text editor, known as code editor.`
            },
            {
                type: 'p',
                text: `The majority of editors have options for search and replace, easy navigation, syntax highlighting, and other features.`
            },
            {
                type: 'p',
                text: `Let’s see different types of text editor available for linux user:`
            },
            {
                type: 'list',
                items: [
                    `Vi editor – Vi editor is regarded as one of Linux’s most basic editors.Command mode and insert mode are Vi two default modes.`,
                    `Gedit – The GNOME desktop environment includes the text editor Gedit.The simplicity of the design makes gedit a wonderful editor for newcomers.Gedit is a strong tool despite having a straightforward interface.`,
                    `Emacs – The most capable editor available for linux is called emacs.The X - Windows version comes with a wide variety of menus and panels for setting preferences. `,
                    `Nano editor – Nano comes with pre - loaded on most of linux os.For newbies, Nano is a great lightweight editor.For rapid setup changes, learning Nano is worthwhile because it is much simpler to use than Vi / Vim.`,

                ]
            },
            {
                type: 'p',
                text: `Lots of other editors are also present for linux user such as; Atom, Visual studio code, Notepadqq, Brackets, Bluefish, gVim, Neovim, Pico, Lime, Kate, and many more.`
            },
            {
                type: 'h3',
                text: `Shell Scripting`
            },
            {
                type: 'p',
                text: `Shell scripting help to implement the process automation in linux. Nothing is more annoying than having to repeatedly type out lengthy commands. Shell scripts are straight forward text files that compile a list of shell commands into a useful “tool” that you can use rather than repeatedly putting them all in by hand.`
            },
            {
                type: 'p',
                text: `The GNU Bourne-Again shell is the standard shell for many linux distribution (bash). The startup script used by the shell when it is first launched may be found in the .bashrc or .bash profile file and allows you to modify how the shell behaves.`
            },
            {
                type: 'p',
                text: `A file containing a succession of the commands is called a bash script. The bash programme reads and processes these. The computer programme runs line by line.`
            },
            {
                type: 'h3',
                text: `Conclusion`
            },
            {
                type: 'p',
                text: `Linux is a very important skill for those who are working or want to work in the cloud computing, networking, or cyber security domains. Because linux is mostly used in servers, anyone who wants to gain a thorough understanding of linux fundamentals and core concepts must master the skills listed above.`
            },
            {
                type: 'p',
                text: `The most important part of linux skills is shell scripting; if anyone wants to master shell scripting, then learn all the topics inside the bash shell. It will help to automate daily tasks.`
            },
            {
                type: 'p',
                text: `There are also some other skills one need to master, such as networking interface and configuration in Linux, the Boot Process in Linux, Native Linux Compilers, Software and Services, etc. When someone is taking a course like CCNA, CCNP, CEH, AWS or Azure, then they have to learn these concepts before learning their actual course. Furthermore, because linux is a lighter operating system than Windows or Mac, most professionals prefer to use Linux distributions.`
            },
            {
                type: 'p',
                text: `Keep learning and keep exploring!`
            },
        ]
    }
]

let temp = {
    seo: {
        title: "",
        description: '',
        og_img: '/assets/images/blog/9.webp',
    },
    slug: '',
    category: {
        title: "",
        slug: ''
    },
    content: [
        {
            type: 'img',
            src: '/assets/images/blog/9.webp'
        },
        {
            type: 'h1',
            text: ``
        },
        {
            type: 'p',
            isDesc: true,

            text: ``
        },
        {
            type: 'p',
            text: ``
        },
        {
            type: 'p',
            text: ``
        },
        {
            type: 'p',
            text: ``
        },
        {
            type: 'p',
            text: ``
        },
        {
            type: 'p',
            text: ``
        },
        {
            type: 'p',
            text: ``
        },
        {
            type: 'p',
            text: ``
        },
        {
            type: 'p',
            text: ``
        },
    ]
}