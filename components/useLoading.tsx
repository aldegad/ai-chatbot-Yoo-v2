import createStyle from "@local_modules/createStyle";
import { useModal } from "@local_modules/useModal";
import Div from "@local_modules/tags/Div";
import { color } from "@theme/index";
import { Platform, StyleSheet } from "react-native";
import WebView from "react-native-webview";

export type LoadingProps = {
  visible: boolean;
  onRequestClose: () => void
}
export default function useLoading() {
  const { createModal } = useModal();
  
  const createLoading = async () => {
    const loading = await createModal(
      <Div style={styles.container}>
        {
          Platform.OS === 'web' ?
          <iframe srcDoc={loadingHtml} style={{border: 'none', width: '100%', height: '100%'}}></iframe> :
          <WebView
            source={{ html: loadingHtml }}
            style={styles.webview}
            scrollEnabled={false}
            javaScriptEnabled={true}
          />
        }
      </Div>,
      {
        transparent: true,
        animationType: 'fade',
      }
    );
    return loading;
  };

  return { createLoading };
}

const styles = createStyle({
  container: {
    flex: 1,
    backgroundColor: color.backdrop,
  },
  webview: {
    backgroundColor: 'transparent',
  },
});

const loadingCSS = `
.loading {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 9999;
  justify-content: center;
  align-items: center;
}
.loader {
  width: 35px;
  height: 80px;
  position: relative;
}
.loader:after {
  content: "";
  position: absolute;
  inset: 0 0 20px;
  border-radius: 50px 50px 10px 10px;
  padding: 1px;
  background: linear-gradient(#ff4d80 33%,${color.primary} 0 66%, #01ddc7 0) content-box;
  --c:radial-gradient(farthest-side,#000 94%,#0000);
  -webkit-mask:
    linear-gradient(#0000 0 0),
    var(--c) -10px -10px,
    var(--c)  15px -14px,
    var(--c)   9px -6px,
    var(--c) -12px  9px,
    var(--c)  14px  9px,
    var(--c)  23px 27px,
    var(--c)  -8px 35px,
    var(--c)   50% 50%,
    linear-gradient(#000 0 0);
  mask:
    linear-gradient(#000 0 0),
    var(--c) -10px -10px,
    var(--c)  15px -14px,
    var(--c)   9px -6px,
    var(--c) -12px  9px,
    var(--c)  14px  9px,
    var(--c)  23px 27px,
    var(--c)  -8px 35px,
    var(--c)   50% 50%,
    linear-gradient(#0000 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude,add,add,add,add,add,add,add,add;
  -webkit-mask-repeat: no-repeat;
  animation: l3 3s infinite ;
}
.loader:before {
  content: "";
  position: absolute;
  inset: 50% calc(50% - 4px) 0;
  background: #e0a267;
  border-radius: 50px;
}
@keyframes l3 {
  0%   {-webkit-mask-size: auto,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0}
  10%  {-webkit-mask-size: auto,25px 25px,0 0,0 0,0 0,0 0,0 0,0 0,0 0}
  20%  {-webkit-mask-size: auto,25px 25px,25px 25px,0 0,0 0,0 0,0 0,0 0,0 0}
  30%  {-webkit-mask-size: auto,25px 25px,25px 25px,30px 30px,0 0,0 0,0 0,0 0,0 0}
  40%  {-webkit-mask-size: auto,25px 25px,25px 25px,30px 30px,30px 30px,0 0,0 0,0 0,0 0}
  50%  {-webkit-mask-size: auto,25px 25px,25px 25px,30px 30px,30px 30px,25px 25px,0 0,0 0,0 0}
  60%  {-webkit-mask-size: auto,25px 25px,25px 25px,30px 30px,30px 30px,25px 25px,25px 25px,0 0,0 0}
  70%  {-webkit-mask-size: auto,25px 25px,25px 25px,30px 30px,30px 30px,25px 25px,25px 25px,25px 25px,0 0}
  80%,
  100% {-webkit-mask-size: auto,25px 25px,25px 25px,30px 30px,30px 30px,25px 25px,25px 25px,25px 25px,200% 200%}
}
`;

const loadingHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <style>
    ${loadingCSS}
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-color: transparent;
    }
    .loading {
      display: flex;
    }
  </style>
</head>
<body>
  <div class="loading">
    <div class="loader"></div>
  </div>
</body>
</html>
`;