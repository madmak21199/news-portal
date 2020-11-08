
// backend
let mainContent = document.createElement('div');
mainContent.className = 'mainContent';
mainContent.id = 'mainContent';
getNews();

// function to style the main content 
async function writeInMainContent(api_url) {
    const response = await fetch(api_url);
    const json = await response.json();
    const articles = json.articles;
    // console.log(articles);
    for (i in articles) {
        const card = document.createElement('div');
        const img = document.createElement('img');
        const cardBody = document.createElement('div');
        const h5 = document.createElement('h5');
        const p = document.createElement('p');
        const a = document.createElement('a');



        cardBody.append(h5);
        cardBody.append(p);
        cardBody.append(a);

        card.append(img);
        card.append(cardBody);

        mainContent.append(card);

        document.body.append(mainContent);

        card.className = 'card';

        // img.src = articles[i].urlToImage;
        if (articles[i].urlToImage === null) {
            img.src = 'images/video.png';
        } else {
            img.src = articles[i].urlToImage;
        }
        img.className = 'card-img-top';
        img.alt = 'no image to display';

        cardBody.className = 'card-body';

        h5.className = 'card-title';
        h5.textContent = articles[i].title;

        p.className = 'card-text';
        p.textContent = articles[i].description;

        a.href = articles[i].url;
        a.className = 'btn btn-primary';
        a.target = '_blank';
        a.textContent = 'View News';


    }
}

// function to return the landing page



async function getNews() {
    mainContent.innerHTML = '';
    const api_url = '/news';
    writeInMainContent(api_url);
    // const response = await fetch(api_url);
    // const json = await response.json();
    // const articles = json.articles;
    // console.log(articles);
    // for (i in articles) {
    //     const card = document.createElement('div');
    //     const img = document.createElement('img');
    //     const cardBody = document.createElement('div');
    //     const h5 = document.createElement('h5');
    //     const p = document.createElement('p');
    //     const a = document.createElement('a');



    //     cardBody.append(h5);
    //     cardBody.append(p);
    //     cardBody.append(a);

    //     card.append(img);
    //     card.append(cardBody);

    //     mainContent.append(card);

    //     document.body.append(mainContent);

    //     card.className = 'card';

    //     // img.src = articles[i].urlToImage;
    //     if (articles[i].urlToImage === null) {
    //         img.src = 'images/broken1.png';

    //     } else {
    //         img.src = articles[i].urlToImage;
    //     }
    //     img.className = 'card-img-top';
    //     img.alt = 'no image to display';

    //     cardBody.className = 'card-body';

    //     h5.className = 'card-title';
    //     h5.textContent = articles[i].title;

    //     p.className = 'card-text';
    //     p.textContent = articles[i].description;

    //     a.href = articles[i].url;
    //     a.className = 'btn btn-primary';
    //     a.target = '_blank';
    //     a.textContent = 'View News';


    // }
}

// add event listner to world news button
document.getElementById('world').addEventListener('click', getNews);

// add event listner to sports button
document.getElementById('sports').addEventListener('click', sportsNews)
function sportsNews() {
    mainContent.innerHTML = '';
    const api_url = '/sportsNews';
    writeInMainContent(api_url);
}

// add event listner to science button
document.getElementById('science').addEventListener('click', scienceNews)
function scienceNews() {
    mainContent.innerHTML = '';
    const api_url = '/scienceNews';
    writeInMainContent(api_url);
}

// add event listner to business button
document.getElementById('business').addEventListener('click', businessNews)
function businessNews() {
    mainContent.innerHTML = '';
    const api_url = '/businessNews';
    writeInMainContent(api_url);
}

// add event listner to technology button
document.getElementById('technology').addEventListener('click', technologyNews)
function technologyNews() {
    mainContent.innerHTML = '';
    const api_url = '/technologyNews';
    writeInMainContent(api_url);
}


// // frontend

const hamburgerBtn = document.getElementById('hamburgerMenu');
const sideBar = document.getElementById('sideBar');
hamburgerBtn.addEventListener('click', () => {
    sideBar.classList.toggle('open');
})
