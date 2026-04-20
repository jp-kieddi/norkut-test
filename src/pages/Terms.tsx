export default function Terms() {
    return (
        <main className="w-full">
            <section className="pt-32 pb-24 md:pt-48 md:pb-32 bg-white min-h-screen">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-8">
                        Términos de Servicio
                    </h1>
                    <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed space-y-6">
                        <p className="font-medium text-lg text-zinc-500">Efectivo a partir de: 20 de Abril de 2026</p>
                        
                        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">1. Aceptación</h2>
                        <p>
                            Al suscribirse, acceder o utilizar la plataforma Norkut y sus módulos adyacentes, usted y la entidad a la que representa ("Cliente" o "Tenant") acuerdan someterse legalmente a los siguientes Términos de Servicio.
                        </p>
                        
                        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">2. Licencia de Software y Tokens</h2>
                        <p>
                            Norkut provee acceso de uso al software operacional en la nube basándose en esquemas SaaS. Los límites operacionales de cada plan (Tiendas, Tokens por POS adicional, SKUs activos) deben respetarse. Superar el límite establecido de SKUs activos incurrirá en el ascenso automático al plan comercial correspondiente bajo previo aviso.
                        </p>

                        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">3. Obligaciones y Uso Justo</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>El cliente es responsable del hardware de punto de venta (POS) y de la conectividad provista en su comercio.</li>
                            <li>A pesar del modo offline, los terminales deben conectarse al servidor maestro de manera regular para sincronizar la facturación y la telemetría del modelo de Inteligencia Artificial.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">4. Partners y Terceros</h2>
                        <p>
                            Los servicios de consultoría o implementación contratados a través un "Partner Certificado" de Norkut son acuerdos comerciales independientes celebrados entre su empresa y el Partner. Norkut provee garantías estrictamente sobre el desempeño de la plataforma Cloud y la inferencia neural.
                        </p>

                        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">5. Terminación</h2>
                        <p>
                            El cliente puede cancelar su portal en el transcurso del actual ciclo de facturación. No se reembolsarán meses parciales, salvo mediante nuestra "Garantía de Devolución de 14 Días" aplicable desde la fecha o factura de inicio de contrato.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
