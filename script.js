// ============================================================================
// 1. MULTI-LANGUAGE TRANSLATION DICTIONARY (EN / VI / JA)
// ============================================================================
const I18N = {
  en: {
    appTitle: '印鑑 HANKO-BAKA (判子馬鹿)',
    appSubtitle: 'Turn Goofy Doodles Into Traditional Vermilion Stamps in 10 Seconds',
    inkReady: (pct) => `🔴 Ink Level: ${pct}% (Ready to stamp!)`,
    inkLow: (pct) => `🟠 Ink Level: ${pct}% (Running dry! Click Shuniku pad to refill!)`,
    station1Title: '1. CARVE STAMP & DIP SHUNIKU INK (朱肉)',
    carvePrompt: 'Draw or trace inside the carving block:',
    toolCarve: '✒️ Carve',
    toolErase: '🩹 Eraser',
    toolUndo: '↩️ Undo',
    toolClear: '🗑️',
    shunikuPadHtml: 'DIP INK<br>SHUNIKU<br>(朱肉)',
    shunikuHint: 'Stamping depletes ink. Click the Shuniku pad to refill!',
    presetTitle: '🎨 Goofy Templates & Trace Stencils:',
    traceModeLabel: '✏️ Trace Stencil Mode (Ghost Guide)',
    p_cryingCat: '🐱 Crying Cat',
    p_blepCat: '😼 Blep Cat',
    p_alien: '👽 Silly Alien',
    p_shiba: '🐕 Shiba Doge',
    p_frog: '🐸 Derpy Frog',
    p_bunny: '🐰 Peace Bunny',
    p_duck: '🦆 Knife Duck',
    p_fish: '🐟 Dried Fish',
    shapeLabel: 'Stone Block Shape:',
    shapeCircle: 'Circle (Maru-in)',
    shapeSquare: 'Clan Square (Kaku-in)',
    shapeOval: 'Classic Oval (Koban-in)',
    textLabel: 'Engraved Text (Max 10 chars):',
    defaultStampText: 'APPROVED',
    gritLabel: 'Stone Grit / Ink Wear',
    brushLabel: 'Brush / Chisel Size',
    downloadStickerBtn: '📥 DOWNLOAD TRANSPARENT STAMP (.PNG) AS STICKER',
    station2Title: '2. CLICK PAPER / PHOTO TO SLAM STAMP "THUMP!"',
    stampSizeLabel: 'Stamp Press Size',
    uploadBtn: '🖼️ Upload Photo / Meme',
    undoStampBtn: '↩️ Undo Stamp',
    resetDocBtn: '📄 Fresh Washi Paper',
    downloadDocBtn: '💾 Save Stamped Image (.PNG)',
    docHeader: 'CERTIFICATE OF GOOFY AUTHENTICITY (証明書)',
    docSub: 'Click anywhere on this Washi sheet (or upload a meme) to slam your red stamp!'
  },
  vi: {
    appTitle: '印鑑 HANKO-BAKA (判子馬鹿)',
    appSubtitle: 'Biến Nét Vẽ Vô Tri Thành Con Dấu Đỏ Truyền Thống Trong 10 Giây',
    inkReady: (pct) => `🔴 Độ đậm mực: ${pct}% (Sẵn sàng đóng dấu!)`,
    inkLow: (pct) => `🟠 Độ đậm mực: ${pct}% (Sắp hết mực, bấm hộp Chu Sa để chấm thêm!)`,
    station1Title: '1. KHẮC DẤU & CHẤM MỰC CHU SA (朱肉)',
    carvePrompt: 'Vẽ hoặc đồ theo nét mờ trong khung khắc:',
    toolCarve: '✒️ Khắc nét',
    toolErase: '🩹 Cục tẩy',
    toolUndo: '↩️ Hoàn tác',
    toolClear: '🗑️',
    shunikuPadHtml: 'CHẤM MỰC<br>CHU SA<br>(朱肉)',
    shunikuHint: 'Đóng nhiều sẽ mờ mực. Bấm hộp mực để nạp lại!',
    presetTitle: '🎨 Mẫu Vẽ Có Sẵn (Bấm để nạp hoặc Đồ vẽ):',
    traceModeLabel: '✏️ Chế độ Đồ Vẽ (Hiện nét mờ để tô theo)',
    p_cryingCat: '🐱 Mèo khóc',
    p_blepCat: '😼 Mèo lè lưỡi',
    p_alien: '👽 Người ngoài hành tinh',
    p_shiba: '🐕 Chó Shiba',
    p_frog: '🐸 Ếch vô tri',
    p_bunny: '🐰 Thỏ xin chào',
    p_duck: '🦆 Vịt cầm dao',
    p_fish: '🐟 Cá khô',
    shapeLabel: 'Hình dáng phôi đá:',
    shapeCircle: 'Tròn truyền thống (Maru-in)',
    shapeSquare: 'Vuông gia tộc (Kaku-in)',
    shapeOval: 'Bầu dục cổ điển (Koban-in)',
    textLabel: 'Chữ khắc kèm (Tối đa 10 ký tự):',
    defaultStampText: 'ĐÃ DUYỆT',
    gritLabel: 'Độ mẻ đá / Rỗ mực',
    brushLabel: 'Độ dày nét khắc',
    downloadStickerBtn: '📥 TẢI FILE CON DẤU NỀN TRONG SUỐT (.PNG) LÀM STICKER',
    station2Title: '2. CLICK LÊN GIẤY / ẢNH ĐỂ ĐÓNG DẤU "CỘP!"',
    stampSizeLabel: 'Kích cỡ đóng dấu',
    uploadBtn: '🖼️ Tải ảnh / Meme lên',
    undoStampBtn: '↩️ Xóa dấu vừa đóng',
    resetDocBtn: '📄 Làm mới giấy Washi',
    downloadDocBtn: '💾 Tải Ảnh Đã Đóng Dấu (.PNG)',
    docHeader: 'GIẤY CHỨNG NHẬN TÁC QUYỀN VÔ TRI (証明書)',
    docSub: 'Click bất kỳ đâu lên tờ giấy này (hoặc tải ảnh meme lên) để đóng mộc đỏ!'
  },
  ja: {
    appTitle: '印鑑 HANKO-BAKA (判子馬鹿)',
    appSubtitle: 'ゆるい落書きを10秒で本格的な朱肉ハンコに変換！',
    inkReady: (pct) => `🔴 朱肉残量: ${pct}% (押印準備OK！)`,
    inkLow: (pct) => `🟠 朱肉残量: ${pct}% (インク切れ間近！朱肉パッドをクリックして補充)`,
    station1Title: '1. 印面を彫る ＆ 朱肉をつける (彫刻)',
    carvePrompt: '枠内にイラストを描くか、下絵をなぞってください:',
    toolCarve: '✒️ 彫る',
    toolErase: '🩹 消しゴム',
    toolUndo: '↩️ 戻す',
    toolClear: '🗑️',
    shunikuPadHtml: '朱肉を<br>つける<br>(補充)',
    shunikuHint: '何回も押すと薄くなります。朱肉を押して補充しよう！',
    presetTitle: '🎨 ゆるキャラ見本 ＆ なぞり描き下絵:',
    traceModeLabel: '✏️ なぞり描きモード (薄い下絵を表示)',
    p_cryingCat: '🐱 泣き猫',
    p_blepCat: '😼 ぺろ猫',
    p_alien: '👽 宇宙人',
    p_shiba: '🐕 柴犬',
    p_frog: '🐸 カエル',
    p_bunny: '🐰 ピース兎',
    p_duck: '🦆 ナイフ鴨',
    p_fish: '🐟 干物',
    shapeLabel: '印影のカタチ:',
    shapeCircle: '丸印 (伝統的)',
    shapeSquare: '角印 (社判・落款風)',
    shapeOval: '小判印 (クラシック)',
    textLabel: '刻印テキスト (最大10文字):',
    defaultStampText: '承認済',
    gritLabel: '石の欠け・かすれ具合',
    brushLabel: '彫り線の太さ',
    downloadStickerBtn: '📥 透過PNGスタンプとして保存 (ステッカー用)',
    station2Title: '2. 和紙や画像をクリックして「ドン！」と押印',
    stampSizeLabel: '押印サイズ',
    uploadBtn: '🖼️ 画像・ミームを読込',
    undoStampBtn: '↩️ 押印を戻す',
    resetDocBtn: '📄 新しい和紙にする',
    downloadDocBtn: '💾 押印済み画像を保存 (.PNG)',
    docHeader: '無意味作品認定証明書 (HANKO-BAKA)',
    docSub: 'この和紙の好きな場所をクリックしてハンコを押してください！'
  }
};

let currentLang = 'en';

// ============================================================================
// 2. SOUND ENGINE (STAMP THUD & INK SQUISH VIA WEB AUDIO API)
// ============================================================================
const StampAudio = {
  ctx: null,
  init() {
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (this.ctx.state === 'suspended') this.ctx.resume();
  },
  playStampThump() {
    this.init();
    const now = this.ctx.currentTime;
    // Heavy low-end desk thump
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(32, now + 0.16);
    gain.gain.setValueAtTime(0.9, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
    osc.connect(gain).connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.19);

    // Paper slap crack
    const bufferSize = this.ctx.sampleRate * 0.05;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const noise = this.ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 900;
    const nGain = this.ctx.createGain();
    nGain.gain.setValueAtTime(0.5, now);
    nGain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
    noise.connect(filter).connect(nGain).connect(this.ctx.destination);
    noise.start(now);
  },
  playInkDip() {
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(480, now + 0.09);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    osc.connect(gain).connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.1);
  }
};

// ============================================================================
// 3. GOOFY ANIMAL, CAT & ALIEN VECTOR PRESETS (FOR DIRECT LOAD OR TRACING)
// ============================================================================
const PRESET_DRAWERS = {
  cryingCat(ctx) {
    // Head + ears
    ctx.beginPath();
    ctx.moveTo(65, 95);
    ctx.lineTo(55, 45);
    ctx.lineTo(95, 70);
    ctx.lineTo(125, 70);
    ctx.lineTo(165, 45);
    ctx.lineTo(155, 95);
    ctx.quadraticCurveTo(170, 145, 110, 150);
    ctx.quadraticCurveTo(50, 145, 65, 95);
    ctx.stroke();
    // Crying eyes + waterfall tears + wobbly mouth
    ctx.beginPath();
    ctx.moveTo(80, 100); ctx.lineTo(98, 100);
    ctx.moveTo(122, 100); ctx.lineTo(140, 100);
    ctx.moveTo(88, 102); ctx.quadraticCurveTo(82, 125, 88, 144);
    ctx.moveTo(132, 102); ctx.quadraticCurveTo(138, 125, 132, 144);
    ctx.moveTo(98, 125); ctx.quadraticCurveTo(105, 118, 110, 125);
    ctx.quadraticCurveTo(115, 118, 122, 125);
    ctx.stroke();
  },

  blepCat(ctx) {
    // Round loaf cat head
    ctx.beginPath();
    ctx.moveTo(60, 92);
    ctx.lineTo(52, 46);
    ctx.lineTo(92, 68);
    ctx.lineTo(128, 68);
    ctx.lineTo(168, 46);
    ctx.lineTo(160, 92);
    ctx.quadraticCurveTo(172, 148, 110, 148);
    ctx.quadraticCurveTo(48, 148, 60, 92);
    ctx.stroke();
    // Derpy wide-spaced eyes
    ctx.beginPath();
    ctx.arc(84, 98, 5, 0, Math.PI * 2);
    ctx.arc(136, 98, 5, 0, Math.PI * 2);
    ctx.stroke();
    // :3 mouth + Blep tongue sticking out
    ctx.beginPath();
    ctx.moveTo(95, 112);
    ctx.quadraticCurveTo(102, 120, 110, 112);
    ctx.quadraticCurveTo(118, 120, 125, 112);
    ctx.moveTo(103, 116);
    ctx.quadraticCurveTo(103, 136, 110, 136);
    ctx.quadraticCurveTo(117, 136, 117, 116);
    ctx.stroke();
    // Whiskers
    ctx.beginPath();
    ctx.moveTo(42, 102); ctx.lineTo(62, 105);
    ctx.moveTo(42, 115); ctx.lineTo(62, 113);
    ctx.moveTo(178, 102); ctx.lineTo(158, 105);
    ctx.moveTo(178, 115); ctx.lineTo(158, 113);
    ctx.stroke();
  },

  alien(ctx) {
    // Classic big-brained alien head tapering to chin
    ctx.beginPath();
    ctx.moveTo(110, 48);
    ctx.bezierCurveTo(172, 48, 168, 115, 110, 152);
    ctx.bezierCurveTo(52, 115, 48, 48, 110, 48);
    ctx.stroke();
    // Center antenna + bulb
    ctx.beginPath();
    ctx.moveTo(110, 48); ctx.lineTo(110, 28);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(110, 23, 5, 0, Math.PI * 2);
    ctx.stroke();
    // Giant slanted almond alien eyes
    ctx.beginPath();
    ctx.ellipse(86, 96, 16, 9, 0.35, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(134, 96, 16, 9, -0.35, 0, Math.PI * 2);
    ctx.stroke();
    // Tiny smug smile
    ctx.beginPath();
    ctx.arc(110, 126, 9, 0.2, Math.PI - 0.2);
    ctx.stroke();
  },

  shiba(ctx) {
    // Chubby Shiba Inu cheeks & pointed ears
    ctx.beginPath();
    ctx.moveTo(64, 86);
    ctx.lineTo(54, 42);
    ctx.lineTo(92, 64);
    ctx.lineTo(128, 64);
    ctx.lineTo(166, 42);
    ctx.lineTo(156, 86);
    ctx.bezierCurveTo(182, 115, 162, 152, 110, 152);
    ctx.bezierCurveTo(58, 152, 38, 115, 64, 86);
    ctx.stroke();
    // Iconic Shiba thick eyebrows
    ctx.beginPath();
    ctx.ellipse(86, 80, 7, 3, -0.2, 0, Math.PI * 2);
    ctx.ellipse(134, 80, 7, 3, 0.2, 0, Math.PI * 2);
    ctx.stroke();
    // Side-eye doge look + nose + smug grin
    ctx.beginPath();
    ctx.arc(88, 95, 4, 0, Math.PI * 2);
    ctx.arc(136, 95, 4, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(110, 108, 5, 0, Math.PI * 2);
    ctx.moveTo(110, 113);
    ctx.lineTo(110, 123);
    ctx.moveTo(92, 124);
    ctx.quadraticCurveTo(110, 134, 132, 118);
    ctx.stroke();
  },

  frog(ctx) {
    // Bulging frog eyes on top of flat head
    ctx.beginPath();
    ctx.arc(78, 72, 20, Math.PI * 0.85, Math.PI * 2.15);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(142, 72, 20, Math.PI * 0.85, Math.PI * 2.15);
    ctx.stroke();
    // Pupils
    ctx.beginPath();
    ctx.arc(78, 72, 5, 0, Math.PI * 2);
    ctx.arc(142, 72, 5, 0, Math.PI * 2);
    ctx.stroke();
    // Wide frog body
    ctx.beginPath();
    ctx.moveTo(58, 78);
    ctx.quadraticCurveTo(38, 118, 65, 144);
    ctx.lineTo(155, 144);
    ctx.quadraticCurveTo(182, 118, 162, 78);
    ctx.moveTo(96, 70);
    ctx.lineTo(124, 70);
    ctx.stroke();
    // Giant wide unbothered line mouth
    ctx.beginPath();
    ctx.moveTo(64, 114);
    ctx.quadraticCurveTo(110, 124, 156, 114);
    ctx.stroke();
  },

  bunny(ctx) {
    // Long bunny ears
    ctx.beginPath();
    ctx.ellipse(88, 58, 12, 32, -0.1, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(132, 58, 12, 32, 0.1, 0, Math.PI * 2);
    ctx.stroke();
    // Round bunny face
    ctx.beginPath();
    ctx.arc(110, 114, 40, 0, Math.PI * 2);
    ctx.stroke();
    // Deadpan eyes + Y nose
    ctx.beginPath();
    ctx.arc(94, 108, 3.5, 0, Math.PI * 2);
    ctx.arc(126, 108, 3.5, 0, Math.PI * 2);
    ctx.moveTo(105, 116); ctx.lineTo(110, 121); ctx.lineTo(115, 116);
    ctx.moveTo(110, 121); ctx.lineTo(110, 129);
    ctx.stroke();
  },

  duck(ctx) {
    // Duck head + body
    ctx.beginPath();
    ctx.arc(98, 78, 26, 0, Math.PI * 2);
    ctx.stroke();
    // Duck bill
    ctx.beginPath();
    ctx.ellipse(64, 82, 16, 7, -0.1, 0, Math.PI * 2);
    ctx.stroke();
    // Angry eyebrow + eye
    ctx.beginPath();
    ctx.moveTo(84, 64); ctx.lineTo(102, 72);
    ctx.arc(92, 74, 3.5, 0, Math.PI * 2);
    ctx.stroke();
    // Plump body + wing holding a tiny butter knife
    ctx.beginPath();
    ctx.ellipse(110, 126, 38, 24, 0, 0, Math.PI * 2);
    ctx.stroke();
    // Knife on the right
    ctx.beginPath();
    ctx.moveTo(132, 118); ctx.lineTo(176, 86);
    ctx.lineTo(182, 102); ctx.lineTo(142, 126);
    ctx.closePath();
    ctx.stroke();
  },

  fish(ctx) {
    // Fish body
    ctx.beginPath();
    ctx.ellipse(105, 105, 55, 28, -0.2, 0, Math.PI * 2);
    ctx.stroke();
    // Tail
    ctx.beginPath();
    ctx.moveTo(155, 95); ctx.lineTo(185, 70);
    ctx.lineTo(178, 115); ctx.closePath();
    ctx.stroke();
    // Dead X eye & ribs
    ctx.beginPath();
    ctx.moveTo(68, 98); ctx.lineTo(80, 110);
    ctx.moveTo(80, 98); ctx.lineTo(68, 110);
    ctx.moveTo(100, 88); ctx.lineTo(105, 122);
    ctx.moveTo(120, 85); ctx.lineTo(125, 118);
    ctx.stroke();
  }
};

// ============================================================================
// 4. CARVING CANVAS, TRACE GUIDE LAYER & UNDO STACK
// ============================================================================
const guideCanvas = document.getElementById('stencilCanvas');
const guideCtx = guideCanvas.getContext('2d');
const carveCanvas = document.getElementById('carveCanvas');
const carveCtx = carveCanvas.getContext('2d');

let isCarving = false;
let currentTool = 'carve'; // 'carve' | 'erase'
let currentPresetKey = 'cryingCat';
let carveHistory = [];
let inkLevel = 1.0;

function saveCarveSnapshot() {
  if (carveHistory.length >= 15) carveHistory.shift();
  carveHistory.push(carveCtx.getImageData(0, 0, carveCanvas.width, carveCanvas.height));
}

function clearCarveCanvas(recordUndo = true) {
  if (recordUndo) saveCarveSnapshot();
  carveCtx.clearRect(0, 0, carveCanvas.width, carveCanvas.height);
}

function renderTraceGuide(presetKey) {
  guideCtx.clearRect(0, 0, guideCanvas.width, guideCanvas.height);
  const traceEnabled = document.getElementById('traceModeCheckbox').checked;
  if (!traceEnabled || !PRESET_DRAWERS[presetKey]) return;

  guideCtx.save();
  guideCtx.strokeStyle = 'rgba(37, 99, 235, 0.38)';
  guideCtx.lineWidth = 5;
  guideCtx.setLineDash([5, 5]);
  guideCtx.lineCap = 'round';
  guideCtx.lineJoin = 'round';
  PRESET_DRAWERS[presetKey](guideCtx);
  guideCtx.restore();
}

function applyPreset(presetKey) {
  currentPresetKey = presetKey;
  const traceEnabled = document.getElementById('traceModeCheckbox').checked;

  // Highlight active preset button
  document.querySelectorAll('.stencil-btn').forEach((btn) => {
    btn.classList.toggle('active', ({ cryingCat: 'cryingCat', blepCat: 'blepCat', sillyAlien: 'alien', shibaDog: 'shiba', derpyFrog: 'frog', peaceBunny: 'bunny', knifeDuck: 'duck', driedFish: 'fish' })[btn.dataset.template] === presetKey);
  });

  if (traceEnabled) {
    // In Trace Mode ("Đồ vẽ"): Clear main canvas & show ghost blue guide underneath
    clearCarveCanvas(true);
    renderTraceGuide(presetKey);
  } else {
    // Direct Mode: Draw preset directly onto the carving block in vermilion
    guideCtx.clearRect(0, 0, guideCanvas.width, guideCanvas.height);
    clearCarveCanvas(true);
    carveCtx.save();
    carveCtx.strokeStyle = '#d92b27';
    carveCtx.lineWidth = parseInt(document.getElementById('brushRange').value, 10) || 6;
    carveCtx.lineCap = 'round';
    carveCtx.lineJoin = 'round';
    PRESET_DRAWERS[presetKey](carveCtx);
    carveCtx.restore();
  }
}

function getCarveCoords(e) {
  const r = carveCanvas.getBoundingClientRect();
  return {
    x: (e.clientX - r.left) * (carveCanvas.width / r.width),
    y: (e.clientY - r.top) * (carveCanvas.height / r.height)
  };
}

carveCanvas.addEventListener('pointerdown', (e) => {
  saveCarveSnapshot();
  isCarving = true;
  if (carveCanvas.setPointerCapture) carveCanvas.setPointerCapture(e.pointerId);
  const p = getCarveCoords(e);
  const brushSize = parseInt(document.getElementById('brushRange').value, 10);

  carveCtx.save();
  if (currentTool === 'erase') {
    carveCtx.globalCompositeOperation = 'destination-out';
    carveCtx.lineWidth = brushSize * 2.2;
  } else {
    carveCtx.globalCompositeOperation = 'source-over';
    carveCtx.strokeStyle = '#d92b27';
    carveCtx.lineWidth = brushSize;
  }
  carveCtx.lineCap = 'round';
  carveCtx.lineJoin = 'round';
  carveCtx.beginPath();
  carveCtx.moveTo(p.x, p.y);
  carveCtx.lineTo(p.x + 0.1, p.y + 0.1);
  carveCtx.stroke();
});

carveCanvas.addEventListener('pointermove', (e) => {
  if (!isCarving) return;
  const p = getCarveCoords(e);
  carveCtx.lineTo(p.x, p.y);
  carveCtx.stroke();
});

function finishCarving() {
  if (isCarving) { carveCtx.restore(); isCarving = false; }
}
window.addEventListener('pointerup', finishCarving);
window.addEventListener('pointercancel', finishCarving);

// Tool Buttons (Carve, Eraser, Undo, Clear)
document.getElementById('toolCarveBtn').addEventListener('click', () => {
  currentTool = 'carve';
  document.getElementById('toolCarveBtn').classList.add('active');
  document.getElementById('toolEraserBtn').classList.remove('active');
});

document.getElementById('toolEraserBtn').addEventListener('click', () => {
  currentTool = 'erase';
  document.getElementById('toolEraserBtn').classList.add('active');
  document.getElementById('toolCarveBtn').classList.remove('active');
});

document.getElementById('toolUndoBtn').addEventListener('click', () => {
  if (carveHistory.length > 0) {
    const prev = carveHistory.pop();
    carveCtx.putImageData(prev, 0, 0);
  }
});

document.getElementById('toolClearBtn').addEventListener('click', () => {
  clearCarveCanvas(true);
});

// Preset & Trace Mode Listeners
document.querySelectorAll('.stencil-btn').forEach((btn) => {
  btn.addEventListener('click', () => applyPreset(({ cryingCat: 'cryingCat', blepCat: 'blepCat', sillyAlien: 'alien', shibaDog: 'shiba', derpyFrog: 'frog', peaceBunny: 'bunny', knifeDuck: 'duck', driedFish: 'fish' })[btn.dataset.template] || btn.dataset.template));
});

document.getElementById('traceModeCheckbox').addEventListener('change', (e) => {
  if (e.target.checked) {
    clearCarveCanvas(true);
    renderTraceGuide(currentPresetKey);
  } else {
    guideCtx.clearRect(0, 0, guideCanvas.width, guideCanvas.height);
    applyPreset(currentPresetKey);
  }
});

// Range Sliders
const gritRange = document.getElementById('gritRange');
gritRange.addEventListener('input', () => {
  document.getElementById('gritVal').textContent = gritRange.value;
});

const brushRange = document.getElementById('brushRange');
brushRange.addEventListener('input', () => {
  document.getElementById('brushVal').textContent = brushRange.value;
});

const stampSizeRange = document.getElementById('stampSizeRange');
stampSizeRange.addEventListener('input', () => {
  document.getElementById('stampSizeVal').textContent = stampSizeRange.value;
});

// ============================================================================
// 5. PROCEDURAL HANKO STAMP GENERATOR (DISTRESSED WOODCUT & STONE GRIT)
// ============================================================================
function generateHankoCanvas(opacityMultiplier = 1.0) {
  const size = 240;
  const off = document.createElement('canvas');
  off.width = size;
  off.height = size;
  const c = off.getContext('2d');

  const shape = document.getElementById('stampShape').value;
  const label = document.getElementById('stampText').value.trim();
  const grit = parseInt(gritRange.value, 10);

  c.save();
  c.globalAlpha = Math.max(0.2, opacityMultiplier);
  c.strokeStyle = '#d92b27';
  c.fillStyle = '#d92b27';

  // 1. Draw thick outer carved rim
  c.lineWidth = 12;
  c.beginPath();
  if (shape === 'circle') {
    c.arc(size / 2, size / 2, 102, 0, Math.PI * 2);
  } else if (shape === 'square') {
    c.roundRect(22, 22, size - 44, size - 44, 14);
  } else {
    c.ellipse(size / 2, size / 2, 78, 108, 0, 0, Math.PI * 2);
  }
  c.stroke();

  // Inner thin border line
  c.lineWidth = 3;
  c.stroke();

  // 2. Draw user's carved doodle scaled inside the stamp
  c.drawImage(carveCanvas, 20, 12, 200, 190);

  // 3. Draw custom text banner at bottom of stamp
  if (label) {
    c.font = '900 22px "Noto Serif JP", serif';
    c.textAlign = 'center';
    c.fillText(label.toUpperCase(), size / 2, 192, 190);
  }

  // 4. Procedural Woodcut Chipping & Ink Bleed (destination-out)
  c.globalCompositeOperation = 'destination-out';
  const blotchCount = grit * 14;
  for (let i = 0; i < blotchCount; i++) {
    const rx = Math.random() * size;
    const ry = Math.random() * size;
    const rad = Math.random() * (grit / 14) + 0.8;
    c.beginPath();
    c.arc(rx, ry, rad, 0, Math.PI * 2);
    c.fill();
  }

  // Scratch lines across the stone
  c.lineWidth = 1.8;
  for (let j = 0; j < Math.floor(grit / 4); j++) {
    c.beginPath();
    c.moveTo(Math.random() * size, Math.random() * size);
    c.lineTo(Math.random() * size, Math.random() * size);
    c.stroke();
  }

  c.restore();
  return off;
}

// ============================================================================
// 6. WASHI DOCUMENT / MEME CANVAS & STAMP HISTORY
// ============================================================================
const docCanvas = document.getElementById('documentCanvas');
const docCtx = docCanvas.getContext('2d');
let uploadedBgImg = null;
let stampedItems = []; // Stores placed stamps so language changes preserve stamps

function renderDocumentCanvas() {
  const dict = I18N[currentLang];
  docCtx.fillStyle = '#fdfbf7';
  docCtx.fillRect(0, 0, docCanvas.width, docCanvas.height);

  if (uploadedBgImg) {
    const scale = Math.min(docCanvas.width / uploadedBgImg.width, docCanvas.height / uploadedBgImg.height);
    const w = uploadedBgImg.width * scale;
    const h = uploadedBgImg.height * scale;
    docCtx.drawImage(uploadedBgImg, (docCanvas.width - w) / 2, (docCanvas.height - h) / 2, w, h);
  } else {
    // Traditional Japanese invoice/certificate lines
    docCtx.strokeStyle = '#d8cfc0';
    docCtx.lineWidth = 2;
    docCtx.strokeRect(20, 20, docCanvas.width - 40, docCanvas.height - 40);

    for (let x = 70; x < docCanvas.width - 40; x += 48) {
      docCtx.beginPath();
      docCtx.moveTo(x, 35);
      docCtx.lineTo(x, docCanvas.height - 35);
      docCtx.stroke();
    }

    docCtx.fillStyle = '#3a332c';
    docCtx.font = 'bold 17px "Noto Serif JP", serif';
    docCtx.fillText(dict.docHeader, 36, 56);
    docCtx.font = '12.5px monospace';
    docCtx.fillText(dict.docSub, 36, 82);
  }

  // Re-draw all placed stamps
  stampedItems.forEach((item) => {
    docCtx.save();
    docCtx.translate(item.x, item.y);
    docCtx.rotate(item.angle);
    docCtx.drawImage(item.img, -item.size / 2, -item.size / 2, item.size, item.size);
    docCtx.restore();
  });
}

function updateInkIndicator() {
  const pct = Math.round(inkLevel * 100);
  const dict = I18N[currentLang];
  const status = document.getElementById('inkStatus');
  status.textContent = pct > 35 ? dict.inkReady(pct) : dict.inkLow(pct);
}

// Dip into Shuniku Ink Pad
document.getElementById('shunikuPad').addEventListener('click', () => {
  inkLevel = 1.0;
  StampAudio.playInkDip();
  updateInkIndicator();
});

// Click on Document to Stamp!
docCanvas.addEventListener('pointerdown', (e) => {
  const rect = docCanvas.getBoundingClientRect();
  const x = (e.clientX - rect.left) * (docCanvas.width / rect.width);
  const y = (e.clientY - rect.top) * (docCanvas.height / rect.height);

  const hanko = generateHankoCanvas(inkLevel);
  const stampDisplaySize = parseInt(stampSizeRange.value, 10) || 135;
  const randomTilt = (Math.random() - 0.5) * 0.35;

  stampedItems.push({
    x,
    y,
    size: stampDisplaySize,
    angle: randomTilt,
    img: hanko
  });

  renderDocumentCanvas();

  // Screen shake & Sound
  StampAudio.playStampThump();
  document.body.classList.remove('shake-screen');
  void document.body.offsetWidth;
  document.body.classList.add('shake-screen');

  // Reduce ink slightly after each press
  inkLevel = Math.max(0.22, inkLevel - 0.18);
  updateInkIndicator();
});

// Undo Last Stamp on Document
document.getElementById('undoStampBtn').addEventListener('click', () => {
  if (stampedItems.length > 0) {
    stampedItems.pop();
    renderDocumentCanvas();
  }
});

// Upload custom background image
document.getElementById('bgUploadInput').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    const img = new Image();
    img.onload = () => {
      uploadedBgImg = img;
      renderDocumentCanvas();
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
});

document.getElementById('resetDocBtn').addEventListener('click', () => {
  uploadedBgImg = null;
  stampedItems = [];
  renderDocumentCanvas();
});

// Download Transparent Stamp Sticker (.PNG)
document.getElementById('downloadStampPngBtn').addEventListener('click', () => {
  const hanko = generateHankoCanvas(1.0);
  const a = document.createElement('a');
  a.download = `hanko-sticker-${Date.now()}.png`;
  a.href = hanko.toDataURL('image/png');
  a.click();
});

// Download Stamped Document (.PNG)
document.getElementById('downloadDocBtn').addEventListener('click', () => {
  const a = document.createElement('a');
  a.download = `stamped-document-${Date.now()}.png`;
  a.href = docCanvas.toDataURL('image/png');
  a.click();
});

// ============================================================================
// 7. LANGUAGE SWITCHER INITIALIZATION
// ============================================================================
function setLanguage(lang) {
  if (!I18N[lang]) return;
  const prevDefaultText = I18N[currentLang].defaultStampText;
  currentLang = lang;
  document.documentElement.lang = lang;

  const dict = I18N[lang];

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update all [data-i18n] text elements
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  // Update Shuniku pad multiline HTML
  const shunikuLabel = document.getElementById('shunikuLabel');
  if (shunikuLabel) shunikuLabel.innerHTML = dict.shunikuPadHtml;

  // Update default stamp text if the user hasn't typed a custom one
  const stampTextInput = document.getElementById('stampText');
  const allDefaults = [I18N.en.defaultStampText, I18N.vi.defaultStampText, I18N.ja.defaultStampText];
  if (allDefaults.includes(stampTextInput.value.trim()) || stampTextInput.value.trim() === prevDefaultText) {
    stampTextInput.value = dict.defaultStampText;
  }

  updateInkIndicator();
  renderDocumentCanvas();
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// Initial boot: Load Crying Cat & English UI
applyPreset('cryingCat');
setLanguage('en');