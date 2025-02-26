<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Composición química de la carne
    .row.bg-c9
      .col-12
        .px-5.pt-5
          .row(data-aos="fade-down")
            .col-lg.bg-c6.order-2.order-lg-1
              .row.h-100.align-items-center
                .col-12
                  .p-4
                    p.mb-0 La carne está constituida por diversos compuestos, de los cuales el agua es el más abundante, representando más del 70 % de su estructura. Le siguen las proteínas, que constituyen aproximadamente 20 %, y la grasa intermuscular, que no supera el 3 %. El resto de los componentes incluyen sales, vitaminas y carbohidratos
            .col-lg-auto.order-1.order-lg-2.ps-lg-0.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img1.svg', alt='', style="width: 360px").m-auto
          Separador
          #t_2_1
          .titulo-segundo.color-acento-contenido
            h2 2.1. Proteínas
          p(data-aos="fade-right") Las proteínas cárnicas son fundamentales en los cambios post-mortem y en la transformación de músculo a carne. Son los principales constituyentes de la materia seca del músculo estriado y desempeñan un papel crucial en la dieta humana.
          p.mb-5(data-aos="fade-right") En la composición química de la carne se pueden encontrar varios tipos de proteínas:
          .row.mb-2.ms-0
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Proteína de estroma
          p(data-aos="fade-right") Las proteínas de estroma son insolubles (colágeno, elastina) y constituyen aproximadamente 15 % del total de las proteínas. Forman parte del tejido conectivo del músculo y están asociadas a la dureza de la carne.
          .row.justify-content-center
            .col-md-8.col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c10
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema2/img2.png', alt='', style="width: 160px").m-auto
                  .col
                    p.text-white #[b Colágeno]
                    p.text-white.mb-0 Proporciona resistencia a los músculos y facilita las contracciones. La cantidad de colágeno en los músculos varía según la cantidad de tejido conectivo y el nivel de actividad muscular del animal.
            .col-md-8.col-lg-6(data-aos="fade-left")
              .p-4.bg-c11
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema2/img3.png', alt='', style="width: 160px").m-auto
                  .col
                    p.text-white #[b Elastina]
                    p.text-white.mb-0 Es parte del tejido conectivo y se encuentra en arterias y ligamentos. No tiene valor nutricional significativo, ya que es difícil de digerir y contiene pocos aminoácidos.
    .row.bg-c9.mb-0
      .col-12
        .px-5.pt-5
          .row.mb-2.ms-0
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Proteínas sarcoplásmicas
          p(data-aos="fade-right") Estas proteínas son solubles en agua y se encuentran en el citoplasma celular. La más relevante es la globulina (albúmina).
          .row.justify-content-center.mb-4
            .col-lg-10(data-aos="fade-down")
              .row
                .col-xl-auto.pe-xl-0.mb-4.mb-xl-0
                  figure
                    img(src='@/assets/curso/tema2/img4.png', alt='', style="width: 360px").m-auto
                .col-xl.bg-c12
                  .row.h-100.align-items-center
                    .col-12
                      .p-4
                        ul.lista-ul--color.mb-0
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Una de las principales proteínas sarcoplásmicas es la mioglobina, una heteroproteína compuesta por un grupo hemo y una molécula de globina. Su función es estabilizar los puentes de hidrógeno, permitiendo interacciones hidrofóbicas.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 La mioglobina es la responsable del color rojo de la carne. Su concentración varía según la especie, edad y nivel de ejercicio del animal.
          p(data-aos="fade-right") #[b Las concentraciones de mioglobina en diferentes tipos de carne son:]
          .row.justify-content-center.mb-5
            .col-md-7.col-lg-3.mb-3.mb-lg-0(data-aos="fade-right")
              .p-3.bg-c6.h-100
                p.mb-0 Carnes oscuras:
                p.mb-0 #[b 4 a 10 mg/gramo de tejido húmedo.]
            .col-md-7.col-lg-3.mb-3.mb-lg-0(data-aos="fade-up")
              .p-3.bg-c6.h-100
                p.mb-0 Carnes viejas:
                p.mb-0 #[b 20 mg/gramo]
            .col-md-7.col-lg-3(data-aos="fade-left")
              .p-3.bg-c6.h-100
                p.mb-0 Carnes blancas (ternera y cerdo):
                p.mb-0 #[b 3 mg/gramo]
          .row.mb-2.ms-0
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Proteínas miofibrilares
    p(data-aos="fade-right") Las proteínas miofibrilares son insolubles y constituyen aproximadamente 50 % de las proteínas musculares. Son responsables de la contracción muscular y de la textura de la carne.
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-down")
        .row
          .col-xl-auto.pe-xl-0.mb-4.mb-xl-0
            figure
              img(src='@/assets/curso/tema2/img5.png', alt='', style="width: 360px").m-auto
          .col-xl.bg-c13
            .row.h-100.align-items-center
              .col-12
                .p-4
                  ul.lista-ul--color.mb-0
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 Miosina y actina: proteínas contráctiles que permiten la conversión de energía química en energía cinética.
                    li.d-flex
                      i.far.fa-arrow-alt-circle-right
                      |
                      p.mb-0 Troponinas y tropomiosinas: reguladoras de la contracción muscular.
    p(data-aos="fade-right") Estas proteínas pueden formar emulsiones entre agua y grasa durante la cocción, lo que es fundamental en la elaboración de productos cárnicos cocidos. La miosina es la proteína más funcional en este proceso.
    .row.bg-c1
      .col-12
        .px-5.pt-5
          .row.mb-2.ms-0
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Funciones de las proteínas cárnicas
          p(data-aos="fade-right") Las proteínas presentes en la carne desempeñan varias funciones clave:
          .row.justify-content-center
            .col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c4.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema2/img2.svg', alt='', style="width: 100px").m-auto
                p.mb-0 #[b Aportan cohesión] a los productos cárnicos procesados, facilitando la formación de emulsiones.
            .col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
              .p-4.bg-c4.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema2/img3.svg', alt='', style="width: 100px").m-auto
                p.mb-0 Permiten la coagulación de las proteínas, formando geles.
            .col-md-6.col-lg-4(data-aos="fade-left")
              .p-4.bg-c4.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema2/img4.svg', alt='', style="width: 100px").m-auto
                p.mb-0 Tienen capacidad de retención de agua, lo que influye en la jugosidad y textura de la carne.
          Separador
          #t_2_2
          .titulo-segundo.color-acento-contenido
            h2 2.2. El agua
    p(data-aos="fade-right") El agua constituye aproximadamente el 75 % de la carne, desempeñando un papel fundamental en su textura y jugosidad. En este pódcast, se analizará cómo se distribuye en el tejido muscular y de qué manera influye en la calidad del producto final. Además, se explicará cómo el agua se retiene en la carne, cómo se libera durante la cocción y qué factores pueden afectar su conservación.
    .row.justify-content-center.align-items-center
      .col-md-9.col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c14
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img5.svg', alt='', style="width: 230px").m-auto
            .col
              p.text-white #[b Pódcast]
              p.text-white Lo invitamos a escuchar el siguiente Pódcast:
              .tarjeta
                TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                texto="El agua en la carne: su distribución e impacto en la calidad"
                :audio="require('@/assets/curso/tema2/1.mp3')"
              )
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img6.png', alt='', style="width: 450px").m-auto
    Separador
    .row.bg-c9
      .col-12
        .px-5
          #t_2_3
          .titulo-segundo.color-acento-contenido
            h3 2.3. Grasas
          p(data-aos="fade-right") Las grasas de la carne están compuestas por carbono, hidrógeno y oxígeno. Son fundamentales para la jugosidad, el sabor y la textura de la carne. Las grasas animales están presentes en un 70 % en forma de triglicéridos, conocidos como grasa verdadera. El 30 % restante se compone de fosfolípidos y colesterol. Los principales ácidos grasos en la carne incluyen:
          .row.justify-content-center.mb-4
            .col-lg-5.mb-4.mb-lg-0.me-lg-4(data-aos="fade-right")
              .row.justify-content-center
                .col-10.col-md-auto.px-0
                  figure
                    img(src='@/assets/curso/tema2/img7.png', alt='', style="width: 290px").m-auto
                .col-10.col-md.bg-c6
                  .row.h-100.align-items-center
                    .col-12
                      .p-4
                        p.mb-0 #[b Saturados]
                        p.mb-0 Ácido palmítico y ácido esteárico.
            .col-lg-5(data-aos="fade-left")
              .row.justify-content-center
                .col-10.col-md-auto.px-0
                  figure
                    img(src='@/assets/curso/tema2/img8.png', alt='', style="width: 290px").m-auto
                .col-10.col-md.bg-c15
                  .row.h-100.align-items-center
                    .col-12
                      .p-4
                        p.mb-0 #[b Insaturados]
                        p.mb-0 Ácido oleico y ácido linoleico.
          p.mb-4(data-aos="fade-right") #[b La carne de cerdo es rica en ácidos grasos insaturados, lo que la hace más susceptible a la oxidación. Las grasas pueden clasificarse en:]
          .row.justify-content-center.mb-4
            .col-lg-10(data-aos="fade-down")
              .row
                .col-lg.bg-c12.mb-4.mb-lg-0
                  .row.h-100.align-items-center
                    .col-12
                      .p-4
                        ul.lista-ul--color.mb-0
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Sólidas (sebos).
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Semisólidas (mantecas).
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 Líquidas (aceites).
                .col-lg-auto.ps-lg-0
                  figure
                    img(src='@/assets/curso/tema2/img9.png', alt='', style="width: 500px").m-auto
    p(data-aos="fade-right") #[b La siguiente tabla presenta los porcentajes de ácidos grasos en diferentes tipos de carne:]
    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
          p.mb-0 #[b Tabla 1.] Porcentaje de grasa en las carnes
        .tabla-a.color-acento-contenido(data-aos="fade-left")
          table
            thead
              tr
                th Carnes
                th Saturados (%)
                th Monoinsaturados (%)
                th Poliinsaturados (%)
            tbody
              tr
                td Cerdo
                td 50
                td 39
                td 11
              tr
                td Res
                td 46.5
                td 50
                td 3.5
              tr
                td Pollo
                td 30
                td 42
                td 28
    Separador
    #t_2_4
    .titulo-segundo.color-acento-contenido
      h2 2.4. Carbohidratos
    p(data-aos="fade-right") Los azúcares presentes en la carne incluyen #[b glucógeno] y #[b ácido láctico], que representan #[b aproximadamente] el #[b 1 %] del peso de la carne.
    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        .row
          .col-xl-auto.pe-xl-0.mb-4.mb-xl-0
            figure
              img(src='@/assets/curso/tema2/img10.png', alt='', style="width: 360px").m-auto
          .col-xl.bg-c12
            .row.h-100.align-items-center
              .col-12
                .p-4
                  p.mb-0 El #[b glucógeno] es el principal carbohidrato y está compuesto por #[b glucosa] y #[b fructosa]. Se encuentra en músculos e hígado y, tras el sacrificio del animal, se transforma en ácido láctico debido a condiciones anaeróbicas.
    Separador
    #t_2_5
    .titulo-segundo.color-acento-contenido
      h2 2.5. Vitaminas
    .row.bg-c1
      .col-12
        .px-5
          p(data-aos="fade-right") Las vitaminas presentes en la carne dependen de la alimentación y edad del animal.
          .row.justify-content-center.mb-4
            .col-lg-10(data-aos="fade-down")
              .row
                .col-xl-auto.pe-xl-0.mb-4.mb-xl-0
                  figure
                    img(src='@/assets/curso/tema2/img11.png', alt='', style="width: 360px").m-auto
                .col-xl.bg-c12
                  .row.h-100.align-items-center
                    .col-12
                      .p-4
                        ul.lista-ul--color.mb-0
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[b Vitaminas A y C:] tienden a perderse durante la cocción.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[b Vitaminas D, E y K:] se encuentran en menores cantidades.
                          li.d-flex
                            i.far.fa-arrow-alt-circle-right
                            |
                            p.mb-0 #[b Vitaminas B1 y B6:] son termolábiles y se alteran con el calor.
          p(data-aos="fade-right") Procesos como curado, ahumado, deshidratación y enlatado pueden afectar la estabilidad de estas vitaminas.
          Separador
          #t_2_6
          .titulo-segundo.color-acento-contenido
            h2 2.6. Minerales
          p.mb-4(data-aos="fade-right") Los minerales juegan un papel importante en la conversión del músculo en carne.
          .row.justify-content-center.mb-4
            .col-md-5.col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c15.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema2/img12.png', alt='', style="width: 200px").m-auto
                p #[b Calcio y magnesio:] intervienen en la dureza de la carne y en la contracción muscular post-mortem.
            .col-md-5.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
              .p-4.bg-c15.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema2/img13.png', alt='', style="width: 200px").m-auto
                p #[b Hierro:] presente en la hemoglobina y la mioglobina.
            .col-md-5.col-lg-3(data-aos="fade-left")
              .p-4.bg-c15.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema2/img14.png', alt='', style="width: 200px").m-auto
                p #[b Zinc], #[b yodo], #[b silicio], #[b cobre] y #[b sodio]: tienen funciones específicas en la estabilidad y retención de agua en la carne.
          p(data-aos="fade-right") El contenido mineral de la carne puede cambiar durante la cocción, y algunos iones (hierro, cobre, manganeso y cobalto) pueden acelerar la oxidación de las grasas, aumentando la rancidez durante el almacenamiento.

</template>

<script>
export default {
  name: 'Tema2',
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
