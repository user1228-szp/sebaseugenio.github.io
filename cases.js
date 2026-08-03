"use strict";

const caseStudies = {
    "smart-glasses-macular-degeneration": {
        domainNumber: "01",
        domain: "Perception",
        explorationNumber: "01",
        type: "Research Project",
        year: "2025",
        title:
            "Development of a Prototype of Smart Glasses Integrating Machine Learning Methods for People with Macular Degeneration",

        subtitle:
            "An embedded vision system designed to improve environmental awareness through computer vision, distance sensing and real-time voice feedback.",

        introduction:
            "Developed as a collaborative research project between Universidad Iberoamericana Puebla and CIMAT, this prototype explores how embedded artificial intelligence can support people affected by Age-related Macular Degeneration. The system combines object detection, proximity sensing and speech synthesis to help users identify nearby objects and interact more safely with their surroundings.",

        technologies: [
            "Python",
            "YOLOv8",
            "OpenCV",
            "Flask",
            "ESP32-S3",
            "Grove Vision AI V2",
            "VL53L0X",
            "Raspberry Pi"
        ],

        heroMedia: {
            type: "image",
            src: "img/Lentes/lentes.jpeg",
            alt: "Smart glasses prototype"
        },

        summary: {
            challenge: [
                "Age-related Macular Degeneration affects central vision and makes everyday activities such as recognizing people, identifying nearby objects and navigating indoor environments increasingly difficult. Although medical treatments may slow the progression of the disease, they cannot restore vision that has already been lost.",
                "The challenge was to develop a portable and comfortable assistive device capable of interpreting the environment and communicating useful information to the user without requiring complex interactions. Instead of replacing vision, the system was designed to translate visual information into understandable voice notifications."
            ],

            outcome: [
                "A functional prototype was developed by integrating a Seeed Studio XIAO ESP32-S3, Grove Vision AI V2, an OV5647 camera, a VL53L0X proximity sensor, a Raspberry Pi and a wearable glasses structure.",
                "The system captures an image when the user activates the device. A custom YOLOv8 model analyzes the scene and identifies objects based on a dataset of eight categories. At the same time, the proximity sensor measures the distance to nearby elements. The detected information is converted into text and communicated to the user through voice feedback.",
                "The model was trained for 1,000 epochs using a dataset divided into 80% training, 15% validation and 5% testing. Only predictions with confidence greater than 50% were selected for audio feedback. The prototype successfully demonstrated the detection of common objects such as people, tables, chairs, televisions and furniture."
            ]
        },

        gallery: [
            {
                type: "video",
                category: "Prototype demo",
                title: "Smart glasses demonstration",
                description:
                    "A real-time demonstration of the assistive glasses combining object detection, distance sensing and voice feedback.",
                src: "img/Lentes/Evidence_lens.mp4",
                poster: "img/Lentes/Evidence_glasses_1.png",
                alt: "Demonstration of the smart glasses prototype"
            },
            {
                type: "image",
                category: "Prototype",
                title: "Wearable prototype overview",
                description:
                    "General view of the wearable structure and the placement of the electronic components.",
                src: "img/Lentes/Lentes_3.jpeg",
                alt: "Smart glasses wearable prototype"
            },
            {
                type: "image",
                category: "Hardware",
                title: "Front assembly",
                description:
                    "Front view of the prototype showing the camera and sensor integration.",
                src: "img/Lentes/lentes.jpeg",
                alt: "Front assembly of the glasses"
            },
            {
                type: "image",
                category: "Production",
                title: "Printing the Prototype Components",
                description:
                    "Waiting for each component to be printed before testing the complete prototype.",
                src: "img/Lentes/Lentes_4.jpeg",
                alt: "Prototype printing process"
            },
            {
                type: "image",
                category: "Development",
                title: "Wearability evaluation",
                description:
                    "Evaluation of the prototype configuration before the final functional tests.",
                src: "img/Lentes/Lentes_6.jpeg",
                alt: "Wearability evaluation"
            },
            {
                type: "image",
                category: "Evidence",
                title: "Object detection result",
                description:
                    "Visual evidence produced during the object-recognition validation stage.",
                src: "img/Lentes/Evidence_glasses_1.png",
                alt: "Object detection evidence"
            },
            {
                type: "image",
                category: "Evidence",
                title: "Environmental recognition",
                description:
                    "Example of the visual information processed by the embedded recognition system.",
                src: "img/Lentes/Evidence_glasses_3.png",
                alt: "Environmental recognition evidence"
            },
            {
                type: "image",
                category: "Results",
                title: "Detection output",
                description:
                    "Final output used to verify the recognition and notification workflow.",
                src: "img/Lentes/Evidence_glasses_4.png",
                alt: "Final detection output"
            }
        ],
    },

    "nearby-object-detection": {
        domainNumber: "01",
        domain: "Perception",
        explorationNumber: "02",
        type: "Engineering Project",
        year: "2025",


        project:
            "Device for Visually Impaired People",

        title:
            "Nearby Object Detection",

        subtitle:
            "A wearable proximity-detection system designed to help visually impaired users identify nearby obstacles through real-time alerts.",

        introduction:
            "Developed as an assistive technology project, Device for Visually Impaired People explores how wearable sensing can support people with visual disabilities during everyday mobility. The prototype integrates two VL53L0X proximity sensors, an Arduino Nano and an alert system into a pair of glasses, allowing nearby objects to be detected and communicated to the user through an immediate warning.",

        externalLink: {
            label: "View Instructable",
            url:
                "https://www.instructables.com/This-Proyect-Its-a-Device-for-Visually-Impaired-Pe/"
        },

        technologies: [
            "Arduino Nano",
            "VL53L0X",
            "I2C",
            "Proximity Sensing",
            "Wearable Electronics",
            "3D Printing",
            "PCB Design"
        ],

        heroMedia: {
            type: "image",
            src: "img/Lentes/Lentes_2.jpeg",
            alt: "Wearable prototype for visually impaired people"
        },

        summary: {
            challenge: [
                "Visual disability can significantly affect a person's ability to move independently and safely through their surroundings. In Mexico, INEGI reported approximately 7.17 million people with a disability according to the 2020 census, highlighting the importance of developing accessible assistive technologies. ",
                "The project focused on developing a wearable device capable of detecting nearby obstacles for a user with visual impairment. Based on an initial user interview, comfort, reliability and ease of use were identified as important design considerations. The user particularly emphasized the need for a comfortable frame that would not cause discomfort around the right ear. "
            ],

            outcome: [
                "A functional prototype of wearable glasses was developed using two VL53L0X I2C proximity sensors, an Arduino Nano and an alert mechanism. The system was designed to detect objects located near the user and generate an immediate warning when an obstacle was identified. ",
                "The position of the sensors was modified throughout the development process to improve the interaction between the device and the user. The electronic connections and placement of the circuit were also adapted to make the prototype more comfortable to wear. Materials such as PLA and silicone rubber were considered during the physical development of the device. ",
                "The resulting prototype provided assistance to a user with visual impairment by generating an alert when nearby objects were detected. The system was intended to reduce uncertainty while walking independently and provide the user with greater confidence during everyday mobility."
            ]
        },

        gallery: [
            {
                type: "video",
                category: "Prototype",
                title: "Results of the wearable prototype",
                description:
                    "Result of the test with the wearable prototype for visually impaired people, showing the detection of nearby objects and the corresponding alert.",
                src: "img/Lentes/LENS.mp4",
                alt: "Wearable prototype for visually impaired people"
            },
            {
                type: "image",
                category: "Prototype",
                title: "Wearable prototype overview",
                description:
                    "General view of the wearable device integrating the proximity sensors and electronic system.",
                src: "img/Lentes/Lentes_1.jpeg",
                alt: "Wearable prototype for visually impaired people"
            }
            
        ]


},

};

const caseOrder = Object.keys(caseStudies);

function getNextProject(projectId) {
    const currentIndex = caseOrder.indexOf(projectId);

    if (currentIndex === -1 || currentIndex >= caseOrder.length - 1) {
        return null;
    }

    const nextId = caseOrder[currentIndex + 1];
    const nextProject = caseStudies[nextId];

    if (!nextProject) {
        return null;
    }

    return {
        id: nextId,
        title: nextProject.title
    };
}

const caseRoot = document.getElementById("case-root");
const lightbox = document.getElementById("gallery-lightbox");
const lightboxContent = document.getElementById("lightbox-content");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxPrevious = document.getElementById("lightbox-previous");
const lightboxNext = document.getElementById("lightbox-next");

let activeGallery = [];
let activeGalleryIndex = 0;

const urlParameters = new URLSearchParams(window.location.search);
const requestedProjectId = urlParameters.get("id") || caseOrder[0];
const currentProject = caseStudies[requestedProjectId];

function escapeHTML(value = "") {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function renderParagraphs(paragraphs) {
    if (!Array.isArray(paragraphs)) {
        return "";
    }

    return paragraphs
        .map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`)
        .join("");
}

function renderTechnologies(technologies) {
    if (!Array.isArray(technologies)) {
        return "";
    }

    return technologies
        .map(
            (technology) => `
                <span class="case-technology">
                    ${escapeHTML(technology)}
                </span>
            `
        )
        .join("");
}

function renderHeroMedia(media) {
    if (!media || !media.src) {
        return `
            <div class="case-hero-placeholder">
                Add the principal project image in cases.js
            </div>
        `;
    }

    if (media.type === "video") {
        return `
            <video
                src="${escapeHTML(media.src)}"
                ${media.poster ? `poster="${escapeHTML(media.poster)}"` : ""}
                autoplay
                muted
                loop
                playsinline
            ></video>
        `;
    }

    return `
        <img
            src="${escapeHTML(media.src)}"
            alt="${escapeHTML(media.alt || "")}"
        >
    `;
}

function getGalleryTitle(item, index) {
    return item.title || `Project media ${String(index + 1).padStart(2, "0")}`;
}

function getGalleryDescription(item) {
    return item.description || "Visual evidence from the project development and validation process.";
}

function getGalleryCategory(item) {
    if (item.category) {
        return item.category;
    }

    return item.type === "video" ? "Video" : "Image";
}

function renderStageMedia(item) {
    if (!item || !item.src) {
        return `<div class="cs-media-empty">No media available.</div>`;
    }

    if (item.type === "video") {
        return `
            <video
                class="cs-media-stage-video"
                src="${escapeHTML(item.src)}"
                ${item.poster ? `poster="${escapeHTML(item.poster)}"` : ""}
                controls
                autoplay
                muted
                playsinline
                preload="metadata"
            ></video>
        `;
    }

    return `
        <img
            class="cs-media-stage-image"
            src="${escapeHTML(item.src)}"
            alt="${escapeHTML(item.alt || item.title || "Project image")}"
        >
    `;
}

/*
 * Important:
 * - Image items use the image itself as the thumbnail.
 * - Video items use their poster as an <img> thumbnail whenever available.
 *   This prevents the browser from cropping the video poster inside a <video>
 *   element and lets CSS apply object-fit: contain consistently.
 */
function renderThumbnailMedia(item) {
    const alt = escapeHTML(item.alt || item.title || "Project media thumbnail");

    if (item.type === "video" && item.poster) {
        return `
            <img
                class="cs-media-thumb-image cs-media-thumb-poster"
                src="${escapeHTML(item.poster)}"
                alt="${alt}"
                loading="lazy"
                decoding="async"
            >
            <span class="cs-media-play" aria-hidden="true">▶</span>
        `;
    }

    if (item.type === "video") {
        return `
            <video
                class="cs-media-thumb-video"
                src="${escapeHTML(item.src)}"
                muted
                playsinline
                preload="metadata"
                aria-label="${alt}"
            ></video>
            <span class="cs-media-play" aria-hidden="true">▶</span>
        `;
    }

    return `
        <img
            class="cs-media-thumb-image"
            src="${escapeHTML(item.src)}"
            alt="${alt}"
            loading="lazy"
            decoding="async"
        >
    `;
}

function renderPlaylistItem(item, index) {
    if (!item || !item.src) {
        return "";
    }

    const number = String(index + 1).padStart(2, "0");

    return `
        <button
            class="cs-media-item ${index === 0 ? "is-active" : ""}"
            type="button"
            role="option"
            aria-selected="${index === 0 ? "true" : "false"}"
            data-case-media-index="${index}"
        >
            <span class="cs-media-thumb">
                ${renderThumbnailMedia(item)}
            </span>

            <span class="cs-media-copy">
                <span class="cs-media-topline">
                    <span class="cs-media-number">${number}</span>
                    <span class="cs-media-badge">${escapeHTML(getGalleryCategory(item))}</span>
                </span>

                <span class="cs-media-item-title">
                    ${escapeHTML(getGalleryTitle(item, index))}
                </span>

                <span class="cs-media-item-description">
                    ${escapeHTML(getGalleryDescription(item))}
                </span>
            </span>
        </button>
    `;
}

function renderCaseStudy(project) {
    document.title = `${project.title} | Sebastián Eugenio`;

    const gallery = Array.isArray(project.gallery)
        ? project.gallery.filter((item) => item && item.src)
        : [];

    activeGallery = gallery;
    activeGalleryIndex = 0;

    const firstItem = gallery[0] || null;

    const nextProject = getNextProject(requestedProjectId);

    const nextProjectHTML = nextProject
        ? `
            <a
                class="next-case"
                href="cases.html?id=${encodeURIComponent(nextProject.id)}"
            >
                <div class="case-container">
                    <p class="next-case-label">Next Exploration</p>
                    <div class="next-case-row">
                        <h2 class="next-case-title">
                            ${escapeHTML(nextProject.title)}
                        </h2>
                        <span class="next-case-arrow" aria-hidden="true">→</span>
                    </div>
                </div>
            </a>
        `
        : "";

    caseRoot.innerHTML = `
        <article class="case-study">
            <header class="case-hero">
                <div class="case-container">
                    <div class="case-hero-heading">
                        <p class="case-domain">
                            ${escapeHTML(project.domainNumber)}
                            ·
                            ${escapeHTML(project.domain)}
                            ·
                            Exploration
                            ${escapeHTML(project.explorationNumber)}
                        </p>

                        <div class="case-meta">
                            <span>${escapeHTML(project.type)}</span>
                            <span>${escapeHTML(project.year)}</span>
                        </div>

                        <h1 class="case-title">
                            ${escapeHTML(project.title)}
                        </h1>
                    </div>

                    <div class="case-hero-grid">
                        <div class="case-hero-content">
                            <p class="case-subtitle">
                                ${escapeHTML(project.subtitle)}
                            </p>

                            <p class="case-introduction">
                                ${escapeHTML(project.introduction)}
                            </p>

                            <div class="case-technologies">
                                ${renderTechnologies(project.technologies)}
                            </div>
                        </div>

                        <div class="case-hero-media">
                            ${renderHeroMedia(project.heroMedia)}
                        </div>
                    </div>
                </div>
            </header>

            <section class="case-summary">
                <div class="case-container">
                    <p class="case-section-label">Project Summary</p>

                    <div class="summary-block">
                        <div class="summary-number">01</div>
                        <div class="summary-content">
                            <h2 class="summary-title">The Challenge</h2>
                            <div class="summary-text">
                                ${renderParagraphs(project.summary.challenge)}
                            </div>
                        </div>
                    </div>

                    <div class="summary-block">
                        <div class="summary-number">02</div>
                        <div class="summary-content">
                            <h2 class="summary-title">The Outcome</h2>
                            <div class="summary-text">
                                ${renderParagraphs(project.summary.outcome)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="case-gallery" id="media">
                <div class="case-container">
                    <div class="case-gallery-heading">
                        <p class="case-section-label">Project Media</p>
                        <p class="case-gallery-intro">
                            Select an item from the collection to inspect the prototype, development process and project results without leaving the case study.
                        </p>
                    </div>

                    <div class="cs-media-layout">
                        <div class="cs-media-viewer">
                            <div id="cs-media-frame" class="cs-media-frame">
                                ${renderStageMedia(firstItem)}
                            </div>

                            <div class="cs-media-details">
                                <div class="cs-media-meta">
                                    <span id="cs-media-counter" class="cs-media-counter">
                                        ${gallery.length > 0 ? `01 / ${String(gallery.length).padStart(2, "0")}` : "00 / 00"}
                                    </span>

                                    <button
                                        id="cs-media-expand"
                                        class="cs-media-expand"
                                        type="button"
                                        ${gallery.length === 0 ? "disabled" : ""}
                                    >
                                        Full screen ↗
                                    </button>
                                </div>

                                <h2 id="cs-media-title" class="cs-media-title">
                                    ${firstItem ? escapeHTML(getGalleryTitle(firstItem, 0)) : "No media available"}
                                </h2>

                                <p id="cs-media-description" class="cs-media-description">
                                    ${firstItem ? escapeHTML(getGalleryDescription(firstItem)) : "Add project media in cases.js."}
                                </p>
                            </div>
                        </div>

                        <aside class="cs-media-panel" aria-label="Project media collection">
                            <div class="cs-media-panel-header">
                                <p class="cs-media-panel-title">Media collection</p>
                                <span class="cs-media-panel-count">${gallery.length} items</span>
                            </div>

                            <div class="cs-media-list" role="listbox" aria-label="Select project media">
                                ${gallery.map(renderPlaylistItem).join("")}
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            ${nextProjectHTML}
        </article>
    `;

    activateMediaShowcase();
}

function renderNotFound() {
    document.title = "Exploration Not Found | Sebastián Eugenio";

    caseRoot.innerHTML = `
        <section class="case-not-found">
            <div class="case-not-found-content">
                <p class="case-not-found-number">404 · RESEARCH EXPLORATION</p>
                <h1>This exploration is not available yet.</h1>
                <p>
                    The requested research project could not be found.
                    Return to the Perception domain to continue exploring the portfolio.
                </p>
                <a href="exploration.html?id=perception">Return to Perception →</a>
            </div>
        </section>
    `;
}

function getButtonMediaIndex(button) {
    return Number(button.dataset.caseMediaIndex);
}

function activateMediaShowcase() {
    const playlistButtons = Array.from(
        document.querySelectorAll("[data-case-media-index]")
    );
    const expandButton = document.getElementById("cs-media-expand");

    playlistButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const index = getButtonMediaIndex(button);
            selectMediaItem(index, true);
        });

        button.addEventListener("keydown", (event) => {
            const validKeys = ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"];

            if (!validKeys.includes(event.key) || activeGallery.length === 0) {
                return;
            }

            event.preventDefault();

            const currentIndex = getButtonMediaIndex(button);
            const direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
            const nextIndex = (currentIndex + direction + activeGallery.length) % activeGallery.length;
            const nextButton = document.querySelector(
                `[data-case-media-index="${nextIndex}"]`
            );

            if (nextButton) {
                nextButton.focus();
                selectMediaItem(nextIndex, true);
            }
        });
    });

    if (expandButton) {
        expandButton.addEventListener("click", () => openLightbox(activeGalleryIndex));
    }
}

function selectMediaItem(index, autoplayVideo = false) {
    const item = activeGallery[index];

    if (!item) {
        return;
    }

    activeGalleryIndex = index;

    const stageFrame = document.getElementById("cs-media-frame");
    const stageCounter = document.getElementById("cs-media-counter");
    const stageTitle = document.getElementById("cs-media-title");
    const stageDescription = document.getElementById("cs-media-description");
    const playlistButtons = document.querySelectorAll("[data-case-media-index]");

    if (stageFrame) {
        stageFrame.innerHTML = renderStageMedia(item);

        if (!autoplayVideo && item.type === "video") {
            const video = stageFrame.querySelector("video");
            if (video) {
                video.autoplay = false;
                video.pause();
            }
        }
    }

    if (stageCounter) {
        stageCounter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(activeGallery.length).padStart(2, "0")}`;
    }

    if (stageTitle) {
        stageTitle.textContent = getGalleryTitle(item, index);
    }

    if (stageDescription) {
        stageDescription.textContent = getGalleryDescription(item);
    }

    playlistButtons.forEach((button) => {
        const isActive = getButtonMediaIndex(button) === index;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-selected", String(isActive));
    });
}

function openLightbox(index) {
    if (!activeGallery[index]) {
        return;
    }

    activeGalleryIndex = index;
    updateLightbox();
    lightbox.classList.add("is-visible");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
}

function closeLightbox() {
    lightbox.classList.remove("is-visible");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    lightboxContent.innerHTML = "";
}

function updateLightbox() {
    const item = activeGallery[activeGalleryIndex];

    if (!item) {
        return;
    }

    if (item.type === "video") {
        lightboxContent.innerHTML = `
            <video
                src="${escapeHTML(item.src)}"
                ${item.poster ? `poster="${escapeHTML(item.poster)}"` : ""}
                controls
                autoplay
                playsinline
            ></video>
        `;
        return;
    }

    lightboxContent.innerHTML = `
        <img
            src="${escapeHTML(item.src)}"
            alt="${escapeHTML(item.alt || item.title || "Project image")}"
        >
    `;
}

function showPreviousGalleryItem() {
    if (activeGallery.length === 0) {
        return;
    }

    activeGalleryIndex = (activeGalleryIndex - 1 + activeGallery.length) % activeGallery.length;
    updateLightbox();
}

function showNextGalleryItem() {
    if (activeGallery.length === 0) {
        return;
    }

    activeGalleryIndex = (activeGalleryIndex + 1) % activeGallery.length;
    updateLightbox();
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrevious.addEventListener("click", showPreviousGalleryItem);
lightboxNext.addEventListener("click", showNextGalleryItem);

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-visible")) {
        return;
    }

    if (event.key === "Escape") {
        closeLightbox();
    } else if (event.key === "ArrowLeft") {
        showPreviousGalleryItem();
    } else if (event.key === "ArrowRight") {
        showNextGalleryItem();
    }
});

if (!requestedProjectId || !currentProject) {
    renderNotFound();
} else {
    renderCaseStudy(currentProject);
}
