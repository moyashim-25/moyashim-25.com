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
        navarea.appendChild(navcategoryli);

        const book = category.data;
        for (const bookData of book) {
            const bookdiv = document.createElement('div');
            const bookTitle = document.createElement('h3');
            const bookInfo = document.createElement('dl');
            const bookTitleDT = document.createElement('dt');
            const bookTitleDD = document.createElement('dd');
            const bookAuthorDT = document.createElement('dt');
            const bookAuthorDD = document.createElement('dd');
            const bookSeriesDT = document.createElement('dt');
            const bookSeriesDD = document.createElement('dd');
            const bookPublisherDT = document.createElement('dt');
            const bookPublisherDD = document.createElement('dd');
            const bookEditionDT = document.createElement('dt');
            const bookEditionDD = document.createElement('dd');
            const bookYearDT = document.createElement('dt');
            const bookYearDD = document.createElement('dd');
            const bookPageDT = document.createElement('dt');
            const bookPageDD = document.createElement('dd');
            const bookISBNDT = document.createElement('dt');
            const bookISBNDD = document.createElement('dd');
            const bookCommentDT = document.createElement('dt');
            const bookCommentDD = document.createElement('dd');

            const navbookli = document.createElement('li');
            const navbooka = document.createElement('a');

            navbooka.textContent = bookData.title;
            navbooka.setAttribute('href', `#${bookData.ISBN}`);

            bookTitle.textContent = bookData.title;
            bookTitle.setAttribute('id', bookData.ISBN);

            bookTitleDD.textContent = bookData.title;
            bookAuthorDD.textContent = bookData.author;
            if (bookData.series) bookSeriesDD.textContent = bookData.series;
            bookPublisherDD.textContent = bookData.publisher;
            bookEditionDD.textContent = bookData.edition;
            bookYearDD.textContent = bookData.year;
            bookPageDD.textContent = bookData.numberOfPages;
            bookISBNDD.textContent = bookData.ISBN;
            if (bookData.comment) bookCommentDD.textContent = bookData.comment;

            bookTitleDT.textContent = '書名';
            bookAuthorDT.textContent = '著者';
            if (bookData.series) bookSeriesDT.textContent = 'シリーズ';
            bookPublisherDT.textContent = '出版社';
            bookEditionDT.textContent = '版';
            bookYearDT.textContent = '出版年';
            bookPageDT.textContent = 'ページ数';
            bookISBNDT.textContent = 'ISBN';
            if (bookData.comment) bookCommentDT.textContent = 'コメント';

            bookInfo.appendChild(bookTitleDT);
            bookInfo.appendChild(bookTitleDD);
            bookInfo.appendChild(bookAuthorDT);
            bookInfo.appendChild(bookAuthorDD);
            bookInfo.appendChild(bookSeriesDT);
            bookInfo.appendChild(bookSeriesDD);
            bookInfo.appendChild(bookPublisherDT);
            bookInfo.appendChild(bookPublisherDD);
            bookInfo.appendChild(bookEditionDT);
            bookInfo.appendChild(bookEditionDD);
            bookInfo.appendChild(bookYearDT);
            bookInfo.appendChild(bookYearDD);
            bookInfo.appendChild(bookPageDT);
            bookInfo.appendChild(bookPageDD);
            bookInfo.appendChild(bookISBNDT);
            bookInfo.appendChild(bookISBNDD);
            bookInfo.appendChild(bookCommentDT);
            bookInfo.appendChild(bookCommentDD);

            navbookli.appendChild(navbooka);
            navcategoryul.appendChild(navbookli);

            bookdiv.appendChild(bookTitle);
            bookdiv.appendChild(bookInfo);

            categorysection.appendChild(bookdiv);
        }
        dataarea.appendChild(categorysection);
        navarea.appendChild(navcategoryul);
    }
}

populate();