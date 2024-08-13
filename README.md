<div style="background-color: #FFF3CD; padding: 10px; border-radius: 5px;">
이 프로젝트는 초기 단계입니다. 앱과 웹을 동시에 서비스하기 위해 Expo expo-router와 Next.js의 app-router를 통합한 프로젝트를 구축하고 있습니다.
</div>

## 프로젝트 설명

AI 챗봇 Yoo는 다양한 플랫폼에서 원활하게 작동하도록 Expo와 Next.js를 사용하여 개발되었습니다. HTML 유사 태그를 활용해 서버 사이드 렌더링(SSR)과 의미론적 장점을 제공합니다. Yoo는 대화와 기억 기능에서 뛰어난 성능을 발휘하도록 설계되었습니다.

Yoo의 핵심은 고급 자연어 처리(NLP)를 기반으로 한 대화 엔진으로, 사람과 같은 응답을 생성합니다. 또한, 이전 대화를 기억하는 메모리 모듈을 통해 각 대화에 개인적인 터치를 더합니다. HTML 유사 태그로 구성된 인터페이스는 최적의 의미와 접근성을 보장하여 사용자에게 친근하고 매력적인 경험을 제공합니다.

Expo와 Next.js의 결합으로 Yoo는 강력한 크로스 플랫폼 기능과 서버사이드 렌더링의 이점을 누릴 수 있습니다. 이는 성능과 사용자 경험을 크게 향상시킵니다. Yoo는 AI 대화의 새로운 표준을 세우기 위해 지속적으로 학습하고 발전합니다.

Yoo와 관련된 모든 코드와 자산은 김수홍(nickname: aldegad)에게 소유권이 있습니다. Yoo는 허가 없이 사용, 수정, 배포할 수 없습니다. 모든 권리는 김수홍에게 있습니다.

## 구성 요소

기억을 오래할 수 있는 챗봇 AI를 만들기 위해서는 여러 가지 기술을 결합해야 합니다. Claude 3.5 Sonnet API와 함께, 장기 기억 저장을 위해 벡터 스토어를 사용할 수 있습니다. 벡터 스토어는 임베딩 벡터를 저장하고 검색하는 데 사용되며, 사용자와의 상호작용 기록을 효과적으로 관리할 수 있습니다. 아래는 기억을 오래할 수 있는 챗봇을 구축하기 위한 주요 구성 요소와 방법입니다:

### LLM (Large Language Model)

**Claude 3.5 Sonnet API**

- **설명**: Claude 3.5 Sonnet API는 챗봇의 자연어 처리와 이해, 대화 생성을 담당하는 대규모 언어 모델입니다.
- **이유**: 이 모델은 고급 자연어 처리 능력을 통해 사람과 유사한 대화를 생성할 수 있어, 사용자와의 상호작용을 더욱 자연스럽고 효율적으로 만듭니다.

### 벡터 스토어

**Pinecone**

- **설명**: Pinecone은 고성능 벡터 데이터베이스로, 임베딩된 데이터를 효율적으로 저장하고 검색할 수 있습니다. 대규모 벡터 데이터를 관리하고 빠르게 검색할 수 있는 기능을 제공합니다.
- **이유**: 벡터 스토어는 사용자와의 대화 기록을 임베딩 벡터로 변환하여 저장함으로써 필요한 정보를 빠르게 검색하고 활용할 수 있습니다. 이를 통해 챗봇은 사용자와의 과거 대화를 기억하고 적절히 응답할 수 있습니다.

### 데이터베이스

**MongoDB**

- **설명**: MongoDB는 NoSQL 데이터베이스로, 유연한 스키마 디자인과 높은 성능을 제공합니다. 구조화되지 않은 데이터를 효과적으로 저장하고 관리할 수 있습니다.
- **이유**: MongoDB는 사용자 프로필, 선호도, 이력 등을 저장하는 데 유용하며, 다양한 데이터 형식을 유연하게 처리할 수 있습니다. 또한 확장성이 뛰어나 프로젝트의 성장에 맞춰 쉽게 확장할 수 있습니다.

### 메모리 관리 시스템

**단기 및 장기 메모리 관리**

- **설명**: 단기 메모리는 현재 세션 동안의 정보를 저장하고, 장기 메모리는 과거 대화와 상호작용 데이터를 저장합니다. 이를 통해 AI 챗봇은 지속적인 기억을 유지하며, 사용자와의 상호작용을 개인화할 수 있습니다.
- **이유**: 단기 메모리와 장기 메모리 시스템을 결합함으로써 챗봇은 사용자와의 대화 맥락을 이해하고, 과거의 대화를 기반으로 보다 의미 있는 응답을 생성할 수 있습니다.

### 기타 사용 기술

**Voyage AI**

- **설명**: Voyage AI는 챗봇의 보조 기술로, 다양한 AI 기능을 지원하여 챗봇의 성능과 기능을 향상시킵니다.

**보안 라이브러리**

- **bcryptjs**: 암호화 기능을 제공하여 사용자 데이터의 보안을 강화합니다.
- **jsonwebtoken**: JSON 웹 토큰을 사용하여 안전한 인증과 권한 부여를 구현합니다.

## 구현 단계

1. **임베딩 생성**: 사용자의 입력 데이터를 벡터 형식으로 변환합니다.
2. **벡터 저장**: 변환된 임베딩 벡터를 벡터 스토어(Pinecone)에 저장합니다.
3. **대화 관리**: 사용자의 입력을 처리하고 적절한 응답을 생성하는 대화 관리 시스템을 구현합니다.
4. **정보 검색 및 업데이트**: 벡터 스토어와 데이터베이스를 사용하여 필요한 정보를 검색하고, 새로운 정보를 추가 및 업데이트합니다.

## 설치 및 설정

이 프로젝트는 다양한 라이브러리를 사용하여 Expo와 Next.js 환경에서 AI 챗봇 Yoo를 구현합니다. 아래는 프로젝트에 필요한 모든 라이브러리들을 설치하고 설정하는 방법을 설명합니다.

### 1. 프로젝트 클론 및 이동

먼저, 프로젝트를 클론하고 프로젝트 디렉토리로 이동합니다:

```bash
git clone https://github.com/aldegad/ai-chatbot-yoo-v2.git
cd ai-chatbot-yoo-v2
```

### 2. 라이브러리 설치

필요한 라이브러리를 설치합니다:

```bash
npm install
npm install @expo/next-adapter @expo/vector-icons @react-navigation/native @react-navigation/stack bcryptjs jsonwebtoken
```

### 3. 환경 변수 설정

.env 파일을 생성하고 필요한 환경 변수를 설정합니다:

```bash
## Keys
# https://console.anthropic.com/settings/keys
ANTHROPIC_API_KEY1=<YOUR_ANTHROPIC_API_KEY1>
ANTHROPIC_API_KEY2=<YOUR_ANTHROPIC_API_KEY2>
ANTHROPIC_API_KEY3=<YOUR_ANTHROPIC_API_KEY3>
ANTHROPIC_API_KEY4=<YOUR_ANTHROPIC_API_KEY4>
# https://platform.openai.com/api-keys
GPT_API_KEY1=<YOUR_GPT_API_KEY1>
# mongoDB
MONGODB_URI=<YOUR_MONGODB_URI>
# JWT
JWT_SECRET=<YOUR_JWT_SECRET>
REFRESH_SECRET=<YOUR_REFRESH_SECRET>
# config
SYSTEM_CONFIG=<YOUR_SYSTEM_CONFIG>
INIT_MESSAGE_FILTER1=<YOUR_INIT_MESSAGE_FILTER1>
INIT_MESSAGE_FILTER2=<YOUR_INIT_MESSAGE_FILTER2>
REJECTED_MESSAGE_FILTER1=<YOUR_REJECTED_MESSAGE_FILTER1>
REJECTED_MESSAGE_FILTER2=<YOUR_REJECTED_MESSAGE_FILTER2>
```

### 5. 서버 실행

프로젝트를 시작합니다:

```bash
npm run dev
```

### 6. API 엔드포인트 규약

Yoo 프로젝트에서 사용하는 주요 HTTP 상태 코드는 다음과 같습니다:

- **200 OK**: 요청이 성공적으로 처리되었음을 나타냅니다. 주로 GET 요청의 응답으로 사용됩니다.
- **201 Created**: 요청이 성공적으로 처리되었으며, 새로운 리소스가 생성되었음을 나타냅니다. 주로 POST 요청의 응답으로 사용됩니다.
- **204 No Content**: 요청이 성공적으로 처리되었지만, 응답 본문이 없음을 나타냅니다. 주로 DELETE 요청의 응답으로 사용됩니다.
- **400 Bad Request**: 잘못된 문법으로 인해 서버가 요청을 이해할 수 없음을 나타냅니다.
- **401 Unauthorized**: 인증이 필요하거나 인증에 실패했음을 나타냅니다.
- **403 Forbidden**: 서버가 요청을 이해했지만, 권한이 없어서 요청을 거부했음을 나타냅니다.
- **404 Not Found**: 서버가 요청받은 리소스를 찾을 수 없음을 나타냅니다.
- **409 Conflict**: 요청이 서버의 현재 상태와 충돌함을 나타냅니다.
- **422 Unprocessable Entity**: 요청의 문법은 올바르지만, 의미론적 오류로 인해 요청을 처리할 수 없음을 나타냅니다.
- **500 Internal Server Error**: 서버 내부 오류로 인해 요청을 처리할 수 없음을 나타냅니다.
