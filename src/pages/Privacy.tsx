export default function Privacy() {
    return (
        <main className="w-full">
            <section className="pt-32 pb-24 md:pt-48 md:pb-32 bg-white min-h-screen">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-8">
                        Políticas de Privacidad
                    </h1>
                    <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed space-y-6">
                        <p className="font-medium text-lg text-zinc-500">Última actualización: 20 de Abril de 2026</p>
                        
                        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">1. Introducción</h2>
                        <p>
                            En Norkut, valoramos profundamente la privacidad y seguridad de los datos operativos y personales de nuestros clientes. Esta política detalla cómo recopilamos, procesamos y protegemos la información generada a través del uso de nuestra plataforma SaaS, terminales POS y ecosistema de aplicaciones.
                        </p>
                        
                        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">2. Recopilación de Datos</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Datos de la Cuenta:</strong> Nombre corporativo, credenciales de administrador, emails y datos de contacto de facturación.</li>
                            <li><strong>Datos Operacionales:</strong> Transacciones de punto de venta, control de stock, movimientos de inventario y configuraciones empresariales enviadas activamente al sistema.</li>
                            <li><strong>Datos Generados por IA:</strong> Vectores e inferencias operativas creadas a partir del uso rutinario del software (utilizadas estrictamente bajo mandato multi-tenant aislado).</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">3. Uso de la Información</h2>
                        <p>
                            La información procesada se utiliza de manera exclusiva para proveer los servicios pactados, generar recomendaciones operativas en su franquicia mediante nuestros modelos de IA transaccional y asegurar la continuidad y estabilidad del sistema bajo infraestructura AWS. 
                        </p>

                        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">4. Aislamiento Multi-Tenant</h2>
                        <p>
                            Garantizamos estrictamente que la información comercial (inventario, márgenes, estrategias) almacenada en un <i>Tenant</i> (cliente/empresa) no cruza ni influye en las proyecciones o datos de otros clientes. Los datos son suyos y de su completa titularidad.
                        </p>

                        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">5. Contacto</h2>
                        <p>
                            Para ejercer acceso, rectificación o eliminación profunda de bases de datos, contacte a su Gerente de Cuenta Norkut o envíe un correo electrónico a <strong>legal@norkut.com</strong>.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
