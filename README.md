# 그래픽 디자이너 포트폴리오

웹 포트폴리오(`web/`)와 Obsidian 작업 노트(`project-1/`)를 함께 두는 프로젝트입니다.

## 구조

```
project/
├── web/           # Astro 포트폴리오 사이트 (공개용)
├── project-1/     # Obsidian 보관함 (방향성 · 작업 로그 · 참고)
└── README.md
```

## 연동 방식 (현재)

- **사이트와 Obsidian은 분리**되어 있습니다.
- Obsidian은 작업 방향·로그·레퍼런스용입니다.
- 사이트 콘텐츠는 `web/src/content/projects/`에서 관리합니다.
- 나중에 Obsidian 노트를 사이트 content 원본으로 연결하는 방식으로 확장할 수 있습니다.

## 로컬 실행

이 Mac에는 시스템 `npm`이 없을 수 있습니다. 프로젝트에 포함된 Node로 실행하세요.

**가장 쉬운 방법** (홈이 아니라 프로젝트에서):

```bash
cd ~/Documents/project
./dev.sh
```

또는 직접:

```bash
cd ~/Documents/project/web
export PATH="$HOME/Documents/project/.tools/node/bin:$PATH"
npm install
npm run dev
```

- 개발 서버: http://localhost:4321
- 빌드: `npm run build`
- 미리보기: `npm run preview`

> `cd web`만 치면 홈 폴더 기준이라 실패합니다. 반드시 `~/Documents/project`로 이동한 뒤 실행하세요.

## 자주 수정하는 곳

| 항목 | 경로 |
|------|------|
| 이름 · 이메일 · 연락처 | `web/src/data/site.ts` |
| 프로젝트 글 | `web/src/content/projects/*.md` |
| 커버 이미지 | `web/public/images/projects/` |
| GitHub Pages URL | `web/astro.config.mjs` (`site`, `base`) |

프로젝트 사이트(`username.github.io/repo-name`)로 배포할 때는 `base`를 `'/repo-name/'`로 바꾸세요.

## Obsidian

1. Obsidian에서 **보관함 열기**
2. 폴더 `project-1` 선택 (`Documents/project/project-1`)

노트 골격:

- `00-방향성/` — 포지션, 톤, 사이트 구조
- `01-작업로그/` — 일지 · 템플릿
- `02-참고/` — 레퍼런스

## GitHub Pages 배포

1. 이 폴더를 GitHub 저장소에 push
2. Settings → Pages → Source를 **GitHub Actions**로 설정
3. `main` 브랜치 push 시 `.github/workflows/deploy.yml`이 `web/`을 빌드해 배포합니다

## 이후 계획

- 실제 작업 이미지·카피로 플레이스홀더 교체
- PDF / PPT 산출물
- (선택) Obsidian → 사이트 content 연동
