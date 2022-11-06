export default function isDecemberOrJanuary() {
    const currentDate = new Date();
    const month = currentDate.getMonth();

    return month === 11 || month === 0;
}
