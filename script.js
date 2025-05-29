document.addEventListener('DOMContentLoaded', () => {
    const countryList = document.getElementById('country-list');
    const countryInfoDiv = document.getElementById('country-info');
    const infoText = document.getElementById('info-text');
    const infoImage = document.getElementById('info-image');

    const countryData = {
        Paris: {
            sentence: "Paris, the 'City of Love', is famous for its iconic Eiffel Tower, Louvre Museum, and romantic ambiance.",
            image: "https://i.pinimg.com/736x/74/d6/0d/74d60d290294e8ad7ade73e2a5261851.jpg"
        },
        Tokyo: {
            sentence: "Tokyo is a bustling metropolis known for its vibrant pop culture, futuristic technology, and serene temples.",
            image: "https://thumbs.dreamstime.com/b/vertical-aerial-view-tokyo-city-famous-red-tower-under-blue-sky-171663244.jpg"
        },
        Rome: {
            sentence: "Rome, the 'Eternal City', boasts ancient ruins like the Colosseum, Roman Forum, and Vatican City.",
            image: "https://tse1.mm.bing.net/th?id=OIP.YUxcAQK-_Lu7KeJYKePtUAHaNL&pid=Api&P=0&h=180"
        },
        NewYork: {
            sentence: "New York City, the 'Big Apple', is a global hub for finance, fashion, art, and entertainment, home to Times Square and Central Park.",
            image: "https://tse3.mm.bing.net/th?id=OIP.WdruLLB7I7RNUg_8V41k2QHaEO&pid=Api&P=0&h=180"
        },
        Cairo: {
            sentence: "Cairo, Egypt's capital, is renowned for the ancient Pyramids of Giza, the Sphinx, and its rich historical heritage.",
            image: "https://tse1.mm.bing.net/th?id=OIP.wgK15UuFobc5o5dARMUHlgHaEJ&pid=Api&P=0&h=180"
        },
        Sydney: {
            sentence: "Sydney, Australia, is famous for its stunning Opera House, Harbour Bridge, and beautiful beaches.",
            image: "https://tse2.mm.bing.net/th?id=OIP.4MgVffP51F-jBOSpmjHSJAHaEK&pid=Api&P=0&h=180"
        },
        India: {
            sentence: "India is a beautiful country with many colors. People in India celebrate different festivals with joy,The Taj Mahal is a famous monument in India.",
            image: "https://tse1.mm.bing.net/th?id=OIP.yQV9YN97q7-pD-MDLHFaJAHaEK&pid=Api&P=0&h=180"
        },
        London: {
            sentence: "London, UK, offers a mix of historical landmarks like the Tower of London and modern attractions such as the London Eye.",
            image: "https://wallpaperaccess.com/full/32545.jpg"
        },
        Beijing: {
            sentence: "Beijing, China's capital, is home to the Great Wall of China, the Forbidden City, and a rich imperial history.",
            image: "https://tse1.mm.bing.net/th?id=OIP.g2zPpo4jNYUnbk7PtoBQZQHaFj&pid=Api&P=0&h=180"
        },
        Dubai: {
            sentence: "Dubai, UAE, is a dazzling city known for its luxurious shopping, ultramodern architecture like the Burj Khalifa, and vibrant nightlife.",
            image: "http://ppcdn.500px.org/7118246/2015fda53d049589fe4a9f7e30afa17cee8faf98/4.jpg"
        }
    };

    countryList.addEventListener('click', (event) => {
        const clickedElement = event.target;

        // Check if a list item (li) was clicked
        if (clickedElement.tagName === 'LI') {
            const countryKey = clickedElement.dataset.country; // Get the value from data-country attribute

            if (countryData[countryKey]) {
                infoText.textContent = countryData[countryKey].sentence;
                infoImage.src = countryData[countryKey].image;
                infoImage.alt = `${countryKey} Image`; // Update alt text
                countryInfoDiv.style.display = 'block'; // Show the info div
            } else {
                console.warn(`No data found for country: ${countryKey}`);
                countryInfoDiv.style.display = 'none'; // Hide if no data
            }
        }
    });
});