// ----------------------------------------------------------------------------------------
//                                      <--ENGLISH-->
// ----------------------------------------------------------------------------------------
$(function () {
  $(".en").click(function () {
    //Navbar
    $("#navbar ul li:nth-child(1) a").text("Home");
    $("#navbar ul li:nth-child(2) a").text("About Us");
    $("#navbar ul li:nth-child(3) a").text("Services");
    $("#navbar ul li:nth-child(4) a").text("Team");
    $("#navbar ul li:nth-child(5) a").text("Contact");
    //Hero
    $("#hero h1 span:nth-child(2)").text("Agricultural Services Provider ");
    $("#hero h1 span:nth-child(1)").text("Astecna");
    $("#hero h1 span:nth-child(3)").text(".");
    $("#hero h2").text("Agricultural Consultancy");
    //About us
    $("#about p").text("About Us");
    $("#about .about-text:eq(0)").text(
      "We are a provider of agricultural services with a history of 24 years in the market. With more than 6,000 cases analyzed in Argentina, Uruguay, and Bolivia, we are a benchmark in field appraisals, and we are committed to providing quality solutions. Our services include partitions and spin-offs, investment advice and administration, which allows us to meet the needs of both corporate clients and families and individuals"
    );
    $("#about .about-text:eq(1)").text(
      "With a team of highly trained experts, we focus on providing comprehensive and personalized advice to maximize the value and performance of our clients' agricultural investments. Our experience and professionalism have allowed us to stand out in the market over the years. We work with passion and commitment to satisfy the unique needs of each client and continue to be leaders in the agricultural sector."
    );
    //Clients
    $("#clients p").text("Clients");
    //Services
    $("#services .section-title p").text("Services");
    //Item1
    $("#services .icon-box:eq(0) h4 a").text("Asset Valuation");
    //------
    $(document).ready(function () {
      $(".icon-box:eq(0) .services-text").each(function (index) {
        if (index === 0) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");

          firstSpan.text("•");
          secondSpan.text(
            " We provide services to individuals, companies, and banks in asset appraisals for credit guarantees. We verify the ability to repay credits, monitoring the agricultural exploitation."
          );
        } else if (index === 1) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");

          // Realiza las operaciones específicas para cada elemento <span> dentro del párrafo actual
          firstSpan.text("•");
          secondSpan.text(" Valuation and development of investment projects.");
        } else if (index === 2) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");

          // Realiza las operaciones específicas para cada elemento <span> dentro del párrafo actual
          firstSpan.text("•");
          secondSpan.text(
            " Mapping and study of environments and appraisals of fields, either exclusively by satellite or with visits to the properties."
          );
        } else if (index === 3) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");

          // Realiza las operaciones específicas para cada elemento <span> dentro del párrafo actual
          firstSpan.text("•");
          secondSpan.text(
            "Agronomic and environmental expertise in court cases and party settlements."
          );
        }
      });
    });
    //Item2
    $("#services .icon-box:eq(1) h4 a").text("Advice on Purchase of Fields");
    $(document).ready(function () {
      $(".icon-box:eq(1) .services-text").each(function (index) {
        if (index === 0) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " Before an investor's decision to buy land, the parameters of his preference are defined. In consideration of this, we analyze fields that fit the search criteria."
          );
        } else if (index === 1) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " Our work methodology allows us to analyze a large number of fields in the most discreet way, without generating expectations in the market."
          );
        } else if (index === 2) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " A property will only be visited when we are convinced that the expected values are in accordance with the objective productivity of the field, as well as its risks, such as floods, which allows optimizing resources."
          );
        }
      });
    });

    //Item3
    $("#services .icon-box:eq(2) h4 a").text("Consulting and Audits");
    $(document).ready(function () {
      $(".icon-box:eq(2) .services-text").each(function (index) {
        if (index === 0) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " We make diagnoses and reengineering of agricultural companies."
          );
        } else if (index === 1) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " Partitions and subdivisions of agricultural companies; we participate in negotiations between parties."
          );
        } else if (index === 2) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " Analysis and development of investment projects in the agricultural sector, evaluating technical, economic, and strategic aspects."
          );
        } else if (index === 3) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " We act independently and with confidentiality at the time of search and realization."
          );
        }
      });
    });

    //Item4
    $("#services .icon-box:eq(3) h4 a").text("Administration");
    $(document).ready(function () {
      $(".icon-box:eq(3) .services-text").each(function (index) {
        if (index === 0) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " We are dedicated to planning, organizing and managing operations, advising on technical-agronomic and administrative-accounting management."
          );
        } else if (index === 1) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " Based on our experience in our own fields and those of third parties, we can guarantee good advice followed by the coordination and monitoring of production services."
          );
        }
      });
    });

    //Item5
    $("#services .icon-box:eq(4) h4 a").text("Family businesses");
    $(document).ready(function () {
      $(".icon-box:eq(4) .services-text").each(function (index) {
        if (index === 0) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " At Astecna we collaborate in the restructuring of family businesses seeking to protect the economic and cultural heritage of the family"
          );
        } else if (index === 1) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " Our objective is to generate transferable companies to descendants through the search for harmony among its members, through clear and equitable guidelines, with training, emphasizing communication and conflict prevention."
          );
        } else if (index === 2) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " Achieving in this way, companies that are an enjoyment and sustenance for its members, seeking the protection of family assets."
          );
        }
      });
    });

    //Item6
    $("#services .icon-box:eq(5) h4 a").text("Sustainability and Environment");
    $(document).ready(function () {
      $(".icon-box:eq(5) .services-text").each(function (index) {
        if (index === 0) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " We carry out expert reports on environmental impact, for example, in fields with hydrocarbon exploitation; We also evaluate the sustainability of production systems in marginal areas."
          );
        } else if (index === 1) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " Where we can assess the impact on fields due to civil works, pipelines, road layout, and changes in the environment made by man, being able to demonstrate by satellite images the effect that it causes in an agricultural exploitation."
          );
        }
      });
    });
  });
});

// ----------------------------------------------------------------------------------------
//                                      <--SPANISH-->
// ----------------------------------------------------------------------------------------
$(function () {
  $(".es").click(function () {
    $("#navbar ul li:nth-child(1) a").text("Home");
    $("#navbar ul li:nth-child(2) a").text("Nosotros");
    $("#navbar ul li:nth-child(3) a").text("Servicios");
    $("#navbar ul li:nth-child(4) a").text("Equipo");
    $("#navbar ul li:nth-child(5) a").text("Contacto");
    //Hero
    $("#hero h1 span:nth-child(2)").text(
      "Prestadora de Servicios Agropecuarios "
    );
    $("#hero h1 span:nth-child(1)").text("Astecna");
    $("#hero h1 span:nth-child(3)").text(".");
    $("#hero h2").text("Asesoría agropecuaria");
    //About us
    $("#about p").text("Sobre Nosotros");
    $("#about .about-text:eq(0)").text(
      "Somos una prestadora de servicios agropecuarios con una trayectoria de 24 años en el mercado. Con más de 6.000 casos analizados en Argentina, Uruguay y Bolivia, somos referentes en tasaciones de campos y estamos comprometidos con brindar soluciones de calidad. Nuestros servicios incluyen particiones y escisiones, asesoramiento en inversiones y administración, lo que nos permite atender las necesidades tanto de clientes corporativos como de familias y particulares."
    );
    $("#about .about-text:eq(1)").text(
      "Con un equipo de expertos altamente capacitados, nos enfocamos en proporcionar asesoría integral y personalizada para maximizar el valor y el rendimiento de las inversiones agropecuarias de nuestros clientes. Nuestra experiencia y profesionalismo nos han permitido destacarnos en el mercado a lo largo de los años. Trabajamos con pasión y compromiso para satisfacer las necesidades únicas de cada cliente y seguir siendo líderes en el sector agropecuario."
    );
    //Clients
    $("#clients p").text("Clientes");
    //Services
    $("#services .section-title p").text("Servicios");
    //Item1
    $("#services .icon-box:eq(0) h4 a").text("Valuación de Activos");
    $(document).ready(function () {
      $(".icon-box:eq(0) .services-text").each(function (index) {
        if (index === 0) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " Brindamos servicios a particulares, empresas y bancos en tasaciones de activos para garantías crediticias. Verificamos la capacidad de repago de créditos, haciendo seguimiento de la explotación agropecuaria."
          );
        } else if (index === 1) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(" Valuación y desarrollo de proyectos de inversión.");
        } else if (index === 2) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " Mapeo y estudio de ambientes y tasaciones de campos, ya sean exclusivamente satelitales o bien con visita a los predios."
          );
        } else if (index === 3) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            "Peritajes agronómicos y de medioambiente en causas judiciales y en arreglos de parte."
          );
        }
      });
    });
    //Item2
    $("#services .icon-box:eq(1) h4 a").text(
      "Asesoramiento en compra de campos"
    );
    $(document).ready(function () {
      $(".icon-box:eq(1) .services-text").each(function (index) {
        if (index === 0) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " Ante la decisión de un inversor de comprar tierras, se definen los parámteros de su preferencia, en base a lo cual se analizan campos que se adecuen a los criterios de búsqueda."
          );
        } else if (index === 1) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " Nuestra metodología de trabajo nos permite analizar gran cantidad de campos de la manera más discreta, sin generar expectativas en el mercado."
          );
        } else if (index === 2) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " Recién se visitará un predio cuando estemos convencidos que los valores pretendidos son acorde a la productividad objetiva del campo, como así también sus riesgos, tales como inundaciones, lo que permite optimizar recursos."
          );
        }
      });
    });
    //Item3
    $("#services .icon-box:eq(2) h4 a").text("Consultoría y Auditorías");
    $(document).ready(function () {
      $(".icon-box:eq(2) .services-text").each(function (index) {
        if (index === 0) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " Hacemos diagnósticos y reingeniería de sociedades y empresas agropecuarias."
          );
        } else if (index === 1) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " Particiones y subdivisiones de empresas agropecuarias, participamos en las negociaciones entre partes."
          );
        } else if (index === 2) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " Análisis y desarrollo de proyectos de inversión del sector agropecuario, evaluando aspectos técnicos, económicos y estratégicos."
          );
        } else if (index === 3) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " Actuamos de forma independiente y con confidencialidad al momento de búsqueda y realización."
          );
        }
      });
    });
    //Item4
    $("#services .icon-box:eq(3) h4 a").text("Administración");
    $(document).ready(function () {
      $(".icon-box:eq(3) .services-text").each(function (index) {
        if (index === 0) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " Nos dedicamos al planeamiento, organización y gestión de operaciones, asesorando en la gestión técnica- agronómica y administrativo-contable."
          );
        } else if (index === 1) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " En base a nuestra experiencia en campos propios y de terceros podemos garantizar un buen asesoramiento seguido de la coordinación y seguimiento de los servicios de producción."
          );
        }
      });
    });
    //Item5
    $("#services .icon-box:eq(4) h4 a").text("Empresas Familiares");
    $(document).ready(function () {
      $(".icon-box:eq(4) .services-text").each(function (index) {
        if (index === 0) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " Desde Astecna colaboramos en la reestructuración de empresas familiares buscando protejer el patrimonio económico y cultural de la familia."
          );
        } else if (index === 1) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " Nuestro objetivo es generar empresas transferibles a los descendientes a través de la búsqueda de armonía entre sus miembros, por medio de pautas claras y equitativas, con el entrenamiento, haciendo énfasis en la comunicación y la prevención de conflictos."
          );
        } else if (index === 2) {
          var firstSpan = $(this).find("span:first");
          var secondSpan = $(this).find("span:last");
          firstSpan.text("•");
          secondSpan.text(
            " Logrando de este modo, empresas que sean un disfrute y sustento para sus miembros, buscando el resguardo del patrimonio familiar."
          );
        }
      });
    });
    //Item6
    $("#services .icon-box:eq(5) h4 a").text(
      "Sustentabilidad y Medio Ambiente"
    );
    $(document).ready(function () {
      $(".icon-box:eq(5) .services-text").each(function (index) {
        if (index === 0) {
          $(this).find("span:first").text("•");
          $(this)
            .find("span:last")
            .text(
              " Donde podemos evaluar el impacto en campos por obras civiles, canalizaciones, trazado de caminos, y alteraciones en el ambiente hechas por el hombre, pudiéndose demostrar por imágenes satelitales el efecto que causa en una explotación agropecuaria."
            );
        } else if (index === 1) {
          $(this).find("span:first").text("•");
          $(this)
            .find("span:last")
            .text(
              " Realizamos peritajes sobre impacto ambiental, por ejemplo, en campos con explotación hidrocarburifera; también evaluamos sustentabilidad de sistemas productivos en zonas marginales."
            );
        }
      });
    });
    //Contact-mid
  });
});
