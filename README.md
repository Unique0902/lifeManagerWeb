# Life Manager Web

Life Manager는 개인의 일상 생활과 목표를 관리하기 위한 웹 애플리케이션입니다. 이 애플리케이션은 할 일(Todo), 목표(Goal), 습관(Habit), 교훈(Lesson), 프로젝트(Project) 등 다양한 측면에서 사용자의 생활을 체계적으로 관리할 수 있도록 도와줍니다.

## 주요 기능

### 할 일 관리 (Todo)
- 일일 할 일 목록 관리
- 월별 일정 보기
- 할 일 추가, 편집, 완료 처리

### 목표 관리 (Goal)
- 장/단기 목표 설정 및 관리
- 교훈별 목표 분류
- 하위 목표(SubGoal) 설정 가능

### 습관 관리 (Habit)
- 일상적인 습관 추적
- 프로젝트별 습관 분류
- 습관 주기 설정

### 교훈 관리 (Lesson)
- 삶의 교훈 기록
- 교훈 기반 목표 설정

### 프로젝트 관리 (Project)
- 프로젝트 생성 및 관리
- 목표별 프로젝트 분류
- 프로젝트에 필요한 항목 관리

## 기술 스택

- **프론트엔드**: React, TypeScript
- **라우팅**: React Router
- **스타일링**: TailwindCSS
- **빌드 도구**: Vite
- **코드 품질**: ESLint

## 시작하기

### 필수 조건
- Node.js (v14 이상)
- npm 또는 yarn

### 설치
```bash
# 저장소 클론
git clone https://github.com/Unique0902/lifeManagerWeb.git

# 디렉토리 이동
cd lifeManagerWeb

# 의존성 설치
npm install
# 또는
yarn install
```

### 개발 서버 실행
```bash
npm run dev
# 또는
yarn dev
```

### 빌드
```bash
npm run build
# 또는
yarn build
```

## 프로젝트 구조

```
lifeManagerWeb/
├── public/             # 정적 파일
├── src/                # 소스 코드
│   ├── components/     # 재사용 가능한 컴포넌트
│   ├── data/           # 데이터 타입 및 하드코딩된 데이터
│   ├── pages/          # 페이지 컴포넌트
│   │   ├── Todo/       # 할 일 관련 페이지
│   │   ├── Goal/       # 목표 관련 페이지
│   │   ├── Habit/      # 습관 관련 페이지
│   │   ├── Lesson/     # 교훈 관련 페이지
│   │   ├── Project/    # 프로젝트 관련 페이지
│   │   └── Home/       # 홈 페이지
│   ├── App.tsx         # 메인 앱 컴포넌트
│   └── main.tsx        # 앱 진입점
├── package.json        # 프로젝트 의존성 및 스크립트
└── vite.config.ts      # Vite 설정
```

## 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다.
