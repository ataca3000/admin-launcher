import React from 'react';
import { ArrowRight, Box, BrainCircuit, ShieldCheck, Zap, Globe, Cpu } from 'lucide-react';
import DeploymentWizard from './DeploymentWizard';

export default function SaasLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* Navbar Premium */}
      <nav className="w-full border-b border-white/5 bg-slate-950/40 backdrop-blur-xl fixed top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 group-hover:scale-105 transition-all duration-300">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Admin.com
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="text-slate-400 hover:text-white transition-colors">Características</a>
            <a href="#infrastructure" className="text-slate-400 hover:text-white transition-colors">Infraestructura</a>
            <a href="#deploy" className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all hover:scale-105">
              Lanzar Instancia
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 flex flex-col items-center justify-center min-h-[90vh]">
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            Infraestructura Edge v2.0 Disponible
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
            El ERP que <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400 animate-gradient-x">
              se despliega solo.
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Punto de venta, inventario, e-commerce y asistentes de IA nativos. Despliega tu propia infraestructura empresarial privada en segundos. Sin nubes cautivas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <a href="#deploy" className="group relative px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center gap-2 overflow-hidden">
              <span className="relative z-10">Iniciar Despliegue</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#features" className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-white rounded-full font-semibold text-lg transition-all backdrop-blur-sm">
              Explorar Arquitectura
            </a>
          </div>
        </div>
      </section>

      {/* Features Premium Showcase */}
      <section id="features" className="py-32 relative z-10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Potencia a escala global</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Módulos nativos diseñados para el alto rendimiento y la máxima resiliencia.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <div className="group p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-indigo-500/50 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                <Box className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">POS Multi-Tenant</h3>
              <p className="text-slate-400 leading-relaxed">
                Opera desde cualquier dispositivo. Sincronización PWA local-first con Offline Vault y compatibilidad total con periféricos.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="group p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-purple-500/50 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                <BrainCircuit className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">IA Operativa</h3>
              <p className="text-slate-400 leading-relaxed">
                Asistente autónomo que atiende clientes, redacta facturas, cruza bases de datos y genera proyecciones de ventas en tiempo real.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="group p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-sky-500/50 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Bóveda Criptográfica</h3>
              <p className="text-slate-400 leading-relaxed">
                Arquitectura de base de datos aislada (Siloed). Las operaciones offline generan Hash Chains para asegurar la integridad contable total.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Wizard Section */}
      <section id="deploy" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 to-slate-950 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Instancia tu Imperio</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Define los parámetros de tu servidor y lanza tu entorno de producción en tiempo real.</p>
          </div>
          
          <div className="backdrop-blur-xl bg-slate-900/50 border border-slate-800/80 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-indigo-900/20">
            <DeploymentWizard />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800/60 bg-slate-950 text-center text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-400">A</div>
            <span className="font-semibold text-slate-300">Admin.com</span>
          </div>
          <p>┬® 2026 Admin.com. Infraestructura Soberana.</p>
        </div>
      </footer>
    </div>
  );
}
