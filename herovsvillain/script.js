window.addEventListener("DOMContentLoaded", () => {
    const heroName= prompt ("Hero Name");
    const villainName= prompt ("Villain Name");

    const hero = new Hero(heroName);
    const villain = new Villain(villainName);

     const heroWeapon = new Weapon('MetalClaws');
     const villainWeapon = new Weapon('Time Stop');




function update() {
document.getElementById("heroContainer").innerHTML=hero.render();
document.getElementById("villainContainer").innerHTML=villain.render();


        if(hero.health <1) {
            alert("Game Over")
        }
        if(villain.health <1) {
            alert("Victory")
        }
    }

     hero.equipWeapon(heroWeapon);
     villain.equipWeapon(villainWeapon);


    
     update();

     document.getElementById("heroButton").addEventListener("click", () => {
        hero.attack(villain);
        update();
    });

    document.getElementById("villainButton").addEventListener("click", () => {
        villain.attack(hero);
        update();
    });

/*let heroPower = document.getElementById("heroPower");
heroPower.innerText(this.heroWeapon);
let villainPower = document.getElementById("villainPower");
villainPower.innerText(this.villainWeapon);*/
});

