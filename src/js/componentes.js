
import '../css/componentes.css';

export const saludar = ( nombre ) => {
    console.log('Creando Etiqueta H1');

    const h1 = document.createElement('h1');
    h1.innerHTML = `Hola, ${ nombre } , como estas`;
    document.body.append( h1 );
    
}