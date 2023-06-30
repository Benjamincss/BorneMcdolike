<template>
    <div class="menu">
    <Header></Header>
    <h1> Nos menu</h1>
    <h4>Nos burger</h4>
    <div class="grid">
<Card></Card>
<Card></Card>



    </div>


    <div class="grid">
<Card></Card>
<Card></Card>



    </div>
    
  
    </div>

</template>

<script>
import Card from '@/components/Card.vue';
import Header from './Header.vue'

export default {
  components: {
    Card,
    Header
  },
};
</script>


<style>
.grid{
    display: flex;
    justify-content: center;
    align-items: center;
    
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  
}
.menu{
    background-color: black;
    height: 100vh;
}




</style>