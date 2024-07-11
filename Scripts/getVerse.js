document.addEventListener("DOMContentLoaded", async () => {
    const verseElement = document.getElementById("verse");

    try {
        const response = await fetch('https://book-of-mormon-api.vercel.app/random');
        const data = await response.json();
        verseElement.textContent = `${data.reference} - ${data.text}`;
    } catch (error) {
        verseElement.textContent = "Failed to load verse. Please try again.";
        console.error("Error fetching verse:", error);
    }
});
