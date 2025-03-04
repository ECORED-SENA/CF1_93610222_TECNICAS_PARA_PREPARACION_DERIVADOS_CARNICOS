<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5.pt-5
          p(data-aos="fade-down") La carne es un alimento fundamental en la dieta humana debido a su alto contenido de proteínas, grasas, vitaminas y minerales esenciales. Su composición varía según la especie animal, la edad y el manejo #[i post-mortem], lo que influye en sus características sensoriales y nutricionales. Comprender su estructura y propiedades permite optimizar su calidad para el consumo.
          .row.align-items-center.mb-4
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              .p-4.bg-c2
                p.mb-0 Desde una perspectiva fisiológica, la carne está compuesta por diferentes tipos de tejidos musculares, cada uno con funciones específicas. La interacción de sus proteínas y otros compuestos influye en su textura, jugosidad y capacidad de retención de agua. Estos factores son clave en la industria cárnica, donde la calidad del producto final depende del manejo adecuado de estos elementos.
            .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src='@/assets/curso/intro/img2.png', alt='', style="width: 400px").m-auto
          .row.align-items-center(data-aos="fade-down")
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/intro/img1.svg', alt='', style="width: 100px").m-auto
            .col
              p.mb-0 Además de su valor nutricional, la carne es apreciada por sus atributos sensoriales, como aroma y sabor, los cuales se desarrollan a través de reacciones químicas durante la cocción. Factores como la maduración, el pH y la alimentación del animal afectan estos atributos, determinando la aceptación del producto por parte del consumidor y su aplicación en diferentes preparaciones gastronómicas.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
