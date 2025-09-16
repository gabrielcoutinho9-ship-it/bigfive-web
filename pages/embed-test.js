// pages/embed-test.js
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Importa a versão em português do teste
// O caminho é relativo à pasta "pages", por isso "./pt-br/test"
const TestPage = dynamic(() => import('./pt-br/test'), { ssr: false });

export default function EmbedTestPage() {
  return (
    <>
      <Head>
        {/* evita que o Google indexe essa versão duplicada */}
        <meta name="robots" content="noindex" />
      </Head>
      <div style={{ margin: 0, padding: 0 }}>
        <TestPage />
      </div>
    </>
  );
}
