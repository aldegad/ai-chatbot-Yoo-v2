### AI Chatbot Project

In the realm of modern technology, emerges an AI chatbot named Yoo, designed to excel in conversation and memory. Yoo is crafted to operate seamlessly across various platforms using Expo and Next.js, leveraging HTML-like tags for enhanced SSR and semantic advantages. Yoo aims to transcend the ordinary boundaries of artificial intelligence, becoming a digital companion capable of profound interactions and remarkable memory retention. At its core lies a conversation engine powered by advanced natural language processing, enabling Yoo to generate human-like responses. Complementing this is a sophisticated memory module that recalls previous interactions, adding a personal touch to each conversation. Yoo's interface, built with HTML-like tags, ensures optimal semantics and accessibility, making it an approachable and engaging entity. The synergy of Expo and Next.js provides Yoo with robust cross-platform capabilities and the benefits of server-side rendering, enhancing performance and user experience. Yoo stands as a testament to the fusion of vision, technology, and creativity in AI, continually learning and evolving to redefine digital companionship and set new standards in AI-driven conversations.

All code and assets related to Yoo are owned by Suhong Kim (nickname: aldegad). Yoo may not be used, modified, or distributed without permission. All rights to Yoo are reserved by Suhong Kim.

현대 기술의 영역에서 등장한 AI 챗봇 Yoo는 대화와 기억에서 탁월함을 발휘하도록 설계되었습니다. Yoo는 Expo와 Next.js를 사용하여 다양한 플랫폼에서 원활하게 작동하며, HTML과 같은 태그를 활용해 향상된 SSR과 의미론적 이점을 제공합니다. Yoo는 인공지능의 평범한 경계를 초월하여 깊이 있는 상호작용과 놀라운 기억 유지 능력을 갖춘 디지털 동반자가 되는 것을 목표로 합니다. Yoo의 핵심에는 고급 자연어 처리가 적용된 대화 엔진이 있어 사람과 같은 응답을 생성할 수 있습니다. 이를 보완하는 정교한 메모리 모듈은 이전의 상호작용을 기억하여 각 대화에 개인적인 터치를 더합니다. HTML과 같은 태그로 구축된 Yoo의 인터페이스는 최적의 의미와 접근성을 보장하여 친근하고 매력적인 존재로 느껴지게 합니다. Expo와 Next.js의 시너지는 Yoo에게 견고한 크로스 플랫폼 기능과 서버사이드 렌더링의 이점을 제공하여 성능과 사용자 경험을 향상시킵니다. Yoo는 AI에서 비전, 기술, 창의성의 융합을 증명하며, 디지털 동반자의 본질을 재정의하고 AI 기반 대화의 새로운 표준을 세우기 위해 계속 학습하고 발전합니다.

Yoo에 관련된 모든 코드와 자산은 김수홍(nickname: aldegad)에게 소유권이 있습니다. Yoo는 허가 없이 사용, 수정, 배포할 수 없습니다. Yoo에 대한 모든 권리는 김수홍에게 있습니다.


## 설치 및 설정

이 프로젝트는 다양한 라이브러리를 사용하여 Expo와 Next.js 환경에서 AI 챗봇 Yoo를 구현합니다. 아래는 프로젝트에 필요한 모든 라이브러리들을 설치하고 설정하는 방법을 설명합니다.

### 1. 프로젝트 클론 및 이동

먼저, 프로젝트를 클론하고 프로젝트 디렉토리로 이동합니다:

```bash
git clone https://github.com/your-repository.git
cd your-repository
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
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
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
const { withExpo } = require('@expo/next-adapter');
const withTM = require('next-transpile-modules')([
  'react-native',
  'react-native-web',
  '@react-native/assets-registry'
]);
const path = require('path');

const nextConfig = withTM(
  withExpo({
    reactStrictMode: true,
    swcMinify: true,
    transpilePackages: [
      'react-native',
      'expo',
      Add more React Native / Expo packages here...
    ],
    experimental: {
      forceSwcTransforms: true,
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      });

      Add alias configuration
      config.resolve.alias = {
        ...config.resolve.alias,
        '@assets': path.resolve(__dirname, 'assets'),
        '@local_modules': path.resolve(__dirname, 'local_modules'),
      };

      return config;
    },
  })
);

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
/assets
  /svg
    logo.svg
/components
  images.tsx
/pages
  index.tsx
```

### 7. 코드 수정

경로 별칭을 사용하여 SVG 파일을 불러옵니다.

#### `components/images.tsx`

```typescript
import SvgLogo from '@assets/svg/logo.svg';

export {
  SvgLogo
};
```

#### `pages/index.tsx`

```typescript
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Div from '@local_modules/tags/Div';
import axios from 'axios';
import env from '@env';
import Input from '@local_modules/tags/Input';
import AppConfig from '@local_modules/AppConfig';
import { SvgLogo } from '../components/images';

export default function App() {
  const [message, setMessage] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const svgRef = useRef(null);

  const onEnter = (e: any) => {
    axios.post(`${env.LOCAL_ADDRESS}/api/chat`, { message: message })
      .then((response) => setResponse(response.data.message))
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    if (svgRef.current) {
      const width = svgRef.current.width.baseVal.value;
      const height = svgRef.current.height.baseVal.value;
      console.log('SVG Width:', width);
      console.log('SVG Height:', height);
    }
  }, []);

  return (
    <AppConfig>
      <Div style={styles.container}>
        <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
        <Div style={styles.text}>{response}</Div>
        <Input value={message} onChange={(e) => setMessage(e.instance.value)} onEnter={onEnter} />
        <SvgLogo ref={svgRef} />
      </Div>
    </AppConfig>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center', 웹과 네이티브 모두 가운데 정렬
    fontSize: 20,
  },
  text: {
    margin: 10,
    fontFamily: 'Bold',
  },
});
```
