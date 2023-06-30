<template>

<div class="home">

    <div class="text">
        <h1> Order Here </h1>
        
    </div>
     
  

    
    <router-link class="button" @mouseover="blurBackground()" @mouseout="unblurBackground()" to="/Homescreen" tag="button">
  Slide to start
</router-link>




</div>





</template>


<script setup>

function blurBackground() {
    var home = document.querySelector('.home');
    home.classList.add('blur');
}

function unblurBackground() {
    var home = document.querySelector('.home');
    home.classList.remove('blur');
}



</script>


<style>
body {
    margin: 0; /* Supprime les marges par défaut du navigateur */
    padding: 0; /* Supprime le remplissage par défaut du navigateur */
    overflow: hidden; /* Empêche le défilement vertical de la page */
}

.home {
    background-image: url("https://www.grazia.fr/wp-content/uploads/grazia/2021/07/burger-plus-cher-monde-decouvrez-recette-prix-sandwich-luxe.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: backdrop-filter 0.5s;
}

.button {
        display: inline-block;
        border-radius: 4px;
        background-color: #f05155;
        border: none;
        color: #FFFFFF;
        text-align: center;
        font-size: 28px;
        padding: 20px;
        width: 200px;
        transition: all 0.5s;
        cursor: pointer;
        margin: 5px;
        border-radius: 20px;
        text-decoration: none;
        ;
    }

    .button a {
        text-decoration: none;
        color: #FFFFFF;
    }



    .button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover {
  padding-right: 5px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}





.text{
    font-size: 90px;
    color: cornsilk;
    font-weight: 400;
    display: flexbox;
    align-items: center;
    text-align: center;
}
.blur {
    background-image: url("https://www.grazia.fr/wp-content/uploads/grazia/2021/07/burger-plus-cher-monde-decouvrez-recette-prix-sandwich-luxe.jpg");
    filter: blur(1px);
    
}

</style>