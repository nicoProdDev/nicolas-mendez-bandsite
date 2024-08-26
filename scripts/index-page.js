const comments = [
    {
        name: 'Victor Pinto',
        timeStamp: '11/02/2023',
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        name: 'Christina Cabrera',
        timeStamp: '10/28/2023',
        comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'
    },
    {
        name: 'Isaac Tadesse',
        timeStamp: '10/20/2023',
        comment: 'I can\'t stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can\'t get enough.'
    }
    
];

function createCommentSection(comment) {
    // Create the main card container
    const mainCard = document.createElement('div');
    mainCard.className = 'card';

    // Create the image container and append the profile image
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
    const bcImage = document.createElement('span');
    bcImage.className = 'bc-image';
    imageContainer.appendChild(bcImage);
    mainCard.appendChild(imageContainer);

    // Create the complete data container
    const completeData = document.createElement('div');
    completeData.className = 'complete-data';
    mainCard.appendChild(completeData);

    // Create the name and timestamp container
    const nameCommentContainer = document.createElement('div');
    nameCommentContainer.className = 'name-comment-container'; // Ensure the class is correctly assigned
    completeData.appendChild(nameCommentContainer);

    // Create and append the name container
    const nameContainer = document.createElement('p');
    nameContainer.className = 'name-container';
    nameContainer.innerText = comment.name;

    // Create and append the timestamp container
    const timeStampContainer = document.createElement('p');
    timeStampContainer.className = 'time-stamp-container';
    timeStampContainer.innerText = comment.timeStamp;

    nameCommentContainer.appendChild(nameContainer);
    nameCommentContainer.appendChild(timeStampContainer);

    // Create and append the comment container
    const commentContainer = document.createElement('div');
    commentContainer.className = 'comment-container';
    completeData.appendChild(commentContainer);

    // Create and append the comment text
    const commentText = document.createElement('p');
    commentText.className = 'comment-text';
    commentText.innerText = comment.comment;

    commentContainer.appendChild(commentText);

    return mainCard;
}

function renderComments() {
    const myCommentsEl = document.querySelector("#commentsPrinted");
    myCommentsEl.innerHTML = ""; // Clear existing comments

    // Loop through comments and append each to the DOM
    for (let i = 0; i < comments.length; i++) {
        const comment = createCommentSection(comments[i]);
        myCommentsEl.appendChild(comment);
    }
}

function getCurrentDate() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

function handleCommentSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Create a new comment object
    const cardData = {
        name: event.target.name.value,
        timeStamp: getCurrentDate(),
        comment: event.target.comment.value
    };
    comments.unshift(cardData); // Add new comment to the beginning of the array
    renderComments(); // Re-render comments

    event.target.reset(); // Reset the form
}

// Add event listener to the form
const commentsEl = document.querySelector('#commentForm');
commentsEl.addEventListener('submit', handleCommentSubmit);

renderComments(); // Initial render of comments