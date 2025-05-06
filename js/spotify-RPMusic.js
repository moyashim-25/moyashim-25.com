/* 
last modified: 2025-05-06
*/

// JSONデータの取得・表示関数の実行
async function populate() {
    const requestURL = 'https://spotify-recently-played-tracks.moyashim-25.com';
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
    h2Title.textContent = "もやしくんが最近再生";
    container.appendChild(h2Title);

    songData.items.slice(0, songData.limit).forEach(item => {
        const clone = template.content.cloneNode(true);
        clone.querySelector("img").src = item.songIMG;
        const link = clone.querySelector("a");
        link.href = item.songURL;
        link.textContent = item.songName;
        clone.querySelector(".artist").textContent = item.artists.join(", ");
        container.appendChild(clone);
    });

    const smallTime = document.createElement('small');
    smallTime.textContent = `Spotify API から取得・${songData.time}時点`;
    container.appendChild(smallTime);
}

populate();
