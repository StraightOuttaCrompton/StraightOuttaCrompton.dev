import { MDCRipple } from "@material/ripple";
import { MDCTooltip } from "@material/tooltip";

// List Ripple initialisation
const iconButtonElements = document.querySelectorAll(".mdc-icon-button");
iconButtonElements.forEach((iconButtonElement) => {
    if (iconButtonElement === null) return;

    const iconButtonRipple = new MDCRipple(iconButtonElement);
    iconButtonRipple.unbounded = true;
});

const selector = ".mdc-button, .mdc-card__primary-action";
const ripples = [].map.call(document.querySelectorAll(selector), function (el) {
    return new MDCRipple(el);
});

const tooltipElementsElements = document.querySelectorAll(".mdc-tooltip");
tooltipElementsElements.forEach((tooltipElement) => new MDCTooltip(tooltipElement));
