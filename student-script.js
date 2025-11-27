// Student data
const students = [
    { name: '강민석', color: 'purple' },
    { name: '권민서', color: 'orange' },
    { name: '노희지', color: 'pink' },
    { name: '류시완', color: 'purple' },
    { name: '박성수', color: 'orange' },
    { name: '박지우', color: 'pink' },
    { name: '박지혜', color: 'purple' },
    { name: '서정민', color: 'orange' },
    { name: '신기준', color: 'pink' },
    { name: '양지은', color: 'purple' },
    { name: '유성헌', color: 'orange' },
    { name: '윤다경', color: 'pink' },
    { name: '윤자영', color: 'purple' },
    { name: '이정은', color: 'orange' },
    { name: '이소민', color: 'pink' },
    { name: '이시네', color: 'purple' },
    { name: '이한나', color: 'orange' },
    { name: '이혜원', color: 'pink' },
    { name: '임채영', color: 'purple' },
    { name: '장민지', color: 'orange' },
    { name: '장혜원', color: 'pink' },
    { name: '전소영', color: 'purple' },
    { name: '최문형', color: 'orange' },
    { name: '한서원', color: 'pink' }
];

// Students with only one project (no sidebar needed)
const selfIdentityOnlyStudents = ['강민석', '노희지', '유성헌', '윤자영', '양지은', '임채영'];

// Student project content data
const studentProjectContent = {
    '강민석': {
        'self-identity': `
            <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px;">
                <div>
                    <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px; max-width: none;">ourhour는 흐르는 시간 속에서 쉽게 사라지는 감정과 다짐을 잠시 머물게 하는 브랜드이다. 시계의 배터리가 다해 멈추는 순간, 당신의 가장 진솔한 목소리를 다시 깨내어 보여주는 타임캡슐 브랜드이다.</p>
                    <img src="students/강민석/강민석_Self Identity01.png" alt="Self Identity 01" style="width: 100%; height: auto; margin-top: 10px;">
                </div>
                <div>
                    <img src="students/강민석/강민석_Self Identity02.png" alt="Self Identity 02" style="width: 100%; height: auto; margin-top: 90px;">
                </div>
            </div>
        `
    },
    '권민서': {
        'self-identity': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">anon(안온)은 조개가 불순물을 감싸 진주로 바꾸듯, 걱정을 기록을 통해 다룰 수 있는 형태로 변환하는 과정을 중요한 가치로 삼는 브랜드이다. 걱정을 스스로 다룰 수 있는 상태로 변환하는 순환을 제안하는 브랜드이다.</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/권민서/self identity_권민서.png" alt="Self Identity">
                    <img src="students/권민서/self identity_권민서2.jpg" alt="Self Identity 2">
                    <img src="students/권민서/self identity_권민서3.jpg" alt="Self Identity 3">
                </div>
            </div>
        `,
        'mapping-your-time': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">생각을 걸자: 어지럽고 복잡하게 쌓여있는 생각들을 옷걸이에 걸어보자!</p>
                <img src="students/권민서/Mapping your time_권민서.jpg" alt="Mapping Your Time" style="width: 70%;">
            </div>
        `,
        'generative-system': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 10px;">미괴도감: 미나리 매듭의 결속성을 이용하여 연관되지 않은 단어들을 묶었고 하나의 전혀 다른 단어로 재창조하였다. 각 단어들이 이름을 만드는 방식과 유사하여 24마리의 요괴가 담긴 도감을 만들었다.</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/권민서/generative system_권민서.png" alt="Generative System" style="height: 700px;">
                    <img src="students/권민서/generative_권민서_2.jpg" alt="Generative 2" style="height: 700px;">
                    <img src="students/권민서/generative_권민서_3.jpg" alt="Generative 3" style="height: 700px;">
                </div>
            </div>
        `,
        'shape-poster': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">방향성을 찾아서: 삼각형은 세 개의 도형 중 유일하게 방향성을 가진 도형이라고 생각했다. 삼각형이 가진 그 방향성이 주체성을 나타낸다고 생각했고 목적을 향해 나아가는 세 개의 연작 포스터를 디자인했다.</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/권민서/shape poster_권민서.jpg" alt="Shape Poster">
                    <img src="students/권민서/shape poster_권민서_2.jpg" alt="Shape Poster 2">
                    <img src="students/권민서/shape poster_권민서_3.jpg" alt="Shape Poster 3">
                </div>
            </div>
        `,
        'collected-book': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">환자 권민서: 내가 사용했었던 약 상자들을 전개도 형태로 펼쳐보았다. 각 약상자의 모양, 글자, 색들이 달라 보는 재미가 있었다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/권민서/Collected book_권민서.jpg" alt="Collected Book">
                    <img src="students/권민서/Collected book_권민서2.jpg" alt="Collected Book 2">
                </div>
            </div>
        `
    },
    '류시완': {
        'self-identity': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">Obsidian: 나의 색이 검은색이라는 것을 받아들이고 정체성으로 만들어나가기 위한 첫 번째 미니앨범</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/류시완/SelfIdentity_류시완_1.png" alt="Self Identity 1">
                    <img src="students/류시완/SelfIdentity_류시완_2.jpg" alt="Self Identity 2">
                </div>
            </div>
        `,
        'mapping-your-time': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">감정지도: 시간의 흐름에 따라 변하는 감정을 빛과 그림자를 활용해 눈으로 확인할 수 있도록 만든 지도이다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/류시완/MappingYourTime_류시완_1.jpg" alt="Mapping Your Time 1">
                    <img src="students/류시완/MappingYourTime_2_류시완.jpg" alt="Mapping Your Time 2">
                </div>
            </div>
        `,
        'generative-system': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">본질 탐색기: 더 많이 덜어낼수록 본질에 가까운 정보를 보여주는 인터넷 사전이다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/류시완/GenerativeSystem_류시완_1.png" alt="Generative System 1">
                    <img src="students/류시완/GenerativeSystem_류시완_2.png" alt="Generative System 2">
                </div>
            </div>
        `,
        'shape-poster': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">네모의 꿈 연작: 틀에서 벗어나는 걸 강요하는 사회에 지친 네모에게 건네는 위로를 네모의 꿈의 리릭 포스터 형태로 제작했다.</p>
                <img src="students/류시완/ShapePoster_류시완.gif" alt="Shape Poster" style="width: 50%;">
            </div>
        `,
        'collected-book': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">엮어만든 악보: 보지 않고도 연주가 가능한 악보를 자르고 엮어서 새로운 책을 제작했다.</p>
                <img src="students/류시완/CollectedBook_류시완.gif" alt="Collected Book" style="width: 50%;">
            </div>
        `
    },
    '노희지': {
        'self-identity': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">Inner Lane은 청량리–회기에서 시립대로 이어지는 이동 경로를 아홉 가지 감정과 연결해 시각화한 브랜딩이다. 일상의 움직임 속에서 변화하는 감정의 흐름을 길의 구조로 기록하고 확장한 작업이다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/노희지/selfIdentity_사진1_노희지.png" alt="Self Identity 1" style="height: auto;">
                    <img src="students/노희지/selfIdentity_사진2_노희지.png" alt="Self Identity 2" style="height: auto;">
                    <img src="students/노희지/selfIdentity_사진3_노희지.png" alt="Self Identity 3" style="height: auto;">
                    <img src="students/노희지/selfIdentity_사진4_노희지.png" alt="Self Identity 4" style="height: auto;">
                </div>
            </div>
        `
    },
    '양지은': {
        'self-identity': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">Still Awake는 새벽 1-5시에만 열리는 가상 워크스페이스로, 새벽에 가장 집중이 잘 되는 개인적인 습성을 브랜드로 만들었다. 남들이 자는 시간에 깨어있다는 것을 하나의 라이프스타일로 인정받을 수 있는 공간을 제안하고, 시간 제한이라는 제약을 커뮤니티의 정체성으로 활용하고자 한다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/양지은/1.png" alt="Self Identity 1">
                    <img src="students/양지은/2.png" alt="Self Identity 2">
                    <img src="students/양지은/3.png" alt="Self Identity 3">
                    <img src="students/양지은/4.png" alt="Self Identity 4">
                </div>
            </div>
        `
    },
    '박성수': {
        'self-identity': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">SARYU: 원목 악세서리</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/박성수/개인브랜딩_박성수_사진1.jpg" alt="Self Identity 1">
                    <img src="students/박성수/개인브렌딩_박성수_사진2.jpg" alt="Self Identity 2">
                    <img src="students/박성수/박성수_개인브랜딘_사진3.jpg" alt="Self Identity 3">
                </div>
            </div>
        `,
        'mapping-your-time': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">section.: 방학때의 했었던 일들에 대한 사진과, 감정의 아카이빙북</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/박성수/시간지도_사진1 박성수.png" alt="Mapping Your Time 1">
                    <img src="students/박성수/시간지도_사진2_박성수.png" alt="Mapping Your Time 2">
                </div>
            </div>
        `,
        'generative-system': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">연근 위상학: 자름에 대한 위상적 계념에 대한 반발을 인터랙션웹과, 출력물을 이용해 증명</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/박성수/시스템 디자인_사진1_박성수.png" alt="Generative System 1">
                    <img src="students/박성수/시스템 디자인 사진2_박성수.png" alt="Generative System 2">
                    <img src="students/박성수/시스템디자인_사진3_박성수.png" alt="Generative System 3">
                    <img src="students/박성수/시스템디자인_사진4_박성수.png" alt="Generative System 4">
                    <img src="students/박성수/시스템디자인_사진5_박성수.jpg" alt="Generative System 5">
                    <img src="students/박성수/시스템 디자인_사진6_박성수ㅡ.png" alt="Generative System 6">
                </div>
            </div>
        `,
        'shape-poster': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">TRY(various Triangle forms): 삼각형을 미스터리, 상징, 착시 3가지의 기준으로 나누어 포스터들 제작하고 제본했습니다.</p>
                <img src="students/박성수/모양포스터_사진1_박성수.png" alt="Shape Poster">
            </div>
        `,
        'collected-book': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">Nicotine thought.: 흡연할때의 생각을 적어둔 노트를 담배로 아카이빙 했습니다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/박성수/수집책_사진1_박성수.png" alt="Collected Book 1">
                    <img src="students/박성수/수집책_사진2_박성수.png" alt="Collected Book 2">
                </div>
            </div>
        `
    },
    '박지우': {
        'self-identity': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">Sonelle(소넬)은 바람, 대화, 음악, 발자국 같은 일상의 소리들을 기록 가능한 형태로 옮긴다. 흘러가는 세계의 소리들을 물질적이고 시각적인 나만의 아카이브로 바꿔주는 브랜딩 작업.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/박지우/1.self-identity_사진1_박지우.jpg" alt="Self Identity 1">
                    <img src="students/박지우/2.self-identity_사진2_박지우.png" alt="Self Identity 2">
                </div>
            </div>
        `,
        'mapping-your-time': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">The Way I Listen: '지도'를 '무언가를 향해 나아가는 상태로 해석하고, 내가 향하는 방향이 무엇인지 질문하는 것에서 출발한 작업이다. 나는 자유를 세상의 일로부터 벗어나 온전히 나에게 집중할 수 있는 순간으로 이해하며, 그 순간은 음악을 들을 때 가장 뚜렷하게 찾아온다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/박지우/1.Map_사진1_박지우.jpg" alt="Mapping Your Time 1">
                    <img src="students/박지우/2.Map_사진2_박지우.jpg" alt="Mapping Your Time 2">
                </div>
            </div>
        `,
        'generative-system': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">색은 몸이 될 수 있는가: 비트가 붉게 무르고 분해되는 순간은 피부 아래 살과 피가 드러나는 장면과 닮았다. 단단한 외피 속 물렁함과 연약함은 고통과 자극 앞에서 터져 스며들고, 그 색은 보임을 넘어 몸의 감각이 된다. 그렇다면, 색은 몸이 될 수 있을까?</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/박지우/1.generativesystem_사진1_박지우.jpg" alt="Generative System 1">
                    <img src="students/박지우/2.generative_사진2_박지우.jpg" alt="Generative System 2">
                </div>
            </div>
        `,
        'shape-poster': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">동서양의 원: 세 점의 포스터는 동서양에서 이해되는 '원'의 개념을 시각적으로 비교한 작업이다. 동일한 형태를 서로 다른 사고방식으로 해석하는 방식을 통해, 원이라는 상징이 문화적 맥락에 따라 어떻게 달리 작동하는지를 보여준다.</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/박지우/1.shapeposter_사진1_박지우.jpg" alt="Shape Poster 1">
                    <img src="students/박지우/2.shapeposter_사진2_박지우.jpg" alt="Shape Poster 2">
                    <img src="students/박지우/3.shapeposter_사진3_박지우.jpg" alt="Shape Poster 3">
                </div>
            </div>
        `,
        'collected-book': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">쓰이지 못한 생각들: 공책에서 잊혀가던 날것의 아이디어 스케치들을 모아 만든 책. 클립으로 엮어 제본하였다. 정제되지 못한 생각들이 이루는 층위</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/박지우/1.collectedbook_사진1_박지우.jpg" alt="Collected Book 1">
                    <img src="students/박지우/2.collectedbook_사진2_박지우.jpg" alt="Collected Book 2">
                </div>
            </div>
        `
    },
    '박지혜': {
        'self-identity': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">soyo 소요: 소요는 마음챙김 명상법을 통해서 자신을 돌보는 시간을 제안하는 브랜드이다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/박지혜/SelfIdentity_사진1_박지혜.jpg" alt="Self Identity 1">
                    <img src="students/박지혜/SelfIdentity_사진2_박지혜.jpg" alt="Self Identity 2">
                </div>
            </div>
        `,
        'mapping-your-time': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">시간은 계단: 인생은 시간을 계단과 같은 모양으로 쌓아가는 것이라고 생각한다. 삶에 있어 중요한 시기인 유아 시절의 지도를 계단 형태로 만들었다. 비디오에 담긴 목소리들을 텍스트로 옮겼고, 이를 비디오 캡처 장면의 콜라주와 함께 매칭해볼 수 있도록 구상했다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/박지혜/MappingYourTime_사진1_박지혜.jpg" alt="Mapping Your Time 1">
                    <img src="students/박지혜/MappingYourTime_사진2_박지혜.jpg" alt="Mapping Your Time 2">
                </div>
            </div>
        `,
        'generative-system': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">브로콜리의 꿈: 브로콜리는 라틴어로 가지라는 뜻으로, 작은 것들이 모여서 큰 꽃송이가 된다는 의미를 지닌다. 이러한 브로콜리의 어원을 살려 꿈 아카이빙 프로젝트를 기획했다. '꿈'이라는 추상적인 개념은 말로 뱉거나 글로 적는 과정에서 더 명확해진다. 누구에게나 있을 모호하면서도 낭만적인 꿈이 조금이나마 선명해지길 바라며 꿈을 모았다.</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/박지혜/Generative_사진1_박지혜.jpeg" alt="Generative System 1">
                    <img src="students/박지혜/Generative_사진2_박지혜.jpeg" alt="Generative System 2">
                    <img src="students/박지혜/Generative_사진3_박지혜.jpeg" alt="Generative System 3">
                    <img src="students/박지혜/Generative_사진4_박지혜.jpeg" alt="Generative System 4">
                    <img src="students/박지혜/Generative_사진5_박지혜.jpg" alt="Generative System 5">
                </div>
            </div>
        `,
        'shape-poster': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">불교의 원형: 기본 도형 중 원을 주제로 한 포스터이다. 원에 대하여 불교의 윤회 사상과 다양한 상징물이 원형을 가진다는 점에서 종교적으로 해석했다. 불교 상징물을 중심으로 랜티큘러 포스터를 제작했다. 관점에 따라 바뀌는 이미지를 통해 불교의 원형적 사상을 표현했다.</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/박지혜/ShapePoster_사진1_박지혜.png" alt="Shape Poster 1">
                    <img src="students/박지혜/ShapePoster_사진2_박지혜.png" alt="Shape Poster 2">
                    <img src="students/박지혜/ShapePoster_사진3_박지혜.gif" alt="Shape Poster 3">
                </div>
            </div>
        `,
        'collected-book': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">용돈 봉투 모음: 학창 시절 모아온 용돈 봉투를 모은 책을 만들었다. 가장 단단하고 의미 있는 봉투로 포장하였고, 봉투는 실제본 형식으로 책의 모양을 띤다. 여러 방향으로 펼쳐볼 수 있도록 집게로 고정한 형태로도 구성했다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/박지혜/CollectedBook_사진1_박지혜.jpg" alt="Collected Book 1">
                    <img src="students/박지혜/CollectedBook_사진2_박지혜.jpg" alt="Collected Book 2">
                </div>
            </div>
        `
    },
    '서정민': {
        'self-identity': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">SPIDER TEACHER: 거미도 애완동물로서 키울만 하다는 인식을 심어줄 브랜드 입니다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/서정민/개인 아이덴디티/self-identity.png" alt="Self Identity 1">
                    <img src="students/서정민/개인 아이덴디티/self-identity2.png" alt="Self Identity 2">
                </div>
            </div>
        `,
        'mapping-your-time': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">신체의 지도: 우리 몸이 음식을 먹고, 소화시키는 시간의 지도입니다.</p>
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/서정민/시간 지도 만들기/지도1.jpg" alt="Mapping 1">
                    <img src="students/서정민/시간 지도 만들기/지도2.jpg" alt="Mapping 2">
                    <img src="students/서정민/시간 지도 만들기/지도3.jpg" alt="Mapping 3">
                    <img src="students/서정민/시간 지도 만들기/지도4.jpg" alt="Mapping 4">
                </div>
            </div>
        `,
        'generative-system': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">공생 관계: 자연속에서 볼 수 있는 다양한 공생관계를 그물로 만들었습니다.</p>
                <div style="display: grid; grid-template-columns: repeat(5, 1fr); column-gap: 20px; row-gap: 10px;">
                    <img src="students/서정민/저너레이티브/gen1.png" alt="Gen 1">
                    <img src="students/서정민/저너레이티브/gen2.png" alt="Gen 2">
                    <img src="students/서정민/저너레이티브/gen3.png" alt="Gen 3">
                    <img src="students/서정민/저너레이티브/gen4.png" alt="Gen 4">
                    <img src="students/서정민/저너레이티브/gen5.png" alt="Gen 5">
                    <img src="students/서정민/저너레이티브/gen6.png" alt="Gen 6">
                    <img src="students/서정민/저너레이티브/gen7.png" alt="Gen 7">
                    <img src="students/서정민/저너레이티브/gen8.png" alt="Gen 8">
                    <img src="students/서정민/저너레이티브/gen9.png" alt="Gen 9">
                    <img src="students/서정민/저너레이티브/gen10.png" alt="Gen 10">
                    <img src="students/서정민/저너레이티브/gen11.png" alt="Gen 11">
                    <img src="students/서정민/저너레이티브/gen12.png" alt="Gen 12">
                    <img src="students/서정민/저너레이티브/gen13.png" alt="Gen 13">
                    <img src="students/서정민/저너레이티브/gen14.jpg" alt="Gen 14">
                    <img src="students/서정민/저너레이티브/gen15.jpg" alt="Gen 15">
                </div>
            </div>
        `,
        'shape-poster': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">원주율의 재해석: 각이 없고 무한한 원과, 끝이 없는 원주율을 재해석 하여 만들었습니다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/서정민/모양포스터/모양1.png" alt="Shape Poster 1">
                    <img src="students/서정민/모양포스터/모양2.png" alt="Shape Poster 2">
                </div>
            </div>
        `,
        'collected-book': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">쓰레기봉투 책: 일반 종이가 아닌 가정집에서 쓰는 쓰레기봉투를 크기별로 수집해 책으로 만들었습니다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/서정민/콜렉트 북 /book1.jpg" alt="Collected Book 1">
                    <img src="students/서정민/콜렉트 북 /book2.png" alt="Collected Book 2">
                </div>
            </div>
        `
    },
    '신기준': {
        'self-identity': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">Bondle은 워크샵에 필요한 물품을 고객 맞춤형으로 대여·구매할 수 있는 브랜드로, 세심한 커스터마이징과 편리한 서비스로 워크샵의 완성도를 높입니다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/신기준/Self-identity_사진2_신기준.jpg" alt="Self Identity 2">
                    <img src="students/신기준/Self-identity_사진3_신기준.jpg" alt="Self Identity 3">
                </div>
            </div>
        `,
        'mapping-your-time': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">Connectome Medical Certificate: 본 작품은 인생 궤적을 몸에 새겨진 신경계 지도로 보고, 현재의 내가 과거의 나를 진단서 형식으로 분석하며 경험과 기억의 흔적을 성찰적으로 아카이브한 작업이다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/신기준/MappingYourTime_사진1_신기준.jpg" alt="Mapping Your Time 1">
                    <img src="students/신기준/MappingYourTime_사진2_신기준.jpg" alt="Mapping Your Time 2">
                </div>
            </div>
        `,
        'generative-system': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">부추: 부추를 소재로 미니멀과 맥시멀 포스터 시리즈를 제작하여, 본질적 선형과 색채의 풍요로움을 탐구하고, 이를 바탕으로 활력과 선형 데이터를 시각화한 아카이브 포스터로 재구성한 작업이다.</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/신기준/Gen_사진1_신기준.jpg" alt="Generative 1">
                    <img src="students/신기준/Gen_사진2_신기준.jpg" alt="Generative 2">
                    <img src="students/신기준/Gen3신기준.jpg" alt="Generative 3">
                </div>
            </div>
        `,
        'shape-poster': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">삼각형: 삼각형의 '날카로움'과 '긴장감'을 탐구하는 도형 포스터 시리즈로, 종이 모서리의 잠재적 위협, 전 세계 단검이 만든 기하학적 리듬, TRIANGLE 타이포그래피의 역동적 사선을 통해 일상 속 삼각형이 지닌 긴장감과 조형 에너지를 입체적으로 드러낸 작업이다.</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/신기준/Shape poster_사진1_신기준.jpg" alt="Shape Poster 1">
                    <img src="students/신기준/Shape poster_사진2_신기준.jpg" alt="Shape Poster 2">
                    <img src="students/신기준/shape3.jpeg" alt="Shape Poster 3">
                </div>
            </div>
        `,
        'collected-book': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">기준쌤: 본 작품은 지구과학 I 강사로서 학생들의 어려움과 성장을 담은 생기부 기록과, 이를 지도하며 교사 자신이 경험한 교육자로서의 변화를 병렬적으로 아카이브한 작업이다.</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/신기준/Collected book_사진1_신기준.JPG" alt="Collected Book 1">
                    <img src="students/신기준/Collected book_사진2_신기준.JPG" alt="Collected Book 2">
                    <img src="students/신기준/Collected book_사진3_신기준.JPG" alt="Collected Book 3">
                </div>
            </div>
        `
    },
    '유성헌': {
        'self-identity': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">오류임스튜디오는 오씨, 류씨, 임씨가 각각 모여 실수와 불확실성을 디자인하는 보드게임 스튜디오입니다. 우리는 틀림의 순간에서 새로운 질서와 유머를 발견하며, 오류 속에서 피어나는 놀이의 가능성을 추구합니다.</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/유성헌/SelfIdentity_사진1_유성헌.png" alt="Self Identity 1">
                    <img src="students/유성헌/SelfIdentity_사진2_유성헌.png" alt="Self Identity 2">
                    <img src="students/유성헌/SelfIdentity_사진3_유성헌.png" alt="Self Identity 3">
                    <img src="students/유성헌/SelfIdentity_사진4_유성헌.png" alt="Self Identity 4">
                    <img src="students/유성헌/SelfIdentity_사진5_유성헌.png" alt="Self Identity 5">
                </div>
            </div>
        `
    },
    '윤다경': {
        'generative-system': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">나 지도: 여러 사람의 하루 경로를 수집한 후 서로 합성하고 재구성하여 가상 세계의 지도를 제작했다.</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/윤다경/Gen_사진1_윤다경.jpg" alt="Generative System 1">
                    <img src="students/윤다경/Gen_사진2_윤다경.jpg" alt="Generative System 2">
                    <img src="students/윤다경/Gen_사진3_윤다경.jpg" alt="Generative System 3">
                    <img src="students/윤다경/Gen_사진4_윤다경.jpg" alt="Generative System 4">
                </div>
            </div>
        `,
        'shape-poster': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">(No/Every) thing is circle: 정의상 완벽한 원은 어떤 방법으로도 현실 세계에 그려질 수 없지만, 동시에 형태가 적당히 둥그렇거나 불분명한 수많은 물체가 원형으로 칭해지기도 한다. 이러한 상반된 속성을 드러내는 포스터다.</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/윤다경/ShapePoster_사진1_윤다경.png" alt="Shape Poster 1">
                    <img src="students/윤다경/ShapePoster_사진2_윤다경.jpg" alt="Shape Poster 2">
                    <img src="students/윤다경/ShapePoster_사진3_윤다경.png" alt="Shape Poster 3">
                </div>
            </div>
        `
    },
    '윤자영': {
        'self-identity': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">쑥쑥은 식물을 키우고 싶지만 그럴 수 없는 식집사들을 위한 식물 일러스트 굿즈 브랜드입니다. 일상의 순간에 식물이 함께할 수 있게 합니다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/윤자영/1.Self-identity_사진1_윤자영.png" alt="Self Identity 1">
                    <img src="students/윤자영/2.Self-identity_사진2_윤자영.png" alt="Self Identity 2">
                </div>
            </div>
        `
    },
    '이시네': {
        'self-identity': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">잔잠(Zan4am): 새벽4시의 잔잠을 빌려 진정성이 담긴 편지와 선물을 전달할 수 있게 합니다. 편지지와 포장지로 진심이 담긴 마음을 전달하세요.</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/이시네/Self identity_사진1_이시네.jpg" alt="Self Identity 1">
                    <img src="students/이시네/Self identity_사진2_이시네.jpg" alt="Self Identity 2">
                    <img src="students/이시네/Self identity_사진3_이시네.jpeg" alt="Self Identity 3">
                </div>
            </div>
        `,
        'mapping-your-time': `
            <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                <img src="students/이시네/Map10이시네.png" alt="Mapping Your Time 1">
                <img src="students/이시네/Map0이시네.png" alt="Mapping Your Time 2">
            </div>
        `,
        'collected-book': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">전시 관람: 그동안 다녀온, 고이 쌓아두었던 전시 리플렛들을 엮어 만든 책이다. 날짜와 상관 없이 크기 순서로 엮었다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/이시네/Collected book_사진1_이시네.jpeg" alt="Collected Book 1">
                    <img src="students/이시네/Collected book_사진2_이시네.jpeg" alt="Collected Book 2">
                </div>
            </div>
        `,
        'shape-poster': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">Welcome to the Square life.: Shape poster의 발전한 버전이다. 실제로 게임을 할 수 있도록 정사각형의 튜브를 제작하였다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/이시네/Shape poster_사진1_이시네.png" alt="Shape Poster 1">
                    <img src="students/이시네/Shape poster_사진2_이시네.JPG" alt="Shape Poster 2">
                </div>
            </div>
        `
    },
    '이정은': {
        'mapping-your-time': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">Inspiration Board: 일상에서 수집한 영감들을 프로세스, 연도, 테마별로 정리할 수 있는 도구로서의 웹사이트이다. 작은 연결고리들을 찾아내고, 그것들을 한눈에 볼 수 있도록 아홉 개의 무드보드 형태로 시각화했다.</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/이정은/Map_1_이정은.jpg" alt="Mapping Your Time 1">
                    <img src="students/이정은/Map_2_이정은.jpg" alt="Mapping Your Time 2">
                    <img src="students/이정은/Map_3_이정은.jpg" alt="Mapping Your Time 3">
                    <img src="students/이정은/Map_4_이정은.jpg" alt="Mapping Your Time 4">
                    <img src="students/이정은/Map_5_이정은.jpg" alt="Mapping Your Time 5">
                </div>
            </div>
        `,
        'generative-system': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">점점점: 검은콩 리서치에서 시작한 작업으로 콩에서 "작은 점의 성장과 풍성한 미래" 라는 특징을 추출해 하나의 축을 만들고 그 축을 기준으로 이어져가는 오브제이다. 축을 놓고 이어가는 행위 시스템으로, 이 오브제는 재료, 크기에 제한이 없어 의도에 따라 그 용도가 바뀔 수 있다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/이정은/Gen10이정은.jpeg" alt="Generative System 1">
                    <img src="students/이정은/Gen20이정은.jpeg" alt="Generative System 2">
                </div>
            </div>
        `,
        'shape-poster': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">[  ]로서의 사각형: 사각형을 리서치 해 글자꼴, 기하학 도형, 경계라는 세가지 특성을 추출해 포스터를 제작했다. 이 중 경계짓는 사각형이라는 특성을 발전시켜 골목길의 집, 그리드로 나눈 공간, 텍스트로 채우는 사각형의 세가지 포스터를 제작 후, 경계를 나누고 채우는 사각형의 특성으로 최종 포스터 "경계짓는 사각형"을 완성했다.</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/이정은/Shape_1_이정은.jpeg" alt="Shape Poster 1">
                    <img src="students/이정은/Shape이정은.jpeg" alt="Shape Poster 2">
                    <img src="students/이정은/Shape_3_이정은.jpeg" alt="Shape Poster 3">
                </div>
            </div>
        `
    },
    '이한나': {
        'self-identity': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">모뉴망은 나의 성향에서 출발한 브랜드이다. 모뉴망은 진지하지만 웃기고, 허술하지만 이상하게 믿음이 가는 요가원이다. 길거리에서 모뉴망을 마주친다면 절대 지나치고 싶게 하고 싶지 않다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/이한나/이한나self.png" alt="Self Identity 1">
                    <img src="students/이한나/self2.jpeg" alt="Self Identity 2">
                </div>
            </div>
        `,
        'mapping-your-time': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">mapping your time: 나의 시간들이 일정한 사건들의 연결 이라고 생각했다. 그리고 그러한 사건들을 무작위한 점들로 표현하여 그 점들을 차근차근 이어가다 보면 진정한 나를 발견 할 수 있게 된다.</p>
                <img src="students/이한나/맵핑유얼타임_1_이한나.png" alt="Mapping Your Time">
            </div>
        `,
        'generative-system': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">애 라는 글자는 참 귀엽다. '애'로 시작하는 글자를 원형안에 넣어 상징화 시키고 그것들을 나열 패턴포스터 연작을 만들었다.</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/이한나/제너러티브_1_이한나.png" alt="Generative System 1">
                    <img src="students/이한나/제너러티브_1_이한나(1).png" alt="Generative System 2">
                    <img src="students/이한나/제너러티브_4_이한나.png" alt="Generative System 3">
                    <img src="students/이한나/제너러티브_5_이한나.png" alt="Generative System 4">
                    <img src="students/이한나/제너러티브_13_이한나.png" alt="Generative System 5">
                </div>
            </div>
        `,
        'shape-poster': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">바다보다는 산을 좋아한다. 세모하면은 산, 산이 주는 정복감과 또 그앞에서 압도되는 여러가지 감정을 말하고 싶었다.</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/이한나/쉐입포스터_1_이한나.png" alt="Shape Poster 1">
                    <img src="students/이한나/쉐입포스터_2_이한나.png" alt="Shape Poster 2">
                    <img src="students/이한나/쉐입포스터_3_이한나.png" alt="Shape Poster 3">
                    <img src="students/이한나/쉐입포스터_4_이한나.jpg" alt="Shape Poster 4">
                    <img src="students/이한나/쉐입포스터_5_이한나.png" alt="Shape Poster 5">
                </div>
            </div>
        `,
        'collected-book': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">편지를 보호하는 편지 봉투를 모았습니다. 편지의 내용도 매우 사적이지만 주소 이름 등등, 매우 민감한 정보들이 편지를 감싸고 있다는 사실이 재밌어서 모으게 되었다.편지 봉투를 감싸고 있는 것 또한 봉부의 형태를 띠는 콜렉트북으로 제작했다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/이한나/이한나1.png" alt="Collected Book 1">
                    <img src="students/이한나/이한나2.jpg" alt="Collected Book 2">
                </div>
            </div>
        `
    },
    '이혜원': {
        'self-identity': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">연초점은 '명료함의 과잉'에서 벗어나 흐림·멍함·몰입의 상태를 탐구하는 비영리 단체이다. 연초점은 초점을 내려놓는 경험을 제안하고, 관조적 시선과 느슨한 집중의 가치를 전달한다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/이혜원/셀프_사진1_이혜원.jpg" alt="Self Identity 1">
                    <img src="students/이혜원/셀프_사진2_이혜원.jpg" alt="Self Identity 2">
                </div>
            </div>
        `,
        'mapping-your-time': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">overlapping traces: 침대 위에서의 나의 움직임의 궤적을 투명필름을 사용하여 중첩되도록 표현하고, 시계처럼 돌려가며 감상할 수 있게 제작하였다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/이혜원/map_사진1_이혜원.jpg" alt="Mapping Your Time 1">
                    <img src="students/이혜원/map_사진2_이혜원.jpg" alt="Mapping Your Time 2">
                </div>
            </div>
        `,
        'generative-system': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">pumpkin told me: 다양한 성격의 캐릭터로 만들어진 호박이 구도자인 나에게 답을 해주는 타로카드를 제작하였다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/이혜원/제너레이티브시스템_사진1_이혜원.jpg" alt="Generative System 1">
                    <img src="students/이혜원/제너레이티브시스템_사진2_이혜원.jpg" alt="Generative System 2">
                </div>
            </div>
        `,
        'shape-poster': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">beyond the circle: 플라톤의 동굴의 비유에서 영감을 받아 빛과 그림자를 활용하여, 동굴에서 나와 이성적인 사고를 통해 진리의 원형을 볼 수 있다는 메세지를 담은 포스터이다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/이혜원/shape poster_사진1_이혜원.jpg" alt="Shape Poster 1">
                    <img src="students/이혜원/shape poster_사진2_이혜원.jpg" alt="Shape Poster 2">
                </div>
            </div>
        `,
        'collected-book': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">bar code book: 나의 주변 물건들의 바코드를 수집한 뒤, 코드 밑에 적힌 국가번호에 따라 분리해 엮은 콜렉트북이다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/이혜원/콜렉트북_사진1_이혜원.jpg" alt="Collected Book 1">
                    <img src="students/이혜원/콜렉트북_사진2_이혜원.jpg" alt="Collected Book 2">
                </div>
            </div>
        `
    },
    '임채영': {
        'self-identity': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">LUMINAUT: 내면의 빛을 따라 떠나는 가상 항해, 루미노트. 진단을 통해 지금 당신에게 가장 필요한 휴식의 섬을 발견하고, 그 신비로운 여정 속에서 진정한 나를 마주하는 특별한 경험을 선사합니다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/임채영/셀프아이덴티티_사진1_임채영.png" alt="Self Identity 1">
                    <img src="students/임채영/셀프아이덴티티_사진2_임채영.png" alt="Self Identity 2">
                </div>
            </div>
        `
    },
    '이소민': {
        'self-identity': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">ARCHITAG은 수집가들을 위한 개인 아카이브 브랜드이다. 수집가들에게 단순히 모은다는 행위를 넘어, 수집하고, 정리하는 재미를 주고 만든 브랜드이다. 현실의 물건에 직접 태그를 달 순 없어도, ARCHITAG 에서는 모든 수집품을 디지털로 정리하고 시각화 할 수 있다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/이소민/self1.png" alt="Self Identity 1">
                    <img src="students/이소민/self2.png" alt="Self Identity 2">
                </div>
            </div>
        `,
        'mapping-your-time': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">A daily containing my time: 지도를 추억을 찾아주는 하나의 수단이라고 생각하였다. 그렇기에 내 추억을 나타낼 수 있는 물건들을 모아 다이어리에 꾸며 지도를 나타내었다. 영수증이나, 그림, 물건의 택등을 사용하였다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/이소민/mapping1.jpg" alt="Mapping Your Time 1">
                    <img src="students/이소민/mapping2.jpg" alt="Mapping Your Time 2">
                </div>
            </div>
        `,
        'generative-system': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">a tiny but noticeable presence: 공주와 완두콩에 나오는 완두콩 처럼 작지만 신경쓰이는 존재인 완두콩은 신경써야만 읽을 수 있는 책으로 표현하였다. 이 책을 글씨가 매우 작아 문진을 사용하지않으면 읽을 수 없고, 또한 길게 늘어져있어 접어가면서 읽어야한다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/이소민/general.jpg" alt="Generative System 1">
                    <img src="students/이소민/general2.jpg" alt="Generative System 2">
                </div>
            </div>
        `,
        'shape-poster': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">The shape of a sound: 형태가 있지않는 소리를 파장의 느낌을 통해 시각적으로 나타내고자하였다. 가로로 이어지는 소리의 파장과 세로로 쌓이고 흔들리는 리듬의 느낌을 넣었다.삼각형의 꼭짓점을 이용하여,소리의 위치를 나타내었다.</p>
                <img src="students/이소민/shape 1.png" alt="Shape Poster">
            </div>
        `,
        'collected-book': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">A precious memory: 사람들이 사소하거나, 특별한 날에 적어주는 쪽지, 편지 등을 잘 버리지 못하는 나를 나타내기 위해서 지금껏 모아두었던 편지들을 종류별로 정리하여 커다란 편지지에 넣어 그것 또한 하나의 편지로 나타냈다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/이소민/collected1.jpg" alt="Collected Book 1">
                    <img src="students/이소민/collected2.jpg" alt="Collected Book 2">
                </div>
            </div>
        `
    },
    '장민지': {
        'self-identity': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">Minism은 개인적 아이덴티티를 담은 'min'과 'ism'을 결합해 만든 미니멀리즘 라이프스타일 브랜드입니다. 단정하고 절제된 감성을 기반으로 감각적인 일상의 오브제를 제안합니다.</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/장민지/self1.png" alt="Self Identity 1">
                    <img src="students/장민지/self2.jpg" alt="Self Identity 2">
                    <img src="students/장민지/self3.jpg" alt="Self Identity 3">
                    <img src="students/장민지/self4.png" alt="Self Identity 4">
                </div>
            </div>
        `,
        'generative-system': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">당근교를 믿으십니까?: '당근이지'는 '당연하지'에서 비롯된 언어유희이자 무조건적인 긍정을 상징하는 표현입니다. 이 의미를 반복,확장해 당근교라는 가상의 종교에 빠져들게 하는 제너러티브 시스템을 제작했습니다.</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/장민지/gen1.png" alt="Generative System 1">
                    <img src="students/장민지/gen2.png" alt="Generative System 2">
                    <img src="students/장민지/gen3.jpg" alt="Generative System 3">
                    <img src="students/장민지/gen4.png" alt="Generative System 4">
                    <img src="students/장민지/gen5.png" alt="Generative System 5">
                </div>
            </div>
        `,
        'shape-poster': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">We live in a squared ___: 하루,한달,일년이 모두 사각형의 구조 안에서 반복된다는 점에 주목해 포스터 3연작을 만들었습니다. 이를 바탕으로 최종결과물로 달력과 스티커를 제작했습니다.</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/장민지/Shape Poster_1_장민지.png" alt="Shape Poster 1">
                    <img src="students/장민지/Shape Poster_2_장민지.png" alt="Shape Poster 2">
                    <img src="students/장민지/Shape Poster_3_장민지.png" alt="Shape Poster 3">
                    <img src="students/장민지/Shape Poster_4_장민지.png" alt="Shape Poster 4">
                    <img src="students/장민지/Shape Poster_5_장민지.png" alt="Shape Poster 5">
                </div>
            </div>
        `
    },
    '장혜원': {
        'self-identity': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">moo migin: 작은 떨림조차 없다라는 의미의 무미진(moo migin)은 중요한 순간에 쉽게 긴장하는 사람들을 위한 플래너 브랜드이다. 긴장과 떨림을 준비의 에너지원으로 활용하며, 계획의 구체화를 통해 사용자들이 자신에 대한 확신을 갖도록 돕는다.</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/장혜원/self-identity_사진1_장혜원.jpg" alt="Self Identity 1">
                    <img src="students/장혜원/self-identity_사진2_장혜원.jpg" alt="Self Identity 2">
                    <img src="students/장혜원/self-identity_사진3_장혜원.jpg" alt="Self Identity 3">
                    <img src="students/장혜원/self-identity_사진4_장혜원.png" alt="Self Identity 4">
                </div>
            </div>
        `,
        'mapping-your-time': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">the way to get a good night's sleep: 하루를 마무리하고 숙면을 취하는 과정을 섬에 도달하는 여정에 비유하였다. 복잡한 머릿속을 비우고 편안한 휴식에 이르는 효율적인 경로를 안내해주는 지도이다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/장혜원/MappingYourTime_사진1_장혜원.jpg" alt="Mapping Your Time 1">
                    <img src="students/장혜원/MappingYourTime_사진2_장혜원.jpg" alt="Mapping Your Time 2">
                </div>
            </div>
        `,
        'generative-system': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">pieces of memories: 색연필을 깎아서 나온 부스러기를 선 이미지로 추출하여 순환하는 기억이라는 주제를 시각화했다. 부스러기 선 하나하나가 특정 순간의 기억을 상징한다. 이를 바탕으로 특별한 순간을 기록하여 보관할 수 있는 카드와 아이덴티티 영상을 제작했다.</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/장혜원/gen1.png" alt="Generative System 1">
                    <img src="students/장혜원/gen2.png" alt="Generative System 2">
                    <img src="students/장혜원/gen3.jpg" alt="Generative System 3">
                </div>
            </div>
        `,
        'shape-poster': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">circles in sentences: 기본 도형인 원을 마침표, 가운뎃점 등 문장부호로 해석한 3연작 포스터이다. 원형 문장부호의 정확한 위치 정보와 문장 내 역할 및 의미를 명확하게 표현하고자 했다.</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/장혜원/maximal_사진_장혜원.jpg" alt="Shape Poster Maximal">
                    <img src="students/장혜원/minimal_사진_장혜원.png" alt="Shape Poster Minimal">
                    <img src="students/장혜원/Shape poster_사진1_장혜원.png" alt="Shape Poster 1">
                    <img src="students/장혜원/Shape poster_사진2_장혜원.png" alt="Shape Poster 2">
                    <img src="students/장혜원/Shape poster_사진3_장혜원.png" alt="Shape Poster 3">
                </div>
            </div>
        `,
        'collected-book': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">Keyring Card Book: 명함을 열쇠고리 형태로 엮어 만든 콜렉트북이다. 동일한 카테고리별로 명함을 하나의 고리에 묶어 구성했다. 필요한 정보를 직관적으로 찾아볼 수 있게 하여 편의성을 높이고자 했다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/장혜원/collected book_사진1_장혜원.jpg" alt="Collected Book 1">
                    <img src="students/장혜원/collected book_사진2_장혜원.jpg" alt="Collected Book 2">
                </div>
            </div>
        `
    },
    '전소영': {
        'mapping-your-time': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">Lost In Melbourne: 단시간에 이동할 수는 없지만 지도는 우리가 결론적으로 원하는 곳에 다다르게 하는 차원문 같은 존재라고 해석했다. 영상 내내 사진 속 일부분의 부분이 랜덤하게 다른 장소로 계속해서 이어저나가며 교환학생 시절 방문한 장소로 넘어가는 영상을 제작하였다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/전소영/MappingYourTime_사진1_전소영.PNG" alt="Mapping Your Time 1">
                    <img src="students/전소영/MappingYourTime_사진2_전소영.png" alt="Mapping Your Time 2">
                </div>
            </div>
        `,
        'generative-system': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">다중인격 가방: 완두콩의 특징을 다중인격으로 해석하고, 여러 성격의 아이덴티티를 그래픽화 하고 여러 짜투리 천에 실크스트린 하여 'tag'를 만들어 스티치하였다.</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/전소영/gen1.jpg" alt="Generative System 1">
                    <img src="students/전소영/gen2.jpg" alt="Generative System 2">
                    <img src="students/전소영/gen3.jpg" alt="Generative System 3">
                    <img src="students/전소영/gen4.jpg" alt="Generative System 4">
                </div>
            </div>
        `,
        'shape-poster': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">무제: 사람의 얼굴을 해체하거나, 정사각형의 전개도 안에 사람의 신체를 삽입하였다.</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/전소영/ShapePoster_1_전소영.png" alt="Shape Poster 1">
                    <img src="students/전소영/ShapePoster_2_전소영.png" alt="Shape Poster 2">
                    <img src="students/전소영/ShapePoster_3_전소영.png" alt="Shape Poster 3">
                </div>
            </div>
        `,
        'collected-book': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">멸종위기책: 여러 이유로 버리지 않고 모아둔 책들을 모아 책을 제작하였다. 어릴적의 추억이나 혹은 미처 발견하지 못해서 생존한 인쇄물들이 모아져있고, 전시 이후에 멸종될 예정이다.</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/전소영/Collectedbook_1_전소영.jpg" alt="Collected Book 1">
                    <img src="students/전소영/Collectedbook_2_전소영.jpg.jpg" alt="Collected Book 2">
                    <img src="students/전소영/Collectedbook_3_전소영.jpg.jpg" alt="Collected Book 3">
                </div>
            </div>
        `
    },
    '최문형': {
        'self-identity': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">우린(ourin)은 마음 전달의 과정에 주목합니다. 마음을 전하기 위해서 우리는 선물을 고르고 편지를 씁니다. 그 과정에서 비롯되는 다양한 방식과 감정을 관찰하고, 기록하며, 제안합니다. 어쩌면 단순히 물건을 건네는 행위가 어떻게 마음으로 전해지고 우리가 되는지 들여봅니다. 선물이라는 익숙한 틀에서 가장 작은 단위에서의 마음 전달을 탐구합니다.</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/최문형/Self-Identity_사진1_최문형.png" alt="Self Identity 1" loading="lazy">
                    <img src="students/최문형/Self-Identity_사진2_최문형.png" alt="Self Identity 2" loading="lazy">
                    <img src="students/최문형/Self-Identity_사진3_최문형.png" alt="Self Identity 3" loading="lazy">
                    <img src="students/최문형/Self-Identity_사진4_최문형.png" alt="Self Identity 4" loading="lazy">
                    <img src="students/최문형/Self-Identity_사진5_최문형.png" alt="Self Identity 5" loading="lazy">
                    <img src="students/최문형/Self-Identity_사진6_최문형.png" alt="Self Identity 6" loading="lazy">
                </div>
            </div>
        `,
        'mapping-your-time': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">고요를 위한 나만의 지도 (my map for peace): 내가 정의한 지도는 내가 가야하는 길을 알려주는 것이다. 내가 가야할 목적지에 더 쉽고 빠르게 도착할 수 있도록한다. 하지만 이 지도는 최고가 아닌 최선이고 더 나은 길이 있을 수 있다. 일상의 시간속에서 필요한 지도를 만들었다. 이것은 잠들기 위한, 혼자 있기 위한, 생각 많고 자꾸 깜빡하는 나를 위한, 토익 점수가 필요한, 일상 속의 평화를 위한 지도이다.</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/최문형/MappingYourTime_사진1_최문형.jpg" alt="Mapping Your Time 1" loading="lazy">
                    <img src="students/최문형/MappingYourTime_사진2_최문형.jpg" alt="Mapping Your Time 2" loading="lazy">
                    <img src="students/최문형/MappingYourTime_사진3_최문형.jpg" alt="Mapping Your Time 3" loading="lazy">
                    <img src="students/최문형/MappingYourTime_사진4_최문형.jpg" alt="Mapping Your Time 4" loading="lazy">
                    <img src="students/최문형/MappingYourTime_사진5_최문형.jpg" alt="Mapping Your Time 5" loading="lazy">
                    <img src="students/최문형/MappingYourTime_사진6_최문형.jpg" alt="Mapping Your Time 6" loading="lazy">
                    <img src="students/최문형/MappingYourTime_사진7_최문형.jpg" alt="Mapping Your Time 7" loading="lazy">
                    <img src="students/최문형/MappingYourTime_사진8_최문형.jpg" alt="Mapping Your Time 8" loading="lazy">
                    <img src="students/최문형/MappingYourTime_사진9_최문형.png의 사본.png" alt="Mapping Your Time 9" loading="lazy">
                </div>
            </div>
        `,
        'generative-system': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">어제오늘내일: 토마토는 성장 과정에서 받은 햇살, 바람, 물, 시간의 작은 차이로 전혀 다른 토마토가 된다. 우리도 하루하루 작은 선택에 따라 매일매일 또 다른 내가 되어간다. 그리고 아주 작은 선택에도 다른 사람이 된다. 토마토를 기반으로 포스터를 만들고 이를 바탕으로 일력을 제작하였다. 하루하루 쌓여서 내가 되어간다는 의미를 담았다.</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/최문형/Generative System_사진1_최문형.jpg" alt="Generative System 1" loading="lazy">
                    <img src="students/최문형/Generative System_사진2_최문형.jpg" alt="Generative System 2" loading="lazy">
                    <img src="students/최문형/Generative System_사진3_최문형.png" alt="Generative System 3" loading="lazy">
                    <img src="students/최문형/Generative System_사진4_최문형.png" alt="Generative System 4" loading="lazy">
                    <img src="students/최문형/Generative System_사진5_최문형.png" alt="Generative System 5" loading="lazy">
                    <img src="students/최문형/Generative System_사진6_최문형.png" alt="Generative System 6" loading="lazy">
                </div>
            </div>
        `,
        'shape-poster': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">we can be anything: 기본 형태인 동그라미에 대해 조사하여 포스터를 만들었다. 동그라미가 내는 소리에 집중해보기도 하고, 동그라미가 주는 긍정적인 순간들에 대해 모아보기도 했다. 또한 우리의 시작은 모두 원형이었다는 메시지를 가지고 작업하여 씨앗을 통해 타이포를 만들어 포스터를 제작했다.</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/최문형/Shape Poster_사진1_최문형.jpg" alt="Shape Poster 1" loading="lazy">
                    <img src="students/최문형/Shape Poster_사진2_최문형.jpg" alt="Shape Poster 2" loading="lazy">
                    <img src="students/최문형/Shape Poster_사진3_최문형.jpg" alt="Shape Poster 3" loading="lazy">
                    <img src="students/최문형/Shape Poster_사진4_최문형.png" alt="Shape Poster 4" loading="lazy">
                </div>
            </div>
        `,
        'collected-book': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">명함 모음책: 존재하는 인쇄물을 수집하고 재배열하는 행위를 통해 하나의 완성된 책을 제작하는 프로젝트입니다. 디자이너들의 명함을 수집하여 한 번에 볼 수 있는 폴더 형식의 책을 만들었다. 이 책은 옆으로 넘겨서 볼 수도 있고, 넘겨서 볼 수도 있다.</p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/최문형/Collected Book_사진1_최문형.png" alt="Collected Book 1" loading="lazy">
                    <img src="students/최문형/Collected Book_사진2_최문형.png" alt="Collected Book 2" loading="lazy">
                    <img src="students/최문형/Collected Book_사진3_최문형.png" alt="Collected Book 3" loading="lazy">
                </div>
            </div>
        `
    },
    '한서원': {
        'self-identity': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">일차원(ilchawon): 조용하지만 강하다는 공통점을 가진 해와 차를 결합한 이름의 차 브랜드이다. 해가 하루의 차원을 열고 닫듯이 차를 통해 새로운 차원을 만날 수 있다는 의미를 가진다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/한서원/한서원_selfidentity_1.jpg" alt="Self Identity 1">
                    <img src="students/한서원/한서원_selfidentity_2-100.jpg" alt="Self Identity 2">
                </div>
            </div>
        `,
        'mapping-your-time': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">doing on subway: 등교하는 동안의 시간을 지도 형태로 표현하였다. 집에서 학교까지 지하철을 타고 이동하며 하는 책 읽기, 노래 듣기, 자기 등의 활동을 여러 노선도로 분류하였다. 활동이 전환되는 지점은 환승역으로 표시하였다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/한서원/한서원_mapping_1.jpg" alt="Mapping Your Time 1">
                    <img src="students/한서원/한서원_mapping_2.jpg" alt="Mapping Your Time 2">
                </div>
            </div>
        `,
        'generative-system': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">새빨간 루머: 토마토는 떨어짐과 동시에 확산되고 본래의 형태를 잃는다. 루머도 마찬가지로 완전했던 이야기가 사람들의 입을 거쳐 확산될 수록 원래의 형태를 잃는다. 새빨간 루머는 이야기의 요약을 통해 완전했던 이야기가 어떻게 변형되어가는 지를 느끼도록한다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/한서원/한서원_generative_1.jpg" alt="Generative System 1">
                    <img src="students/한서원/한서원_generative_2.jpg" alt="Generative System 2">
                </div>
            </div>
        `,
        'shape-poster': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">square, the most modern and traditional: 사각형은 가장 현대적이면서도 가장 오래된 도형이다. 과거와 현재, 아날로그와 디지털을 잇는 매개체로서 사각형의 형태를 표현해보았다.전통 창살의 이미지와 디지털 이미지를 결합하여 그 조형적 공통점을 탐구한 시리즈 포스터 3점을 제작하였다.</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 30px; row-gap: 10px;">
                    <img src="students/한서원/한서원_shape poster-1.jpg" alt="Shape Poster 1">
                    <img src="students/한서원/한서원_shape poster-2.jpg" alt="Shape Poster 2">
                    <img src="students/한서원/한서원_shape poster-3.jpg" alt="Shape Poster 3">
                </div>
            </div>
        `,
        'collected-book': `
            <div>
                <p style="word-break: keep-all; line-height: 1.5; margin-bottom: 30px;">re:code: 전체 주제를 '코드(Code)'로 설정하고, 바코드와 QR코드를 활용해 제작하였다. 바코드와 QR코드는 중요한 역할을 하지만 늘 뒤에 있거나 숨겨져 있다. 이 콜렉티드 북은 그런 코드들을 전면에 배치하여 잘 보일 수 있게 제작하였다.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 30px; row-gap: 10px;">
                    <img src="students/한서원/한서원_collectd book_1.jpg" alt="Collected Book 1">
                    <img src="students/한서원/한서원_collected book_2.jpg" alt="Collected Book 2">
                </div>
            </div>
        `
    }
};

// Student projects participation (which projects each student participated in)
const studentProjects = {
    '강민석': ['self-identity'],
    '노희지': ['self-identity'],
    '유성헌': ['self-identity'],
    '윤자영': ['self-identity'],
    '양지은': ['self-identity'],
    '임채영': ['self-identity'],
    '신기준': ['self-identity', 'mapping-your-time', 'generative-system', 'shape-poster', 'collected-book'],
    '이소민': ['self-identity', 'mapping-your-time', 'generative-system', 'shape-poster', 'collected-book'],
    '박지혜': ['self-identity', 'mapping-your-time', 'generative-system', 'shape-poster', 'collected-book'],
    '이한나': ['self-identity', 'mapping-your-time', 'generative-system', 'shape-poster', 'collected-book'],
    '한서원': ['self-identity', 'mapping-your-time', 'generative-system', 'shape-poster', 'collected-book'],
    '최문형': ['self-identity', 'mapping-your-time', 'generative-system', 'shape-poster', 'collected-book'],
    '류시완': ['self-identity', 'mapping-your-time', 'generative-system', 'shape-poster', 'collected-book'],
    '권민서': ['self-identity', 'mapping-your-time', 'generative-system', 'shape-poster', 'collected-book'],
    '박성수': ['self-identity', 'mapping-your-time', 'generative-system', 'shape-poster', 'collected-book'],
    '서정민': ['self-identity', 'mapping-your-time', 'generative-system', 'shape-poster', 'collected-book'],
    '이혜원': ['self-identity', 'mapping-your-time', 'generative-system', 'shape-poster', 'collected-book'],
    '박지우': ['self-identity', 'mapping-your-time', 'generative-system', 'shape-poster', 'collected-book'],
    '장혜원': ['self-identity', 'mapping-your-time', 'generative-system', 'shape-poster', 'collected-book'],
    '장민지': ['self-identity', 'generative-system', 'shape-poster'],
    '이시네': ['self-identity', 'mapping-your-time', 'collected-book', 'shape-poster'],
    '윤다경': ['generative-system', 'shape-poster'],
    '이정은': ['mapping-your-time', 'generative-system', 'shape-poster'],
    '전소영': ['mapping-your-time', 'generative-system', 'shape-poster', 'collected-book']
};

// Get current student from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const studentIndex = parseInt(urlParams.get('student')) || 0;
const currentStudent = students[studentIndex];

// Set student name
document.getElementById('student-name').textContent = currentStudent.name;
document.getElementById('page-title').textContent = currentStudent.name + ' - 포트폴리오';

// Hide sections and nav items for projects the student didn't participate in
if (studentProjects[currentStudent.name]) {
    const participatedProjects = studentProjects[currentStudent.name];
    const allSections = document.querySelectorAll('.project-section');
    const allNavItems = document.querySelectorAll('.nav-item');

    // Hide sections and nav items for projects the student didn't participate in
    allSections.forEach(section => {
        const projectId = section.id;
        if (!participatedProjects.includes(projectId)) {
            section.style.display = 'none';
            // Hide corresponding nav item
            allNavItems.forEach(navItem => {
                if (navItem.getAttribute('href') === '#' + projectId) {
                    navItem.style.display = 'none';
                }
            });
        }
    });
}

// Load student project content with lazy loading
if (studentProjectContent[currentStudent.name]) {
    const contentData = studentProjectContent[currentStudent.name];
    Object.keys(contentData).forEach(projectId => {
        const section = document.getElementById(projectId);
        if (section) {
            const contentDiv = section.querySelector('.project-content');
            if (contentDiv) {
                contentDiv.innerHTML = contentData[projectId];
                // Add loading="lazy" to all images
                const images = contentDiv.querySelectorAll('img');
                images.forEach(img => {
                    img.setAttribute('loading', 'lazy');
                });
            }
        }
    });
}

// Hide sidebar for students with only Self-Identity project
if (selfIdentityOnlyStudents.includes(currentStudent.name)) {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.display = 'none';
    }
}

// Sidebar navigation - smooth scroll and active state
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.project-section');

// Add hover effect to show project names
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Update active nav item on scroll (only for visible sections)
const visibleSections = Array.from(sections).filter(section => section.style.display !== 'none');

if (visibleSections.length > 0) {
    const observerOptions = {
        root: null,
        rootMargin: '-100px 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === '#' + id) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    visibleSections.forEach(section => {
        observer.observe(section);
    });
}

// Next student navigation
document.getElementById('next-student').addEventListener('click', () => {
    const nextIndex = (studentIndex + 1) % students.length;
    window.location.href = `student.html?student=${nextIndex}`;
});

// Previous student navigation
document.getElementById('prev-student').addEventListener('click', () => {
    const prevIndex = (studentIndex - 1 + students.length) % students.length;
    window.location.href = `student.html?student=${prevIndex}`;
});

// Home button navigation
document.getElementById('home-button').addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Image lightbox functionality
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');

// Add click event to all images in project content
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG' && e.target.closest('.project-content')) {
        modal.classList.add('active');
        modalImg.src = e.target.src;
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
});

// Close modal when clicking on background or pressing ESC
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
});
