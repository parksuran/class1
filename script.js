// Database with Multi-Book Support
const LESSON_DB = [
    {
        id: "dandelion",
        themeName: "theme-dandelion",
        keywords: ["민들레", "민들레는 민들레", "꽃", "식물"],
        title: "민들레는 민들레",
        subtitle: "있는 그대로의 나를 이해해요",
        age: "만 5세",
        domain: "의사소통 · 사회관계 · 예술경험",
        coreIdea: "나는 나답게 소중하다",
        events: [
            {
                step: 1,
                title: "주의 획득",
                desc: "민들레, 장미, 해바라기 사진을 비교하며 흥미를 유도합니다.",
                activity: {
                    title: "사진 비교 관찰 놀이",
                    content: "꽃 사진을 보고 공통점과 차이점을 이야기해봅니다."
                },
                prompt: ["이 꽃들은 닮았나요?", "민들레는 어떤 꽃 같아요?"]
            },
            {
                step: 2,
                title: "학습 목표 제시",
                desc: "오늘의 수업 목표를 아이들에게 전달합니다.",
                objective: "오늘은 '나는 나답게 소중하다'는 것을 알아볼 거예요."
            },
            {
                step: 3,
                title: "선수학습 회상",
                desc: "민들레를 본 경험이나 잡초라고 불린 경험을 떠올립니다.",
                prompt: ["민들레를 길에서 본 적이 있나요?", "사람들이 민들레를 보고 뭐라고 부르나요?"]
            },
            {
                step: 4,
                title: "자극 제시",
                desc: "그림책 『민들레는 민들레』를 함께 읽습니다.",
                activity: {
                    title: "그림책 읽어주기",
                    content: "그림을 충분히 보여주며 천천히 낭독합니다."
                }
            },
            {
                step: 5,
                title: "학습 안내 제공",
                desc: "발문을 통해 의미를 해석하고 생각의 방향을 돕습니다.",
                prompt: ["민들레는 왜 다른 꽃이 되고 싶었을까요?", "민들레가 결국 민들레로 남았을 때 기분이 어땠을까요?"]
            },
            {
                step: 6,
                title: "수행 유도",
                desc: "아이들이 직접 자신을 표현하는 놀이를 합니다.",
                activity: {
                    title: "‘나만의 민들레’ 표현 놀이",
                    content: "도안에 내가 좋아하는 것, 잘하는 것을 표현합니다.",
                    materials: "민들레 도안, 스티커, 색연필"
                }
            },
            {
                step: 7,
                title: "피드백 제공",
                desc: "결과물보다 아이들의 표현과 노력을 인정해줍니다.",
                tip: "비교하지 않고 아이의 생각을 있는 그대로 칭찬해주세요."
            },
            {
                step: 8,
                title: "수행 평가",
                desc: "관찰을 통해 학습 목표 도달 여부를 확인합니다.",
                checkList: ["자신의 소중함을 표현했나요?", "친구의 다름을 존중하는 태도를 보였나요?"]
            },
            {
                step: 9,
                title: "파지 및 전이",
                desc: "수업 내용을 일상 생활로 확장합니다.",
                activity: {
                    title: "칭찬 & 존중 놀이",
                    content: "친구의 작품을 보고 칭찬하며 다름을 긍정적으로 받아들입니다."
                },
                prompt: ["우리 반에도 민들레 같은 친구가 있나요?", "다른 친구와 달라도 괜찮을까요?"]
            }
        ]
    },
    {
        id: "rainbow",
        themeName: "theme-rainbow",
        keywords: ["무지개", "무지개 물고기", "물고기", "비늘"],
        title: "무지개 물고기",
        subtitle: "나눔의 기쁨을 알아요",
        age: "만 5세",
        domain: "사회관계 · 의사소통 · 예술경험",
        coreIdea: "나눌수록 행복해진다",
        events: [
            {
                step: 1,
                title: "주의 획득",
                desc: "반짝이는 비늘(은박지 등)을 보여주며 호기심을 자극합니다.",
                activity: {
                    title: "반짝이 관찰",
                    content: "교사가 준비한 반짝이는 물건을 관찰하고 느낌을 이야기합니다."
                },
                prompt: ["이것을 보니 어떤 기분이 드나요?", "이것을 나 혼자만 가지고 있다면 어떨까요?"]
            },
            {
                step: 2,
                title: "학습 목표 제시",
                desc: "나눔을 통해 친구와 사이좋게 지내는 방법을 알아봅니다.",
                objective: "소중한 것을 친구와 나누는 기쁨을 알아볼 거예요."
            },
            {
                step: 3,
                title: "선수학습 회상",
                desc: "친구에게 장난감을 빌려주거나 나누어 쓴 경험을 회상합니다.",
                prompt: ["친구가 내 장난감을 달라고 했을 때 어떤 마음이 들었나요?", "나누어주었을 때 친구 표정은 어땠나요?"]
            },
            {
                step: 4,
                title: "자극 제시",
                desc: "동화 『무지개 물고기』를 들려줍니다.",
                activity: {
                    title: "동화 감상",
                    content: "무지개 물고기의 감정 변화(뽐냄 → 외로움 → 나눔 → 행복)에 집중하여 듣습니다."
                }
            },
            {
                step: 5,
                title: "학습 안내 제공",
                desc: "무지개 물고기가 왜 외로웠는지, 나누고 나서 왜 행복해졌는지 이야기합니다.",
                prompt: ["아무도 놀아주지 않았을 때 무지개 물고기는 어떤 마음이었을까요?", "비늘을 하나씩 주었을 때 왜 기분이 좋아졌을까요?"]
            },
            {
                step: 6,
                title: "수행 유도",
                desc: "친구에게 줄 나만의 비늘을 꾸며봅니다.",
                activity: {
                    title: "‘우정의 비늘’ 만들기",
                    content: "물고기 비늘 모양 종이에 친구에게 하고 싶은 말을 적거나 예쁘게 꾸밉니다.",
                    materials: "비늘 도안, 반짝이 풀, 싸인펜"
                }
            },
            {
                step: 7,
                title: "피드백 제공",
                desc: "나누고자 하는 마음을 구체적으로 칭찬합니다.",
                tip: "아이들이 만든 것을 친구에게 전달하는 과정까지 격려해주세요."
            },
            {
                step: 8,
                title: "수행 평가",
                desc: "나눔의 의미를 이해했는지, 활동에 즐겁게 참여했는지 확인합니다.",
                checkList: ["나눔이 주는 기쁨을 말로 표현할 수 있나요?", "친구에게 비늘을 선물하며 즐거워했나요?"]
            },
            {
                step: 9,
                title: "파지 및 전이",
                desc: "가정이나 원에서 작은 것이라도 나누어보는 미션을 줍니다.",
                activity: {
                    title: "1일 1나눔 미션",
                    content: "오늘 집에 가서 가족에게 안마 해주기, 혹은 간식 나눠먹기 약속!"
                }
            }
        ]
    }
];

// DOM Elements
const searchSection = document.getElementById('search-section');
const resultsSection = document.getElementById('results-section');
const noResults = document.getElementById('no-results');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const backBtn = document.getElementById('back-btn');
const lessonContent = document.getElementById('lesson-content');

// Helper: Create HTML for an event card
function createEventCard(event, index) {
    const delay = index * 0.1;
    let detailsHtml = '';

    if (event.objective) {
        detailsHtml += `
            <div class="box" style="background:rgba(255,255,255,0.8); border:1px solid #CCC; color:#333;">
                <span class="prompt-label" style="color:var(--primary-dark);">🎯 핵심 목표</span>
                <p>"${event.objective}"</p>
            </div>`;
    }

    if (event.activity) {
        detailsHtml += `
            <div class="box activity-box">
                <h4>🎨 ${event.activity.title}</h4>
                <p>${event.activity.content}</p>
                ${event.activity.materials ? `<small style="display:block; margin-top:0.5rem; opacity:0.8;">📌 준비물: ${event.activity.materials}</small>` : ''}
            </div>`;
    }

    if (event.prompt) {
        const prompts = Array.isArray(event.prompt) ? event.prompt : [event.prompt];
        const promptsHtml = prompts.map(p => `<p>"${p}"</p>`).join('');
        detailsHtml += `
            <div class="box prompt-box">
                <span class="prompt-label">🗣️ 교사 발문</span>
                ${promptsHtml}
            </div>`;
    }

    if (event.tip) {
        detailsHtml += `<div class="box" style="background:#E0F7FA; color:#006064;">💡 ${event.tip}</div>`;
    }
    if (event.checkList) {
        const checks = event.checkList.map(c => `<li>${c}</li>`).join('');
        detailsHtml += `
            <div class="box" style="background:#F4F6F7;">
                <h4>✅ 체크리스트</h4>
                <ul style="padding-left:1.2rem; margin-top:0.5rem;">${checks}</ul>
            </div>`;
    }

    return `
        <article class="event-card" style="animation-delay: ${delay}s">
            <div class="event-num-badge">${String(event.step).padStart(2, '0')}</div>
            <div class="event-title">
                <span>${event.title}</span>
            </div>
            <p class="event-desc">${event.desc}</p>
            ${detailsHtml}
        </article>
    `;
}

// Helper: Render Lesson Plan
function renderLesson(lesson) {
    // Apply theme
    document.body.className = lesson.themeName || '';

    // Update button color for theme integration
    searchBtn.style.backgroundColor = 'var(--primary-color)';

    let html = `
        <div class="lesson-header">
            <span class="lesson-badge">${lesson.age} / ${lesson.domain}</span>
            <h2 class="lesson-title">${lesson.title}</h2>
            <div class="core-concept-box">✨ 핵심 개념: ${lesson.coreIdea}</div>
        </div>
    `;

    html += lesson.events.map((evt, idx) => createEventCard(evt, idx)).join('');

    lessonContent.innerHTML = html;
}

// Search Logic
function handleSearch() {
    const query = searchInput.value.trim().toLowerCase().replace(/\s+/g, '');

    if (!query) return;

    // Search Database
    const result = LESSON_DB.find(lesson => {
        // Check keywords
        // We compare normalized query vs normalized keywords
        return lesson.keywords.some(k => {
            const normalizedKeyword = k.replace(/\s+/g, '');
            return normalizedKeyword.includes(query) || query.includes(normalizedKeyword);
        });
    });

    if (result) {
        // UI Transition
        searchSection.classList.remove('centered');
        searchSection.classList.add('compact');
        searchSection.style.display = 'none';

        noResults.classList.add('hidden');
        resultsSection.classList.remove('hidden');
        setTimeout(() => resultsSection.classList.add('active'), 50);

        renderLesson(result);
    } else {
        // Not Found
        document.body.className = ''; // Reset theme
        searchBtn.style.backgroundColor = ''; // Reset button

        searchSection.classList.remove('compact');
        searchSection.classList.add('centered');
        resultsSection.classList.remove('active');
        resultsSection.classList.add('hidden');

        noResults.classList.remove('hidden');
    }
}

// Reset/Back Logic
function handleBack() {
    resultsSection.classList.remove('active');
    setTimeout(() => {
        resultsSection.classList.add('hidden');
        searchSection.style.display = 'flex';

        // Reset Theme
        document.body.className = '';
        searchBtn.style.backgroundColor = '';

        setTimeout(() => {
            searchSection.classList.remove('compact');
            searchSection.classList.add('centered');
        }, 50);
    }, 300);

    searchInput.value = '';
    searchInput.focus();
}

// Event Listeners
searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});
backBtn.addEventListener('click', handleBack);

// Initial focus
searchInput.focus();
