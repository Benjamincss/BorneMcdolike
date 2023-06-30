<script >
export default{
    name: 'App',
}

</script>

<template>
 <RouterView></RouterView>
  </template>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  .card-container {
    display: flex;
    flex-direction: column-reverse;
  }

  </style>
  