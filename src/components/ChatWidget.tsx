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

        // Escuchar eventos de interacción emitidos por el iframe del Chatbot (kieddi)
        const handleChatEvent = (event: MessageEvent) => {
            // Verificamos si el iframe envía un evento de envío de mensaje. 
            // Si recuerdas el nombre exacto del evento, puedes ajustar aquí las condiciones de la validación.
            const isChatMessage = typeof event.data === 'string' 
                ? (event.data.includes('message_sent') || event.data.includes('chat_message')) 
                : (event.data?.type === 'message' || event.data?.event === 'message_sent');

            if (isChatMessage && typeof window !== 'undefined' && window.fbq) {
                window.fbq('trackCustom', 'ChatInteraction');
            }
        };

        window.addEventListener('message', handleChatEvent);

        // No removemos el script en el cleanup para evitar que al cambiar de página
        // en la SPA el widget se vuelva a inyectar sobre elementos ya creados.
        return () => {
            window.removeEventListener('message', handleChatEvent);
        };
    }, []);

    return null; // Este componente no renderiza nada visible, solo inyecta el script
}
