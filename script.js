// Mock Database with "Dandelion is Dandelion" Lesson Plan
const LESSON_DB = [
    {
        id: "dandelion",
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
                prompt: [
                    "이 꽃들은 닮았나요, 서로 다른가요?",
                    "민들레는 어떤 꽃 같아요?"
                ]
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
                prompt: [
                    "민들레를 길에서 본 적이 있나요?",
                    "사람들이 민들레를 보고 뭐라고 부르나요?"
                ]
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
                prompt: [
                    "민들레는 왜 다른 꽃이 되고 싶었을까요?",
                    "민들레가 결국 민들레로 남았을 때 기분이 어땠을까요?"
                ]
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
                checkList: [
                    "자신의 소중함을 표현했나요?",
                    "친구의 다름을 존중하는 태도를 보였나요?"
                ]
            },
            {
                step: 9,
                title: "파지 및 전이",
                desc: "수업 내용을 일상 생활로 확장합니다.",
                activity: {
                    title: "칭찬 & 존중 놀이",
                    content: "친구의 작품을 보고 칭찬하며 다름을 긍정적으로 받아들입니다."
                },
                prompt: [
                    "우리 반에도 민들레 같은 친구가 있나요?",
                    "다른 친구와 달라도 괜찮을까요?"
                ]
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
    const delay = index * 0.1; // Staggered animation

    let detailsHtml = '';

    // Add Objective Box
    if (event.objective) {
        detailsHtml += `
            <div class="box prompt-box" style="background:#FFF3CD; color:#856404;">
                <span class="prompt-label" style="color:#856404;">🎯 핵심 목표</span>
                <p>"${event.objective}"</p>
            </div>`;
    }

    // Add Activity Box
    if (event.activity) {
        detailsHtml += `
            <div class="box activity-box">
                <h4>🎨 ${event.activity.title}</h4>
                <p>${event.activity.content}</p>
                ${event.activity.materials ? `<small style="display:block; margin-top:0.5rem; color:#666;">📌 준비물: ${event.activity.materials}</small>` : ''}
            </div>`;
    }

    // Add Prompt Box
    if (event.prompt) {
        const prompts = Array.isArray(event.prompt) ? event.prompt : [event.prompt];
        const promptsHtml = prompts.map(p => `<p>"${p}"</p>`).join('');
        detailsHtml += `
            <div class="box prompt-box">
                <span class="prompt-label">🗣️ 교사 발문</span>
                ${promptsHtml}
            </div>`;
    }

    // Add Tip/Checklist
    if (event.tip) {
        detailsHtml += `<div class="box" style="background:#E8F8F5; color:#0E6251;">💡 ${event.tip}</div>`;
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
    const query = searchInput.value.trim().toLowerCase().replace(/\s+/g, ''); // Remove spaces for better matching

    if (!query) return;

    // Simulate database lookup
    const result = LESSON_DB.find(lesson => {
        // Check keywords
        return lesson.keywords.some(k => k.replace(/\s+/g, '').includes(query));
    });

    if (result) {
        // Found!
        searchSection.classList.remove('centered');
        searchSection.classList.add('compact');
        searchSection.style.display = 'none'; // Hide completely to clean up view

        noResults.classList.add('hidden');
        resultsSection.classList.remove('hidden');
        setTimeout(() => resultsSection.classList.add('active'), 50); // Fade in

        renderLesson(result);
    } else {
        // Not Found
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
