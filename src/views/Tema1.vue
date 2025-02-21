<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 1
      h1 La carne
    .row.bg-c1.mb-5
      .col-12
        .px-5.pt-5
          p Se considera como carne a la parte comestible de los músculos que están formados por tejidos. Estos se encuentran en diferentes tipos de animales, los más consumidos por el hombre son los mamíferos terrestres, aves y peces.
          .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Se puede decir que la carne ha estado muy presente en la dieta humana, desde los antepasados, que primero cazaban animales salvajes y a medida que fueron evolucionando los domesticaron para poder disponer con facilidad de este alimento.
          p.mb-5 La carne posee en su composición una serie de compuestos que aportan nutrientes como proteínas, las cuales contienen aminoácidos esenciales que el hombre necesita para su buen desarrollo, además contiene grasas, carbohidratos, vitaminas y minerales.
          .row.mb-2.ms-0
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Tejidos musculares de la carne
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
