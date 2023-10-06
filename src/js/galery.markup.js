function createMarkup(arr) {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
    `<a class="gallery__link" href=${largeImageURL}>
        <img class="gallery__image" width="350"src=${webformatURL} alt=${tags} loading="lazy" />
        <div class="info__wrap">
            <div class="info__item">
                <b class="info__items">Likes</b>${likes}
            </div>
            <div class="info__item">
                <b class="info__items">Views</b>${views}
            </div>
            <div class="info__item">
                <b class="info__items">Comments</b>${comments}
            </div>
            <div class="info__item">
                <b class="info__items">Downloads</b>${downloads}
            </div>
        </div>
    </a>`).join('');
}

export { createMarkup }