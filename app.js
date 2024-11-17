// Função para carregar as tarefas do localStorage
function loadTasks(filterCategory = '') {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('task-list').getElementsByTagName('tbody')[0];
    taskList.innerHTML = ''; // Limpa a lista antes de recarregar

    // Filtra tarefas por categoria (se houver filtro)
    const filteredTasks = tasks.filter(task => 
        task.category.toLowerCase().includes(filterCategory.toLowerCase()) ||
        task.text.toLowerCase().includes(filterCategory.toLowerCase())
    );

    // Ordena as tarefas em ordem alfabética
    filteredTasks.sort((a, b) => a.text.localeCompare(b.text));

    filteredTasks.forEach((task, index) => {
        const row = taskList.insertRow();
        row.classList.add('border-t', 'border-gray-200');
        row.innerHTML = `
            <td class="p-3 text-gray-700">${task.text}</td>
            <td class="p-3 text-gray-700">${task.time}</td>
            <td class="p-3 text-gray-700">${task.category}</td>
            <td class="p-3 text-gray-700">${task.date}</td> <!-- Exibe a data -->
            <td class="p-3 text-gray-700">
                <button class="edit-btn bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500" data-index="${index}">Editar</button>
                <button class="delete-btn bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 ml-2" data-index="${index}">Excluir</button>
            </td>
        `;
    });

    // Adiciona evento de edição e exclusão
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            editTask(index);
        });
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            deleteTask(index);
        });
    });
}

// Função para salvar tarefas no localStorage
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Função para editar tarefa
function editTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks[index];

    // Preenche o modal de edição com os dados da tarefa
    document.getElementById('edit-task-input').value = task.text;
    document.getElementById('edit-task-time').value = task.time;
    document.getElementById('edit-task-category').value = task.category;
    document.getElementById('edit-modal').classList.remove('hidden');

    // Salva a edição da tarefa
    document.getElementById('save-task-edit-btn').onclick = () => {
        task.text = document.getElementById('edit-task-input').value;
        task.time = document.getElementById('edit-task-time').value;
        task.category = document.getElementById('edit-task-category').value;
        saveTasks(tasks);
        loadTasks();
        document.getElementById('edit-modal').classList.add('hidden');
        showGraph();  
    };
}

// Função para excluir tarefa
function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    saveTasks(tasks);
    loadTasks();
    showGraph(); 
}

let chartInstance = null;  
// Função para mostrar ou atualizar o gráfico
function showGraph() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const today = new Date().toLocaleDateString('pt-BR');

    // Filtra as tarefas que foram feitas hoje
    const todayTasks = tasks.filter(task => task.date === today);

    // Organiza as tarefas por categoria
    const categories = [...new Set(todayTasks.map(task => task.category))]; 
    const categoryData = categories.map(category => {
        return todayTasks.filter(task => task.category.toLowerCase() === category.toLowerCase()).length;
    });

    // Define as cores para cada categoria
    const categoryColors = {
        "Trabalho": "rgb(255, 99, 132)", 
        "Estudo": "rgb(54, 162, 235)",    
        "Lazer": "rgb(255, 159, 64)",    
        "Casa": "rgb(75, 192, 192)",      
        "Saúde": "rgb(153, 102, 255)"     
    };

    // Atribui as cores para cada categoria
    const backgroundColors = categories.map(category => categoryColors[category] || 'rgb(200, 200, 200)'); // Cor padrão se não encontrar a categoria
    const borderColors = categories.map(category => categoryColors[category] || 'rgb(100, 100, 100)'); // Cor de borda

    // Verifica se já existe um gráfico
    const ctx = document.getElementById('taskChart').getContext('2d');
    
    if (chartInstance) {
        // Atualiza os dados do gráfico existente
        chartInstance.data.labels = categories;
        chartInstance.data.datasets[0].data = categoryData;
        chartInstance.data.datasets[0].backgroundColor = backgroundColors;
        chartInstance.data.datasets[0].borderColor = borderColors;
        chartInstance.update();  // Atualiza o gráfico
    } else {
        // Cria um novo gráfico se não existir
        chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: categories,
                datasets: [{
                    label: 'Tarefas de Hoje',
                    data: categoryData,
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Mostra o gráfico e esconde a tabela
    document.getElementById('chart-container').classList.remove('hidden');
    document.getElementById('task-list-container').classList.add('hidden');
}

// Mostrar tarefas e gráficos
document.getElementById('show-all-tasks').addEventListener('click', () => {
    document.getElementById('chart-container').classList.add('hidden');
    document.getElementById('task-list-container').classList.remove('hidden');
    loadTasks();
});

document.getElementById('show-graph').addEventListener('click', () => {
    document.getElementById('task-list-container').classList.add('hidden');
    showGraph();
});

// Adicionar nova tarefa
document.getElementById('add-task-btn').addEventListener('click', () => {
    document.getElementById('add-task-modal').classList.remove('hidden');
});

// Fechar o modal de adicionar tarefa
document.getElementById('close-task-modal-btn').addEventListener('click', () => {
    document.getElementById('add-task-modal').classList.add('hidden');
});

// Salvar a nova tarefa
document.getElementById('save-task-btn').addEventListener('click', () => {
    const taskText = document.getElementById('task-input').value;
    const taskHour = document.getElementById('task-time').value;
    const taskCategory = document.getElementById('task-category').value;

    if (taskText && taskHour && taskCategory) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const currentDate = new Date().toLocaleDateString('pt-BR');
        tasks.push({ text: taskText, time: taskHour, category: taskCategory, date: currentDate });
        saveTasks(tasks);
        loadTasks();
        showGraph();  
        document.getElementById('add-task-modal').classList.add('hidden');
    }
});

// Fechar modal de edição
document.getElementById('close-modal-btn').addEventListener('click', () => {
    document.getElementById('edit-modal').classList.add('hidden');
});

// Carregar tarefas e gráfico inicialmente
loadTasks();
