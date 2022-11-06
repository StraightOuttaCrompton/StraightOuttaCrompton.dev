
function dove() {
    const doveElement = document.getElementById("dove-button");
    const michaelBluthElement = document.getElementById("michael-bluth");
    const openClassName = "michael-bluth__container--open";

    const michaelBluthVideoElement = document.getElementById(
        "michael-bluth-video"
    ) as HTMLVideoElement;

    if (doveElement == null || michaelBluthElement == null || michaelBluthVideoElement == null)
        return;

    doveElement.addEventListener("click", () => {
        if (michaelBluthElement.className.includes(openClassName)) return;

        michaelBluthVideoElement.play();
        michaelBluthElement.className += ` ${openClassName}`;

        setTimeout(() => {
            michaelBluthElement.className = michaelBluthElement.className.replace(
                ` ${openClassName}`,
                ""
            );
        }, 4375);
    });
}

dove();
