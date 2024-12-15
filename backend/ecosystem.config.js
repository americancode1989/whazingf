module.exports = [{
  script: 'dist/server.js',
  name: 'Whazing-backend',
  exec_mode: 'fork',
  cron_restart: '00 00 * * *',
  instances: 1,
  //max_memory_restart: '1024M', // Configuração para reiniciar quando atingir 769 MB de memória
  //node_args: '--max-old-space-size=1024', // Limite de memória do Node.js para 769 MB
  watch: false
}]
