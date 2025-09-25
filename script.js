// --- DATA STORE ---
// This data is available to all pages because this script is loaded on every page.
const jobData = {
    "tech": [
        { title: "Full-Stack Developer", description: "Build both the user-facing (front-end) and server-side (back-end) parts of web applications, managing databases and server logic.", path: [ { title: "Master the Fundamentals", description: "Gain a strong foundation in HTML, CSS, and JavaScript, the core technologies of the web." }, { title: "Learn a Frontend Framework", description: "Become proficient in a modern framework like React, Angular, or Vue.js to build dynamic user interfaces." }, { title: "Learn a Backend Language", description: "Master a server-side language like Node.js, Python (Django/Flask), or Java (Spring) for application logic." }, { title: "Database Knowledge", description: "Understand both SQL (e.g., PostgreSQL) and NoSQL (e.g., MongoDB) databases to store and manage data." }, { title: "Build & Deploy Projects", description: "Create a portfolio of full-stack projects and learn to deploy them on platforms like AWS, Heroku, or Vercel." } ], resources: [ { title: "The Odin Project", url: "https://www.theodinproject.com/", description: "A free, full-stack curriculum for web development." }, { title: "freeCodeCamp", url: "https://www.freecodecamp.org/", description: "Offers comprehensive certifications in web development." }, { title: "MDN Web Docs", url: "https://developer.mozilla.org/", description: "The ultimate resource for web standards and documentation." } ] },
        { title: "Data Scientist", description: "Use analytical, statistical, and programming skills to collect, analyze, and interpret large data sets to uncover insights and trends.", path: [ { title: "Strengthen Math & Statistics", description: "Build a solid foundation in linear algebra, calculus, probability, and statistics." }, { title: "Learn Programming", description: "Become proficient in Python or R and essential data science libraries like Pandas, NumPy, and Scikit-learn." }, { title: "Master Data Analysis & Visualization", description: "Learn to manipulate data and create compelling visualizations using tools like Matplotlib, Seaborn, and Tableau." }, { title: "Study Machine Learning", description: "Understand machine learning algorithms, from regression and classification to deep learning." }, { title: "Gain Practical Experience", description: "Work on real-world projects, participate in Kaggle competitions, and build a strong portfolio." } ], resources: [ { title: "Kaggle", url: "https://www.kaggle.com/", description: "Platform for data science competitions and datasets." }, { title: "Coursera - Data Science Specializations", url: "https://www.coursera.org/", description: "Courses from top universities and companies." }, { title: "Towards Data Science", url: "https://towardsdatascience.com/", description: "A popular blog with articles on data science topics." } ] }
    ],
    "networking": [ { title: "Cybersecurity Analyst", description: "Protect computer networks and systems by identifying and mitigating security vulnerabilities and threats.", path: [ { title: "Networking Fundamentals", description: "Master TCP/IP, DNS, routing, and switching. Certifications like CompTIA Network+ are a great start." }, { title: "Operating System Security", description: "Understand security principles for Windows, Linux, and macOS environments." }, { title: "Learn Security Tools", description: "Get hands-on with tools like Wireshark, Metasploit, Nmap, and SIEM systems." }, { title: "Ethical Hacking & Pen Testing", description: "Learn how to think like an attacker to find and fix vulnerabilities. Consider a CEH or PenTest+ certification." }, { title: "Stay Current", description: "The security landscape changes daily. Continuously learn about new threats and defense strategies." } ], resources: [ { title: "Cybrary", url: "https://www.cybrary.it/", description: "Free and paid training for cybersecurity professionals." }, { title: "TryHackMe", url: "https://tryhackme.com/", description: "A hands-on, gamified platform for learning cybersecurity." }, { title: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/", description: "A standard awareness document for web application security." } ] } ],
    "product": [ { title: "Product Manager", description: "Oversee the development of a product from conception to launch, acting as the bridge between business, tech, and user experience teams.", path: [ { title: "Understand Business Fundamentals", description: "Learn about market analysis, business models, and key performance indicators (KPIs)." }, { title: "Develop Technical Literacy", description: "You don't need to code, but you must understand the software development lifecycle and technical constraints." }, { title: "Master User Experience (UX)", description: "Learn UX principles, user research methods, and how to advocate for the user." }, { title: "Hone Communication & Leadership", description: "Practice stakeholder management, create clear roadmaps, and lead cross-functional teams without direct authority." }, { title: "Gain Experience", description: "Start with a side project, an internship, or a role as a business analyst or project manager to transition into product." } ], resources: [ { title: "Product School", url: "https://www.productschool.com/", description: "Offers certifications and resources for product managers." }, { title: "Mind the Product", url: "https://www.mindtheproduct.com/", description: "A leading community and content site for product people." }, { title: "Cracking the PM Interview", url: "#", description: "A highly recommended book for aspiring Product Managers." } ] } ],
    "design": [ { title: "Fashion Designer", description: "Conceptualize and create clothing and accessories, manage the design process from sketch to final product, and stay ahead of trends.", path: [ { title: "Develop Core Skills", description: "Master sketching, sewing, pattern-making, and understanding different fabrics." }, { title: "Study Fashion History & Theory", description: "Understand the evolution of style, key designers, and art movements to inform your work." }, { title: "Learn Design Software", description: "Become proficient in Adobe Illustrator and Photoshop for technical flats and mood boards. Knowledge of a CAD program is a plus." }, { title: "Build a Strong Portfolio", description: "Create a collection of your best work that showcases your unique style, skills, and creative vision." }, { title: "Gain Industry Experience", description: "Seek internships or entry-level positions to understand the business side, from production to marketing." } ], resources: [ { title: "Business of Fashion", url: "https://www.businessoffashion.com/", description: "Essential reading for fashion industry news and analysis." }, { title: "WGSN", url: "https://www.wgsn.com/", description: "A leading trend forecasting service." }, { title: "University of the Arts London", url: "https://www.arts.ac.uk/short-courses", description: "Offers a variety of short courses in fashion." } ] } ],
    "marketing": [ { title: "Digital Marketer", description: "Promote products or brands using digital channels, including search engines, social media, email, and websites.", path: [ { title: "Master Marketing Principles", description: "Understand the core concepts of marketing, such as the marketing funnel, SWOT analysis, and customer segmentation." }, { title: "Learn SEO & SEM", description: "Understand how to optimize content for search engines (SEO) and manage paid advertising campaigns (SEM)." }, { title: "Content & Social Media Marketing", description: "Learn to create engaging content and manage communities on platforms like Instagram, TikTok, LinkedIn, etc." }, { title: "Data Analytics", description: "Use tools like Google Analytics to track campaign performance, measure ROI, and make data-driven decisions." }, { title: "Get Certified", description: "Earn certifications from Google, HubSpot, or Meta to validate your skills and boost your resume." } ], resources: [ { title: "HubSpot Academy", url: "https://academy.hubspot.com/", description: "Free courses and certifications on all things marketing." }, { title: "Google Digital Garage", url: "https://learndigital.withgoogle.com/digitalgarage/", description: "Free training from Google on digital skills." }, { title: "Neil Patel's Blog", url: "https://neilpatel.com/blog/", description: "A popular resource for SEO and digital marketing tips." } ] } ]
};
const quizData = [
    { question: "When starting a new project, what's your first move?", answers: [ { text: "Create a detailed, step-by-step plan.", type: "organizer" }, { text: "Brainstorm a bunch of wild, creative ideas.", type: "innovator" }, { text: "Analyze existing data to find a logical starting point.", type: "analyst" } ] },
    { question: "You're facing a tough problem. You are more likely to:", answers: [ { text: "Rely on proven methods that have worked before.", type: "organizer" }, { text: "Look for patterns and connections others might miss.", type: "analyst" }, { text: "Think outside the box for a completely new solution.", type: "innovator" } ] },
    { question: "Which work environment sounds most appealing?", answers: [ { text: "A structured environment with clear expectations.", type: "organizer" }, { text: "A dynamic, fast-paced space where I can experiment.", type: "innovator" }, { text: "A quiet space where I can focus deeply on complex information.", type: "analyst" } ] },
    { question: "How do you prefer to learn new things?", answers: [ { text: "Through hands-on experimentation and trial-and-error.", type: "innovator" }, { text: "By studying theories and understanding the 'why' behind them.", type: "analyst" }, { text: "Following a structured course with clear modules.", type: "organizer" } ] }
];
const quizResults = {
    innovator: { title: "The Innovator", description: "You're a creative, forward-thinking individual who thrives on new ideas. You're great at brainstorming and aren't afraid to challenge the status quo.", strengths: ["Creativity", "Vision", "Problem-Solving", "Adaptability"], careers: ["Fashion Designer", "Digital Marketer", "Product Manager"] },
    analyst: { title: "The Analyst", description: "You are logical, detail-oriented, and excellent at making sense of complex information. You make decisions based on data and evidence.", strengths: ["Analytical Thinking", "Attention to Detail", "Research", "Objectivity"], careers: ["Data Scientist", "Cybersecurity Analyst", "Full-Stack Developer"] },
    organizer: { title: "The Organizer", description: "You excel at creating structure, planning, and executing tasks efficiently. You bring order to chaos and ensure projects stay on track.", strengths: ["Planning", "Reliability", "Process-Oriented", "Leadership"], careers: ["Product Manager", "Cybersecurity Analyst", "Full-Stack Developer"] }
};


// --- GENERAL FUNCTIONS ---

function findJob(jobTitle) {
    for (const category in jobData) {
        const foundJob = jobData[category].find(job => job.title === jobTitle);
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
        if (studyingField && interestField) {
            window.location.href = `results.html?study=${studyingField}&interest=${interestField}`;
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
    
    const jobs = jobData[interest] || [];
    if (study && study !== interest) {
        jobs = jobs.filter(job => job.category === study || interest === study);
    }

    if (jobs.length > 0) {
        jobCardsContainer.innerHTML = ''; // Clear loading message
        jobs.forEach((job, index) => {
            const card = document.createElement('div');
            const rotationClass = index % 2 === 0 ? 'rotate-neg-1' : 'rotate-1';
            const encodedTitle = encodeURIComponent(job.title);
            card.className = `scrapbook-card p-6 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer ${rotationClass}`;
            card.innerHTML = `
                <a href="details.html?job=${encodedTitle}&interest=${interest}" class="block">
                    <h3 class="font-handwriting text-3xl text-teal-600">${job.title}</h3>
                    <p class="mt-2 text-gray-600">${job.description}</p>
                </a>
            `;
            jobCardsContainer.appendChild(card);
        });
    } else {
        jobCardsContainer.innerHTML = '<p class="text-center col-span-full">No career paths found for this interest. Please try another one!</p>';
    }
}


// 3. Details Page (details.html)
function initDetailsPage() {
    const params = new URLSearchParams(window.location.search);
    const jobTitleParam = decodeURIComponent(params.get('job'));
    const studyParam = params.get('study');
    const interestParam = params.get('interest');

    const job = findJob(jobTitleParam);

    if (job) {
        document.getElementById('job-title').textContent = job.title;
        document.getElementById('job-description').textContent = job.description;

        const careerPathContainer = document.getElementById('career-path-container');
        careerPathContainer.innerHTML = '';
        const stepColors = ['bg-sky-400', 'bg-amber-400', 'bg-rose-400', 'bg-lime-400', 'bg-violet-400'];
        job.path.forEach((step, index) => {
            const isLast = index === job.path.length - 1;
            const stepElement = document.createElement('div');
            stepElement.className = 'relative flex flex-col items-center mb-8';
            const color = stepColors[index % stepColors.length];
            stepElement.innerHTML = `
                <div class="step-icon z-10 text-white ${color}">
                    <span>${index + 1}</span>
                </div>
                <div class="mt-2 text-center scrapbook-card bg-gray-50 p-4 rounded-lg w-full md:w-2/3">
                    <h4 class="font-semibold text-lg">${step.title}</h4>
                    <p class="text-gray-600">${step.description}</p>
                </div>
                ${!isLast ? '<div class="step-connector"></div>' : ''}
            `;
            careerPathContainer.appendChild(stepElement);
        });

        const resourcesContainer = document.getElementById('resources-container');
        resourcesContainer.innerHTML = '';
        job.resources.forEach(resource => {
            const resourceCard = document.createElement('a');
            resourceCard.href = resource.url;
            resourceCard.target = '_blank';
            resourceCard.className = 'block bg-teal-50 p-4 rounded-lg hover:bg-teal-100 transition-colors border border-teal-200 rotate-1 hover:rotate-0';
            resourceCard.innerHTML = `
                <h4 class="font-semibold text-teal-800">${resource.title}</h4>
                <p class="text-sm text-teal-700">${resource.description}</p>
            `;
            resourcesContainer.appendChild(resourceCard);
        });

        const backToResultsBtn = document.getElementById('back-to-results-btn');
        if (backToResultsBtn) {
            backToResultsBtn.addEventListener('click', () => {
                 window.location.href = `results.html?interest=${interestParam}`;
            });
        }

    } else {
        document.getElementById('job-title').textContent = "Oops!";
        document.getElementById('job-description').textContent = "We couldn't find the career details you were looking for.";
    }
}


// 4. Quiz Page (quiz.html)
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
        quizResultContainer.innerHTML = `
            <h3 class="font-handwriting text-4xl text-teal-600">${result.title}</h3>
            <p class="mt-2">${result.description}</p>
            <div class="mt-6 text-left">
                <h4 class="font-semibold text-lg">Your Secret Powers:</h4>
                <ul class="mt-2 flex flex-wrap gap-2">
                    ${result.strengths.map(s => `<li class="bg-lime-200 text-lime-800 px-3 py-1 rounded-full text-sm font-semibold">${s}</li>`).join('')}
                </ul>
                <h4 class="font-semibold text-lg mt-4">Great Career Paths for You:</h4>
                <p class="mt-1 text-gray-700">${result.careers.join(', ')}</p>
            </div>
            <button id="retake-quiz" class="mt-8 bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-300">Retake Quiz</button>
        `;
        quizResultContainer.classList.remove('hidden');
        document.getElementById('retake-quiz').addEventListener('click', loadQuiz);
    }

    function calculateQuizResult() {
        const answers = {};
        const radios = document.querySelectorAll('#quiz-container input[type="radio"]:checked');
        if (radios.length < quizData.length) {
            showAlert('Please answer all the quiz questions first!');
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
            questionElement.className = 'mb-6';
            questionElement.innerHTML = `<p class="font-semibold mb-2">${index + 1}. ${q.question}</p>`;
            const answersContainer = document.createElement('div');
            answersContainer.className = 'space-y-2';
            q.answers.forEach(answer => {
                const answerId = `q${index}-a${answer.type}`;
                const label = document.createElement('label');
                label.htmlFor = answerId;
                label.className = 'flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-100';
                label.innerHTML = `<input type="radio" id="${answerId}" name="question${index}" value="${answer.type}" class="mr-3 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"><span>${answer.text}</span>`;
                answersContainer.appendChild(label);
            });
            questionElement.appendChild(answersContainer);
            quizContainer.appendChild(questionElement);
        });
        const submitButton = document.createElement('button');
        submitButton.id = 'submit-quiz';
        submitButton.textContent = 'See My Personality';
        submitButton.className = 'w-full mt-6 bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500';
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
                    <h3 class="font-handwriting text-3xl text-teal-600">${job.title}</h3>
                    <p class="mt-2 text-gray-600">${job.description}</p>
                </a>
            `;
            container.appendChild(card);
            index++;
        });
    }
}

// 7. All Resources Page (resources.html)
function initResourcesPage() {
    const container = document.getElementById('all-resources-container');
    if (!container) return;

    container.innerHTML = ''; // Clear loading message

    for (const category in jobData) {
        jobData[category].forEach(job => {
            const jobSection = document.createElement('div');
            jobSection.className = 'scrapbook-card p-6 rounded-xl rotate-1';
            
            const title = document.createElement('h2');
            title.className = 'font-handwriting text-4xl text-teal-700 mb-4';
            title.textContent = job.title;
            jobSection.appendChild(title);
            
            const resourcesGrid = document.createElement('div');
            resourcesGrid.className = 'grid grid-cols-1 md:grid-cols-2 gap-4';

            job.resources.forEach(resource => {
                 const resourceCard = document.createElement('a');
                resourceCard.href = resource.url;
                resourceCard.target = '_blank';
                resourceCard.className = 'block bg-teal-50 p-4 rounded-lg hover:bg-teal-100 transition-colors border border-teal-200 rotate-neg-1 hover:rotate-0';
                resourceCard.innerHTML = `
                    <h4 class="font-semibold text-teal-800">${resource.title}</h4>
                    <p class="text-sm text-teal-700">${resource.description}</p>
                `;
                resourcesGrid.appendChild(resourceCard);
            });
            
            jobSection.appendChild(resourcesGrid);
            container.appendChild(jobSection);
        });
    }
}

