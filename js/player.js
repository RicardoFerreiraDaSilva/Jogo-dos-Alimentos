// JS/Player.js

// --- ESTADO INICIAL DO JOGADOR ---
// Este objeto contém absolutamente tudo que define nosso jogador.
let playerState = { 
    x: 385, 
    y: 285, 
    speed: 4,
    baseHealth: 10,
    bonusHealth: 0,
    get health() { return this.baseHealth + this.bonusHealth },
    set health(v) { this.baseHealth = v - this.bonusHealth },
    baseAttack: 1,
    bonusAttack: 0,
    get attack() { return this.baseAttack + this.bonusAttack },
    set attack(v) { this.baseAttack = v - this.bonusAttack },
    shield: 0,
    coins: 30,
    isInvincible: false,
    invincibilityTimer: 0,
    lastMoveDirection: { x: 1, y: 0 },
    inventory: new Map(),
    shopRerolls: 0,
    // Upgrades
    milkUpgrade: false,
    bananaUpgrade: false,
    hasPoisonUpgrade: false,
    poisonDPS: 1,
    hasGrapesUpgrade: false,
    canSpawnEggs: false,
    aimInMoveDirection: false,
    hasDoubleShot: false,
    hasPastaShot: false,
    pastaFireRate: 1,
    pastaFireTimer: 1,
    pastaSlowFactor: 0,
    watermelonOrb: { damage: 0, angle: 0, radius: 60 },
    extraShopSlots: 0,
    orangeUpgrade: 0,
    orangeFireTimer: 5,
    orangeJuiceUpgrade: false,
    hasHomingShots: false,
    companionBuffs: { bonusDamage: 0, bonusHealth: 0 },
    butterStacks: 0,
    hasGrapeJuice: false,
    greenGrapesStacks: 0,
    hasGrapePie: false,
    hasGrapeCuca: false,
    hasWhiteGrape: false
};

// Objeto para rastrear as teclas de movimento pressionadas
const keys = { 
    ArrowUp: false, 
    ArrowDown: false, 
    ArrowLeft: false, 
    ArrowRight: false 
};