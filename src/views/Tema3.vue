<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Características sensoriales de la carne
    .row.bg-c1.mb-5
      .col-12
        .px-5
          p(data-aos="fade-right") Las características sensoriales de la carne incluyen aspectos como la jugosidad, el aroma, el sabor y la textura. Estas propiedades determinan la calidad percibida por el consumidor y pueden variar según factores intrínsecos y extrínsecos.
          .row.mb-2.ms-0
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 La jugosidad
          p.mb-4(data-aos="fade-right") La jugosidad está relacionada con la cantidad de agua que libera la carne durante el proceso de cocción o masticación. Existen varios factores que influyen en la jugosidad:
          .row.justify-content-center.mb-5
            .col-lg-10(data-aos="fade-down")
              .row
                .col-xl-auto.pe-xl-0.mb-4.mb-xl-0
                  figure
                    img(src='@/assets/curso/tema3/img1.png', alt='', style="width: 360px").m-auto
                .col-xl.bg-c12
                  .row.h-100.align-items-center
                    .col-12
                      .p-4
                        ul.lista-ul--color.mb-0
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[b Temperatura de cocción.] A temperaturas más altas, la carne pierde menos agua, lo que favorece su jugosidad.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[b Edad del animal.] La carne veteada de animales maduros suele ser más jugosa que la de animales jóvenes.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[b Mastiquez.] Cuando se mastica, la carne con menos grasa intramuscular se percibe más seca y rígida.
          .row.mb-2.ms-0
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Aroma y sabor
          p(data-aos="fade-right") El aroma y el sabor son factores fundamentales en la aceptación de la carne. Su desarrollo depende de la combinación de compuestos presentes en la carne y de los cambios químicos que ocurren durante el cocinado.
          .row.justify-content-center
            .col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c16.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema3/img2.png', alt='', style="width: 360px").m-auto
                p.text-center.mb-0 #[b La carne cruda] tiene un sabor metálico similar al de la sangre.
            .col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
              .p-4.bg-c16.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema3/img3.png', alt='', style="width: 360px").m-auto
                p.text-center.mb-0 #[b Durante la cocción], los aminoácidos, péptidos, lípidos y azúcares reaccionan entre sí, generando una gran variedad de compuestos volátiles que determinan el aroma de la carne cocida.
            .col-md-6.col-lg-4(data-aos="fade-left")
              .p-4.bg-c16.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema3/img4.png', alt='', style="width: 360px").m-auto
                p.text-center.mb-0 #[b La grasa intramuscular] influye en el sabor: cuanto mayor sea la cantidad de grasas saturadas, más agradable será la sensación en el paladar.
    .row.bg-c1.mb-5
      .col-12
        .px-5
          .row.mb-2.ms-0
            .col-auto.bg-c20(data-aos="fade-left")
              .row.align-items-center
                .col
                  .p-2
                    h3.mb-0 Mecanismos en la generación del aroma en la carne
          p(data-aos="fade-right") El aroma de la carne se genera a través de diferentes mecanismos:
          .row.justify-content-center.mb-5
            .col-lg-10(data-aos="fade-down")
              .row
                .col-xl-auto.pe-xl-0.mb-4.mb-xl-0
                  figure
                    img(src='@/assets/curso/tema3/img5.png', alt='', style="width: 330px").m-auto
                .col-xl.bg-c15
                  .row.h-100.align-items-center
                    .col-12
                      .p-4
                        ul.lista-ul--color.mb-0
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[b Pirolisis] o degradación térmica de los aminoácidos y péptidos.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[b Caramelización] de los carbohidratos.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[b Reacción de Maillard], que es el principal proceso responsable del aroma de la carne cocida.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[b Degradación térmica de los lípidos.]
          .row.mb-2.ms-0
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Reacción de Maillard
          p(data-aos="fade-right") La #[b Reacción de Maillard] ocurre cuando las proteínas desnaturalizadas se combinan con los azúcares presentes en la carne, formando compuestos volátiles y modificando su color.
          .row.justify-content-center
            .col-lg-10(data-aos="fade-down")
              .row
                .col-xl-auto.pe-xl-0.mb-4.mb-xl-0
                  figure
                    img(src='@/assets/curso/tema3/img6.png', alt='', style="width: 360px").m-auto
                .col-xl.bg-c17
                  .row.h-100.align-items-center
                    .col-12
                      .p-4
                        ul.lista-ul--color.mb-0
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Se da en un amplio rango de temperaturas.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Cuanto mayor es la intensidad del calor, más rápida es la reacción.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Se conoce como #[b oscurecimiento no enzimático] y produce un aroma a caramelo tostado y cárnico.
    p.mb-4(data-aos="fade-right") Los compuestos volátiles generados por la Reacción de Maillard se pueden clasificar en tres grupos:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .row
          .col-xl-auto.pe-xl-0.mb-4.mb-xl-0
            figure
              img(src='@/assets/curso/tema3/img7.png', alt='', style="width: 360px").m-auto
          .col-xl.bg-c17
            .row.h-100.align-items-center
              .col-12
                .p-4
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 #[b Productos de fragmentación de azúcares:] furanos, pironas, ciclopentanos, carbonilos y ácidos.
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 #[b Productos de la degradación de aminoácidos:] aldehídos y compuestos azufrados.
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 #[b Volátiles de reacciones secundarias:] pirroles, piridinas, imidazoles, oxazoles y triazoles.
    .row.bg-c9
      .col-12
        .px-5
          .row.mb-2.ms-0
            .col-auto.bg-c20(data-aos="fade-left")
              .row.align-items-center
                .col
                  .p-2
                    h3.mb-0 Factores que modifican la formación del aroma a carne
          p.mb-4(data-aos="fade-right") El aroma de la carne no depende solo de la concentración de precursores químicos, sino también de diversos factores como:
          .row.justify-content-center.mb-5
            .col-lg-10(data-aos="fade-down")
              .row
                .col-xl-auto.pe-xl-0.mb-4.mb-xl-0
                  figure
                    img(src='@/assets/curso/tema3/img8.png', alt='', style="width: 360px").m-auto
                .col-xl.bg-c17
                  .row.h-100.align-items-center
                    .col-12
                      .p-4
                        ul.lista-ul--color.mb-0
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 pH de la carne.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Especie animal, género y genotipo.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Edad y régimen de producción.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Tipo de alimentación del animal.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Manejo #[i post-mortem] y método de cocción.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Adición de especias, saborizantes y otros aditivos.
          .row.mb-2.ms-0
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Efecto del pH
          p.mb-4(data-aos="fade-right") La formación del aroma depende del pH de la carne:
          .row.justify-content-center.mb-5
            .col-lg-10(data-aos="fade-down")
              .row
                .col-xl-auto.pe-xl-0.mb-4.mb-xl-0
                  figure
                    img(src='@/assets/curso/tema3/img9.png', alt='', style="width: 360px").m-auto
                .col-xl.bg-c17
                  .row.h-100.align-items-center
                    .col-12
                      .p-4
                        ul.lista-ul--color.mb-0
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 A pH #[b bajo], se favorece el reordenamiento de productos de condensación.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 A pH #[b alto], se favorece la formación de reductonas y aldehídos insaturados.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 El descenso del pH #[i post-mortem] es clave en la conversión del músculo a carne.
    p.mb-5(data-aos="fade-right") Si el pH se ve alterado por el manejo ante-mortem y el sacrificio, se pueden obtener carnes #[b pálidas], #[b suaves] y #[b exudativas] o #[b oscuras], #[b firmes] y #[b secas].
    .row.mb-2.ms-0
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Efecto del manejo #[i post-mortem]
    p.mb-4(data-aos="fade-right") El proceso de #[b maduración de la carne] influye en el aroma:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .row
          .col-xl-auto.pe-xl-0.mb-4.mb-xl-0
            figure
              img(src='@/assets/curso/tema3/img10.png', alt='', style="width: 360px").m-auto
          .col-xl.bg-c17
            .row.h-100.align-items-center
              .col-12
                .p-4
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 Durante la maduración, se produce la degradación de proteínas debido a la acción de enzimas como #[b calpaínas] y #[b catepsinas].
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 La maduración mejora la textura, aroma y sabor.
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 Se recomienda un #[b mínimo de siete días] de maduración para una mejor calidad sensorial.
    .row.bg-c9
      .col-12
        .px-5
          .row.mb-2.ms-0
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Efecto de los antioxidantes naturales
          p.mb-4(data-aos="fade-right") Algunos compuestos antioxidantes presentes en la carne, como el #[b alfa-tocoferol (vitamina E)], pueden influir en la estabilidad del aroma.
          .row.mb-5
            .col-md-6.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c18
                .row.align-items-center
                  .col-lg-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema3/img11.png', alt='', style="width: 160px").m-auto
                  .col
                    p.mb-0 Los #[b tocoferoles] reducen la oxidación de lípidos y prolongan la estabilidad del aroma.
            .col-md-6(data-aos="fade-left")
              .p-4.bg-c18
                .row.align-items-center
                  .col-lg-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema3/img12.png', alt='', style="width: 160px").m-auto
                  .col
                    p.mb-0 En concentraciones altas, pueden actuar como pro-oxidantes y acelerar la rancidez.
          .row.mb-2.ms-0
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Textura
          p(data-aos="fade-right") La textura de la carne es una de las características más complejas, ya que varía de un músculo a otro dentro del mismo animal. Depende de varios factores estructurales y químicos:
    .row.bg-c1
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10(data-aos="fade-down")
              .row
                .col-xl-auto.pe-xl-0.mb-4.mb-xl-0
                  figure
                    img(src='@/assets/curso/tema3/img13.png', alt='', style="width: 360px").m-auto
                .col-xl.bg-c17
                  .row.h-100.align-items-center
                    .col-12
                      .p-4
                        ul.lista-ul--color.mb-0
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[b Cantidad de tejido conectivo:] mayor cantidad de colágeno y elastina incrementa la dureza.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[b Estado de las fibras musculares:] si la carne está en #[b rigor mortis], será más dura.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[b Edad del animal al sacrificio:] a mayor edad, mayor grosor de las fibras musculares y mayor cantidad de tejido conjuntivo.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[b Sexo y alimentación del animal:] pueden afectar la textura.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[b Método de enfriamiento:] la congelación rápida puede endurecer la carne si se realiza antes del rigor mortis.
          .row.mb-2.ms-0
            .col-auto.bg-c20(data-aos="fade-left")
              .row.align-items-center
                .col
                  .p-2
                    h3.mb-0 Textura de la carne para el consumo directo
          p.mb-4(data-aos="fade-right") El concepto de ternura se asocia con la facilidad para cortar y masticar la carne. Esta se puede mejorar mediante:
          .row.justify-content-center
            .col-lg-10(data-aos="fade-down")
              .row
                .col-xl-auto.pe-xl-0.mb-4.mb-xl-0
                  figure
                    img(src='@/assets/curso/tema3/img14.png', alt='', style="width: 360px").m-auto
                .col-xl.bg-c17
                  .row.h-100.align-items-center
                    .col-12
                      .p-4
                        ul.lista-ul--color.mb-0
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[b Maduración:] proceso en el que las proteínas musculares se degradan para ablandar la carne.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[b Control del pH:] un pH óptimo favorece la conversión del músculo a carne tierna.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[b Uso de enzimas proteolíticas:] en algunos casos, se inyectan fermentos proteolíticos antes del sacrificio para mejorar la ternura (por ejemplo, en bovinos).

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
