import { MDCSwitch } from "@material/switch";

const switchSelector = ".darkmode-switch .mdc-switch";
const switchCheckboxSelector = `${switchSelector} input[type=checkbox]`;

export type ThemeType = "light" | "dark";

function setTheme(themeType: ThemeType) {
    const lightThemeClassName = "theme-light";
    const darkThemeClassName = "theme-dark";

    document.querySelectorAll(`.${lightThemeClassName}`).forEach((element) => {
        element.className = element.className.replace(` ${lightThemeClassName}`, "");
    });

    document.querySelectorAll(`.${darkThemeClassName}`).forEach((element) => {
        element.className = element.className.replace(` ${darkThemeClassName}`, "");
    });

    if (themeType === "light") {
        document.body.className += ` ${lightThemeClassName}`;
    } else if (themeType === "dark") {
        document.body.className += ` ${darkThemeClassName}`;
    }
}

function setCurrentlySelectedTheme() {
    handleInitialTheme((themeType: ThemeType) => {
        setTheme(themeType);
    });
}

function initialiseDarkModeSwitch() {
    handleThemeChange((themeType: ThemeType) => {
        setTheme(themeType);
    });
}

export function handleInitialTheme(cb: (themeType: ThemeType) => void) {
    document.querySelectorAll(switchCheckboxSelector).forEach((switchElement) => {
        //@ts-ignore
        setSwitchState(switchElement.checked, cb);
    });
}

export function handleThemeChange(cb: (themeType: ThemeType) => void) {
    document.querySelectorAll(switchCheckboxSelector).forEach((switchElement) => {
        switchElement.addEventListener("change", (event: any) => {
            setSwitchState(event.target.checked, cb);
        });
    });
}

function setSwitchState(checked: boolean, cb: (themeType: ThemeType) => void) {
    const switchElement = document.querySelector(switchSelector);
    if (switchElement == null) return;

    const switchControl = new MDCSwitch(switchElement);

    if (checked) {
        cb("dark");
        switchControl.checked = true;
    } else {
        cb("light");
        switchControl.checked = false;
    }
}

setCurrentlySelectedTheme();
initialiseDarkModeSwitch();
