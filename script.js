document.querySelectorAll('nav a[href^="#"], .primary-btn[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});



const words = [
    "Machine Learning",
    "Computer Vision",
    "Embedded Systems",
    "Medical Robotics",
    "Artificial Intelligence"
];

let wordIndex = 0;
const typingText = document.getElementById("typing");

function changeWord() {
    if (!typingText) return;

    typingText.style.opacity = 0;

    setTimeout(() => {
        typingText.textContent = words[wordIndex];
        typingText.style.opacity = 1;
        wordIndex = (wordIndex + 1) % words.length;
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
        count: "3 Explorations",
        title: "Perception",
        subtitle: "Understanding the world.",
        text: "Understanding how intelligent systems perceive the environment through sensing, vision and contextual awareness.",
        objective: "Applied in smart glasses, object recognition and nearby object detection.",
        media: [
            "img/Lentes_3.jpeg",
            "img/Lentes_4.jpeg",
            "img/lentes.jpeg",
            "img/Evidence_glasses_1.png",
            "img/Evidence_glasses_3.png",
            "img/Evidence_glasses_4.png"
        ]
    },

    learning: {
        number: "02",
        count: "3 Explorations",
        title: "Learning",
        subtitle: "Finding patterns in data.",
        text: "Exploring how machine learning can identify meaningful patterns inside biomedical signals.",
        objective: "Applied in ECG analysis, arrhythmia classification and biomedical signal comparison.",
        media: [
            "img/comparativa_senales_ECG-MCL.png",
            "img/Clasificacion_arritmias_2.png",
            "img/Comparativa_senales.png"
        ]
    },

    movement: {
        number: "03",
        count: "3 Explorations",
        title: "Movement",
        subtitle: "Understanding human motion.",
        text: "Studying movement through prosthetics, biomechanics and robotic systems.",
        objective: "Applied in myoelectric prosthesis research, exoskeleton prototypes and gait simulation.",
        
        media: [
            "img/MANO_1.png",
            "img/Mano_2.png",
            "img/Presentación_final.JPG",
            "img/Bipedo_1.jpeg",
            "img/Bipedo_2.jpeg",
            "video:img/bipedo_video1.mp4"
        ]
    },

    interaction: {
        number: "04",
        count: "2 Explorations",
        title: "Interaction",
        subtitle: "Connecting people and machines.",
        text: "Designing systems that create a more natural relationship between users and assistive technologies.",
        objective: "Applied in rehabilitation gloves, orthosis prototypes and wearable medical devices.",
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
        count: "4 Explorations",
        title: "Integration",
        subtitle: "Connecting disciplines.",
        text: "Combining electronics, mechanics, software and manufacturing into functional engineering systems.",
        objective: "Applied in embedded systems, 3D printer development and automation projects.",
        media: [
            "img/Impresora_1.jpeg",
            "img/Impresora_3.jpeg",
            "img/Impresora_5.jpeg",
            "img/Impresora final.jpeg"
        ]
    },

    rehabilitation: {
        number: "06",
        count: "3 Explorations",
        title: "Healthcare Technologies",
        subtitle: "Engineering for recovery.",
        text: "Exploring assistive and medical technologies designed to support recovery, independence and quality of life.",
        objective: "Applied in orthosis systems, rehabilitation devices and intelligent healthcare prototypes.",
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
const previewCount = document.getElementById("previewCount");

const previewTitle = document.getElementById("previewTitle");



const previewSubtitle = document.getElementById("previewSubtitle");
const previewText = document.getElementById("previewText");
const previewObjective = document.getElementById("previewObjective");

let currentSlide = 0;
let slideInterval;

function loadProject(projectKey) {
    const project = explorationProjects[projectKey];

    if (!project || !previewTrack) return;

    previewNumber.textContent = project.number;
    previewCount.textContent = project.count;
    previewTitle.textContent = project.title;
   
    previewSubtitle.textContent = project.subtitle;
    previewText.textContent = project.text;
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
            video.controls = false;

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

    if (project.media.length > 1) {
        slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % project.media.length;
            previewTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        }, 3500);
    }
}

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        loadProject(button.dataset.project);
    });

    
    button.addEventListener("click", () => {
        const link = button.dataset.link;
        if (link) {
            window.location.href = link;
        }
    });
   
});

loadProject("perception");