// --- DATA STORE ---
// This data is available to all pages because this script is loaded on every page.
const jobData = {
    "tech": [
        { 
            title: "Full-Stack Developer", 
            description: "Build both the user-facing (front-end) and server-side (back-end) parts of web applications, managing databases and server logic.", 
            path: [ 
                { 
                    title: "Master the Fundamentals", 
                    description: "Gain a strong foundation in HTML, CSS, and JavaScript, the core technologies of the web.",
                    skills: ["HTML5 semantic tags", "CSS Flexbox & Grid layouts", "ES6+ JavaScript fundamentals"],
                    tip: "Try recreating simple website landing pages using just HTML and CSS to build muscle memory.",
                    timeline: "1-2 months",
                    studyReferences: [
                        { name: "MDN Web Docs: Front-End Developer Guide", type: "Docs", link: "https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer" },
                        { name: "JavaScript: The Definitive Guide by David Flanagan", type: "Book", link: "#" }
                    ]
                }, 
                { 
                    title: "Learn a Frontend Framework", 
                    description: "Become proficient in a modern framework like React, Angular, or Vue.js to build dynamic user interfaces.",
                    skills: ["Component states and props", "Routing & navigation", "Consuming REST APIs", "State management (Redux/Context API)"],
                    tip: "Focus heavily on React Hooks and clean component architecture before learning advanced state libraries.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Official React Documentation (react.dev)", type: "Docs", link: "https://react.dev/" },
                        { name: "Scuba Diving into React Hooks - freeCodeCamp course", type: "Video", link: "https://www.freecodecamp.org/" }
                    ]
                }, 
                { 
                    title: "Learn a Backend Language & Databases", 
                    description: "Master a server-side language for application logic, and learn database modeling.",
                    skills: ["Node.js & Express", "SQL (PostgreSQL/MySQL)", "NoSQL (MongoDB)", "Schema design and relationships"],
                    tip: "Learn to build a simple CRUD (Create, Read, Update, Delete) API first and test it with Postman.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Node.js Complete Reference Guide", type: "Tutorial", link: "https://nodejs.org/" },
                        { name: "Designing Data-Intensive Applications by Martin Kleppmann", type: "Book", link: "#" }
                    ]
                }, 
                { 
                    title: "Authentication & Security", 
                    description: "Implement secure authentication systems, authorization rules, and data encryption.",
                    skills: ["JWT (JSON Web Tokens)", "OAuth 2.0 (Google/GitHub login)", "HTTPS protocols", "Password hashing (bcrypt)"],
                    tip: "Always store passwords securely using strong hashing algorithms. Never store secret keys in source code; use environment variables.",
                    timeline: "1 month",
                    studyReferences: [
                        { name: "OWASP Cheat Sheet Series - Authentication", type: "Reference", link: "https://cheatsheetseries.owasp.org/" },
                        { name: "Web Security Academy - PortSwigger", type: "Interactive Course", link: "https://portswigger.net/web-security" }
                    ]
                }, 
                { 
                    title: "Build & Deploy Full Projects", 
                    description: "Create a portfolio of full-stack projects and learn to deploy them on cloud hosting services.",
                    skills: ["Git & GitHub version control", "Docker containerization", "Vercel / Render deployment", "AWS / Google Cloud basics"],
                    tip: "Write an exceptional README for your projects, including screenshots and a live demo link.",
                    timeline: "1-2 months",
                    studyReferences: [
                        { name: "Git Pro Book (git-scm.com)", type: "Book", link: "https://git-scm.com/book/en/v2" },
                        { name: "AWS Cloud Practitioner Training", type: "Course", link: "https://aws.amazon.com/training/" }
                    ]
                } 
            ], 
            resources: [ 
                { title: "The Odin Project", url: "https://www.theodinproject.com/", description: "A free, full-stack curriculum for web development." }, 
                { title: "freeCodeCamp", url: "https://www.freecodecamp.org/", description: "Offers comprehensive certifications in web development." }, 
                { title: "MDN Web Docs", url: "https://developer.mozilla.org/", description: "The ultimate resource for web standards and documentation." } 
            ] 
        },
        { 
            title: "Data Scientist", 
            description: "Use analytical, statistical, and programming skills to collect, analyze, and interpret large data sets to uncover insights and trends.", 
            path: [ 
                { 
                    title: "Strengthen Math & Statistics", 
                    description: "Build a solid foundation in linear algebra, calculus, probability, and statistics.",
                    skills: ["Descriptive & inferential statistics", "Linear algebra matrix calculations", "Probability distributions", "Hypothesis testing & p-values"],
                    tip: "Focus heavily on learning how to frame business questions as statistical hypotheses.",
                    timeline: "1-2 months",
                    studyReferences: [
                        { name: "OpenIntro Statistics (openintro.org)", type: "Book", link: "https://www.openintro.org/book/os/" },
                        { name: "MIT OpenCourseWare: Probabilistic Systems Analysis", type: "Course", link: "https://ocw.mit.edu/" }
                    ]
                }, 
                { 
                    title: "Learn Python & Core Libraries", 
                    description: "Become proficient in Python and essential data science libraries for manipulating raw datasets.",
                    skills: ["Jupyter Notebooks", "Pandas for dataframes", "NumPy for numerical math", "Handling missing data"],
                    tip: "Practice clean data cleaning. Real-world data is extremely messy, and cleaning represents 80% of the job.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Python for Data Analysis by Wes McKinney", type: "Book", link: "#" },
                        { name: "Kaggle Python Course", type: "Tutorial", link: "https://www.kaggle.com/learn/python" }
                    ]
                }, 
                { 
                    title: "Master Data Analysis & Visualization", 
                    description: "Learn to manipulate data, extract trends, and create compelling visualizations to present findings.",
                    skills: ["Matplotlib & Seaborn", "Tableau or PowerBI dashboarding", "Advanced SQL queries", "Data exploration techniques"],
                    tip: "Focus on making visualizations easy to read for non-technical stakeholders. Good labeling is key.",
                    timeline: "1-2 months",
                    studyReferences: [
                        { name: "Storytelling with Data by Cole Nussbaumer Knaflic", type: "Book", link: "#" },
                        { name: "Mode Analytics - Intermediate SQL Tutorial", type: "Tutorial", link: "https://mode.com/sql-tutorial/" }
                    ]
                }, 
                { 
                    title: "Study Machine Learning Algorithms", 
                    description: "Understand machine learning algorithms, from regression and classification to clustering and basic deep learning.",
                    skills: ["Scikit-Learn library", "Linear & Logistic Regression", "Decision Trees & Random Forests", "K-Means Clustering"],
                    tip: "Try to understand the mathematical intuition behind the algorithms, rather than just writing model.fit().",
                    timeline: "2-3 months",
                    studyReferences: [
                        { name: "Introduction to Statistical Learning by Gareth James et al.", type: "Book/PDF", link: "https://www.statlearning.com/" },
                        { name: "Andrew Ng's Machine Learning Specialization", type: "Course", link: "https://www.coursera.org/" }
                    ]
                }, 
                { 
                    title: "Gain Practical Experience & Projects", 
                    description: "Work on real-world datasets, participate in Kaggle competitions, and build a strong portfolio.",
                    skills: ["Feature engineering", "Hyperparameter tuning", "Kaggle competitions", "Writing portfolio case studies"],
                    tip: "Write blog posts explaining your projects. Being able to explain technical findings simply is a superpower.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Kaggle Guide: Getting Started with Competitions", type: "Reference", link: "https://www.kaggle.com/" },
                        { name: "Data Science Portfolio Handbook", type: "Guide", link: "#" }
                    ]
                } 
            ], 
            resources: [ 
                { title: "Kaggle", url: "https://www.kaggle.com/", description: "Platform for data science competitions and datasets." }, 
                { title: "Coursera - Data Science Specializations", url: "https://www.coursera.org/", description: "Courses from top universities and companies." }, 
                { title: "Towards Data Science", url: "https://towardsdatascience.com/", description: "A popular blog with articles on data science topics." } 
            ] 
        },
        {
            title: "AI/ML Engineer",
            description: "Design, build, and deploy machine learning models, neural networks, and AI agents into production environments.",
            path: [
                {
                    title: "Advanced Programming & Data Prep",
                    description: "Deepen your Python skills and understand data structures required for neural networks.",
                    skills: ["Object-Oriented Python", "Data pipelines", "Vectorized calculations with NumPy", "GPU hardware acceleration basics"],
                    tip: "Get comfortable reading and parsing unstructured data files like text corpora and raw image folders.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Fluent Python by Luciano Ramalho", type: "Book", link: "#" },
                        { name: "Stanford CS231n: PyTorch / TensorFlow Tutorial", type: "Class Guide", link: "http://cs231n.stanford.edu/" }
                    ]
                },
                {
                    title: "Neural Networks & Deep Learning",
                    description: "Learn the foundations of artificial neural networks, backpropagation, and optimization.",
                    skills: ["PyTorch or TensorFlow frameworks", "Gradient descent mechanics", "Multilayer Perceptrons (MLPs)", "Activation functions & loss optimization"],
                    tip: "Build a simple neural network from scratch using only NumPy to truly understand backpropagation.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Deep Learning by Ian Goodfellow et al.", type: "Book", link: "https://www.deeplearningbook.org/" },
                        { name: "3Blue1Brown - Neural Networks Series", type: "Video Series", link: "https://www.3blue1brown.com/" }
                    ]
                },
                {
                    title: "Computer Vision & Natural Language Processing",
                    description: "Dive into specialized AI domains that deal with sight and language analysis.",
                    skills: ["Convolutional Neural Networks (CNNs)", "Recurrent Neural Networks (RNNs)", "Transformers & Attention mechanism", "Hugging Face libraries"],
                    tip: "Use transfer learning with pre-trained models (like ResNet or BERT) on custom datasets.",
                    timeline: "2-3 months",
                    studyReferences: [
                        { name: "Stanford CS224n: Natural Language Processing", type: "Course", link: "web.stanford.edu/class/cs224n/" },
                        { name: "Hugging Face NLP Course", type: "Interactive Tutorial", link: "https://huggingface.co/learn" }
                    ]
                },
                {
                    title: "LLMs & Vector Applications",
                    description: "Learn how to build applications using modern Large Language Models and semantic databases.",
                    skills: ["LangChain / LlamaIndex", "Vector databases (Chroma/Pinecone)", "RAG (Retrieval-Augmented Generation)", "API integration & fine-tuning"],
                    tip: "Build a custom question-answering bot trained on your own documents as a portfolio showpiece.",
                    timeline: "1-2 months",
                    studyReferences: [
                        { name: "LangChain Documentation Quickstart", type: "Docs", link: "https://python.langchain.com/" },
                        { name: "Pinecone Vector Academy", type: "Tutorial Series", link: "https://www.pinecone.io/learn/" }
                    ]
                },
                {
                    title: "MLOps & System Deployment",
                    description: "Learn to build containerized APIs for your models and run them in the cloud.",
                    skills: ["FastAPI development", "Docker container scripting", "AWS SageMaker or GCP Vertex AI", "Model monitoring & logging"],
                    tip: "Recruiters love models that are actually deployed and accessible via a clean web API.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Made With ML MLOps Guide", type: "Interactive Guide", link: "https://madewithml.com/" },
                        { name: "Deploying Machine Learning Models - Udacity", type: "Course", link: "https://www.udacity.com/" }
                    ]
                }
            ],
            resources: [
                { title: "DeepLearning.AI", url: "https://www.deeplearning.ai/", description: "Excellent courses by Andrew Ng covering deep learning and LLMs." },
                { title: "Fast.ai", url: "https://www.fast.ai/", description: "Practical deep learning for coders with a top-down teaching method." },
                { title: "Hugging Face Course", url: "https://huggingface.co/learn", description: "Free guides to master transformers and NLP models." }
            ]
        }
    ],
    "networking": [ 
        { 
            title: "Cybersecurity Analyst", 
            description: "Protect computer networks and systems by identifying, analyzing, and mitigating security vulnerabilities and threats.", 
            path: [ 
                { 
                    title: "Networking Fundamentals", 
                    description: "Master network architecture, protocols, and standard routing operations.",
                    skills: ["TCP/IP stack models", "DNS, DHCP, and HTTP protocols", "IP subnetting", "Network topologies"],
                    tip: "Set up a packet analysis tool and analyze your own web traffic to see protocols in action.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Computer Networking: A Top-Down Approach by Kurose & Ross", type: "Book", link: "#" },
                        { name: "CompTIA Network+ Certification Training Guide", type: "Reference", link: "https://www.comptia.org/" }
                    ]
                }, 
                { 
                    title: "Operating System Security & Admin", 
                    description: "Understand administrative controls and security configurations for Linux and Windows.",
                    skills: ["Linux command line & scripting", "Active Directory settings", "Access Control Lists (ACLs)", "Windows group policies"],
                    tip: "Set up a virtual laboratory on your PC and practice securing server OS templates.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "The Linux Command Line by William Shotts", type: "Book/PDF", link: "https://linuxcommand.org/" },
                        { name: "Microsoft Active Directory security best practices", type: "Docs", link: "https://learn.microsoft.com/" }
                    ]
                }, 
                { 
                    title: "Learn Security Tools & Vulnerability Scans", 
                    description: "Get hands-on experience using industry tools to map networks and audit security controls.",
                    skills: ["Wireshark packet analysis", "Nmap network mapper", "Metasploit framework", "SIEM systems (Splunk/ELK)"],
                    tip: "Download capture-the-flag exercises and practice analyzing security log file dumps.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Wireshark University Training Guides", type: "Tutorial", link: "https://www.wireshark.org/" },
                        { name: "Splunk Fundamentals Course (Free level)", type: "Course", link: "https://www.splunk.com/" }
                    ]
                }, 
                { 
                    title: "Ethical Hacking & Pen Testing", 
                    description: "Learn how to think like an attacker to proactively discover and repair system vulnerabilities.",
                    skills: ["OWASP Top 10 vulnerabilities", "Penetration testing phases", "Privilege escalation methods", "SQL injections"],
                    tip: "Practice legally on sites like TryHackMe and Hack The Box.",
                    timeline: "2-3 months",
                    studyReferences: [
                        { name: "Penetration Testing: A Hands-On Introduction by Georgia Weidman", type: "Book", link: "#" },
                        { name: "PortSwigger Web Security Academy Labs", type: "Interactive Labs", link: "https://portswigger.net/" }
                    ]
                }, 
                { 
                    title: "Certifications & Incident Mitigation", 
                    description: "Prepare for entry-level security certifications and study mitigation workflows.",
                    skills: ["CompTIA Security+ prep", "CEH (Certified Ethical Hacker) basics", "Incident response life cycle", "Firewall configurations"],
                    tip: "Building security labs is great, but write up clear walkthrough reports of your labs to showcase analytical skills.",
                    timeline: "1-2 months",
                    studyReferences: [
                        { name: "Professor Messer's Security+ Study Group", type: "Video Lectures", link: "https://www.professormesser.com/" },
                        { name: "NIST Computer Security Incident Handling Guide", type: "Reference Framework", link: "https://csrc.nist.gov/" }
                    ]
                } 
            ], 
            resources: [ 
                { title: "Cybrary", url: "https://www.cybrary.it/", description: "Free and paid training for cybersecurity professionals." }, 
                { title: "TryHackMe", url: "https://tryhackme.com/", description: "A hands-on, gamified platform for learning cybersecurity." }, 
                { title: "OWASP Top 15", url: "https://owasp.org/www-project-top-ten/", description: "A standard awareness document for web application security." } 
            ] 
        },
        {
            title: "Cloud Solutions Architect",
            description: "Design and implement scalable, resilient, and highly secure cloud networks and application environments.",
            path: [
                {
                    title: "Systems & Virtualization Basics",
                    description: "Understand virtual computers, basic storage arrays, and network nodes.",
                    skills: ["Linux system administration", "Hypervisors (VirtualBox/VMware)", "SSH terminal key pairs", "Basic shell scripting"],
                    tip: "Configure two virtual machine instances locally and connect them over an isolated private subnet.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Learn Linux in 5 Days by Jason Cannon", type: "Course", link: "#" },
                        { name: "Virtualization Overview - VMware Library", type: "Docs", link: "https://www.vmware.com/" }
                    ]
                },
                {
                    title: "Cloud Service Foundations",
                    description: "Learn the core services of a major public cloud service, like Amazon Web Services (AWS) or Microsoft Azure.",
                    skills: ["Compute instances (EC2/VMs)", "Object Storage systems (S3/Blob)", "Virtual Networks (VPC/VNet)", "Access management (IAM)"],
                    tip: "Study for the AWS Solutions Architect Associate exam as a structured way to learn the landscape.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "AWS Certified Solutions Architect Course - Adrian Cantrill", type: "Course", link: "https://cantrill.io/" },
                        { name: "AWS Documentation: VPC Best Practices", type: "Whitepaper", link: "https://aws.amazon.com/docs/" }
                    ]
                },
                {
                    title: "Infrastructure as Code (IaC)",
                    description: "Learn how to automate the configuration and deployment of virtual servers and networks.",
                    skills: ["Terraform syntax", "Git version branches", "Declarative configuration models", "State file storage"],
                    tip: "Write a Terraform template that deploys a secured, public-facing web server in 5 minutes.",
                    timeline: "1-2 months",
                    studyReferences: [
                        { name: "HashiCorp Certified: Terraform Associate Course", type: "Course", link: "https://developer.hashicorp.com/" },
                        { name: "Terraform Up & Running by Yevgeniy Brikman", type: "Book", link: "#" }
                    ]
                },
                {
                    title: "High Availability & Cloud Security",
                    description: "Design cloud architectures that automatically scale based on user load and recover from hardware failures.",
                    skills: ["Load balancers (ALBs)", "Auto Scaling Groups", "Multi-region distribution", "Encryption at rest/transit"],
                    tip: "Learn to deploy cloud resources across multiple separate data centers (Availability Zones) for high availability.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "AWS Well-Architected Framework", type: "Whitepaper", link: "https://aws.amazon.com/architecture/well-architected/" },
                        { name: "Designing Resilient Cloud Applications - Microsoft Architecture Guide", type: "Docs", link: "https://learn.microsoft.com/en-us/azure/architecture/" }
                    ]
                },
                {
                    title: "CI/CD & Container Orchestration",
                    description: "Integrate cloud resources with modern automated code pipelines.",
                    skills: ["Docker container packaging", "Kubernetes clusters", "GitHub Actions workflows", "Cloud monitoring logs"],
                    tip: "Deploy a small static site using Git pushes that trigger automatic rebuilds and deployments.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Docker Deep Dive by Nigel Poulton", type: "Book", link: "#" },
                        { name: "Kubernetes Up & Running by Kelsey Hightower et al.", type: "Book", link: "#" }
                    ]
                }
            ],
            resources: [
                { title: "AWS Skill Builder", url: "https://skillbuilder.aws/", description: "Official learning portal for AWS architectures." },
                { title: "A Cloud Guru", url: "https://acloudguru.com/", description: "Excellent platform for cloud certifications training." },
                { title: "Terraform Tutorials", url: "https://developer.hashicorp.com/terraform/tutorials", description: "Official guide to learning Infrastructure as Code." }
            ]
        }
    ],
    "product": [ 
        { 
            title: "Product Manager", 
            description: "Oversee the development of a product from conception to launch, acting as the bridge between business, tech, and user experience teams.", 
            path: [ 
                { 
                    title: "Understand Business & Market Research", 
                    description: "Learn about market research, user segmentation, business models, and competitor analysis.",
                    skills: ["SWOT analysis", "Target market sizing (TAM/SAM)", "Competitor matrices", "Value proposition design"],
                    tip: "Select a digital product you love, identify its competitors, and map out its key business advantages.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "The Lean Startup by Eric Ries", type: "Book", link: "#" },
                        { name: "Competitive Strategy by Michael Porter", type: "Book", link: "#" }
                    ]
                }, 
                { 
                    title: "Develop Technical Literacy", 
                    description: "Gain a working knowledge of software engineering principles and web architecture to collaborate with engineers.",
                    skills: ["Agile/Scrum ceremonies", "REST API structures", "Database tables & relationships", "Software lifecycle phases"],
                    tip: "You don't need to write code, but you must understand terms like 'API query', 'technical debt', and 'front-end latency'.",
                    timeline: "1-2 months",
                    studyReferences: [
                        { name: "Product Management for Dummies - Technical Basics", type: "Book", link: "#" },
                        { name: "Agile Estimating and Planning by Mike Cohn", type: "Book", link: "#" }
                    ]
                }, 
                { 
                    title: "Master User Experience (UX) & Storytelling", 
                    description: "Learn user research methodologies, user story mapping, and how to define key features.",
                    skills: ["Wireframe tools (Figma)", "User story mapping", "Writing PRDs (Product Requirements Docs)", "Creating user personas"],
                    tip: "Practice writing user stories: 'As a user, I want [action] so that [benefit]'. Make them clear and testable.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Inspired: How to Create Tech Products Customers Love by Marty Cagan", type: "Book", link: "#" },
                        { name: "Figma Fundamentals for Product Managers Course", type: "Interactive Guide", link: "https://www.figma.com/education/" }
                    ]
                }, 
                { 
                    title: "Analytics, Metrics & Prioritization", 
                    description: "Use quantitative product data to prioritize features and track product performance.",
                    skills: ["Product analytics tools (Amplitude)", "SQL basic queries", "A/B testing criteria", "RICE / MoSCoW prioritization"],
                    tip: "Understand core product metrics: Conversion Rate, User Churn, Customer Lifetime Value (LTV), and CAC.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Amplitude Analytics Academy Guide", type: "Docs/Tutorial", link: "https://academy.amplitude.com/" },
                        { name: "Lean Analytics by Alistair Croll & Benjamin Yoskovitz", type: "Book", link: "#" }
                    ]
                }, 
                { 
                    title: "Communication & Strategic Roadmaps", 
                    description: "Align multiple teams, create roadmap visualizations, and practice stakeholder management.",
                    skills: ["Roadmap creation tools (Jira/Productboard)", "Stakeholder alignment", "Presenting technical updates", "Strategic vision setting"],
                    tip: "A product manager's superpower is 'influence without authority.' Focus on building strong peer relationships.",
                    timeline: "1-2 months",
                    studyReferences: [
                        { name: "Empowered: Ordinary People, Extraordinary Products by Marty Cagan", type: "Book", link: "#" },
                        { name: "Product Roadmap Guide - Productboard Resources", type: "Guide", link: "https://www.productboard.com/" }
                    ]
                } 
            ], 
            resources: [ 
                { title: "Product School", url: "https://www.productschool.com/", description: "Offers certifications and resources for product managers." }, 
                { title: "Mind the Product", url: "https://www.mindtheproduct.com/", description: "A leading community and content site for product people." }, 
                { title: "Product Coalition", url: "https://productcoalition.com/", description: "A large collection of essays and articles on product management." } 
            ] 
        },
        {
            title: "UX/UI Researcher",
            description: "Study user behaviors, needs, and motivations to guide the design of digital interfaces and user interactions.",
            path: [
                {
                    title: "Foundations of Human-Centered Design",
                    description: "Learn UX principles, design psychology, accessibility guidelines, and cognitive principles.",
                    skills: ["Heuristic evaluation rules", "Design psychology basics", "Accessibility standards (WCAG)", "Information architecture"],
                    tip: "Run a usability audit on an open-source tool and document issues with suggestions for improvement.",
                    timeline: "1-2 months",
                    studyReferences: [
                        { name: "The Design of Everyday Things by Don Norman", type: "Book", link: "#" },
                        { name: "Introduction to Web Accessibility (W3C)", type: "Standard Guide", link: "https://www.w3.org/WAI/fundamentals/" }
                    ]
                },
                {
                    title: "Qualitative Research Methods",
                    description: "Master active interviewing, moderate usability testing, and card sorting to gather user feedback.",
                    skills: ["Interview guide writing", "Moderated testing scripts", "Card sorting methods", "Thematic data synthesis"],
                    tip: "Record mock interviews with friends. Practice asking open-ended questions rather than leading ones.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Interviewing Users by Steve Portigal", type: "Book", link: "#" },
                        { name: "Just Enough Research by Erika Hall", type: "Book", link: "#" }
                    ]
                },
                {
                    title: "Quantitative Research Methods",
                    description: "Learn to use survey systems and visual mapping tools to aggregate click and layout statistics.",
                    skills: ["Survey questionnaire design", "Statistical significance basics", "Click analytics mapping", "A/B test analytics"],
                    tip: "Combine qualitative survey text with numeric survey statistics to form a comprehensive narrative.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Quantifying the User Experience by Jeff Sauro & James Lewis", type: "Book", link: "#" },
                        { name: "Survey Design Handbook - Qualtrics", type: "Guide", link: "https://www.qualtrics.com/" }
                    ]
                },
                {
                    title: "Wireframing & Prototyping Basics",
                    description: "Build interactive layouts to test structures and visual flows with research participants.",
                    skills: ["Figma component basics", "Wireframing layouts", "Creating clickable prototype runs", "Responsive web templates"],
                    tip: "Keep test prototypes lightweight. They only need to be functional enough to test a design hypothesis.",
                    timeline: "1-2 months",
                    studyReferences: [
                        { name: "Figma Prototyping Tutorials", type: "Video Tutorials", link: "https://www.figma.com/resources/" },
                        { name: "Don't Make Me Think by Steve Krug", type: "Book", link: "#" }
                    ]
                },
                {
                    title: "Research Deliverables & Strategy",
                    description: "Translate research findings into reports, design patterns, and strategic decks for designers and product managers.",
                    skills: ["User journey mapping", "Writing usability briefs", "Presenting to engineering teams", "Design system alignment"],
                    tip: "Include actual video snippets or user quotes in your reports to build empathy with your engineering peers.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Mapping Experiences by James Kalbach", type: "Book", link: "#" },
                        { name: "UX Research Presentation Templates - Nielsen Norman Group", type: "Reference", link: "https://www.nngroup.com/" }
                    ]
                }
            ],
            resources: [
                { title: "Nielsen Norman Group", url: "https://www.nngroup.com/", description: "The gold standard resource for user experience research." },
                { title: "Interaction Design Foundation", url: "https://www.interaction-design.org/", description: "High-quality courses on UX and design theory." },
                { title: "UX Collective", url: "https://uxdesign.cc/", description: "A popular publication showcasing real UX case studies." }
            ]
        }
    ],
    "design": [ 
        { 
            title: "Fashion Designer", 
            description: "Conceptualize and create clothing and accessories, manage the design process from sketch to final product, and stay ahead of trends.", 
            path: [ 
                { 
                    title: "Develop Core Technical Skills", 
                    description: "Master sketching, sewing, flat pattern drafting, and understanding textile behaviors.",
                    skills: ["Fashion figure drawing (Croquis)", "Garment construction & sewing", "Pattern making basics", "Textile analysis & draping"],
                    tip: "Buy small swatches of fabrics to touch and manipulate. Understanding fiber weights is key.",
                    timeline: "3-4 months",
                    studyReferences: [
                        { name: "Patternmaking for Fashion Design by Helen Joseph-Armstrong", type: "Book", link: "#" },
                        { name: "Fabric for Fashion: The Swatch Book by Clive Hallett", type: "Book", link: "#" }
                    ]
                }, 
                { 
                    title: "Study Fashion History & Forecasting", 
                    description: "Understand historical silhouettes, art movements, and how to spot emerging fashion cycles.",
                    skills: ["Fashion history milestones", "Trend forecasting tools", "Mood board compilation", "Color theory & palettes"],
                    tip: "Follow style blogs, Runway collections, and lookbook publications to note recurring themes.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Fashion: The Definitive Visual Guide - DK Publishing", type: "Book", link: "#" },
                        { name: "WGSN Trend Forecasting Briefings", type: "Reports", link: "https://www.wgsn.com/" }
                    ]
                }, 
                { 
                    title: "Master Digital Design Tools", 
                    description: "Become proficient in digital illustration and pattern-drafting software.",
                    skills: ["Adobe Illustrator (Technical flats)", "Adobe Photoshop (Renders)", "CLO 3D pattern drafting basics"],
                    tip: "Practice drawing precise, flat vector designs in Illustrator showing exact seams and zipper placements.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Adobe Illustrator for Fashion Design Course", type: "Video Tutorial", link: "#" },
                        { name: "CLO 3D Beginner Video Series", type: "Tutorial", link: "https://www.clo3d.com/en/support/lessons" }
                    ]
                }, 
                { 
                    title: "Collection Concept & Tech Packs", 
                    description: "Create a cohesive apparel line and compile the technical specifications for manufacturing.",
                    skills: ["Design theme execution", "Technical packs (Tech Packs)", "Material sourcing lists", "Cost sheet calculations"],
                    tip: "A professional Tech Pack must detail every stitch type, measurement tolerance, and trim count.",
                    timeline: "3 months",
                    studyReferences: [
                        { name: "The Spec Manual by Michele Wesen Bryant", type: "Book", link: "#" },
                        { name: "Tech Pack Template & Guide - Techpacker", type: "Reference Resource", link: "https://techpacker.com/" }
                    ]
                }, 
                { 
                    title: "Production Planning & Brand Marketing", 
                    description: "Learn how apparel is manufactured, priced, packaged, and marketed to consumers.",
                    skills: ["Factory communication guidelines", "Production timelines", "Branding & social media", "Portfolio line sheets"],
                    tip: "Visit local boutique workshops or apparel print houses to observe commercial machines.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "The Fashion Business Manual by Fashionary", type: "Book", link: "#" },
                        { name: "Fashion Entrepreneurship by Retail Education", type: "Guide", link: "#" }
                    ]
                } 
            ], 
            resources: [ 
                { title: "Business of Fashion", url: "https://www.businessoffashion.com/", description: "Essential reading for fashion industry news and analysis." }, 
                { title: "WGSN", url: "https://www.wgsn.com/", description: "A leading trend forecasting service." }, 
                { title: "University of the Arts London", url: "https://www.arts.ac.uk/short-courses", description: "Offers a variety of short courses in fashion." } 
            ] 
        },
        {
            title: "Graphic & Brand Designer",
            description: "Create visual identities, logos, marketing assets, and brand systems that define the visual style of a company.",
            path: [
                {
                    title: "Design Principles & Typography",
                    description: "Study grid systems, spacing, visual hierarchy, color pairings, and typographic matching.",
                    skills: ["Color theory & contrast", "Grid layouts & grids", "Font pairing rules", "Visual hierarchy techniques"],
                    tip: "Study classic print layouts (magazines, books) and note how clean alignment guides the eye.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Interaction of Color by Josef Albers", type: "Book", link: "#" },
                        { name: "Thinking with Type by Ellen Lupton", type: "Book", link: "http://thinkingwithtype.com/" }
                    ]
                },
                {
                    title: "Vector & Raster Tools Mastery",
                    description: "Master the key creative tools for editing vector graphics and layouts.",
                    skills: ["Adobe Illustrator (Vectors)", "Adobe Photoshop (Image editing)", "Adobe InDesign (Editorial)"],
                    tip: "Spend hours mastering the Illustrator Pen tool. It is the absolute foundation of logo creation.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Adobe Creative Cloud Tutorials", type: "Video Guides", link: "https://helpx.adobe.com/creative-cloud/tutorials-explore.html" },
                        { name: "Vector Illustration Mastery - Skillshare Course", type: "Course", link: "https://www.skillshare.com/" }
                    ]
                },
                {
                    title: "Brand Identity Systems",
                    description: "Learn how to build complete visual brand suites, including secondary logos, color schemes, and icon styles.",
                    skills: ["Logo design principles", "Brand style guide books", "Packaging designs", "Applying realistic mockups"],
                    tip: "Remember that branding is more than just a logo. Define guidelines for patterns, photography, and fonts.",
                    timeline: "2-3 months",
                    studyReferences: [
                        { name: "Designing Brand Identity by Alina Wheeler", type: "Book", link: "#" },
                        { name: "Logo Design Love by David Airey", type: "Book/Blog", link: "https://www.logodesignlove.com/" }
                    ]
                },
                {
                    title: "Print Production & File Specs",
                    description: "Learn layout guidelines and file preparation requirements for commercial printing.",
                    skills: ["Print layout setups", "Bleed & trim lines", "CMYK vs. Pantone systems", "Export settings (PDF/X)"],
                    tip: "Build a relationship with a local print shop. Seeing their physical setup teaches you paper weights and processes.",
                    timeline: "1-2 months",
                    studyReferences: [
                        { name: "The Designer's Desktop Manual to Print Production", type: "Guide Booklet", link: "#" },
                        { name: "Adobe InDesign: Preparing Files for Print - Adobe Guide", type: "Docs", link: "https://helpx.adobe.com/" }
                    ]
                },
                {
                    title: "Brand Strategy & Case Studies",
                    description: "Understand consumer positioning and compile client cases highlighting design problem-solving.",
                    skills: ["Brand positioning statements", "Pitching layout concepts", "Writing design case studies", "Portfolio curation"],
                    tip: "Show the 'before' and 'after' in your portfolio. Explain *why* you chose the layout, not just *how* it looks.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Brand Gap by Marty Neumeier", type: "Book", link: "#" },
                        { name: "Case Study Writing for Designers - Medium guides", type: "Articles", link: "https://medium.com/" }
                    ]
                }
            ],
            resources: [
                { title: "Behance", url: "https://www.behance.net/", description: "Leading creative community showing brand identity cases." },
                { title: "The Futur", url: "https://thefutur.com/", description: "Excellent educational resource for the business of design." },
                { title: "Fonts in Use", url: "https://fontsinuse.com/", description: "An independent archive of typography in real-world application." }
            ]
        }
    ],
    "marketing": [ 
        { 
            title: "Digital Marketer", 
            description: "Promote products or brands using digital channels, including search engines, social media, email, and websites.", 
            path: [ 
                { 
                    title: "Master Marketing Principles & Copywriting", 
                    description: "Understand the core concepts of marketing, consumer psychology, and writing conversion-oriented copy.",
                    skills: ["AIDA model (Attention, Interest, Desire, Action)", "Customer journey maps", "Copywriting fundamentals", "Audience research"],
                    tip: "Read classical advertising books. Copywriting is the most valuable digital marketing skill.",
                    timeline: "1-2 months",
                    studyReferences: [
                        { name: "Scientific Advertising by Claude Hopkins", type: "Book", link: "#" },
                        { name: "Influence: The Psychology of Persuasion by Robert Cialdini", type: "Book", link: "#" }
                    ]
                }, 
                { 
                    title: "Learn SEO (Search Engine Optimization)", 
                    description: "Learn how to optimize web pages, articles, and architectures to rank organically on search engines.",
                    skills: ["Keyword research methods", "On-page metadata", "Off-page backlink methods", "SEO site audit checklists"],
                    tip: "Start your own free blogging site and try to write and rank articles for niche keywords.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Ahrefs Academy: SEO Course for Beginners", type: "Course", link: "https://ahrefs.com/academy/seo-course-for-beginners" },
                        { name: "Moz SEO Learning Center Guides", type: "Guide Docs", link: "https://moz.com/learn/seo" }
                    ]
                }, 
                { 
                    title: "Search Engine Marketing & Social Ads", 
                    description: "Understand how to plan, execute, and monitor paid advertising campaigns across search engines and social platforms.",
                    skills: ["Google Ads Manager", "Meta Ads Manager", "Pay-Per-Click bid setups", "Retargeting pixels"],
                    tip: "Obtain the Google Search Ads certification. It's free, globally recognized, and structures your learning.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Google Skillshop: Search Ads Certification", type: "Course", link: "https://skillshop.exceedlms.com/" },
                        { name: "Meta Blueprint Ads Certification Modules", type: "Course Tutorial", link: "https://www.facebook.com/business/learn" }
                    ]
                }, 
                { 
                    title: "Data Analytics & Testing", 
                    description: "Learn to track campaign performance, check conversions, and design layout optimization tests.",
                    skills: ["Google Analytics 4 configuration", "UTM parameters tracing", "A/B testing guidelines", "Heatmap analysis"],
                    tip: "Focus on business metrics like conversion rate and customer acquisition cost (CAC) rather than social likes.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Google Analytics 4 Certification - Skillshop", type: "Course", link: "https://skillshop.exceedlms.com/" },
                        { name: "Optimizely Glossary of A/B Testing", type: "Glossary Guide", link: "https://www.optimizely.com/optimization-glossary/" }
                    ]
                }, 
                { 
                    title: "Email Marketing & Automations", 
                    description: "Learn how to build email contact lists, execute campaigns, and write automated nurture flows.",
                    skills: ["Email tool interfaces (Klaviyo/Mailchimp)", "List segments setup", "Auto-responder setups", "Email template creation"],
                    tip: "Write a high-converting lead magnet (e.g. free PDF) to practice building email subscriber funnels.",
                    timeline: "1-2 months",
                    studyReferences: [
                        { name: "Klaviyo Product Academy Modules", type: "Course Guides", link: "https://academy.klaviyo.com/" },
                        { name: "Mailchimp Email Marketing Benchmark Guide", type: "Reference Data", link: "https://mailchimp.com/resources/" }
                    ]
                } 
            ], 
            resources: [ 
                { title: "HubSpot Academy", url: "https://academy.hubspot.com/", description: "Free courses and certifications on all things marketing." }, 
                { title: "Google Digital Garage", url: "https://learndigital.withgoogle.com/digitalgarage/", description: "Free training from Google on digital skills." }, 
                { title: "Neil Patel's Blog", url: "https://neilpatel.com/blog/", description: "A popular resource for SEO and digital marketing tips." } 
            ] 
        },
        {
            title: "Social Media Strategist",
            description: "Plan, produce, and optimize visual and video campaigns for platforms like TikTok, Instagram, and YouTube to build brand communities.",
            path: [
                {
                    title: "Platform Algorithms & Strategy",
                    description: "Study the distribution mechanics of different platforms and learn how to draft campaigns.",
                    skills: ["Platform feature sets", "Algorithm ranking cues", "Developing content calendars", "Competitor brand analysis"],
                    tip: "Identify what video formats capture your attention in the first 3 seconds, and start cataloging hooks.",
                    timeline: "1-2 months",
                    studyReferences: [
                        { name: "Later Blog: Platform Algorithm Changes Guide", type: "Blog Guide", link: "https://later.com/blog/" },
                        { name: "Social Media Strategy Course - HubSpot Academy", type: "Course", link: "https://academy.hubspot.com/" }
                    ]
                },
                {
                    title: "Visual Content Production",
                    description: "Learn to shoot, edit, and animate engaging, high-retention video clips and visual templates.",
                    skills: ["Mobile video shooting", "Video editing (CapCut/Premiere)", "Canva/Illustrator templates", "Caption typography"],
                    tip: "Clear audio and bright lighting are more important than camera resolution. Buy a lapel microphone.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "CapCut Video Editing Guide for Beginners", type: "Video Tutorial", link: "https://www.capcut.com/" },
                        { name: "Mobile Video Academy Guides", type: "Guide Booklet", link: "#" }
                    ]
                },
                {
                    title: "Copywriting & Visual Scripting",
                    description: "Learn to draft video scripts with strong hooks, engaging core loops, and clear call-to-actions.",
                    skills: ["Video hook formulas", "Short-form scripting", "Call-To-Action (CTA) copywriting", "Hashtag metadata optimization"],
                    tip: "Test and write three distinct hooks for each video script. Hooks make or break short video content.",
                    timeline: "1-2 months",
                    studyReferences: [
                        { name: "The Copywriter's Handbook by Robert Bly", type: "Book", link: "#" },
                        { name: "Gary Vaynerchuk Content Model Guide", type: "Strategy Guide", link: "#" }
                    ]
                },
                {
                    title: "Community Growth & Interactions",
                    description: "Learn comment response structures, influencer partnerships, and user-generated content (UGC) pipelines.",
                    skills: ["Brand tone alignment", "Crisis comment policies", "Influencer sourcing briefs", "Aggregating user feedback"],
                    tip: "Reply to early comments with custom video responses to build a loyal micro-community around the brand.",
                    timeline: "1 month",
                    studyReferences: [
                        { name: "ACRP Association Guide for Digital Engagement", type: "Articles", link: "#" },
                        { name: "Sprout Social: Guide to Community Management", type: "Reference Resource", link: "https://sproutsocial.com/insights/" }
                    ]
                },
                {
                    title: "Analytics, Reporting & Partnerships",
                    description: "Analyze profile views, video view-through rates, and write marketing decks for sponsorships.",
                    skills: ["Engagement statistics checks", "Audience retention graphs", "Sponsorship media decks", "Campaign ROI reporting"],
                    tip: "Build a case study of a campaign you ran, documenting the reach, shares, and conversion rates.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Social Media Examiner: Reading Meta Analytics", type: "Article Guide", link: "https://www.socialmediaexaminer.com/" },
                        { name: "Sponsorship Media Kit Templates - Canva Education", type: "Templates", link: "https://www.canva.com/" }
                    ]
                }
            ],
            resources: [
                { title: "Later Blog", url: "https://later.com/blog/", description: "Excellent resources on social media trends and scheduling tips." },
                { title: "Social Media Examiner", url: "https://www.socialmediaexaminer.com/", description: "Detailed guide articles on advertising and strategy changes." },
                { title: "Creator Science", url: "https://creatorscience.com/", description: "A high-quality resource for creator economy strategy." }
            ]
        }
    ],
    "biotech": [
        {
            title: "Bioinformatics Scientist",
            description: "Analyze complex genomic and molecular data using statistical tools and algorithms to uncover biological patterns and guide drug discovery.",
            path: [
                {
                    title: "Biology & Genetics Fundamentals",
                    description: "Learn cellular biology, molecular genetics, DNA structures, and gene transcription mechanics.",
                    skills: ["Molecular genetics principles", "Cell biology workflows", "DNA/RNA structural models"],
                    tip: "Enroll in an online introductory biology course and study DNA replication structures.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Genetics: A Conceptual Approach by Benjamin A. Pierce", type: "Book", link: "#" },
                        { name: "Molecular Biology of the Cell by Bruce Alberts", type: "Book/Reference", link: "#" }
                    ]
                },
                {
                    title: "Scientific Programming & Python",
                    description: "Master Python programming and specialized packages like Biopython for analyzing molecular sequence alignments.",
                    skills: ["Biopython library", "NCBI dataset queries", "BLAST alignment scripts", "File parsing (FASTA/FASTQ)"],
                    tip: "Practice writing scripts that query NCBI gene databases and run local sequence alignments.",
                    timeline: "3 months",
                    studyReferences: [
                        { name: "Rosalind: Platform for Learning Bioinformatics through Coding", type: "Interactive Platform", link: "https://rosalind.info/" },
                        { name: "Biopython Tutorial and Cookbook", type: "Docs", link: "https://biopython.org/DIST/docs/tutorial/Tutorial.html" }
                    ]
                },
                {
                    title: "Statistical Genomics & R Programming",
                    description: "Master statistical genetics and analyze gene expression profiles using R and Bioconductor.",
                    skills: ["R scripting basics", "Bioconductor packages (DESeq2)", "Differential gene expression", "Plotting (ggplot2 heatmap/volcano)"],
                    tip: "Learn to interpret volcano plots and cluster gene expressions using heatmaps for RNA-Seq datasets.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "R for Data Science by Hadley Wickham", type: "Book/PDF", link: "https://r4ds.hadley.nz/" },
                        { name: "Bioconductor Core Tutorials for Genomic Data", type: "Docs", link: "https://www.bioconductor.org/help/education-training/" }
                    ]
                },
                {
                    title: "Structural Bioinformatics & Protein Modeling",
                    description: "Learn to visualize molecular structures and model drug-receptor target dockings.",
                    skills: ["PyMOL structure visualization", "AlphaFold structure predictions", "Molecular docking (AutoDock)", "Protein-ligand models"],
                    tip: "Visualize complex protein crystal structures in PyMOL to understand amino-acid bindings.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "PyMOL User Wiki & Guides", type: "Docs", link: "https://pymolwiki.org/" },
                        { name: "AlphaFold Database Guides - EMBL-EBI", type: "Tutorial Library", link: "https://www.ebi.ac.uk/training/" }
                    ]
                },
                {
                    title: "Academic Research & Internships",
                    description: "Join computational research labs or pharmaceutical development internships.",
                    skills: ["Research paper composition", "NCBI GEO data deposits", "Public presentation skillsets"],
                    tip: "Publish your analytical scripts to a public GitHub profile. Real research commits prove capabilities.",
                    timeline: "3 months",
                    studyReferences: [
                        { name: "Biostars: Bioinformatics Q&A Community Forum", type: "Forum", link: "https://www.biostars.org/" },
                        { name: "NCBI Gene Expression Omnibus (GEO) Repository Guides", type: "Database Docs", link: "https://www.ncbi.nlm.nih.gov/geo/" }
                    ]
                }
            ],
            resources: [
                { title: "Rosalind Project", url: "https://rosalind.info/", description: "A platform for learning bioinformatics through problem solving." },
                { title: "NCBI Databases", url: "https://www.ncbi.nlm.nih.gov/", description: "The central repository for genomic data and computational tools." },
                { title: "Bioconductor", url: "https://www.bioconductor.org/", description: "Open source software for analysis of genomic data in R." }
            ]
        },
        {
            title: "Clinical Research Coordinator",
            description: "Coordinate the daily operations of clinical trials, manage patient safety protocols, collect trial data, and maintain strict regulatory compliance.",
            path: [
                {
                    title: "Regulatory Compliance & GCP Principles",
                    description: "Understand FDA regulations, Institutional Review Board (IRB) roles, and Good Clinical Practice (GCP) guidelines.",
                    skills: ["Good Clinical Practice (GCP)", "FDA Title 21 compliance", "Research ethics and consent principles", "IRB submission cycles"],
                    tip: "Complete a certified course in Good Clinical Practice. This is the baseline requirement to work in trials.",
                    timeline: "1-2 months",
                    studyReferences: [
                        { name: "CITI Program: Good Clinical Practice (GCP) Training", type: "Certification Course", link: "https://about.citiprogram.org/" },
                        { name: "FDA Regulations for Clinical Trials - official guidelines", type: "Regulatory Docs", link: "https://www.fda.gov/" }
                    ]
                },
                {
                    title: "Study Pathophysiology & Drug Approval Phases",
                    description: "Understand standard clinical drug phases and basic human biology relating to experimental therapies.",
                    skills: ["Medical terminology", "Clinical drug trial phases (I-IV)", "Pathophysiology outlines"],
                    tip: "Memorize the clinical testing phases. Phase I tests safety, Phase II tests dosage/efficacy, Phase III tests larger groups.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Introduction to Clinical Trials Course - NIH Center", type: "Course", link: "https://clinicalcenter.nih.gov/" },
                        { name: "Pathophysiology of Disease by Gary D. Hammer", type: "Book", link: "#" }
                    ]
                },
                {
                    title: "Master Protocol Reviews & Patient Recruitment",
                    description: "Learn how to review study protocols and design Informed Consent Forms (ICFs) for patients.",
                    skills: ["Trial Protocol analysis", "Informed Consent Form compilation", "Patient screening checklists", "Ethical recruitment models"],
                    tip: "Practice explaining complex scientific mechanisms in plain language to simulate explaining a trial to a patient.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "ACRP Association Guidelines for Informed Consent", type: "Guide Article", link: "https://acrpnet.org/" },
                        { name: "Clinical Trial Protocols Manual", type: "Book Booklet", link: "#" }
                    ]
                },
                {
                    title: "Clinical Data & EDC Systems",
                    description: "Learn how to audit trial records and record data into Electronic Data Capture (EDC) systems.",
                    skills: ["EDC systems (Medidata Rave/Veeva)", "Case Report Forms (CRFs) tracking", "Source document checks", "Data query resolutions"],
                    tip: "Familiarity with EDC layouts is a massive advantage in entry-level hiring interviews.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "Medidata Academy - Rave EDC Essentials", type: "Software Guides", link: "https://www.medidata.com/" },
                        { name: "Society for Clinical Data Management (SCDM) Guides", type: "Publications", link: "https://scdm.org/" }
                    ]
                },
                {
                    title: "Site Operations & Sponsor Communications",
                    description: "Coordinate patient visits, manage investigational drug storage, and communicate with pharmaceutical monitors.",
                    skills: ["Patient scheduling logs", "Drug logs auditing", "Clinical Research Monitor alignment", "Regulatory binder filing"],
                    tip: "Practice roleplaying candidate interviews to show high emotional intelligence and communication clarity.",
                    timeline: "2 months",
                    studyReferences: [
                        { name: "The Clinical Research Coordinator's Handbook by John R. Shinavier", type: "Book", link: "#" },
                        { name: "FDA Guide to Site Inspections and Audits", type: "Reference Framework", link: "https://www.fda.gov/" }
                    ]
                }
            ],
            resources: [
                { title: "ACRP Association", url: "https://acrpnet.org/", description: "Association of Clinical Research Professionals - certifications and training." },
                { title: "CITI Program", url: "https://about.citiprogram.org/", description: "Industry-standard educational platform for research ethics and regulations." },
                { title: "FDA Clinical Trials Guide", url: "https://www.fda.gov/patients/clinical-trials-what-patients-need-know", description: "FDA's official consumer and researcher portal for clinical studies." }
            ]
        }
    ]
};
const quizData = [
    { question: "When starting a new project, what's your first move?", answers: [ { text: "Create a detailed, step-by-step plan.", type: "organizer" }, { text: "Brainstorm a bunch of wild, creative ideas.", type: "innovator" }, { text: "Analyze existing data to find a logical starting point.", type: "analyst" } ] },
    { question: "You're facing a tough problem. You are more likely to:", answers: [ { text: "Rely on proven methods that have worked before.", type: "organizer" }, { text: "Look for patterns and connections others might miss.", type: "analyst" }, { text: "Think outside the box for a completely new solution.", type: "innovator" } ] },
    { question: "Which work environment sounds most appealing?", answers: [ { text: "A structured environment with clear expectations.", type: "organizer" }, { text: "A dynamic, fast-paced space where I can experiment.", type: "innovator" }, { text: "A quiet space where I can focus deeply on complex information.", type: "analyst" } ] },
    { question: "How do you prefer to learn new things?", answers: [ { text: "Through hands-on experimentation and trial-and-error.", type: "innovator" }, { text: "By studying theories and understanding the 'why' behind them.", type: "analyst" }, { text: "Following a structured course with clear modules.", type: "organizer" } ] },
    { question: "What kind of achievements make you feel most proud?", answers: [ { text: "Creating something beautiful, unique, or expressive.", type: "innovator" }, { text: "Solving a highly complex bug or finding a hidden trend in data.", type: "analyst" }, { text: "Organizing a chaotic team event and executing it flawlessly on schedule.", type: "organizer" } ] },
    { question: "When working in a team project, what role do you naturally fall into?", answers: [ { text: "The planner who coordinates tasks and manages deadlines.", type: "organizer" }, { text: "The visionary who pitches the core creative concepts.", type: "innovator" }, { text: "The researcher who cross-checks facts and audits quality.", type: "analyst" } ] },
    { question: "Which of these hobbies sounds most relaxing to you?", answers: [ { text: "Playing strategy board games or solving logic puzzles.", type: "analyst" }, { text: "Painting, styling outfits, sketching, or creative writing.", type: "innovator" }, { text: "Planning detailed travel itineraries or managing schedules.", type: "organizer" } ] },
    { question: "If you had to explain a complex topic to a child, how would you start?", answers: [ { text: "Draw a colorful diagram or tell a fun story.", type: "innovator" }, { text: "Show them a step-by-step numbered guide.", type: "organizer" }, { text: "Give them a logical analogy based on facts they already understand.", type: "analyst" } ] }
];
const quizResults = {
    innovator: { title: "The Innovator", description: "You're a creative, forward-thinking individual who thrives on new ideas. You're great at brainstorming and aren't afraid to challenge the status quo.", strengths: ["Creativity", "Vision", "Problem-Solving", "Adaptability"], careers: ["Fashion Designer", "Graphic & Brand Designer", "Social Media Strategist", "Digital Marketer", "Product Manager"] },
    analyst: { title: "The Analyst", description: "You are logical, detail-oriented, and excellent at making sense of complex information. You make decisions based on data and evidence.", strengths: ["Analytical Thinking", "Attention to Detail", "Research", "Objectivity"], careers: ["Data Scientist", "AI/ML Engineer", "Bioinformatics Scientist", "Cybersecurity Analyst", "Cloud Solutions Architect", "Full-Stack Developer"] },
    organizer: { title: "The Organizer", description: "You excel at creating structure, planning, and executing tasks efficiently. You bring order to chaos and ensure projects stay on track.", strengths: ["Planning", "Reliability", "Process-Oriented", "Leadership"], careers: ["Product Manager", "UX/UI Researcher", "Clinical Research Coordinator", "Cybersecurity Analyst", "Cloud Solutions Architect", "Full-Stack Developer"] }
};


// --- GENERAL FUNCTIONS ---

function findJob(jobTitle) {
    for (const category in jobData) {
        const foundJob = jobData[category].find(job => job.title.toLowerCase() === jobTitle.toLowerCase());
        if (foundJob) {
            return { ...foundJob, category };
        }
    }
    return null;
}

// --- PAGE-SPECIFIC LOGIC ---

// Controller to decide which functions to run based on the page
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname.split("/").pop();

    if (path === 'index.html' || path === '') {
        initRecommenderPage();
    } else if (path === 'results.html') {
        initResultsPage();
    } else if (path === 'details.html') {
        initDetailsPage();
    } else if (path === 'quiz.html') {
        initQuizPage();
    } else if (path === 'counseling.html') {
        initCounselingPage();
    } else if (path === 'jobs.html') {
        initJobsPage();
    } else if (path === 'resources.html') {
        initResourcesPage();
    }
});


// 1. Recommender Page (index.html)
function initRecommenderPage() {
    const careerForm = document.getElementById('career-form');
    if (!careerForm) return;

    careerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const interestField = document.getElementById('interest-field');
        const studyingField = document.getElementById('studying-field').value;
        const interest = interestField.value;
        if (studyingField && interest) {
            window.location.href = `results.html?study=${studyingField}&interest=${interest}`;
        } else {
            alert("Please select both your field of study and your interest.");
        }
    });
}

// 2. Results Page (results.html)
function initResultsPage() {
    const jobCardsContainer = document.getElementById('job-cards-container');
    if (!jobCardsContainer) return;

    const params = new URLSearchParams(window.location.search);
    const interest = params.get('interest');
    const study = params.get('study');
    
    // Retrieve jobs matching the interest
    let interestJobs = jobData[interest] || [];
    // Retrieve study jobs if different
    let studyJobs = (study && study !== interest) ? (jobData[study] || []) : [];

    // Map interest jobs to add category and match tag
    let jobsList = interestJobs.map(job => ({ ...job, category: interest, tag: "Matches your Interest" }));

    // Map study jobs and add to list if they aren't duplicates
    studyJobs.forEach(job => {
        if (!jobsList.some(j => j.title.toLowerCase() === job.title.toLowerCase())) {
            jobsList.push({ ...job, category: study, tag: "Matches your Field of Study" });
        } else {
            // If it's in both, update tag to "Perfect Match for You!"
            const existingJob = jobsList.find(j => j.title.toLowerCase() === job.title.toLowerCase());
            if (existingJob) {
                existingJob.tag = "Perfect Match for You!";
            }
        }
    });

    if (jobsList.length > 0) {
        jobCardsContainer.innerHTML = ''; // Clear loading message
        jobsList.forEach((job, index) => {
            const card = document.createElement('div');
            const rotationClass = index % 2 === 0 ? 'rotate-neg-1' : 'rotate-1';
            const encodedTitle = encodeURIComponent(job.title);
            
            // Customize badge color based on tag
            let badgeBg = "bg-sky-100 text-sky-800";
            if (job.tag.includes("Perfect")) {
                badgeBg = "bg-amber-100 text-amber-800 font-bold border border-amber-300";
            } else if (job.tag.includes("Study")) {
                badgeBg = "bg-teal-100 text-teal-800";
            }

            card.className = `scrapbook-card p-6 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer ${rotationClass}`;
            card.innerHTML = `
                <a href="details.html?job=${encodedTitle}&interest=${job.category}" class="block">
                    <div class="washi-tape"></div>
                    <span class="inline-block px-2 py-1 rounded text-xs font-semibold mb-2 ${badgeBg}">${job.tag}</span>
                    <h3 class="font-handwriting text-3xl text-[#7d3326]">${job.title}</h3>
                    <p class="mt-2 text-stone-600 text-base leading-relaxed">${job.description}</p>
                    <div class="mt-4 text-xs font-bold text-teal-800 flex items-center gap-1">
                        Open Node Roadmap &rarr;
                    </div>
                </a>
            `;
            jobCardsContainer.appendChild(card);
        });
    } else {
        jobCardsContainer.innerHTML = '<p class="text-center col-span-full">No career paths found matching these parameters. Try browsing All Jobs page!</p>';
    }
}


// 3. Details Page (details.html)
function initDetailsPage() {
    const params = new URLSearchParams(window.location.search);
    const jobTitleParam = decodeURIComponent(params.get('job'));
    const interestParam = params.get('interest');

    const job = findJob(jobTitleParam);

    if (job) {
        document.getElementById('job-title').textContent = job.title;
        document.getElementById('job-description').textContent = job.description;

        const careerPathContainer = document.getElementById('career-path-container');
        careerPathContainer.innerHTML = '';

        const totalSteps = job.path.length;

        // Populate Sidebar Elements
        const detailsSidebar = document.getElementById('details-sidebar');
        const sidebarOverlay = document.getElementById('sidebar-overlay');

        function openSidebar(index) {
            const step = job.path[index];
            const isCompleted = localStorage.getItem(`cc-completed-${job.title}-${index}`) === "true";
            const savedNote = localStorage.getItem(`cc-notes-${job.title}-${index}`) || "";

            detailsSidebar.innerHTML = `
                <!-- Sidebar Header -->
                <div class="p-6 sidebar-header-banner flex items-start justify-between">
                    <div>
                        <span class="text-xs font-bold uppercase tracking-wider text-stone-500">Step ${index + 1} of ${totalSteps}</span>
                        <h3 class="font-handwriting text-3xl text-stone-900 mt-1">${step.title}</h3>
                    </div>
                    <button id="close-sidebar-btn" class="text-3xl text-stone-500 hover:text-stone-850 font-bold focus:outline-none">&times;</button>
                </div>

                <!-- Sidebar Body -->
                <div class="p-6 space-y-6">
                    <!-- Complete Status Checkbox -->
                    <div class="p-4 bg-white border border-stone-200 rounded-lg shadow-sm flex items-center justify-between">
                        <label class="flex items-center cursor-pointer gap-3 select-none">
                            <input type="checkbox" id="sidebar-checkbox" class="w-5 h-5 rounded text-teal-600 focus:ring-teal-500 border-gray-300 transition-transform hover:scale-110" ${isCompleted ? 'checked' : ''}>
                            <span class="font-semibold text-stone-800">Mark this step as complete</span>
                        </label>
                    </div>

                    <!-- Step Description -->
                    <div>
                        <h4 class="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">Overview Description</h4>
                        <p class="text-stone-700 text-base leading-relaxed">${step.description}</p>
                    </div>

                    <!-- Timeline Badge -->
                    <div class="flex items-center gap-2 text-sm text-stone-700 font-semibold">
                        <span>⏱️ Estimated Duration:</span>
                        <span class="bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded text-sm">${step.timeline}</span>
                    </div>

                    <!-- Skills to Master -->
                    <div>
                        <h4 class="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Skills to Focus On</h4>
                        <div class="flex flex-wrap gap-1.5">
                            ${step.skills.map(skill => `<span class="bg-teal-50 text-teal-855 text-sm px-2.5 py-1 rounded border border-teal-200">${skill}</span>`).join('')}
                        </div>
                    </div>

                    <!-- Expert Tip Box -->
                    <div class="bg-amber-50/70 p-4 rounded-lg border border-amber-250/70">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1 flex items-center gap-1">
                            <span>💡</span> Advisor Tip
                        </h4>
                        <p class="text-sm text-amber-900 leading-relaxed font-semibold">${step.tip}</p>
                    </div>

                    <!-- Reference Materials to Study -->
                    <div>
                        <h4 class="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">References & Study Topics</h4>
                        <ul class="space-y-2">
                            ${step.studyReferences.map(ref => `
                                <li class="text-sm">
                                    <span class="inline-block px-1.5 py-0.5 rounded font-bold uppercase bg-stone-100 text-stone-700 mr-1.5">${ref.type}</span>
                                    ${ref.link !== '#' ? `<a href="${ref.link}" target="_blank" class="underline text-teal-700 hover:text-teal-900 font-semibold">${ref.name}</a>` : `<span class="text-stone-800 font-semibold">${ref.name}</span>`}
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <!-- Personal Notepad -->
                    <div>
                        <h4 class="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">Personal Learning Notes</h4>
                        <div class="relative">
                            <textarea id="sidebar-notes" rows="4" class="w-full p-3 bg-yellow-50 border border-yellow-200 rounded-md shadow-inner text-sm focus:ring-amber-400 focus:border-amber-450 text-stone-800" placeholder="Type links, book names, or logs...">${savedNote}</textarea>
                            <div id="sidebar-notes-status" class="absolute right-2 bottom-2 text-[10px] text-amber-700 hidden">Auto-saved!</div>
                        </div>
                    </div>
                </div>
            `;

            // Open animations
            detailsSidebar.classList.add('open');
            sidebarOverlay.classList.remove('hidden');
            setTimeout(() => {
                sidebarOverlay.classList.add('open');
            }, 10);

            // Bind Sidebar Event Listeners
            // 1. Close button
            const closeBtn = document.getElementById('close-sidebar-btn');
            closeBtn.addEventListener('click', closeSidebar);

            // 2. Complete Checkbox
            const checkbox = document.getElementById('sidebar-checkbox');
            checkbox.addEventListener('change', (e) => {
                localStorage.setItem(`cc-completed-${job.title}-${index}`, e.target.checked ? "true" : "false");
                updateProgress();
            });

            // 3. Notes autosave
            const notepad = document.getElementById('sidebar-notes');
            const noteStatus = document.getElementById('sidebar-notes-status');
            let saveTimeout;
            notepad.addEventListener('input', (e) => {
                clearTimeout(saveTimeout);
                saveTimeout = setTimeout(() => {
                    localStorage.setItem(`cc-notes-${job.title}-${index}`, e.target.value);
                    noteStatus.classList.remove('hidden');
                    setTimeout(() => {
                        noteStatus.classList.add('hidden');
                    }, 1200);
                }, 800);
            });
        }

        function closeSidebar() {
            detailsSidebar.classList.remove('open');
            sidebarOverlay.classList.remove('open');
            setTimeout(() => {
                sidebarOverlay.classList.add('hidden');
            }, 300);
        }

        // Overlay close click
        sidebarOverlay.addEventListener('click', closeSidebar);

        function updateProgress() {
            let completedCount = 0;
            job.path.forEach((step, index) => {
                const key = `cc-completed-${job.title}-${index}`;
                const isCompleted = localStorage.getItem(key) === "true";
                if (isCompleted) {
                    completedCount++;
                }

                // Update node visual color classes dynamically
                const nodeEl = document.getElementById(`node-${index}`);
                if (nodeEl) {
                    if (isCompleted) {
                        nodeEl.className = 'flow-node completed-step';
                        // Add check badge if missing
                        if (!nodeEl.querySelector('.node-check-badge')) {
                            const badge = document.createElement('span');
                            badge.className = 'node-check-badge';
                            badge.innerHTML = '✓';
                            nodeEl.appendChild(badge);
                        }
                    } else {
                        nodeEl.className = 'flow-node';
                        const badge = nodeEl.querySelector('.node-check-badge');
                        if (badge) badge.remove();
                    }
                }
            });

            // Set current active target step node
            let currentTargetIndex = -1;
            for (let i = 0; i < totalSteps; i++) {
                const key = `cc-completed-${job.title}-${i}`;
                if (localStorage.getItem(key) !== "true") {
                    currentTargetIndex = i;
                    break;
                }
            }
            // Clear active step classes first
            for (let i = 0; i < totalSteps; i++) {
                const nodeEl = document.getElementById(`node-${i}`);
                if(nodeEl) nodeEl.classList.remove('active-step');
            }
            if (currentTargetIndex !== -1) {
                const targetNode = document.getElementById(`node-${currentTargetIndex}`);
                if (targetNode && !targetNode.classList.contains('completed-step')) {
                    targetNode.classList.add('active-step');
                }
            }

            const percent = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;
            const progressBar = document.getElementById('progress-bar');
            const progressText = document.getElementById('progress-text');
            
            if (progressBar && progressText) {
                progressBar.style.width = `${percent}%`;
                progressText.textContent = `Roadmap Progress: ${completedCount} of ${totalSteps} steps completed (${percent}%)`;
            }

            // Update connector segment highlights
            job.path.forEach((step, index) => {
                const segment = document.getElementById(`track-segment-${index}`);
                if (segment) {
                    const currentCompleted = localStorage.getItem(`cc-completed-${job.title}-${index}`) === "true";
                    if (currentCompleted) {
                        segment.classList.add('timeline-segment-active');
                    } else {
                        segment.classList.remove('timeline-segment-active');
                    }
                }
            });
        }

        // Render Circular Node flowchart elements
        const timelineWrapper = document.createElement('div');
        timelineWrapper.className = 'timeline-container';

        // 1. Create central vertical track line
        const trackLine = document.createElement('div');
        trackLine.className = 'timeline-track';
        timelineWrapper.appendChild(trackLine);

        // 2. Render nodes and path lines
        job.path.forEach((step, index) => {
            const isLast = index === job.path.length - 1;
            
            // Segment wrapper
            const itemElement = document.createElement('div');
            itemElement.className = 'timeline-item';
            
            // Segment line element linking to next node
            if (!isLast) {
                const segmentLine = document.createElement('div');
                segmentLine.id = `track-segment-${index}`;
                // Set layout constraints for segment (thinned dashed design)
                segmentLine.className = 'absolute top-[38px] bottom-[-38px] left-1/2 w-0.5 border-l-2 border-dashed border-stone-300 translate-x-[-50%] z-0 transition-colors duration-400';
                itemElement.appendChild(segmentLine);
            }

            // Node Circle
            const nodeEl = document.createElement('div');
            nodeEl.id = `node-${index}`;
            nodeEl.className = 'flow-node z-10';
            nodeEl.setAttribute('data-tooltip', `Step ${index + 1}: Click to Open Details`);
            nodeEl.innerHTML = `<span>${index + 1}</span>`;
            nodeEl.addEventListener('click', () => openSidebar(index));

            // Label Container (displays title & timeline next to node)
            const labelContainer = document.createElement('div');
            labelContainer.className = 'node-label-container';
            labelContainer.innerHTML = `
                <div class="node-label-title">${step.title}</div>
                <div class="node-label-time">⏱️ ${step.timeline}</div>
            `;

            itemElement.appendChild(nodeEl);
            itemElement.appendChild(labelContainer);
            timelineWrapper.appendChild(itemElement);
        });

        careerPathContainer.appendChild(timelineWrapper);

        // Update checklist highlights and progress text
        updateProgress();

        // Resources renderer (High contrast card layout)
        const resourcesContainer = document.getElementById('resources-container');
        if (resourcesContainer) {
            resourcesContainer.innerHTML = '';
            job.resources.forEach(resource => {
                const resourceCard = document.createElement('a');
                resourceCard.href = resource.url;
                resourceCard.target = '_blank';
                resourceCard.className = 'resource-card block';
                resourceCard.innerHTML = `
                    <h4>${resource.title}</h4>
                    <p>${resource.description}</p>
                `;
                resourcesContainer.appendChild(resourceCard);
            });
        }

        const backToResultsBtn = document.getElementById('back-to-results-btn');
        if (backToResultsBtn) {
            backToResultsBtn.addEventListener('click', () => {
                 window.location.href = `results.html?interest=${interestParam}`;
            });
        }

    } else {
        document.getElementById('job-title').textContent = "Oops!";
        document.getElementById('job-description').textContent = "We couldn't find the career details you were looking for.";
        const careerPathContainer = document.getElementById('career-path-container');
        if (careerPathContainer) {
            careerPathContainer.innerHTML = '<p class="text-center p-6 bg-white rounded-lg shadow">Please double check the career path title and interest parameter in the URL.</p>';
        }
    }
}


// 4. Quiz Page (quiz.html) - Premium Form Stack Layout with 8 Questions
function initQuizPage() {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;

    function showAlert(message) {
        const alertModal = document.getElementById('alert-modal');
        const alertMessage = document.getElementById('alert-message');
        const closeAlertBtn = document.getElementById('close-alert-btn');
        
        alertMessage.textContent = message;
        alertModal.classList.remove('hidden');

        closeAlertBtn.onclick = () => alertModal.classList.add('hidden');
    }

    function displayQuizResult(result) {
        const quizResultContainer = document.getElementById('quiz-result');
        quizContainer.innerHTML = '';

        // Dynamically resolve career paths to show clickable links
        const careerLinks = result.careers.map(careerName => {
            const encodedTitle = encodeURIComponent(careerName);
            const job = findJob(careerName);
            const category = job ? job.category : '';
            return `<a href="details.html?job=${encodedTitle}&interest=${category}" class="underline text-[#7d3326] hover:text-[#5a241a] font-bold mx-1 inline-block hover:scale-105 transition-transform">${careerName}</a>`;
        }).join(', ');

        quizResultContainer.innerHTML = `
            <div class="scrapbook-card p-8 text-center rotate-1 mb-8">
                <div class="washi-tape"></div>
                <h3 class="font-handwriting text-5xl text-[#7d3326] mb-4">${result.title}</h3>
                <p class="text-stone-700 leading-relaxed text-base max-w-xl mx-auto">${result.description}</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6 text-left">
                <div class="scrapbook-card p-6 rotate-neg-1">
                    <h4 class="font-semibold text-lg text-stone-850 mb-3 border-b pb-2 border-stone-200">Your Key Strengths:</h4>
                    <ul class="flex flex-wrap gap-2">
                        ${result.strengths.map(s => `<li class="bg-[#2e5a44]/10 text-[#2e5a44] px-3.5 py-1 rounded-full text-sm font-bold border border-[#2e5a44]/20">${s}</li>`).join('')}
                    </ul>
                </div>
                <div class="scrapbook-card p-6 rotate-1">
                    <h4 class="font-semibold text-lg text-stone-850 mb-3 border-b pb-2 border-stone-200">Recommended Pathways:</h4>
                    <div class="text-stone-750 font-medium leading-relaxed">${careerLinks}</div>
                </div>
            </div>
            
            <div class="text-center mt-10">
                <button id="retake-quiz" class="button-primary">Retake Quiz</button>
            </div>
        `;
        quizResultContainer.classList.remove('hidden');
        document.getElementById('retake-quiz').addEventListener('click', loadQuiz);
    }

    function calculateQuizResult() {
        const answers = {};
        const radios = document.querySelectorAll('#quiz-container input[type="radio"]:checked');
        if (radios.length < quizData.length) {
            showAlert('Please answer all 8 questions to get your results!');
            return;
        }
        radios.forEach(radio => {
            answers[radio.value] = (answers[radio.value] || 0) + 1;
        });
        const resultType = Object.keys(answers).reduce((a, b) => answers[a] > answers[b] ? a : b);
        displayQuizResult(quizResults[resultType]);
    }

    function loadQuiz() {
        const quizResultContainer = document.getElementById('quiz-result');
        quizContainer.innerHTML = '';
        quizResultContainer.classList.add('hidden');
        
        quizData.forEach((q, index) => {
            const questionElement = document.createElement('div');
            questionElement.className = 'quiz-question-card text-left';
            questionElement.innerHTML = `
                <div class="card-pin"></div>
                <p class="font-semibold text-stone-900 mb-5 text-lg">${index + 1}. ${q.question}</p>
            `;
            
            const answersContainer = document.createElement('div');
            answersContainer.className = 'space-y-3';
            
            q.answers.forEach((answer, aIndex) => {
                const answerId = `q${index}-a${aIndex}`;
                const label = document.createElement('label');
                label.htmlFor = answerId;
                label.className = 'quiz-answer-card';
                label.innerHTML = `
                    <input type="radio" id="${answerId}" name="question${index}" value="${answer.type}">
                    <span>${answer.text}</span>
                `;
                
                // Add select highlights and updates
                const radioInput = label.querySelector('input');
                radioInput.addEventListener('change', () => {
                    const siblings = answersContainer.querySelectorAll('.quiz-answer-card');
                    siblings.forEach(sib => sib.classList.remove('selected-answer'));
                    if (radioInput.checked) {
                        label.classList.add('selected-answer');
                    }
                });

                answersContainer.appendChild(label);
            });
            questionElement.appendChild(answersContainer);
            quizContainer.appendChild(questionElement);
        });

        const submitButton = document.createElement('button');
        submitButton.id = 'submit-quiz';
        submitButton.textContent = 'Submit Answers & Calculate Personality';
        submitButton.className = 'w-full mt-4 button-primary transition-all';
        quizContainer.appendChild(submitButton);
        submitButton.addEventListener('click', calculateQuizResult);
    }

    loadQuiz(); // Initial load
}

// 5. Counseling Page (counseling.html)
function initCounselingPage() {
    const bookCounselingBtn = document.getElementById('book-counseling-btn');
    const counselingModal = document.getElementById('counseling-modal');
    const closeCounselingBtn = document.getElementById('close-counseling-btn');

    if(bookCounselingBtn) {
        bookCounselingBtn.addEventListener('click', () => counselingModal.classList.remove('hidden'));
    }
    if(closeCounselingBtn) {
        closeCounselingBtn.addEventListener('click', () => counselingModal.classList.add('hidden'));
    }
}

// 6. All Jobs Page (jobs.html)
function initJobsPage() {
    const container = document.getElementById('all-jobs-container');
    if (!container) return;
    
    container.innerHTML = ''; // Clear loading message
    let index = 0;

    for (const category in jobData) {
        jobData[category].forEach(job => {
            const card = document.createElement('div');
            const rotationClass = index % 2 === 0 ? 'rotate-neg-1' : 'rotate-1';
            const encodedTitle = encodeURIComponent(job.title);
            card.className = `scrapbook-card p-6 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer ${rotationClass}`;
            card.innerHTML = `
                <a href="details.html?job=${encodedTitle}&interest=${category}" class="block">
                    <span class="inline-block px-2 py-0.5 rounded text-xs font-bold uppercase mb-2 bg-stone-100 text-stone-700">${category}</span>
                    <h3 class="font-handwriting text-3xl text-[#7d3326]">${job.title}</h3>
                    <p class="mt-2 text-stone-600 text-base leading-relaxed">${job.description}</p>
                    <div class="mt-4 text-xs font-semibold text-teal-850 flex items-center gap-1">
                        View Detailed Roadmap &rarr;
                    </div>
                </a>
            `;
            container.appendChild(card);
            index++;
        });
    }
}

// 7. All Resources Page (resources.html) - High contrast resource cards
function initResourcesPage() {
    const container = document.getElementById('all-resources-container');
    if (!container) return;

    container.innerHTML = ''; // Clear loading message

    for (const category in jobData) {
        jobData[category].forEach(job => {
            const jobSection = document.createElement('div');
            jobSection.className = 'scrapbook-card p-6 rounded-xl rotate-1';
            
            const title = document.createElement('h2');
            title.className = 'font-handwriting text-4xl text-stone-900 mb-4';
            title.textContent = job.title;
            jobSection.appendChild(title);
            
            const resourcesGrid = document.createElement('div');
            resourcesGrid.className = 'grid grid-cols-1 md:grid-cols-2 gap-4';

            job.resources.forEach(resource => {
                 const resourceCard = document.createElement('a');
                resourceCard.href = resource.url;
                resourceCard.target = '_blank';
                resourceCard.className = 'resource-card block';
                resourceCard.innerHTML = `
                    <h4>${resource.title}</h4>
                    <p>${resource.description}</p>
                `;
                resourcesGrid.appendChild(resourceCard);
            });
            
            jobSection.appendChild(resourcesGrid);
            container.appendChild(jobSection);
        });
    }
}
