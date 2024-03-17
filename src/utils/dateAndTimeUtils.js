const date = new Date();

export function transformDateFormat() {
    const month = date.toLocaleString("en-US", { month: "2-digit" });
    const day = date.toLocaleString("en-US", { day: "2-digit" });
    const year = date.getFullYear();
    const time = date.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23",
    });

    const newFormatDate = year.toString().concat("-", month, "-", day, " ", time);
    return newFormatDate;
}

export function getFormattedDate() {
    const currentDate = new Date();

    // Month names array
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    // Get the month, day, and year
    const month = monthNames[currentDate.getMonth()];
    const day = String(currentDate.getDate()).padStart(2, '0');
    const year = currentDate.getFullYear();

    // Formatted date string
    const formattedDate = `${month} ${day}, ${year}`;

    return formattedDate;
}