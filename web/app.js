// ==================== SVG Icons ====================
const ICONS = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  wallet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 10h20"/><circle cx="17" cy="14" r="1.5"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`,
  arrowUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`,
  arrowDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>`,
  checkSquare: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>`,
  square: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>`,
  repeat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  mapPin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  barChart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`,
  fileText: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
};

// ==================== Time Slot Config ====================
const DEFAULT_SLOTS = [
  { period: 1, startH: 8, startM: 0, endH: 8, endM: 45 },
  { period: 2, startH: 8, startM: 55, endH: 9, endM: 40 },
  { period: 3, startH: 10, startM: 0, endH: 10, endM: 45 },
  { period: 4, startH: 10, startM: 55, endH: 11, endM: 40 },
  { period: 5, startH: 14, startM: 0, endH: 14, endM: 45 },
  { period: 6, startH: 14, startM: 55, endH: 15, endM: 40 },
  { period: 7, startH: 16, startM: 0, endH: 16, endM: 45 },
  { period: 8, startH: 16, startM: 55, endH: 17, endM: 40 },
  { period: 9, startH: 19, startM: 0, endH: 19, endM: 45 },
  { period: 10, startH: 19, startM: 55, endH: 20, endM: 40 },
  { period: 11, startH: 20, startM: 50, endH: 21, endM: 35 },
];
let TIME_SLOTS = DEFAULT_SLOTS.map(s => ({...s}));
const DEFAULT_BREAKS = [
  { startH: 11, startM: 40, endH: 14, endM: 0, label: '午休' },
  { startH: 17, startM: 40, endH: 19, endM: 0, label: '晚休' },
];

// Fixed height model
const PERIOD_H = 48;
const SMALL_GAP_H = 6;
const BREAK_H = 16;

function getSlotMin(slot) {
  return { start: slot.startH * 60 + slot.startM, end: slot.endH * 60 + slot.endM };
}
function getGapHeight(s1End, s2Start) {
  const isBreak = DEFAULT_BREAKS.some(b => b.startH * 60 + b.startM === s1End && b.endH * 60 + b.endM === s2Start);
  return isBreak ? BREAK_H : SMALL_GAP_H;
}
function calcTotalHeight() {
  let h = PERIOD_H * TIME_SLOTS.length;
  for (let i = 0; i < TIME_SLOTS.length - 1; i++) {
    const e = getSlotMin(TIME_SLOTS[i]).end;
    const s = getSlotMin(TIME_SLOTS[i + 1]).start;
    if (s > e) h += getGapHeight(e, s);
  }
  return h;
}
function calcCardTop(startPeriod) {
  let y = 0;
  for (const slot of TIME_SLOTS) {
    if (slot.period >= startPeriod) break;
    y += PERIOD_H;
    const next = TIME_SLOTS.find(s => s.period === slot.period + 1);
    if (next) {
      const e = getSlotMin(slot).end;
      const s = getSlotMin(next).start;
      if (s > e) y += getGapHeight(e, s);
    }
  }
  return y;
}
function calcCardHeight(startPeriod, endPeriod) {
  let h = 0;
  for (let p = startPeriod; p <= endPeriod; p++) {
    h += PERIOD_H;
    if (p < endPeriod) {
      const slot = TIME_SLOTS.find(s => s.period === p);
      const next = TIME_SLOTS.find(s => s.period === p + 1);
      if (slot && next) {
        const e = getSlotMin(slot).end;
        const s = getSlotMin(next).start;
        if (s > e) h += getGapHeight(e, s);
      }
    }
  }
  return h;
}

// ==================== Course Colors (Macaron) ====================
const COURSE_COLORS = [
  { bg: '#EDE7F6', border: '#B8A9F0', name: '薰衣草紫' },
  { bg: '#E0F2F1', border: '#8FD5D0', name: '薄荷绿' },
  { bg: '#FFEBEE', border: '#F0A0A0', name: '浅珊瑚' },
  { bg: '#FFF8E1', border: '#F5D78E', name: '奶油黄' },
  { bg: '#E1F5FE', border: '#8CC4DE', name: '天空蓝' },
  { bg: '#E8F5E9', border: '#A8D8B9', name: '抹茶绿' },
  { bg: '#FFF3E0', border: '#EDBE8A', name: '杏仁橘' },
  { bg: '#FCE4EC', border: '#D4A6D4', name: '樱花粉' },
  { bg: '#E3F2FD', border: '#B0C4DE', name: '浅钢蓝' },
  { bg: '#EDE7F6', border: '#C8B8E8', name: '丁香紫' },
  { bg: '#E0F7FA', border: '#9DD1C8', name: '青瓷绿' },
  { bg: '#EFEBE9', border: '#E8C4A0', name: '焦糖色' },
];

const EXPENSE_CATS = [
  { name: '餐饮', icon: '🍜' }, { name: '交通', icon: '🚌' },
  { name: '购物', icon: '🛒' }, { name: '娱乐', icon: '🎮' },
  { name: '居住', icon: '🏠' }, { name: '通讯', icon: '📱' },
  { name: '医疗', icon: '💊' }, { name: '教育', icon: '📚' },
  { name: '其他', icon: '📌' },
];
const INCOME_CATS = [
  { name: '工资', icon: '💰' }, { name: '兼职', icon: '💼' },
  { name: '红包', icon: '🧧' }, { name: '理财', icon: '📈' },
  { name: '退款', icon: '↩️' }, { name: '其他', icon: '📌' },
];

// ==================== App State ====================
let currentPage = 'home';
let accountingState = { year: new Date().getFullYear(), month: new Date().getMonth() };
let todoTab = 'temp';
let scheduleWeek = 1;
let showCurrentWeekOnly = true;
let semesterStart = null;
let scheduleItems = []; // cached for onclick handlers
let weekInitialized = false;

// ==================== Navigation ====================
function navigate(page) {
  currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector(`.nav-item[data-page="${page}"]`).classList.add('active');
  // Refresh page content
  if (page === 'home') renderHome();
  else if (page === 'accounting') renderAccounting();
  else if (page === 'todo') renderTodo();
  else if (page === 'schedule') renderSchedule();
}

// ==================== Current / Next Class ====================
function getCurrentAndNextClass(scheduleItems) {
  const now = new Date();
  const today = now.getDay(); // 0=Sun,1=Mon...
  const todayIdx = today === 0 ? 7 : today;
  const currentMin = now.getHours() * 60 + now.getMinutes();

  // Get today's courses with their actual start/end times
  const todayCourses = scheduleItems
    .filter(i => i.dayOfWeek === todayIdx)
    .map(i => {
      const startSlot = TIME_SLOTS.find(s => s.period === i.startPeriod);
      const endSlot = TIME_SLOTS.find(s => s.period === i.endPeriod);
      if (!startSlot || !endSlot) return null;
      return {
        ...i,
        startMin: startSlot.startH * 60 + startSlot.startM,
        endMin: endSlot.endH * 60 + endSlot.endM,
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.startMin - b.startMin);

  let current = null;
  let next = null;

  for (const c of todayCourses) {
    if (currentMin >= c.startMin && currentMin < c.endMin) {
      current = c;
    } else if (c.startMin > currentMin && !next) {
      next = c;
    }
  }

  // If no current class, the first future one is "next"
  // If there's a current class, the one after it is "next"
  if (current && !next) {
    const idx = todayCourses.indexOf(current);
    if (idx < todayCourses.length - 1) next = todayCourses[idx + 1];
  }

  return { current, next, todayCourses };
}

function formatTime(min) {
  return `${String(Math.floor(min / 60)).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`;
}

function renderCourseStatusCard(info) {
  const { current, next, todayCourses } = info;
  const dayNames = ['', '周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  const now = new Date();
  const todayIdx = now.getDay() === 0 ? 7 : now.getDay();
  const currentMin = now.getHours() * 60 + now.getMinutes();

  // No courses today
  if (todayCourses.length === 0) {
    return `
      <div class="neu-card" style="margin-bottom:14px;border-left:3px solid var(--text-muted)">
        <div style="font-size:13px;color:var(--text-muted)">📅 ${dayNames[todayIdx]} · 今天没有课</div>
      </div>
    `;
  }

  // All classes done for today
  if (!current && !next) {
    const last = todayCourses[todayCourses.length - 1];
    if (currentMin >= last.endMin) {
      return `
        <div class="neu-card" style="margin-bottom:14px;border-left:3px solid var(--income)">
          <div style="font-size:13px;color:var(--income)">✅ ${dayNames[todayIdx]} · 今天的课已全部结束</div>
        </div>
      `;
    }
  }

  return `
    <div class="neu-card" style="margin-bottom:14px;padding:0;overflow:hidden">
      ${current ? `
        <div style="padding:12px 14px;background:var(--accent-bg);border-bottom:1px solid rgba(109,93,252,0.1)">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div>
              <div style="font-size:11px;color:var(--accent);font-weight:500;margin-bottom:2px">📘 正在上课</div>
              <div style="font-size:16px;font-weight:bold;color:var(--text-primary)">${current.courseName}</div>
            </div>
            <div style="text-align:right">
              <div style="font-size:11px;color:var(--text-muted)">${formatTime(current.startMin)}-${formatTime(current.endMin)}</div>
              <div style="font-size:11px;color:var(--accent);margin-top:2px">${current.location || ''}</div>
            </div>
          </div>
          <div style="margin-top:6px;height:3px;background:rgba(109,93,252,0.15);border-radius:2px;overflow:hidden">
            <div style="height:100%;background:var(--accent);border-radius:2px;width:${Math.min(100, ((currentMin - current.startMin) / (current.endMin - current.startMin)) * 100)}%"></div>
          </div>
        </div>
      ` : ''}

      ${next ? `
        <div style="padding:12px 14px;${current ? '' : 'border-top:none'}">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div>
              <div style="font-size:11px;color:var(--warning);font-weight:500;margin-bottom:2px">⏰ ${current ? '下一节' : '即将开始'}</div>
              <div style="font-size:16px;font-weight:bold;color:var(--text-primary)">${next.courseName}</div>
            </div>
            <div style="text-align:right">
              <div style="font-size:11px;color:var(--text-muted)">${formatTime(next.startMin)}-${formatTime(next.endMin)}</div>
              <div style="font-size:11px;color:var(--text-secondary);margin-top:2px">${next.location || ''}</div>
            </div>
          </div>
          ${(() => {
            const diff = next.startMin - currentMin;
            if (diff <= 0) return '';
            const h = Math.floor(diff / 60);
            const m = diff % 60;
            const timeStr = h > 0 ? `${h}小时${m}分钟后` : `${m}分钟后`;
            return `<div style="font-size:11px;color:var(--warning);margin-top:6px">⏱ ${timeStr}开始</div>`;
          })()}
        </div>
      ` : (!current ? `
        <div style="padding:12px 14px">
          <div style="font-size:13px;color:var(--text-muted)">今天剩余时间没有课了</div>
        </div>
      ` : '')}
    </div>
  `;
}

// ==================== Lunar Calendar ====================
function toLunar(year, month, day) {
  // Lunar calendar data (1900-2100)
  const lunarInfo = [
    0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
    0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
    0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
    0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
    0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
    0x06ca0,0x0b550,0x15355,0x04da0,0x0a5b0,0x14573,0x052b0,0x0a9a8,0x0e950,0x06aa0,
    0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
    0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b6a0,0x195a6,
    0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
    0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x05ac0,0x0ab60,0x096d5,0x092e0,
    0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
    0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
    0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
    0x05aa0,0x076a3,0x096d0,0x04afb,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
    0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0,
    0x14b63,0x09370,0x049f8,0x04970,0x064b0,0x168a6,0x0ea50,0x06b20,0x1a6c4,0x0aae0,
    0x092e0,0x0d2e3,0x0c960,0x0d557,0x0d4a0,0x0da50,0x05d55,0x056a0,0x0a6d0,0x055d4,
    0x052d0,0x0a9b8,0x0a950,0x0b4a0,0x0b6a6,0x0ad50,0x055a0,0x0aba4,0x0a5b0,0x052b0,
    0x0b273,0x06930,0x07337,0x06aa0,0x0ad50,0x14b55,0x04b60,0x0a570,0x054e4,0x0d160,
    0x0e968,0x0d520,0x0daa0,0x16aa6,0x056d0,0x04ae0,0x0a9d4,0x0a4d0,0x0d150,0x0f252,
    0x0d520,
  ];
  const Gan = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
  const Zhi = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
  const Animals = ['鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪'];
  const lunarMonthName = ['正','二','三','四','五','六','七','八','九','十','冬','腊'];
  const lunarDayName = ['初一','初二','初三','初四','初五','初六','初七','初八','初九','初十',
    '十一','十二','十三','十四','十五','十六','十七','十八','十九','二十',
    '廿一','廿二','廿三','廿四','廿五','廿六','廿七','廿八','廿九','三十'];

  function lYearDays(y) { let sum = 348; for(let i=0x8000;i>0x8;i>>=1) sum+=(lunarInfo[y-1900]&i)?1:0; return sum+leapDays(y); }
  function leapMonth(y) { return lunarInfo[y-1900] & 0xf; }
  function leapDays(y) { if(leapMonth(y)) return (lunarInfo[y-1900]&0x10000)?30:29; return 0; }
  function monthDays(y,m) { return (lunarInfo[y-1900]&(0x10000>>m))?30:29; }

  let offset = Math.floor((Date.UTC(year,month-1,day) - Date.UTC(1900,0,31)) / 86400000);
  let lunarYear = 1900;
  for(; lunarYear < 2101 && offset > 0; lunarYear++) offset -= lYearDays(lunarYear);
  if(offset < 0) { offset += lYearDays(--lunarYear); }

  let lunarMonth = 1;
  const leap = leapMonth(lunarYear);
  let isLeap = false;
  for(; lunarMonth < 13 && offset > 0; lunarMonth++) {
    if(leap > 0 && lunarMonth === leap+1 && !isLeap) { --lunarMonth; isLeap = true; let d = leapDays(lunarYear); if(offset < d) break; offset -= d; isLeap = false; }
    let d = monthDays(lunarYear, lunarMonth);
    if(offset < d) break;
    offset -= d;
  }
  const lunarDay = offset + 1;
  const ganIdx = (lunarYear - 4) % 10;
  const zhiIdx = (lunarYear - 4) % 12;
  return {
    year: lunarYear,
    month: lunarMonth,
    day: lunarDay,
    isLeap,
    monthName: (isLeap?'闰':'') + lunarMonthName[lunarMonth-1] + '月',
    dayName: lunarDayName[lunarDay-1],
    ganZhi: Gan[ganIdx] + Zhi[zhiIdx],
    animal: Animals[zhiIdx],
  };
}

// ==================== Bing Daily Image ====================
const HERO_GRADIENTS = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)',
  'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
  'linear-gradient(135deg, #f5576c 0%, #ff6f91 50%, #ff9671 100%)',
  'linear-gradient(135deg, #0c3483 0%, #a2b6df 50%, #6b8dd6 100%)',
  'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)',
  'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
];
let heroGradientIdx = Math.floor(Math.random() * HERO_GRADIENTS.length);

function loadBingImage() {
  applyHeroGradient();
  setInterval(() => {
    heroGradientIdx = (heroGradientIdx + 1) % HERO_GRADIENTS.length;
    applyHeroGradient();
  }, 3 * 60 * 1000);
}

function applyHeroGradient() {
  const hero = document.querySelector('.hero-section');
  if (hero) {
    hero.style.transition = 'background 1.5s ease';
    hero.style.background = HERO_GRADIENTS[heroGradientIdx];
    hero.style.backgroundSize = 'cover';
  }
}

// ==================== Home Page ====================
async function renderHome() {
  const records = await db.getAllRecords();
  const now = new Date();
  const ym = `${now.getFullYear()}-${String(now.getMonth()).padStart(2, '0')}`;
  const monthRecords = records.filter(r => r.yearMonth === ym);
  const income = monthRecords.filter(r => !r.isExpense).reduce((s, r) => s + r.amount, 0);
  const expense = monthRecords.filter(r => r.isExpense).reduce((s, r) => s + r.amount, 0);

  const todos = await db.getAllTodos();
  const pendingTemp = todos.filter(t => t.type === 'temp' && !t.isCompleted).length;
  const pendingDaily = todos.filter(t => t.type === 'daily' && !t.isCompleted).length;

  const today = new Date();
  const weekDays = ['日','一','二','三','四','五','六'];
  const lunar = toLunar(today.getFullYear(), today.getMonth()+1, today.getDate());
  const dateStr = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日 星期${weekDays[today.getDay()]}`;
  const lunarStr = `${lunar.ganZhi}${lunar.animal}年 ${lunar.monthName}${lunar.dayName}`;
  const timeStr = `${String(today.getHours()).padStart(2,'0')}:${String(today.getMinutes()).padStart(2,'0')}`;

  // Schedule info
  const allItems = await db.getAllSchedule();
  const scheduleInfo = getCurrentAndNextClass(allItems);

  const el = document.getElementById('page-home');
  el.innerHTML = `
    <div class="hero-section">
      <div class="hero-overlay">
        <div class="hero-time">${timeStr}</div>
        <div class="hero-date">${dateStr}</div>
        <div class="hero-lunar">${lunarStr}</div>
      </div>
    </div>

    <div class="neu-card summary-card">
      <div style="font-size:14px;color:var(--text-secondary);font-weight:500">本月收支</div>
      <div class="summary-row">
        <div class="summary-item">
          <div class="label">收入</div>
          <div class="amount" style="color:var(--income)">¥${income.toFixed(2)}</div>
        </div>
        <div class="summary-item">
          <div class="label">结余</div>
          <div class="amount" style="color:var(--accent)">¥${(income - expense).toFixed(2)}</div>
        </div>
        <div class="summary-item">
          <div class="label">支出</div>
          <div class="amount" style="color:var(--expense)">¥${expense.toFixed(2)}</div>
        </div>
      </div>
    </div>

    ${renderCourseStatusCard(scheduleInfo)}

    <div class="quick-grid">
      <div class="quick-card" onclick="navigate('accounting')">
        <div class="quick-icon" style="background:var(--accent-bg)">${ICONS.wallet.replace('currentColor', 'var(--accent)')}</div>
        <div class="title">记账</div>
        <div class="sub">记录收支</div>
      </div>
      <div class="quick-card" onclick="navigate('todo')">
        <div class="quick-icon" style="background:var(--income-bg)">${ICONS.check.replace('currentColor', 'var(--income)')}</div>
        <div class="title">待办</div>
        <div class="sub">${pendingTemp}项待完成</div>
      </div>
      <div class="quick-card" onclick="navigate('schedule')">
        <div class="quick-icon" style="background:rgba(58,155,193,0.1)">${ICONS.calendar.replace('currentColor', 'var(--info)')}</div>
        <div class="title">课表</div>
        <div class="sub">查看本周</div>
      </div>
      <div class="quick-card" onclick="navigate('todo')">
        <div class="quick-icon" style="background:rgba(232,184,48,0.1)">${ICONS.repeat.replace('currentColor', 'var(--warning)')}</div>
        <div class="title">每日任务</div>
        <div class="sub">${pendingDaily}项待完成</div>
      </div>
    </div>

    <div class="quick-grid" style="margin-top:4px">
      <div class="quick-card" onclick="exportAllData()">
        <div class="quick-icon" style="background:rgba(58,155,193,0.1)">${ICONS.download.replace('currentColor', 'var(--info)')}</div>
        <div class="title">导出</div>
        <div class="sub">备份数据</div>
      </div>
      <div class="quick-card" onclick="importAllData()">
        <div class="quick-icon" style="background:rgba(232,184,48,0.1)">${ICONS.upload.replace('currentColor', 'var(--warning)')}</div>
        <div class="title">导入</div>
        <div class="sub">恢复数据</div>
      </div>
    </div>

    ${(pendingTemp + pendingDaily > 0) ? `
    <div class="neu-card">
      <div style="font-size:14px;font-weight:500;margin-bottom:8px">待办提醒</div>
      ${todos.filter(t => !t.isCompleted && t.type === 'temp').slice(0, 3).map(t => `
        <div class="todo-preview-item">
          <div class="todo-dot" style="background:var(--accent)"></div>
          <span>${t.title}</span>
        </div>
      `).join('')}
      ${todos.filter(t => !t.isCompleted && t.type === 'daily').slice(0, 2).map(t => `
        <div class="todo-preview-item">
          <div class="todo-dot" style="background:var(--income)"></div>
          <span>${t.title}</span>
        </div>
      `).join('')}
    </div>` : ''}
  `;
  applyHeroGradient();
}

// ==================== Accounting Page ====================
let accountingSelectMode = false;
let accountingSelected = new Set();

async function renderAccounting() {
  const { year, month } = accountingState;
  const records = await db.getRecordsByMonth(year, month);
  const income = records.filter(r => !r.isExpense).reduce((s, r) => s + r.amount, 0);
  const expense = records.filter(r => r.isExpense).reduce((s, r) => s + r.amount, 0);

  const el = document.getElementById('page-accounting');
  el.innerHTML = `
    <div class="page-header">
      <div class="page-title">记账</div>
      <div style="display:flex;gap:4px">
        ${records.length > 0 ? `<button class="icon-btn" onclick="toggleAccountingSelect()" title="选择删除">${ICONS.checkSquare}</button>` : ''}
        <button class="icon-btn" onclick="showChartModal()">${ICONS.barChart}</button>
      </div>
    </div>

    ${accountingSelectMode ? `
    <div class="neu-card" style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;margin-bottom:10px">
      <div style="display:flex;align-items:center;gap:8px">
        <button class="icon-btn" onclick="toggleAccountingSelect()">${ICONS.chevronLeft}</button>
        <span style="font-size:14px;font-weight:500">已选 ${accountingSelected.size} 项</span>
      </div>
      <div style="display:flex;gap:8px">
        <button class="icon-btn" onclick="selectAllAccounting()" title="全选" style="width:28px;height:28px">${ICONS.checkSquare}</button>
        <button class="icon-btn" onclick="deleteSelectedRecords()" title="删除选中" style="width:28px;height:28px;color:var(--expense)">${ICONS.trash}</button>
        <button class="icon-btn" onclick="clearAllRecords()" title="清空当月" style="width:28px;height:28px;color:var(--expense)">${ICONS.trash}</button>
      </div>
    </div>
    ` : ''}

    <div class="neu-card month-nav">
      <button class="icon-btn" onclick="changeMonth(-1)">${ICONS.chevronLeft}</button>
      <span class="month-text">${year}年${month + 1}月</span>
      <button class="icon-btn" onclick="changeMonth(1)">${ICONS.chevronRight}</button>
    </div>

    <div class="neu-card" style="margin-bottom:14px">
      <div class="summary-row" style="margin-top:0">
        <div class="summary-item">
          <div class="label">收入</div>
          <div class="amount" style="color:var(--income);font-size:16px">¥${income.toFixed(2)}</div>
        </div>
        <div class="summary-item">
          <div class="label">结余</div>
          <div class="amount" style="color:var(--accent);font-size:16px">¥${(income - expense).toFixed(2)}</div>
        </div>
        <div class="summary-item">
          <div class="label">支出</div>
          <div class="amount" style="color:var(--expense);font-size:16px">¥${expense.toFixed(2)}</div>
        </div>
      </div>
    </div>

    <div id="record-list">
      ${records.length === 0 ? `
        <div class="empty-state">
          ${ICONS.fileText.replace('currentColor', 'var(--text-muted)')}
          <div>暂无记录</div>
        </div>
      ` : records.sort((a, b) => b.date - a.date).map(r => `
        <div class="record-item neu-card" onclick="${accountingSelectMode ? `toggleRecordSelect(${r.id})` : `showEditRecord(${r.id})`}" style="${accountingSelectMode ? 'cursor:pointer' : ''}">
          ${accountingSelectMode ? `
            <div style="margin-right:8px;flex-shrink:0">
              ${accountingSelected.has(r.id) ? ICONS.checkSquare.replace('currentColor', 'var(--accent)') : ICONS.square.replace('currentColor', 'var(--text-muted)')}
            </div>
          ` : ''}
          <div class="record-left">
            <div class="record-icon" style="background:${r.isExpense ? 'var(--expense-bg)' : 'var(--income-bg)'}">
              ${r.isExpense ? ICONS.arrowUp.replace('currentColor', 'var(--expense-soft)') : ICONS.arrowDown.replace('currentColor', 'var(--income-soft)')}
            </div>
            <div>
              <div class="record-cat">${r.category}</div>
              <div class="record-desc">${formatDate(r.date)} ${r.description || ''}</div>
            </div>
          </div>
          <div class="record-amount" style="color:${r.isExpense ? 'var(--expense)' : 'var(--income)'}">
            ${r.isExpense ? '-' : '+'}¥${r.amount.toFixed(2)}
          </div>
        </div>
      `).join('')}
    </div>

    ${!accountingSelectMode ? `<button class="fab" onclick="showAddRecord()">${ICONS.plus.replace('currentColor', 'white')}</button>` : ''}
  `;
}

function toggleAccountingSelect() {
  accountingSelectMode = !accountingSelectMode;
  accountingSelected.clear();
  renderAccounting();
}

function selectAllAccounting() {
  db.getRecordsByMonth(accountingState.year, accountingState.month).then(records => {
    if (accountingSelected.size === records.length) {
      accountingSelected.clear();
    } else {
      records.forEach(r => accountingSelected.add(r.id));
    }
    renderAccounting();
  });
}

function toggleRecordSelect(id) {
  if (accountingSelected.has(id)) accountingSelected.delete(id);
  else accountingSelected.add(id);
  renderAccounting();
}

async function deleteSelectedRecords() {
  if (accountingSelected.size === 0) return alert('请先选择要删除的记录');
  if (!confirm(`确定删除选中的 ${accountingSelected.size} 条记录？`)) return;
  for (const id of accountingSelected) await db.deleteRecord(id);
  accountingSelected.clear();
  accountingSelectMode = false;
  renderAccounting();
}

async function clearAllRecords() {
  const records = await db.getRecordsByMonth(accountingState.year, accountingState.month);
  if (records.length === 0) return alert('当月没有记录');
  if (!confirm(`确定清空 ${accountingState.year}年${accountingState.month+1}月 的全部 ${records.length} 条记录？\n此操作不可撤销。`)) return;
  for (const r of records) await db.deleteRecord(r.id);
  accountingSelected.clear();
  accountingSelectMode = false;
  renderAccounting();
}

function changeMonth(delta) {
  accountingState.month += delta;
  if (accountingState.month > 11) { accountingState.month = 0; accountingState.year++; }
  if (accountingState.month < 0) { accountingState.month = 11; accountingState.year--; }
  renderAccounting();
}

function formatDate(ts) {
  const d = new Date(ts);
  return `${(d.getMonth() + 1).toString().padStart(2, '0')}月${d.getDate().toString().padStart(2, '0')}日`;
}

function showAddRecord() {
  showRecordModal(null);
}
function showEditRecord(id) {
  db.getRecord(id).then(r => showRecordModal(r));
}

function showRecordModal(record) {
  const isEdit = !!record;
  const overlay = document.getElementById('modal-overlay');
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-title">
        <span>${isEdit ? '编辑记录' : '添加记录'}</span>
        <button class="modal-close" onclick="closeModal()">✕</button>
      </div>
      <div class="form-group">
        <label>类型</label>
        <div style="display:flex;gap:8px">
          <button class="btn ${!record || record.isExpense ? 'btn-primary' : 'btn-ghost'}" style="flex:1" id="type-expense" onclick="setRecordType(true)">支出</button>
          <button class="btn ${record && !record.isExpense ? 'btn-primary' : 'btn-ghost'}" style="flex:1" id="type-income" onclick="setRecordType(false)">收入</button>
        </div>
      </div>
      <div class="form-group">
        <label>金额</label>
        <input type="number" id="rec-amount" placeholder="0.00" step="0.01" value="${record ? record.amount : ''}">
      </div>
      <div class="form-group">
        <label>分类</label>
        <div class="cat-grid" id="cat-grid"></div>
      </div>
      <div class="form-group">
        <label>日期</label>
        <input type="date" id="rec-date" value="${record ? new Date(record.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]}">
      </div>
      <div class="form-group">
        <label>备注</label>
        <input type="text" id="rec-desc" placeholder="可选" value="${record ? record.description || '' : ''}">
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-primary" style="flex:1" onclick="saveRecord(${record ? record.id : 'null'})">保存</button>
        ${isEdit ? `<button class="btn btn-ghost" onclick="deleteRecord(${record.id})">删除</button>` : ''}
      </div>
    </div>
  `;
  overlay.classList.add('show');
  window._recIsExpense = record ? record.isExpense : true;
  renderCatGrid(record ? record.category : null);
}

function setRecordType(isExpense) {
  window._recIsExpense = isExpense;
  document.getElementById('type-expense').className = `btn ${isExpense ? 'btn-primary' : 'btn-ghost'}`;
  document.getElementById('type-income').className = `btn ${!isExpense ? 'btn-primary' : 'btn-ghost'}`;
  renderCatGrid(null);
}

function renderCatGrid(selected) {
  const cats = window._recIsExpense ? EXPENSE_CATS : INCOME_CATS;
  document.getElementById('cat-grid').innerHTML = cats.map(c => `
    <div class="cat-item ${c.name === selected ? 'selected' : ''}" onclick="selectCat('${c.name}', this)">
      <div class="cat-icon">${c.icon}</div>
      <div>${c.name}</div>
    </div>
  `).join('');
  window._recCat = selected || null;
}

function selectCat(name, el) {
  document.querySelectorAll('.cat-item').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
  window._recCat = name;
}

async function saveRecord(editId) {
  const amount = parseFloat(document.getElementById('rec-amount').value);
  if (!amount || amount <= 0) return alert('请输入有效金额');
  if (!window._recCat) return alert('请选择分类');

  const date = new Date(document.getElementById('rec-date').value).getTime();
  const record = {
    isExpense: window._recIsExpense,
    amount,
    category: window._recCat,
    date,
    description: document.getElementById('rec-desc').value,
    yearMonth: `${new Date(date).getFullYear()}-${String(new Date(date).getMonth()).padStart(2, '0')}`
  };
  if (editId) record.id = editId;

  await db.addRecord(record);
  closeModal();
  renderAccounting();
}

async function deleteRecord(id) {
  if (confirm('确定删除？')) {
    await db.deleteRecord(id);
    closeModal();
    renderAccounting();
  }
}

function showChartModal() {
  db.getRecordsByMonth(accountingState.year, accountingState.month).then(records => {
    const expenseByCategory = {};
    records.filter(r => r.isExpense).forEach(r => {
      expenseByCategory[r.category] = (expenseByCategory[r.category] || 0) + r.amount;
    });
    const sorted = Object.entries(expenseByCategory).sort((a, b) => b[1] - a[1]);
    const max = sorted.length > 0 ? sorted[0][1] : 1;

    const overlay = document.getElementById('modal-overlay');
    overlay.innerHTML = `
      <div class="modal">
        <div class="modal-title">
          <span>支出统计</span>
          <button class="modal-close" onclick="closeModal()">✕</button>
        </div>
        <div class="chart-container">
          ${sorted.length === 0 ? '<div class="empty-state">暂无数据</div>' :
            sorted.map(([cat, amount]) => `
              <div class="chart-bar-row">
                <div class="chart-label">${cat}</div>
                <div class="chart-bar-bg">
                  <div class="chart-bar" style="width:${(amount / max) * 100}%;background:var(--accent)"></div>
                </div>
                <div class="chart-value">¥${amount.toFixed(0)}</div>
              </div>
            `).join('')
          }
        </div>
      </div>
    `;
    overlay.classList.add('show');
  });
}

// ==================== Todo Page ====================
async function renderTodo() {
  const todos = await db.getAllTodos();
  const el = document.getElementById('page-todo');

  const pendingTemp = todos.filter(t => t.type === 'temp' && !t.isCompleted);
  const completedTemp = todos.filter(t => t.type === 'temp' && t.isCompleted);
  const pendingDaily = todos.filter(t => t.type === 'daily' && !t.isCompleted);
  const completedDaily = todos.filter(t => t.type === 'daily' && t.isCompleted);

  // Group temp tasks by date
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayTs = today.getTime();
  const tomorrowTs = todayTs + 86400000;
  const dayAfterTs = todayTs + 172800000;

  const overdue = pendingTemp.filter(t => t.targetDate && t.targetDate < todayTs);
  const todayTasks = pendingTemp.filter(t => t.targetDate && t.targetDate >= todayTs && t.targetDate < tomorrowTs);
  const tomorrowTasks = pendingTemp.filter(t => t.targetDate && t.targetDate >= tomorrowTs && t.targetDate < dayAfterTs);
  const futureTasks = pendingTemp.filter(t => t.targetDate && t.targetDate >= dayAfterTs);
  const noDateTasks = pendingTemp.filter(t => !t.targetDate);

  el.innerHTML = `
    <div class="page-title" style="margin-bottom:14px">待办清单</div>

    <div class="tab-bar">
      <button class="tab-btn ${todoTab === 'temp' ? 'active' : ''}" onclick="switchTodoTab('temp')">临时任务</button>
      <button class="tab-btn ${todoTab === 'daily' ? 'active' : ''}" onclick="switchTodoTab('daily')">每日任务</button>
    </div>

    ${todoTab === 'temp' ? `
      ${overdue.length ? `<div class="section-header" style="color:var(--expense)">已过期</div>${overdue.map(t => todoItemHtml(t)).join('')}` : ''}
      ${todayTasks.length ? `<div class="section-header" style="color:var(--accent)">今天</div>${todayTasks.map(t => todoItemHtml(t)).join('')}` : ''}
      ${tomorrowTasks.length ? `<div class="section-header" style="color:var(--info)">明天</div>${tomorrowTasks.map(t => todoItemHtml(t)).join('')}` : ''}
      ${futureTasks.length ? `<div class="section-header" style="color:var(--text-secondary)">未来</div>${futureTasks.map(t => todoItemHtml(t)).join('')}` : ''}
      ${noDateTasks.length ? `<div class="section-header" style="color:var(--text-muted)">无截止日期</div>${noDateTasks.map(t => todoItemHtml(t)).join('')}` : ''}
      ${completedTemp.length ? `<div class="section-header" style="color:var(--text-muted)">已完成</div>${completedTemp.map(t => todoItemHtml(t)).join('')}` : ''}
      ${todos.filter(t => t.type === 'temp').length === 0 ? `<div class="empty-state">${ICONS.checkSquare.replace('currentColor', 'var(--text-muted)')}<div>暂无临时任务</div></div>` : ''}
    ` : `
      ${pendingDaily.length ? `<div class="section-header" style="color:var(--accent)">待完成</div>${pendingDaily.map(t => todoItemHtml(t)).join('')}` : ''}
      ${completedDaily.length ? `<div class="section-header" style="color:var(--text-muted)">今日已完成</div>${completedDaily.map(t => todoItemHtml(t)).join('')}` : ''}
      ${todos.filter(t => t.type === 'daily').length === 0 ? `<div class="empty-state">${ICONS.repeat.replace('currentColor', 'var(--text-muted)')}<div>暂无每日任务</div></div>` : ''}
    `}

    <button class="fab" onclick="showAddTodo()">${ICONS.plus.replace('currentColor', 'white')}</button>
  `;
}

function todoItemHtml(t) {
  const dateStr = t.targetDate ? formatDate(t.targetDate) : '';
  return `
    <div class="todo-item neu-card">
      <button class="todo-check ${t.isCompleted ? 'checked' : ''}" onclick="toggleTodo(${t.id})">
        ${t.isCompleted ? ICONS.check.replace('currentColor', 'var(--accent)') : ICONS.square.replace('currentColor', 'var(--text-muted)')}
      </button>
      <div class="todo-content">
        <div class="todo-title ${t.isCompleted ? 'done' : ''}">${t.title}</div>
        ${t.description ? `<div class="todo-meta">${t.description}</div>` : ''}
        ${dateStr ? `<div class="todo-meta">${dateStr}</div>` : ''}
      </div>
      <button class="todo-delete" onclick="deleteTodo(${t.id})">
        ${ICONS.trash.replace('currentColor', 'var(--expense)')}
      </button>
    </div>
  `;
}

function switchTodoTab(tab) {
  todoTab = tab;
  renderTodo();
}

async function toggleTodo(id) {
  const todo = await db.getTodo(id);
  todo.isCompleted = !todo.isCompleted;
  await db.addTodo(todo);
  renderTodo();
}

async function deleteTodo(id) {
  await db.deleteTodo(id);
  renderTodo();
}

function showAddTodo() {
  const overlay = document.getElementById('modal-overlay');
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-title">
        <span>添加${todoTab === 'temp' ? '临时' : '每日'}任务</span>
        <button class="modal-close" onclick="closeModal()">✕</button>
      </div>
      <div class="form-group">
        <label>任务名称</label>
        <input type="text" id="todo-title" placeholder="输入任务">
      </div>
      <div class="form-group">
        <label>描述（可选）</label>
        <input type="text" id="todo-desc" placeholder="补充说明">
      </div>
      ${todoTab === 'temp' ? `
      <div class="form-group">
        <label>截止日期（可选）</label>
        <input type="date" id="todo-date">
      </div>
      ` : ''}
      <button class="btn btn-primary" style="width:100%" onclick="saveTodo()">保存</button>
    </div>
  `;
  overlay.classList.add('show');
}

async function saveTodo() {
  const title = document.getElementById('todo-title').value.trim();
  if (!title) return alert('请输入任务名称');

  const todo = {
    title,
    description: document.getElementById('todo-desc')?.value || '',
    type: todoTab,
    isCompleted: false,
    isDaily: todoTab === 'daily',
    targetDate: null,
    createdAt: Date.now()
  };

  if (todoTab === 'temp') {
    const dateVal = document.getElementById('todo-date')?.value;
    if (dateVal) todo.targetDate = new Date(dateVal).getTime();
  }

  await db.addTodo(todo);
  closeModal();
  renderTodo();
}

// ==================== Schedule Page ====================
async function renderSchedule() {
  const allItems = await db.getAllSchedule();
  const el = document.getElementById('page-schedule');

  // Set current week only once on first render
  if (!weekInitialized && semesterStart) {
    const now = new Date();
    const diff = Math.floor((now - semesterStart) / (7 * 86400000));
    scheduleWeek = Math.max(1, diff + 1);
    weekInitialized = true;
  }

  const dayNames = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  const today = new Date().getDay(); // 0=Sun, 1=Mon...
  const todayIdx = today === 0 ? 7 : today; // 1-7

  const displayItems = showCurrentWeekOnly
    ? allItems.filter(item => isWeekIncluded(item.weeks, scheduleWeek))
    : allItems;
  scheduleItems = displayItems; // cache for onclick

  const totalHeight = calcTotalHeight();
  const now = new Date();
  const currentMin = now.getHours() * 60 + now.getMinutes();
  const firstSlot = getSlotMin(TIME_SLOTS[0]).start;
  const lastSlot = getSlotMin(TIME_SLOTS[TIME_SLOTS.length - 1]).end;

  el.innerHTML = `
    <div class="schedule-header">
      <div class="week-nav">
        <button onclick="changeWeek(-1)">‹</button>
        <span class="week-text">第${scheduleWeek}周</span>
        <button onclick="changeWeek(1)">›</button>
      </div>
      <div style="display:flex;gap:6px;align-items:center">
        <div class="week-filter" onclick="toggleWeekFilter()">
          <span>仅本周</span>
          <div class="toggle ${showCurrentWeekOnly ? 'on' : ''}"></div>
        </div>
        <button class="icon-btn" style="width:28px;height:28px" onclick="showAddCourseModal()" title="添加课程">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
        <button class="icon-btn" style="width:28px;height:28px" onclick="showImportModal()" title="导入课表">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        </button>
        <button class="icon-btn" style="width:28px;height:28px" onclick="showSettingsModal()" title="设置">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
        </button>
      </div>
    </div>

    <div class="schedule-container" style="overflow:auto;max-height:calc(100vh - 160px)">
      <!-- Day headers (sticky top) -->
      <div style="display:flex;position:sticky;top:0;background:var(--bg);z-index:5;min-width:390px">
        <div style="width:40px;flex-shrink:0"></div>
        <div style="display:grid;grid-template-columns:repeat(7,1fr);flex:1">
          ${dayNames.map((d, i) => `<div class="day-header ${i + 1 === todayIdx ? 'today' : ''}">${d}</div>`).join('')}
        </div>
      </div>

      <!-- Schedule content -->
      <div style="display:flex;min-width:390px">
        <!-- Time axis -->
        <div style="width:40px;flex-shrink:0;position:relative;height:${totalHeight}px">
          ${renderTimeAxis(currentMin)}
        </div>

        <!-- Day columns -->
        <div style="display:grid;grid-template-columns:repeat(7,1fr);flex:1">
          ${[1,2,3,4,5,6,7].map(day => `
            <div class="schedule-day-col" style="position:relative;height:${totalHeight}px">
              ${renderGridLines()}
              ${displayItems.filter(i => i.dayOfWeek === day).map(item => {
                const top = calcCardTop(item.startPeriod);
                const h = calcCardHeight(item.startPeriod, item.endPeriod);
                const color = COURSE_COLORS[item.colorIndex % COURSE_COLORS.length];
                const idx = displayItems.indexOf(item);
                return `
                  <div class="course-card" style="
                    top:${top}px;
                    height:${h - 2}px;
                    background:${color.bg};
                    border-color:${color.border};
                  " onclick="showCourseDetailByIdx(${idx})">
                    <div class="course-name">${item.courseName}</div>
                    ${h >= 44 ? `<div class="course-loc">${item.location || ''}</div>` : ''}
                  </div>
                `;
              }).join('')}
              ${day === todayIdx && currentMin >= firstSlot && currentMin <= lastSlot ? `
                <div class="time-line" style="top:${calcTimeLineY(currentMin)}px">
                  <span class="time-label">${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}</span>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="schedule-hint">← 左右滑动 · 点击课程查看详情 →</div>
  `;
}

function renderTimeAxis(currentMin) {
  let html = '';
  let y = 0;
  for (let i = 0; i < TIME_SLOTS.length; i++) {
    const slot = TIME_SLOTS[i];
    const sm = getSlotMin(slot);
    const isCurrent = currentMin >= sm.start && currentMin < sm.end;

    // Gap before this slot
    if (i > 0) {
      const prevEnd = getSlotMin(TIME_SLOTS[i - 1]).end;
      const gapH = getGapHeight(prevEnd, sm.start);
      const isBreak = DEFAULT_BREAKS.some(b => b.startH * 60 + b.startM === prevEnd && b.endH * 60 + b.endM === sm.start);
      if (isBreak) {
        html += `<div class="time-cell break-cell" style="position:absolute;top:${y}px;height:${gapH}px;width:100%">
          <span class="break-label">${DEFAULT_BREAKS.find(b => b.startH * 60 + b.startM === prevEnd)?.label || '休息'}</span>
        </div>`;
      }
      y += gapH;
    }

    // Period label
    html += `<div class="time-cell ${isCurrent ? 'current' : ''}" style="position:absolute;top:${y}px;height:${PERIOD_H}px;width:100%">
      <span class="period-num">${slot.period}</span>
      <span class="period-time">${String(slot.startH).padStart(2,'0')}:${String(slot.startM).padStart(2,'0')}</span>
    </div>`;
    y += PERIOD_H;
  }
  return html;
}

function renderGridLines() {
  let html = '';
  let y = 0;
  for (let i = 0; i < TIME_SLOTS.length; i++) {
    y += PERIOD_H;
    if (i < TIME_SLOTS.length - 1) {
      const e = getSlotMin(TIME_SLOTS[i]).end;
      const s = getSlotMin(TIME_SLOTS[i + 1]).start;
      if (s > e) {
        const gapH = getGapHeight(e, s);
        const isBreak = DEFAULT_BREAKS.some(b => b.startH * 60 + b.startM === e && b.endH * 60 + b.endM === s);
        html += `<div class="grid-line ${isBreak ? 'break-line' : ''}" style="top:${y}px"></div>`;
        y += gapH;
      }
    }
  }
  return html;
}

function calcTimeLineY(currentMin) {
  let y = 0;
  for (let i = 0; i < TIME_SLOTS.length; i++) {
    const slot = TIME_SLOTS[i];
    const sm = getSlotMin(slot);
    if (currentMin < sm.start) {
      if (i > 0) {
        const prevEnd = getSlotMin(TIME_SLOTS[i - 1]).end;
        const gapMin = sm.start - prevEnd;
        const elapsed = currentMin - prevEnd;
        const gapH = getGapHeight(prevEnd, sm.start);
        y += gapH * (elapsed / gapMin);
      }
      break;
    } else if (currentMin < sm.end) {
      const elapsed = currentMin - sm.start;
      y += PERIOD_H * (elapsed / (sm.end - sm.start));
      break;
    } else {
      y += PERIOD_H;
      if (i < TIME_SLOTS.length - 1) {
        const nextStart = getSlotMin(TIME_SLOTS[i + 1]).start;
        if (currentMin < nextStart) {
          const gapMin = nextStart - sm.end;
          const elapsed = currentMin - sm.end;
          const gapH = getGapHeight(sm.end, nextStart);
          y += gapH * (elapsed / gapMin);
          break;
        } else {
          y += getGapHeight(sm.end, nextStart);
        }
      }
    }
  }
  return y;
}

function isWeekIncluded(weeksStr, targetWeek) {
  if (!weeksStr || weeksStr.trim() === '') return true;
  const parts = weeksStr.split(',');
  for (const part of parts) {
    const p = part.trim();
    if (p.includes('(双)')) {
      const n = parseInt(p);
      if (n === targetWeek && targetWeek % 2 === 0) return true;
    } else if (p.includes('(单)')) {
      const n = parseInt(p);
      if (n === targetWeek && targetWeek % 2 === 1) return true;
    } else if (p.includes('-')) {
      const [a, b] = p.split('-').map(s => parseInt(s));
      if (targetWeek >= a && targetWeek <= b) return true;
    } else {
      if (parseInt(p) === targetWeek) return true;
    }
  }
  return false;
}

function changeWeek(delta) {
  scheduleWeek = Math.max(1, scheduleWeek + delta);
  renderSchedule();
}

function toggleWeekFilter() {
  showCurrentWeekOnly = !showCurrentWeekOnly;
  renderSchedule();
}

function showCourseDetailByIdx(idx) {
  const item = scheduleItems[idx];
  if (item) showCourseDetail(item);
}

function showCourseDetail(item) {
  const dayNames = ['', '周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  const color = COURSE_COLORS[item.colorIndex % COURSE_COLORS.length];
  const overlay = document.getElementById('detail-overlay');
  overlay.innerHTML = `
    <div class="detail-card">
      <div class="detail-title">
        <div class="color-bar" style="background:${color.border}"></div>
        ${item.courseName}
      </div>
      <div class="detail-row">${ICONS.clock} <span class="label">时间</span> ${dayNames[item.dayOfWeek]} 第${item.startPeriod}-${item.endPeriod}节</div>
      ${item.location ? `<div class="detail-row">${ICONS.mapPin} <span class="label">地点</span> ${item.location}</div>` : ''}
      ${item.teacher ? `<div class="detail-row">${ICONS.user} <span class="label">教师</span> ${item.teacher}</div>` : ''}
      ${item.weeks ? `<div class="detail-row">${ICONS.calendar} <span class="label">周次</span> ${item.weeks}</div>` : ''}
      <button class="detail-close" onclick="closeDetail()">关闭</button>
    </div>
  `;
  overlay.classList.add('show');
}
function closeDetail() { document.getElementById('detail-overlay').classList.remove('show'); }

// ==================== Schedule Import ====================
function showImportModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-title">
        <span>导入课表</span>
        <button class="modal-close" onclick="closeModal()">✕</button>
      </div>
      <div class="import-hint">
        <b>格式规范</b>：每行一门课，字段之间用 <b>|</b> 分隔<br><br>
        <code>课程名 | 星期 | 开始节 | 结束节 | 地点 | 教师 | 周次</code><br><br>
        <b>字段说明</b>：<br>
        • 星期：1=周一 … 7=周日<br>
        • 开始节/结束节：1~10 的数字<br>
        • 地点：教室/实验室名称，没有则留空<br>
        • 教师：教师姓名，不含【】<br>
        • 周次：支持以下写法<br>
        &nbsp;&nbsp;<code>1-16</code> = 连续上课<br>
        &nbsp;&nbsp;<code>13</code> = 仅第13周<br>
        &nbsp;&nbsp;<code>1-13(单)</code> = 单周<br>
        &nbsp;&nbsp;<code>2-12(双)</code> = 双周<br>
        &nbsp;&nbsp;<code>7-10</code> = 第7到10周<br>
        &nbsp;&nbsp;<code>5,7,9,11</code> = 指定多周（逗号分隔）
      </div>
      <div class="import-sample">数据结构(理论) | 1 | 1 | 1 | Z05032 | 赵燕萍 | 1-13
数据结构[查找与排序](实验) | 1 | 1 | 1 | 软件工程实验室 | 赵燕萍 | 13
计算机硬件基础(理论) | 1 | 1 | 1 | Z06040 | 李泽华 | 1-12
JAVA程序设计(理论) | 2 | 1 | 1 | Z06044 | 成璐 | 1-13
概率论与数理统计(理论) | 2 | 3 | 3 | Z06046 | 谭敏 | 1-16
计算机网络(理论) | 1 | 1 | 1 | Z02009 | 梁剑 | 1-13(单)
数据结构(理论) | 3 | 1 | 1 | Z06047 | 赵燕萍 | 2-12(双)
大学体育三(理论) | 4 | 5 | 5 | 太极拳2 | 外聘马伟 | 1-16
马克思主义基本原理(理论) | 1 | 7 | 7 | Z02006 | 李俊 | 1-14</div>
      <textarea class="import-textarea" id="import-data" rows="8" placeholder="粘贴课表数据，每行一门课..."></textarea>
      <div style="display:flex;gap:8px;margin-top:12px">
        <button class="btn btn-primary" style="flex:1" onclick="parseImport()">导入</button>
        <button class="btn btn-ghost" onclick="copyAIPrompt()">复制AI提示词</button>
      </div>
    </div>
  `;
  overlay.classList.add('show');
}

async function parseImport() {
  const text = document.getElementById('import-data').value.trim();
  if (!text) return alert('请输入课表数据');

  const lines = text.split('\n').filter(l => l.trim());
  let count = 0;
  for (const line of lines) {
    const parts = line.split('|').map(s => s.trim());
    if (parts.length < 2) continue;
    const name = parts[0];
    if (!name) continue;
    const day = parseInt(parts[1]) || 0;
    const start = parseInt(parts[2]) || 1;
    const end = parseInt(parts[3]) || start;
    const location = (parts[4] || '').trim();
    const teacher = (parts[5] || '').trim();
    const weeks = (parts[6] || '').trim();
    if (day < 1 || day > 7) continue;
    const item = {
      courseName: name,
      dayOfWeek: day,
      startPeriod: start,
      endPeriod: end,
      location,
      teacher,
      weeks,
      colorIndex: count % COURSE_COLORS.length
    };
    await db.addSchedule(item);
    count++;
  }

  if (count > 0) {
    alert(`成功导入 ${count} 门课程`);
    closeModal();
    renderSchedule();
  } else {
    alert('未解析出有效数据，请检查格式');
  }
}

function copyAIPrompt() {
  const prompt = `你是一个课表格式转换助手。请将我提供的课表数据转换为以下格式，每行一门课，字段之间用 | 分隔：

课程名 | 星期(1-7) | 开始节 | 结束节 | 地点 | 教师 | 周次

【格式规则】
1. 星期：周一=1，周二=2，…，周日=7
2. 开始节/结束节：对应课表中的节次数字（1~10）
3. 地点：教室或实验室名称。如果原始数据中没有地点信息，留空即可
4. 教师：教师姓名，不要包含【】或其他符号
5. 周次规则（非常重要，请严格遵守）：
   - 【1~16周】→ 写成：1-16
   - 【13周】→ 写成：13（仅第13周上课）
   - 【1~13(单)周】→ 写成：1-13(单)
   - 【2~12(双)周】→ 写成：2-12(双)
   - 【7~10周】→ 写成：7-10
6. 同一个时间格里如果有多个课程（用 ……………… 分隔），请拆成多行，每行一门课
7. 课程名保持原样，包括括号类型：理论课用(理论)，实验课用[实验主题](实验)

【示例】
假设原始数据为：
  数据结构[查找与排序](实验)
  赵燕萍【13周】
  软件工程实验室
  ………………
  计算机硬件基础(理论)
  李泽华【1-12周】
  Z06040

转换结果：
数据结构[查找与排序](实验) | 1 | 1 | 1 | 软件工程实验室 | 赵燕萍 | 13
计算机硬件基础(理论) | 1 | 1 | 1 | Z06040 | 李泽华 | 1-12

请转换以下课表：`;
  navigator.clipboard.writeText(prompt).then(() => alert('已复制到剪贴板'));
}

// ==================== Settings / Semester Start ====================
async function loadSettings() {
  try {
    const ss = await db.getSetting('semesterStart');
    if (ss) { semesterStart = new Date(ss); localStorage.setItem('semesterStart', ss); }
    else {
      const cached = localStorage.getItem('semesterStart');
      if (cached) semesterStart = new Date(cached);
    }
    const ts = await db.getSetting('timeSlots');
    if (ts) { TIME_SLOTS = JSON.parse(ts); localStorage.setItem('timeSlots', ts); }
    else {
      const cached = localStorage.getItem('timeSlots');
      if (cached) TIME_SLOTS = JSON.parse(cached);
    }
  } catch(e) {
    const ss = localStorage.getItem('semesterStart');
    if (ss) semesterStart = new Date(ss);
    const ts = localStorage.getItem('timeSlots');
    if (ts) TIME_SLOTS = JSON.parse(ts);
  }
}

async function showSettingsModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-title">
        <span>设置</span>
        <button class="modal-close" onclick="closeModal()">✕</button>
      </div>
      <div class="form-group">
        <label>学期开始日期（用于计算当前周次）</label>
        <input type="date" id="semester-start" value="${semesterStart ? semesterStart.toISOString().split('T')[0] : ''}">
      </div>
      <button class="btn btn-primary" style="width:100%" onclick="saveSettings()">保存设置</button>
      <button class="btn btn-ghost" style="width:100%;margin-top:8px" onclick="showTimeSettings()">编辑时间表</button>
      <button class="btn btn-ghost" style="width:100%;margin-top:8px;color:#E55A5A" onclick="clearSchedule()">🗑 清除全部课表</button>
    </div>
  `;
  overlay.classList.add('show');
}

async function saveSettings() {
  const val = document.getElementById('semester-start').value;
  if (val) {
    semesterStart = new Date(val);
    await db.setSetting('semesterStart', val);
    localStorage.setItem('semesterStart', val);
  }
  closeModal();
  renderSchedule();
}

async function clearSchedule() {
  if (!confirm('确定要清除全部课表数据吗？此操作不可撤销。')) return;
  const allItems = await db.getAllSchedule();
  for (const item of allItems) {
    await db.deleteSchedule(item.id);
  }
  weekInitialized = false;
  scheduleWeek = 1;
  closeModal();
  renderSchedule();
}

async function exportAllData() {
  const data = await db.exportAll();
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const now = new Date();
  a.download = `生活助手_备份_${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importAllData() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      if (!data.version && !data.accounting && !data.todos && !data.schedule) {
        alert('无效的备份文件');
        return;
      }
      if (!confirm(`将导入以下数据：\n• 记账 ${data.accounting?.length || 0} 条\n• 待办 ${data.todos?.length || 0} 条\n• 课表 ${data.schedule?.length || 0} 条\n\n当前数据将被覆盖，确定继续？`)) return;
      await db.importAll(data);
      weekInitialized = false;
      scheduleWeek = 1;
      await loadSettings();
      closeModal();
      // Re-render current page
      const active = document.querySelector('.nav-item.active')?.dataset?.page || 'home';
      if (active === 'home') renderHome();
      else if (active === 'accounting') renderAccounting();
      else if (active === 'todo') renderTodo();
      else if (active === 'schedule') renderSchedule();
      alert('导入成功！');
    } catch (err) {
      alert('导入失败：' + err.message);
    }
  };
  input.click();
}

function showTimeSettings() {
  const overlay = document.getElementById('modal-overlay');
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-title">
        <span>时间表设置</span>
        <button class="modal-close" onclick="closeModal()">✕</button>
      </div>
      <div style="font-size:12px;color:var(--text-muted);margin-bottom:12px">点击时间可直接编辑，保存后生效</div>
      ${TIME_SLOTS.map((s, i) => `
        <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;font-size:13px;border-bottom:1px solid var(--bg)">
          <span style="font-weight:500;width:50px">第${s.period}节</span>
          <div style="display:flex;align-items:center;gap:4px">
            <input type="time" id="ts-start-${i}" value="${String(s.startH).padStart(2,'0')}:${String(s.startM).padStart(2,'0')}" style="font-size:13px;padding:4px 6px;border:1px solid var(--border);border-radius:6px;background:var(--bg)">
            <span style="color:var(--text-muted)">-</span>
            <input type="time" id="ts-end-${i}" value="${String(s.endH).padStart(2,'0')}:${String(s.endM).padStart(2,'0')}" style="font-size:13px;padding:4px 6px;border:1px solid var(--border);border-radius:6px;background:var(--bg)">
          </div>
        </div>
      `).join('')}
      <button class="btn btn-primary" style="width:100%;margin-top:12px" onclick="saveTimeSlots()">保存时间表</button>
      <button class="btn btn-ghost" style="width:100%;margin-top:8px" onclick="resetTimeSlots()">恢复默认</button>
    </div>
  `;
}

async function saveTimeSlots() {
  const slots = TIME_SLOTS.map((s, i) => {
    const startVal = document.getElementById(`ts-start-${i}`).value;
    const endVal = document.getElementById(`ts-end-${i}`).value;
    const [sh, sm] = startVal.split(':').map(Number);
    const [eh, em] = endVal.split(':').map(Number);
    return { period: s.period, startH: sh, startM: sm, endH: eh, endM: em };
  });
  TIME_SLOTS = slots;
  const json = JSON.stringify(slots);
  await db.setSetting('timeSlots', json);
  localStorage.setItem('timeSlots', json);
  closeModal();
  renderSchedule();
}

async function resetTimeSlots() {
  TIME_SLOTS = DEFAULT_SLOTS.map(s => ({...s}));
  await db.setSetting('timeSlots', null);
  localStorage.removeItem('timeSlots');
  closeModal();
  renderSchedule();
}

// ==================== Utility ====================
function closeModal() { document.getElementById('modal-overlay').classList.remove('show'); }

// ==================== Init ====================
async function init() {
  await db.init();
  await loadSettings();
  loadBingImage(); // Load in background, don't await

  // Nav click handlers
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => navigate(item.dataset.page));
  });

  // Close modal on overlay click
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) closeModal();
  });
  document.getElementById('detail-overlay').addEventListener('click', (e) => {
    if (e.target.classList.contains('detail-overlay')) closeDetail();
  });

  // Only load sample data on first-ever visit (use localStorage as reliable indicator)
  if (!localStorage.getItem('lifeAppInitialized')) {
    const existing = await db.getAllTodos();
    if (existing.length === 0) {
      await loadSampleData();
    }
    localStorage.setItem('lifeAppInitialized', '1');
  }

  navigate('home');
}

async function loadSampleData() {
  const today = new Date(); today.setHours(0,0,0,0);
  const sampleTodos = [
    { title: '完成高数作业', description: '第五章习题', type: 'temp', isCompleted: false, isDaily: false, targetDate: today.getTime(), createdAt: Date.now() },
    { title: '预习数据结构', description: '第三章树与图', type: 'temp', isCompleted: false, isDaily: false, targetDate: today.getTime() + 86400000, createdAt: Date.now() },
    { title: '背英语单词', description: '每天30个', type: 'daily', isCompleted: false, isDaily: true, targetDate: null, createdAt: Date.now() },
    { title: '跑步30分钟', description: '', type: 'daily', isCompleted: false, isDaily: true, targetDate: null, createdAt: Date.now() },
  ];
  for (const todo of sampleTodos) await db.addTodo(todo);

  const now = new Date();
  const ym = `${now.getFullYear()}-${String(now.getMonth()).padStart(2, '0')}`;
  const sampleRecords = [
    { isExpense: true, amount: 35, category: '餐饮', date: Date.now() - 86400000, description: '午餐', yearMonth: ym },
    { isExpense: true, amount: 15, category: '交通', date: Date.now() - 172800000, description: '公交', yearMonth: ym },
    { isExpense: true, amount: 200, category: '购物', date: Date.now() - 259200000, description: '买书', yearMonth: ym },
    { isExpense: false, amount: 2000, category: '工资', date: Date.now() - 604800000, description: '兼职', yearMonth: ym },
  ];
  for (const r of sampleRecords) await db.addRecord(r);

  const semesterDate = new Date();
  semesterDate.setDate(semesterDate.getDate() - 21);
  semesterStart = semesterDate;
  await db.setSetting('semesterStart', semesterDate.toISOString().split('T')[0]);
}

function showAddCourseModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-title">
        <span>添加课程</span>
        <button class="modal-close" onclick="closeModal()">✕</button>
      </div>
      <div class="form-group"><label>课程名称</label><input type="text" id="add-name"></div>
      <div style="display:flex;gap:8px">
        <div class="form-group" style="flex:1"><label>星期</label>
          <select id="add-day">${[1,2,3,4,5,6,7].map(d => `<option value="${d}">${'一二三四五六日'[d-1]}</option>`).join('')}</select>
        </div>
        <div class="form-group" style="flex:1"><label>开始节</label>
          <select id="add-start">${TIME_SLOTS.map(s => `<option value="${s.period}">${s.period}</option>`).join('')}</select>
        </div>
        <div class="form-group" style="flex:1"><label>结束节</label>
          <select id="add-end">${TIME_SLOTS.map(s => `<option value="${s.period}">${s.period}</option>`).join('')}</select>
        </div>
      </div>
      <div class="form-group"><label>地点</label><input type="text" id="add-loc"></div>
      <div class="form-group"><label>教师</label><input type="text" id="add-teacher"></div>
      <div class="form-group"><label>周次</label><input type="text" id="add-weeks" placeholder="如：1-16 或 1-12(双)"></div>
      <button class="btn btn-primary" style="width:100%" onclick="saveCourse()">保存</button>
    </div>
  `;
  overlay.classList.add('show');
}

async function saveCourse() {
  const name = document.getElementById('add-name').value.trim();
  if (!name) return alert('请输入课程名称');
  const allItems = await db.getAllSchedule();
  await db.addSchedule({
    courseName: name,
    dayOfWeek: parseInt(document.getElementById('add-day').value),
    startPeriod: parseInt(document.getElementById('add-start').value),
    endPeriod: parseInt(document.getElementById('add-end').value),
    location: document.getElementById('add-loc').value,
    teacher: document.getElementById('add-teacher').value,
    weeks: document.getElementById('add-weeks').value,
    colorIndex: allItems.length % COURSE_COLORS.length
  });
  closeModal();
  renderSchedule();
}

document.addEventListener('DOMContentLoaded', init);
