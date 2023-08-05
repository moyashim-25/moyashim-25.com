/* 
reference:
https://developer.mozilla.org/ja/docs/Learn/JavaScript/Objects/JSON
*/

async function populate() {
    const requestURL = '/data/libdata.json';
    const request = new Request(requestURL);

    const respons = await fetch(request);
    const MyLibrary = await respons.json();

    populateBook(MyLibrary);
}

function populateBook(obj) {
    const dataarea = document.getElementById('dataarea');
    const navarea = document.getElementById('libindex');
    const bookTemplate = document.getElementById('bookTemplate');
    const lib = obj.category;

    for (const category of lib) {
        const categorysection = document.createElement('section');
        const categoryh2 = document.createElement('h2');

        const navcategoryli = document.createElement('li');
        const navcategorya = document.createElement('a');
        const navcategoryul = document.createElement('ul');

        categoryh2.textContent = category.categoryName;
        categoryh2.setAttribute('id', category.categoryID);
        navcategorya.textContent = category.categoryName;
        navcategorya.setAttribute('href', `#${category.categoryID}`);

        categorysection.appendChild(categoryh2);
        navcategoryli.appendChild(navcategorya);

        const book = category.data;
        for (const bookData of book) {
            const bookdiv = bookTemplate.content.firstElementChild.cloneNode(true);
            const [ bookTitle ] = bookdiv.getElementsByClassName('bookTitle');
            const [ bookInfo ] = bookdiv.getElementsByClassName('bookInfo');
            const [ bookTitleDT, bookTitleDD ] = bookInfo.getElementsByClassName('bookTitle');
            const [ bookAuthorDT, bookAuthorDD ] = bookInfo.getElementsByClassName('bookAuthor');
            const [ bookSeriesDT, bookSeriesDD ] = bookInfo.getElementsByClassName('bookSeries');
            const [ bookPublisherDT, bookPublisherDD ] = bookInfo.getElementsByClassName('bookPublisher');
            const [ bookEditionDT, bookEditionDD ] = bookInfo.getElementsByClassName('bookEdition');
            const [ bookYearDT, bookYearDD ] = bookInfo.getElementsByClassName('bookYear');
            const [ bookPageDT, bookPageDD ] = bookInfo.getElementsByClassName('bookPage');
            const [ bookISBNDT, bookISBNDD ] = bookInfo.getElementsByClassName('bookISBN');
            const [ bookCommentDT, bookCommentDD ] = bookInfo.getElementsByClassName('bookComment');

            const navbookli = document.createElement('li');
            const navbooka = document.createElement('a');

            navbooka.textContent = bookData.title;
            navbooka.setAttribute('href', `#${bookData.ISBN}`);

            bookTitle.textContent = bookData.title;
            bookTitle.setAttribute('id', bookData.ISBN);

            bookTitleDD.textContent = bookData.title;
            bookAuthorDD.textContent = bookData.author;
            if (bookData.series) {
                bookSeriesDD.textContent = bookData.series;
            } else {
                bookSeriesDT.parentElement.removeChild(bookSeriesDT);
                bookSeriesDD.parentElement.removeChild(bookSeriesDD);
            }
            bookPublisherDD.textContent = bookData.publisher;
            bookEditionDD.textContent = bookData.edition;
            bookYearDD.textContent = bookData.year;
            bookPageDD.textContent = bookData.numberOfPages;
            bookISBNDD.textContent = bookData.ISBN;
            if (bookData.comment) {
                bookCommentDD.textContent = bookData.comment;
            } else {
                bookCommentDT.parentElement.removeChild(bookCommentDT);
                bookCommentDD.parentElement.removeChild(bookCommentDD);
            }
            navbookli.appendChild(navbooka);
            navcategoryul.appendChild(navbookli);

            categorysection.appendChild(bookdiv);
        }
        dataarea.appendChild(categorysection);
        navcategoryli.appendChild(navcategoryul);
        navarea.appendChild(navcategoryli);
    }
}

populate();