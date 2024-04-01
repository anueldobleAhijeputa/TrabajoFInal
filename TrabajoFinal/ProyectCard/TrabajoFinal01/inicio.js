
        function mostrarForm(id) {

            var formularios = document.querySelectorAll('.formulario');
            formularios.forEach(function(formulario) {
                formulario.classList.remove('mostrar');
            });

            var formularioMostrar = document.getElementById(id);
            formularioMostrar.classList.add('mostrar');
        }
        
        document.addEventListener("DOMContentLoaded", function(){

            const slider = document.querySelector('.slider');
            let counter = 1;
        
            setInterval(()=>{
                slider.style.transition = "Transform 0.5s ease-in-out";
                slider.style.transform = translateX('${-counter * 150}%');
                counter++;
        
                if (counter === slider.children.length){
                    setTimeout(()=>{
                        slider.style.transition = "none";
                        slider.style.transform = 'translateX(0)'
                        counter = 1;
                    },25)
                }
            },2500)
        })

  