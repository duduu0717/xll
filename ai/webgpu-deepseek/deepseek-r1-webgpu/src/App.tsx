import { useEffect, useState, useRef } from "react";
import Progress from "./components/Progress";
import ArrowRightIcon from "./components/icons/ArrowRightIcon";
import StopIcon from "./components/icons/StopIcon";

const IS_WEBGPU_AVAILABLE = !!navigator.gpu;
const STICKY_SCROLL_THRESHOLD = 120;
const EXAMPLES = [
  "Solve the equation x^2 - 3x + 2 = 0",
  "Lily is three times older than her son. In 15 years, she will be twice as old as him. How old is she now?",
  "Write python code to compute the nth fibonacci number.",
];

function App() {
  // 创建一个指向 worker 对象的引用。
  const worker = useRef(null);

  const chatContainerRef = useRef(null);
  const textareaRef = useRef(null);

  // 模型加载与进度
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [progressItems, setProgressItems] = useState([]);
  const [isRunning, setIsRunning] = useState(false);// 正在生成

  // 输入与输出
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  function onEnter(message) {
    console.log(message);
    setMessages((prev) => [...prev, { role: "user", content: message }]);

  }

  function onInterrupt() {

  }

  useEffect(() => {
    if (!worker.current) { // 只实例化一次
      // html5 新特性
      worker.current = new Worker(new URL("./worker.js", import.meta.url), {
        type: "module", // 前端不是默认支持esm
      });
      // 消息通信
      worker.current.postMessage({ type: "check" }); // 做一次特性检测
    }

    const onMessageReceived = (e) => {
      switch (e.data.status) {
        // 下载
        case "loading":
          setStatus("loading");
          setLoadingMessage(e.data.data);
          break;
        // 初始一个下载文件
        case "initiate":
          // 给函数为了获得最新状态
          // 多个文件并发下载时进度回调频繁触发
          setProgressItems((prev) => [...prev, e.data]);
          break;
        // 下载进度
        case "progress":
          setProgressItems((prev) =>
            prev.map((item) => {
              if (item.file === e.data.file) {
                return { ...item, ...e.data };
              }
              return item;
            }),
          );
          break;
        // 下载完成
        case "done":
          // 模型文件加载完成：从列表中移除该进度项。
          setProgressItems((prev) =>
            prev.filter((item) => item.file !== e.data.file),
          );
          break;
        // 所有文件都下载了， ready 使用
        case "ready":
          setStatus("ready");
          break;
        // 开始生成
        case "start":
          break;
        // 流式 有内容到达
        case "update":
          break;
        // 生成完成
        case "complete":
          break;
        // worker 出错了
        case "error":
          setError(e.data.data);
          break;
      }
    }
    const onErrorReceived = (e) => {
      console.error("Worker error:", e);
    }
    worker.current.addEventListener("message", onMessageReceived);
    worker.current.addEventListener("error", onErrorReceived);
    return () => {
      worker.current.removeEventListener("message", onMessageReceived);
      worker.current.removeEventListener("error", onErrorReceived);
    };
  }, [])
  // 新增的message, 生成
  useEffect(() => {
    if (messages.filter((x) => x.role === "user").length === 0) {
      // 还没有用户消息：什么都不做。
      return;
    }
    if (messages.at(-1).role === "assistant") {
      // 如果最后一条消息来自 assistant（助手），则不更新
      return;
    }
    worker.current.postMessage({ type: "generate", data: messages });
  }, [messages])

  return (
    IS_WEBGPU_AVAILABLE ? (
      <div className="flex flex-col h-screen mx-auto items justify-end text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900">
        {status === null && messages.length === 0 && (
          <div className="h-full overflow-auto scrollbar-thin flex justify-center items-center flex-col relative">
            <div className="flex flex-col items-center mb-1 max-w-[400px] text-center">
              <img
                src="logo.png"
                width="80%"
                height="auto"
                className="block drop-shadow-lg bg-transparent"
              ></img>
              <h1 className="text-4xl font-bold mb-1">DeepSeek-R1 WebGPU</h1>
              <h2 className="font-semibold">
                A next-generation reasoning model that runs locally in your
                browser with WebGPU acceleration.
              </h2>
            </div>
            <div className="flex flex-col items-center px-4">
              <p className="max-w-[510px] mb-4">
                <br />
                You are about to load{" "}
                <a
                  href="https://huggingface.co/onnx-community/DeepSeek-R1-Distill-Qwen-1.5B-ONNX"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline"
                >
                  DeepSeek-R1-Distill-Qwen-1.5B
                </a>
                , a 1.5B parameter reasoning LLM optimized for in-browser
                inference. Everything runs entirely in your browser with{" "}
                <a
                  href="https://huggingface.co/docs/transformers.js"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  🤗&nbsp;Transformers.js
                </a>{" "}
                and ONNX Runtime Web, meaning no data is sent to a server. Once
                loaded, it can even be used offline. The source code for the demo
                is available on{" "}
                <a
                  href="https://github.com/huggingface/transformers.js-examples/tree/main/deepseek-r1-webgpu"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline"
                >
                  GitHub
                </a>
                .
              </p>
              {error && (
                <div className="text-red-500 text-center mb-2">
                  <p className="mb-1">
                    Unable to load model due to the following error:
                  </p>
                  <p className="text-sm">{error}</p>
                </div>
              )}
              <button
                className="border px-4 py-2 rounded-lg bg-blue-400 text-white hover:bg-blue-500 disabled:bg-blue-100 cursor-pointer disabled:cursor-not-allowed select-none"
                onClick={() => {
                  worker.current.postMessage({ type: "load" });
                  setStatus("loading");
                }}
                disabled={status !== null || error !== null}
              >
                Load model
              </button>
            </div>
          </div>
        )}
        {status === "loading" && (
          <>
            <div className="w-full max-w-[500px] text-left mx-auto p-4 bottom-0 mt-auto">
              <p className="text-center mb-1">{loadingMessage}</p>
              {progressItems.map(({ file, progress, total }, i) => (
                <Progress
                  key={i}
                  text={file}
                  percentage={progress}
                  total={total}
                />
              ))}
            </div>
          </>
        )}
        {status === "ready" && (
          <div
            ref={chatContainerRef}
            className="overflow-y-auto scrollbar-thin w-full flex flex-col items-center h-full"
          >

          </div>
        )}
        {/* 输入部分 */}
        <div className="mt-2 border border-gray-300 dark:bg-gray-700 rounded-lg w-[600px] max-w-[80%] max-h-[200px] mx-auto relative mb-3 flex">
          <textarea
            ref={textareaRef}
            className="scrollbar-thin w-[550px] dark:bg-gray-700 px-3 py-4 rounded-lg bg-transparent border-none outline-hidden text-gray-800 disabled:text-gray-400 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 disabled:placeholder-gray-200 resize-none disabled:cursor-not-allowed"
            placeholder="Type your message..."
            rows={1}
            value={input}
            disabled={status !== "ready"}
            title={status === "ready" ? "Model is ready" : "Model not loaded yet"}
            onKeyDown={(e) => {
              if (
                input.length > 0 &&
                !isRunning &&
                e.key === "Enter" &&
                !e.shiftKey
              ) {
                e.preventDefault(); // 阻止 Enter 键的默认行为
                onEnter(input);
              }
            }}
            onChange={(e) => setInput(e.target.value)}
          />
          {isRunning ? (
            <div className="cursor-pointer" onClick={onInterrupt}>
              <StopIcon className="h-8 w-8 p-1 rounded-md text-gray-800 dark:text-gray-100 absolute right-3 bottom-3" />
            </div>
          ) : input.length > 0 ? (
            <div className="cursor-pointer" onClick={() => onEnter(input)}>
              <ArrowRightIcon
                className={`h-8 w-8 p-1 bg-gray-800 dark:bg-gray-100 text-white dark:text-black rounded-md absolute right-3 bottom-3`}
              />
            </div>
          ) : (
            <div>
              <ArrowRightIcon
                className={`h-8 w-8 p-1 bg-gray-200 dark:bg-gray-600 text-gray-50 dark:text-gray-800 rounded-md absolute right-3 bottom-3`}
              />
            </div>
          )}
        </div>
      </div>
    ) : (
      <div className="fixed w-screen h-screen bg-black z-10 bg-opacity-[92%] text-white text-2xl font-semibold flex justify-center items-center text-center">
        WebGPU is not supported
        <br />
        by this browser :&#40;
      </div>
    )
  )
}

export default App
