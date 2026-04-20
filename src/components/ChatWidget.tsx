import { useEffect } from 'react';

export default function ChatWidget() {
    useEffect(() => {
        // Evitamos inyectarlo más de una vez (previene el problema de widgets duplicados por React StrictMode o navegaciones SPA)
        if (document.getElementById('kieddi-chat-widget-script')) {
            return;
        }

        const script = document.createElement('script');
        script.id = 'kieddi-chat-widget-script';
        script.src = 'https://chat.kieddi.com/static/chat-widget/chat-widget.js?eyJhY2NvdW50X2lkIjoid2ViXzMyIiwiZG9tYWluIjoid3d3Lm5vcmt1dC5jb20ifQ==&headerText=Norkut&mainColor=F97316&chatIconSvg=help2&borderColor=F97316&bubbleAnimationColor=EF4444&bubbleBgColor=F97316&iconColor=FFFFFF';
        script.async = true;
        document.body.appendChild(script);

        // No removemos el script en el cleanup para evitar que al cambiar de página
        // en la SPA el widget se vuelva a inyectar sobre elementos ya creados.
    }, []);

    return null; // Este componente no renderiza nada visible, solo inyecta el script
}
