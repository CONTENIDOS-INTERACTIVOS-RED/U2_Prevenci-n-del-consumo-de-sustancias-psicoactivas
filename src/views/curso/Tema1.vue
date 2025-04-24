<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Tipos de sustancias psicoactivas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-azul.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") Como hemos estudiado a lo largo de esta asignatura y, principalmente en la unidad 1, las sustancias psicoactivas han generado un sinnúmero de perjuicios a los seres humanos; sin embargo, al hablar de sustancias psicoactivas, debemos comprender y repasar nuevamente los tipos de sustancias que existen, para tener una mayor claridad de estas.
    
    p.mb-4 Las sustancias psicoactivas son compuestos químicos que, al ser consumidos, afectan el funcionamiento del sistema nervioso central, alterando así la percepción, el estado de ánimo, la cognición y el comportamiento. Estas sustancias se clasifican en varias categorías, cada una con características y efectos específicos.
    p.mb-4 Entre los tipos más comunes de sustancias psicoactivas, se encuentran:
    ImagenInfografica.color-secundario.mb-4.bg-white
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-7.png', alt='Descripción de la imagen')
      .tarjeta.bg-white.p-4(x='30.5%' y='73.8%' numero='+')
        .h5.mb-2 Estimulantes
        p Estas sustancias aumentan la actividad del sistema nervioso central. Ejemplos incluyen la cafeína, la nicotina, la anfetamina y la cocaína. Los estimulantes pueden provocar euforia, aumento de energía y concentración, pero también pueden llevar a la ansiedad y problemas cardíacos.
      .tarjeta.bg-white.p-4(x='33%' y='37%' numero='+')
        .h5.mb-2 Depresores 
        p Contrariamente a los estimulantes, los depresores disminuyen la actividad del sistema nervioso central. El alcohol, los barbitúricos y las benzodiazepinas, son ejemplos de depresores. Su consumo puede inducir relajación y somnolencia, pero también puede resultar en dependencia y problemas respiratorios en dosis altas.
      .tarjeta.bg-white.p-4(x='49.7%' y='11.5%' numero='+')
        .h5.mb-2 Alucinógenos
        p Estas sustancias alteran la percepción y pueden provocar alucinaciones. El LSD, la psilocibina (hongos mágicos) y la mescalina, son ejemplos de alucinógenos. Su uso puede llevar a experiencias profundas y creativas, pero también a episodios de ansiedad aguda y trastornos psicológicos.
      .tarjeta.bg-white.p-4(x='66.3%' y='36.3%' numero='+')
        .h5.mb-2 Opioides
        p Incluyen sustancias como la morfina, la heroína y la oxicodona. Actúan sobre los receptores del dolor en el cerebro y pueden inducir sentimientos de euforia y analgesia. Sin embargo, su consumo conlleva un alto riesgo de adicción y sobredosis.
      .tarjeta.bg-white.p-4(x='68.8%' y='73.8%' numero='+')
        .h5.mb-2 Cannabis
        p Aunque a menudo se considera una droga recreativa, el cannabis tiene propiedades tanto estimulantes como depresoras. Puede provocar relajación, euforia y alteraciones en la percepción del tiempo y el espacio. Su uso, especialmente en adolescentes, ha sido objeto de debate, debido a sus posibles efectos a largo plazo, sobre la salud mental.
    
    .d-flex.align-items-start.bg-morado-oscuro.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
      img.me-3(style='width: 100px' src='@/assets/curso/unidad/img-8.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0.text-white Estas sustancias son las que podemos clasificar principales, dado que existen otros tipos de sustancias pero nos enfocaremos en las que han tenido mayor relevancia a lo largo de la historia, por haber causado un impacto, en el individuo, en la familia y en la sociedad.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Impacto en el individuo

    p.mb-4 El impacto del consumo de sustancias psicoactivas en el individuo, es un fenómeno complejo que trasciende la búsqueda inicial de placer o alivio emocional. Aunque muchas personas inician este comportamiento con la esperanza de escapar de problemas personales o experimentar sensaciones gratificantes, el uso frecuente de estas sustancias puede desencadenar una serie de consecuencias negativas, que afectan profundamente la vida del individuo.

    p.mb-4 A continuación, conozcamos más sobre este impacto en el individuo:

    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Primer tema
              p Uno de los efectos más visibles del consumo de sustancias es el deterioro físico. La salud del individuo puede verse gravemente comprometida, manifestándose en enfermedades hepáticas, pulmonares y cardiovasculares, entre otras. Además, el riesgo de desarrollar trastornos mentales se incrementa notablemente, con la aparición de condiciones como la depresión, la ansiedad y la psicosis, que pueden agravar aún más, la situación personal de quien consume.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Segundo tema
              p La adicción se presenta como una de las consecuencias más devastadoras de este patrón de consumo. La dependencia, tanto física como psicológica, no solo limita la capacidad del individuo para llevar una vida plena, sino que también dificulta enormemente el proceso de recuperación. Muchas personas atrapadas en este ciclo, encuentran que necesitan intervención médica y psicológica para lograr deshacerse de las cadenas de la adicción, lo que puede ser un camino desafiante y prolongado.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Tercer tema
              p Además, el impacto del consumo de sustancias se extiende más allá de la salud personal y se traduce en un rendimiento laboral o académico deteriorado. La incapacidad para concentrarse, cumplir con responsabilidades y mantener un compromiso constante, puede resultar en la pérdida de oportunidades tanto en el ámbito personal como profesional. Esta reducción en el desempeño, puede crear un ciclo vicioso, donde el fracaso y la frustración alimentan aún más, el consumo de sustancias, como un mecanismo de afrontamiento.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Cuarto tema
              p El impacto del consumo de sustancias psicoactivas en el individuo, es multifacético, abarcando desde el deterioro de la salud física y mental, hasta la reducción de oportunidades de desarrollo personal y profesional. La lucha contra la adicción es una batalla ardua que requiere comprensión, apoyo y tratamiento adecuado, resaltando la importancia de abordar este pr oblema, de manera integral.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')

    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 Impacto en la familia

    p.mb-4 Para conocer esta temática, lo invitamos a ver el siguiente video.

    .row.bg-fondo-slider.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        figure
          .video
            <iframe width="1246" height="701" src="https://www.youtube.com/embed/RzcFTdLXGDY" title="Bienvenida asignatura Prevención de sustancias psicoactivas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    #t_1_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.3
        h2 Impacto en la sociedad

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-14.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 El consumo de sustancias psicoactivas es un fenómeno complejo que afecta a diversas capas de la sociedad, generando una serie de consecuencias que trascienden el ámbito individual y se extienden a las comunidades y las naciones. La problemática de las drogas no se limita únicamente al uso y abuso de sustancias, sino que también incluye su comercialización, los esfuerzos de regulación y control, así como las respuestas sociales y políticas que se implementan para abordar este desafío. En este contexto, se profundizará en el impacto económico y social que tiene el consumo de sustancias psicoactivas, así como en los estigmas asociados y las consecuencias a largo plazo, para los individuos y la sociedad en su conjunto.

    #t_1_4.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.4
        h2 Costos económicos del consumo de sustancias psicoactivas

    p.mb-4 Uno de los aspectos más visibles del consumo de sustancias psicoactivas, es su impacto económico. En términos de atención médica, los costos son abrumadores. Las estadísticas muestran que los gastos en tratamiento de adicciones, rehabilitación y servicios de salud mental, han aumentado de manera alarmante en las últimas décadas. Los hospitales y clínicas se ven abrumados por la demanda de atención para problemas relacionados con el abuso de sustancias, lo que a su vez lleva a un aumento en los precios de los servicios de salud. Esto no solo afecta a los individuos que luchan contra la adicción, sino también a las familias que deben asumir la carga financiera de la atención médica.

    .row.mb-4
      .col-12.col-xl-8
        .row.bg-rojo.p-4.pb-xl-0.mb-4
          .col-3.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
          .col-12.col-xl-9.d-flex
            p.my-auto.pb-xl-4 la relación entre el consumo de drogas y el crimen, es innegable. El tráfico de drogas, así como los delitos asociados al consumo, generan una carga adicional para el sistema judicial y de seguridad pública. 
        span La policía, los tribunales y las cárceles, se ven inundados por casos relacionados con el narcotráfico y la violencia asociada. Esto implica un uso intensivo de recursos que podrían destinarse a otros sectores importantes, como la educación o la infraestructura. La necesidad de combatir el crimen relacionado con las drogas, también lleva a gastos significativos en programas de prevención y control, que, aunque necesarios, son costosos y requieren un enfoque sostenido y multidimensional.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')

    #t_1_5.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.5
        h2 Estigmatización y marginalización social

    .row.mb-4
      .col-10.col-lg-6.col-xl-4.mx-auto.bg-azul.p-4.d-flex(data-aos='fade-up')
        span Otro aspecto crítico del consumo de sustancias psicoactivas, es el estigma que rodea a los consumidores. Aquellos que luchan con la adicción, muchas veces enfrentan juicios y discriminación, lo que puede resultar en su marginación en la sociedad. Este estigma no solo afecta la autoestima y la salud mental de los individuos, sino que también crea barreras significativas para su reintegración social. El miedo al juicio y a la discriminación, puede disuadir a muchas personas de buscar la ayuda que necesitan, perpetuando así un ciclo de pobreza, exclusión social y desesperanza.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
      .col-10.col-lg-6.col-xl-4.mx-auto.bg-morado.p-4.d-flex(data-aos='fade-up')
        span Las comunidades que sufren de alta prevalencia de consumo de sustancias psicoactivas, normalmente son vistas como lugares problemáticos, lo que puede llevar a una falta de inversión en esos barrios. La marginalización puede manifestarse en la disminución de oportunidades de empleo, la restricción del acceso a la educación y la falta de atención médica adecuada. Este ciclo de exclusión puede ser difícil de romper, puesto que las oportunidades limitadas perpetúan la pobreza, lo que a su vez puede aumentar la vulnerabilidad al consumo de sustancias.

    #t_1_6.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.6
        h2 Consecuencias a largo plazo, para la sociedad

    p.mb-4 El impacto del consumo de sustancias psicoactivas no se limita a los individuos que las consumen, sino que tiene repercusiones, a largo plazo, para la sociedad en su conjunto. La salud pública se ve comprometida cuando un segmento significativo de la población enfrenta problemas de adicción.

    .row.mb-5
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 Esto se traduce en una disminución general en la calidad de vida, así como en la productividad laboral. La incapacidad de los individuos para participar plenamente en la fuerza laboral, puede afectar significativamente la economía de una región.
        .d-flex.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-19.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Asimismo, el consumo de sustancias también puede llevar a una generación de jóvenes que crecen en entornos desestabilizados por la adicción y la violencia. Estos niños y adolescentes, son más propensos a experimentar traumas, lo que puede tener efectos duraderos en su desarrollo emocional y psicológico. La falta de oportunidades y el acceso limitado a recursos educativos, pueden perpetuar el ciclo de pobreza y exclusión, creando un escenario en el que las futuras generaciones también se ven atrapadas en este ciclo destructivo.

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicodeloriente/titulos/77226RIDE/VS/PP/Abece-salud-mental-psicoactivas-octubre-2016-minsalud.pdf") Recalde, M. M. & Recalde E. H. (2016). Educación y prevención del consumo problemático de drogas II: sustancias ilegales.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=akhdwlJjRto") [Vídeo] Previsión Social Chile. (2015). 04 – SOLVE Alcohol y drogas en el trabajo.
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')



    

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
