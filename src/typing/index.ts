import TypeWriter from "./TypeWriter";
import wait from "../utils/wait";

document.addEventListener("DOMContentLoaded", async () => {
    await wait(500);

    const typewriterSelector = ".typewriter";
    const typewriterElement = document.querySelector(typewriterSelector);
    if (!typewriterElement) {
        throw new Error(`No element matching '${typewriterSelector}' selector`);
    }

    const typewriterTextSelector = ".typewriter-text h2";
    const textElements = document.querySelectorAll(typewriterTextSelector);
    if (!textElements) {
        throw new Error(`No element matching '${typewriterTextSelector}' selector`);
    }

    const sentencesToType: string[] = [];
    textElements.forEach((element) => {
        const textContent = element.textContent;
        if (!textContent) return;

        sentencesToType.push(textContent);
    });

    const typeWriter = new TypeWriter(typewriterElement, sentencesToType);
    typeWriter.type();
});
