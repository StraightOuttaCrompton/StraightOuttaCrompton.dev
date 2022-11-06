import TypeWriter from "./TypeWriter";
import wait from "../utils/wait";

document.addEventListener("DOMContentLoaded", async () => {
    await wait(500);

    const txtElement = document.querySelector(".typewriter-text");
    if (!txtElement) {
        return;
    }

    const sentencesToType = ["Hello", "My name is Jack", "I'm a developer at Proton"];

    const typeWriter = new TypeWriter(txtElement, sentencesToType);
    typeWriter.type();
});
