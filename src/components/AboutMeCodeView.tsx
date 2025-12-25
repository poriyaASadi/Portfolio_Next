'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

// 🌿 تم سفارشی کاملاً سبز
const greenTheme = {
  'pre[class*="language-"]': {
    background: '#242424',
    color: '#e0f2e0', // متن اصلی سبز روشن
    fontFamily: '"Fira Code", "Consolas", monospace',
    fontSize: '0.875rem',
    lineHeight: '1.5',
    borderRadius: '0.75rem',
    padding: '1.25rem',
    margin: 0,
  },
  'code[class*="language-"]': {
    color: '#e0f2e0',
  },
  // کلیدها (property names)
  'attr-name': {
    color: '#a5d6a7', // سبز ملایم
    fontWeight: 'bold',
  },
  // مقادیر رشته‌ای
  'string': {
    color: '#c8e6c9', // سبز بسیار روشن
  },
  // اعداد
  'number': {
    color: '#81c784', // سبز متوسط
  },
  // آرایه‌ها، آکولادها، ویرگول‌ها
  'punctuation': {
    color: '#b2dfdb',
  },
  // نظرات
  'comment': {
    color: '#66bb6a',
    fontStyle: 'italic',
  },
  // کلیدواژه‌ها (مثل const)
  'keyword': {
    color: '#4caf50',
    fontWeight: 'bold',
  },
};

// 👇 اطلاعات شخصی خودت
const personalInfo = {
  fullName: "PORIYA ASADI",
  location: {
    city: "Abadan",
    country: "Iran"
  },
  age: 19,
  occupation: "Frontend Developer",
  interests: ["Game", "sport", "Music", "Photography"],
  bio: "Passionate 19-year-old computer science student and developer with 4 years of coding experience. When I'm not coding, you'll find me wrestling or hitting the gym — discipline and logic drive everything I do.",
  phone: "09391521440"
};

// تبدیل به کد JS خوانا
const formatAsJS = (obj: any): string => {
  return JSON.stringify(obj, null, 2)
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/"([^"]+)"/g, '"$1"');
};

const fullCode = `// 👨‍💻 About Me\nconst me = ${formatAsJS(personalInfo)};`;

export default function AboutMeCodeBlock() {
  return (
    <div className="mt-6 max-w-3xl overflow-x-hidden">
      <SyntaxHighlighter
        language="javascript"
        style={greenTheme}
        showLineNumbers
        wrapLines
        wrapLongLines
        lineNumberStyle={{
          color: '#81c784',
          paddingRight: '16px',
          userSelect: 'none',
          opacity: 0.8
        }}
        customStyle={{
          background: '#242424',
          padding: '1.25rem',
          borderRadius: '0.75rem'
        }}
      >
        {fullCode}
      </SyntaxHighlighter>
    </div>
  );
}