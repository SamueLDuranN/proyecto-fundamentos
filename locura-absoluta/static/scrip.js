// Esperar a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');
    const resultadoDiv = document.getElementById('resultado');
    
    // Función principal de carga de imagen
    function uploadImage() {
        const imageInput = document.getElementById('file-upload');
        const file = imageInput.files[0];

        if (file) {
            // Mostrar área de resultado y mensaje de carga
            resultadoDiv.style.display = 'block';
            document.getElementById('resultadoTexto').textContent = 'Analizando imagen...';

            const formData = new FormData();
            formData.append('file', file);

            // Enviar la imagen al servidor
            fetch('/upload', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Mostrar el resultado
                if (data.message) {
                    // Mostrar mensaje de éxito y resultado
                    document.getElementById('resultadoTexto').textContent = 
                        `Estado del electrodoméstico: ${data.resultado}`;
                    
                    // Mostrar la imagen analizada
                    const img = document.getElementById('imagenAnalizada');
                    img.src = '/uploads/' + data.filename;
                    img.style.display = 'block';
                } else if (data.error) {
                    // Mostrar mensaje de error
                    document.getElementById('resultadoTexto').textContent = 
                        `Error: ${data.error}`;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('resultadoTexto').textContent = 
                    'Error al procesar la imagen. Por favor, intenta de nuevo.';
            });
        } else {
            alert('Por favor, selecciona una imagen.');
        }
    }

    // Manejar el envío del formulario
    if (uploadForm) {
        uploadForm.onsubmit = function(e) {
            e.preventDefault();
            uploadImage();
        };
    }

    // Opcional: Mostrar vista previa de la imagen antes de subirla
    const fileInput = document.getElementById('file-upload');
    if (fileInput) {
        fileInput.onchange = function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.getElementById('imagenAnalizada');
                    img.src = e.target.result;
                    document.getElementById('resultado').style.display = 'block';
                    document.getElementById('resultadoTexto').textContent = 
                        'Vista previa de la imagen seleccionada';
                };
                reader.readAsDataURL(file);
            }
        };
    }

    // Opcional: Manejar el formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.onsubmit = function(e) {
            e.preventDefault();
            alert('Mensaje enviado correctamente');
            this.reset();
        };
    }

    // Opcional: Manejar el botón de acceder
    const btnAcceder = document.querySelector('.btn-acceder');
    if (btnAcceder) {
        btnAcceder.onclick = function() {
            alert('Función de acceso en desarrollo');
        };
    }
});