// TODO: use or remove
const element = document.getElementById("years-experience");

if (element !== null) {
    const startDate = new Date("2017-09-01");
    const now = new Date();
    const diffMs = now.getTime() - startDate.getTime();

    const yearsExperience = new Date(diffMs).getFullYear() - new Date(0).getFullYear();

    element.innerHTML = yearsExperience.toString();
}
