'use client';

import React, { useState } from 'react';
import { Server, Globe, Key, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

export default function DeploymentWizard() {
  const [step, setStep] = useState(1);
  const [tenantName, setTenantName] = useState('');
  const [loading, setLoading] = useState(false);
  const [deployed, setDeployed] = useState(false);

  const handleDeploy = async () => {
    if (!tenantName) return;
    setLoading(true);
    
    try {
      const res = await fetch('/api/deploy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tenantId: tenantName.toLowerCase().replace(/[^a-z0-9-]/g, '') })
      });
      
      if (res.ok) {
        setTimeout(() => {
          setLoading(false);
          setDeployed(true);
          setStep(3);
        }, 2000);
      } else {
        alert("Error al aprovisionar el servidor");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progreso */}
      <div className="flex items-center justify-between mb-12 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-800 rounded-full -z-10"></div>
        <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full -z-10 transition-all duration-500 ease-out`} style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}></div>
        
        {[1, 2, 3].map((s) => (
          <div key={s} className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-4 transition-all duration-300 ${
            step >= s 
              ? 'bg-slate-900 border-indigo-500 text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.4)]' 
              : 'bg-slate-900 border-slate-800 text-slate-600'
          }`}>
            {s}
          </div>
        ))}
      </div>

      <div className="bg-slate-950/50 rounded-2xl p-8 border border-slate-800/80 shadow-inner">
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                <Globe className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Dominio Empresarial</h3>
                <p className="text-slate-400">Define el espacio de trabajo de tu sistema.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Nombre de la Empresa</label>
                <div className="relative group">
                  <input 
                    type="text" 
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    placeholder="ej. ferreteria-el-sol"
                    className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-4 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-lg font-medium"
                  />
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500 font-medium">
                    .admin.com
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setStep(2)}
                disabled={!tenantName}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 mt-8"
              >
                Continuar <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center py-8">
            <div className="w-20 h-20 mx-auto bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center mb-6 relative">
               <Server className={`w-10 h-10 ${loading ? 'text-indigo-400 animate-pulse' : 'text-slate-400'}`} />
               {loading && <div className="absolute inset-0 border-2 border-indigo-500/50 rounded-2xl animate-ping" />}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Aprovisionando Nodo</h3>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">Estamos aislando tu base de datos y generando los certificados TLS bajo demanda para tu nuevo dominio.</p>
            
            <button 
              onClick={handleDeploy}
              disabled={loading}
              className="w-full py-4 bg-white text-slate-950 hover:bg-slate-200 disabled:opacity-50 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" /> Creando infraestructura...
                </>
              ) : (
                <>
                  <Key className="w-6 h-6" /> Confirmar Despliegue
                </>
              )}
            </button>
          </div>
        )}

        {step === 3 && deployed && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center py-8">
            <div className="w-20 h-20 mx-auto bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">¡Infraestructura Viva!</h3>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              Tu nodo está completamente operativo y tu base de datos ha sido aislada criptográficamente.
            </p>
            
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl mb-8 flex flex-col items-center">
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-2">URL de tu ERP</span>
              <a href={`https://${tenantName.toLowerCase().replace(/[^a-z0-9-]/g, '')}.admin.com`} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors">
                {tenantName.toLowerCase().replace(/[^a-z0-9-]/g, '')}.admin.com
              </a>
            </div>

            <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-xl font-bold transition-all w-full">
              Ir al Panel de Administración
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
