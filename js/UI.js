import {row} from './main.js';
export class UI{
  getDetails(id){
    console.log(id);
}
    static displayGames(games){
        let cartona='';
        for (const game of games) {
            cartona+=
            `
            <div class="col-md-6 col-lg-3">
            <div class="card h-100 border-black p-2 bg-transparent" id_card="${game.id}">
              <div class="card-img">
                <img src="${game.thumbnail}" class="card-img-top" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title text-white  d-flex justify-content-between">
                  <span class="bg-transparent">${game.title}</span> 
                  <span class="badge">Free</span>
                </h5>
                <p class="card-text text-white-50 mb-3">${game.short_description}</p>
              </div>
              <div class="card-footer d-flex justify-content-between">
                <span class="badge  text-uppercase">${game.genre}</span>
                <span class="badge">${game.platform}</span>
              </div>
            </div>
          </div>
            `;
        }
        row.innerHTML=cartona;
        
    }
    static getDetails(game){
      let cartona=
      `
        <div class="card mb-3 bg-transparent text-white border-0" >
          <div class="row">
            <div class="d-flex justify-content-between align-items-center">
              <h2 class="card-title mb-3">Details Game</h2>
              <i class="fa-solid fa-xmark fa-2xl text-white-50"></i>
            </div>
            
            <div class="col-md-4">
              <img src="${game.thumbnail}" class="w-100" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body pt-0">
                <h3>title:${game.title}</h3>
                <h4>Category: <span class="badge bg-info text-black text-uppercase">${game.genre}</span></h4>
                <h4>Platform: <span class="badge bg-info text-black">${game.platform}</span></h4>
                <h4>Status: <span class="badge bg-info text-black ">${game.status}</span></h4>
                <p class="card-text">${game.description}</p>
                <a href="${game.freetogame_profile_url}" target="_blank" class="btn btn-outline-warning btn-lg text-white">Show Game</a>
              </div>
            </div>
          </div>
        </div>
      `;
      return cartona;
    }
}


  