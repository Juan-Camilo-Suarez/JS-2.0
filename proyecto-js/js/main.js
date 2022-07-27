$(document).ready(function() {

    //slider
    
    //cargar el js donde es necessario
    if(window.location.href.indexOf('index') > -1){
	  
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: false,
          slideWidth: 1200,
          responsive: true,
          pager: true
        });
  
      }

      //post
      if(window.location.href.indexOf('index') > -1){
      var posts = [
          {
              title: "prueba de titulo 1",
              date: "publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
              content: 'Donec sed neque ac metus aliquam ultrices a a nisl. Integer id turpis quam. Sed vehicula diam augue. Aliquam lectus diam, ullamcorper eu pellentesque quis, venenatis a felis. In dapibus eleifend risus vel porttitor'
          },
          {
            title: "prueba de titulo 2",
            date: "publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Donec sed neque ac metus aliquam ultrices a a nisl. Integer id turpis quam. Sed vehicula diam augue. Aliquam lectus diam, ullamcorper eu pellentesque quis, venenatis a felis. In dapibus eleifend risus vel porttitor'
        },
        {
            title: "prueba de titulo 3",
            date: "publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Donec sed neque ac metus aliquam ultrices a a nisl. Integer id turpis quam. Sed vehicula diam augue. Aliquam lectus diam, ullamcorper eu pellentesque quis, venenatis a felis. In dapibus eleifend risus vel porttitor'
        },
        {
            title: "prueba de titulo 4",
            date: "publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Donec sed neque ac metus aliquam ultrices a a nisl. Integer id turpis quam. Sed vehicula diam augue. Aliquam lectus diam, ullamcorper eu pellentesque quis, venenatis a felis. In dapibus eleifend risus vel porttitor'
        },
      ]

      posts.forEach((item,index)=>{
          var post = `

            <article class="post">
            <h2> ${item.title}</h2>
            <span class="date"> ${item.date}</span>
            <p>
            ${item.content}
            </p>
            <a href="#" class="button-more"> Leer mas</a>
            </article>
          
          `;
          $("#posts").append(post);
        
      });
    }

      //selector de tema
      var theme = $('#theme');
     
      $('#to-green').click(function(){

        theme.attr('href', "css/green.css");
      });
      $('#to-blue').click(function(){

        theme.attr('href', "css/blue.css");
      });
      $('#to-red').click(function(){

        theme.attr('href', "css/red.css");
    });


      //scroll arriba de la web

      $(".subir").click(function(e){
          e.preventDefault();

          $('html, body').animate({
              scrollTop: 0}, 500);

            return false;
      });

      //login falso
      $("#login form").submit(function(e){
          var form_name = $('#form_name').val();
          localStorage.setItem('form_name', form_name);
      });

      var form_name = localStorage.getItem('form_name');
      
      if (form_name != null && form_name != undefined) {

        var about_parrafo =$("#about p")
        about_parrafo.html("<br><strong> bienvenido, " + form_name + "</strong>");
        about_parrafo.append("<a href='#' id = 'logout'> logout </a>");
      
        $("#login").hide();

        $('#logout').click(function(){
            localStorage.clear();
            window. location.reload();
        });
    

      }
      if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();

      }

        
    
});
