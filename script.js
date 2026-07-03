// Scroll suave para links del menú
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const id = link.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Botón para subir al inicio

const scrollTopBtn = document.getElementById('scrollTopBtn');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

const words = [
    "Machine Learning",
    "Computer Vision",
    "Embedded Systems",
    "Medical Robotics",
    "Artificial Intelligence"
];

let i = 0;
const text = document.getElementById("typing");
function changeWord() {
    text.style.opacity = 0;
    setTimeout(() => {
        text.innerHTML = words[i];
        text.style.opacity = 1;
        i++;

        if (i >= words.length) {
            i = 0;

        }

    }, 300);

}

changeWord();
setInterval(changeWord, 2500);
  
const reveals = document.querySelectorAll(".reveal");

function revealSections() {
    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight * 0.85) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);
revealSections();


const explorationProjects = {
    perception: {
        number: "01",
        count: "2 case studies",
        title: "Perception",
        subtitle: "Computer Vision · Smart Glasses · Assistive Technology",
        text: "I explore how intelligent sensing and computer vision can help people understand and interact with their environment.",
        objective: "Applied in smart glasses for object recognition and environmental assistance.",
        tools: ["YOLOv8", "Python", "OpenCV", "Image Processing"],
        media: [
            "img/Lentes_3.jpeg",
            "img/Lentes_4.jpeg",
            "img/lentes.jpeg",
            "img/Evidence_glasses_1.png",
            "img/Evidence_glasses_3.png",
            "img/Evidence_glasses_4.png",
            "video:img/Evidence_glasses_video - Copy.mp4"
        ]
    },

    learning: {
        number: "02",
        title: "Learning",
        subtitle: "Machine Learning · Biomedical Signals · Classification",
        text: "I use machine learning to identify patterns in biomedical data and support interpretation of physiological signals.",
        objective: "Applied in ECG analysis, arrhythmia classification and signal comparison.",
        tools: ["Python", "MATLAB", "CNN", "Signal Processing"],
        media: [
            "img/comparativa_senales_ECG-MCL.png",
            "img/Clasificacion_arritmias_2.png",
            "img/Comparativa_senales.png"
        ]
    },

    movement: {
        number: "03",
        title: "Movement",
        subtitle: "Biomechanics · Prosthetics · Robotic Motion",
        text: "I study human movement through mechanical design, prosthetic systems and robotic prototypes.",
        objective: "Applied in myoelectric prosthesis research, exoskeleton prototypes and gait simulation.",
        tools: ["SolidWorks", "Python", "C++", "Servo Control"],
        media: [
            "img/protesis_mano_1.jpeg",
            "img/protesis_mano_2.jpeg",
            "img/Presentación_final.JPG",
            "img/Bipedo_1.jpeg",
            "img/Bipedo_2.jpeg",
            "video:img/bipedo_video1.mp4"
        ]
    },

    interaction: {
        number: "04",
        title: "Interaction",
        subtitle: "Human-Machine Interaction · Rehabilitation · Wearables",
        text: "I design systems that connect the user with technology through movement, sensing and mechanical assistance.",
        objective: "Applied in rehabilitation gloves, hand orthosis prototypes and assistive wearable devices.",
        tools: ["Arduino", "Servomotors", "Ergonomics", "Wearable Design"],
        media: [
            "img/ortesis_mano.jpeg",
            "video:img/guante.mp4",
            "img/kit_ortesis.png",
            "img/kit_ortesis_2.png",
            "img/kit_ortesis_3.png",
            "img/kit_ortesis_4.png"
        ]
    },

    integration: {
        number: "05",
        title: "Integration",
        subtitle: "Embedded Systems · Automation · Prototyping",
        text: "I integrate sensors, electronics, software and mechanical systems into functional prototypes.",
        objective: "Applied in embedded systems, 3D printers, Raspberry Pi projects, Arduino systems and PLC automation.",
        tools: ["Raspberry Pi", "Arduino", "ESP32", "PLC", "3D Printing"],
        media: [
            "img/Impresora_1.jpeg",
            "img/Impresora_3.jpeg",
            "img/Impresora_5.jpeg",
            "img/Impresora final.jpeg"
        ]
    },

    rehabilitation: {
        number: "06",
        title: "Rehabilitation",
        subtitle: "Assistive Devices · Orthosis · Functional Recovery",
        text: "I explore technologies designed to support rehabilitation, functional recovery and independence.",
        objective: "Applied in dynamic hand orthosis, rehabilitation glove and assistive medical devices.",
        tools: ["Orthosis Design", "SolidWorks", "Biomechanics", "Medical Devices"],
        media: [
            "img/kit_ortesis.png",
            "img/kit_ortesis_2.png",
            "img/kit_ortesis_3.png",
            "img/kit_ortesis_4.png",
            "img/ortesis_mano.jpeg"
        ]
    }
};

const buttons = document.querySelectorAll(".explore-item");
const previewTrack = document.getElementById("previewTrack");
const previewNumber = document.getElementById("previewNumber");
const previewTitle = document.getElementById("previewTitle");
const previewText = document.getElementById("previewText");


const previewSubtitle = document.getElementById("previewSubtitle");
const previewObjective = document.getElementById("previewObjective");

let currentSlide = 0;
let slideInterval;

function loadProject(projectKey) {
    const project = explorationProjects[projectKey];

    previewNumber.textContent = project.number;
    previewTitle.textContent = project.title;
    previewText.textContent = project.text;
    previewSubtitle.textContent = project.subtitle;
    previewObjective.textContent = project.objective;

    previewTrack.innerHTML = "";

    project.media.forEach(item => {
        if (item.startsWith("video:")) {
            const video = document.createElement("video");
            video.src = item.replace("video:", "");
            video.autoplay = true;
            video.muted = true;
            video.loop = true;
            video.playsInline = true;
            previewTrack.appendChild(video);
        } else {
            const img = document.createElement("img");
            img.src = item;
            img.alt = project.title;
            previewTrack.appendChild(img);
        }
    });

    currentSlide = 0;
    previewTrack.style.transform = "translateX(0)";

    clearInterval(slideInterval);

    slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % project.media.length;
        previewTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    }, 3500);
}

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        loadProject(button.dataset.project);
    });
});

loadProject("perception");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        window.location.href = button.dataset.link;
    });
});

document.addEventListener("DOMContentLoaded", () => {
document.getElementById("previewCount").textContent = project.count;

    // Typing
    const words = [
        "Machine Learning",
        "Computer Vision",
        "Embedded Systems",
        "Medical Robotics",
        "Artificial Intelligence"
    ];

    let i = 0;
    const text = document.getElementById("typing");

    if (text) {
        function changeWord() {
            text.style.opacity = 0;

            setTimeout(() => {
                text.innerHTML = words[i];
                text.style.opacity = 1;
                i = (i + 1) % words.length;
            }, 300);
        }

        changeWord();
        setInterval(changeWord, 2500);
    }

    // Exploration
    const explorationProjects = {
        perception: {
            number: "01",
            count: "3 Explorations",
            title: "Perception",
            subtitle: "Understanding the world.",
            text: "Understanding how intelligent systems perceive the environment.",
            objective: "Applied in smart glasses for macular degeneration.",
            media: [
                "img/Lentes_3.jpeg",
                "img/Lentes_4.jpeg",
                "img/lentes.jpeg"
            ]
        },

        learning: {
            number: "02",
            title: "Learning",
            count: "3 Explorations",
            subtitle: "Finding patterns in data.",
            text: "Exploring machine learning through biomedical signals.",
            objective: "Applied in ECG analysis and arrhythmia classification.",
            media: [
                "img/comparativa_senales_ECG-MCL.png",
                "img/Clasificacion_arritmias_2.png"
            ]
        },

        movement: {
            number: "03",
            count: "3 Explorations",
            title: "Movement",
            subtitle: "Understanding human motion.",
            text: "Studying movement through prosthetics and robotic systems.",
            objective: "Applied in myoelectric prosthesis and exoskeleton prototypes.",
            media: [
                "img/protesis_mano_1.jpeg",
                "img/protesis_mano_2.jpeg",
                "img/Bipedo_1.jpeg"
            ]
        },

        interaction: {
            number: "04",
            count: "2 Explorations",
            title: "Interaction",
            subtitle: "Connecting people and machines.",
            text: "Designing systems that support natural human-machine interaction.",
            objective: "Applied in rehabilitation gloves and orthosis prototypes.",
            media: [
                "img/ortesis_mano.jpeg",
                "img/kit_ortesis.png"
            ]
        },

        integration: {
            number: "05",
            count: "4 Explorations",
            title: "Integration",
            subtitle: "Connecting disciplines.",
            text: "Combining electronics, mechanics and software into functional systems.",
            objective: "Applied in embedded systems, 3D printers and automation projects.",
            media: [
                "img/Impresora_1.jpeg",
                "img/Impresora final.jpeg"
            ]
        },

        rehabilitation: {
            number: "06",
            count: "3 Explorations",
            title: "Healthcare Technologies",
            subtitle: "Engineering for recovery.",
            text: "Exploring assistive technologies for rehabilitation and independence.",
            objective: "Applied in orthosis, prosthesis and rehabilitation devices.",
            media: [
                "img/kit_ortesis.png",
                "img/kit_ortesis_2.png"
            ]
        }
    };

    const buttons = document.querySelectorAll(".explore-item");
    const previewTrack = document.getElementById("previewTrack");
    const previewNumber = document.getElementById("previewNumber");
    const previewTitle = document.getElementById("previewTitle");
    const previewSubtitle = document.getElementById("previewSubtitle");
    const previewText = document.getElementById("previewText");
    const previewObjective = document.getElementById("previewObjective");

    let currentSlide = 0;
    let slideInterval;

    function loadProject(key) {
        const project = explorationProjects[key];
        if (!project || !previewTrack) return;

        previewNumber.textContent = project.number;
        previewTitle.textContent = project.title;
        previewSubtitle.textContent = project.subtitle;
        previewText.textContent = project.text;
        previewObjective.textContent = project.objective;

        previewTrack.innerHTML = "";

        project.media.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = project.title;
            previewTrack.appendChild(img);
        });

        currentSlide = 0;
        previewTrack.style.transform = "translateX(0)";

        clearInterval(slideInterval);

        slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % project.media.length;
            previewTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        }, 3500);
    }

   /* buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            loadProject(button.dataset.project);
        });*/

        button.addEventListener("click", () => {
            const link = button.dataset.link;
            if (link) {
                window.location.href = link;
            }
        });
    });

    loadProject("perception");

});