const comments = [
    {
        name: 'Victor Pinto',
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        name: 'Christina Cabrera',
        comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'
    },
    {
        name: 'Isaac Tadesse',
        comment: 'I can\'t stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can\'t get enough.'
    }
];

// function createDocumentsCard() {

//     //MAIN CONTAINER
//     const mainCard = document.createElement('div');
//     mainCard.classList.add('comments__cards');

//     // IMAGE SUBCONTAINER
//     const imageContainer = document.createElement('div');
//     imageContainer.className = 'comments__imageContainer'; // Add a class for styling if needed

//     // IMAGE

//     const bcImage = document.createElement('span');
//     bcImage.className = 'comments__image';

//     // NAME AND COMMENT SUBCONTAINER
//     const nameComments = document.createElement('div');

//     // DATA FROM ARRAY
//     const commentName = document.createElement('h3');
//     commentName.className = 'comments__name';
//     commentName.innerHTML = comments.name;

//     const commentText = document.createElement('p');
//     commentText.className = 'comments__text';
//     commentText.innerHTML = comments.comment;

//     // APPENDING SUBCONTAINERS

//     mainCard.appendChild(imageContainer);
//     mainCard.appendChild(nameComments);

//     // APPENDING DATA AND IMAGES

//     imageContainer.appendChild(bcImage);

//     nameComments.appendChild(commentName);
//     nameComments.appendChild(commentText);

//     return mainCard;
// }


// function renderComments() {
//     const commentList = document.querySelector('#commentsPrinted');
//     commentList.innerHTML = '';

//     for(let i = 0; i < comments.length; i++) {
//         const createCommentCards = createDocumentsCard(comments[i]);

//         commentList.appendChild(createCommentCards);
//     }
// }


// function handleCommentSubmit(event) {
//     event.preventDefault();

//     const cardData = {
//         name: event.target.name.value,
//         comment: event.target.comment.value
//     };
//     comments.unshift(cardData);
//     renderComments();
// }

// // Assign the form to the variable
// const CommentSection = document.querySelector('#commentForm');

// CommentSection.addEventListener('submit', handleCommentSubmit);

// renderComments();

function createDocumentsCard(comment) {

    // MAIN CONTAINER
    const mainCard = document.createElement('div');
    mainCard.classList.add('comments__cards');

    // IMAGE SUBCONTAINER
    const imageContainer = document.createElement('div');
    imageContainer.className = 'comments__imageContainer'; // Add a class for styling if needed

    // IMAGE
    const bcImage = document.createElement('span');
    bcImage.className = 'comments__image';

    // NAME AND COMMENT SUBCONTAINER
    const nameComments = document.createElement('div');

    // DATA FROM ARRAY
    const commentName = document.createElement('h3');
    commentName.className = 'comments__name';
    commentName.innerHTML = comment.name;

    const commentText = document.createElement('p');
    commentText.className = 'comments__text';
    commentText.innerHTML = comment.comment;

    // APPENDING SUBCONTAINERS
    mainCard.appendChild(imageContainer);
    mainCard.appendChild(nameComments);

    // APPENDING DATA AND IMAGES
    imageContainer.appendChild(bcImage);
    nameComments.appendChild(commentName);
    nameComments.appendChild(commentText);

    return mainCard;
}

function renderComments() {
    const commentList = document.querySelector('#commentsPrinted');
    commentList.innerHTML = '';

    for (let i = 0; i < comments.length; i++) {
        const createCommentCards = createDocumentsCard(comments[i]);

        commentList.appendChild(createCommentCards);
    }
}

function handleCommentSubmit(event) {
    event.preventDefault();

    const cardData = {
        name: event.target.name.value,
        comment: event.target.comment.value
    };
    comments.unshift(cardData);
    renderComments();
}

// Assign the form to the variable
const CommentSection = document.querySelector('#commentForm');

CommentSection.addEventListener('submit', handleCommentSubmit);

renderComments();

