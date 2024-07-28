"use client";

import NextNative from '@local_modules/NextNative';
import '../theme/globals.css';
import AppTheme from '@theme/index';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <title>Your AI. Yoo</title>
      </head>
      <body>
        <NextNative theme={AppTheme}>
          {children}
        </NextNative>
      </body>
    </html>
  )
}