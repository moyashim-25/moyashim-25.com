/* 
last modified: 2026-07-26
*/

// JSONデータの取得・表示関数の実行
async function populate() {
    const requestURL = 'https://spotify-currently-playing-track.moyashim-25.com/';
    const request = new Request(requestURL);

    const respons = await fetch(request);
    const RPMusic = await respons.json();
    populateMusic(RPMusic);
}

// HTMLへの表示
function populateMusic(songData) {
    const container = document.getElementById("songs-container");
    const template = document.getElementById("song-template");

    const h2Title = document.createElement('h2');
    h2Title.textContent = "Spotifyで再生中";
    container.appendChild(h2Title);

    songData.items.slice().forEach(item => {
        const clone = template.content.cloneNode(true);

        const imageDiv = clone.querySelector(".image");
        imageDiv.style.backgroundImage = `url(${item.songIMG})`;

        if (item.songURL == "") {
            let title = clone.querySelector(".title");
            title.textContent = item.songName;
        } else {
            let link = clone.querySelector("a");
            link.href = item.songURL;
            link.textContent = item.songName;
        }

        clone.querySelector(".artist").textContent = item.artists.join(", ");
        container.appendChild(clone);
    });

    const smallTime = document.createElement('small');
    smallTime.textContent = `Spotify API から取得・${songData.time}時点`;
    container.appendChild(smallTime);
}

populate();
