const explorationAreas = {

    perception: {
        number: "01",
        title: "Perception",
        description:
            "Understanding the environment through intelligent sensing, proximity detection and computer vision.",
        explorations: [

            {
                year: "2025",
                title:
                    "Smart Glasses for People with Macular Degeneration",
                type:
                    "Computer Vision · Assistive Technology",
                description:
                    "A wearable prototype that explores real-time object recognition as support for people with central vision loss.",
                caseId:
                    "smart-glasses-macular-degeneration"
            },

            {
                year: "2023",
                title:
                    "Device for Visually Impaired People",
                type:
                    "Embedded Sensing · Wearable Device",
                description:
                    "An assistive prototype that uses proximity sensors to improve environmental awareness.",
                caseId:
                    "visual-assistance-device"
            },

            {
                year: "2023",
                title:
                    "Nearby Object Detection",
                type:
                    "Proximity Detection · Environmental Awareness",
                description:
                    "A sensing system designed to identify nearby obstacles and provide timely alerts to the user.",
                caseId:
                    "nearby-object-detection"
            }
        ]
    },

    
    learning: {
        number: "02",
        title: "Learning",
        description:
            "Finding meaningful patterns in biomedical data through signal processing and machine learning.",
        explorations: [
            {
                year: "2024",
                title:
                    "ECG Signal Analysis Using Machine Learning",
                type:
                    "Biomedical Signals · Machine Learning",
                description:
                    "Exploring data-driven methods for comparing, characterizing and interpreting cardiac signals.",
                caseId:
                    "ecg-machine-learning"
            },

            {
                year: "2024",
                title:
                    "Arrhythmia Classification with Neural Networks",
                type:
                    "CNN · Biomedical Classification",
                description:
                    "Classifying cardiac activity using spectrograms, overlapping windows and convolutional neural networks.",
                caseId:
                    "arrhythmia-classification"
            },

            {
                year: "2025",
                title:
                    "Low-Complexity Myoelectric Control for Transradial Prostheses",
                type:
                    "EMG · Classification Algorithms",
                description:
                    "Evaluating lightweight classification methods for translating muscle activity into prosthetic control commands.",
                caseId:
                    "low-complexity-myoelectric-control"
            }
        ]
    },

    movement: {
        number: "03",
        title: "Movement",
        description:
            "Understanding, recreating and assisting motion through biomechanics, robotics and prosthetic systems.",
        explorations: [
            {
                year: "2024",
                title:
                    "Exoskeleton Prototype",
                type:
                    "Biomechanics · Robotic Motion",
                description:
                    "A lower-limb prototype developed to explore the mechanical reproduction and assistance of human gait.",
                caseId:
                    "exoskeleton"
            },

            {
                year: "2024",
                title:
                    "Quadruped Robotic Platform",
                type:
                    "Robotics · Locomotion",
                description:
                    "A servo-driven robotic platform used to study coordinated motion and quadruped locomotion.",
                caseId:
                    "quadruped"
            },

            {
                year: "2025",
                title:
                    "Machine-Learning Training Method for a Myoelectric Prosthesis",
                type:
                    "Prosthetics · EMG · Human Motion",
                description:
                    "A training methodology for controlling a transradial prosthesis through muscle signals and machine learning.",
                caseId:
                    "prosthesis-training"
            }
        ]
    },


    
    interaction: {
        number: "04",
        title: "Interaction",
        description:
            "Designing intuitive connections between people, wearable devices and assistive technologies.",
        explorations: [
            {
                year: "2025",
                title:
                    "Rehabilitation Glove for Post-Stroke Patients",
                type:
                    "Wearable Rehabilitation · Human–Machine Interaction",
                description:
                    "A wearable system designed to support hand flexion and extension exercises during rehabilitation.",
                caseId:
                    "rehabilitation-glove"
            },

            {
                year: "2025",
                title:
                    "Dynamic Hand Orthosis Kit",
                type:
                    "Orthotics · Functional Rehabilitation",
                description:
                    "A modular orthotic solution aimed at supporting hand function in patients with median nerve injuries.",
                caseId:
                    "dynamic-hand-orthosis"
            }
        ]
    },


    integration: {
        number: "05",
        title: "Integration",
        description:
            "Bringing software, electronics, mechanics and manufacturing together into complete functional prototypes.",
        explorations: [
            {
                year: "2023",
                title:
                    "Mathematical Software for AD8232 ECG Analysis",
                type:
                    "Software · Biomedical Instrumentation",
                description:
                    "A processing workflow for filtering, characterizing and comparing ECG signals acquired with an AD8232 sensor.",
                caseId:
                    "ad8232-analysis-software"
            },

            {
                year: "2023",
                title:
                    "Single-Material 3D Printer Prototype",
                type:
                    "Mechatronics · Additive Manufacturing",
                description:
                    "The design, construction and calibration of a functional single-extrusion 3D printer.",
                caseId:
                    "single-material-printer"
            },

            {
                year: "2024",
                title:
                    "Multi-Material 3D Printer Prototype",
                type:
                    "Mechanical Integration · Manufacturing",
                description:
                    "A printer prototype developed to explore controlled switching between different extrusion materials.",
                caseId:
                    "multi-material-printer"
            }
        ]
    },

    intelligent: {
        number: "06",
        title:
            "Intelligent Systems",
        description:
            "Designing automated systems through robotics, industrial communication, sensing and intelligent control.",
        explorations: [
            {
                year: "2026",
                title:
                    "PLC Process-Control Practices",
                type:
                    "Siemens PLC · HMI · Industrial Automation",
                description:
                    "A progression of industrial automation practices integrating sensors, pneumatic actuators, pumps, motors and HMI supervision.",
                caseId:
                    "plc-process-control"
            },

            {
                year: "2026",
                title:
                    "PLC–Raspberry Pi–UR Intelligent Automation Cell",
                type:
                    "PLC · Raspberry Pi · Universal Robots",
                description:
                    "A distributed automation cell connecting a Siemens PLC, Raspberry Pi, Arduino, sensors, a stepper motor and a Universal Robot.",
                caseId:
                    "intelligent-automation-cell"
            }
        ]
    },

    healthcare: {
        number: "07",
        title:
            "Healthcare Technologies",
        description:
            "Applying multidisciplinary engineering to improve health, recovery, independence and quality of life.",
        explorations: [
            {
                year: "2022",
                title:
                    "Post-COVID ECG Device",
                type:
                    "Biomedical Instrumentation · Cardiac Monitoring",
                description:
                    "A prototype created to explore electrical cardiac alterations in patients following COVID-19.",
                caseId:
                    "post-covid-ecg"
            },

            {
                year: "2025",
                title:
                    "Smart Glasses for People with Macular Degeneration",
                type:
                    "Assistive Healthcare · Computer Vision",
                description:
                    "An intelligent wearable designed to support object recognition and environmental interaction.",
                caseId:
                    "smart-glasses-macular-degeneration"
            },

            {
                year: "2025",
                title:
                    "Rehabilitation Glove for Post-Stroke Patients",
                type:
                    "Rehabilitation · Wearable Technology",
                description:
                    "A hand rehabilitation device developed to support repetitive flexion and extension exercises.",
                caseId:
                    "rehabilitation-glove"
            },

            {
                year: "2025",
                title:
                    "Dynamic Hand Orthosis Kit",
                type:
                    "Orthotics · Functional Recovery",
                description:
                    "A dynamic hand-support system oriented toward rehabilitation following median nerve injury.",
                caseId:
                    "dynamic-hand-orthosis"
            }
        ]
    }
};


const domainOrder = [
    "perception",
    "learning",
    "movement",
    "interaction",
    "integration",
    "intelligent",
    "healthcare"
];



const urlParameters =
    new URLSearchParams(window.location.search);

const requestedAreaId =
    urlParameters.get("id");

const defaultAreaId =
    "perception";

const areaId =
    explorationAreas[requestedAreaId]
        ? requestedAreaId
        : defaultAreaId;

const currentArea =
    explorationAreas[areaId];


    
const areaNumber = document.getElementById("areaNumber");
const areaTitle = document.getElementById("areaTitle");
const areaDescription = document.getElementById("areaDescription");
const areaCount = document.getElementById("areaCount");
const explorationList = document.getElementById("explorationList");
const domainSwitcher = document.getElementById("domainSwitcher");

function validateExplorationPage() {
    const requiredElements = [
        {
            name: "areaNumber",
            element: areaNumber
        },

        {
            name: "areaTitle",
            element: areaTitle
        },

        {
            name: "areaDescription",
            element: areaDescription
        },

        {
            name: "areaCount",
            element: areaCount
        },

        {
            name: "explorationList",
            element: explorationList
        },

        {
            name: "domainSwitcher",
            element: domainSwitcher
        }

    ];

    const missingElements =
        requiredElements.filter(
            item => !item.element
        );

    if (missingElements.length === 0) {
        return true;
    }

    const missingNames =
        missingElements.map(
            item => item.name
        );

    console.error(
        "exploration.html is missing the following required elements:",
        missingNames
    );
    return false;
}


function updateDocumentTitle() {
    document.title =
        `${currentArea.title} | Atlas`;

}

function updatePageMetadata() {
    const descriptionMeta =
        document.querySelector(
            'meta[name="description"]'
        );

    if (!descriptionMeta) {
        return;
    }

    descriptionMeta.setAttribute(
        "content",
        `${currentArea.title}: ${currentArea.description}`
    );
}

function getExplorationCountText() {
    const totalExplorations = currentArea.explorations.length;

    const label =
        totalExplorations === 1
            ? "Exploration"
            : "Explorations";

    return `${totalExplorations} ${label}`;

}


function renderDomainSwitcher() {

    domainSwitcher.innerHTML = "";
    domainOrder.forEach(domainId => {
        const domain = explorationAreas[domainId];
        const link = document.createElement("a");
        link.href = `exploration.html?id=${domainId}`;
        link.textContent = domain.title;

        if (domainId === areaId) {
            link.classList.add("active");
            link.setAttribute(
                "aria-current",
                "page"
            );
        }

        domainSwitcher.appendChild(link);
    });
}


function createCaseStudyLink(project) {
    const link = document.createElement("a");
    link.className = "exploration-case-link";
    link.href = `cases.html?id=${project.caseId}`;
    link.textContent = "Review that on details ↗";

    link.setAttribute(
        "aria-label",
        `Read case study: ${project.title}`
    );

    return link;
}



function createExplorationRow(
    project,
    projectIndex
) 
{
    const article = document.createElement("article");
    article.className = "exploration-row";
    const year =
        document.createElement("span");

    year.className =
        "exploration-year";

    year.textContent = project.year;
    const mainContent = document.createElement("div");
    mainContent.className = "exploration-row-main";
    const position = document.createElement("p");
    position.className = "exploration-position";

    position.textContent =
        String(projectIndex + 1).padStart(
            2,
            "0"
        );

    const title = document.createElement("h2");
    title.textContent = project.title;
    const description = document.createElement("p");
    description.textContent = project.description;

    mainContent.appendChild(position);
    mainContent.appendChild(title);
    mainContent.appendChild(description);

    const metadata = document.createElement("div");
    metadata.className = "exploration-row-meta";
    const projectType = document.createElement("p");

    projectType.textContent = project.type;
    const caseStudyLink = createCaseStudyLink(project);

    metadata.appendChild(projectType);
    metadata.appendChild(caseStudyLink);
    article.appendChild(year);
    article.appendChild(mainContent);
    article.appendChild(metadata);

    return article;
}


function renderExplorations() {
    explorationList.innerHTML = "";
    currentArea.explorations.forEach(
        (project, projectIndex) => {
            const explorationRow =
                createExplorationRow(
                    project,
                    projectIndex
                );

            explorationList.appendChild(
                explorationRow
            );
        }
    );
}


function renderAreaHeader() {
    areaNumber.textContent = currentArea.number;
    areaTitle.textContent = currentArea.title;
    areaDescription.textContent = currentArea.description;
    areaCount.textContent = getExplorationCountText();
}


function initializeExplorationPage() {
    const pageIsValid = validateExplorationPage();

    if (!pageIsValid) {
        return;
    }

    updateDocumentTitle();
    updatePageMetadata();
    renderAreaHeader();
    renderDomainSwitcher();
    renderExplorations();
}

initializeExplorationPage();