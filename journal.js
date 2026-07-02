const caseStudies = {
    "smart-glasses": {
        year: "2025",
        area: "Perception",
        status: "Functional Prototype",
        role: "Developer",
        title: "Smart Glasses for Macular Degeneration",
        subtitle: "Exploring how computer vision can support people with central vision loss.",
        media: "video:img/Evidence_lens.mp4",
        challenge: "Macular degeneration affects central vision, making it difficult to recognize everyday objects and navigate safely. The challenge was to explore whether computer vision could provide real-time object recognition as an assistive technology.",
        approach: "A wearable prototype was developed using embedded hardware and a YOLO-based computer vision model capable of detecting common objects in real time. The system was designed as an exploratory research prototype focused on feasibility.",
        outcome: "A functional prototype successfully detected multiple everyday objects and demonstrated the potential of combining embedded systems with artificial intelligence for visual assistance.",
        reflection: "This project changed the way I see artificial intelligence. Rather than replacing human abilities, it showed me how engineering can augment them through thoughtful design.",
        gallery: [
            "img/Lentes_3.jpeg",
            "img/Lentes_4.jpeg",
            "img/lentes.jpeg",
            "img/Evidence_glasses_1.png",
            "img/Evidence_glasses_3.png",
            "img/Evidence_glasses_4.png"
        ],
        next: "prosthesis"
    },

    "prosthesis": {
        year: "2026",
        area: "Movement",
        status: "Research Prototype",
        role: "Developer",
        title: "Intelligent Myoelectric Prosthetic Hand",
        subtitle: "Exploring how muscle signals can support intuitive prosthetic control.",
        media: "img/protesis_mano_1.jpeg",
        challenge: "Upper-limb prosthetic control requires reliable interpretation of user intention. The challenge was to explore how muscle activity could be translated into functional movement commands.",
        approach: "A myoelectric control methodology was evaluated using biomedical signal processing and low-complexity classification algorithms for functional hand movement recognition.",
        outcome: "The project established a foundation for real-time prosthetic control and strengthened my interest in intelligent assistive technologies.",
        reflection: "This project connected many areas I care about: signal processing, mechanics, machine learning and human-centered engineering.",
        gallery: [
            "img/protesis_mano_1.jpeg",
            "img/protesis_mano_2.jpeg",
            "img/Presentación_final.JPG"
        ],
        next: "smart-glasses"
    }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id") || "smart-glasses";
const study = caseStudies[id];

document.getElementById("caseYear").textContent = study.year;
document.getElementById("caseArea").textContent = study.area;
document.getElementById("caseStatus").textContent = study.status;
document.getElementById("caseRole").textContent = study.role;
document.getElementById("caseTitle").textContent = study.title;
document.getElementById("caseSubtitle").textContent = study.subtitle;
document.getElementById("caseChallenge").textContent = study.challenge;
document.getElementById("caseApproach").textContent = study.approach;
document.getElementById("caseOutcome").textContent = study.outcome;
document.getElementById("caseReflection").textContent = study.reflection;

const mediaContainer = document.getElementById("caseMedia");

if (study.media.startsWith("video:")) {
    const video = document.createElement("video");
    video.src = study.media.replace("video:", "");
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    mediaContainer.appendChild(video);
} else {
    const img = document.createElement("img");
    img.src = study.media;
    img.alt = study.title;
    mediaContainer.appendChild(img);
}

const gallery = document.getElementById("caseGallery");

study.gallery.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = study.title;
    gallery.appendChild(img);
});

document.getElementById("nextCase").href = `journal.html?id=${study.next}`;