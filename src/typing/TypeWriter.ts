import wait from "../utils/wait";

interface Options {
    /**
     * Delay between finishing the typing of the
     * sentence and the start of deleting the sentence.
     */
    delay?: number;
    /**
     * Time between each keystroke when typing text.
     */
    typingKeystrokeSpeed?: number;
    /**
     * Time between each keystroke when deleting text.
     */
    deletionKeystrokeSpeed?: number;
}

export default class TypeWriter {
    private readonly element: Element;
    private readonly items: string[];
    private readonly delay: number;
    private readonly typingKeystrokeSpeed: number;
    private readonly deletionKeystrokeSpeed: number;

    private currentText: string;
    private currentItemIndex: number;
    private isDeleting: boolean;

    constructor(element: Element, items: string[], options: Options = {}) {
        const { delay = 1500, typingKeystrokeSpeed = 75, deletionKeystrokeSpeed = 40 } = options;

        this.element = element;
        this.items = items;
        this.delay = delay;
        this.typingKeystrokeSpeed = typingKeystrokeSpeed;
        this.deletionKeystrokeSpeed = deletionKeystrokeSpeed;

        this.currentText = "";
        this.currentItemIndex = 0;
        this.isDeleting = false;
    }

    private get currentItem() {
        return this.items[this.currentItemIndex];
    }

    private addCharacter() {
        this.currentText = this.currentItem.substring(0, this.currentText.length + 1);
    }

    private removeCharacter() {
        this.currentText = this.currentItem.substring(0, this.currentText.length - 1);
    }

    private nextItem() {
        const nextItemIndex = this.currentItemIndex + 1;
        this.currentItemIndex = nextItemIndex % this.items.length;
    }

    private renderText() {
        this.element.textContent = this.currentText;
    }

    private async typeText() {
        this.addCharacter();
        this.renderText();

        if (this.currentText === this.currentItem) {
            return;
        }

        await wait(this.typingKeystrokeSpeed);
        await this.typeText();
    }

    private async deleteText() {
        this.removeCharacter();
        this.renderText();

        if (this.currentText === "") {
            return;
        }

        await wait(this.deletionKeystrokeSpeed);
        await this.deleteText();
    }

    public async type() {
        if (this.isDeleting) {
            await this.deleteText();
            this.isDeleting = false;
            this.nextItem();
        } else {
            await this.typeText();
            this.isDeleting = true;
        }

        await wait(this.delay);
        await this.type();
    }
}
