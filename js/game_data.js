function savePlayerState(playerState) {
    // Converte o objeto do jogador em texto e guarda no localStorage
    localStorage.setItem('legendOfPlate_playerState', JSON.stringify(playerState));
}

function loadPlayerState() {
    // Pega o texto do localStorage
    const savedStateJSON = localStorage.getItem('legendOfPlate_playerState');

    // Se não houver nada salvo (primeira vez jogando), retorna null
    if (!savedStateJSON) {
        return null;
    }

    // Se houver dados, converte de volta para um objeto e o retorna
    return JSON.parse(savedStateJSON);
}

// Função para iniciar um novo jogo com valores padrão
function getNewPlayerState() {
    return {
        x: 385, y: 520, speed: 4,
        baseHealth: 10, bonusHealth: 0,
        get health() { return this.baseHealth + this.bonusHealth },
        set health(v) { this.baseHealth = v > 0 ? v - this.bonusHealth : 0 - this.bonusHealth },
        baseAttack: 1, bonusAttack: 0,
        get attack() { return this.baseAttack + this.bonusAttack },
        set attack(v) { this.baseAttack = v - this.bonusAttack },
        shield: 0, coins: 30,
        isInvincible: false, invincibilityTimer: 0,
        lastMoveDirection: { x: 1, y: 0 },
        inventory: {}, // Usaremos um objeto simples para facilitar a gravação
        shopRerolls: 0,
        // ... (adicione aqui todos os outros status do seu playerState original)
        // Itens de salas especiais
        specialItems: []
    };
}