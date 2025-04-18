<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 La carne
    .row.bg-c1.mb-5
      .col-12
        .px-5.pt-5
          p(data-aos="fade-down") Se considera como carne a la parte comestible de los músculos que están formados por tejidos. Estos se encuentran en diferentes tipos de animales, los más consumidos por el hombre son los mamíferos terrestres, aves y peces.
          .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-right")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Se puede decir que la carne ha estado muy presente en la dieta humana, desde los antepasados, que primero cazaban animales salvajes y a medida que fueron evolucionando los domesticaron para poder disponer con facilidad de este alimento.
          p.mb-5(data-aos="fade-down") La carne posee en su composición una serie de compuestos que aportan nutrientes como proteínas, las cuales contienen aminoácidos esenciales que el hombre necesita para su buen desarrollo, además contiene grasas, carbohidratos, vitaminas y minerales.
          .row.mb-2.ms-0
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Tejidos musculares de la carne
          .row
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              p.mb-0 Los músculos de los seres vivos están formados por tejidos, los cuales están constituidos por fibras musculares. Estas fibras son células fusiformes de múltiple núcleo. Cuando se habla de fusiformes se hace referencia a que están enrolladas como un huso textil, ancho en el centro y angosto en los extremos.
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
              figure
                img(src='@/assets/curso/tema1/img3.svg', alt='', style="width: 300px").m-auto
            .col-lg-5(data-aos="fade-left")
              .row.h-100
                .col-12
                  .p-4.bg-c4.h-100
                    p.mb-0 A la membrana de las fibras musculares se le conoce como #[b sarcolema] y al citoplasma se le denomina #[b sarcoplasma]; donde se encuentran las #[b miofibrillas], que se forman por #[b miosina] y #[b actina]. Estas se muestran como una serie de discos de color claro y oscuro: los claros son elásticos y los oscuros son contráctiles. Los tejidos musculares de la carne también están formados por tejido muscular estriado y tejido muscular liso.
    .row.mb-2.ms-0
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Tejido muscular estriado
    p(data-aos="fade-right") Las células del músculo estriado están formadas por bandas perpendiculares de eje longitudinal y se dividen en #[b músculo esquelético] y #[b músculo cardíaco].
    .row.mb-5
      .col-lg-6.bg-c5(data-aos="fade-right")
        .p-4
          .row.mb-4
            .col-12.bg-c19
              figure
                img(src='@/assets/curso/tema1/img2.png', alt='', style="width: 500px").m-auto
          .row.mb-3
            .col-auto
              .px-3.py-2.bg-c6
                p.mb-0 #[b Músculo esquelético]
          p.mb-0 Se le conoce como voluntario, pues puede producir movimientos conscientes porque está conectado con fibras nerviosas que hacen parte del sistema nervioso central. Estas células son alargadas y fusiformes, además este tejido está asociado al esqueleto y es responsable del movimiento locomotor del animal.
      .col-lg-6.bg-c7(data-aos="fade-left")
        .p-4
          .row.mb-4
            .col-12.bg-c19
              figure
                img(src='@/assets/curso/tema1/img3.png', alt='', style="width: 530px").m-auto
          .row.mb-3
            .col-auto
              .px-3.py-2.bg-c8
                p.mb-0 #[b Músculo cardíaco]
          p.mb-0 El músculo cardíaco está conformado por células mononucleadas que son sistemas complejos de unión intercelular, hacen parte de las paredes musculares del corazón y su función principal es la contracción muscular; Este movimiento está controlado por el sistema nervioso autónomo.
    .row.mb-2.ms-0
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Tejido muscular liso
    p(data-aos="fade-right") El tejido muscular liso es conocido como #[b involuntario y plano], lo conforman células fusiformes sin ramificación y se encuentra en todos los órganos que no requieren movimiento voluntario, como son las arterias, las venas, vísceras, la piel y los vasos sanguíneos, entre otros.
    .row.bg-c1.mb-5
      .col-12
        .px-5
          .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/img4.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Estos músculos representan la parte contráctil de los órganos internos, es decir, son los responsables de que ocurran contracciones en órganos como el tracto intestinal y los vasos sanguíneos. Las fibras que componen a los tejidos musculares lisos son de núcleo individual y de tipo fusiformes.
          .row.mb-2.ms-0
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Componentes del tejido muscular
          p(data-aos="fade-right") El tejido muscular se divide en varios componentes, que en su conjunto conforman el músculo. A continuación, se describe cada uno de ellos:
          .row.justify-content-center
            .col-lg-8(data-aos="fade-left")
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 1.] Estructura del músculo esquelético
              figure
                img(src='@/assets/curso/tema1/img5.png', alt='La figura presenta la estructura del músculo esquelético, mostrando sus componentes principales. Se identifican las capas de tejido conectivo: endomisio, perimisio y epimisio, que rodean las fibras musculares individuales, los fascículos y todo el músculo respectivamente.', style="width: 800px").m-auto
    .row
      .col-3.d-none.d-xl-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img6.png', alt='', style="width: 300px").m-auto
      .col-lg(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Epimisio")
            .col-12
              p.mb-0 Es la capa exterior gruesa del músculo, tiene forma de lámina y está conformado por tejido conectivo. Agrupa las fibras del músculo en secciones o paquetes.
          .row(titulo="Perimisio")
            .col-12
              p.mb-0 Es una cubierta propia de las secciones del músculo, constituida por tejido conectivo que contiene colágeno. En este nivel se almacena la grasa intramuscular.
          .row(titulo="Endomisio")
            .col-12
              p.mb-0 Es el tejido conectivo que cubre las fibras individuales dentro de cada sección del músculo. Junto con el epimisio y el perimisio, forman los tendones que unen los músculos al hueso.
          .row(titulo="Sarcolema")
            .col-12
              p.mb-0 Membrana que cubre cada célula muscular de manera individual. Contiene proteínas y lípidos, regula el flujo de sustancias y tiene capacidad elástica para cambios de forma en la contracción o relajación muscular.
          .row(titulo="Sarcoplasma")
            .col-12
              p.mb-0 Citoplasma que se encuentra en las fibras musculares. Contiene proteínas que fijan el oxígeno transportado por la sangre, lípidos, gránulos de glicógeno y compuestos nitrogenados no proteicos.
          .row(titulo="Miofibrillas")
            .col-12
              p.mb-0 Se encuentran dentro de cada fibra muscular. Son responsables de regular químicamente la contracción y relajación del músculo mediante proteínas liberadas por los miofilamentos.
 
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
