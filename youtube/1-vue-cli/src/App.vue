<template>
  <div class="container">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MyComp/>
    <MyComp/>
    <br>
    <br>
    <div style="width:100%;">
      <h3>Sepet</h3>
      <ul>
        <li v-for="item in cartItems" :key="item.id" v-text="item.title"></li>
      </ul>
      <p v-show="cartItems.length == 0">Sepetiniz boştur. Hemen alışverişe başlayabilirsiniz.</p>
    </div>
    <br>
    <br>

    <Prd
      @addToCart="cartItems.push($event)"
      :product="urun"
      v-for="urun in productList"
      :key="urun.title"
    />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MainContainer from "@/components/MainContainer"; //içinden export edilenleri bana ver.
import Prdct from "@/components/Product";

export default {
  components: {
    HelloWorld, //import edilenlerden component olanlar.
    MyComp: MainContainer, //myComp mahlasıyla kullanacağım.
    Prd: Prdct
  },
  data() {
    return {
      productList: [
        {
          id: 1,
          title: "MacBook Pro",
          price: 100,
          count: 0,
          description: "açıklama 1"
        },
        {
          id: 2,
          title: "iPhone",
          price: 50,
          count: 100,
          description: "açıklama 2"
        },
        {
          id: 3,
          title: "Klavye",
          price: 10,
          count: 1000,
          description: "açıklama 3"
        }
      ],
      cartItems: []
    };
  }
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
