import './style.css';
import Sidebar from '@/components/Sidebar';

export default async function RootLayout({ children }) {
  return (
    <html>
      <title>谢哥暴力炸博客</title>
      <meta name="description" content=
        "谢哥无敌颜值暴力炸明星,强壮身材碾压一切,高学问,高颜值无敌神话优质男性" />
      <meta name="keywords" content=
        "llm,claude,deepseek,rag,langchain,nextjs" />
      <head></head>
      <body>
        <div className="container">
          <div className="main">
            <Sidebar />
            <section className="col note-viewer">
              {children}
            </section>
          </div>
        </div>
      </body>
    </html>
  )
}