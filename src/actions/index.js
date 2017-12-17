export function selectBook(book) {
    // Action creator

    // console.log('A book has been selected:', book.title);

    // return an Action: an object with a type property; other props are optional
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
