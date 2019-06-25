<template>
  <div class="product">
    <strong v-text="product.title"></strong>
    <p>{{product.description}}</p>
    <strong>Fiyat : {{product.price}} | Adet: {{product.count}}</strong>
    <br>
    <button @click="addToCart(product)">Sepete Ekle</button>
  </div>
</template>

<script>
export default {
  //neden default
  props: ["product"],  //prop yöntemiyle roottan child'a gönderilen veri transferi
  methods: {
      addToCart(product){
          this.$emit('addToCart', product); //ile bir event yayarız. Emit Yaymak demek
          //key value şeklinde ekliyoruz. Yakalamak için key kullanılacak. 
          // Orta ölçekli projelerde event bus kullanılır.
          // Büyük projelerde Vuex kullanılır.
      }
  }
};
</script>

<style>
.product {
  border: 2px dashed #666;
  padding: 5px 10px;
  width: 300px;
  margin: 5px;
}

.product:hover {
  border: 2px solid #666;
  transition: all 0.5;
}
</style>
