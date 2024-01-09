export class details{
    static createDetails(gamedetails){
        let cartona=
        `
        <section id="details" class="py-3 d-block">
        <div class="container">
        ${gamedetails}
        </div>
        </section>
        `;
    return cartona;
    }
}