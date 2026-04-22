export default function Privacy() {
    return (
        <main className="w-full">
            <section className="pt-32 pb-24 md:pt-48 md:pb-32 bg-white min-h-screen">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-8">
                        Política de Privacidad
                    </h1>
                    <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed space-y-6">
                        <p className="font-medium text-lg text-zinc-500">Última actualización: 22 de Abril de 2026</p>
                        
                        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">1. INFORMACIÓN QUE RECOPILAMOS</h2>
                        <p>
                            Podemos recopilar:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>datos de registro (nombre, email, empresa)</li>
                            <li>datos operativos (ventas, inventario, transacciones)</li>
                            <li>datos técnicos (IP, dispositivo, uso de la plataforma)</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">2. USO DE LA INFORMACIÓN</h2>
                        <p>
                            Utilizamos la información para:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>operar la plataforma</li>
                            <li>mejorar funcionalidades</li>
                            <li>generar inteligencia y automatización</li>
                            <li>brindar soporte al usuario</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">3. INTELIGENCIA Y ANÁLISIS</h2>
                        <p>
                            Norkut puede:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>analizar datos operativos</li>
                            <li>generar modelos predictivos</li>
                            <li>utilizar información de forma agregada y anonimizada</li>
                        </ul>
                        <p>
                            Nunca se compartirán datos sensibles identificables sin autorización.
                        </p>

                        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">4. COMPARTICIÓN DE DATOS</h2>
                        <p>
                            Podemos compartir información con:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>proveedores tecnológicos (hosting, infraestructura)</li>
                            <li>integraciones autorizadas (ej: marketplaces, sistemas externos)</li>
                            <li>autoridades, si es requerido por ley</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">5. SEGURIDAD</h2>
                        <p>
                            Implementamos medidas razonables para proteger la información, incluyendo:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>control de accesos</li>
                            <li>cifrado de datos</li>
                            <li>monitoreo de actividad</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">6. ALMACENAMIENTO</h2>
                        <p>
                            Los datos pueden almacenarse en:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>servidores locales o internacionales</li>
                            <li>infraestructura cloud segura</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">7. DERECHOS DEL USUARIO</h2>
                        <p>
                            El usuario puede:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>solicitar acceso a sus datos</li>
                            <li>solicitar corrección</li>
                            <li>solicitar eliminación (según limitaciones legales)</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">8. COOKIES</h2>
                        <p>
                            La plataforma puede utilizar cookies para:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>mejorar experiencia de usuario</li>
                            <li>analizar uso de la plataforma</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">9. CAMBIOS EN LA POLÍTICA</h2>
                        <p>
                            Podemos actualizar esta política. Se notificará cuando sea relevante.
                        </p>

                        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">10. CONTACTO</h2>
                        <p>
                            Para temas de privacidad: <strong>soporte@norkut.com</strong>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}