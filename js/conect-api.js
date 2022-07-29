(() => {
  //Trayectoria academica
  const $trayectoria_academica = document.getElementById("trayectoria-academica"),
    $fragment_trayectoria_academica = document.createDocumentFragment(),


    //Contacto
    $correo = document.getElementById("correo"),
    $celular = document.getElementById("celular"),


    //Mis Proyectos
    $mis_proyectos = document.getElementById("mis-proyectos"),
    $fragment_mis_proyectos = document.createDocumentFragment(),

    //historial laboral
    $historial_laboral = document.getElementById("historial_laboral"),
    $fragment_historial_laboral = document.createDocumentFragment(),

    //Conocimiento
    $conocimiento = document.getElementById("conocimiento"),
    $fragment_conocimiento = document.createDocumentFragment(),
    
    //Para la presentacion
    $presentacion_principal = document.getElementById("presentacion-principal"),
    $presentacion_secundaria = document.getElementById("presentacion-secundaria"),
    $nombre_lateral = document.getElementById("nombre-lateral");





    

  //obtener todas las persona de la bd
  /*axios.get("http://localhost:8080/persona")
  .then(res => {
    console.log("Estamos en el then ", res);

    let json = res.data;

    json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.idPersona}--${el.nombre}--${el.apellido}--${el.fechaNacimiento}--${el.celular}--${el.correo}--${el.presentacionPrincipal}--${el.presentacionSecundaria}`;
        
        $fragment_trayectoria_academica.appendChild($li);
    });


    $axios.appendChild($fragment_trayectoria_academica);
    
  })
  .catch(err => {
    console.log("Estamos en el catch", err);
  })
  .finally(()=>{
    console.log("esto se ejecutara independientemente del resultado Axios");
  }); */

  




  //Acatualizar y obtener datos de una persona segun su id, para la presentacion

  axios.get("https://sagustavo-app.herokuapp.com/persona/id?id_persona=1").then(res => {

    let json = res.data;

    //presentacion
    const $texto_presentacion_principal = document.createTextNode(json.presentacionPrincipal);
    $presentacion_principal.appendChild($texto_presentacion_principal);

    const $texto_presentacion_secundaria = document.createTextNode(json.presentacionSecundaria);
    $presentacion_secundaria.appendChild($texto_presentacion_secundaria);

    const $texto_nombre_lateral = document.createTextNode(json.apellido + " " + json.nombre);
    $nombre_lateral.appendChild($texto_nombre_lateral);

    

  }).catch(err => {
    const $texto_presentacion_principal = document.createTextNode("Error al cargar la presentacion desde la api: " + err);
    $presentacion_principal.appendChild($texto_presentacion_principal);

    const $texto_presentacion_secundaria = document.createTextNode("Error al cargar la presentacion desde la api: " + err);
    $presentacion_secundaria.appendChild($texto_presentacion_secundaria);

    const $texto_nombre_lateral = document.createTextNode("Error al cargar el nombre desde la api: " + err);
    $nombre_lateral.appendChild($texto_nombre_lateral);
  }).finally(()=> {

  });


  //Trayectoria academica

  const $h3 = document.createElement("h3");
    $h3.className = "mb-4 tm-text-primary";
    $h3.innerHTML = "<u>Trayectoria academica</u>";

    $trayectoria_academica.appendChild($h3);

    
  axios.get("https://sagustavo-app.herokuapp.com/educacion/por_id?id_persona=1")
  .then(res => {
    console.log("Estamos en el then ", res);

    let json = res.data;


    json.forEach((el) => {
        const $h5 = document.createElement("h5"),
        $p = document.createElement("p");

        $p.innerHTML = `${el.descripcion}`;

        $h5.className = "mb-4 tm-text-primary";
        $h5.innerHTML = `${el.institucion}`;

        
        $fragment_trayectoria_academica.appendChild($h5);
        $fragment_trayectoria_academica.appendChild($p);
    });


    $trayectoria_academica.appendChild($fragment_trayectoria_academica);
    
  })
  .catch(err => {
    const $p = document.createElement("p");
    $p.innerHTML = "Error al cargar la trayectoria academica desde la api: " + err;
    $trayectoria_academica.appendChild($p);
  })
  .finally(()=>{
    
  }); 

  //Historial laboral

  const $h3_historial_laboral = document.createElement("h3");
    $h3_historial_laboral.className = "mb-4 tm-text-primary";
    $h3_historial_laboral.innerHTML = "<u>Resumen laboral</u>";

    $historial_laboral.appendChild($h3_historial_laboral);

    
  axios.get("https://sagustavo-app.herokuapp.com/historial_laboral/por_id?id_persona=1")
  .then(res => {
    console.log("Estamos en el then ", res);

    let json = res.data;


    json.forEach((el) => {
        const $h5 = document.createElement("h5"),
        $p = document.createElement("p");

        $p.innerHTML = `${el.descripcion}`;

        $h5.className = "mb-4 tm-text-primary";
        $h5.innerHTML = `${el.tipo}`;

        
        $fragment_historial_laboral.appendChild($h5);
        $fragment_historial_laboral.appendChild($p);
    });


    $historial_laboral.appendChild($fragment_historial_laboral);
    
  })
  .catch(err => {
    const $p = document.createElement("p");
    $p.innerHTML = "Error al cargar la historial laboral desde la api: " + err;
    $historial_laboral.appendChild($p);
  })
  .finally(()=>{
    
  }); 


  //Conocimiento
  const $h3_conocimiento = document.createElement("h3");
  $h3_conocimiento.className = "mb-4 tm-text-primary";
  $h3_conocimiento.innerHTML = "<u>Conocimiento</u>";

  $conocimiento.appendChild($h3_conocimiento);

  
axios.get("https://sagustavo-app.herokuapp.com/conocimiento/por_id?id_persona=1")
.then(res => {
  console.log("Estamos en el then ", res);

  let json = res.data;


  json.forEach((el) => {
      const $p = document.createElement("p");

      $p.innerHTML = `${el.nombre}, ${el.nivel}`;

      $fragment_conocimiento.appendChild($p);
  });


  $conocimiento.appendChild($fragment_conocimiento);
  
})
.catch(err => {
  const $p = document.createElement("p");
  $p.innerHTML = "Error al cargar conocimiento desde la api: " + err;
  $conocimiento.appendChild($p);
})
.finally(()=>{
  
}); 

//Mis Proyectos
 axios.get("https://sagustavo-app.herokuapp.com/mis_proyectos/por_id?id_persona=1")
  .then(res => {
    console.log("Estamos en el then ", res);
    console.log("SE EJECUTA AXIOS CON LOS PROYECTOS");
    let json = res.data;

    const $div_principal = document.createElement("div"), 
    $h5_pp =document.createElement("h5");

    
    
    $div_principal.className = "tm-carousel";

    $mis_proyectos.appendChild($div_principal);

    json.forEach((el) => {
        //Div pricipal
        const $div = document.createElement("div"),
        


        //Primer subbloque figure
        $figure = document.createElement("figure"),
        $img = document.createElement("img"),
        $figcaption = document.createElement("figcaption"),
        $ul = document.createElement("ul"),
        $li = document.createElement("li"),
        $a = document.createElement("a"),
        $i = document.createElement("i"), 

        //Segundo subbloque div interior
        $div_interior = document.createElement("div"),
        $h3 = document.createElement("h3"),
        $p = document.createElement("p"),
        $h4 = document.createElement("h4");



       

        //div Principal
        $div.className = "tm-carousel-item";

        //Primer subbloque
        $figure.className = "effect-honey mb-4";

        $img.src = `${el.urlImg}`;
        $img.alt = "Featured Item";

        $ul.className = "tm-social";
        
        $a.className = "tm-social-link";
        $a.href = `${el.urlGitHub}`;
        
        $i.className = "fab fa-github"


        //Segundo subbloque
        $div_interior.className = "tm-about-text";

        $h3.className = "mb-3 tm-text-primary tm-about-title";
        $h3.innerHTML = `${el.nombre}`;

        $p.innerHTML = `${el.descripcion}`;

        $h4.className = "tm-text-secondary tm-about-subtitle";
        $h4.innerHTML = `${el.lenguaje}`;


        //Armado del primer bloque
        $a.appendChild($i);

        $li.appendChild($a);

        $ul.appendChild($li);

        $figcaption.appendChild($ul);

        $figure.appendChild($img);

        $figure.appendChild($figcaption);

        $div.appendChild($figure);


        //Armado del segundo bloque
        $div_interior.appendChild($h3);
        $div_interior.appendChild($p);
        $div_interior.appendChild($h4);

        $div.appendChild($div_interior);

        $div_principal.appendChild($div);
        
        $fragment_mis_proyectos.appendChild($div_principal);
        
    });


    $mis_proyectos.appendChild($fragment_mis_proyectos);
    
  })
  .catch(err => {
    const $p = document.createElement("p");
    $p.innerHTML = "Error al cargar los proyectos desde la api: " + err;
    $mis_proyectos.appendChild($p);
  })
  .finally(()=>{
    
  }); 


//Contacto

axios.get("https://sagustavo-app.herokuapp.com/persona/id?id_persona=1").then(res => {

    let json = res.data;

    //celular
    const $texto_celular = document.createTextNode("Tel: " + json.celular);
    $celular.appendChild($texto_celular);

    //correo
    const $texto_correo = document.createTextNode("Email: " + json.correo);
    $correo.appendChild($texto_correo);

  }).catch(err => {
    const $texto_celular = document.createTextNode("Error al obtener el celulra desde la api: " + err);
    $celular.appendChild($texto_celular);

    const $texto_correo = document.createTextNode("Error al obtener el correo desde la api: " + err);
    $correo.appendChild($texto_correo);

  }).finally(()=> {

  });






 
  



})();
