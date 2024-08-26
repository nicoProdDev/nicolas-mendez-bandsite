const ShowsArrayObject = [
    {
        DATE : "Mon Sept 09 2024",
        VENUE : "Ronald Lane",
        LOCATION : "San Francisco, CA"
    },
    {
        DATE : "Tue Sept 17 2024",
        VENUE : "Pier 3 East",
        LOCATION : "San Francisco, CA"
    },
    {
        DATE : "Sat Oct 12 2024",
        VENUE : "Hyatt Agency",
        LOCATION : "San Francisco, CA"
    },
    {
        DATE : "Fri Nov 09 2024",
        VENUE : "Moscow Center",
        LOCATION : "San Francisco, CA"
    },
    {
        DATE : "Wed Dec 18 2024",
        VENUE : "Pres Club",
        LOCATION : "San Francisco, CA"
    }
]





document.addEventListener('DOMContentLoaded', () => {
    const showsSection = document.querySelector('.shows__list');

    ShowsArrayObject.forEach(show => {
        const showDiv = document.createElement('div');
        showDiv.classList.add('shows__list--elements');

        const dateParagraph = document.createElement('p');
        dateParagraph.className = 'date__shows';
        dateParagraph.innerHTML = 'DATE';
        showDiv.appendChild(dateParagraph);

        const dateElement = document.createElement('p');
        dateElement.textContent = show.DATE;
        showDiv.appendChild(dateElement);

        const venueParagraph = document.createElement('p');
        venueParagraph.className = 'venue__shows';
        venueParagraph.innerHTML = 'VENUE';
        showDiv.appendChild(venueParagraph);

        const venueElement = document.createElement('p');
        venueElement.textContent = show.VENUE;
        showDiv.appendChild(venueElement);

        const locationParagraph = document.createElement('p');
        locationParagraph.className = 'location__shows';
        locationParagraph.innerHTML = 'LOCATION';
        showDiv.appendChild(locationParagraph);

        const locationElement = document.createElement('p');
        locationElement.textContent = show.LOCATION;
        showDiv.appendChild(locationElement);

        const button__buyTickets = document.createElement('button');
        button__buyTickets.className = 'button__buyTickets';
        button__buyTickets.innerHTML = 'BUY TICKETS';
        showDiv.appendChild(button__buyTickets);

        showsSection.appendChild(showDiv);
    });
});