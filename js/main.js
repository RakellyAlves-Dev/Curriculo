/**
 * Arquivo principal que inicializa a aplicação
 */
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar manipuladores de formulário
    FormHandlers.initializeFormHandlers();
   
    // Carregar dados salvos
    DataStorage.loadFormData();
   
    // Adicionar eventos para botões de ação
    document.getElementById('saveBtn').addEventListener('click', DataStorage.saveFormData);
    document.getElementById('exportWordBtn').addEventListener('click', ExportUtils.exportToWord);
   
    // Verificar se há dados salvos e mostrar notificação
    if (localStorage.getItem('resumeData')) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = 'Dados carregados do armazenamento local';
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = '#3498db';
        notification.style.color = 'white';
        notification.style.padding = '10px 20px';
        notification.style.borderRadius = '4px';
        notification.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        notification.style.zIndex = '1000';
        notification.style.transition = 'opacity 0.5s';
       
        document.body.appendChild(notification);
       
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 3000);
    }
    // RealtimePreview
if (typeof RealtimePreviewSetup !== 'undefined' && RealtimePreviewSetup.initialize) {
    RealtimePreviewSetup.initialize();
}

});
