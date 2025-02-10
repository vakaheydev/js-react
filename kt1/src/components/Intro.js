import Dino from "../images/dino.png";

export default function IntroText() {
    return (
        <div class="intro-container">
            <div class="text-container">
                <h1>Веломастерская "Велозар"</h1>
                <p>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
            </div>
            <img class="dino-img" src={Dino} alt="Bike"/>
        </div>

    )
}