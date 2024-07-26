<div style="background-color: #FFF3CD; padding: 10px; border-radius: 5px;">
이 프로젝트는 초기 단계입니다. 앱과 웹을 동시에 서비스하기 위해 Expo와 Next.js를 통합한 프로젝트를 구축하고 있습니다.
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
- **대안**: Pinecone 외에도 FAISS와 같은 벡터 스토어를 사용할 수 있습니다.

### 데이터베이스

**MongoDB**

- **설명**: MongoDB는 NoSQL 데이터베이스로, 유연한 스키마 디자인과 높은 성능을 제공합니다. 구조화되지 않은 데이터를 효과적으로 저장하고 관리할 수 있습니다.
- **이유**: MongoDB는 사용자 프로필, 선호도, 이력 등을 저장하는 데 유용하며, 다양한 데이터 형식을 유연하게 처리할 수 있습니다. 또한 확장성이 뛰어나 프로젝트의 성장에 맞춰 쉽게 확장할 수 있습니다.

### 메모리 관리 시스템

**단기 및 장기 메모리 관리**

- **설명**: 단기 메모리는 현재 세션 동안의 정보를 저장하고, 장기 메모리는 과거 대화와 상호작용 데이터를 저장합니다. 이를 통해 AI 챗봇은 지속적인 기억을 유지하며, 사용자와의 상호작용을 개인화할 수 있습니다.
- **이유**: 단기 메모리와 장기 메모리 시스템을 결합함으로써 챗봇은 사용자와의 대화 맥락을 이해하고, 과거의 대화를 기반으로 보다 의미 있는 응답을 생성할 수 있습니다.

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

### 2. 기본 의존성 설치

기본적으로 필요한 의존성들을 설치합니다:

```bash
npm run project
```

이 명령어는 `axios`와 `cors`를 설치합니다. `axios`는 HTTP 요청을 처리하는 라이브러리이며, `cors`는 서버 간 요청을 처리할 때 발생하는 보안 문제를 해결합니다.

### 3. Expo 설치 및 설정

Expo에서 필요한 의존성들을 설치합니다:

```bash
npm run dependencies:expo
npm run svg:expo
```

- `expo-splash-screen`: Expo에서 스플래시 화면을 구현하는 라이브러리입니다.
- `react-native-svg`: React Native에서 SVG를 사용하기 위한 라이브러리입니다.
- `react-native-svg-transformer`: React Native에서 SVG 파일을 변환하기 위한 라이브러리입니다.

`metro.config.js` 파일을 생성하거나 수정하여 `react-native-svg-transformer`를 설정합니다:

```javascript
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {

  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();
```

### 4. Next.js 설치 및 설정

Next.js에서 필요한 의존성들을 설치합니다:

```bash
npm run dependencies:nextjs
npm run svg:nextjs
```

- `ignore-loader`: 특정 파일을 무시하는 데 사용하는 Webpack 로더입니다.
- `@svgr/webpack`: SVG 파일을 React 컴포넌트로 변환하는 Webpack 로더입니다.

`next.config.js` 파일을 생성하거나 수정하여 Webpack 설정을 추가합니다:

```javascript
const { withExpo } = require("@expo/next-adapter");
const path = require('path'); // 추가된 부분

/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  reactStrictMode: false,
  swcMinify: true,
  transpilePackages: [
    "react-native",
    "expo",
    // Add more React Native / Expo packages here...
  ],
  experimental: {
    forceSwcTransforms: true,
  },
  webpack(config, { isServer }) {
    // nextjs에서 네이티브 페이지 무시
    config.module.rules.push({
      test: /\.native\.tsx?$/,
      use: 'ignore-loader'
    });
    // nextjs svg파일을 tsx파일로 인식해서 보이게 하기
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  }
});

module.exports = nextConfig;

```

### 5. TypeScript 설정 (선택 사항)

TypeScript를 사용하는 경우, 프로젝트 루트에 `declarations.d.ts` 파일을 생성하여 SVG 파일의 타입을 선언합니다:

```typescript
declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
```

### 6. 파일 구조 확인

프로젝트의 파일 구조가 설정된 경로와 일치하는지 확인합니다:

```
/public/assets
  /imgs
  /fonts
/components
  images.tsx
/pages
  index.tsx
/theme
```

### 7. 코드 수정

경로 별칭을 사용하여 SVG 파일을 불러옵니다.

#### `components/images.tsx`

```typescript
import SvgLogo from '@assets/imgs/logo.svg';

export {
  SvgLogo
};
```

#### App.tsx (Expo)
```typescript
import React from 'react';
import NextJsPage from './pages'; // Next.js 페이지를 가져옵니다
import NextNative from '@local_modules/NextNative';
import { appTheme } from 'App.theme';

export default function App() {
  return (
    <NextNative theme={appTheme}>
      <NextJsPage />
    </NextNative>
  );
}
```

#### _app.tsx (nextjs)
```typescript
import Head from "next/head";
import '../globals.css';
import { AppProps } from "next/app";
import { appTheme } from "App.theme";
import NextNative from "@local_modules/NextNative";

export default function App({ Component, pageProps }:AppProps) {
  return (
    <NextNative theme={appTheme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </NextNative>
  );
}
```

#### theme/theme.tsx
앱의 테마와 font등을 설정합니다.
```typescript
import { Platform } from "react-native"

export const appTheme = {
  ...(Platform.OS === 'web' ? require('./theme.web').default : require('./theme.native').default),
  color: {
    primary: '#8A6BF4',
    text: '#313131'
  }
}

export type AppTheme = typeof appTheme;
```

theme/theme.native.tsx
```typescript
const appTheme = {
  font: {
    '100': require('public/assets/fonts/Pretendard-Thin.otf'),
    '200': require('public/assets/fonts/Pretendard-ExtraLight.otf'),
    '300': require('public/assets/fonts/Pretendard-Light.otf'),
    '400': require('public/assets/fonts/Pretendard-Regular.otf'),
    '500': require('public/assets/fonts/Pretendard-Medium.otf'),
    '600': require('public/assets/fonts/Pretendard-SemiBold.otf'),
    '700': require('public/assets/fonts/Pretendard-Bold.otf'),
    '800': require('public/assets/fonts/Pretendard-ExtraBold.otf'),
    '900': require('public/assets/fonts/Pretendard-Black.otf')
  }
}
export default appTheme;
```

theme/theme.web.tsx
```typescript
export const appTheme = {
  font: {
    '100': './assets/fonts/Pretendard-Thin.otf',
    '200': './assets/fonts/Pretendard-ExtraLight.otf',
    '300': './assets/fonts/Pretendard-Light.otf',
    '400': './assets/fonts/Pretendard-Regular.otf',
    '500': './assets/fonts/Pretendard-Medium.otf',
    '600': './assets/fonts/Pretendard-SemiBold.otf',
    '700': './assets/fonts/Pretendard-Bold.otf',
    '800': './assets/fonts/Pretendard-ExtraBold.otf',
    '900': './assets/fonts/Pretendard-Black.otf'
  }
}

export default appTheme;
```

#### pages/index.tsx(ex)
```typescript
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Div from '@local_modules/tags/Div';
import axios from 'axios';
import env from '@env';
import Input from '@local_modules/tags/Input';
import { SvgLogo } from '@components/images';
import H1 from '@local_modules/tags/H1';
import { AppTheme } from 'App.theme';
import { useTheme } from '@local_modules/AppConfig/ThemeContext';

export default function App() {
  const { color } = useTheme<AppTheme>();

  const [message, setMessage] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const onEnter = (e:any) => {
    axios.post(`${env.LOCAL_ADDRESS}/api/chat`, { message: message })
    .then((response) => setResponse(response.data.message))
    .catch((error) => console.error('Error fetching data:', error));
  }

  return (
    <Div style={styles.container}>
      <H1 style={{ fontWeight: 700, color: color.primary }}>Your AI. Yoo</H1>
      <Div>test</Div>
      <Div style={{ backgroundColor: 'red', width: 100, minHeight: 0 }}>{response}</Div>
      <Input value={message} onChange={(e) => setMessage(e.instance.value)} onEnter={onEnter}></Input>
      <SvgLogo/>
    </Div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center', // 웹과 네이티브 모두 가운데 정렬
    fontSize: 20,
  },
  text: {
    margin: 0,
    fontFamily: 'Bold'
  }
});
```