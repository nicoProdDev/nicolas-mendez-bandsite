import { api } from './band-site-api.js';


const comments = await api.getComments();

console.log(comments);

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

    function convertUnixTimeStampToDate(unixTimestamp) {
        const date = new Date(unixTimestamp);

        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const day = daysOfWeek[date.getDay()];

        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Months are zero-based
        const dayOfMonth = date.getDate();

        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        const monthName = monthNames[date.getMonth()];

        const formattedDate = `${month.toString().padStart(2, '0')}/${dayOfMonth.toString().padStart(2, '0')}/${year}`;
        

        return formattedDate;
    }
    timeStampContainer.innerText = convertUnixTimeStampToDate(comment.timestamp);

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

// function getCurrentDate() {
//     const date = new Date();
//     const month = date.getMonth() + 1;
//     const day = date.getDate();
//     const year = date.getFullYear();
//     return `${month}/${day}/${year}`;
// }





async function handleCommentSubmit(event) {
    event.preventDefault();

    const cardData = {
        name: event.target.name.value,
        comment: event.target.comment.value,
    };

    try {
        const postedComment = await api.postComment(cardData);

        comments.unshift(postedComment);
        renderComments();
        event.target.reset();
        console.log(comments);
    } catch (error) {
        console.error('Error posting comment:', error);
    }
}



// Add event listener to the form
const commentsEl = document.querySelector('#commentForm');
commentsEl.addEventListener('submit', handleCommentSubmit);

renderComments(); // Initial render of comments

