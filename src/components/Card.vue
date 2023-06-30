<template>
  <div class="box">
    <div class="image">
      <img src="https://d1ralsognjng37.cloudfront.net/267aa202-db78-4b9a-9278-2f3b60b93e4f.jpeg" alt="" />

    </div>

    <div class="note">
      <h1>Subway</h1>
      <div class="description">
        <h3>20-30 min</h3>
        <div class="tag">
        <h3>4,5</h3>
        </div>
      </div>
    </div>
  </div>
</template>











<style>
.box {
  width: 320px;
  margin-right: 10px;
  margin-top: 10px;

  
 
  
  
}

.image {
  width: 100%;
  text-align: center;
}

.image img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.note {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
}

.description {
  display: flex;
  justify-content: space-between;



}

.description h3{
    margin-right: 30px;
    margin-top: 0px;
}

.tag{
    background-color: red;
  display: flex;
  border-radius: 20px;
  width: 30px;
  height: 30px;

  margin: auto;

}

</style>
