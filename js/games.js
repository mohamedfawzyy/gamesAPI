export class showGames{

    static createMainPage(){
        let cartona=
        `
        <section id="home" class="d-block">
        <header class="">
        </header>
        <nav class="navbar navbar-expand-lg text-white w-75 mx-auto rounded-4 z-3">
          <div class="container">
            <a class="navbar-brand text-white" href="index.html">
              <img src="./images/logo-sm.png" width="50px" alt="" />
              <span>GAME REVIEWS</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">mmorpg</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">shooter</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">sailing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">permadeath</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">superhero</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">pixel</a>
                </li>
              </ul>
            </div>
          </div>
        </nav> 
          <div class="container py-3">
            <div class="row gy-4">
            </div>
          </div>
      </section>
        `;
        return cartona;
    }
}